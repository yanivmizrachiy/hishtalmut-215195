import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const baseCssPath=path.join(ROOT,'styles','a4-base.css');
const layoutCssPath=path.join(ROOT,'styles','layout-contract.css');
const buildPath=path.join(ROOT,'scripts','build-pages.mjs');
const page1Path=path.join(ROOT,'content','pages','page-1.mjs');

function replaceOnce(text,from,to,label){
  if(text.includes(to)) return text;
  if(!text.includes(from)) throw new Error(`Hygiene migration target missing: ${label}`);
  return text.replace(from,to);
}

// 1) Normalize the single source of truth: unique section numbers + explicit hygiene contract.
let truth=fs.readFileSync(truthPath,'utf8');
truth=truth.replace('## 32. תצוגת נייד זהה להדפסה — חובה','## 33. תצוגת נייד זהה להדפסה — חובה');
const pause7='7. נקודת ההקפאה המחייבת בזמן ההשהיה היא **42 עמודים**. כל ניסיון להוסיף עמוד 43 ומעלה בזמן שהסעיף הזה פעיל חייב להיכשל אוטומטית ב־QA; הסרת הנעילה מותרת רק לאחר הוראה מפורשת של המשתמש לחדש יצירת תוכן ועדכון מקור האמת.';
const pause8='8. בזמן שההשהיה פעילה, סעיף זה גובר זמנית על הוראות ההתקדמות האוטומטית בסעיפים 20–21; אין כאן סתירה אלא מצב עבודה זמני ומפורש.';
if(truth.includes(pause7) && !truth.includes(pause8)) truth=truth.replace(pause7,`${pause7}\n${pause8}`);
const hygieneHeading='## 34. ניקיון ריפו ומקור אמת יחיד — חובה';
if(!truth.includes(hygieneHeading)){
  truth=truth.trimEnd()+`\n\n${hygieneHeading}\n\n1. \`SOURCE_OF_TRUTH.md\` הוא מסמך הדרישות היחיד. סקריפטי build/QA **קוראים ומאמתים** אותו אך אינם מוסיפים אליו, מתקנים אותו או כותבים אותו אוטומטית. שינוי בדרישות נכתב בו במפורש כחלק משינוי יזום בעקבות הוראת המשתמש.\n2. לכל סעיף עליון ממוספר במקור האמת מספר ייחודי; כפילות מספור, שתי גרסאות של אותו כלל או הוראות סותרות הן כשל QA.\n3. לכל אחריות רוחבית יש נקודת מימוש פעילה אחת: תוכן ב־\`content/pages/page-N.mjs\`, רינדור ב־\`scripts/build-pages.mjs\`, עיצוב A4 ב־\`styles/a4-base.css\`, registry ב־\`content/book-pages.mjs\` ו־config טכני ב־\`content/book-config.mjs\`.\n4. קבצי \`עמוד-N.html\` הם פלט בלבד. אסור להחזיק post-build patcher שמתקן HTML שכבר נבנה; כלל רינדור קבוע נכנס ישירות למנוע הבנייה.\n5. בדיקות QA הן read-only כלפי מקור האמת, קובצי התוכן וקוד הייצור. הן רשאיות ליצור רק דוחות/צילומי QA נגזרים או לעדכן manifest נגזר לפי החוזה המפורש שלו.\n6. שרשרת build/QA אינה מריצה את אותו validator או אותו contract פעמיים באותו מסלול ללא צורך טכני מוכח. אין מסלולי build מקבילים או validators כפולים לאותה אחריות.\n7. קובץ legacy, backup, temp, workflow מת, stylesheet פעיל כפול או סקריפט מיגרציה שסיים את תפקידו מוסרים מהארכיטקטורה הפעילה. חומרי מקור ב־\`sources/\` נשמרים כראיות ואינם נחשבים legacy רק מפני שאינם חלק ממנוע הייצור.\n8. \`main\` הוא נקודת הייחוס היחידה לעבודה מאומתת. ענף ניסיוני או ישן אינו מקור אמת ואינו בסיס להמשך; PR ניסיוני שאינו מיועד למיזוג נסגר. מחיקת branches ישנים מתבצעת כאשר כלי GitHub זמין לכך.\n9. \`scripts/validate-repo-hygiene.mjs\` אוכף את חוזה הניקיון הזה וחוסם חזרה של מקור אמת נוסף, מספור כפול, כתיבה אוטומטית למקור האמת, stylesheet פריסה פעיל נוסף, post-build patchers או מסלול build כפול.\n`;
}
fs.writeFileSync(truthPath,truth,'utf8');

// 2) Make a4-base.css the only active workbook layout stylesheet.
let baseCss=fs.readFileSync(baseCssPath,'utf8');
const layoutCss=fs.readFileSync(layoutCssPath,'utf8').trim();
const marker='/* Integrated canonical layout contract — SOURCE_OF_TRUTH §§31,34 */';
if(!baseCss.includes(marker)) baseCss=baseCss.trimEnd()+`\n\n${marker}\n${layoutCss}\n`;
fs.writeFileSync(baseCssPath,baseCss,'utf8');

// 3) Move completion-summary rendering and ordered-pair layout into the real renderer.
let build=fs.readFileSync(buildPath,'utf8');
if(!build.includes('function completionRule(page)')){
  const anchor="function syncKatexAssets(){";
  const helpers=`const COMPLETION_CONCEPTS=[\n  'קצב ההשתנות','נקודת החיתוך','פונקציה קווית','טבלת ערכים','זוג סדור','מערכת הצירים',\n  'שיפוע','מקבילים','מקביל','עולה','יורד','קבוע','חיובי','שלילי','אפס',\n  'חיתוך','גרף','ישר','נקודה','שיעור','ערך'\n];\n\nfunction completionBlankSize(answer=''){\n  const len=String(answer).replace(/[\\s.,:;()־-]/g,'').length;\n  return len<=4?'short':(len<=10?'medium':'long');\n}\n\nfunction completionRule(page){\n  if(page.page===1){\n    return {source:'בזוג הסדור \\`(x,y)\\`, שיעור ה־\\`x\\` מופיע §§BLANK_MEDIUM§§ בתוך הסוגריים, ושיעור ה־\\`y\\` מופיע §§BLANK_MEDIUM§§.',blankCount:2};\n  }\n  let source=String(page.summary||page.rule||'').trim();\n  const math=[];\n  source=source.replace(/\\`[^\\`]*\\`/g,token=>\`§§MATH_\${math.push(token)-1}§§\`);\n  const used=[];\n  for(const phrase of COMPLETION_CONCEPTS){\n    if(used.length>=2) break;\n    if(!source.includes(phrase)) continue;\n    source=source.replace(phrase,\`§§BLANK_\${completionBlankSize(phrase).toUpperCase()}§§\`);\n    used.push(phrase);\n  }\n  if(used.length<1&&math.length){ source=source.replace('§§MATH_0§§','§§BLANK_MEDIUM§§'); used.push(math[0]); }\n  if(used.length<1){\n    const candidates=[...source.matchAll(/[א-ת]{5,}/g)].filter(m=>!['כאשר','מתאים','בתוך','עבור','אפשר'].includes(m[0]));\n    const m=candidates.at(-1);\n    if(m){ source=source.slice(0,m.index)+\`§§BLANK_\${completionBlankSize(m[0]).toUpperCase()}§§\`+source.slice(m.index+m[0].length); used.push(m[0]); }\n  }\n  source=source.replace(/§§MATH_(\\d+)§§/g,(_,i)=>math[Number(i)]||'');\n  return {source,blankCount:used.length};\n}\n\nfunction renderCompletionText(source=''){\n  return String(source).split(/(§§BLANK_(?:SHORT|MEDIUM|LONG)§§)/g).map(part=>{\n    const m=/^§§BLANK_(SHORT|MEDIUM|LONG)§§$/.exec(part);\n    if(m) return \`<span class=\"summary-blank summary-blank-\${m[1].toLowerCase()}\" aria-label=\"מקום להשלמה\"></span>\`;\n    return mathify(part);\n  }).join('');\n}\n\nfunction summaryHtml(page){\n  const {source,blankCount}=completionRule(page);\n  if(blankCount<1||blankCount>2) throw new Error(\`Page \${page.page}: completion summary requires 1-2 blanks, found \${blankCount}\`);\n  return \`<section class=\"rule-card completion-summary\" data-summary-completion=\"true\"><strong class=\"summary-label\">השלימו:</strong><div class=\"completion-sentence\">\${renderCompletionText(source)}</div></section>\`;\n}\n\n`;
  if(!build.includes(anchor)) throw new Error('build-pages helper anchor missing');
  build=build.replace(anchor,helpers+anchor);
}
build=replaceOnce(build,"function renderSubparts(subparts=[]){\n  if(!subparts.length) return '';\n  return `<div class=\"subparts\">${subparts.map((sp,i)=>{","function renderSubparts(subparts=[],layout=''){\n  if(!subparts.length) return '';\n  const ordered=layout==='ordered-pair-grid';\n  const groupClass=ordered?'subparts ordered-pair-grid':'subparts';\n  const groupDir=ordered?' dir=\"ltr\"':'';\n  return `<div class=\"${groupClass}\"${groupDir}>${subparts.map((sp,i)=>{",'subparts layout signature');
build=replaceOnce(build,"    return `<div class=\"sub\"${sp.level?` data-level=\"${sp.level}\"`:''}>${mathify(sp.text || '')} ${writable}${sp.suffix?` ${mathify(sp.suffix)}`:''}</div>`;","    const subClass=ordered?'sub ordered-pair-answer':'sub';\n    const subDir=ordered?' dir=\"ltr\"':'';\n    return `<div class=\"${subClass}\"${subDir}${sp.level?` data-level=\"${sp.level}\"`:''}>${mathify(sp.text || '')} ${writable}${sp.suffix?` ${mathify(sp.suffix)}`:''}</div>`;",'ordered-pair subpart renderer');
build=replaceOnce(build,"  const subparts=renderSubparts(q.subparts);","  const subparts=renderSubparts(q.subparts,q.subpartsLayout);",'subparts layout call');
build=replaceOnce(build,"<header class=\"page-header\"><h1>${esc(p.title)}</h1><div class=\"page-no\">${p.page}</div></header><div class=\"rule-card\">${mathify(p.rule)}</div>${pageGraph}","<header class=\"page-header\"><h1>${esc(p.title)}</h1><div class=\"page-no\">${p.page}</div></header>${summaryHtml(p)}${pageGraph}",'completion summary in renderer');
fs.writeFileSync(buildPath,build,'utf8');

// 4) Make the page-1 ordered-pair layout explicit data, not a post-build HTML patch.
let page1=fs.readFileSync(page1Path,'utf8');
if(!page1.includes('"subpartsLayout": "ordered-pair-grid"')){
  page1=page1.replace('"stem": "קראו את שיעורי הנקודות המסומנות.",','"stem": "קראו את שיעורי הנקודות המסומנות.",\n      "subpartsLayout": "ordered-pair-grid",');
}
fs.writeFileSync(page1Path,page1,'utf8');

console.log('One-time repo hygiene migration applied: source truth normalized, layout consolidated, renderer owns canonical output.');
