import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const mode=process.argv.includes('--post')?'post':'pre';
const errors=[];
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const buildPath=path.join(ROOT,'scripts','build-pages.mjs');

function walk(dir,out=[]){
  for(const e of fs.readdirSync(dir,{withFileTypes:true})){
    const full=path.join(dir,e.name);
    if(e.isDirectory()) walk(full,out);
    else if(e.isFile()&&e.name.endsWith('.mjs')) out.push(full);
  }
  return out;
}
function normalizeBuild(){
  if(!fs.existsSync(buildPath)){errors.push('scripts/build-pages.mjs missing');return;}
  let s=fs.readFileSync(buildPath,'utf8');
  const old="const writable=Array.from({length:repeats},()=>response(sp.responseSpace || 'short')).join(sp.betweenAnswers ? ` ${mathify(sp.betweenAnswers)} ` : ' ');";
  const replacement="const separator=sp.betweenAnswers ? (/^[,.;:!?]/.test(String(sp.betweenAnswers).trim()) ? `${mathify(String(sp.betweenAnswers).trim())} ` : ` ${mathify(sp.betweenAnswers)} `) : ' ';\n    const writable=Array.from({length:repeats},()=>response(sp.responseSpace || 'short')).join(separator);";
  if(s.includes(old)) s=s.replace(old,replacement);
  fs.writeFileSync(buildPath,s,'utf8');
}
function normalizeContentFile(file){
  let s=fs.readFileSync(file,'utf8');
  const before=s;
  s=s.replace(/\b([A-Z])\s*=\s*\(/g,'$1(');
  s=s.replace("rule: 'זוג סדור נכתב בצורה `(x,y)`. המספר הראשון הוא שיעור ה־`x`, והמספר השני הוא שיעור ה־`y`.',","rule: 'זוג סדור נכתב בצורה `(x,y)`. שיעור ה־`x` מופיע מימין בתוך הסוגריים, ושיעור ה־`y` מופיע משמאל.',");
  s=s.replace("\"rule\": \"זוג סדור נכתב בצורה `(x,y)`. שיעור ה־`x` מופיע משמאל בתוך הסוגריים, ושיעור ה־`y` מופיע מימין.\",","\"rule\": \"זוג סדור נכתב בצורה `(x,y)`. שיעור ה־`x` מופיע מימין בתוך הסוגריים, ושיעור ה־`y` מופיע משמאל.\",");
  const replacements=[['איזו נקודה נמצאת על','איזו נקודה ממוקמת על'],['הנקודות שנמצאות על','הנקודות שממוקמות על'],['נקודות שנמצאות על','נקודות שממוקמות על'],['נמצאות על הישר','ממוקמות על הישר'],['נמצאת על הישר','ממוקמת על הישר'],['נמצאות על ציר','ממוקמות על ציר'],['נמצאת על ציר','ממוקמת על ציר'],['נמצאת עליו','ממוקמת עליו'],['אינה נמצאת עליו','אינה ממוקמת עליו'],['נמצאת בתוך מערכת הצירים','ממוקמת בתוך מערכת הצירים']];
  for(const [a,b] of replacements) s=s.replaceAll(a,b);
  if(s!==before) fs.writeFileSync(file,s,'utf8');
}
function auditContent(files){
  for(const file of files){
    const rel=path.relative(ROOT,file).replaceAll('\\','/');
    const s=fs.readFileSync(file,'utf8');
    if(/\b[A-Z]\s*=\s*\(/.test(s)) errors.push(`${rel}: point written with equals sign before ordered pair`);
    if(/(?:x|y)\s+ציר/.test(s)) errors.push(`${rel}: axis wording must be ציר x / ציר y`);
    if(/קודם\s+`?[xy]`?\s+ואחר כך|נכתב ראשון|נכתב שני/.test(s)) errors.push(`${rel}: ordered-pair explanation must avoid first/second wording`);
    if(/שיעור ה־`x` מופיע משמאל בתוך הסוגריים/.test(s)) errors.push(`${rel}: ordered-pair explanation has x/y sides reversed`);
    if(/betweenAnswers\s*:\s*['"]\s+[,.;:!?]/.test(s)) errors.push(`${rel}: whitespace before punctuation in answer separator`);
  }
}
function auditRendered(){
  const pages=fs.readdirSync(ROOT).filter(n=>/^עמוד-\d+\.html$/.test(n));
  for(const name of pages){
    const html=fs.readFileSync(path.join(ROOT,name),'utf8').replace(/<[^>]+>/g,' ');
    if(/[A-Z]\s*=\s*\(/.test(html)) errors.push(`${name}: rendered point notation contains X = (...)`);
    if(/(?:x|y)\s+ציר/.test(html)) errors.push(`${name}: rendered axis wording is reversed`);
    if(/שיעור ה־x מופיע משמאל בתוך הסוגריים/.test(html)) errors.push(`${name}: rendered ordered-pair explanation has x/y sides reversed`);
  }
}
if(!fs.existsSync(truthPath)) errors.push('SOURCE_OF_TRUTH.md missing');
else {
  const truth=fs.readFileSync(truthPath,'utf8');
  if(!truth.includes('## 8. סגנון ההוראה והכתיבה של יניב')) errors.push('Canonical teaching-style section missing');
  if(!truth.includes('## 9. כתיבה מתמטית ו־RTL')) errors.push('Canonical math-writing section missing');
}
if(mode==='pre') normalizeBuild();
const contentRoot=path.join(ROOT,'content');
const contentFiles=fs.existsSync(contentRoot)?walk(contentRoot):[];
if(mode==='pre') for(const f of contentFiles) normalizeContentFile(f);
auditContent(contentFiles);
if(mode==='post') auditRendered();
if(errors.length){console.error(`QUESTION/MATH WRITING CONTRACT FAILED (${errors.length})`); for(const e of errors) console.error(e); process.exit(1);}
console.log(`Question/math writing contract passed (${mode}) across ${contentFiles.length} files without modifying SOURCE_OF_TRUTH.md.`);
