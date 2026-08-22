import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';
import { pages } from '../content/book-pages.mjs';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const errors=[];
const err=m=>errors.push(m);
const esc=(s='')=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function renderMath(tex){
  return '<bdi class="math-isolate" dir="ltr">'+katex.renderToString(String(tex),{throwOnError:false,strict:'warn',output:'htmlAndMathml'})+'</bdi>';
}

function mathify(s=''){
  return String(s).split(/(`[^`]*`)/g).map(part=>{
    if(part.startsWith('`')&&part.endsWith('`')) return renderMath(part.slice(1,-1));
    return esc(part).replace(/\b([xy]|m|b)\b/g,token=>renderMath(token));
  }).join('');
}

const CONCEPTS=[
  'קצב ההשתנות','נקודת החיתוך','פונקציה קווית','טבלת ערכים','זוג סדור','מערכת הצירים',
  'שיפוע','מקבילים','מקביל','עולה','יורד','קבוע','חיובי','שלילי','אפס',
  'חיתוך','גרף','ישר','נקודה','שיעור','ערך'
];

function blankSize(answer=''){
  const len=String(answer).replace(/[\s.,:;()־-]/g,'').length;
  return len<=4?'short':(len<=10?'medium':'long');
}

function completionRule(page){
  if(page.page===1){
    return {source:'בזוג הסדור `(x,y)`, שיעור ה־`x` מופיע §§BLANK_MEDIUM§§ בתוך הסוגריים, ושיעור ה־`y` מופיע §§BLANK_MEDIUM§§.',blankCount:2};
  }

  let source=String(page.summary||page.rule||'').trim();
  const math=[];
  source=source.replace(/`[^`]*`/g,token=>`§§MATH_${math.push(token)-1}§§`);
  const used=[];

  for(const phrase of CONCEPTS){
    if(used.length>=2) break;
    if(!source.includes(phrase)) continue;
    source=source.replace(phrase,`§§BLANK_${blankSize(phrase).toUpperCase()}§§`);
    used.push(phrase);
  }

  if(used.length<1 && math.length){
    source=source.replace('§§MATH_0§§','§§BLANK_MEDIUM§§');
    used.push(math[0]);
  }

  if(used.length<1){
    const candidates=[...source.matchAll(/[א-ת]{5,}/g)].filter(m=>!['כאשר','מתאים','בתוך','עבור','אפשר'].includes(m[0]));
    const m=candidates.at(-1);
    if(m){
      source=source.slice(0,m.index)+`§§BLANK_${blankSize(m[0]).toUpperCase()}§§`+source.slice(m.index+m[0].length);
      used.push(m[0]);
    }
  }

  source=source.replace(/§§MATH_(\d+)§§/g,(_,i)=>math[Number(i)]||'');
  return {source,blankCount:used.length};
}

function renderCompletionText(source=''){
  return String(source).split(/(§§BLANK_(?:SHORT|MEDIUM|LONG)§§)/g).map(part=>{
    const m=/^§§BLANK_(SHORT|MEDIUM|LONG)§§$/.exec(part);
    if(m) return `<span class="summary-blank summary-blank-${m[1].toLowerCase()}" aria-label="מקום להשלמה"></span>`;
    return mathify(part);
  }).join('');
}

function summaryHtml(page){
  const {source,blankCount}=completionRule(page);
  if(blankCount<1||blankCount>2) err(`Page ${page.page}: completion summary has ${blankCount} blanks; expected 1-2`);
  return `<section class="rule-card completion-summary" data-summary-completion="true"><strong class="summary-label">השלימו:</strong><div class="completion-sentence">${renderCompletionText(source)}</div></section>`;
}

function ensureTruth(){
  if(!fs.existsSync(truthPath)) return err('Missing SOURCE_OF_TRUTH.md');
  let truth=fs.readFileSync(truthPath,'utf8');
  if(truth.includes('## 31. כותרת בסגנון razpages וסיכום פעיל בהשלמות — חובה')) return;
  truth=truth.trimEnd()+`\n\n## 31. כותרת בסגנון razpages וסיכום פעיל בהשלמות — חובה\n\n1. הכותרת העליונה של כל דף נבנית לפי השפה החזותית הקנונית שנלמדה מ־\`razpages\` ומחוברת היחס: **כותרת הדף מימין, מספר העמוד בתוך עיגול משמאל, רקע לבן וקו אופקי דק בצבע כחול־כהה מתחת לכותרת**.\n2. צבע הכותרת, הקו ועיגול המספר הוא כחול־כהה אחיד \`#1f2a44\`; אין קופסת כותרת כבדה, gradient, shadow או קישוט דמו.\n3. בכותרת עצמה מוצגים רק שם הדף ומספר העמוד. kicker, subtitle, breadcrumb, טווח רמות ומלל מטא נשארים נתונים פנימיים בלבד.\n4. שורת הסיכום/הכלל בראש תוכן הדף אינה טקסט פסיבי. היא מוצגת כ־**משימת השלמה לתלמיד**: המילה \"השלימו:\" ולאחריה משפט קצר עם 1–2 חוסרים מושגיים משמעותיים.\n5. החוסרים מותאמים לאורך התשובה: short / medium / long. אין קו ארוך שרירותי למילה קצרה.\n6. נשמר הידע המתמטי של הסיכום; מחסירים מושגי מפתח ולא מילים טפלות.\n7. ביטויים מתמטיים בתוך שורת ההשלמה כפופים לכללי LTR/KaTeX המחייבים.\n8. הכלל חל על כל הדפים הקיימים ועל כל דף עתידי ונאכף ב־Regression QA וב־Chromium. תיקון בכותרת או בסיכום בדף אחד מחייב impact scan על כל הספר.\n9. \`razpages\`, \`ratio-workbook\` ופרויקטים קודמים הם Reference לעיצוב ול־UX בלבד; הם אינם מקור אמת. **\`SOURCE_OF_TRUTH.md\` נשאר מקור האמת היחיד והבלעדי.**\n`;
  fs.writeFileSync(truthPath,truth,'utf8');
}

function rewritePages(){
  for(const page of pages){
    const file=path.join(ROOT,`עמוד-${page.page}.html`);
    if(!fs.existsSync(file)){err(`Missing generated page ${page.page}`);continue;}
    let html=fs.readFileSync(file,'utf8');
    const summary=summaryHtml(page);
    if(/<section class="rule-card completion-summary"[\s\S]*?<\/section>/.test(html)){
      html=html.replace(/<section class="rule-card completion-summary"[\s\S]*?<\/section>/,summary);
    }else if(/<div class="rule-card">[\s\S]*?<\/div>/.test(html)){
      html=html.replace(/<div class="rule-card">[\s\S]*?<\/div>/,summary);
    }else{
      err(`Page ${page.page}: top rule-card missing`);
      continue;
    }
    fs.writeFileSync(file,html,'utf8');
  }
}

function validateOutputs(){
  for(const page of pages){
    const file=path.join(ROOT,`עמוד-${page.page}.html`);
    if(!fs.existsSync(file)) continue;
    const html=fs.readFileSync(file,'utf8');
    const header=(html.match(/<header class="page-header">[\s\S]*?<\/header>/)||[])[0]||'';
    if(!/<h1>[^<]+<\/h1>/.test(header)||!header.includes('class="page-no"')) err(`Page ${page.page}: clean title/page-number header missing`);
    if(/kicker|subtitle|breadcrumb|רמות\s*\d/.test(header)) err(`Page ${page.page}: forbidden title metadata rendered`);
    const summary=(html.match(/<section class="rule-card completion-summary"[\s\S]*?<\/section>/)||[])[0]||'';
    if(!summary.includes('השלימו:')) err(`Page ${page.page}: completion instruction missing`);
    const blanks=(summary.match(/class="summary-blank summary-blank-(?:short|medium|long)"/g)||[]).length;
    if(blanks<1||blanks>2) err(`Page ${page.page}: expected 1-2 completion blanks, found ${blanks}`);
  }
}

ensureTruth();
rewritePages();
validateOutputs();
if(errors.length){
  console.error(`RAZPAGES HEADER/SUMMARY CONTRACT FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`RazPages header + active completion-summary contract applied to ${pages.length} pages.`);
