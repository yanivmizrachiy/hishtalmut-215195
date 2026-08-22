import fs from 'node:fs';
import path from 'node:path';
import { pages } from '../content/book-pages.mjs';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const sourceSection='## 25. שאלות מתוך קובצי המקור שנחקרו — חובה';
const sourcePolicy=`\n\n${sourceSection}\n\n1. כאשר קיימת במאגרי המקור המחייבים שאלה המתאימה למשפחה הפדגוגית הדרושה, **לוקחים את השאלה מתוך הקובץ שנחקר ולא ממציאים במקומה שאלה חדשה**.\n2. מאגרי המקור כוללים את 46+ קובצי ההוראה שנחקרו ב-Drive, קובצי PDF/DOCX/PPTX/PPSX, כל 95 דפי \`razpages\` שיובאו, מקבצי מיצ״ב וכל חומר נוסף שהמשתמש דרש לשלב.\n3. מותר לבצע עיבוד עריכתי בלבד: תיקון כתיב, אחידות סימון מתמטי, התאמת ניסוח לעברית אחידה, חלוקה לסעיפים, התאמת מקום פתרון ועיצוב מחדש. **המהות המתמטית והנתונים נשמרים כברירת מחדל.**\n4. אם יש צורך פדגוגי אמיתי לשנות מספרים, לפצל, לאחד או להרחיב שאלה, השאלה מסומנת כמעובדת ונשמרים המקור והסיבה לשינוי.\n5. לכל שאלה חדשה החל מעמוד 36 נשמר \`sourceRef\` מדויק ברמת השאלה, המצביע לקובץ המקור ולמספר שאלה/עמוד/שקופית כאשר ניתן.\n6. לכל עמוד חדש נשמרת גם רשימת \`sourceRefs\` של כל הקבצים ששימשו בו.\n7. כתיבה מקורית חדשה מותרת רק כאשר המיפוי מראה שאין במקורות שנחקרו שאלה מתאימה למיומנות/ייצוג/כיוון החשיבה החסר. גם אז יש לתעד שהשאלה נוצרה כדי לסגור פער מזוהה.\n8. לפני יצירת עמוד חדש יש לבצע source scan במאגרים שנחקרו ולבחור שאלות אמיתיות מהקל לקשה, תוך איחוד כפילויות.\n9. QA חייב להכשיל עמוד חדש אם חסר \`sourceRef\` לשאלה או אם \`sourceRefs\` של העמוד ריקים.\n`;

const PUBLIC_BOOK_URL='https://linear-function-digital-book.vercel.app/';
const linkSection='## 26. קישור חיצוני קבוע לספר כולו — חובה';
const linkPolicy=`\n\n${linkSection}\n\n1. הקישור הציבורי הקבוע של הספר הדיגיטלי כולו הוא: ${PUBLIC_BOOK_URL}\n2. לאחר **כל ביצוע, תיקון, הוספת עמוד, מיזוג או שינוי בפרויקט**, בתשובת הסיום למשתמש יש לצרף את הקישור הציבורי הקבוע לספר כולו.\n3. אין להחליף את הקישור בקישור זמני, preview, branch, עמוד בודד או URL חדש בכל ביצוע.\n4. אם השינוי טרם מוזג ל-\`main\`, מציינים זאת במפורש ולא טוענים שהקישור הציבורי כבר כולל אותו.\n5. לאחר merge מוצלח ל-\`main\`, הקישור הקבוע הוא ברירת המחדל להצגת התוצאה למשתמש.\n6. הספר הציבורי חייב להציג את כל הדפים הזמינים ב-\`main\` באמצעות תוכן העניינים הדיגיטלי, ולא דף יחיד בלבד.\n7. אם הקישור הקבוע אינו זמין, הדבר נחשב תקלה בפרויקט שיש לבדוק ולתקן לפני שמציגים למשתמש קישור חלופי.\n`;

if(!fs.existsSync(truthPath)) throw new Error('SOURCE_OF_TRUTH.md missing');
let truth=fs.readFileSync(truthPath,'utf8');
let truthChanged=false;
if(!truth.includes(sourceSection)){
  truth=truth.trimEnd()+sourcePolicy+'\n';
  truthChanged=true;
}
if(!truth.includes(linkSection)){
  truth=truth.trimEnd()+linkPolicy+'\n';
  truthChanged=true;
}
if(truthChanged) fs.writeFileSync(truthPath,truth,'utf8');

const errors=[];
for(const p of pages.filter(p=>p.page>=36)){
  if(!Array.isArray(p.sourceRefs)||p.sourceRefs.length===0) errors.push(`Page ${p.page}: sourceRefs is required by source-derived question policy`);
  for(const q of p.questions||[]){
    if(typeof q.sourceRef!=='string'||!q.sourceRef.trim()) errors.push(`${q.id||`page-${p.page}-question`}: sourceRef is required`);
  }
}
truth=fs.readFileSync(truthPath,'utf8');
if(!truth.includes(linkSection)||!truth.includes(PUBLIC_BOOK_URL)) errors.push('Fixed public-book link policy is missing from SOURCE_OF_TRUTH.md');

if(errors.length){
  console.error(`SOURCE/DELIVERY POLICY QA FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Source-question provenance passed for ${pages.filter(p=>p.page>=36).length} page(s); fixed public book link enforced: ${PUBLIC_BOOK_URL}`);
