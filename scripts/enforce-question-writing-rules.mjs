import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const mode=process.argv.includes('--post')?'post':'pre';
const errors=[];
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const buildPath=path.join(ROOT,'scripts','build-pages.mjs');

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

function normalizeBuild(){
  if(!fs.existsSync(buildPath)){errors.push('scripts/build-pages.mjs missing');return;}
  let s=fs.readFileSync(buildPath,'utf8');
  const before=s;
  const old="const writable=Array.from({length:repeats},()=>response(sp.responseSpace || 'short')).join(sp.betweenAnswers ? ` ${mathify(sp.betweenAnswers)} ` : ' ');";
  const replacement="const separator=sp.betweenAnswers ? (/^[,.;:!?]/.test(String(sp.betweenAnswers).trim()) ? `${mathify(String(sp.betweenAnswers).trim())} ` : ` ${mathify(sp.betweenAnswers)} `) : ' ';\n    const writable=Array.from({length:repeats},()=>response(sp.responseSpace || 'short')).join(separator);";
  if(s.includes(old)) s=s.replace(old,replacement);
  if(s!==before) fs.writeFileSync(buildPath,s,'utf8');
}

function normalizeContentFile(file){
  let s=fs.readFileSync(file,'utf8');
  const before=s;

  s=s.replace(/\b([A-Z])\s*=\s*\(/g,'$1(');

  s=s.replace(
    "rule: 'זוג סדור נכתב בצורה `(x,y)`. המספר הראשון הוא שיעור ה־`x`, והמספר השני הוא שיעור ה־`y`.',",
    "rule: 'זוג סדור נכתב בצורה `(x,y)`. שיעור ה־`x` מופיע משמאל בתוך הסוגריים, ושיעור ה־`y` מופיע מימין.',"
  );

  for(const name of ['A','B','C','D']){
    const old=`{label:'', text:'\`${name} =\`', responseSpace:'equation'}`;
    const replacement=`{label:'', text:'\`${name}(\`', responseSpace:'short', answerCount:2, betweenAnswers:'\`,\`', suffix:'\`)\`'}`;
    s=s.replace(old,replacement);
  }

  const replacements=[
    ['איזו נקודה נמצאת על','איזו נקודה ממוקמת על'],
    ['הנקודות שנמצאות על','הנקודות שממוקמות על'],
    ['נקודות שנמצאות על','נקודות שממוקמות על'],
    ['נמצאות על הישר','ממוקמות על הישר'],
    ['נמצאת על הישר','ממוקמת על הישר'],
    ['נמצאות על ציר','ממוקמות על ציר'],
    ['נמצאת על ציר','ממוקמת על ציר'],
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
    for(const bad of ['נמצאת על הישר','נמצאות על הישר','נמצאת על ציר','נמצאות על ציר','נמצאת בתוך מערכת הצירים']){
      if(s.includes(bad)) errors.push(`${rel}: geometric position wording remains: ${bad}`);
    }
    if(/betweenAnswers\s*:\s*['"]\s+[,.;:!?]/.test(s)) errors.push(`${rel}: separator contains whitespace before punctuation`);
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
if(mode==='pre') normalizeBuild();
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
