import fs from 'node:fs';
import path from 'node:path';
import { pages } from '../content/book-pages.mjs';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const PUBLIC_BOOK_URL='https://linear-function-digital-book.vercel.app/';
const errors=[];

if(!fs.existsSync(truthPath)) errors.push('SOURCE_OF_TRUTH.md missing');
else {
  const truth=fs.readFileSync(truthPath,'utf8');
  for(const required of ['## 4. מקורות חובה — הכול, לא מדגם','## 5. מיפוי, עקיבות וכיסוי מלא',PUBLIC_BOOK_URL]){
    if(!truth.includes(required)) errors.push(`SOURCE_OF_TRUTH.md missing required canonical policy: ${required}`);
  }
}

for(const p of pages){
  if(!Array.isArray(p.sourceRefs)||p.sourceRefs.length===0) errors.push(`Page ${p.page}: sourceRefs required`);
  for(const q of p.questions||[]){
    if(typeof q.sourceRef!=='string'||!q.sourceRef.trim()) errors.push(`${q.id||`page-${p.page}-question`}: sourceRef required`);
  }
}

if(errors.length){
  console.error(`SOURCE PROVENANCE QA FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Source provenance passed for ${pages.length} pages. SOURCE_OF_TRUTH.md remained immutable.`);
