import fs from 'node:fs';
import path from 'node:path';
import { pages as corePages } from '../content/page-definitions.mjs';
import { pages as pages05to06 } from '../content/pages-05-06.mjs';
import { pages as pages07plus } from '../content/pages-07-10.mjs';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const section='## 25. שאלות מתוך קובצי המקור שנחקרו — חובה';
const policy=`\n\n${section}\n\n1. כאשר קיימת במאגרי המקור המחייבים שאלה המתאימה למשפחה הפדגוגית הדרושה, **לוקחים את השאלה מתוך הקובץ שנחקר ולא ממציאים במקומה שאלה חדשה**.\n2. מאגרי המקור כוללים את 46+ קובצי ההוראה שנחקרו ב-Drive, קובצי PDF/DOCX/PPTX/PPSX, כל 95 דפי \`razpages\` שיובאו, מקבצי מיצ״ב וכל חומר נוסף שהמשתמש דרש לשלב.\n3. מותר לבצע עיבוד עריכתי בלבד: תיקון כתיב, אחידות סימון מתמטי, התאמת ניסוח לעברית אחידה, חלוקה לסעיפים, התאמת מקום פתרון ועיצוב מחדש. **המהות המתמטית והנתונים נשמרים כברירת מחדל.**\n4. אם יש צורך פדגוגי אמיתי לשנות מספרים, לפצל, לאחד או להרחיב שאלה, השאלה מסומנת כמעובדת ונשמרים המקור והסיבה לשינוי.\n5. לכל שאלה חדשה החל מעמוד 36 נשמר \`sourceRef\` מדויק ברמת השאלה, המצביע לקובץ המקור ולמספר שאלה/עמוד/שקופית כאשר ניתן.\n6. לכל עמוד חדש נשמרת גם רשימת \`sourceRefs\` של כל הקבצים ששימשו בו.\n7. כתיבה מקורית חדשה מותרת רק כאשר המיפוי מראה שאין במקורות שנחקרו שאלה מתאימה למיומנות/ייצוג/כיוון החשיבה החסר. גם אז יש לתעד שהשאלה נוצרה כדי לסגור פער מזוהה.\n8. לפני יצירת עמוד חדש יש לבצע source scan במאגרים שנחקרו ולבחור שאלות אמיתיות מהקל לקשה, תוך איחוד כפילויות.\n9. QA חייב להכשיל עמוד חדש אם חסר \`sourceRef\` לשאלה או אם \`sourceRefs\` של העמוד ריקים.\n`;

if(!fs.existsSync(truthPath)) throw new Error('SOURCE_OF_TRUTH.md missing');
let truth=fs.readFileSync(truthPath,'utf8');
if(!truth.includes(section)){
  truth=truth.trimEnd()+policy+'\n';
  fs.writeFileSync(truthPath,truth,'utf8');
}

const pages=[...corePages,...pages05to06,...pages07plus].sort((a,b)=>a.page-b.page);
const errors=[];
for(const p of pages.filter(p=>p.page>=36)){
  if(!Array.isArray(p.sourceRefs)||p.sourceRefs.length===0) errors.push(`Page ${p.page}: sourceRefs is required by source-derived question policy`);
  for(const q of p.questions||[]){
    if(typeof q.sourceRef!=='string'||!q.sourceRef.trim()) errors.push(`${q.id||`page-${p.page}-question`}: sourceRef is required`);
  }
}
if(errors.length){
  console.error(`SOURCE QUESTION PROVENANCE QA FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Source-question provenance passed for ${pages.filter(p=>p.page>=36).length} page(s) governed by the page-36+ policy.`);
