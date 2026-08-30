import fs from 'node:fs';
import path from 'node:path';
import { pages } from '../content/book-pages.mjs';

const ROOT = process.cwd();
const scope = JSON.parse(fs.readFileSync(path.join(ROOT,'data','razpages-curriculum-scope.json'),'utf8'));
const disposition = JSON.parse(fs.readFileSync(path.join(ROOT,'data','razpages-question-disposition.json'),'utf8'));
const scopeIds = new Set(scope.families.flatMap(f => f.pages));
const references = new Map();
const explicitItems = new Map();
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

function detectExplicitRazpagesItem(q, bookPage) {
  const id = String(q?.id || '');
  const idMatch = id.match(/^RZ(\d+)-Q(\d+)(?:[A-Z][A-Z0-9]*)?(?:-|$)/);
  if (!idMatch) return;

  const sourcePage = Number(idMatch[1]);
  const sourceQuestion = Number(idMatch[2]);
  if (!scopeIds.has(sourcePage)) return;

  const sourceRef = String(q?.sourceRef || '');
  const samePage = sourceRef.includes(`razpages:עמוד-${sourcePage}.html`);
  const sameQuestion = new RegExp(`שאלה\\s*${sourceQuestion}(?:\\D|$)`).test(sourceRef);
  if (!samePage || !sameQuestion) return;

  const maxQuestion = Number(disposition.inventoryByPage?.[String(sourcePage)] || 0);
  if (!maxQuestion || sourceQuestion < 1 || sourceQuestion > maxQuestion) return;

  const itemId = `razpages:${sourcePage}:q${sourceQuestion}`;
  if (!explicitItems.has(itemId)) explicitItems.set(itemId, []);
  explicitItems.get(itemId).push({
    bookPage,
    questionId:id,
    sourceRef
  });
}

for (const page of pages) {
  collectRefs(page.sourceRefs, {bookPage:page.page, level:'page'});
  for (const q of page.questions || []) {
    questionCount += 1;
    collectRefs(q, {bookPage:page.page, questionId:q.id || null, level:'question'});
    detectExplicitRazpagesItem(q, page.page);
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

const manualFinalized = new Set(Object.keys(disposition.finalized || {}));
const explicitItemIds = [...explicitItems.keys()].sort((a,b) => {
  const pa = a.match(/:(\d+):q(\d+)/);
  const pb = b.match(/:(\d+):q(\d+)/);
  return Number(pa?.[1]||0)-Number(pb?.[1]||0) || Number(pa?.[2]||0)-Number(pb?.[2]||0);
});
const explicitNotYetFinalized = explicitItemIds.filter(id => !manualFinalized.has(id));
const effectiveFinalized = new Set([...manualFinalized, ...explicitItemIds]);

const report = {
  generatedAt: new Date().toISOString(),
  authority: 'SOURCE_OF_TRUTH.md',
  note: 'Reference coverage is evidence only. Explicit item evidence is counted only when the canonical question id encodes the exact Razpages page/question and its sourceRef independently repeats the same page/question identity.',
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
    outOfScopeReferences: outOfScopeReferenced,
    sourceQuestionCount: disposition.knownItemCount,
    manualFinalizedCount: manualFinalized.size,
    explicitCanonicalItemCount: explicitItemIds.length,
    explicitNotYetFinalizedCount: explicitNotYetFinalized.length,
    effectiveFinalizedCount: effectiveFinalized.size,
    effectiveNeedsReviewCount: disposition.knownItemCount - effectiveFinalized.size,
    explicitNotYetFinalized: explicitNotYetFinalized.map(itemId => ({itemId,evidence:explicitItems.get(itemId)}))
  }
};

fs.mkdirSync(path.join(ROOT,'meta'),{recursive:true});
fs.writeFileSync(path.join(ROOT,'meta','source-coverage-latest.json'),JSON.stringify(report,null,2)+'\n');
console.log(`Coverage dashboard: ${pages.length} book pages / ${questionCount} questions; razpages references ${inScopeReferenced.length}/${scopeIds.size} curriculum pages (${directReferenced.length}/95 direct, ${additionalReferenced.length}/46 additional).`);
console.log(`Razpages exact-item evidence: ${effectiveFinalized.size}/${disposition.knownItemCount} effective finalized; ${explicitNotYetFinalized.length} explicit canonical items are present in content but not yet copied into the manual ledger.`);
if (outOfScopeReferenced.length) console.log(`Razpages references outside frozen g8.alg.linear scope: ${outOfScopeReferenced.join(', ')}`);
