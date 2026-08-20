import { pages } from '../content/page-definitions.mjs';

const allowedResponse = new Set(['choice-mark','short','equation','lines-2','lines-4','full-work','explanation','table-cell','graph-draw','geometry-work','mixed']);
const ids = new Set();
let errors=[];
for(const p of pages){
  let prev=-Infinity;
  if(!Number.isInteger(p.page)||p.page<1) errors.push(`Invalid page number: ${p.page}`);
  if(!p.title||!p.chapter) errors.push(`Page ${p.page}: missing title/chapter`);
  if(!Array.isArray(p.questions)||!p.questions.length) errors.push(`Page ${p.page}: no questions`);
  for(const q of p.questions||[]){
    if(ids.has(q.id)) errors.push(`Duplicate question id ${q.id}`); else ids.add(q.id);
    if(!q.family) errors.push(`${q.id}: missing family`);
    if(!Number.isFinite(q.level)||q.level<1||q.level>10) errors.push(`${q.id}: invalid level`);
    if(q.level<prev) errors.push(`Page ${p.page}: difficulty decreases at ${q.id}`);
    prev=q.level;
    if(!allowedResponse.has(q.responseSpace)) errors.push(`${q.id}: invalid responseSpace ${q.responseSpace}`);
    if(!q.stem) errors.push(`${q.id}: missing stem`);
    if(q.graph){
      if(!(q.graph.xMin<q.graph.xMax&&q.graph.yMin<q.graph.yMax)) errors.push(`${q.id}: invalid graph bounds`);
      for(const ln of q.graph.lines||[]) if(!ln.through||ln.through.length!==2) errors.push(`${q.id}: line must have two defining points`);
    }
  }
}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`Validated ${pages.length} page definition(s), ${ids.size} questions, difficulty order and response spaces.`);
