import fs from 'node:fs';
import path from 'node:path';
import { pages } from '../content/book-pages.mjs';

const ROOT = process.cwd();
const scope = JSON.parse(fs.readFileSync(path.join(ROOT,'data','razpages-curriculum-scope.json'),'utf8'));
const scopeIds = new Set(scope.families.flatMap(f => f.pages));
const references = new Map();
let questionCount = 0;
let questionRefs = 0;

function collectRefs(value, context) {
  if (value == null) return;
  if (typeof value === 'string') {
    for (const match of value.matchAll(/razpages:עמוד-(\d+)\.html/g)) {
      const sourcePage = Number(match[1]);
      if (!references.has(sourcePage)) references.set(sourcePage, []);
      references.get(sourcePage).push(context);
      questionRefs += 1;
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach(item => collectRefs(item, context));
    return;
  }
  if (typeof value === 'object') {
    for (const [key,item] of Object.entries(value)) {
      if (key === 'sourceRef' || key === 'sourceRefs') collectRefs(item, context);
    }
  }
}

for (const page of pages) {
  collectRefs(page.sourceRefs, {bookPage:page.page, level:'page'});
  for (const q of page.questions || []) {
    questionCount += 1;
    collectRefs(q, {bookPage:page.page, questionId:q.id || null, level:'question'});
  }
}

const referenced = [...references.keys()].sort((a,b)=>a-b);
const inScopeReferenced = referenced.filter(n => scopeIds.has(n));
const outOfScopeReferenced = referenced.filter(n => !scopeIds.has(n));
const unreferenced = [...scopeIds].filter(n => !references.has(n)).sort((a,b)=>a-b);
const directTopicIds = new Set([
  ...Array.from({length:22},(_,i)=>395+i),
  96,97,98,
  ...Array.from({length:54},(_,i)=>417+i),
  ...Array.from({length:16},(_,i)=>515+i)
]);
const additionalIds = [...scopeIds].filter(n => !directTopicIds.has(n));
const directReferenced = [...directTopicIds].filter(n => references.has(n)).sort((a,b)=>a-b);
const additionalReferenced = additionalIds.filter(n => references.has(n)).sort((a,b)=>a-b);

const report = {
  generatedAt: new Date().toISOString(),
  authority: 'SOURCE_OF_TRUTH.md',
  note: 'Reference coverage is evidence only. A source page being referenced does not by itself prove question-level semantic coverage or final disposition.',
  workbook: {pages:pages.length, questions:questionCount},
  razpages: {
    curriculumScope: scopeIds.size,
    directlyTaggedScope: directTopicIds.size,
    additionalCurriculumScope: additionalIds.length,
    referencedUniquePages: inScopeReferenced.length,
    directlyTaggedReferenced: directReferenced.length,
    additionalCurriculumReferenced: additionalReferenced.length,
    unreferencedUniquePages: unreferenced.length,
    rawReferenceOccurrences: questionRefs,
    referencedPages: inScopeReferenced,
    additionalReferencedPages: additionalReferenced,
    unreferencedPages: unreferenced,
    outOfScopeReferences: outOfScopeReferenced
  }
};

fs.mkdirSync(path.join(ROOT,'meta'),{recursive:true});
fs.writeFileSync(path.join(ROOT,'meta','source-coverage-latest.json'),JSON.stringify(report,null,2)+'\n');
console.log(`Coverage dashboard: ${pages.length} book pages / ${questionCount} questions; razpages references ${inScopeReferenced.length}/${scopeIds.size} curriculum pages (${directReferenced.length}/95 direct, ${additionalReferenced.length}/46 additional).`);
if (outOfScopeReferenced.length) console.log(`Razpages references outside frozen g8.alg.linear scope: ${outOfScopeReferenced.join(', ')}`);
