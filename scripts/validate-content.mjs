import fs from 'node:fs';
import path from 'node:path';
import { pages } from '../content/book-pages.mjs';

const ROOT=process.cwd();
const dataPages=pages;
const allowedResponse=new Set(['choice-mark','short','equation','lines-2','lines-4','full-work','explanation','table-cell','graph-draw','geometry-work','mixed']);
const errors=[];
const ids=new Set();
const pageNumbers=new Set();

const err=msg=>errors.push(msg);
const exists=rel=>fs.existsSync(path.join(ROOT,rel));

function mathTokensPresent(value){
  if(typeof value==='string') return value.includes('`');
  if(Array.isArray(value)) return value.some(mathTokensPresent);
  if(value && typeof value==='object') return Object.values(value).some(mathTokensPresent);
  return false;
}

function validatePoint(raw,g,owner,label){
  const x=Array.isArray(raw)?raw[0]:raw?.x;
  const y=Array.isArray(raw)?raw[1]:raw?.y;
  if(!Number.isFinite(x)||!Number.isFinite(y)) return err(`${owner}: ${label} must contain finite x,y coordinates`);
  if(x<g.xMin||x>g.xMax||y<g.yMin||y>g.yMax) err(`${owner}: ${label} (${x},${y}) is outside graph bounds`);
}

function validateGraph(g,owner){
  if(!(g.xMin<g.xMax&&g.yMin<g.yMax)) err(`${owner}: invalid graph bounds`);
  if(g.xTick!==undefined&&(!Number.isFinite(g.xTick)||g.xTick<=0)) err(`${owner}: xTick must be positive`);
  if(g.yTick!==undefined&&(!Number.isFinite(g.yTick)||g.yTick<=0)) err(`${owner}: yTick must be positive`);
  for(const ln of g.lines||[]){
    if(!ln.through||ln.through.length!==2) err(`${owner}: line must have two defining points`);
    else if(ln.through[0][0]===ln.through[1][0]) err(`${owner}: use verticalLines for vertical lines instead of slope renderer`);
  }
  for(const vx of g.verticalLines||[]){
    if(!Number.isFinite(vx)) err(`${owner}: vertical line x must be finite`);
    else if(vx<g.xMin||vx>g.xMax) err(`${owner}: vertical line x=${vx} is outside graph bounds`);
  }
  for(const [i,q] of (g.quadratics||[]).entries()){
    if(!Number.isFinite(q.a)||q.a===0) err(`${owner}: quadratic ${i+1} must have nonzero finite a`);
    if(q.h!==undefined&&!Number.isFinite(q.h)) err(`${owner}: quadratic ${i+1} has invalid h`);
    if(q.k!==undefined&&!Number.isFinite(q.k)) err(`${owner}: quadratic ${i+1} has invalid k`);
  }
  for(const p of g.points||[]) validatePoint(p,g,owner,'graph point');
  for(const p of g.polyline||[]) validatePoint(p,g,owner,'polyline point');
  for(const p of g.step||[]) if(!Array.isArray(p)||p.length!==2||!p.every(Number.isFinite)) err(`${owner}: invalid slope-step point`);
}

function validateTable(t,owner){
  if(!Array.isArray(t.rows)||t.rows.length<2) return err(`${owner}: table must contain at least two rows`);
  const width=t.rows[0]?.length||0;
  if(width<2) err(`${owner}: table must contain at least two columns`);
  for(const [r,row] of t.rows.entries()){
    if(!Array.isArray(row)||row.length!==width) err(`${owner}: row ${r+1} width mismatch`);
    for(const [c,cell] of (row||[]).entries()) if(cell&&typeof cell==='object'&&cell.answer!==true) err(`${owner}: unsupported object in cell ${r+1},${c+1}`);
  }
}

function validatePanel(panel,owner,index){
  const label=`${owner} panel ${index+1}`;
  const types=[panel.table,panel.graph,panel.text].filter(Boolean).length;
  if(types!==1) err(`${label}: panel must contain exactly one of table, graph or text`);
  if(panel.graph) validateGraph(panel.graph,label);
  if(panel.table) validateTable(panel.table,label);
  if(panel.responseSpace&&!allowedResponse.has(panel.responseSpace)) err(`${label}: invalid responseSpace ${panel.responseSpace}`);
}

if(!exists('SOURCE_OF_TRUTH.md')) err('Missing SOURCE_OF_TRUTH.md at repository root');
if(exists('RULES.md')) err('RULES.md exists: repository must have one source of truth only');
if(!exists('README.md')||!fs.readFileSync(path.join(ROOT,'README.md'),'utf8').includes('SOURCE_OF_TRUTH.md')) err('README.md must point explicitly to SOURCE_OF_TRUTH.md');
if(!exists('package.json')) err('Missing package.json');
else if(!JSON.parse(fs.readFileSync(path.join(ROOT,'package.json'),'utf8')).dependencies?.katex) err('package.json must declare KaTeX dependency');

for(const p of dataPages){
  let previous=-Infinity;
  if(!Number.isInteger(p.page)||p.page<1) err(`Invalid page number: ${p.page}`);
  if(pageNumbers.has(p.page)) err(`Duplicate data page ${p.page}`); else pageNumbers.add(p.page);
  if(!p.title||p.chapter===undefined||p.chapter===null) err(`Page ${p.page}: missing title/chapter`);
  if(!Array.isArray(p.questions)||!p.questions.length) err(`Page ${p.page}: no questions`);
  if(p.graph) validateGraph(p.graph,`Page ${p.page} shared graph`);
  for(const q of p.questions||[]){
    if(ids.has(q.id)) err(`Duplicate question id ${q.id}`); else ids.add(q.id);
    if(!q.family) err(`${q.id}: missing family`);
    if(!Number.isFinite(q.level)||q.level<1||q.level>10) err(`${q.id}: invalid level`);
    if(q.level<previous) err(`Page ${p.page}: difficulty decreases at ${q.id}`);
    previous=q.level;
    if(!allowedResponse.has(q.responseSpace)) err(`${q.id}: invalid responseSpace ${q.responseSpace}`);
    if(!q.stem) err(`${q.id}: missing stem`);
    if(q.graph) validateGraph(q.graph,q.id);
    if(q.table) validateTable(q.table,q.id);
    if(q.panelsColumns!==undefined&&![2,3].includes(q.panelsColumns)) err(`${q.id}: panelsColumns must be 2 or 3`);
    for(const [i,panel] of (q.panels||[]).entries()) validatePanel(panel,q.id,i);
    let subPrevious=q.level;
    for(const [i,sp] of (q.subparts||[]).entries()){
      if(!sp.text) err(`${q.id} subpart ${i+1}: missing text`);
      if(!allowedResponse.has(sp.responseSpace||'short')) err(`${q.id} subpart ${i+1}: invalid responseSpace ${sp.responseSpace}`);
      if(sp.level!==undefined){
        if(!Number.isFinite(sp.level)||sp.level<1||sp.level>10) err(`${q.id} subpart ${i+1}: invalid level`);
        if(sp.level<subPrevious) err(`${q.id}: subpart difficulty decreases at subpart ${i+1}`);
        subPrevious=sp.level;
      }
      if(sp.answerCount!==undefined&&(!Number.isInteger(sp.answerCount)||sp.answerCount<1||sp.answerCount>6)) err(`${q.id} subpart ${i+1}: answerCount must be 1-6`);
    }
  }
}

const manifestPath=path.join(ROOT,'meta','pages.json');
if(!fs.existsSync(manifestPath)) err('Missing meta/pages.json');
else{
  const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
  const total=manifest.generatedPages;
  if(!Number.isInteger(total)||total<1) err('meta/pages.json: generatedPages must be a positive integer');
  if(!Array.isArray(manifest.pages)||manifest.pages.length!==total) err(`Manifest count mismatch: generatedPages=${total}, entries=${manifest.pages?.length??0}`);
  if(dataPages.length!==total) err(`Data-page count mismatch: dataPages=${dataPages.length}, generatedPages=${total}`);
  if(!exists('styles/katex.min.css')) err('KaTeX CSS asset missing; run build before validation');
  if(!exists('styles/fonts')) err('KaTeX font assets missing; run build before validation');
  const manifestNumbers=(manifest.pages||[]).map(p=>p.page);
  for(let n=1;n<=total;n++){
    if(!manifestNumbers.includes(n)) err(`Manifest missing page ${n}`);
    if(!pageNumbers.has(n)) err(`Data model missing page ${n}`);
    const file=path.join(ROOT,`עמוד-${n}.html`);
    if(!fs.existsSync(file)){err(`Missing page file עמוד-${n}.html`);continue;}
    const html=fs.readFileSync(file,'utf8');
    if(!html.includes(`data-page="${n}"`)) err(`Page ${n}: wrong or missing data-page`);
    if(!html.includes(`עמוד ${n} / ${total}`)) err(`Page ${n}: navigation total is stale; expected עמוד ${n} / ${total}`);
    const exerciseCount=(html.match(/class="exercise"/g)||[]).length;
    const responseCount=(html.match(/data-response=/g)||[]).length;
    if(exerciseCount!==responseCount) err(`Page ${n}: ${exerciseCount} exercises but ${responseCount} responseSpace declarations`);
    if(!html.includes('styles/a4-base.css')) err(`Page ${n}: does not use shared A4 stylesheet`);
    if(!html.includes('styles/katex.min.css')) err(`Page ${n}: does not load KaTeX stylesheet`);
    const dataPage=dataPages.find(p=>p.page===n);
    if(mathTokensPresent(dataPage)&&!html.includes('class="katex"')) err(`Page ${n}: contains math tokens but no KaTeX-rendered math found`);
  }
}

if(errors.length){
  console.error(`QA FAILED (${errors.length} issue(s))`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`QA passed: ${dataPages.length} data pages, ${ids.size} questions; KaTeX is required only where math exists; graph/table/panel data, difficulty order, manifest, navigation, response spaces and A4 stylesheet are consistent.`);
