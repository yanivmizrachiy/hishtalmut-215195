import fs from 'node:fs';
import path from 'node:path';
import { pages as dataPages } from '../content/page-definitions.mjs';

const ROOT = process.cwd();
const allowedResponse = new Set(['choice-mark','short','equation','lines-2','lines-4','full-work','explanation','table-cell','graph-draw','geometry-work','mixed']);
const ids = new Set();
const errors = [];

function validateGraph(g, owner){
  if (!(g.xMin < g.xMax && g.yMin < g.yMax)) errors.push(`${owner}: invalid graph bounds`);
  for (const ln of g.lines || []) {
    if (!ln.through || ln.through.length !== 2) errors.push(`${owner}: line must have two defining points`);
    else if (ln.through[0][0] === ln.through[1][0]) errors.push(`${owner}: vertical line cannot be rendered by linear-function slope renderer`);
  }
  for (const raw of g.points || []) {
    const x = Array.isArray(raw) ? raw[0] : raw.x;
    const y = Array.isArray(raw) ? raw[1] : raw.y;
    if (!Number.isFinite(x) || !Number.isFinite(y)) errors.push(`${owner}: graph point must contain finite x,y coordinates`);
    if (x < g.xMin || x > g.xMax || y < g.yMin || y > g.yMax) errors.push(`${owner}: graph point (${x},${y}) is outside graph bounds`);
  }
  for (const stepPoint of g.step || []) {
    if (!Array.isArray(stepPoint) || stepPoint.length !== 2 || !stepPoint.every(Number.isFinite)) errors.push(`${owner}: invalid slope-step point`);
  }
}

// מקור אמת יחיד ונקודת כניסה קבועה.
const truthPath = path.join(ROOT, 'SOURCE_OF_TRUTH.md');
const readmePath = path.join(ROOT, 'README.md');
if (!fs.existsSync(truthPath)) errors.push('Missing SOURCE_OF_TRUTH.md at repository root');
if (fs.existsSync(path.join(ROOT, 'RULES.md'))) errors.push('RULES.md exists: repository must have one source of truth only');
if (!fs.existsSync(readmePath) || !fs.readFileSync(readmePath, 'utf8').includes('SOURCE_OF_TRUTH.md')) errors.push('README.md must point explicitly to SOURCE_OF_TRUTH.md');

// מאמת את כל הדפים שכבר הועברו למודל הנתונים.
for (const p of dataPages) {
  let prev = -Infinity;
  if (!Number.isInteger(p.page) || p.page < 1) errors.push(`Invalid page number: ${p.page}`);
  if (!p.title || p.chapter === undefined || p.chapter === null) errors.push(`Page ${p.page}: missing title/chapter`);
  if (!Array.isArray(p.questions) || !p.questions.length) errors.push(`Page ${p.page}: no questions`);
  if (p.graph) validateGraph(p.graph, `Page ${p.page} shared graph`);
  for (const q of p.questions || []) {
    if (ids.has(q.id)) errors.push(`Duplicate question id ${q.id}`); else ids.add(q.id);
    if (!q.family) errors.push(`${q.id}: missing family`);
    if (!Number.isFinite(q.level) || q.level < 1 || q.level > 10) errors.push(`${q.id}: invalid level`);
    if (q.level < prev) errors.push(`Page ${p.page}: difficulty decreases at ${q.id}`);
    prev = q.level;
    if (!allowedResponse.has(q.responseSpace)) errors.push(`${q.id}: invalid responseSpace ${q.responseSpace}`);
    if (!q.stem) errors.push(`${q.id}: missing stem`);
    if (q.graph) validateGraph(q.graph, q.id);
    for (const [index, sp] of (q.subparts || []).entries()) {
      if (!sp.text) errors.push(`${q.id} subpart ${index + 1}: missing text`);
      if (!allowedResponse.has(sp.responseSpace || 'short')) errors.push(`${q.id} subpart ${index + 1}: invalid responseSpace ${sp.responseSpace}`);
    }
  }
}

// מאמת manifest, רצף עמודים, ניווט ומרחבי תשובה בפלטים בפועל.
const manifestPath = path.join(ROOT, 'meta', 'pages.json');
if (!fs.existsSync(manifestPath)) {
  errors.push('Missing meta/pages.json');
} else {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const total = manifest.generatedPages;
  if (!Number.isInteger(total) || total < 1) errors.push('meta/pages.json: generatedPages must be a positive integer');
  if (!Array.isArray(manifest.pages) || manifest.pages.length !== total) errors.push(`Manifest count mismatch: generatedPages=${total}, entries=${manifest.pages?.length ?? 0}`);
  const manifestNumbers = (manifest.pages || []).map(p => p.page);
  for (let n = 1; n <= total; n++) {
    if (!manifestNumbers.includes(n)) errors.push(`Manifest missing page ${n}`);
    const file = path.join(ROOT, `עמוד-${n}.html`);
    if (!fs.existsSync(file)) { errors.push(`Missing page file עמוד-${n}.html`); continue; }
    const html = fs.readFileSync(file, 'utf8');
    if (!html.includes(`data-page="${n}"`)) errors.push(`Page ${n}: wrong or missing data-page`);
    if (!html.includes(`עמוד ${n} / ${total}`)) errors.push(`Page ${n}: navigation total is stale; expected עמוד ${n} / ${total}`);
    const exerciseCount = (html.match(/class="exercise"/g) || []).length;
    const responseCount = (html.match(/data-response=/g) || []).length;
    if (exerciseCount !== responseCount) errors.push(`Page ${n}: ${exerciseCount} exercises but ${responseCount} responseSpace declarations`);
    if (!html.includes('styles/a4-base.css')) errors.push(`Page ${n}: does not use shared A4 stylesheet`);
  }
}

if (errors.length) {
  console.error(`QA FAILED (${errors.length} issue(s))`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`QA passed: ${ids.size} data-driven questions; source-of-truth, graph data, manifest, page sequence, navigation, response spaces and shared A4 stylesheet are consistent.`);
