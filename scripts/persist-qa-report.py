#!/usr/bin/env python3
from __future__ import annotations

import json
import os
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path.cwd()
REPORT = ROOT / "qa" / "report.json"
LOG = ROOT / "qa-run.log"
MANIFEST = ROOT / "meta" / "pages.json"
LATEST = ROOT / "meta" / "visual-qa-latest.json"

outcome = os.environ.get("QA_OUTCOME", "unknown")
manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
report = json.loads(REPORT.read_text(encoding="utf-8")) if REPORT.exists() else None
log_tail = ""
if LOG.exists():
    lines = LOG.read_text(encoding="utf-8", errors="replace").splitlines()
    log_tail = "\n".join(lines[-160:])

result_by_page = {}
if report:
    for item in report.get("results", []):
        result_by_page[int(item["page"])] = item

verified = 0
for page in manifest.get("pages", []):
    item = result_by_page.get(int(page["page"]))
    if item is not None and not item.get("errors"):
        # visual-qa runs only after build + structural validation passed.
        page["qa"] = "verified"
        verified += 1
    else:
        page["qa"] = "data-driven-pending-visual" if item is None else "visual-qa-failed"

manifest["verifiedPages"] = verified
if outcome == "success" and report and report.get("hardErrors") == 0 and verified == manifest.get("generatedPages"):
    manifest["status"] = "qa-passed"
else:
    manifest["status"] = "qa-failed" if report else "qa-failed-before-visual"

stamp = datetime.now(timezone.utc).isoformat()
manifest["lastVisualQa"] = {
    "generatedAt": report.get("generatedAt") if report else stamp,
    "pipelineOutcome": outcome,
    "verifiedPages": verified,
    "report": "meta/visual-qa-latest.json"
}
MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

latest = {
    "recordedAt": stamp,
    "pipelineOutcome": outcome,
    "reportAvailable": report is not None,
    "verifiedPages": verified,
    "generatedPages": manifest.get("generatedPages"),
    "visualReport": report,
    "logTail": log_tail
}
LATEST.write_text(json.dumps(latest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Persisted QA evidence: outcome={outcome}, verified={verified}/{manifest.get('generatedPages')}")
