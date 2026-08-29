import fs from 'node:fs';
import path from 'node:path';
import { pages } from '../content/book-pages.mjs';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const PUBLIC_BOOK_URL='https://linear-function-digital-book.vercel.app/';
const errors=[];
const legacyDebt=[];
const STRICT_FROM_PAGE=36;
const refsOf=value=>{
  const refs=[];
  if(typeof value?.sourceRef==='string'&&value.sourceRef.trim()) refs.push(value.sourceRef.trim());
  if(Array.isArray(value?.sourceRefs)) refs.push(...value.sourceRefs.filter(x=>typeof x==='string'&&x.trim()).map(x=>x.trim()));
  return [...new Set(refs)];
};

if(!fs.existsSync(truthPath)) errors.push('SOURCE_OF_TRUTH.md missing');
else {
  const truth=fs.readFileSync(truthPath,'utf8');
  for(const required of ['## 4. מקורות חובה — הכול, לא מדגם','## 5. מיפוי, עקיבות וכיסוי מלא',PUBLIC_BOOK_URL]) if(!truth.includes(required)) errors.push(`SOURCE_OF_TRUTH.md missing required canonical policy: ${required}`);
}

for(const p of pages){
  const pageRefs=refsOf(p);
  if(pageRefs.length===0){
    const msg=`Page ${p.page}: sourceRef/sourceRefs missing`;
    if(p.page>=STRICT_FROM_PAGE) errors.push(msg); else legacyDebt.push(msg);
  }
  for(const q of p.questions||[]){
    const questionRefs=refsOf(q);
    // New/strict content keeps question-level provenance mandatory. Legacy pages may
    // inherit a researched page-level external source reference, matching the
    // provenance report. Exact source-item disposition is still enforced separately
    // by the zero-loss source ledgers and is never inferred from this inheritance.
    const effectiveRefs=p.page>=STRICT_FROM_PAGE ? questionRefs : [...new Set([...pageRefs,...questionRefs])];
    if(effectiveRefs.length===0){
      const msg=`${q.id||`page-${p.page}-question`}: sourceRef/sourceRefs missing`;
      if(p.page>=STRICT_FROM_PAGE) errors.push(msg); else legacyDebt.push(msg);
    }
  }
}

const debtPath=path.join(ROOT,'data','legacy-provenance-debt.json');
fs.writeFileSync(debtPath,JSON.stringify({
  authority:'SOURCE_OF_TRUTH.md',
  generatedPurpose:'Derived migration ledger; missing sources must be researched, never guessed.',
  strictFromPage:STRICT_FROM_PAGE,
  legacyPageInheritance:true,
  unresolvedCount:legacyDebt.length,
  unresolved:legacyDebt
},null,2)+'\n','utf8');

if(errors.length){
  console.error(`SOURCE PROVENANCE QA FAILED (${errors.length}); legacy debt=${legacyDebt.length}`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Source provenance strict gate passed for pages ${STRICT_FROM_PAGE}+; legacy provenance debt recorded=${legacyDebt.length}. SOURCE_OF_TRUTH.md unchanged.`);
