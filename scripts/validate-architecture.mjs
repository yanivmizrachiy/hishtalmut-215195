import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const errors=[];
const required=['content/book-pages.mjs','content/book-config.mjs','content/pages/index.mjs','SOURCE_OF_TRUTH.md'];
for(const rel of required) if(!fs.existsSync(path.join(ROOT,rel))) errors.push(`Missing architecture file: ${rel}`);

const forbiddenLegacy=[
  'content/page-definitions.mjs',
  'content/pages-05-06.mjs',
  'content/pages-07-10.mjs',
  'content/pages-07-15-legacy.mjs',
  'scripts/migrate-legacy-pages.mjs'
];
for(const rel of forbiddenLegacy) if(fs.existsSync(path.join(ROOT,rel))) errors.push(`Completed legacy artifact must be removed: ${rel}`);

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
  for(const bad of forbiddenLegacy.map(x=>path.basename(x))) if(s.includes(bad)) errors.push(`${rel}: references forbidden legacy artifact ${bad}`);
}

const configPath=path.join(ROOT,'content/book-config.mjs');
if(fs.existsSync(configPath)){
  const config=fs.readFileSync(configPath,'utf8');
  for(const token of ['repositoryName','publicBookUrl','chapters']) if(!config.includes(token)) errors.push(`content/book-config.mjs missing ${token}`);
}

const pageDir=path.join(ROOT,'content','pages');
const modules=fs.existsSync(pageDir)?fs.readdirSync(pageDir).filter(n=>/^page-\d+\.mjs$/.test(n)):[];
const nums=modules.map(n=>Number(n.match(/\d+/)[0])).sort((a,b)=>a-b);
if(new Set(nums).size!==nums.length) errors.push('Duplicate modular page filenames detected');
if(nums.length){
  const max=Math.max(...nums);
  for(let n=1;n<=max;n++) if(!nums.includes(n)) errors.push(`Missing modular page file content/pages/page-${n}.mjs`);
}

const registryPath=path.join(ROOT,'content','book-pages.mjs');
if(fs.existsSync(registryPath)){
  const registry=fs.readFileSync(registryPath,'utf8');
  if(!registry.includes("./pages/index.mjs")) errors.push('content/book-pages.mjs must use automatic page discovery');
  for(const bad of forbiddenLegacy.map(x=>path.basename(x))) if(registry.includes(bad)) errors.push(`content/book-pages.mjs references forbidden legacy artifact ${bad}`);
}

const packagePath=path.join(ROOT,'package.json');
if(fs.existsSync(packagePath)){
  const pkg=fs.readFileSync(packagePath,'utf8');
  if(pkg.includes('migrate-legacy-pages.mjs')) errors.push('package.json still runs completed legacy migration');
}

if(errors.length){
  console.error(`ARCHITECTURE QA FAILED (${errors.length})`);
  for(const e of errors) console.error(e);
  process.exit(1);
}
console.log(`Architecture QA passed: ${nums.length} modular page file(s), one registry, one technical config, zero legacy content paths.`);
