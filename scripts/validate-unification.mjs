import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const cutoverMode = process.argv.includes('--cutover');
const errors = [];
const blockers = [];

const readText = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const readJson = (p) => JSON.parse(readText(p));
const requireFile = (p) => {
  if (!fs.existsSync(path.join(ROOT, p))) errors.push(`Missing required unification file: ${p}`);
};

[
  'SOURCE_OF_TRUTH.md',
  'data/unification-baseline.json',
  'data/razpages-linear-manifest.json',
  'data/razpages-curriculum-scope.json',
  'data/razpages-question-disposition.json',
  'data/source-coverage.json',
  'data/technology-adoption.json',
  'data/content-disposition-ledger.json',
  'curriculum/prerequisites.json'
].forEach(requireFile);

if (!errors.length) {
  const truth = readText('SOURCE_OF_TRUTH.md');
  for (const token of [
    '## 24. איחוד שני הפרויקטים',
    '## 25. כלל אפס אובדן',
    '## 26. Curriculum Graph',
    '## 27. אימוץ טכנולוגיות',
    '## 28. שערי איכות מחייבים לאיחוד',
    '## 29. Cut-over, Rename ופרודקשן',
    'integration/linear-book-unification',
    'backup/pre-unification-2026-08-29'
  ]) {
    if (!truth.includes(token)) errors.push(`SOURCE_OF_TRUTH.md missing unification token: ${token}`);
  }

  const baseline = readJson('data/unification-baseline.json');
  if (baseline.targetRepositoryName !== 'linear-function') errors.push('Target repository name must be linear-function');
  if (baseline.workingBranch !== 'integration/linear-book-unification') errors.push('Unexpected unification working branch');
  if (baseline.repositories?.canonical?.baselineSha !== '05a0b620b420e0e84ca07143cd2cce616ad381e3') errors.push('Canonical baseline SHA drifted');
  if (baseline.repositories?.razpages?.baselineSha !== '07c8ac5f88ceb8958f8602742e4d3d6f0f27b16d') errors.push('razpages baseline SHA drifted');
  if (baseline.razpagesScope?.directTopicPages !== 95 || baseline.razpagesScope?.curriculumLinkedPages !== 141 || baseline.razpagesScope?.additionalCurriculumCandidates !== 46) {
    errors.push('razpages scope must remain 95 direct / 141 curriculum-linked / 46 additional candidates until a new audited baseline explicitly replaces it');
  }

  const manifest = readJson('data/razpages-linear-manifest.json');
  if (manifest.sourceRef !== baseline.repositories.razpages.baselineSha) errors.push('razpages manifest must be pinned to the unification baseline SHA');
  if (manifest.directTopicCount !== 95 || manifest.curriculumLinkedCount !== 141 || manifest.additionalCurriculumCandidates !== 46) errors.push('razpages manifest scope mismatch');
  if (manifest.directTopicCount + manifest.additionalCurriculumCandidates !== manifest.curriculumLinkedCount) errors.push('razpages scope arithmetic mismatch');
  if (manifest.additionalCurriculumRange?.fileStart !== 136 || manifest.additionalCurriculumRange?.fileEnd !== 181) errors.push('razpages additional curriculum range must be exactly 136-181');
  if (manifest.curriculumAudit?.sourceQuestionCount !== 299 || manifest.curriculumAudit?.directSourceQuestionCount !== 242 || manifest.curriculumAudit?.additionalSourceQuestionCount !== 57) errors.push('razpages source-question audit counts must remain 299 = 242 direct + 57 additional');

  const scope = readJson('data/razpages-curriculum-scope.json');
  if (scope.sourceBaselineSha !== baseline.repositories.razpages.baselineSha) errors.push('razpages curriculum scope baseline mismatch');
  if (scope.pageCount !== 141 || scope.directTopicPageCount !== 95 || scope.additionalPageCount !== 46) errors.push('razpages curriculum scope headline counts mismatch');
  if (scope.additionalPageRange?.[0] !== 136 || scope.additionalPageRange?.[1] !== 181) errors.push('razpages curriculum scope additional range mismatch');
  if (scope.outsideBoundary?.page !== 182 || scope.outsideBoundary?.curriculumId !== 'g8.numstat.ratio.percent') errors.push('razpages curriculum scope must prove page 182 is outside g8.alg.linear');
  const expectedFamilyCounts = new Map([
    ['g8.alg.linear.representations',65],
    ['g8.alg.linear.slope',32],
    ['g8.alg.linear.intercepts',12],
    ['g8.alg.linear.axisParallel',3],
    ['g8.alg.linear.findEquation',15],
    ['g8.alg.linear.parallelCoincident',7],
    ['g8.alg.linear.intersection',6],
    ['g8.alg.linear.inequalities',1]
  ]);
  const allScopePages = [];
  for (const family of scope.families || []) {
    const expected = expectedFamilyCounts.get(family.id);
    if (expected == null) errors.push(`Unexpected razpages curriculum family ${family.id}`);
    if (family.pageCount !== expected || (family.pages || []).length !== expected) errors.push(`Wrong page count for ${family.id}`);
    allScopePages.push(...(family.pages || []));
  }
  for (const id of expectedFamilyCounts.keys()) if (!(scope.families || []).some(f => f.id === id)) errors.push(`Missing razpages curriculum family ${id}`);
  const uniqueScopePages = new Set(allScopePages);
  if (allScopePages.length !== 141 || uniqueScopePages.size !== 141) errors.push(`razpages curriculum scope must contain 141 unique page ids; got ${allScopePages.length}/${uniqueScopePages.size}`);
  for (let n = 136; n <= 181; n += 1) if (!uniqueScopePages.has(n)) errors.push(`razpages curriculum scope missing additional page ${n}`);
  if (uniqueScopePages.has(182)) errors.push('razpages curriculum scope incorrectly includes page 182');

  const coverage = readJson('data/source-coverage.json');
  const rc = coverage.mandatorySources?.razpages;
  if (rc?.directTopicPageCount !== 95 || rc?.curriculumLinkedPageCount !== 141 || rc?.additionalCurriculumCandidates !== 46) errors.push('source coverage razpages counts mismatch');
  if (rc?.auditedSourceQuestionCount !== 299 || rc?.directSourceQuestionCount !== 242 || rc?.additionalSourceQuestionCount !== 57) errors.push('source coverage razpages question counts mismatch');
  if (rc?.sourceQuestionAuditStatus !== 'complete') errors.push('source coverage must record the 299-question discovery audit as complete');
  if (rc?.baselineSha !== baseline.repositories.razpages.baselineSha) errors.push('source coverage razpages baseline mismatch');

  const tech = readJson('data/technology-adoption.json');
  const allowedTech = new Set(['keep', 'rebuild', 'drop']);
  const seenCapabilities = new Set();
  for (const decision of tech.decisions || []) {
    if (!decision.capability) errors.push('Technology decision missing capability');
    if (!allowedTech.has(decision.disposition)) errors.push(`Invalid technology disposition for ${decision.capability || 'unknown'}`);
    if (seenCapabilities.has(decision.capability)) errors.push(`Duplicate technology decision: ${decision.capability}`);
    seenCapabilities.add(decision.capability);
  }
  for (const capability of ['A4 print geometry', 'browser A4 visual QA', 'SVG geometry QA', 'mobile reader', 'PWA and offline', 'print/PDF/download actions']) {
    if (!seenCapabilities.has(capability)) errors.push(`Missing technology decision: ${capability}`);
  }

  const graph = readJson('curriculum/prerequisites.json');
  const nodes = graph.nodes || [];
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const chapters = new Set(nodes.map((n) => n.chapter));
  for (let chapter = 0; chapter <= 25; chapter += 1) if (!chapters.has(chapter)) errors.push(`Prerequisite graph missing chapter ${chapter}`);
  if (nodes.length !== 26) errors.push(`Prerequisite graph must contain exactly 26 chapter nodes; got ${nodes.length}`);
  for (const node of nodes) for (const dep of node.prerequisites || []) if (!byId.has(dep)) errors.push(`Unknown prerequisite ${dep} referenced by ${node.id}`);
  const visiting = new Set();
  const visited = new Set();
  const walk = (id) => {
    if (visiting.has(id)) { errors.push(`Cycle in prerequisite graph at ${id}`); return; }
    if (visited.has(id)) return;
    visiting.add(id);
    for (const dep of byId.get(id)?.prerequisites || []) walk(dep);
    visiting.delete(id);
    visited.add(id);
  };
  for (const id of byId.keys()) walk(id);

  const ledger = readJson('data/content-disposition-ledger.json');
  const allowed = new Set(ledger.allowedDispositions || []);
  const finals = new Set(ledger.finalDispositions || []);
  for (const expected of ['included', 'merged', 'verified_duplicate', 'out_of_scope', 'needs_review']) if (!allowed.has(expected)) errors.push(`Disposition ledger missing allowed status ${expected}`);
  for (const expected of ['included', 'merged', 'verified_duplicate', 'out_of_scope']) if (!finals.has(expected)) errors.push(`Disposition ledger missing final status ${expected}`);

  const razDetail = readJson('data/razpages-question-disposition.json');
  if (razDetail.sourceBaselineSha !== baseline.repositories.razpages.baselineSha) errors.push('razpages question ledger baseline mismatch');
  if (razDetail.itemUnit !== 'source-question' || razDetail.knownItemCount !== 299 || (razDetail.items || []).length !== 299) errors.push('razpages detailed ledger must contain exactly 299 source-question items');
  const detailIds = new Set();
  const detailPages = new Set();
  let detailFinalized = 0;
  let detailNeedsReview = 0;
  for (const item of razDetail.items || []) {
    if (!item.id || detailIds.has(item.id)) errors.push(`Duplicate or missing razpages source item id: ${item.id || 'missing'}`);
    detailIds.add(item.id);
    const idMatch = String(item.id || '').match(/^razpages:(\d+):q(\d+)$/);
    if (!idMatch) errors.push(`Invalid razpages source item id: ${item.id}`);
    if (idMatch && (Number(idMatch[1]) !== item.sourcePage || Number(idMatch[2]) !== item.sourceQuestionIndex)) errors.push(`razpages source item identity mismatch: ${item.id}`);
    if (!uniqueScopePages.has(item.sourcePage)) errors.push(`razpages detailed ledger item outside curriculum scope: ${item.id}`);
    detailPages.add(item.sourcePage);
    if (!/^[a-f0-9]{64}$/.test(String(item.textHash || ''))) errors.push(`razpages detailed ledger missing valid text hash: ${item.id}`);
    if (!allowed.has(item.disposition)) errors.push(`Invalid razpages disposition ${item.disposition} for ${item.id}`);
    if (item.disposition === 'needs_review') detailNeedsReview += 1;
    else {
      detailFinalized += 1;
      if (!Array.isArray(item.evidence) || item.evidence.length === 0) errors.push(`Final razpages disposition requires evidence: ${item.id}`);
    }
  }
  if (detailIds.size !== 299) errors.push(`razpages detailed ledger must have 299 unique ids; got ${detailIds.size}`);
  if (detailPages.size !== 141) errors.push(`razpages detailed ledger must cover all 141 curriculum pages; got ${detailPages.size}`);

  const razSummary = ledger.sources?.razpages;
  if (razSummary?.knownItemUnit !== 'source-question' || razSummary?.knownItemCount !== 299) errors.push('razpages summary ledger must use the 299 source-question scope');
  if (razSummary?.detailedLedger !== 'data/razpages-question-disposition.json') errors.push('razpages summary ledger must point to detailed question ledger');
  if (razSummary?.finalizedCount !== detailFinalized || razSummary?.needsReviewCount !== detailNeedsReview) errors.push(`razpages summary/detail disposition counts disagree: summary ${razSummary?.finalizedCount}/${razSummary?.needsReviewCount}, detail ${detailFinalized}/${detailNeedsReview}`);

  for (const [source, item] of Object.entries(ledger.sources || {})) {
    if (item.status === 'needs_review') blockers.push(`${source}: source ledger still needs review`);
    if (item.knownItemCount == null) blockers.push(`${source}: exact source item count unresolved`);
    if (item.needsReviewCount == null || item.needsReviewCount > 0) blockers.push(`${source}: unresolved source items remain`);
    if (item.knownItemCount != null && item.finalizedCount != null && item.needsReviewCount != null && item.finalizedCount + item.needsReviewCount !== item.knownItemCount) errors.push(`${source}: finalized + needsReview must equal knownItemCount`);
  }

  if (manifest.curriculumAudit?.discoveryStatus !== 'complete') blockers.push('razpages: 141-page / 299-question discovery audit is not complete');
  if (manifest.curriculumAudit?.dispositionStatus !== 'complete') blockers.push(`razpages: question disposition status is ${manifest.curriculumAudit?.dispositionStatus || 'missing'}`);
  for (const [source, item] of Object.entries(coverage.mandatorySources || {})) if (!/complete|verified|qa-passed/.test(String(item.status || ''))) blockers.push(`${source}: coverage status is ${item.status || 'missing'}`);
}

if (errors.length) {
  console.error(`UNIFICATION CONTRACT FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Unification contract is internally consistent.');
if (blockers.length) {
  console.log(`Cut-over blockers (${blockers.length}):`);
  for (const blocker of [...new Set(blockers)]) console.log(`- ${blocker}`);
  if (cutoverMode) process.exit(2);
} else {
  console.log('Cut-over readiness: PASS');
}
