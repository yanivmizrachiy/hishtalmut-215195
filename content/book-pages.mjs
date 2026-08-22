// Technical single entrypoint for workbook content. SOURCE_OF_TRUTH.md remains the only source of truth.
// All build/QA tooling imports pages from this file only.
import { pages as corePages } from './page-definitions.mjs';
import { pages as pages05to06 } from './pages-05-06.mjs';
import { pages as pages07plus } from './pages-07-10.mjs';

const all=[...corePages,...pages05to06,...pages07plus].sort((a,b)=>a.page-b.page);
const seen=new Set();
for(const p of all){
  if(seen.has(p.page)) throw new Error(`Duplicate page number in technical registry: ${p.page}`);
  seen.add(p.page);
}

export const pages=Object.freeze(all);
export const pagesByNumber=new Map(pages.map(p=>[p.page,p]));
export const getPage=page=>pagesByNumber.get(Number(page));
export const nextPageNumber=()=>pages.length?Math.max(...pages.map(p=>p.page))+1:1;
