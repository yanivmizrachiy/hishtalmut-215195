import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const mode=process.argv.includes('--post')?'post':'pre';
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const buildPath=path.join(ROOT,'scripts','build-pages.mjs');
const cssPath=path.join(ROOT,'styles','a4-base.css');
const errors=[];
const err=m=>errors.push(m);

function ensureTruth(){
  if(!fs.existsSync(truthPath)) return err('Missing SOURCE_OF_TRUTH.md');
  let truth=fs.readFileSync(truthPath,'utf8');
  if(!truth.includes('## 28. כותרת בסגנון razpages וסיכום פעיל בהשלמות — חובה')){
    truth=truth.trimEnd()+`\n\n## 28. כותרת בסגנון razpages וסיכום פעיל בהשלמות — חובה\n\n1. הכותרת העליונה של כל דף נבנית לפי השפה החזותית הקנונית שנלמדה מ־\`razpages\` ומחוברת היחס: **כותרת הדף מימין, מספר העמוד בתוך עיגול משמאל, רקע לבן וקו אופקי דק בצבע כחול־כהה מתחת לכותרת**.\n2. צבע המסגרת, הכותרת ועיגול המספר הוא כחול־כהה אחיד בסגנון \`#1f2a44\`; אין קופסת כותרת כבדה, gradient, צל או קישוט דמו.\n3. בכותרת עצמה נשארים רק שם הדף ומספר העמוד; kicker, subtitle, breadcrumb, טווח רמות ומלל מטא אינם מוצגים.\n4. שורת הסיכום/הכלל שמופיעה בראש תוכן הדף אינה פסקת מידע פסיבית. היא מוצגת כ־**משימת השלמה לתלמיד** בסגנון הפרויקטים הקודמים: המילה \"השלימו:\" ולאחריה משפט קצר עם 1–2 חוסרים מושגיים משמעותיים.\n5. החוסרים יהיו קצרים ומידתיים למילה/לביטוי שהתלמיד אמור להשלים; אין להשתמש בקו ארוך שרירותי כאשר נדרשת מילה קצרה.\n6. אין למחוק את הידע המתמטי של הסיכום: נשמר ניסוח שמאפשר לתלמיד לשחזר את העיקרון מתוך ההקשר, והחסרים נבחרים מתוך מושגי המפתח ולא מתוך מילים טפלות.\n7. ביטויים מתמטיים בתוך שורת ההשלמה ממשיכים לעמוד בכללי LTR/KaTeX של סעיף 23.\n8. הכלל חל על **כל הדפים הקיימים וכל דף עתידי** ונאכף ב־Regression QA וב־Chromium. אם תיקון עיצובי בכותרת או בסיכום מתגלה בדף אחד, מבצעים impact scan על כל הספר.\n9. \`razpages\`, \`ratio-workbook\` ופרויקטים קודמים משמשים **מקורות לימוד/Reference לעיצוב ולדפוסי UX בלבד**; הם אינם מקור אמת של הפרויקט. \`SOURCE_OF_TRUTH.md\` נשאר מקור האמת היחיד והבלעדי.\n`;
    fs.writeFileSync(truthPath,truth,'utf8');
  }
}

function ensureBuild(){
  if(!fs.existsSync(buildPath)) return err('Missing scripts/build-pages.mjs');
  let build=fs.readFileSync(buildPath,'utf8');

  if(!build.includes('function renderCompletionSummary(')){
    const anchor='function navFor(page,total){';
    const at=build.indexOf(anchor);
    if(at<0) return err('Could not locate navFor() anchor in build-pages.mjs');
    const helper=`const SUMMARY_KEY_PHRASES=[\n  'קצב ההשתנות','נקודת החיתוך','פונקציה קווית','טבלת ערכים','זוג סדור',\n  'שיפוע','מקבילים','מקביל','עולה','יורד','קבוע','חיובי','שלילי','אפס',\n  'חיתוך','גרף','ישר','נקודה','שיעור'\n];\n\nfunction summaryBlankClass(answer=''){\n  const len=String(answer).replace(/[\\s.,:;()]/g,'').length;\n  return len<=4?'short':(len<=10?'medium':'long');\n}\n\nfunction summaryMathify(s=''){\n  return String(s).split(/(§§BLANK_(?:SHORT|MEDIUM|LONG)§§)/g).map(part=>{\n    const m=/^§§BLANK_(SHORT|MEDIUM|LONG)§§$/.exec(part);\n    if(m) return \\`<span class=\\"summary-blank summary-blank-\\${m[1].toLowerCase()}\\" aria-label=\\"מקום להשלמה\\"></span>\\`;\n    return mathify(part);\n  }).join('');\n}\n\nfunction completionRule(rule=''){\n  let source=String(rule||'').trim();\n  const math=[];\n  source=source.replace(/\\`[^\\`]*\\`/g,token=>\\`§§MATH_\\${math.push(token)-1}§§\\`);\n  let blanks=0;\n  for(const phrase of SUMMARY_KEY_PHRASES){\n    if(blanks>=2) break;\n    if(!source.includes(phrase)) continue;\n    source=source.replace(phrase,\\`§§BLANK_\\${summaryBlankClass(phrase).toUpperCase()}§§\\`);\n    blanks++;\n  }\n  if(blanks===0 && math.length){\n    source=source.replace('§§MATH_0§§','§§BLANK_MEDIUM§§');\n    blanks=1;\n  }\n  if(blanks===0){\n    const match=[...source.matchAll(/[א-ת]{4,}/g)].at(-1);\n    if(match){\n      const word=match[0];\n      source=source.slice(0,match.index)+\\`§§BLANK_\\${summaryBlankClass(word).toUpperCase()}§§\\`+source.slice(match.index+word.length);\n      blanks=1;\n    }\n  }\n  source=source.replace(/§§MATH_(\\d+)§§/g,(_,i)=>math[Number(i)]||'');\n  return source;\n}\n\nfunction renderCompletionSummary(p){\n  const completion=completionRule(p.summary || p.rule || '');\n  return \\`<section class=\\"rule-card completion-summary\\" data-summary-completion=\\"true\\"><strong class=\\"summary-label\\">השלימו:</strong><div class=\\"completion-sentence\\">\\${summaryMathify(completion)}</div></section>\\`;\n}\n\n`;
    build=build.slice(0,at)+helper+build.slice(at);
  }

  const legacy='<div class="rule-card">${mathify(p.rule)}</div>${pageGraph}';
  if(build.includes(legacy)) build=build.replace(legacy,'${renderCompletionSummary(p)}${pageGraph}');
  if(!build.includes('${renderCompletionSummary(p)}${pageGraph}')) err('build-pages.mjs does not render completion summaries');
  fs.writeFileSync(buildPath,build,'utf8');
}

function ensureCss(){
  if(!fs.existsSync(cssPath)) return err('Missing styles/a4-base.css');
  let css=fs.readFileSync(cssPath,'utf8');
  if(!css.includes('/* RazPages header + completion summary contract */')){
    css=css.trimEnd()+`\n\n/* RazPages header + completion summary contract */\n.page-header {\n  min-height: 15mm;\n  padding: 4.2mm 0 3mm;\n  margin-bottom: 5mm;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10mm;\n  background: #fff;\n  color: #1f2a44;\n  border: 0;\n  border-bottom: 1.5px solid #1f2a44;\n  box-shadow: none;\n}\n.page-header h1 {\n  margin: 0;\n  color: #1f2a44;\n  font-size: 21pt;\n  line-height: 1.15;\n  font-weight: 750;\n  letter-spacing: 0;\n}\n.page-no {\n  width: 12mm;\n  min-width: 12mm;\n  height: 12mm;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid #1f2a44;\n  border-radius: 50%;\n  color: #1f2a44;\n  background: #fff;\n  box-shadow: none;\n  font-size: 12pt;\n  font-weight: 700;\n}\n.rule-card.completion-summary {\n  margin: 0 0 5mm;\n  padding: 3mm 4mm;\n  display: flex;\n  align-items: baseline;\n  gap: 2mm;\n  flex-wrap: wrap;\n  background: #eef6f8;\n  border: 1px solid #dbe3ef;\n  border-right: 3px solid #1f2a44;\n  border-radius: 3mm;\n}\n.summary-label { color:#1f2a44; font-weight:800; white-space:nowrap; }\n.completion-sentence { flex:1 1 90mm; min-width:0; }\n.summary-blank {\n  display:inline-block;\n  height:1.05em;\n  margin-inline:1.5mm;\n  vertical-align:baseline;\n  border-bottom:1.4px solid #1f2a44;\n}\n.summary-blank-short { min-width:12mm; }\n.summary-blank-medium { min-width:23mm; }\n.summary-blank-long { min-width:38mm; }\n@media print {\n  .page-header { min-height:13mm; padding:2.8mm 0 2.2mm; margin-bottom:3mm; }\n  .page-header h1 { font-size:18.5pt; }\n  .page-no { width:10.5mm; min-width:10.5mm; height:10.5mm; font-size:10.5pt; }\n  .rule-card.completion-summary { padding:2.2mm 3mm; margin-bottom:3mm; border-radius:2mm; }\n}\n`;
    fs.writeFileSync(cssPath,css,'utf8');
  }
}

function postCheck(){
  const css=fs.existsSync(cssPath)?fs.readFileSync(cssPath,'utf8'):'';
  if(!css.includes('/* RazPages header + completion summary contract */')) err('RazPages header CSS contract missing');
  if(!css.includes('border-bottom: 1.5px solid #1f2a44')) err('RazPages thin navy header rule missing');
  for(const name of fs.readdirSync(ROOT)){
    if(!/^עמוד-\d+\.html$/.test(name)) continue;
    const html=fs.readFileSync(path.join(ROOT,name),'utf8');
    const header=(html.match(/<header class="page-header">[\s\S]*?<\/header>/)||[])[0]||'';
    if(!/<h1>[^<]+<\/h1>/.test(header)||!header.includes('class="page-no"')) err(`${name}: RazPages-style title/page-number header missing`);
    const summary=(html.match(/<section class="rule-card completion-summary"[\s\S]*?<\/section>/)||[])[0]||'';
    if(!summary) err(`${name}: completion summary missing`);
    else{
      if(!summary.includes('השלימו:')) err(`${name}: completion summary lacks the instruction השלימו`);
      if(!summary.includes('class="summary-blank ')) err(`${name}: completion summary has no student blank`);
    }
  }
}

ensureTruth();
ensureBuild();
ensureCss();
if(mode==='post') postCheck();

if(errors.length){
  console.error(`RAZPAGES/SUMMARY CONTRACT FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`RazPages header + completion-summary contract passed (${mode}).`);
