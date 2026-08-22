import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const errors=[];
const err=m=>errors.push(m);

const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
if(!fs.existsSync(truthPath)) err('Missing SOURCE_OF_TRUTH.md');
const truth=fs.existsSync(truthPath)?fs.readFileSync(truthPath,'utf8'):'';

for(const required of [
  'שם הריפו המדויק ב-GitHub חייב להיות `linear-function`',
  '`SOURCE_OF_TRUTH.md` בשורש הריפו הוא מקור האמת היחיד והבלעדי',
  'כל ביטוי מתמטי הוא יחידת LTR מבודדת'
]) if(!truth.includes(required)) err(`SOURCE_OF_TRUTH.md missing correction rule: ${required}`);

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

  const katexCount=(html.match(/class="katex"/g)||[]).length;
  const isolatedKatexCount=(html.match(/<bdi class="math-isolate" dir="ltr"><span class="katex">/g)||[]).length;
  if(katexCount!==isolatedKatexCount) err(`${rel}: ${katexCount} KaTeX units but ${isolatedKatexCount} explicit LTR isolates`);
}

const cssPath=path.join(ROOT,'styles/a4-base.css');
if(!fs.existsSync(cssPath)) err('Missing styles/a4-base.css');
else{
  const css=fs.readFileSync(cssPath,'utf8');
  if(!css.includes('.math-isolate, .katex { direction:ltr !important; unicode-bidi:isolate !important;')) err('Global KaTeX LTR-isolation CSS guard is missing');
  if(!css.includes('.graph, .graph text, .table { direction:ltr !important; unicode-bidi:isolate !important;')) err('Global SVG/table LTR-isolation CSS guard is missing');
}

if(errors.length){
  console.error(`USER-CORRECTION REGRESSION QA FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`User-correction regression QA passed across ${total} generated pages: clean headers, single source of truth, and mathematical LTR isolation preserved.`);
