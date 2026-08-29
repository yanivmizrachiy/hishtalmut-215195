// Technical single entrypoint for workbook content. SOURCE_OF_TRUTH.md remains the only source of truth.
// Every workbook page is loaded from content/pages/page-N.mjs via automatic discovery.
import { pages as discoveredPages } from './pages/index.mjs';
import { normalizeQuestionAnswerShapes } from './answer-shape.mjs';

const all=discoveredPages
  .map(page=>({
    ...page,
    questions:(page.questions||[]).map(normalizeQuestionAnswerShapes)
  }))
  .sort((a,b)=>a.page-b.page);
const seen=new Set();
for(const p of all){
  if(seen.has(p.page)) throw new Error(`Duplicate page number in technical registry: ${p.page}`);
  seen.add(p.page);
}

export const pages=Object.freeze(all);
export const pagesByNumber=new Map(pages.map(p=>[p.page,p]));
export const getPage=page=>pagesByNumber.get(Number(page));
export const nextPageNumber=()=>pages.length?Math.max(...pages.map(p=>p.page))+1:1;
