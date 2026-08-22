import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const mode=process.argv.includes('--post')?'post':'pre';
const sourceTruthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const buildPath=path.join(ROOT,'scripts','build-pages.mjs');
const cssPath=path.join(ROOT,'styles','a4-base.css');
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
  if(!truth.includes('## 23. כיוון כתיבה מתמטי בתוך RTL — חובה')){
    truth=truth.trimEnd()+`\n\n## 23. כיוון כתיבה מתמטי בתוך RTL — חובה\n\n1. הדף כולו נשאר RTL בעברית, אבל **כל ביטוי מתמטי הוא יחידת LTR מבודדת**.\n2. מספר שלילי נכתב ומוצג תמיד בסדר המתמטי המקובל: סימן המינוס לפני המספר, למשל \`-2\`, \`-4\`, \`-1/2\`. אסור ש־RTL יהפוך אותו חזותית ל־\`2-\` או \`4-\`.\n3. זוגות סדורים נשמרים בסדר LTR מלא, למשל \`(-4,3)\`, ולא מתהפכים בגלל הקשר עברי.\n4. משוואות, שברים, חזקות, פונקציות, תחומי ערכים וסימוני \`x,y,f(x),m,b\` מוצגים LTR ומבודדים מהטקסט העברי שסביבם.\n5. רינדור KaTeX חייב להיות עטוף ב־\`<bdi dir=\"ltr\">\` או מנגנון שקול וחזק יותר, ובנוסף CSS מפורש של \`direction:ltr\` ו־\`unicode-bidi:isolate\`.\n6. גם טקסט מתמטי בתוך SVG, מערכות צירים, תוויות נקודות וטבלאות חייב לשמור על כיוון מתמטי תקין.\n7. הכלל נאכף ברמת המנוע המשותף וב־QA, כדי שכל דף קיים ועתידי ירש אותו אוטומטית.\n`;
  }
  if(!truth.includes('## 24. פרוטוקול תיקון משתמש ורגרסיה כלל־פרויקטלית — חובה')){
    truth=truth.trimEnd()+`\n\n## 24. פרוטוקול תיקון משתמש ורגרסיה כלל־פרויקטלית — חובה\n\n1. כאשר המשתמש כותב תיקון, אין להתייחס אליו כברירת מחדל כאל תקלה מקומית בלבד. קודם בודקים אם אותו דפוס קיים בדפים נוספים, במנוע, בנתונים, ב־CSS, בגרפים, בטבלאות או בממשק הספר הדיגיטלי.\n2. לפני שינוי מבצעים **impact scan**: מאתרים את כל המקומות שעלולים להיות מושפעים מהתיקון ואת כל המימושים המקבילים של אותו רכיב/דפוס.\n3. אם התקלה נובעת מרכיב משותף, מתקנים את המנוע/הרכיב/הנתון המשותף ולא מטלאים עמוד יחיד.\n4. לאחר כל תיקון מריצים מחדש את כל שערי האיכות של הפרויקט: build מלא, בדיקות מבניות, Exact Math QA, בדיקות מקורות, בדיקות רגרסיה של תיקוני משתמש ו־Chromium A4 חזותי על **כל הדפים**.\n5. תיקון אינו נחשב הושלם ואינו נכנס ל־\`main\` לפני PASS מלא של כל השערים המחייבים.\n6. כל תיקון שכבר נקבע ככלל סגנוני/מתמטי/טכנולוגי מתווסף לבדיקת רגרסיה אוטומטית, כדי שתיקון עתידי לא יחזיר בעיה שכבר נפתרה.\n7. בדיקת רגרסיה חייבת לכלול לפחות את כללי הכותרת הנקייה, מקור האמת היחיד, כיוון LTR מבודד למתמטיקה, תקינות מספרים שליליים, רציפות ניווט, מרחבי תשובה, A4 ללא גלישה ודיוק מתמטי.\n8. אם התיקון משנה רכיב משותף, יש לבדוק גם דפים שלא הוזכרו על ידי המשתמש אך משתמשים באותו רכיב.\n9. אם בדיקה חושפת בעיה נוספת מאותה משפחה, מתקנים גם אותה באותו סבב לפני שממשיכים ביצירת תוכן חדש.\n10. המטרה היא שהמערכת תלמד באופן מצטבר: כל תיקון של המשתמש הופך, כאשר הוא כללי, לחוזה קבוע ולבדיקת רגרסיה שנשמרים בפרויקט.\n`;
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

  if(!build.includes('class="math-isolate" dir="ltr"')){
    const marker="return katex.renderToString(String(tex), {";
    const start=build.indexOf(marker);
    if(start<0) errors.push('Could not locate KaTeX render return for bidi isolation');
    else{
      const close=build.indexOf('  });',start);
      if(close<0) errors.push('Could not locate end of KaTeX render return');
      else{
        const original=build.slice(start,close+5);
        const inner=original.replace('return katex.renderToString(String(tex), {','katex.renderToString(String(tex), {').replace(/;\s*$/,'');
        build=build.slice(0,start)+`return '<bdi class="math-isolate" dir="ltr">'+${inner}+'</bdi>';`+build.slice(close+5);
      }
    }
  }
  fs.writeFileSync(buildPath,build,'utf8');
}

if(fs.existsSync(cssPath)){
  let css=fs.readFileSync(cssPath,'utf8');
  if(!css.includes('/* Mathematical bidi contract */')){
    css=css.trimEnd()+`\n\n/* Mathematical bidi contract */\n.math-isolate, .katex { direction:ltr !important; unicode-bidi:isolate !important; display:inline-block; text-align:left; }\n.math-isolate .katex, .katex .katex-html { direction:ltr !important; unicode-bidi:isolate !important; }\n.graph, .graph text, .table { direction:ltr !important; unicode-bidi:isolate !important; }\n`;
  }
  fs.writeFileSync(cssPath,css,'utf8');
}

if(mode==='post'){
  const css=fs.existsSync(cssPath)?fs.readFileSync(cssPath,'utf8'):'';
  if(!css.includes('.math-isolate, .katex { direction:ltr !important; unicode-bidi:isolate-override !important;')) errors.push('A4 CSS is missing the strict mathematical bidi contract');
  for(const name of fs.readdirSync(ROOT)){
    if(!/^עמוד-\d+\.html$/.test(name)) continue;
    const html=fs.readFileSync(path.join(ROOT,name),'utf8');
    if(/class="(?:kicker|subtitle)"/.test(html)) errors.push(`${name}: forbidden demo kicker/subtitle still rendered`);
    if(html.includes('class="katex"')&&!html.includes('class="math-isolate" dir="ltr"')) errors.push(`${name}: KaTeX math is not wrapped in an explicit LTR bidi isolate`);
  }
}

if(errors.length){
  console.error(`PROJECT CONTRACT FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Project contract passed (${mode}): single source of truth, clean title-only header, LTR math, and project-wide correction regression protocol enforced.`);
