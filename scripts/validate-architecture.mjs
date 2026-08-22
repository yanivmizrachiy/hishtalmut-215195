import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const errors=[];
const required=['content/book-pages.mjs','content/book-config.mjs','SOURCE_OF_TRUTH.md'];
for(const rel of required) if(!fs.existsSync(path.join(ROOT,rel))) errors.push(`Missing architecture file: ${rel}`);

const directLegacyImports=[
  '../content/page-definitions.mjs',
  '../content/pages-05-06.mjs',
  '../content/pages-07-10.mjs',
  '../content/pages-07-15-legacy.mjs'
];
const allowedLegacyImporter='content/book-pages.mjs';

function walk(dir,out=[]){
  for(const e of fs.readdirSync(dir,{withFileTypes:true})){
    if(['node_modules','.git','sources'].includes(e.name)) continue;
    const full=path.join(dir,e.name);
    if(e.isDirectory()) walk(full,out);
    else if(e.isFile()&&e.name.endsWith('.mjs')) out.push(full);
  }
  return out;
}

for(const file of walk(ROOT)){
  const rel=path.relative(ROOT,file).replaceAll('\\','/');
  const s=fs.readFileSync(file,'utf8');
  if(rel!==allowedLegacyImporter){
    for(const bad of directLegacyImports){
      if(s.includes(bad)) errors.push(`${rel}: direct legacy page import is forbidden; use content/book-pages.mjs`);
    }
  }
}

for(const rel of ['scripts/build-pages.mjs','scripts/validate-content.mjs','scripts/validate-math-models.mjs','scripts/sync-manifest.mjs','scripts/enforce-source-question-provenance.mjs']){
  const s=fs.readFileSync(path.join(ROOT,rel),'utf8');
  if(!s.includes("../content/book-pages.mjs")) errors.push(`${rel}: must import the central page registry`);
}

const config=fs.readFileSync(path.join(ROOT,'content/book-config.mjs'),'utf8');
for(const token of ['repositoryName','publicBookUrl','chapters']) if(!config.includes(token)) errors.push(`content/book-config.mjs missing ${token}`);

const pageDir=path.join(ROOT,'content','pages');
if(fs.existsSync(pageDir)){
  const modules=fs.readdirSync(pageDir).filter(n=>/^page-\d+\.mjs$/.test(n));
  const nums=modules.map(n=>Number(n.match(/\d+/)[0]));
  if(new Set(nums).size!==nums.length) errors.push('Duplicate modular page filenames detected');
}

if(errors.length){
  console.error(`ARCHITECTURE QA FAILED (${errors.length})`);
  for(const e of errors) console.error(e);
  process.exit(1);
}
console.log('Architecture QA passed: one page registry, one technical config, no direct legacy imports in workbook tooling.');
