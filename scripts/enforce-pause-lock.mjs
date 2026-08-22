import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const pageDir=path.join(ROOT,'content','pages');
const FREEZE_PAGE=42;
const pauseHeading='## 32. מצב עבודה נוכחי — עצירה וניקוי';
const freezeRule=`7. נקודת ההקפאה המחייבת בזמן ההשהיה היא **${FREEZE_PAGE} עמודים**. כל ניסיון להוסיף עמוד ${FREEZE_PAGE+1} ומעלה בזמן שהסעיף הזה פעיל חייב להיכשל אוטומטית ב־QA; הסרת הנעילה מותרת רק לאחר הוראה מפורשת של המשתמש לחדש יצירת תוכן ועדכון מקור האמת.`;

if(!fs.existsSync(truthPath)) throw new Error('SOURCE_OF_TRUTH.md is missing');
let truth=fs.readFileSync(truthPath,'utf8');
const paused=truth.includes(pauseHeading)&&truth.includes('יצירת עמודים ותוכן לימודי חדש מושהית');

if(!paused){
  console.log('Pause lock inactive: source of truth does not declare paused content creation.');
  process.exit(0);
}

if(!truth.includes(freezeRule)){
  const anchor='6. גם בזמן ניקוי, כל שינוי עובר את פרוטוקול התיקון והרגרסיה הכלל־פרויקטלית ואת QA המלא לפני מיזוג.';
  if(!truth.includes(anchor)) throw new Error('Pause section anchor missing; cannot persist freeze rule safely');
  truth=truth.replace(anchor,`${anchor}\n${freezeRule}`);
  fs.writeFileSync(truthPath,truth,'utf8');
}

const pageNumbers=fs.existsSync(pageDir)
  ? fs.readdirSync(pageDir).map(name=>/^page-(\d+)\.mjs$/.exec(name)).filter(Boolean).map(m=>Number(m[1]))
  : [];
const maxPage=pageNumbers.length?Math.max(...pageNumbers):0;
const over=pageNumbers.filter(n=>n>FREEZE_PAGE).sort((a,b)=>a-b);
if(over.length){
  console.error(`PAUSE LOCK FAILED: content creation is paused at page ${FREEZE_PAGE}; forbidden page modules found: ${over.join(', ')}`);
  process.exit(1);
}
if(maxPage!==FREEZE_PAGE){
  console.error(`PAUSE LOCK FAILED: paused workbook expected to end at page ${FREEZE_PAGE}, current max modular page is ${maxPage}`);
  process.exit(1);
}

console.log(`Pause lock passed: workbook frozen at ${FREEZE_PAGE} pages; no page ${FREEZE_PAGE+1}+ content allowed until explicit resume.`);
