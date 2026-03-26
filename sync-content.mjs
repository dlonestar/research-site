/**
 * Content Sync: Vault → Quartz
 * 1. Copies only publish:true notes from Obsidian vault to Quartz content/
 * 2. Auto-generates index.md homepage with correct links to synced files
 *
 * Works on both Windows and Mac.
 * Usage: node sync-content.mjs
 */

import { readFileSync, writeFileSync, copyFileSync, mkdirSync, rmSync, readdirSync, existsSync } from 'fs'
import { join, dirname, relative, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const VAULT_ROOT = join(__dirname, '..')
const CONTENT_DIR = join(__dirname, 'content')

const EXCLUDE_DIRS = new Set([
  '.obsidian', '.automation', '.automation-git', '.website', '.git',
  'node_modules', '00 Dashboard', '01 System', '02 Event Log',
  '80 Templates', '90 Data',
])

console.log(`📁 Vault: ${VAULT_ROOT}`)
console.log(`📁 Content: ${CONTENT_DIR}`)

// Clean
if (existsSync(CONTENT_DIR)) rmSync(CONTENT_DIR, { recursive: true })
mkdirSync(CONTENT_DIR, { recursive: true })

function walkDir(dir) {
  const files = []
  try {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) {
        if (!EXCLUDE_DIRS.has(entry.name) && !entry.name.startsWith('.')) {
          files.push(...walkDir(full))
        }
      } else if (entry.name.endsWith('.md')) {
        files.push(full)
      }
    }
  } catch { /* skip */ }
  return files
}

function parseFrontmatter(path) {
  try {
    const head = readFileSync(path, 'utf-8').slice(0, 3000)
    if (!head.startsWith('---')) return null
    const end = head.indexOf('---', 3)
    if (end === -1) return null
    const fm = head.slice(3, end)

    // Check publish: true (various Obsidian formats)
    const isPublish =
      /^publish:\s*true/m.test(fm) ||
      /^publish:\s*"true"/m.test(fm) ||
      /^publish:\s*\n\s*-\s*"?true"?/m.test(fm)

    if (!isPublish) return null

    // Extract metadata
    const type = fm.match(/^type:\s*(.+)/m)?.[1]?.trim() || ''
    const title = fm.match(/^title:\s*(.+)/m)?.[1]?.trim() || ''
    const date = fm.match(/^date:\s*(.+)/m)?.[1]?.trim() || ''

    return { type, title, date }
  } catch { return null }
}

// ─── Sync files ───
const published = [] // { relPath, filename, type, title, date }
let copied = 0, skipped = 0

for (const file of walkDir(VAULT_ROOT)) {
  // Skip index.md (we generate our own)
  if (basename(file) === 'index.md' && dirname(file) === VAULT_ROOT) {
    skipped++
    continue
  }

  const meta = parseFrontmatter(file)
  if (meta) {
    const rel = relative(VAULT_ROOT, file)
    const target = join(CONTENT_DIR, rel)
    mkdirSync(dirname(target), { recursive: true })
    copyFileSync(file, target)
    console.log(`  ✅ ${rel}`)

    published.push({
      relPath: rel.replace(/\\/g, '/'),
      filename: basename(file, '.md'),
      type: meta.type,
      title: meta.title,
      date: meta.date,
    })
    copied++
  } else {
    skipped++
  }
}

// ─── Auto-generate index.md ───
const TYPE_SECTIONS = [
  { key: 'briefing', icon: '📰', label: 'Morning Briefing', desc: '매일 발행. 글로벌 시장 동향, 시장 센티먼트, 테마 딥다이브, Must-Read 3선.' },
  { key: 'scan', icon: '⚡', label: 'Inflection Scan', desc: '시장 변곡점 탐지. 구조적 변화 시그널 포착.' },
  { key: 'deal-sourcing', icon: '📊', label: 'Deal Analysis', desc: '투자 기회 발굴. 비대칭 업사이드 중심 스크리닝 → BUY/WATCH/PASS 판정.' },
  { key: 'deep', icon: '🔬', label: 'Deep & Final Analysis', desc: '기업/섹터 심층 분석. 25-80 페이지.' },
  { key: 'thesis', icon: '🎯', label: 'Investment Thesis', desc: '핵심 투자 테시스. Kill Criteria, Conviction 추적.' },
  { key: '_other', icon: '📂', label: 'Insights & Archives', desc: '유튜브 분석, PDF 리서치, 미팅 노트, 아이디어 메모 등.' },
]

// Known type keys (everything else goes to _other)
const KNOWN_KEYS = new Set(['briefing', 'scan', 'deal-sourcing', 'deep', 'thesis'])

// Group published files by type
const byType = {}
for (const p of published) {
  // Map to section key
  let key = p.type
  if (['deep-company', 'deep-research', 'final-company', 'final-research'].includes(key)) key = 'deep'
  if (['inflection-scan'].includes(key)) key = 'scan'
  // Everything not in known categories → _other
  if (!KNOWN_KEYS.has(key)) key = '_other'
  if (!byType[key]) byType[key] = []
  byType[key].push(p)
}

// Sort each group by date desc
for (const key of Object.keys(byType)) {
  byType[key].sort((a, b) => b.date.localeCompare(a.date))
}

// Build index.md
let index = `---
title: Star Research
publish: true
---

> *"The stock market is a device for transferring money from the impatient to the patient."*  — Warren Buffett

> *"Spend each day trying to be a little wiser than you were when you woke up."*  — Charlie Munger

---

`

for (const section of TYPE_SECTIONS) {
  const items = byType[section.key] || []

  index += `## ${section.icon} ${section.label}\n\n`
  index += `> ${section.desc}\n\n`

  if (items.length === 0) {
    index += `*게시된 리포트가 없습니다.*\n\n`
  } else {
    for (const item of items.slice(0, 30)) {
      const display = item.title || item.filename
      index += `- [[${item.filename}|${item.date} ${display}]]\n`
    }
    index += '\n'
  }

  index += '---\n\n'
}

writeFileSync(join(CONTENT_DIR, 'index.md'), index, 'utf-8')
console.log(`  📄 index.md 자동 생성 (${published.length}개 리포트)`)

console.log(`\n✅ Sync complete: ${copied} published, ${skipped} skipped`)
