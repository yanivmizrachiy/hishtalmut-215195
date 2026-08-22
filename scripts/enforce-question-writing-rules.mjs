import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const mode=process.argv.includes('--post')?'post':'pre';
const errors=[];
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');

const SECTION=`

## 27. שאלות וכתיבה מתמטית — תקן מחייב

1. ריפו \`yanivmizrachiy/coordinate-first-quadrant\` משמש reference ל**כללי ניסוח שאלות וכתיבה מתמטית בלבד**. אין להעביר ממנו סמלים, לוגואים, מיתוג או עיצוב חזותי לפרויקט זה מכוח הסעיף הזה.
2. שם נקודה צמוד לזוג הסדור ללא סימן שווה: \`A(x,y)\`, ולא \`A = (x,y)\`.
3. כאשר תלמיד משלים שיעורי נקודה, מציגים שני שדות בתוך הזוג הסדור: \`A(__,__)\`; אין להציג \`A = ______\` ארוך.
4. כל זוג סדור, מספר שלילי, שבר, משוואה וסימון מתמטי נשאר יחידת LTR מבודדת בהתאם לסעיף 23.
5. בתוך משפט עברי כותבים ״הנקודה A״, ״ציר x״ ו״ציר y״; אין להפוך את סדר המילים ל־״x ציר״ או ״y ציר״.
6. בהסבר על זוג סדור מתארים את **המיקום** בתוך הסוגריים: שיעור \`x\` משמאל ושיעור \`y\` מימין. אין להשתמש בניסוח ״קודם x ואחר כך y״, ״נכתב ראשון״ או ״נכתב שני״.
7. בניסוח מיקום גאומטרי משתמשים ב״ממוקם/ממוקמת/ממוקמות״ במקום ״נמצא/נמצאת/נמצאות״ כאשר מתארים היכן נקודה ממוקמת על ציר, ישר או מערכת צירים.
8. ניסוח שאלה יהיה קצר, חד וברור; אין לחזור פעמיים על אותה הוראה באותו תרגיל ללא צורך פדגוגי.
9. שאלת שאלה ישירה מקבלת סימן שאלה, ואין רווח לפני פסיק, נקודה, סימן שאלה או סימן קריאה.
10. תיקון כתיבה מתמטית הוא תיקון כלל־פרויקטלי: מבצעים impact scan על כל הדפים ומוסיפים regression test כדי שהכתיב השגוי לא יחזור.
`;

function walk(dir,out=[]){
  for(const e of fs.readdirSync(dir,{withFileTypes:true})){
    const full=path.join(dir,e.name);
    if(e.isDirectory()) walk(full,out);
    else if(e.isFile()&&e.name.endsWith('.mjs')) out.push(full);
  }
  return out;
}

function ensureTruth(){
  if(!fs.existsSync(truthPath)){errors.push('SOURCE_OF_TRUTH.md missing');return;}
  let truth=fs.readFileSync(truthPath,'utf8');
  if(!truth.includes('## 27. שאלות וכתיבה מתמטית — תקן מחייב')){
    truth=truth.trimEnd()+SECTION+'\n';
    fs.writeFileSync(truthPath,truth,'utf8');
  }
}

function normalizeContentFile(file){
  let s=fs.readFileSync(file,'utf8');
  const before=s;

  // Point notation: A(x,y), never A=(x,y), inside authored math strings.
  s=s.replace(/\b([A-Z])\s*=\s*\(/g,'$1(');

  // Opening coordinate sheet: describe left/right, not first/second.
  s=s.replace(
    "rule: 'זוג סדור נכתב בצורה `(x,y)`. המספר הראשון הוא שיעור ה־`x`, והמספר השני הוא שיעור ה־`y`.',",
    "rule: 'זוג סדור נכתב בצורה `(x,y)`. שיעור ה־`x` מופיע משמאל בתוך הסוגריים, ושיעור ה־`y` מופיע מימין.',"
  );

  // Named-point completion uses two coordinate blanks with the existing response schema.
  for(const name of ['A','B','C','D']){
    const old=`{label:'', text:'\`${name} =\`', responseSpace:'equation'}`;
    const replacement=`{label:'', text:'\`${name}(\`', responseSpace:'short', answerCount:2, betweenAnswers:'\`,\`', suffix:'\`)\`'}`;
    s=s.replace(old,replacement);
  }

  // Position wording learned from the canonical printable workbook.
  const replacements=[
    ['איזו נקודה נמצאת על','איזו נקודה ממוקמת על'],
    ['איזו נקודה נוספת מבין','איזו נקודה נוספת מבין'],
    ['נקודה נמצאת על','נקודה ממוקמת על'],
    ['הנקודה נמצאת על','הנקודה ממוקמת על'],
    ['הנקודות נמצאות על','הנקודות ממוקמות על'],
    ['נקודות נמצאות על','נקודות ממוקמות על'],
    ['הנקודות שנמצאות על','הנקודות שממוקמות על'],
    ['נקודות שנמצאות על','נקודות שממוקמות על'],
    ['נמצאת עליו','ממוקמת עליו'],
    ['אינה נמצאת עליו','אינה ממוקמת עליו'],
    ['נמצאת בתוך מערכת הצירים','ממוקמת בתוך מערכת הצירים']
  ];
  for(const [a,b] of replacements) s=s.replaceAll(a,b);

  if(s!==before) fs.writeFileSync(file,s,'utf8');
}

function auditContent(files){
  for(const file of files){
    const rel=path.relative(ROOT,file).replaceAll('\\','/');
    const s=fs.readFileSync(file,'utf8');
    if(/\b[A-Z]\s*=\s*\(/.test(s)) errors.push(`${rel}: point written with equals sign before ordered pair`);
    if(/(?:x|y)\s+ציר/.test(s)) errors.push(`${rel}: axis wording must be ציר x / ציר y`);
    if(/קודם\s+`?[xy]`?\s+ואחר כך|נכתב ראשון|נכתב שני/.test(s)) errors.push(`${rel}: ordered-pair explanation must use left/right, not first/second`);
    if(/(?:איזו\s+)?נקוד(?:ה|ות)[^\n'"`]{0,40}\b(?:נמצאת|נמצאות)\b(?:[^\n'"`]{0,20})(?:על|בתוך)/.test(s)) errors.push(`${rel}: geometric position wording should use ממוקם/ממוקמת`);
  }
}

function stripHtml(html){
  return html
    .replace(/<style[\s\S]*?<\/style>/gi,' ')
    .replace(/<script[\s\S]*?<\/script>/gi,' ')
    .replace(/<[^>]+>/g,'')
    .replace(/&nbsp;/g,' ')
    .replace(/&quot;/g,'"')
    .replace(/&#39;/g,"'")
    .replace(/&amp;/g,'&')
    .replace(/\s+/g,' ');
}

function auditRendered(){
  const pages=fs.readdirSync(ROOT).filter(n=>/^עמוד-\d+\.html$/.test(n));
  for(const name of pages){
    const html=fs.readFileSync(path.join(ROOT,name),'utf8');
    const text=stripHtml(html);
    if(/[A-Z]\s*=\s*\(/.test(text)) errors.push(`${name}: rendered point notation contains X = (...)`);
    if(/(?:x|y)\s+ציר/.test(text)) errors.push(`${name}: rendered axis wording is reversed`);
    if(/\S\s+[,.?!](?:\s|$)/.test(text)) errors.push(`${name}: whitespace before punctuation`);
  }
  const p1=path.join(ROOT,'עמוד-1.html');
  if(fs.existsSync(p1)){
    const html=fs.readFileSync(p1,'utf8');
    const text=stripHtml(html);
    for(const name of ['A','B','C','D']){
      if(!text.includes(`${name}(`)) errors.push(`עמוד-1.html: missing named ordered-pair completion ${name}(...)`);
    }
    if(/\b[ABCD]\s*=/.test(text)) errors.push('עמוד-1.html: legacy A = / B = / C = / D = completion remains');
  }
}

ensureTruth();
const contentRoot=path.join(ROOT,'content');
const contentFiles=fs.existsSync(contentRoot)?walk(contentRoot):[];
if(mode==='pre') for(const f of contentFiles) normalizeContentFile(f);
auditContent(contentFiles);
if(mode==='post') auditRendered();

if(errors.length){
  console.error(`QUESTION/MATH WRITING CONTRACT FAILED (${errors.length})`);
  for(const e of errors) console.error(e);
  process.exit(1);
}
console.log(`Question/math writing contract passed (${mode}) across ${contentFiles.length} content files.`);
