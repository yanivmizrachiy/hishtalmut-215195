#!/data/data/com.termux/files/usr/bin/bash
set -e
cd ~/hishtalmut-215195
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/yanivmizrachiy/hishtalmut-215195.git
git push -u origin main
if command -v gh >/dev/null 2>&1; then
  gh api repos/yanivmizrachiy/hishtalmut-215195/pages -X POST -f source[branch]=main -f source[path]=/ 2>/dev/null || true
  gh api repos/yanivmizrachiy/hishtalmut-215195/pages || true
fi
echo "PAGES_URL=https://yanivmizrachiy.github.io/hishtalmut-215195/"
