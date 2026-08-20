$ErrorActionPreference = "Stop"
Set-Location -LiteralPath $PSScriptRoot

function Assert-LastExitCode([string]$Step) {
    if ($LASTEXITCODE -ne 0) { throw "$Step failed with exit code $LASTEXITCODE" }
}

Write-Host "[1/7] Checking required tools..."
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw "git is required" }
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw "Node.js is required" }
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) { throw "npm is required" }
if (-not (Test-Path -LiteralPath ".\SOURCE_OF_TRUTH.md")) { throw "SOURCE_OF_TRUTH.md is missing from repository root" }
if (Test-Path -LiteralPath ".\RULES.md") { throw "RULES.md exists; project must have exactly one source of truth" }

Write-Host "[2/7] Installing temporary Chromium QA dependency..."
npm install --no-save --no-package-lock playwright
Assert-LastExitCode "npm install playwright"
npx playwright install chromium
Assert-LastExitCode "playwright chromium install"

Write-Host "[3/7] Building data-driven pages..."
npm run build
Assert-LastExitCode "page build"

Write-Host "[4/7] Running structural/content QA..."
npm run validate
Assert-LastExitCode "structural QA"

Write-Host "[5/7] Rendering every A4 page in real Chromium..."
node .\scripts\visual-qa.mjs
Assert-LastExitCode "visual A4 QA"

Write-Host "[6/7] Checking that Git did not reveal accidental generated-source changes..."
git status --short
Assert-LastExitCode "git status"

Write-Host "[7/7] QA PASSED."
Write-Host "Pages checked: see meta/pages.json"
Write-Host "Visual report: qa/report.json"
Write-Host "Screenshots: qa/screenshots/"
