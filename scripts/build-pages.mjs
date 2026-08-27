import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import katex from 'katex';
import { pages } from '../content/book-pages.mjs';
const esc = (s='') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function renderMath(tex){
  return '<bdi class="math-isolate" dir="ltr">'+katex.renderToString(String(tex), {throwOnError:false,strict:'warn',output:'htmlAndMathml'})+'</bdi>';
}
function mathify(s=''){
  return String(s).split(/(`[^`]*`)/g).map(part => {
    if (part.startsWith('`') && part.endsWith('`')) return renderMath(part.slice(1,-1));
    return esc(part).replace(/\b([xy]|m|b)\b/g, token=>renderMath(token));
  }).join('');
}
function syncKatexAssets(){
  const cssSource=fileURLToPath(import.meta.resolve('katex/dist/katex.min.css'));
  const fontsSource=path.join(path.dirname(cssSource),'fonts');
  const stylesDir=path.join(process.cwd(),'styles');
  const fontsTarget=path.join(stylesDir,'fonts');
  fs.mkdirSync(stylesDir,{recursive:true});
  fs.copyFileSync(cssSource,path.join(stylesDir,'katex.min.css'));
  fs.rmSync(fontsTarget,{recursive:true,force:true});
  fs.cpSync(fontsSource,fontsTarget,{recursive:true});
}
function orderedPairResponse(){
  return '<span class="ordered-pair-response" dir="ltr" aria-label="תשובה כזוג סדור">(<span class="coordinate-field"></span>,<span class="coordinate-field"></span>)</span>';
}
function response(type){
  if(type==='single-number') return '<span class="answer-number"></span>';
  if(type==='short') return '<span class="answer-short"></span>';
  if(type==='equation') return '<span class="answer-medium"></span>';
  if(type==='ordered-pair') return orderedPairResponse();
  if(type==='work-plus-ordered-pair') return `<div class="answer-box work-box"></div><div class="final-point-answer"><strong>תשובה:</strong> ${orderedPairResponse()}</div>`;
  if(type==='table-cell') return '<span class="answer-short"></span>';
  if(type==='choice-mark') return '<span class="choice-space"></span>';
  if(type==='graph-draw') return '';
  if(type==='lines-2' || type==='explanation') return '<div class="answer-box"></div>';
  if(type==='lines-4' || type==='full-work' || type==='geometry-work') return '<div class="answer-box large"></div>';
  if(type==='mixed') return '';
  return '<div class="answer-box"></div>';
}
function normalizePoint(pt){if(Array.isArray(pt)) return {x:pt[0], y:pt[1], label:pt[2] || ''}; return {x:pt.x, y:pt.y, label:pt.label || ''};}
function tickValues(min,max,step){const values=[]; const start=Math.ceil(min/step)*step; for(let v=start;v<=max+1e-9;v+=step) values.push(Math.abs(v)<1e-9?0:+v.toFixed(10)); return values;}
function axesSvg(g){
  const p=42, xSpan=g.xMax-g.xMin, ySpan=g.yMax-g.yMin, equalUnitScale=g.equalUnitScale !== false;
  const commonUnit=Math.min(436/xSpan,280/ySpan), xUnit=equalUnitScale?commonUnit:436/xSpan, yUnit=equalUnitScale?commonUnit:280/ySpan;
  const plotW=xSpan*xUnit, plotH=ySpan*yUnit, W=plotW+2*p, H=plotH+2*p;
  const x=s=>p+(s-g.xMin)*xUnit, y=s=>H-p-(s-g.yMin)*yUnit;
  const xTick=g.xTick||1, yTick=g.yTick||1, xTicks=tickValues(g.xMin,g.xMax,xTick), yTicks=tickValues(g.yMin,g.yMax,yTick);
  let grid=''; for(const i of xTicks) grid+=`<line x1="${x(i)}" y1="${p}" x2="${x(i)}" y2="${H-p}"/>`; for(const i of yTicks) grid+=`<line x1="${p}" y1="${y(i)}" x2="${W-p}" y2="${y(i)}"/>`;
  const xAxisY=(g.yMin<=0&&g.yMax>=0)?y(0):H-p, yAxisX=(g.xMin<=0&&g.xMax>=0)?x(0):p;
  let ticks=''; for(const i of xTicks) if(i!==0||g.showZeroOnX) ticks+=`<text x="${x(i)}" y="${xAxisY+17}" text-anchor="middle">${i}</text>`; for(const i of yTicks) if(i!==0||g.showZeroOnY) ticks+=`<text x="${yAxisX-10}" y="${y(i)+4}" text-anchor="end">${i}</text>`;
  let lines='';
  for(const ln of g.lines||[]){const [[x1,y1],[x2,y2]]=ln.through; const m=(y2-y1)/(x2-x1); const yy1=y1+m*(g.xMin-x1), yy2=y1+m*(g.xMax-x1); lines+=`<line class="line" x1="${x(g.xMin)}" y1="${y(yy1)}" x2="${x(g.xMax)}" y2="${y(yy2)}"/>`;}
  for(const vx of g.verticalLines||[]) lines+=`<line class="line" x1="${x(vx)}" y1="${y(g.yMin)}" x2="${x(vx)}" y2="${y(g.yMax)}"/>`;
  for(const q of g.quadratics||[]){const samples=[]; for(let i=0;i<=64;i++){const xv=g.xMin+(xSpan*i/64), yv=q.a*(xv-(q.h||0))**2+(q.k||0); samples.push(`${x(xv)},${y(yv)}`);} lines+=`<polyline class="line" points="${samples.join(' ')}" fill="none"/>`;}
  if(g.polyline?.length) lines+=`<polyline class="line" points="${g.polyline.map(([a,b])=>`${x(a)},${y(b)}`).join(' ')}" fill="none"/>`;
  let pts=''; for(const raw of g.points||[]){const pt=normalizePoint(raw); pts+=`<circle class="point" cx="${x(pt.x)}" cy="${y(pt.y)}" r="4"/>`; if(pt.label) pts+=`<text class="point-label" x="${x(pt.x)+8}" y="${y(pt.y)-8}">${esc(pt.label)}</text>`; else if(g.showCoordinates!==false) pts+=`<text x="${x(pt.x)+7}" y="${y(pt.y)-7}">(${pt.x},${pt.y})</text>`;}
  const step=g.step?`<polyline points="${g.step.map(([a,b])=>`${x(a)},${y(b)}`).join(' ')}" fill="none" stroke="#8a5b2d" stroke-width="2" stroke-dasharray="6 4"/>`:'';
  const zeroLabel=(g.xMin<=0&&g.xMax>=0&&g.yMin<=0&&g.yMax>=0&&!g.showZeroOnX&&!g.showZeroOnY)?`<text x="${x(0)-10}" y="${y(0)+17}">0</text>`:'';
  const xLabel=esc(g.xLabel||'x'), yLabel=esc(g.yLabel||'y');
  const yLabelNode=g.yLabel?`<text transform="translate(18 ${H/2}) rotate(-90)" text-anchor="middle">${yLabel}</text>`:`<text x="${yAxisX+8}" y="${p-7}">${yLabel}</text>`;
  const xLabelNode=g.xLabel?`<text x="${W-p}" y="${H-10}" text-anchor="end">${xLabel}</text>`:`<text x="${W-p+8}" y="${xAxisY-6}">${xLabel}</text>`;
  return `<div class="graph-card"><svg class="graph" data-equal-unit-scale="${equalUnitScale}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(g.ariaLabel||'מערכת צירים')}"><g class="grid">${grid}</g><line class="axis" x1="${p}" y1="${xAxisY}" x2="${W-p}" y2="${xAxisY}"/><line class="axis" x1="${yAxisX}" y1="${H-p}" x2="${yAxisX}" y2="${p}"/>${ticks}${lines}${step}${pts}${zeroLabel}${xLabelNode}${yLabelNode}</svg></div>`;
}
function renderCell(cell){if(cell&&typeof cell==='object'&&cell.answer) return response('table-cell'); return mathify(cell??'');}
function renderTable(table){const rows=table.rows||[]; return `<table class="table"${table.ariaLabel?` aria-label="${esc(table.ariaLabel)}"`:''}>${rows.map(row=>`<tr>${row.map((cell,index)=>`${index===0?'<th>':'<td>'}${renderCell(cell)}${index===0?'</th>':'</td>'}`).join('')}</tr>`).join('')}</table>`;}
function renderPanel(panel){let body=''; if(panel.table) body=renderTable(panel.table); else if(panel.graph) body=axesSvg(panel.graph); else body=mathify(panel.text||''); const answer=panel.responseSpace?`<div class="panel-answer">${panel.answerLabel?`${mathify(panel.answerLabel)} `:''}${response(panel.responseSpace)}</div>`:''; return `<div class="mini-card">${panel.label?`<b>${esc(panel.label)}</b>`:''}${body}${answer}</div>`;}
function renderPanels(panels=[],columns=2){if(!panels.length) return ''; const cols=columns===3?' cols-3':''; return `<div class="mini-grid${cols}">${panels.map(renderPanel).join('')}</div>`;}
function renderSubparts(subparts=[]){
  if(!subparts.length) return '';
  return `<div class="subparts">${subparts.map(sp=>{const repeats=Math.max(1,sp.answerCount||1); const separator=sp.betweenAnswers?(/^[,.;:!?]/.test(String(sp.betweenAnswers).trim())?`${mathify(String(sp.betweenAnswers).trim())} `:` ${mathify(sp.betweenAnswers)} `):' '; const writable=Array.from({length:repeats},()=>response(sp.responseSpace||'short')).join(separator); return `<div class="sub"${sp.level?` data-level="${sp.level}"`:''}>${mathify(sp.text||'')} ${writable}${sp.suffix?` ${mathify(sp.suffix)}`:''}</div>`;}).join('')}</div>`;
}
function renderQuestion(q,i){
  const graph=q.graph?axesSvg(q.graph):'', table=q.table?renderTable(q.table):'', panels=renderPanels(q.panels,q.panelsColumns);
  const choices=q.choices?`<div class="sub multiple-choice-options">${q.choices.map(c=>`<span class="choice-option"><span class="choice-space"></span>${mathify(c)}</span>`).join('')}</div>`:'';
  const subparts=renderSubparts(q.subparts), hasStructured=Boolean(q.choices||q.subparts?.length||q.panels?.length||q.table);
  const answer=q.answerLabel?`<div class="sub">${mathify(q.answerLabel)} ${response(q.responseSpace)}</div>`:(!hasStructured?response(q.responseSpace):'');
  const levelLabel=q.levelLabel||`רמה ${q.level}`;
  return `<section class="exercise" data-id="${esc(q.id)}" data-family="${esc(q.family)}" data-level="${q.level}" data-response="${esc(q.responseSpace)}"><div class="exercise-head"><span class="exercise-number">${i+1}.</span><span class="exercise-title">${mathify(q.stem)}</span><span class="level">${esc(levelLabel)}</span></div>${graph}${table}${panels}${choices}${subparts}${answer}</section>`;
}
function navFor(page,total){const prev=page>1?`<a href="עמוד-${page-1}.html">הקודם</a>`:'<span></span>'; const next=page<total?`<a class="next" href="עמוד-${page+1}.html">הבא</a>`:'<span></span>'; return `<nav class="preview-nav" aria-label="ניווט בין עמודים">${prev}<strong>פונקציה קווית — עמוד ${page} / ${total}</strong>${next}</nav>`;}
function renderPage(p,total){const pageGraph=p.graph?axesSvg(p.graph):''; return `<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>עמוד ${p.page} — פונקציה קווית</title><link rel="stylesheet" href="styles/katex.min.css"><link rel="stylesheet" href="styles/a4-base.css"></head><body>${navFor(p.page,total)}<main class="a4-page" data-page="${p.page}"><header class="page-header"><h1>${esc(p.title)}</h1><div class="page-no">${p.page}</div></header><div class="rule-card">${mathify(p.rule)}</div>${pageGraph}${p.questions.map(renderQuestion).join('')}<footer class="footer"><span>${[...new Set(p.questions.flatMap(q=>String(q.family).split(',')).map(x=>x.trim()).filter(Boolean))].join(' · ')}</span><span>פונקציה קווית · ספר תרגול</span><span>עמוד ${p.page}</span></footer></main></body></html>`;}
function existingPageNumbers(){return fs.readdirSync(process.cwd()).map(name=>/^עמוד-(\d+)\.html$/.exec(name)).filter(Boolean).map(m=>Number(m[1]));}
function normalizeAllNavigation(total){let changed=0; for(let n=1;n<=total;n++){const file=path.join(process.cwd(),`עמוד-${n}.html`); if(!fs.existsSync(file)) continue; const before=fs.readFileSync(file,'utf8'), after=before.replace(/<nav class="preview-nav"[^>]*>[\s\S]*?<\/nav>/,navFor(n,total)); if(after!==before){fs.writeFileSync(file,after,'utf8'); changed++;}} return changed;}
syncKatexAssets();
const existing=existingPageNumbers(); const total=Math.max(0,...existing,...pages.map(p=>p.page));
for(const p of pages) fs.writeFileSync(path.join(process.cwd(),`עמוד-${p.page}.html`),renderPage(p,total),'utf8');
const normalized=normalizeAllNavigation(total);
console.log(`Built ${pages.length} data-driven page(s) with semantic answer spaces and KaTeX; workbook total ${total}; normalized navigation on ${normalized} page(s).`);
