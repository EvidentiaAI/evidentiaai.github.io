#!/usr/bin/env bash
# deploy-gh-pages.sh
# Clean, build, export, move to docs, and push to GitHub for GitHub Pages.

set -euo pipefail

# --- Params ---
MSG="${1:-}"
if [[ -z "$MSG" ]]; then
  echo "Usage: $0 \"Commit message\""
  exit 1
fi

# --- Sanity checks ---
if ! command -v git >/dev/null 2>&1; then
  echo "Error: git is not installed or not on PATH." >&2
  exit 1
fi
if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is not installed or not on PATH." >&2
  exit 1
fi
if [[ ! -f package.json ]]; then
  echo "Error: package.json not found. Run this from your Next.js project root." >&2
  exit 1
fi
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: not inside a git repository." >&2
  exit 1
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if ! git remote get-url origin >/dev/null 2>&1; then
  echo "Error: no 'origin' remote configured." >&2
  exit 1
fi

# --- Clean previous builds ---
echo "➤ Cleaning old build artifacts..."
rm -rf .next out docs

# --- Build & Export ---
# Supports both modern 'output: \"export\"' (which puts static files in 'out' on build)
# and classic 'next export' flows.
echo "➤ Building the project (npm run build)..."
npm run build

# If 'out' doesn't exist after build, try an explicit export.
if [[ ! -d out ]]; then
  echo "➤ 'out' not found after build; attempting export..."
  # Prefer an npm script if present
  if jq -e '.scripts.export' package.json >/dev/null 2>&1; then
    npm run export
  else
    # Fallback to direct export
    npx --yes next export
  fi
fi

# Validate that 'out' now exists
if [[ ! -d out ]]; then
  echo "Error: static export directory 'out' was not created."
  echo "Hints:"
  echo "  • On Next.js 13+, ensure next.config.js has:  module.exports = { output: 'export' }"
  echo "  • Or add an export script:  \"export\": \"next export\"  and run it."
  exit 1
fi

# --- Move to docs and add .nojekyll ---
echo "➤ Moving 'out' to 'docs' and creating .nojekyll..."
mv out docs
touch docs/.nojekyll

# --- Commit & Push ---
echo "➤ Staging 'docs'..."
git add -A docs

# If there are no changes, don't fail the script
if git diff --cached --quiet; then
  echo "➤ No changes to commit in 'docs'. Skipping commit."
else
  echo "➤ Committing..."
  git commit -m "$MSG"
fi

echo "➤ Pushing to origin/$CURRENT_BRANCH..."
git push origin "$CURRENT_BRANCH"

echo "✅ Done. Your GitHub Pages content is in 'docs/'."
