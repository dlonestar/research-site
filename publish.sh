#!/bin/bash
# ═══════════════════════════════════════════════
# Star Research — One-click publish pipeline
# 1. Sync publish:true notes from vault
# 2. Git commit + push
# 3. GitHub Actions auto-builds and deploys
# ═══════════════════════════════════════════════

set -e
cd "$(dirname "$0")"

echo "🔄 Step 1: Syncing content from vault..."
node sync-content.mjs

echo ""
echo "📦 Step 2: Committing changes..."
git add -A
git diff --cached --quiet && echo "  No changes to publish." && exit 0
git commit -m "publish: $(date '+%Y-%m-%d %H:%M') content update"

echo ""
echo "🚀 Step 3: Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Published! GitHub Actions will build and deploy in ~1-2 minutes."
echo "🌐 https://research.dlonestar.com"
