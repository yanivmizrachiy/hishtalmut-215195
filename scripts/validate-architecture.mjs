import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const errors=[];
const required=['content/book-pages.mjs','content/book-config.mjs','SOURCE_OF_TRUTH.md'];
for(const rel of required) if(!fs.existsSync(path.join(ROOT,rel))) errors.push(`Missing architecture file: ${rel}`);

const legacyTokens=['page-definitions.mjs','pages-05-06.mjs','pages-07-10.mjs','pages-07-15-legacy.mjs'];
const activeTools=[
  'scripts/build-pages.mjs',
  'scripts/validate-content.mjs',
  'scripts/validate-math-models.mjs',
  'scripts/sync-manifest.mjs',
  'scripts/enforce-source-question-provenance.mjs'
];

for(const rel of activeTools){
  const file=path.join(ROOT,rel);
  if(!fs.existsSync(file)){errors.push(`Missing active workbook tool: ${rel}`);continue;}
  const s=fs.readFileSync(file,'utf8');
  if(!s.includes("../content/book-pages.mjs")) errors.push(`${rel}: must import the central page registry`);
  for(const bad of legacyTokens) if(s.includes(bad)) errors.push(`${rel}: active tool still references legacy collection ${bad}`);
}

const migrationPath=path.join(ROOT,'scripts','migrate-legacy-pages.mjs');
if(!fs.existsSync(migrationPath)) errors.push('Missing scripts/migrate-legacy-pages.mjs');
else{
  const migration=fs.readFileSync(migrationPath,'utf8');
  if(!legacyTokens.some(token=>migration.includes(token))) errors.push('Migration script must be the explicit legacy-to-modular bridge');
}

const config=fs.readFileSync(path.join(ROOT,'content/book-config.mjs'),'utf8');
for(const token of ['repositoryName','publicBookUrl','chapters']) if(!config.includes(token)) errors.push(`content/book-config.mjs missing ${token}`);

const pageDir=path.join(ROOT,'content','pages');
const modules=fs.existsSync(pageDir)?fs.readdirSync(pageDir).filter(n=>/^page-\d+\.mjs$/.test(n)):[];
const nums=modules.map(n=>Number(n.match(/\d+/)[0])).sort((a,b)=>a-b);
if(new Set(nums).size!==nums.length) errors.push('Duplicate modular page filenames detected');
if(nums.length){
  const max=Math.max(...nums);
  for(let n=1;n<=max;n++) if(!nums.includes(n)) errors.push(`Missing modular page file content/pages/page-${n}.mjs`);
}

const registry=fs.readFileSync(path.join(ROOT,'content','book-pages.mjs'),'utf8');
if(!registry.includes("./pages/index.mjs")) errors.push('content/book-pages.mjs must use automatic page discovery');
for(const bad of legacyTokens) if(registry.includes(bad)) errors.push(`content/book-pages.mjs still references legacy collection ${bad}`);

if(errors.length){
  console.error(`ARCHITECTURE QA FAILED (${errors.length})`);
  for(const e of errors) console.error(e);
  process.exit(1);
}
console.log(`Architecture QA passed: ${nums.length} modular page file(s), one registry, one technical config; legacy access is isolated to migration only.`);
