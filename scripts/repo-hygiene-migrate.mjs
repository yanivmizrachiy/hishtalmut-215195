import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const baseCssPath=path.join(ROOT,'styles','a4-base.css');
const layoutCssPath=path.join(ROOT,'styles','layout-contract.css');
const page1Path=path.join(ROOT,'content','pages','page-1.mjs');

// One-time data migration only. It intentionally does not patch build/QA code.
let truth=fs.readFileSync(truthPath,'utf8');
truth=truth.replace('## 32. תצוגת נייד זהה להדפסה — חובה','## 33. תצוגת נייד זהה להדפסה — חובה');

const pause7='7. נקודת ההקפאה המחייבת בזמן ההשהיה היא **42 עמודים**. כל ניסיון להוסיף עמוד 43 ומעלה בזמן שהסעיף הזה פעיל חייב להיכשל אוטומטית ב־QA; הסרת הנעילה מותרת רק לאחר הוראה מפורשת של המשתמש לחדש יצירת תוכן ועדכון מקור האמת.';
const pause8='8. בזמן שההשהיה פעילה, סעיף זה גובר זמנית על הוראות ההתקדמות האוטומטית בסעיפים 20–21; זהו מצב עבודה זמני ומפורש ולא הוראה ליצירת תוכן.';
if(truth.includes(pause7)&&!truth.includes(pause8)) truth=truth.replace(pause7,pause7+'\n'+pause8);

const hygieneHeading='## 34. ניקיון ריפו ומקור אמת יחיד — חובה';
if(!truth.includes(hygieneHeading)){
  const rules=[
    '',
    hygieneHeading,
    '',
    '1. `SOURCE_OF_TRUTH.md` הוא מסמך הדרישות היחיד. סקריפטי build/QA קוראים ומאמתים אותו אך אינם מוסיפים אליו, מתקנים אותו או כותבים אותו אוטומטית. שינוי בדרישות נכתב בו במפורש כחלק משינוי יזום בעקבות הוראת המשתמש.',
    '2. לכל סעיף עליון ממוספר במקור האמת מספר ייחודי; כפילות מספור, שתי גרסאות של אותו כלל או הוראות סותרות הן כשל QA.',
    '3. לכל אחריות רוחבית יש נקודת מימוש פעילה אחת: תוכן ב־`content/pages/page-N.mjs`, רינדור ב־`scripts/build-pages.mjs`, עיצוב A4 ב־`styles/a4-base.css`, registry ב־`content/book-pages.mjs` ו־config טכני ב־`content/book-config.mjs`.',
    '4. קבצי `עמוד-N.html` הם פלט בלבד. אסור להחזיק post-build patcher שמתקן HTML שכבר נבנה; כלל רינדור קבוע נכנס ישירות למנוע הבנייה.',
    '5. בדיקות QA הן read-only כלפי מקור האמת, קובצי התוכן וקוד הייצור. הן רשאיות ליצור דוחות/צילומי QA נגזרים ולעדכן manifest נגזר לפי החוזה המפורש שלו.',
    '6. שרשרת build/QA אינה מריצה את אותו validator או אותו contract פעמיים באותו מסלול ללא צורך טכני מוכח. אין מסלולי build מקבילים או validators כפולים לאותה אחריות.',
    '7. קובץ legacy, backup, temp, workflow מת, stylesheet פעיל כפול או סקריפט מיגרציה שסיים את תפקידו מוסרים מהארכיטקטורה הפעילה. חומרי מקור ב־`sources/` נשמרים כראיות ואינם נחשבים legacy רק מפני שאינם חלק ממנוע הייצור.',
    '8. `main` הוא נקודת הייחוס היחידה לעבודה מאומתת. ענף ניסיוני או ישן אינו מקור אמת ואינו בסיס להמשך; PR ניסיוני שאינו מיועד למיזוג נסגר. מחיקת branches ישנים מתבצעת כאשר כלי GitHub זמין לכך.',
    '9. `scripts/validate-repo-hygiene.mjs` אוכף את חוזה הניקיון הזה וחוסם חזרה של מקור אמת נוסף, מספור כפול, כתיבה אוטומטית למקור האמת, stylesheet פריסה פעיל נוסף, post-build patchers או מסלול build כפול.',
    ''
  ];
  truth=truth.trimEnd()+'\n'+rules.join('\n');
}
fs.writeFileSync(truthPath,truth,'utf8');

// Fold the currently active layout contract into the one canonical A4 stylesheet.
let baseCss=fs.readFileSync(baseCssPath,'utf8');
const layoutCss=fs.readFileSync(layoutCssPath,'utf8').trim();
const marker='/* Integrated canonical layout contract — SOURCE_OF_TRUTH sections 31 and 34 */';
if(!baseCss.includes(marker)) baseCss=baseCss.trimEnd()+'\n\n'+marker+'\n'+layoutCss+'\n';
fs.writeFileSync(baseCssPath,baseCss,'utf8');

// Make the page-1 special layout explicit data so the final renderer can own it.
let page1=fs.readFileSync(page1Path,'utf8');
if(!page1.includes('"subpartsLayout": "ordered-pair-grid"')){
  page1=page1.replace('"stem": "קראו את שיעורי הנקודות המסומנות.",','"stem": "קראו את שיעורי הנקודות המסומנות.",\n      "subpartsLayout": "ordered-pair-grid",');
  fs.writeFileSync(page1Path,page1,'utf8');
}

console.log('One-time hygiene data migration completed.');
