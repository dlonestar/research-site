#!/bin/bash
# ═══════════════════════════════════════════════
# Content Sync: Vault → Quartz
# Copies only publish:true notes from Obsidian vault to Quartz content/
# ═══════════════════════════════════════════════

set -e

VAULT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
QUARTZ_CONTENT="$(dirname "$0")/content"

echo "📁 Vault: $VAULT_ROOT"
echo "📁 Quartz content: $QUARTZ_CONTENT"

# Clean previous content (except index.md which we manage)
rm -rf "$QUARTZ_CONTENT"
mkdir -p "$QUARTZ_CONTENT"

# Counter
COPIED=0
SKIPPED=0

# Find all .md files in vault (excluding system dirs)
find "$VAULT_ROOT" \
  -name "*.md" \
  -not -path "*/.obsidian/*" \
  -not -path "*/.automation/*" \
  -not -path "*/.automation-git/*" \
  -not -path "*/.website/*" \
  -not -path "*/node_modules/*" \
  -not -path "*/00 Dashboard/*" \
  -not -path "*/01 System/*" \
  -not -path "*/02 Event Log/*" \
  -not -path "*/80 Templates/*" \
  -not -path "*/90 Data/*" \
  | while read -r file; do

  # Check if file has publish: true in frontmatter
  if head -50 "$file" | grep -q "^publish: true"; then
    # Get relative path from vault root
    rel_path="${file#$VAULT_ROOT/}"

    # Create target directory
    target_dir="$QUARTZ_CONTENT/$(dirname "$rel_path")"
    mkdir -p "$target_dir"

    # Copy file
    cp "$file" "$QUARTZ_CONTENT/$rel_path"
    echo "  ✅ $rel_path"
    COPIED=$((COPIED + 1))
  else
    SKIPPED=$((SKIPPED + 1))
  fi
done

echo ""
echo "✅ Sync complete: ${COPIED:-0} published, ${SKIPPED:-0} skipped"
