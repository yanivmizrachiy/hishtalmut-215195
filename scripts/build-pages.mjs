import fs from 'node:fs';
import path from 'node:path';
import { pages } from '../content/page-definitions.mjs';

const esc = (s='') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mathify = (s='') => esc(s).replace(/\(([^)]+)\)/g,'(<span class="math">$1</span>)').replace(/\b([xy]|m)\b/g,'<span class="math">$1</span>');

function response(type){
  if(type==='short') return '<span class="answer-short"></span>';
  if(type==='choice-mark') return '';
  if(type==='lines-2') return '<div class="answer-box"></div>';
  if(type==='lines-4'||type==='full-work') return '<div class="answer-box large"></div>';
  return '<div class="answer-box"></div>';
}

function axesSvg(g){
  const W=520,H=285,p=42;
  const x=s=>p+(s-g.xMin)*(W-2*p)/(g.xMax-g.xMin);
  const y=s=>H-p-(s-g.yMin)*(H-2*p)/(g.yMax-g.yMin);
  let grid='';
  for(let i=Math.ceil(g.xMin);i<=Math.floor(g.xMax);i++) grid+=`<line x1="${x(i)}" y1="${p}" x2="${x(i)}" y2="${H-p}"/>`;
  for(let i=Math.ceil(g.yMin);i<=Math.floor(g.yMax);i++) grid+=`<line x1="${p}" y1="${y(i)}" x2="${W-p}" y2="${y(i)}"/>`;
  let ticks='';
  for(let i=Math.ceil(g.xMin);i<=Math.floor(g.xMax);i++) if(i!==0) ticks+=`<text x="${x(i)}" y="${y(0)+17}" text-anchor="middle">${i}</text>`;
  for(let i=Math.ceil(g.yMin);i<=Math.floor(g.yMax);i++) if(i!==0) ticks+=`<text x="${x(0)-10}" y="${y(i)+4}" text-anchor="end">${i}</text>`;
  let lines='';
  for(const ln of g.lines||[]){
    const [[x1,y1],[x2,y2]]=ln.through; const m=(y2-y1)/(x2-x1); const yy1=y1+m*(g.xMin-x1); const yy2=y1+m*(g.xMax-x1);
    lines+=`<line class="line" x1="${x(g.xMin)}" y1="${y(yy1)}" x2="${x(g.xMax)}" y2="${y(yy2)}"/>`;
  }
  let pts=''; for(const [px,py] of g.points||[]) pts+=`<circle class="point" cx="${x(px)}" cy="${y(py)}" r="4"/><text x="${x(px)+7}" y="${y(py)-7}">(${px},${py})</text>`;
  let step=''; if(g.step){step=`<polyline points="${g.step.map(([a,b])=>`${x(a)},${y(b)}`).join(' ')}" fill="none" stroke="#8a5b2d" stroke-width="2" stroke-dasharray="6 4"/>`;}
  return `<div class="graph-card"><svg class="graph" viewBox="0 0 ${W} ${H}" role="img" aria-label="מערכת צירים"><g class="grid">${grid}</g><line class="axis" x1="${p}" y1="${y(0)}" x2="${W-p}" y2="${y(0)}"/><line class="axis" x1="${x(0)}" y1="${H-p}" x2="${x(0)}" y2="${p}"/>${ticks}${lines}${step}${pts}<text x="${W-p+8}" y="${y(0)-6}">x</text><text x="${x(0)+8}" y="${p-7}">y</text></svg></div>`;
}

function renderQuestion(q,i){
  const graph=q.graph?axesSvg(q.graph):'';
  const choices=q.choices?`<div class="sub">${q.choices.map((c,n)=>`<span class="choice-space"></span> ${esc(c)}${n<q.choices.length-1?' &nbsp;&nbsp; ':''}`).join('')}</div>`:'';
  const answer=q.answerLabel?`<div class="sub">${esc(q.answerLabel)} ${response(q.responseSpace)}</div>`:(!q.choices?response(q.responseSpace):'');
  return `<section class="exercise" data-id="${q.id}" data-family="${q.family}" data-level="${q.level}" data-response="${q.responseSpace}"><div class="exercise-head"><span class="exercise-number">${i+1}.</span><span class="exercise-title">${mathify(q.stem)}</span><span class="level">רמה ${q.level}</span></div>${graph}${choices}${answer}</section>`;
}

function navFor(page,total){
  const prev=page>1?`<a href="עמוד-${page-1}.html">הקודם</a>`:'<span></span>';
  const next=page<total?`<a class="next" href="עמוד-${page+1}.html">הבא</a>`:'<span></span>';
  return `<nav class="preview-nav" aria-label="ניווט בין עמודים">${prev}<strong>פונקציה קווית — עמוד ${page} / ${total}</strong>${next}</nav>`;
}

function renderPage(p,total){
  return `<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>עמוד ${p.page} — פונקציה קווית</title><link rel="stylesheet" href="styles/a4-base.css"></head><body>${navFor(p.page,total)}<main class="a4-page" data-page="${p.page}"><header class="page-header"><div><div class="kicker">${esc(p.kicker)}</div><h1>${esc(p.title)}</h1><p class="subtitle">${esc(p.subtitle)}</p></div><div class="page-no">${p.page}</div></header><div class="rule-card">${esc(p.rule)}</div>${p.questions.map(renderQuestion).join('')}<footer class="footer"><span>${[...new Set(p.questions.map(q=>q.family))].join(' · ')}</span><span>פונקציה קווית · ספר תרגול</span><span>עמוד ${p.page}</span></footer></main></body></html>`;
}

function normalizeAllNavigation(total){
  let changed=0;
  for(let n=1;n<=total;n++){
    const file=path.join(process.cwd(),`עמוד-${n}.html`);
    if(!fs.existsSync(file)) continue;
    const before=fs.readFileSync(file,'utf8');
    const nav=navFor(n,total);
    const after=before.replace(/<nav class="preview-nav"[^>]*>[\s\S]*?<\/nav>/,nav);
    if(after!==before){fs.writeFileSync(file,after,'utf8');changed++;}
  }
  return changed;
}

const maxExisting=10;
const total=Math.max(maxExisting,...pages.map(p=>p.page));
for(const p of pages){fs.writeFileSync(path.join(process.cwd(),`עמוד-${p.page}.html`),renderPage(p,total),'utf8');}
const normalized=normalizeAllNavigation(total);
console.log(`Built ${pages.length} data-driven page(s); workbook total ${total}; normalized navigation on ${normalized} page(s).`);
