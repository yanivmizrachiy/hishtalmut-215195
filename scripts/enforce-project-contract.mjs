import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const mode=process.argv.includes('--post')?'post':'pre';
const sourceTruthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const buildPath=path.join(ROOT,'scripts','build-pages.mjs');
const cssPath=path.join(ROOT,'styles','a4-base.css');
const errors=[];

const forbiddenTruthBasename=/^(?:RULES|REQUIREMENTS|PROJECT[_-]?RULES|PROJECT[_-]?REQUIREMENTS|SOURCE[_ -]?OF[_ -]?TRUTH)\.md$/i;
function walk(dir){
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    if(['.git','node_modules','sources'].includes(entry.name)) continue;
    const full=path.join(dir,entry.name);
    if(entry.isDirectory()) walk(full);
    else if(forbiddenTruthBasename.test(entry.name)){
      const rel=path.relative(ROOT,full).replaceAll('\\','/');
      if(rel!=='SOURCE_OF_TRUTH.md') errors.push(`Additional source-of-truth-like file is forbidden: ${rel}`);
    }
  }
}

if(!fs.existsSync(sourceTruthPath)) errors.push('SOURCE_OF_TRUTH.md is missing from repository root');
else {
  const truth=fs.readFileSync(sourceTruthPath,'utf8');
  const required=[
    '`SOURCE_OF_TRUTH.md` בשורש הריפו הוא **מקור האמת היחיד והבלעדי**',
    '## 15. תיקון משתמש הוא תיקון כלל־פרויקטלי',
    '## 18. כותרת וממשק הדף',
    'כל ביטוי מתמטי הוא יחידת LTR מבודדת',
    'מספר שלילי',
    'זוג סדור'
  ];
  for(const token of required) if(!truth.includes(token)) errors.push(`SOURCE_OF_TRUTH.md missing canonical contract: ${token}`);
  for(const obsolete of [
    '## 22. זהות הריפו, מקור אמת וכותרת דף נקייה — חובה',
    '## 23. כיוון כתיבה מתמטי בתוך RTL — חובה',
    '## 24. פרוטוקול תיקון משתמש ורגרסיה כלל־פרויקטלית — חובה'
  ]) if(truth.includes(obsolete)) errors.push(`Obsolete duplicate truth section remains: ${obsolete}`);
}

walk(ROOT);

if(!fs.existsSync(buildPath)) errors.push('scripts/build-pages.mjs missing');
else {
  const build=fs.readFileSync(buildPath,'utf8');
  if(build.includes('class="kicker">${esc(p.kicker)}')||build.includes('class="subtitle">${esc(p.subtitle)}')) errors.push('build-pages.mjs still renders kicker/subtitle around the main title');
  if(!build.includes('class="math-isolate" dir="ltr"')) errors.push('build-pages.mjs must wrap rendered math in an explicit LTR isolate');
  if(!build.includes('<header class="page-header"><h1>${esc(p.title)}</h1><div class="page-no">${p.page}</div></header>')) errors.push('build-pages.mjs canonical clean page header missing');
}

if(!fs.existsSync(cssPath)) errors.push('styles/a4-base.css missing');
else {
  const css=fs.readFileSync(cssPath,'utf8');
  if(!/\.math-isolate[\s\S]*direction\s*:\s*ltr/i.test(css)) errors.push('a4-base.css missing strict LTR math isolation');
  if(!/\.graph text[\s\S]*direction\s*:\s*ltr/i.test(css)) errors.push('a4-base.css missing LTR SVG math/text guard');
}

if(errors.length){
  console.error(`PROJECT CONTRACT FAILED (${mode}) (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Project contract passed (${mode}): SOURCE_OF_TRUTH.md remained immutable; single authority, clean header, LTR math and project-wide correction rules enforced.`);
