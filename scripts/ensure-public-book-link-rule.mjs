import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const canonicalUrl='https://linear-function-digital-book.vercel.app/';
if(!fs.existsSync(truthPath)){
  console.error('SOURCE_OF_TRUTH.md missing');
  process.exit(1);
}
let truth=fs.readFileSync(truthPath,'utf8');
const heading='## 25. קישור חיצוני קבוע לאחר כל תיקון — חובה';
if(!truth.includes(heading)){
  truth=truth.trimEnd()+`\n\n${heading}\n\n1. הקישור הציבורי הקנוני לכל החוברת הוא: **${canonicalUrl}**.\n2. לאחר כל תיקון שהושלם, עבר את כל בדיקות ה-QA ונכנס ל-\`main\`, חובה לשלוח למשתמש מיד את הקישור החיצוני הקבוע **לכל החוברת**, גם אם התיקון נגע רק בעמוד אחד.\n3. אין להסתפק בקישור לעמוד HTML בודד, ל-GitHub, ל-PR או ל-preview. הקישור שהמשתמש מקבל לאחר תיקון הוא קישור הספר הדיגיטלי המלא.\n4. הקישור נשאר קבוע; תוכן העניינים והעמודים מתעדכנים מאותו \`main\`.\n5. אם בעתיד משתנה כתובת הפריסה, יש לעדכן כאן את הכתובת הקנונית לפני ששולחים קישור חדש.\n6. כלל זה הוא חלק מפרוטוקול התיקון: תיקון → impact scan → QA מלא → merge ל-main → שליחת הקישור החיצוני לכל החוברת.\n`;
  fs.writeFileSync(truthPath,truth,'utf8');
}
if(!truth.includes(canonicalUrl)){
  console.error('Canonical public workbook URL missing from source of truth');
  process.exit(1);
}
console.log(`Canonical public workbook link rule enforced: ${canonicalUrl}`);
