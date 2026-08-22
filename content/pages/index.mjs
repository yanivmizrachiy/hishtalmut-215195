import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const dir=fileURLToPath(new URL('.',import.meta.url));
const files=fs.readdirSync(dir)
  .filter(name=>/^page-\d+\.mjs$/.test(name))
  .sort((a,b)=>Number(a.match(/\d+/)[0])-Number(b.match(/\d+/)[0]));

const discovered=[];
for(const file of files){
  const mod=await import(pathToFileURL(path.join(dir,file)).href);
  const items=Array.isArray(mod.pages)?mod.pages:(mod.page?[mod.page]:[]);
  discovered.push(...items);
}

export const pages=discovered.sort((a,b)=>a.page-b.page);
