$ErrorActionPreference = "Stop"
Set-Location -LiteralPath $PSScriptRoot

function Assert-LastExitCode([string]$Step) {
    if ($LASTEXITCODE -ne 0) { throw "$Step failed with exit code $LASTEXITCODE" }
}

Write-Host "[1/8] Checking required tools..."
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw "git is required" }
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw "Node.js is required" }
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) { throw "npm is required" }
if (-not (Test-Path -LiteralPath ".\.git")) { throw "qa-all.ps1 must be run from the workbook repository" }

Write-Host "[2/8] Syncing latest main from GitHub..."
git fetch origin main
Assert-LastExitCode "git fetch origin main"
git checkout main
Assert-LastExitCode "git checkout main"
git pull --ff-only origin main
Assert-LastExitCode "git pull --ff-only origin main"

if (-not (Test-Path -LiteralPath ".\SOURCE_OF_TRUTH.md")) { throw "SOURCE_OF_TRUTH.md is missing from repository root" }
if (Test-Path -LiteralPath ".\RULES.md") { throw "RULES.md exists; project must have exactly one source of truth" }

Write-Host "[3/8] Installing pinned workbook dependencies and Chromium..."
npm install --no-package-lock
Assert-LastExitCode "npm install"
npx playwright install chromium
Assert-LastExitCode "playwright chromium install"

Write-Host "[4/8] Building and normalizing every workbook page..."
npm run build
Assert-LastExitCode "page build"

Write-Host "[5/8] Running structural/content/exact-math/regression QA..."
npm run validate
Assert-LastExitCode "structural QA"

Write-Host "[6/8] Running canonical Chromium A4 + visual regression QA..."
npm run qa:visual
Assert-LastExitCode "visual A4 and regression QA"

Write-Host "[7/8] Showing generated changes, if any..."
git status --short
Assert-LastExitCode "git status"

Write-Host "[8/8] QA PASSED."
Write-Host "Pages checked: see meta/pages.json"
Write-Host "Canonical evidence: meta/visual-qa-latest.json"
Write-Host "Screenshots: qa/screenshots/"
