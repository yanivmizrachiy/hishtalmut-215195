import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const errors=[];

const SECTION=`

## 28. תיקוני פריסה חזותית ורגרסיה — חובה

1. כאשר המשתמש מצביע על תקלה חזותית בדף, עוצרים יצירת דפים חדשים עד שהתיקון עובר QA חזותי מלא.
2. תיקון פריסה נבדק תחילה כבעיה מערכתית: אם הוא שייך לרכיב משותף, מתקנים את הרכיב המשותף ולא HTML של דף יחיד.
3. רמות קושי נשמרות במטא־דאטה וב־data attributes, אך אינן מוצגות בתוך דף התלמיד אלא אם המשתמש מבקש זאת במפורש.
4. השלמת זוג סדור היא יחידת LTR אחת שאינה ניתנת לפיצול חזותי: לדוגמה \`A(__,__)\`. האות, הסוגריים, הפסיק ושני שדות התשובה נשארים באותה שורה ובאותו כיוון.
5. עמוד 1 משמש benchmark חזותי קבוע לכתיבת זוגות סדורים, מערכת צירים ופריסת תשובות. שינוי במנוע חייב לעבור עליו ללא היפוך, פיזור סימנים, גלישה או דחיפת שאלות.
6. כל תיקון משתמש נכנס ל־regression QA כדי שלא יחזור בעתיד.
`;

if(fs.existsSync(truthPath)){
  let truth=fs.readFileSync(truthPath,'utf8');
  if(!truth.includes('## 28. תיקוני פריסה חזותית ורגרסיה — חובה')){
    truth=truth.trimEnd()+SECTION+'\n';
    fs.writeFileSync(truthPath,truth,'utf8');
  }
}else errors.push('SOURCE_OF_TRUTH.md missing');

const pages=fs.readdirSync(ROOT).filter(n=>/^עמוד-\d+\.html$/.test(n));
for(const name of pages){
  const file=path.join(ROOT,name);
  let html=fs.readFileSync(file,'utf8');
  if(!html.includes('styles/layout-contract.css')){
    html=html.replace('</head>','<link rel="stylesheet" href="styles/layout-contract.css"></head>');
  }
  html=html.replace(/<span class="level">[\s\S]*?<\/span>/g,'');

  if(name==='עמוד-1.html'){
    const marker='data-id="P01-P01-Q1"';
    const markerIndex=html.indexOf(marker);
    if(markerIndex<0){
      errors.push('עמוד-1.html: benchmark exercise P01-P01-Q1 missing');
    }else{
      const start=html.lastIndexOf('<section',markerIndex);
      const end=html.indexOf('</section>',markerIndex);
      if(start<0||end<0){
        errors.push('עמוד-1.html: benchmark section boundaries missing');
      }else{
        let segment=html.slice(start,end+10);
        segment=segment.replace('<div class="subparts">','<div class="subparts ordered-pair-grid" dir="ltr">');
        segment=segment.replace(/<div class="sub">/g,'<div class="sub ordered-pair-answer" dir="ltr">');
        html=html.slice(0,start)+segment+html.slice(end+10);
      }
    }
  }
  fs.writeFileSync(file,html,'utf8');
}

for(const name of pages){
  const html=fs.readFileSync(path.join(ROOT,name),'utf8');
  if(/<span class="level">/.test(html)) errors.push(`${name}: visible difficulty label remains`);
  if(!html.includes('styles/layout-contract.css')) errors.push(`${name}: layout contract stylesheet missing`);
}

const p1=path.join(ROOT,'עמוד-1.html');
if(fs.existsSync(p1)){
  const html=fs.readFileSync(p1,'utf8');
  const count=(html.match(/class="sub ordered-pair-answer" dir="ltr"/g)||[]).length;
  if(count!==4) errors.push(`עמוד-1.html: expected 4 indivisible ordered-pair answers, found ${count}`);
  if(!html.includes('class="subparts ordered-pair-grid" dir="ltr"')) errors.push('עמוד-1.html: ordered-pair answer grid missing');
}

if(errors.length){
  console.error(`LAYOUT CONTRACT FAILED (${errors.length})`);
  for(const e of errors) console.error(e);
  process.exit(1);
}
console.log(`Layout contract applied to ${pages.length} generated pages; page 1 ordered-pair benchmark enforced.`);
