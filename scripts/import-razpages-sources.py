#!/usr/bin/env python3
"""Copy only the linear-function razpages source pages and their required local assets.

This is a source-mirroring tool, not the workbook renderer. It preserves original
source HTML/CSS/assets for traceability while preventing unrelated razpages HTML
pages from entering this repository.
"""
from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
from collections import deque
from pathlib import Path
from urllib.parse import unquote, urlsplit

HTML_REF_RE = re.compile(r"(?:src|href)\s*=\s*['\"]([^'\"]+)['\"]", re.I)
CSS_URL_RE = re.compile(r"url\(\s*(['\"]?)([^)'\"]+)\1\s*\)", re.I)
SKIP_SCHEMES = ("http://", "https://", "data:", "mailto:", "tel:", "javascript:", "#")


def page_numbers(manifest: dict) -> list[int]:
    nums: list[int] = []
    for r in manifest["ranges"]:
        start, end = int(r["fileStart"]), int(r["fileEnd"])
        nums.extend(range(start, end + 1))
    expected = int(manifest["sourceTopicCount"])
    if len(nums) != expected or len(set(nums)) != expected:
        raise SystemExit(f"manifest page-range mismatch: got {len(nums)} unique={len(set(nums))}, expected {expected}")
    return nums


def safe_local_ref(ref: str) -> str | None:
    ref = unquote(ref.strip())
    if not ref or ref.startswith(SKIP_SCHEMES):
        return None
    ref = urlsplit(ref).path
    if not ref or ref.endswith(".html") or ref.endswith(".htm"):
        # Navigation links may point outside the linear-function topic; HTML intake is manifest-only.
        return None
    return ref


def copy_file(source_root: Path, dest_root: Path, source_path: Path) -> Path:
    rel = source_path.relative_to(source_root)
    target = dest_root / rel
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source_path, target)
    return target


def refs_from_file(source_root: Path, source_path: Path) -> list[Path]:
    suffix = source_path.suffix.lower()
    if suffix not in {".html", ".htm", ".css"}:
        return []
    text = source_path.read_text(encoding="utf-8", errors="replace")
    raw_refs = HTML_REF_RE.findall(text) if suffix in {".html", ".htm"} else [m[1] for m in CSS_URL_RE.findall(text)]
    out: list[Path] = []
    for raw in raw_refs:
        ref = safe_local_ref(raw)
        if ref is None:
            continue
        candidate = (source_path.parent / ref).resolve()
        try:
            candidate.relative_to(source_root.resolve())
        except ValueError:
            continue
        if candidate.is_file():
            out.append(candidate)
    return out


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--source", required=True, type=Path)
    ap.add_argument("--repo", default=Path.cwd(), type=Path)
    args = ap.parse_args()

    repo = args.repo.resolve()
    source = args.source.resolve()
    manifest_path = repo / "data" / "razpages-linear-manifest.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    nums = page_numbers(manifest)
    dest = repo / "sources" / "razpages-linear"
    dest.mkdir(parents=True, exist_ok=True)

    # Remove only the managed mirror before recreating it, so stale source assets cannot survive.
    for child in list(dest.iterdir()):
        if child.name == ".gitkeep":
            continue
        if child.is_dir():
            shutil.rmtree(child)
        else:
            child.unlink()

    html_sources: list[Path] = []
    for n in nums:
        src = source / f"עמוד-{n}.html"
        if not src.is_file():
            raise SystemExit(f"missing required source page: {src.name}")
        copy_file(source, dest, src)
        html_sources.append(src)

    # Copy only assets reachable from the selected HTML/CSS files. Never follow HTML navigation.
    queue: deque[Path] = deque(html_sources)
    seen: set[Path] = set(html_sources)
    copied_assets: set[Path] = set()
    needs_mathjax_tree = False

    while queue:
        current = queue.popleft()
        text = current.read_text(encoding="utf-8", errors="replace") if current.suffix.lower() in {".html", ".htm", ".css"} else ""
        if "vendor/mathjax/" in text:
            needs_mathjax_tree = True
        for asset in refs_from_file(source, current):
            if asset in seen:
                continue
            seen.add(asset)
            copy_file(source, dest, asset)
            copied_assets.add(asset)
            if asset.suffix.lower() == ".css":
                queue.append(asset)

    # MathJax loads font files dynamically from the configured local fontURL; preserve that runtime tree.
    if needs_mathjax_tree:
        mathjax_root = source / "vendor" / "mathjax"
        if not mathjax_root.is_dir():
            raise SystemExit("selected pages reference vendor/mathjax but source directory is missing")
        target = dest / "vendor" / "mathjax"
        if target.exists():
            shutil.rmtree(target)
        shutil.copytree(mathjax_root, target)

    source_commit = subprocess.check_output(["git", "-C", str(source), "rev-parse", "HEAD"], text=True).strip()
    support_files = sum(1 for p in dest.rglob("*") if p.is_file()) - len(nums)
    manifest.update({
        "status": "physical-copy-complete",
        "targetRoot": "sources/razpages-linear",
        "importedPageCount": len(nums),
        "supportFileCount": support_files,
        "sourceCommit": source_commit,
        "importPolicy": "manifest HTML only + referenced local assets; HTML navigation is never followed"
    })
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Imported {len(nums)} linear-function HTML pages and {support_files} support files from {source_commit}.")


if __name__ == "__main__":
    main()
