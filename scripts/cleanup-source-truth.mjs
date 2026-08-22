import fs from 'node:fs';
import path from 'node:path';

const file=path.join(process.cwd(),'SOURCE_OF_TRUTH.md');
if(!fs.existsSync(file)) throw new Error('SOURCE_OF_TRUTH.md is missing');
let truth=fs.readFileSync(file,'utf8');

const replacements=new Map([
  ['12. עמודים ישנים שנוצרו לפני מנגנון זה יועברו בהדרגה לאותה ארכיטקטורה; המטרה היא שכל הספר יהיה ניתן לעריכה באותה דרך פשוטה.',
   '12. הגירת העמודים הישנים הושלמה. כל עמודי הספר הפעילים נשמרים במודל המודולרי האחיד; אסור להחזיר אוספי תוכן legacy מקבילים.'],
  ['4. קבצי legacy הישנים משמשים קלט הגירה זמני בלבד. רק `scripts/migrate-legacy-pages.mjs` רשאי לקרוא אותם; build/QA/manifest אינם מייבאים אותם ישירות.',
   '4. הגירת ה־legacy הושלמה. קבצי התוכן הישנים וסקריפט ההגירה אינם חלק מהארכיטקטורה הפעילה ואסור להחזירם; כל הדפים נמצאים ב־`content/pages/page-N.mjs`.'],
  ['7. עמודים 1–15 עוברים אוטומטית למודל המודולרי בלי שינוי בתוכן; לאחר ההגירה כל עמודי הספר ניתנים לעריכה באותה צורה פשוטה.',
   '7. כל עמודי הספר הפעילים ניתנים לעריכה באותה צורה מודולרית דרך `content/pages/page-N.mjs`; אין מסלול תוכן מקביל.']
]);
for(const [from,to] of replacements) if(truth.includes(from)) truth=truth.replace(from,to);

const section='## 31. מצב עבודה נוכחי — עצירה וניקוי';
if(!truth.includes(section)){
  truth=truth.trimEnd()+`\n\n${section}\n\n1. לפי הוראת המשתמש, **יצירת עמודים ותוכן לימודי חדש מושהית** עד שהמשתמש יורה במפורש לחדש את העבודה.\n2. בזמן ההשהיה מותר לבצע רק ניקוי ריפו, תיקוני באגים, תיקוני עקביות, תחזוקת מקור האמת, בדיקות QA ושיפור תשתיתי שנדרש כדי לשמור על הפרויקט נקי ותקין.\n3. אין למזג עמוד חדש, משפחת שאלות חדשה או הרחבת תוכן בזמן מצב ההשהיה.\n4. ניקוי הריפו מחייב להסיר קבצי legacy שהגירתם הושלמה, workflows מתים, מידע README מיושן ומסלולי build כפולים.\n5. \`main\` צריך להישאר נקודת הייחוס היחידה לעבודה המאומתת; PR ישן או ניסיוני שאינו מיועד למיזוג נסגר.\n6. גם בזמן ניקוי, כל שינוי עובר את פרוטוקול התיקון והרגרסיה הכלל־פרויקטלית ואת QA המלא לפני מיזוג.\n`;
}
fs.writeFileSync(file,truth,'utf8');
console.log('SOURCE_OF_TRUTH cleanup state enforced: project paused, legacy migration marked complete.');
