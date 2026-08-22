import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const mode=process.argv.includes('--post')?'post':'pre';
const sourceTruthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const buildPath=path.join(ROOT,'scripts','build-pages.mjs');
const errors=[];

const forbiddenTruthBasename=/^(?:RULES|REQUIREMENTS|PROJECT[_-]?RULES|PROJECT[_-]?REQUIREMENTS|SOURCE[_ -]?OF[_ -]?TRUTH)\.md$/i;
function walk(dir){
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    if(entry.name==='.git'||entry.name==='node_modules'||entry.name==='sources') continue;
    const full=path.join(dir,entry.name);
    if(entry.isDirectory()) walk(full);
    else if(forbiddenTruthBasename.test(entry.name)){
      const rel=path.relative(ROOT,full).replaceAll('\\','/');
      if(rel!=='SOURCE_OF_TRUTH.md') errors.push(`Additional source-of-truth-like file is forbidden: ${rel}`);
    }
  }
}

if(!fs.existsSync(sourceTruthPath)) errors.push('SOURCE_OF_TRUTH.md is missing from repository root');
else{
  let truth=fs.readFileSync(sourceTruthPath,'utf8');
  const oldIdentity='4. שם הפרויקט הוא **פונקציה קווית**; שם הריפו ב-GitHub צריך להיות שם זה או slug מקביל וברור של פונקציה קווית.';
  const newIdentity='4. שם הפרויקט הוא **פונקציה קווית**; שם הריפו המדויק ב-GitHub חייב להיות `linear-function`.';
  if(truth.includes(oldIdentity)) truth=truth.replace(oldIdentity,newIdentity);
  if(!truth.includes('## 22. זהות הריפו, מקור אמת וכותרת דף נקייה — חובה')){
    truth=truth.trimEnd()+`\n\n## 22. זהות הריפו, מקור אמת וכותרת דף נקייה — חובה\n\n1. שם הריפו המדויק ב-GitHub חייב להיות **\`linear-function\`**.\n2. **\`SOURCE_OF_TRUTH.md\` בשורש הריפו הוא מקור האמת היחיד והבלעדי.** README, manifests, מפות משפחות, אינדקסים וקובצי נתונים הם נגזרים בלבד ואסור להגדיר אף אחד מהם כמקור אמת נוסף.\n3. אסור ליצור \`RULES.md\`, \`REQUIREMENTS.md\`, \`PROJECT_RULES.md\`, עותק נוסף של \`SOURCE_OF_TRUTH.md\` או כל מסמך מקביל שמתיימר להיות מקור אמת.\n4. בכותרת המודפסת והדיגיטלית של כל דף A4 מוצגים **רק הכותרת הגדולה של הדף ומספר העמוד**.\n5. אסור להציג מעל הכותרת או מתחתיה kicker, breadcrumb, subtitle, תיאור מסלול, טווח רמות או מלל דמו כגון \"ידע מקדים · קריאת גרף\" ו־\"קריאה ישירה → שאלה הפוכה → סימון ערך · רמות…\". נתונים כאלה יכולים להישמר כמטא־דאטה פנימי בלבד ואינם מרונדרים בדף.\n6. הכלל חל על כל הדפים הקיימים ועל כל דף חדש, ונאכף אוטומטית ב־QA.\n7. דרישות סגנון חוזרות של המשתמש נרשמות במקור האמת ומיושמות ברמת המנוע המשותף, כדי שהמערכת תלמד את הסגנון באופן עקבי לאורך זמן ולא תחזור לברירות מחדל שנדחו.\n`;
  }
  fs.writeFileSync(sourceTruthPath,truth,'utf8');
}

walk(ROOT);

if(fs.existsSync(buildPath)){
  let build=fs.readFileSync(buildPath,'utf8');
  const oldHeader='<header class="page-header"><div><div class="kicker">${esc(p.kicker)}</div><h1>${esc(p.title)}</h1><p class="subtitle">${esc(p.subtitle)}</p></div><div class="page-no">${p.page}</div></header>';
  const cleanHeader='<header class="page-header"><h1>${esc(p.title)}</h1><div class="page-no">${p.page}</div></header>';
  if(build.includes(oldHeader)) build=build.replace(oldHeader,cleanHeader);
  if(build.includes('class="kicker">${esc(p.kicker)}')||build.includes('class="subtitle">${esc(p.subtitle)}')) errors.push('build-pages.mjs still renders demo kicker/subtitle around the main title');
  fs.writeFileSync(buildPath,build,'utf8');
}

if(mode==='post'){
  for(const name of fs.readdirSync(ROOT)){
    if(!/^עמוד-\d+\.html$/.test(name)) continue;
    const html=fs.readFileSync(path.join(ROOT,name),'utf8');
    if(/class="(?:kicker|subtitle)"/.test(html)) errors.push(`${name}: forbidden demo kicker/subtitle still rendered`);
  }
}

if(errors.length){
  console.error(`PROJECT CONTRACT FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Project contract passed (${mode}): single source of truth and clean title-only page header enforced.`);
