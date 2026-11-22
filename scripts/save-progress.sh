#!/usr/bin/env bash
# Validates the curriculum, typechecks, then commits and pushes. Stops on any failure.
#   scripts/save-progress.sh "commit message"
set -euo pipefail
cd "$(dirname "$0")/.."
node scripts/tidy-imports.mjs
node scripts/build-curriculum.ts
npx tsc --noEmit -p .
git add -A
git -c user.name="Siddhesh Dandekar" -c user.email="dandekar.siddhesh@gmail.com" commit -q -m "$1

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_015Uq3Laz97biSsQSrtE3qQF"
git push -q
git log --oneline -1
