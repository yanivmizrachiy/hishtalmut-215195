// Zero-loss guard: a multi-part razpages source item may not be closed by
// identity alone.
//
// validate-unification.mjs treats an item as finalized as soon as one canonical
// question carries a matching RZ<page>-Q<question> id + sourceRef. For a source
// question built from many sub-questions that is too generous: transferring 3 of
// 6 subparts would silently count the whole item as closed, which is exactly the
// partial-transfer loss SOURCE_OF_TRUTH.md forbids.
//
// Rule enforced here: any source item with >= MULTIPART_MIN sub-questions needs
// an explicit entry in data/razpages-question-disposition.json whose evidence
// states what happened to the sub-questions. Identity matching alone is not
// evidence for these items.
//
// Deliberately NOT gated on the audit's fuzzy subpart-coverage score: that score
// is triage only and is unreliable in both directions (a faithfully transferred
// item can score 0 when the wording is rephrased). Coverage is reported as
// advisory context, never as proof. Requires meta/razpages-source-audit-latest.json.
import fs from 'node:fs';
import path from 'node:path';
import { pages } from '../content/book-pages.mjs';

const ROOT = process.cwd();
const auditPath = path.join(ROOT, 'meta', 'razpages-source-audit-latest.json');
if (!fs.existsSync(auditPath)) {
  console.log('Razpages subpart-closure QA skipped: no audit evidence present (run npm run audit:razpages).');
  process.exit(0);
}
const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'));
const manual = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'razpages-question-disposition.json'), 'utf8'));
const manualFinalized = new Set(Object.keys(manual.finalized || {}));

// Source items with at least this many sub-questions require written evidence.
const MULTIPART_MIN = 3;

const itemById = new Map();
for (const record of audit.records || []) {
  for (const item of record.sourceItems || []) itemById.set(item.id, item);
}

// Same derivation rule as validate-unification.mjs.
const derived = new Map();
for (const page of pages) {
  for (const q of page.questions || []) {
    const id = String(q?.id || '');
    const match = id.match(/^RZ(\d+)-Q(\d+)(?:[A-Z][A-Z0-9]*)?(?:-|$)/);
    if (!match) continue;
    const sourcePage = Number(match[1]);
    const sourceQuestion = Number(match[2]);
    const sourceRef = String(q?.sourceRef || '');
    if (!sourceRef.includes(`razpages:עמוד-${sourcePage}.html`)) continue;
    if (!new RegExp(`שאלה\\s*${sourceQuestion}(?:\\D|$)`).test(sourceRef)) continue;
    const itemId = `razpages:${sourcePage}:q${sourceQuestion}`;
    if (!derived.has(itemId)) derived.set(itemId, []);
    derived.get(itemId).push({ bookPage: page.page, questionId: id });
  }
}

const errors = [];
let checked = 0;
let singlePart = 0;
let documented = 0;
for (const [itemId, refs] of derived) {
  const item = itemById.get(itemId);
  if (!item) continue;
  checked += 1;
  const subpartCount = (item.sourceSubparts || []).length;
  if (subpartCount < MULTIPART_MIN) { singlePart += 1; continue; }
  if (manualFinalized.has(itemId)) { documented += 1; continue; }
  const coverage = item.unionCoverage?.subpartCoverage;
  const advisory = coverage == null
    ? 'no coverage measurement'
    : `advisory fuzzy coverage ${item.unionCoverage.coveredSubpartCount}/${item.unionCoverage.sourceSubpartCount}`;
  errors.push(`${itemId}: source item has ${subpartCount} sub-questions and is closed by identity alone (${advisory}). Add an explicit data/razpages-question-disposition.json entry stating what happened to every sub-question. Canonical: ${refs.map(r => `${r.questionId}@p${r.bookPage}`).join(', ')}`);
}

if (errors.length) {
  console.error(`RAZPAGES SUBPART CLOSURE QA FAILED (${errors.length})`);
  for (const e of errors) console.error(e);
  console.error('\nEach item above needs its sub-questions checked against the pinned source, then either the missing sub-questions transferred or an explicit disposition with written evidence recorded.');
  process.exit(1);
}
console.log(`Razpages subpart-closure QA passed: ${checked} identity-derived closure(s) checked; ${singlePart} single-part item(s) closed by identity, ${documented} multi-part item(s) backed by explicit written evidence.`);
