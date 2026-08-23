import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const cssPath=path.join(ROOT,'styles','a4-base.css');
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const errors=[];

if(!fs.existsSync(cssPath)) errors.push('Missing styles/a4-base.css');
else {
  let css=fs.readFileSync(cssPath,'utf8');

  // One canonical A4 geometry for both on-screen preview and printing.
  if(css.includes('@media print {')) css=css.replace('@media print {','@media print, screen {');

  const widthNeedle='.a4-page {\n  width: var(--page-w);\n  min-height: var(--page-h);';
  if(css.includes(widthNeedle)){
    css=css.replace(widthNeedle,'.a4-page {\n  width: var(--page-w);\n  min-width: var(--page-w);\n  max-width: var(--page-w);\n  min-height: var(--page-h);');
  }

  if(!css.includes('/* Screen shell only: preserve print geometry */')){
    css=css.trimEnd()+`\n\n/* Screen shell only: preserve print geometry */\n@media screen {\n  body { background: var(--screen); }\n  .preview-nav { display: grid; }\n  .a4-page { margin: 0 auto 18px; box-shadow: 0 2px 16px #1520301a; }\n}\n`;
  }

  if(!css.includes('@media print, screen {')) errors.push('A4 print rules are not shared with screen preview');
  if(!css.includes('min-width: var(--page-w);')||!css.includes('max-width: var(--page-w);')) errors.push('A4 page width is not rigidly locked to 210mm on screen');
  fs.writeFileSync(cssPath,css,'utf8');
}

if(!fs.existsSync(truthPath)) errors.push('Missing SOURCE_OF_TRUTH.md');
else {
  let truth=fs.readFileSync(truthPath,'utf8');
  if(!truth.includes('## 32. תצוגת נייד זהה להדפסה — חובה')){
    truth=truth.trimEnd()+`\n\n## 32. תצוגת נייד זהה להדפסה — חובה\n\n1. תצוגת דף הספר בנייד, בטאבלט ובמחשב היא **אותו A4 בדיוק שנשלח להדפסה**, ולא פריסת מסך חלופית.\n2. רוחב התוכן הפנימי נעול ל־210 מ״מ וגובה הדף ל־297 מ״מ. במסך קטן מותר לבצע רק scale/zoom חזותי של כל הדף כיחידה אחת; אסור לכווץ את רוחב ה־layout או לבצע reflow.\n3. גדלי כתב, line-height, padding, margins, רוחבי טבלאות, גרפים ומרחבי תשובה בתוך ה־A4 זהים בין screen לבין print, ולכן שבירת השורות חייבת להיות זהה.\n4. מעטפת המסך בלבד רשאית להשתנות — צל, רקע סביב הדף, תוכן עניינים, כפתורי ניווט ו־zoom — משום שאינם חלק מהדף המודפס.\n5. Chromium QA מרנדר כל דף גם ב־mobile screen וגם ב־print ומשווה גאומטריה ושורות. כל הבדל פנימי מעבר לסבילות זעירה חוסם מיזוג.\n6. הכלל חל על כל הדפים הקיימים והעתידיים ועל הספר הדיגיטלי הציבורי.\n7. תיקון שקשור לתצוגת נייד נחשב תיקון כלל־פרויקטלי ומחייב regression QA על כל הספר.\n`;
    fs.writeFileSync(truthPath,truth,'utf8');
  }
}

if(errors.length){
  console.error(`MOBILE/PRINT PARITY CONTRACT FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('Mobile/print parity contract enforced: one fixed A4 layout, screen only scales the whole sheet.');
