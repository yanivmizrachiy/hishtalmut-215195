import fs from 'node:fs';
import path from 'node:path';
import { pages } from '../content/book-pages.mjs';

const ROOT=process.cwd();
const rows=[];
const sourceCounts=new Map();
const missing=[];

function refsFrom(item={}){
  const raw=[];
  if(typeof item.sourceRef==='string') raw.push(item.sourceRef);
  if(Array.isArray(item.sourceRefs)) raw.push(...item.sourceRefs.filter(v=>typeof v==='string'));
  return [...new Set(raw)];
}
function sourceKind(ref=''){
  if(ref.startsWith('razpages:')) return 'razpages';
  if(ref.startsWith('jerusalem2:')) return 'jerusalem2';
  if(/מיצ.?ב|meitzav/i.test(ref)) return 'meitzav';
  if(/Drive|\.pdf|\.docx|\.pptx|\.ppsx|Google/i.test(ref)) return 'teaching-source';
  if(ref.startsWith('data/')) return 'derived-map';
  return 'other';
}
function addCount(kind){sourceCounts.set(kind,(sourceCounts.get(kind)||0)+1);}

for(const page of pages){
  const pageRefs=refsFrom(page);
  for(const q of page.questions||[]){
    const refs=[...new Set([...pageRefs,...refsFrom(q)])];
    const sourceRefs=refs.filter(ref=>!ref.startsWith('data/'));
    const kinds=[...new Set(sourceRefs.map(sourceKind))];
    sourceRefs.forEach(ref=>addCount(sourceKind(ref)));
    if(!sourceRefs.length) missing.push({bookPage:page.page,questionId:q.id||null});
    rows.push({bookPage:page.page,chapter:page.chapter,questionId:q.id||null,family:q.family||null,level:q.level??null,sourceRefs,kinds,adaptation:q.adaptation||null});
  }
}

const report={
  generatedAt:new Date().toISOString(),
  authority:'SOURCE_OF_TRUTH.md',
  note:'Generated from canonical content. Page-level sourceRefs are inherited by questions for evidence discovery, but cut-over still requires exact source-item disposition where SOURCE_OF_TRUTH demands it.',
  summary:{bookPages:pages.length,questions:rows.length,questionsWithoutExternalSourceEvidence:missing.length,referenceOccurrencesByKind:Object.fromEntries([...sourceCounts.entries()].sort())},
  questionsWithoutExternalSourceEvidence:missing,
  questions:rows
};
fs.mkdirSync(path.join(ROOT,'meta'),{recursive:true});
fs.writeFileSync(path.join(ROOT,'meta','provenance-latest.json'),JSON.stringify(report,null,2)+'\n');
console.log(`Provenance report: ${rows.length} questions; ${missing.length} without external source evidence; refs=${JSON.stringify(report.summary.referenceOccurrencesByKind)}.`);
