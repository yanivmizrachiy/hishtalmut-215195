import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const mode=process.argv.includes('--post')?'post':'pre';
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const buildPath=path.join(ROOT,'scripts','build-pages.mjs');
const cssPath=path.join(ROOT,'styles','a4-base.css');
const pageDefsPath=path.join(ROOT,'content','page-definitions.mjs');
const validatorPath=path.join(ROOT,'scripts','validate-content.mjs');
const errors=[];

const STYLE_SECTION=`

## 27. פרופיל עיצוב וכתיבה קנוני — נגזר מ״מערכת צירים: הרביע הראשון״

הכללים הכלליים של ריפו \`yanivmizrachiy/coordinate-first-quadrant\` משמשים מעתה תקן עיצוב/כתיבה מחייב לספר פונקציה קווית, כל עוד אינם סותרים כלל ספציפי יותר במקור אמת זה. אין להעתיק מגבלות תוכן ייחודיות לרביע הראשון; מעבירים את שפת הספר, הכתיבה, ההדפסה וה-QA.

1. כל גיליון הוא A4 אמיתי. אם עמוד צפוף — מפצלים/משנים תוכן; לא מקטינים כתב עד חוסר קריאות ולא מאפשרים חיתוך.
2. גוף הטקסט הקנוני בגיליון הוא 13px. כותרות, מספר עמוד וחריגים נקודתיים יכולים להיות גדולים יותר; אין טקסט זעיר לצורך ״דחיסה״.
3. פלטת הספר הקנונית: דיו \`#1f2a44\`, כחול ראשי \`#1d4ed8\`, טקסט משני \`#5f6b7a\`, גבול \`#cbd3df\`, רקע רך \`#f6f8fb\`, נייר לבן. שינוי צבע עתידי נעשה דרך tokens משותפים בלבד.
4. גופן עברי: \`Noto Sans Hebrew\`/\`Noto Sans\` עם fallback מערכת; מתמטיקה נשארת דרך KaTeX ובידוד LTR.
5. מספר העמוד מוצג בעיגול כהה וברור בגובה הכותרת, בגודל קנוני 54×54px במסך ובהדפסה אלא אם QA מחייב התאמה אחידה לכל הספר.
6. בכל דף נשארת כותרת ראשית אחת בלבד + מספר עמוד, בהתאם לכלל 22. אין subtitle/kicker/breadcrumb גלוי.
7. זוג סדור עם שם נקודה נכתב \`A(x,y)\`, לא \`A = (x,y)\`. כאשר התלמיד משלים שיעורי נקודה, מציגים \`A(__ , __)\` עם שני שדות קצרים — לא \`A = ______\` ארוך. במודל הנתונים זהו \`pairName\` בתוך \`responseSpace: mixed\`, לא סוג responseSpace נפרד.
8. בתוך משפט עברי כותבים ״הנקודה A״, ״ציר x״ ו״ציר y״. זוגות סדורים, חישובים, משוואות, מספרים שליליים ושמות מתמטיים הם LTR מבודד.
9. ברירת המחדל היא ניסוח קצר, ברור ופתיר על נייר. שדות השלמה מותאמים לסוג התשובה; קו כתיבה אינו רחב יותר מהנדרש לתשובה קצרה.
10. שרטוטים וגרפים חייבים להיות גדולים וברורים, לא ״לצוף״ בתוך מסגרת גדולה עם שטח ריק מיותר. אין יותר משני שרטוטים משמעותיים בשורה כאשר נדרשת קריאה/כתיבה.
11. גרף/שרטוט לעולם אינו חוצה את גבולות הכרטיס/העמוד. תוויות צירים, מספרים, נקודות וחצים אינם חופפים ואינם מסתירים זה את זה.
12. ה-footer הקנוני בכל עמוד כולל את שתי השורות: \`יניב רז - מדריך מחוזי חט״ב בעיר ירושלים\` ו-\`הדרכה במחוז ירושלים והעיר ירושלים - מנח״י, בהובלת איילת קריספין\`. אין להחליף אותו במטא-דאטה טכני של משפחות שאלות.
13. בטלפון מציגים את אותו A4 מוקטן חזותית, לא פריסה מחודשת שמשנה טורים/יחסים. כללי mobile הם \`screen\` בלבד ואסור להם לזהם PDF/print.
14. בעיה רוחבית מתקנים במנוע/רכיב המשותף ומוסיפים regression test; אין patch נקודתי לעמוד אחד כאשר אותו דפוס יכול להופיע בדפים נוספים.
15. כל שינוי נראה לעין מחייב build מלא ו-Chromium visual QA על כל הספר. אין הכרזת סיום לפני PASS מלא.
16. ריפו ״רביע ראשון״ הוא reference design בלבד ואינו מקור אמת נוסף. כל כלל שהועבר ממנו ונעשה מחייב נכתב כאן; מכאן ואילך \`SOURCE_OF_TRUTH.md\` נשאר הסמכות היחידה.
`;

if(fs.existsSync(truthPath)){
  let truth=fs.readFileSync(truthPath,'utf8');
  if(!truth.includes('## 27. פרופיל עיצוב וכתיבה קנוני')) truth=truth.trimEnd()+STYLE_SECTION+'\n';
  else truth=truth.replace(/## 27\. פרופיל עיצוב וכתיבה קנוני[\s\S]*?(?=\n## \d+\.|$)/,STYLE_SECTION.trim()+'\n');
  fs.writeFileSync(truthPath,truth,'utf8');
}else errors.push('Missing SOURCE_OF_TRUTH.md');

if(fs.existsSync(pageDefsPath)){
  let src=fs.readFileSync(pageDefsPath,'utf8');
  for(const name of ['A','B','C','D']){
    const old=`{label:'', text:'\`${name} =\`', responseSpace:'equation'}`;
    const replacement=`{label:'', text:'', pairName:'${name}', responseSpace:'mixed'}`;
    src=src.replace(old,replacement);
    src=src.replace(`{label:'', pairName:'${name}', responseSpace:'ordered-pair'}`,replacement);
  }
  fs.writeFileSync(pageDefsPath,src,'utf8');
}

if(fs.existsSync(buildPath)){
  let build=fs.readFileSync(buildPath,'utf8');
  if(!build.includes('function normalizeMathNotation')){
    build=build.replace('function renderMath(tex){',`function normalizeMathNotation(tex=''){
  return String(tex).replace(/\\b([A-Z])\\s*=\\s*\\(([^()]+)\\)/g,'$1($2)');
}

function renderMath(tex){`);
    build=build.replace('katex.renderToString(String(tex), {','katex.renderToString(normalizeMathNotation(tex), {');
  }
  if(!build.includes('function orderedPairBlank')){
    build=build.replace('function response(type){',`function orderedPairBlank(name=''){
  return '<span class="pair-response" dir="ltr"><span class="pair-name">'+esc(name)+'</span>(<span class="pair-blank"></span>,<span class="pair-blank"></span>)</span>';
}

function response(type){`);
  }
  const orderedOld="const writable=sp.responseSpace==='ordered-pair'?orderedPairBlank(sp.pairName||''):Array.from({length:repeats},()=>response(sp.responseSpace || 'short')).join(sp.betweenAnswers ? ` ${mathify(sp.betweenAnswers)} ` : ' ');";
  const orderedNew="const writable=sp.pairName?orderedPairBlank(sp.pairName):Array.from({length:repeats},()=>response(sp.responseSpace || 'short')).join(sp.betweenAnswers ? ` ${mathify(sp.betweenAnswers)} ` : ' ');";
  if(build.includes(orderedOld)) build=build.replace(orderedOld,orderedNew);
  else if(!build.includes('sp.pairName?orderedPairBlank')){
    const old="const writable=Array.from({length:repeats},()=>response(sp.responseSpace || 'short')).join(sp.betweenAnswers ? ` ${mathify(sp.betweenAnswers)} ` : ' ');";
    if(build.includes(old)) build=build.replace(old,orderedNew); else errors.push('Could not patch named ordered-pair rendering');
  }
  if(!build.includes('function canonicalFooter')){
    build=build.replace('function renderPage(p,total){',`function canonicalFooter(){
  return '<footer class="footer canonical-footer"><div class="footer-lines"><div>יניב רז - מדריך מחוזי חט"ב בעיר ירושלים</div><div>הדרכה במחוז ירושלים והעיר ירושלים - מנח"י, בהובלת איילת קריספין</div></div></footer>';
}

function renderPage(p,total){`);
  }
  fs.writeFileSync(buildPath,build,'utf8');
}else errors.push('Missing scripts/build-pages.mjs');

if(fs.existsSync(validatorPath)){
  let validator=fs.readFileSync(validatorPath,'utf8');
  validator=validator.replace("if(!sp.text) err(`${q.id} subpart ${i+1}: missing text`);","if(!sp.text&&!sp.pairName) err(`${q.id} subpart ${i+1}: missing text`);");
  fs.writeFileSync(validatorPath,validator,'utf8');
}

if(fs.existsSync(cssPath)){
  let css=fs.readFileSync(cssPath,'utf8');
  if(!css.includes('/* First-quadrant canonical workbook profile */')){
    css=css.trimEnd()+`\n\n/* First-quadrant canonical workbook profile */\n:root{--ink:#1f2a44;--muted:#5f6b7a;--accent:#1d4ed8;--accent-soft:#eef4ff;--line:#cbd3df;--grid:#e7eaf1;--paper:#fff;--screen:#eef1f5;--soft:#f6f8fb;--font-he:"Noto Sans Hebrew","Noto Sans","Segoe UI",Arial,sans-serif;--font-math:"Noto Sans","Segoe UI",Arial,sans-serif;}\nbody{font-family:var(--font-he);font-size:13px;line-height:1.5;}\n.a4-page{padding:13mm 14mm 18mm;}\n.page-header{border-bottom:2px solid var(--ink);padding-bottom:4mm;margin-bottom:4mm;}\nh1{font-size:27px;line-height:1.15;letter-spacing:0;}\n.page-no{min-width:54px;width:54px;height:54px;border:0;border-radius:50%;background:var(--ink);color:#fff;font-size:28px;font-weight:900;}\n.exercise-number{color:var(--accent);font-weight:900;}\n.math-isolate,.katex,.pair-response{direction:ltr!important;unicode-bidi:isolate!important;}\n.pair-response{display:inline-flex;align-items:baseline;gap:3px;font-family:var(--font-math);font-weight:700;white-space:nowrap;}\n.pair-name{margin-inline-end:1px;}\n.pair-blank{display:inline-block;width:18mm;height:1.15em;border-bottom:1.5px solid var(--ink);vertical-align:-.08em;}\n.answer-short{min-width:18mm;}\n.graph{max-width:100%;}\n.mini-grid.cols-3{grid-template-columns:repeat(2,minmax(0,1fr));}\n.canonical-footer{justify-content:flex-start;border-top:1.5px solid var(--accent);color:var(--muted);font-size:10px;line-height:1.35;}\n.footer-lines{display:grid;gap:1px;text-align:right;}\n@media print{body{font-size:13px;line-height:1.35}.a4-page{width:210mm;height:297mm;min-height:0;padding:9mm 10mm 16mm;overflow:hidden}.page-header{padding-bottom:2.5mm;margin-bottom:2.5mm}h1{font-size:23px}.page-no{min-width:54px;width:54px;height:54px;font-size:28px}.footer{left:10mm;right:10mm;bottom:4mm;font-size:9.5px}.mini-grid.cols-3{grid-template-columns:repeat(2,minmax(0,1fr));}}\n@media screen and (max-width:850px){body{overflow-x:auto}.a4-page{transform-origin:top center}.preview-nav{max-width:calc(100vw - 16px);width:auto;margin-inline:8px}}\n`;
    fs.writeFileSync(cssPath,css,'utf8');
  }
}else errors.push('Missing styles/a4-base.css');

if(mode==='post'){
  const truth=fs.existsSync(truthPath)?fs.readFileSync(truthPath,'utf8'):'';
  if(!truth.includes('A(__ , __)')) errors.push('Source of truth missing named ordered-pair completion format');
  const css=fs.existsSync(cssPath)?fs.readFileSync(cssPath,'utf8'):'';
  for(const required of ['--ink:#1f2a44','font-size:13px','width:54px','pair-response','canonical-footer']) if(!css.includes(required)) errors.push(`Canonical workbook CSS rule missing: ${required}`);
  for(const name of fs.readdirSync(ROOT).filter(n=>/^עמוד-\d+\.html$/.test(n))){
    const html=fs.readFileSync(path.join(ROOT,name),'utf8');
    if(!html.includes('class="footer canonical-footer"')) errors.push(`${name}: canonical footer missing`);
  }
  const p1=path.join(ROOT,'עמוד-1.html');
  if(fs.existsSync(p1)){
    const html=fs.readFileSync(p1,'utf8');
    const count=(html.match(/class="pair-response"/g)||[]).length;
    if(count<4) errors.push(`עמוד-1.html: expected four named ordered-pair response fields, found ${count}`);
    if(/>A\s*=|>B\s*=|>C\s*=|>D\s*=/.test(html)) errors.push('עמוד-1.html: legacy A = / B = / C = / D = response format remains');
  }
}

if(errors.length){console.error(`FIRST-QUADRANT STYLE CONTRACT FAILED (${errors.length})`);console.error(errors.join('\n'));process.exit(1);}
console.log(`First-quadrant canonical workbook profile enforced (${mode}).`);
