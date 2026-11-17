#!/usr/bin/env bash
set -euo pipefail
if command -v google-chrome >/dev/null 2>&1; then
  CHROME=google-chrome
elif command -v chromium >/dev/null 2>&1; then
  CHROME=chromium
else
  echo "Chrome/Chromium not found on runner" >&2
  exit 1
fi
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
"$CHROME" --headless --no-sandbox --disable-dev-shm-usage --disable-gpu \
  --virtual-time-budget=4000 --dump-dom "file://$PWD/teacher-offline.html" > "$tmp/offline.html" 2>"$tmp/chrome.log"
# data-load buttons exist only after dynamic library was constructed by script.
grep -q 'data-load="0"' "$tmp/offline.html"
grep -q 'id="lessonBody"' "$tmp/offline.html"
"$CHROME" --headless --no-sandbox --disable-dev-shm-usage --disable-gpu \
  --virtual-time-budget=3500 --dump-dom "file://$PWD/teacher.html" > "$tmp/teacher.html" 2>"$tmp/chrome2.log"
grep -q 'id="authView"' "$tmp/teacher.html"
grep -q 'id="fallbackNotice"' "$tmp/teacher.html"
echo "Chrome browser rendered both Teacher Edition and offline preview."
