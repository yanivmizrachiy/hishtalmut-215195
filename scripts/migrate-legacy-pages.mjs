import fs from 'node:fs';
import path from 'node:path';
import { pages as corePages } from '../content/page-definitions.mjs';
import { pages as pages05to06 } from '../content/pages-05-06.mjs';
import { pages as pages07to15 } from '../content/pages-07-15-legacy.mjs';

const ROOT=process.cwd();
const outDir=path.join(ROOT,'content','pages');
fs.mkdirSync(outDir,{recursive:true});

const legacy=[...corePages,...pages05to06,...pages07to15]
  .filter(p=>p.page<=15)
  .sort((a,b)=>a.page-b.page);

let created=0;
for(const page of legacy){
  const file=path.join(outDir,`page-${page.page}.mjs`);
  if(fs.existsSync(file)) continue;
  const body='// Auto-migrated from the former legacy collection. Edit this page here from now on.\n'+
    `export const page = ${JSON.stringify(page,null,2)};\n`;
  fs.writeFileSync(file,body,'utf8');
  created++;
}

console.log(`Legacy page migration ready: ${created} modular file(s) created; pages 1-15 now follow the same one-page-one-file model.`);
