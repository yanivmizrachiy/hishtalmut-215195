import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';
import { pages as corePages } from '../content/page-definitions.mjs';
import { pages as pages05to06 } from '../content/pages-05-06.mjs';
import { pages as pages07to10 } from '../content/pages-07-10.mjs';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const cssPath=path.join(ROOT,'styles','a4-base.css');
const pages=[...corePages,...pages05to06,...pages07to10].sort((a,b)=>a.page-b.page);
const errors=[];
const err=m=>errors.push(m);
const esc=(s='')=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function renderMath(tex){
  return '<bdi class="math-isolate" dir="ltr">'+katex.renderToString(String(tex),{throwOnError:false,strict:'warn',output:'htmlAndMathml'})+'</bdi>';
}

function mathify(s=''){
  return String(s).split(/(`[^`]*`)/g).map(part=>{
    if(part.startsWith('`')&&part.endsWith('`')) return renderMath(part.slice(1,-1));
    return esc(part).replace(/\b([xy]|m)\b/g,token=>renderMath(token));
  }).join('');
}

const SUMMARY_KEY_PHRASES=[
  'קצב ההשתנות','נקודת החיתוך','פונקציה קווית','טבלת ערכים','זוג סדור',
  'שיפוע','מקבילים','מקביל','עולה','יורד','קבוע','חיובי','שלילי','אפס',
  'חיתוך','גרף','ישר','נקודה','שיעור'
];

function blankSize(answer=''){
  const len=String(answer).replace(/[\s.,:;()]/g,'').length;
  return len<=4?'short':(len<=10?'medium':'long');
}

function completionRule(rule=''){
  let source=String(rule||'').trim();
  const math=[];
  source=source.replace(/`[^`]*`/g,token=>`§§MATH_${math.push(token)-1}§§`);
  const blanks=[];
  for(const phrase of SUMMARY_KEY_PHRASES){
    if(blanks.length>=2) break;
    if(!source.includes(phrase)) continue;
    const marker=`§§BLANK_${blankSize(phrase).toUpperCase()}§§`;
    source=source.replace(phrase,marker);
    blanks.push(phrase);
  }
  if(blanks.length===0&&math.length){
    source=source.replace('§§MATH_0§§','§§BLANK_MEDIUM§§');
    blanks.push(math[0]);
  }
  if(blanks.length===0){
    const matches=[...source.matchAll(/[א-ת]{4,}/g)];
    const match=matches.at(-1);
    if(match){
      const word=match[0];
      source=source.slice(0,match.index)+`§§BLANK_${blankSize(word).toUpperCase()}§§`+source.slice(match.index+word.length);
      blanks.push(word);
    }
  }
  source=source.replace(/§§MATH_(\d+)§§/g,(_,i)=>math[Number(i)]||'');
  return {source,blankCount:blanks.length};
}

function renderCompletionText(source=''){
  return String(source).split(/(§§BLANK_(?:SHORT|MEDIUM|LONG)§§)/g).map(part=>{
    const m=/^§§BLANK_(SHORT|MEDIUM|LONG)§§$/.exec(part);
    if(m) return `<span class="summary-blank summary-blank-${m[1].toLowerCase()}" aria-label="מקום להשלמה"></span>`;
    return mathify(part);
  }).join('');
}

function renderCompletionSummary(p){
  const {source,blankCount}=completionRule(p.summary||p.rule||'');
  if(blankCount<1) err(`Page ${p.page}: could not derive a meaningful completion blank`);
  return `<section class="rule-card completion-summary" data-summary-completion="true"><strong class="summary-label">השלימו:</strong><div class="completion-sentence">${renderCompletionText(source)}</div></section>`;
}

function ensureTruth(){
  if(!fs.existsSync(truthPath)) return err('Missing SOURCE_OF_TRUTH.md');
  let truth=fs.readFileSync(truthPath,'utf8');
  if(!truth.includes('## 28. כותרת בסגנון razpages וסיכום פעיל בהשלמות — חובה')){
    truth=truth.trimEnd()+`\n\n## 28. כותרת בסגנון razpages וסיכום פעיל בהשלמות — חובה\n\n1. הכותרת העליונה של כל דף נבנית לפי השפה החזותית הקנונית שנלמדה מ־\`razpages\` ומחוברת היחס: **כותרת הדף מימין, מספר העמוד בתוך עיגול משמאל, רקע לבן וקו אופקי דק בצבע כחול־כהה מתחת לכותרת**.\n2. צבע המסגרת, הכותרת ועיגול המספר הוא כחול־כהה אחיד בסגנון \`#1f2a44\`; אין קופסת כותרת כבדה, gradient, צל או קישוט דמו.\n3. בכותרת עצמה נשארים רק שם הדף ומספר העמוד; kicker, subtitle, breadcrumb, טווח רמות ומלל מטא אינם מוצגים.\n4. שורת הסיכום/הכלל שמופיעה בראש תוכן הדף אינה פסקת מידע פסיבית. היא מוצגת כ־**משימת השלמה לתלמיד** בסגנון הפרויקטים הקודמים: המילה \"השלימו:\" ולאחריה משפט קצר עם 1–2 חוסרים מושגיים משמעותיים.\n5. החוסרים יהיו קצרים ומידתיים למילה/לביטוי שהתלמיד אמור להשלים; אין להשתמש בקו ארוך שרירותי כאשר נדרשת מילה קצרה.\n6. אין למחוק את הידע המתמטי של הסיכום: נשמר ניסוח שמאפשר לתלמיד לשחזר את העיקרון מתוך ההקשר, והחסרים נבחרים מתוך מושגי המפתח ולא מתוך מילים טפלות.\n7. ביטויים מתמטיים בתוך שורת ההשלמה ממשיכים לעמוד בכללי LTR/KaTeX של סעיף 23.\n8. הכלל חל על **כל הדפים הקיימים וכל דף עתידי** ונאכף ב־Regression QA וב־Chromium. אם תיקון עיצובי בכותרת או בסיכום מתגלה בדף אחד, מבצעים impact scan על כל הספר.\n9. \`razpages\`, \`ratio-workbook\` ופרויקטים קודמים משמשים **מקורות לימוד/Reference לעיצוב ולדפוסי UX בלבד**; הם אינם מקור אמת של הפרויקט. \`SOURCE_OF_TRUTH.md\` נשאר מקור האמת היחיד והבלעדי.\n`;
    fs.writeFileSync(truthPath,truth,'utf8');
  }
}

function ensureCss(){
  if(!fs.existsSync(cssPath)) return err('Missing styles/a4-base.css');
  let css=fs.readFileSync(cssPath,'utf8');
  if(!css.includes('/* RazPages header + completion summary contract */')){
    css=css.trimEnd()+`\n\n/* RazPages header + completion summary contract */\n.page-header { min-height:15mm; padding:4.2mm 0 3mm; margin-bottom:5mm; display:flex; align-items:center; justify-content:space-between; gap:10mm; background:#fff; color:#1f2a44; border:0; border-bottom:1.5px solid #1f2a44; box-shadow:none; }\n.page-header h1 { margin:0; color:#1f2a44; font-size:21pt; line-height:1.15; font-weight:750; letter-spacing:0; }\n.page-no { width:12mm; min-width:12mm; height:12mm; display:inline-flex; align-items:center; justify-content:center; border:1.5px solid #1f2a44; border-radius:50%; color:#1f2a44; background:#fff; box-shadow:none; font-size:12pt; font-weight:700; }\n.rule-card.completion-summary { margin:0 0 5mm; padding:3mm 4mm; display:flex; align-items:baseline; gap:2mm; flex-wrap:wrap; background:#eef6f8; border:1px solid #dbe3ef; border-right:3px solid #1f2a44; border-radius:3mm; }\n.summary-label { color:#1f2a44; font-weight:800; white-space:nowrap; }\n.completion-sentence { flex:1 1 90mm; min-width:0; }\n.summary-blank { display:inline-block; height:1.05em; margin-inline:1.5mm; vertical-align:baseline; border-bottom:1.4px solid #1f2a44; }\n.summary-blank-short { min-width:12mm; }\n.summary-blank-medium { min-width:23mm; }\n.summary-blank-long { min-width:38mm; }\n@media print { .page-header { min-height:13mm; padding:2.8mm 0 2.2mm; margin-bottom:3mm; } .page-header h1 { font-size:18.5pt; } .page-no { width:10.5mm; min-width:10.5mm; height:10.5mm; font-size:10.5pt; } .rule-card.completion-summary { padding:2.2mm 3mm; margin-bottom:3mm; border-radius:2mm; } }\n`;
    fs.writeFileSync(cssPath,css,'utf8');
  }
}

function rewritePages(){
  for(const p of pages){
    const file=path.join(ROOT,`עמוד-${p.page}.html`);
    if(!fs.existsSync(file)){err(`Missing generated page ${p.page}`);continue;}
    let html=fs.readFileSync(file,'utf8');
    const summary=renderCompletionSummary(p);
    if(/<section class="rule-card completion-summary"[\s\S]*?<\/section>/.test(html)){
      html=html.replace(/<section class="rule-card completion-summary"[\s\S]*?<\/section>/,summary);
    }else if(/<div class="rule-card">[\s\S]*?<\/div>/.test(html)){
      html=html.replace(/<div class="rule-card">[\s\S]*?<\/div>/,summary);
    }else{
      err(`Page ${p.page}: no top rule/summary block found`);
      continue;
    }
    fs.writeFileSync(file,html,'utf8');
  }
}

function validateOutputs(){
  const css=fs.existsSync(cssPath)?fs.readFileSync(cssPath,'utf8'):'';
  if(!css.includes('/* RazPages header + completion summary contract */')) err('RazPages header CSS contract missing');
  for(const p of pages){
    const file=path.join(ROOT,`עמוד-${p.page}.html`);
    if(!fs.existsSync(file)) continue;
    const html=fs.readFileSync(file,'utf8');
    const header=(html.match(/<header class="page-header">[\s\S]*?<\/header>/)||[])[0]||'';
    if(!/<h1>[^<]+<\/h1>/.test(header)||!header.includes('class="page-no"')) err(`Page ${p.page}: RazPages-style title/page-number header missing`);
    const summary=(html.match(/<section class="rule-card completion-summary"[\s\S]*?<\/section>/)||[])[0]||'';
    if(!summary.includes('השלימו:')) err(`Page ${p.page}: summary instruction missing`);
    const blanks=(summary.match(/class="summary-blank summary-blank-(?:short|medium|long)"/g)||[]).length;
    if(blanks<1||blanks>2) err(`Page ${p.page}: expected 1-2 summary blanks, found ${blanks}`);
  }
}

ensureTruth();
ensureCss();
rewritePages();
validateOutputs();

if(errors.length){
  console.error(`RAZPAGES/SUMMARY CONTRACT FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`RazPages header + active completion summaries applied to ${pages.length} pages.`);
