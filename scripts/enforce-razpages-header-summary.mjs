import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';
import { pages } from '../content/book-pages.mjs';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const errors=[];
const err=m=>errors.push(m);
const esc=(s='')=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderMath(tex){return '<bdi class="math-isolate" dir="ltr">'+katex.renderToString(String(tex),{throwOnError:false,strict:'warn',output:'htmlAndMathml'})+'</bdi>';}
function mathify(s=''){return String(s).split(/(`[^`]*`)/g).map(part=>part.startsWith('`')&&part.endsWith('`')?renderMath(part.slice(1,-1)):esc(part).replace(/\b([xy]|m|b)\b/g,token=>renderMath(token))).join('');}
const CONCEPTS=['קצב ההשתנות','נקודת החיתוך','פונקציה קווית','טבלת ערכים','זוג סדור','מערכת הצירים','שיפוע','מקבילים','מקביל','עולה','יורד','קבוע','חיובי','שלילי','אפס','חיתוך','גרף','ישר','נקודה','שיעור','ערך'];
function blankSize(answer=''){const len=String(answer).replace(/[\s.,:;()־-]/g,'').length; return len<=4?'short':(len<=10?'medium':'long');}
function completionRule(page){
  if(page.page===1) return {source:'בזוג הסדור `(x,y)`, שיעור ה־`x` מופיע §§BLANK_MEDIUM§§ בתוך הסוגריים, ושיעור ה־`y` מופיע §§BLANK_MEDIUM§§.',blankCount:2};
  let source=String(page.summary||page.rule||'').trim(); const math=[]; source=source.replace(/`[^`]*`/g,t=>`§§MATH_${math.push(t)-1}§§`); const used=[];
  for(const phrase of CONCEPTS){if(used.length>=2) break; if(source.includes(phrase)){source=source.replace(phrase,`§§BLANK_${blankSize(phrase).toUpperCase()}§§`); used.push(phrase);}}
  if(used.length<1&&math.length){source=source.replace('§§MATH_0§§','§§BLANK_MEDIUM§§'); used.push(math[0]);}
  if(used.length<1){const candidates=[...source.matchAll(/[א-ת]{5,}/g)].filter(m=>!['כאשר','מתאים','בתוך','עבור','אפשר'].includes(m[0])); const m=candidates.at(-1); if(m){source=source.slice(0,m.index)+`§§BLANK_${blankSize(m[0]).toUpperCase()}§§`+source.slice(m.index+m[0].length); used.push(m[0]);}}
  source=source.replace(/§§MATH_(\d+)§§/g,(_,i)=>math[Number(i)]||''); return {source,blankCount:used.length};
}
function renderCompletionText(source=''){return String(source).split(/(§§BLANK_(?:SHORT|MEDIUM|LONG)§§)/g).map(part=>{const m=/^§§BLANK_(SHORT|MEDIUM|LONG)§§$/.exec(part); return m?`<span class="summary-blank summary-blank-${m[1].toLowerCase()}" aria-label="מקום להשלמה"></span>`:mathify(part);}).join('');}
function summaryHtml(page){const {source,blankCount}=completionRule(page); if(blankCount<1||blankCount>2) err(`Page ${page.page}: completion summary has ${blankCount} blanks; expected 1-2`); return `<section class="rule-card completion-summary" data-summary-completion="true"><strong class="summary-label">השלימו:</strong><div class="completion-sentence">${renderCompletionText(source)}</div></section>`;}
if(!fs.existsSync(truthPath)) err('Missing SOURCE_OF_TRUTH.md'); else {const truth=fs.readFileSync(truthPath,'utf8'); if(!truth.includes('## 18. כותרת וממשק הדף')) err('Canonical header/UI contract missing from SOURCE_OF_TRUTH.md');}
for(const page of pages){
  const file=path.join(ROOT,`עמוד-${page.page}.html`); if(!fs.existsSync(file)){err(`Missing generated page ${page.page}`); continue;}
  let html=fs.readFileSync(file,'utf8'); const summary=summaryHtml(page);
  if(/<section class="rule-card completion-summary"[\s\S]*?<\/section>/.test(html)) html=html.replace(/<section class="rule-card completion-summary"[\s\S]*?<\/section>/,summary);
  else if(/<div class="rule-card">[\s\S]*?<\/div>/.test(html)) html=html.replace(/<div class="rule-card">[\s\S]*?<\/div>/,summary);
  else {err(`Page ${page.page}: top rule-card missing`); continue;}
  fs.writeFileSync(file,html,'utf8');
}
for(const page of pages){
  const file=path.join(ROOT,`עמוד-${page.page}.html`); if(!fs.existsSync(file)) continue; const html=fs.readFileSync(file,'utf8');
  const header=(html.match(/<header class="page-header">[\s\S]*?<\/header>/)||[])[0]||''; if(!/<h1>[^<]+<\/h1>/.test(header)||!header.includes('class="page-no"')) err(`Page ${page.page}: clean title/page-number header missing`); if(/kicker|subtitle|breadcrumb|רמות\s*\d/.test(header)) err(`Page ${page.page}: forbidden title metadata rendered`);
  const summary=(html.match(/<section class="rule-card completion-summary"[\s\S]*?<\/section>/)||[])[0]||''; if(!summary.includes('השלימו:')) err(`Page ${page.page}: completion instruction missing`); const blanks=(summary.match(/class="summary-blank summary-blank-(?:short|medium|long)"/g)||[]).length; if(blanks<1||blanks>2) err(`Page ${page.page}: expected 1-2 completion blanks, found ${blanks}`);
}
if(errors.length){console.error(`RAZPAGES HEADER/SUMMARY CONTRACT FAILED (${errors.length})`); console.error(errors.join('\n')); process.exit(1);}
console.log(`RazPages header + completion summary applied to ${pages.length} pages without modifying SOURCE_OF_TRUTH.md.`);
