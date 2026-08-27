import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT=process.cwd();
const errors=[];
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const forbiddenRuleFiles=['RULES.md','REQUIREMENTS.md','PROJECT_RULES.md'];

if(!fs.existsSync(truthPath)) errors.push('SOURCE_OF_TRUTH.md missing');
else {
  const truth=fs.readFileSync(truthPath,'utf8');
  const required=[
    '## 1. ממשל הפרויקט ומקור אמת יחיד',
    '## 4. מקורות חובה — הכול, לא מדגם',
    'yanivmizrachiy/jerusalem2',
    '## 6. כלל הברזל הפדגוגי — תמיד מהקל ביותר לקשה ביותר',
    '## 8. סגנון ההוראה והכתיבה של יניב',
    '## 10. מרחבי תשובה — התאמה חכמה למה שהתלמיד צריך לכתוב',
    '## 11. עיצוב, טיפוגרפיה וגרפיקה — אחידות מלאה של ספר לימוד אמיתי',
    '## 16. QA ושערי איכות'
  ];
  for(const token of required) if(!truth.includes(token)) errors.push(`SOURCE_OF_TRUTH.md missing: ${token}`);
  const occurrences=[];
  for(const [index,line] of truth.split(/\r?\n/).entries()){
    const m=/^##\s+(\d+)\.\s+(.+)$/.exec(line);
    if(m) occurrences.push({number:Number(m[1]),title:m[2],line:index+1});
  }
  const byNumber=new Map();
  for(const item of occurrences){
    if(!byNumber.has(item.number)) byNumber.set(item.number,[]);
    byNumber.get(item.number).push(item);
  }
  const duplicateGroups=[...byNumber.entries()].filter(([,items])=>items.length>1);
  if(duplicateGroups.length){
    const detail=duplicateGroups.map(([number,items])=>`${number}: ${items.map(x=>`L${x.line} “${x.title}”`).join(' | ')}`).join('; ');
    errors.push(`Duplicate numbered truth sections: ${detail}`);
  }
  console.log(`SOURCE_OF_TRUTH sha256=${crypto.createHash('sha256').update(truth).digest('hex')} bytes=${Buffer.byteLength(truth)} headings=${occurrences.length}`);
}

for(const name of forbiddenRuleFiles) if(fs.existsSync(path.join(ROOT,name))) errors.push(`${name} must not exist; SOURCE_OF_TRUTH.md is the only authority`);

const scriptsDir=path.join(ROOT,'scripts');
for(const name of fs.readdirSync(scriptsDir).filter(n=>n.endsWith('.mjs'))){
  if(name==='validate-source-of-truth-integrity.mjs') continue;
  const text=fs.readFileSync(path.join(scriptsDir,name),'utf8');
  if(/writeFileSync\s*\(\s*truthPath/.test(text)||/appendFileSync\s*\(\s*truthPath/.test(text)) errors.push(`${name}: build/QA scripts must never mutate SOURCE_OF_TRUTH.md`);
}

const pkg=JSON.parse(fs.readFileSync(path.join(ROOT,'package.json'),'utf8'));
const allScripts=Object.values(pkg.scripts||{}).join(' ');
if(allScripts.includes('enforce-pause-lock')) errors.push('Obsolete 42-page pause lock still referenced in package.json');
if(fs.existsSync(path.join(scriptsDir,'enforce-pause-lock.mjs'))) errors.push('Obsolete scripts/enforce-pause-lock.mjs still exists');

if(errors.length){
  console.error(`SOURCE OF TRUTH INTEGRITY FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('Source-of-truth integrity passed: one immutable authority, no pause lock, no build-time truth mutation.');
