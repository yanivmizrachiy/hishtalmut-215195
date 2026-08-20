import fs from 'node:fs';
import path from 'node:path';
import { pages as corePages } from '../content/page-definitions.mjs';
import { pages as pages05to06 } from '../content/pages-05-06.mjs';
import { pages as pages07to10 } from '../content/pages-07-10.mjs';

const dataPages=[...corePages,...pages05to06,...pages07to10].sort((a,b)=>a.page-b.page);
const ROOT = process.cwd();
const allowedResponse = new Set(['choice-mark','short','equation','lines-2','lines-4','full-work','explanation','table-cell','graph-draw','geometry-work','mixed']);
const ids = new Set();
const errors = [];

function validateGraph(g, owner){
  if (!(g.xMin < g.xMax && g.yMin < g.yMax)) errors.push(`${owner}: invalid graph bounds`);
  if (g.xTick !== undefined && (!Number.isFinite(g.xTick) || g.xTick <= 0)) errors.push(`${owner}: xTick must be positive`);
  if (g.yTick !== undefined && (!Number.isFinite(g.yTick) || g.yTick <= 0)) errors.push(`${owner}: yTick must be positive`);
  for (const ln of g.lines || []) {
    if (!ln.through || ln.through.length !== 2) errors.push(`${owner}: line must have two defining points`);
    else if (ln.through[0][0] === ln.through[1][0]) errors.push(`${owner}: use verticalLines for vertical lines instead of slope renderer`);
  }
  for (const vx of g.verticalLines || []) {
    if (!Number.isFinite(vx)) errors.push(`${owner}: vertical line x must be finite`);
    else if (vx < g.xMin || vx > g.xMax) errors.push(`${owner}: vertical line x=${vx} is outside graph bounds`);
  }
  for (const [index,q] of (g.quadratics || []).entries()) {
    if (!Number.isFinite(q.a) || q.a === 0) errors.push(`${owner}: quadratic ${index + 1} must have nonzero finite a`);
    if (q.h !== undefined && !Number.isFinite(q.h)) errors.push(`${owner}: quadratic ${index + 1} has invalid h`);
    if (q.k !== undefined && !Number.isFinite(q.k)) errors.push(`${owner}: quadratic ${index + 1} has invalid k`);
  }
  const validatePoint = (raw, label) => {
    const x = Array.isArray(raw) ? raw[0] : raw.x;
    const y = Array.isArray(raw) ? raw[1] : raw.y;
    if (!Number.isFinite(x) || !Number.isFinite(y)) errors.push(`${owner}: ${label} must contain finite x,y coordinates`);
    else if (x < g.xMin || x > g.xMax || y < g.yMin || y > g.yMax) errors.push(`${owner}: ${label} (${x},${y}) is outside graph bounds`);
  };
  for (const raw of g.points || []) validatePoint(raw, 'graph point');
  for (const raw of g.polyline || []) validatePoint(raw, 'polyline point');
  for (const stepPoint of g.step || []) {
    if (!Array.isArray(stepPoint) || stepPoint.length !== 2 || !stepPoint.every(Number.isFinite)) errors.push(`${owner}: invalid slope-step point`);
  }
}

function validateTable(table, owner){
  if (!Array.isArray(table.rows) || table.rows.length < 2) errors.push(`${owner}: table must contain at least two rows`);
  else {
    const width = table.rows[0]?.length || 0;
    if (width < 2) errors.push(`${owner}: table must contain at least two columns`);
    for (const [r,row] of table.rows.entries()) {
      if (!Array.isArray(row) || row.length !== width) errors.push(`${owner}: row ${r + 1} width mismatch`);
      for (const [c,cell] of (row || []).entries()) {
        if (cell && typeof cell==='object' && cell.answer !== true) errors.push(`${owner}: unsupported object in cell ${r + 1},${c + 1}`);
      }
    }
  }
}

function validatePanel(panel, owner, index){
  const label = `${owner} panel ${index + 1}`;
  const types = [Boolean(panel.table), Boolean(panel.graph), Boolean(panel.text)].filter(Boolean).length;
  if (types !== 1) errors.push(`${label}: panel must contain exactly one of table, graph or text`);
  if (panel.graph) validateGraph(panel.graph, label);
  if (panel.table) validateTable(panel.table, label);
  if (panel.responseSpace && !allowedResponse.has(panel.responseSpace)) errors.push(`${label}: invalid responseSpace ${panel.responseSpace}`);
}

const truthPath = path.join(ROOT, 'SOURCE_OF_TRUTH.md');
const readmePath = path.join(ROOT, 'README.md');
if (!fs.existsSync(truthPath)) errors.push('Missing SOURCE_OF_TRUTH.md at repository root');
if (fs.existsSync(path.join(ROOT, 'RULES.md'))) errors.push('RULES.md exists: repository must have one source of truth only');
if (!fs.existsSync(readmePath) || !fs.readFileSync(readmePath, 'utf8').includes('SOURCE_OF_TRUTH.md')) errors.push('README.md must point explicitly to SOURCE_OF_TRUTH.md');

const pageNumbers=new Set();
for (const p of dataPages) {
  let prev = -Infinity;
  if (!Number.isInteger(p.page) || p.page < 1) errors.push(`Invalid page number: ${p.page}`);
  if (pageNumbers.has(p.page)) errors.push(`Duplicate data page ${p.page}`); else pageNumbers.add(p.page);
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
    if (q.table) validateTable(q.table, q.id);
    if (q.panelsColumns !== undefined && ![2,3].includes(q.panelsColumns)) errors.push(`${q.id}: panelsColumns must be 2 or 3`);
    for (const [index,panel] of (q.panels || []).entries()) validatePanel(panel, q.id, index);
    let subPrev = q.level;
    for (const [index, sp] of (q.subparts || []).entries()) {
      if (!sp.text) errors.push(`${q.id} subpart ${index + 1}: missing text`);
      if (!allowedResponse.has(sp.responseSpace || 'short')) errors.push(`${q.id} subpart ${index + 1}: invalid responseSpace ${sp.responseSpace}`);
      if (sp.level !== undefined) {
        if (!Number.isFinite(sp.level) || sp.level < 1 || sp.level > 10) errors.push(`${q.id} subpart ${index + 1}: invalid level`);
        if (sp.level < subPrev) errors.push(`${q.id}: subpart difficulty decreases at subpart ${index + 1}`);
        subPrev = sp.level;
      }
      if (sp.answerCount !== undefined && (!Number.isInteger(sp.answerCount) || sp.answerCount < 1 || sp.answerCount > 6)) errors.push(`${q.id} subpart ${index + 1}: answerCount must be 1-6`);
    }
  }
}

const manifestPath = path.join(ROOT, 'meta', 'pages.json');
if (!fs.existsSync(manifestPath)) {
  errors.push('Missing meta/pages.json');
} else {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const total = manifest.generatedPages;
  if (!Number.isInteger(total) || total < 1) errors.push('meta/pages.json: generatedPages must be a positive integer');
  if (!Array.isArray(manifest.pages) || manifest.pages.length !== total) errors.push(`Manifest count mismatch: generatedPages=${total}, entries=${manifest.pages?.length ?? 0}`);
  if (dataPages.length !== total) errors.push(`Data-page count mismatch: dataPages=${dataPages.length}, generatedPages=${total}`);
  const manifestNumbers = (manifest.pages || []).map(p => p.page);
  for (let n = 1; n <= total; n++) {
    if (!manifestNumbers.includes(n)) errors.push(`Manifest missing page ${n}`);
    if (!pageNumbers.has(n)) errors.push(`Data model missing page ${n}`);
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
console.log(`QA passed: ${dataPages.length} data pages, ${ids.size} questions; source-of-truth, graph/table/panel data, difficulty order, manifest, navigation, response spaces and shared A4 stylesheet are consistent.`);
