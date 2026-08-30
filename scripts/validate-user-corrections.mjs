import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const errors=[];
const err=m=>errors.push(m);

const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
if(!fs.existsSync(truthPath)) err('Missing SOURCE_OF_TRUTH.md');
const truth=fs.existsSync(truthPath)?fs.readFileSync(truthPath,'utf8'):'';

const canonicalTruthChecks=[
  ['single source of truth','`SOURCE_OF_TRUTH.md` בשורש הריפו הוא **מקור האמת היחיד והבלעדי**'],
  ['mathematical LTR isolation','כל ביטוי מתמטי הוא יחידת LTR מבודדת'],
  ['clean title/header contract','## 18. כותרת וממשק הדף'],
  ['project-wide correction protocol','## 15. תיקון משתמש הוא תיקון כלל־פרויקטלי'],
  ['answer-space contract','## 10. מרחבי תשובה — התאמה חכמה למה שהתלמיד צריך לכתוב']
];
for(const [label,token] of canonicalTruthChecks) if(!truth.includes(token)) err(`SOURCE_OF_TRUTH.md missing canonical ${label} contract`);

const truthLike=/^(?:RULES|REQUIREMENTS|PROJECT[_-]?RULES|PROJECT[_-]?REQUIREMENTS|SOURCE[_ -]?OF[_ -]?TRUTH)\.md$/i;
function walk(dir){
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    if(['.git','node_modules','sources'].includes(entry.name)) continue;
    const full=path.join(dir,entry.name);
    if(entry.isDirectory()) walk(full);
    else if(truthLike.test(entry.name)){
      const rel=path.relative(ROOT,full).replaceAll('\\','/');
      if(rel!=='SOURCE_OF_TRUTH.md') err(`Forbidden second source-of-truth-like file: ${rel}`);
    }
  }
}
walk(ROOT);

const manifestPath=path.join(ROOT,'meta/pages.json');
if(!fs.existsSync(manifestPath)) err('Missing meta/pages.json');
const manifest=fs.existsSync(manifestPath)?JSON.parse(fs.readFileSync(manifestPath,'utf8')):{generatedPages:0};
const total=manifest.generatedPages||0;

for(let n=1;n<=total;n++){
  const rel=`עמוד-${n}.html`;
  const file=path.join(ROOT,rel);
  if(!fs.existsSync(file)){err(`${rel}: missing generated page`);continue;}
  const html=fs.readFileSync(file,'utf8');

  const header=(html.match(/<header class="page-header">[\s\S]*?<\/header>/)||[])[0]||'';
  if(!header) err(`${rel}: missing page-header`);
  if((header.match(/<h1>/g)||[]).length!==1) err(`${rel}: page-header must contain exactly one h1`);
  if(/class="(?:kicker|subtitle)"|breadcrumb|רמות\s*\d/.test(header)) err(`${rel}: demo/meta text leaked around main title`);
  if(!/class="page-no"/.test(header)) err(`${rel}: page number missing from title header`);

  const summary=(html.match(/<section class="rule-card completion-summary"[\s\S]*?<\/section>/)||[])[0]||'';
  if(!summary) err(`${rel}: active top completion-summary missing`);
  else{
    if(!summary.includes('השלימו:')) err(`${rel}: summary must explicitly say השלימו`);
    const blanks=(summary.match(/class="summary-blank summary-blank-(?:short|medium|long)"/g)||[]).length;
    if(blanks<1||blanks>2) err(`${rel}: completion summary must contain 1-2 blanks; found ${blanks}`);
  }

  const katexCount=(html.match(/class="katex"/g)||[]).length;
  const isolatedKatexCount=(html.match(/<bdi class="math-isolate" dir="ltr"><span class="katex">/g)||[]).length;
  if(katexCount!==isolatedKatexCount) err(`${rel}: ${katexCount} KaTeX units but ${isolatedKatexCount} explicit LTR isolates`);

  if(/<div class="sub"(?:\s+data-level="[^"]+")?>\s*[אבגדהוזחטיכלמנסעפצקרשת]\./.test(html)) err(`${rel}: rendered Hebrew alphabetic subpart marker remains`);
}

const cssPath=path.join(ROOT,'styles','layout-contract.css');
if(!fs.existsSync(cssPath)) err('Missing styles/layout-contract.css');
else{
  const css=fs.readFileSync(cssPath,'utf8');
  // Values taken from the pinned RazPages source itself:
  // sources/razpages-linear/styles/a4-base.css -> .header-container { border-bottom: 4px double var(--title-blue) }
  // and .page-number { border: 2px solid var(--title-blue) }, where --title-blue is #1d4ed8.
  if(!/\.page-header\s*\{[\s\S]*?border-bottom:\s*4px\s+double\s+#1d4ed8\s*!important/.test(css)) err('RazPages double blue header rule is missing');
  if(!/\.page-no\s*\{[\s\S]*?border:\s*2px\s+solid\s+#1d4ed8\s*!important[\s\S]*?border-radius:\s*50%/.test(css)) err('RazPages blue page-number circle is missing');
  for(const cls of ['summary-blank-short','summary-blank-medium','summary-blank-long']) if(!css.includes(`.${cls}`)) err(`Missing ${cls} sizing rule`);
}

const a4Path=path.join(ROOT,'styles','a4-base.css');
if(!fs.existsSync(a4Path)) err('Missing styles/a4-base.css');
else{
  const css=fs.readFileSync(a4Path,'utf8');
  if(!css.includes('.math-isolate, .katex { direction:ltr !important; unicode-bidi:isolate-override !important;')) err('Global KaTeX strict LTR override guard is missing');
  if(!css.includes('.graph text { direction:ltr !important; unicode-bidi:bidi-override !important;')) err('Global SVG math strict LTR override guard is missing');
}

if(errors.length){
  console.error(`USER-CORRECTION REGRESSION QA FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`User-correction regression QA passed across ${total} generated pages: clean headers, active completion summaries, single source of truth and strict mathematical LTR preserved.`);
