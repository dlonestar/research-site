/**
 * Content Sync: Vault → Quartz
 * Copies only publish:true notes from Obsidian vault to Quartz content/
 * Works on both Windows and Mac.
 *
 * Usage: node sync-content.mjs
 */

import { readFileSync, copyFileSync, mkdirSync, rmSync, readdirSync, existsSync } from 'fs'
import { join, dirname, relative } from 'path'
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

function hasPublishTrue(path) {
  try {
    const head = readFileSync(path, 'utf-8').slice(0, 2000)
    if (!head.startsWith('---')) return false
    const end = head.indexOf('---', 3)
    if (end === -1) return false
    const fm = head.slice(3, end)
    // Match various Obsidian formats:
    //   publish: true
    //   publish: "true"
    //   publish:\n  - true
    //   publish:\n  - "true"
    return /^publish:\s*true/m.test(fm) ||
           /^publish:\s*"true"/m.test(fm) ||
           /^publish:\s*\n\s*-\s*"?true"?/m.test(fm)
  } catch { return false }
}

let copied = 0, skipped = 0
for (const file of walkDir(VAULT_ROOT)) {
  if (hasPublishTrue(file)) {
    const rel = relative(VAULT_ROOT, file)
    const target = join(CONTENT_DIR, rel)
    mkdirSync(dirname(target), { recursive: true })
    copyFileSync(file, target)
    console.log(`  ✅ ${rel}`)
    copied++
  } else {
    skipped++
  }
}

console.log(`\n✅ Sync complete: ${copied} published, ${skipped} skipped`)
