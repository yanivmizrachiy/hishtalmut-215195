import fs from 'node:fs';

const ledgerPath = 'data/jerusalem2-placement-ledger.json';
const inventoryPath = 'data/jerusalem2-source-task-inventory.json';
const dispositionPath = 'data/content-disposition-ledger.json';
const coveragePath = 'data/source-coverage.json';
const manifestPath = 'meta/pages.json';
const EXPECTED_SOURCE_BLOB = '243151ca41012872489f3cbaade311ef6a78a77a';
const EXPECTED_TASK_COUNT = 123;

const fail = (message) => {
  console.error(`Jerusalem2 placement QA FAIL: ${message}`);
  process.exitCode = 1;
};

for (const p of [ledgerPath, inventoryPath, dispositionPath, coveragePath, manifestPath]) {
  if (!fs.existsSync(p)) fail(`missing ${p}`);
}
if (process.exitCode) process.exit();

const ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));
const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
const disposition = JSON.parse(fs.readFileSync(dispositionPath, 'utf8'));
const coverage = JSON.parse(fs.readFileSync(coveragePath, 'utf8'));
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const verifiedPages = new Set((manifest.pages || []).filter((p) => p.qa === 'verified').map((p) => p.page));
const allowedStatuses = new Set([
  'existing-family-needs-exact-proof',
  'requires-placement-new-content',
  'not-linear-with-reason'
]);

if (ledger.sourcePages !== 99) fail(`expected sourcePages=99, got ${ledger.sourcePages}`);
if (ledger.sourceOfTruth !== 'SOURCE_OF_TRUTH.md') fail('ledger must point only to SOURCE_OF_TRUTH.md');
if (!Array.isArray(ledger.clusters) || ledger.clusters.length === 0) fail('clusters must be non-empty');

for (const [index, cluster] of (ledger.clusters || []).entries()) {
  const label = `cluster ${index + 1} (${cluster.sourcePages || 'unknown pages'})`;
  if (!cluster.sourcePages) fail(`${label}: missing sourcePages`);
  if (!cluster.topic) fail(`${label}: missing topic`);
  if (!allowedStatuses.has(cluster.status)) fail(`${label}: invalid status ${cluster.status}`);
  if (!Array.isArray(cluster.targetChapters) || cluster.targetChapters.length === 0) fail(`${label}: targetChapters missing`);
  if (!Array.isArray(cluster.candidateWorkbookPages)) fail(`${label}: candidateWorkbookPages must be an array`);
  if (!cluster.nextAction) fail(`${label}: nextAction missing`);
  for (const page of cluster.candidateWorkbookPages) {
    if (!verifiedPages.has(page)) fail(`${label}: candidate workbook page ${page} is not a currently verified page`);
  }
  if (cluster.status === 'not-linear-with-reason' && !cluster.reason) fail(`${label}: exclusion requires reason`);
}

if (!String(ledger.coverage?.sourceScan || '').startsWith('1-99 complete')) fail('source scan must explicitly record complete review of pages 1-99');
if (!Array.isArray(ledger.coverage?.relevantSourcePageRanges) || !ledger.coverage.relevantSourcePageRanges.includes('95-99')) fail('corrected relevant source page ranges are missing');
if (!String(ledger.coverage?.sourcePage72 || '').includes('no question cluster')) fail('page 72 transition must be explicitly documented');
if (ledger.coverage?.verifiedWorkbookPages !== manifest.generatedPages) fail(`verifiedWorkbookPages must track current workbook size ${manifest.generatedPages}`);

if (inventory.authority !== 'SOURCE_OF_TRUTH.md') fail('source-task inventory must point only to SOURCE_OF_TRUTH.md');
if (inventory.sourceBlobSha !== EXPECTED_SOURCE_BLOB) fail(`Jerusalem2 pinned source blob drifted: ${inventory.sourceBlobSha}`);
if (inventory.sourcePages !== 99) fail(`inventory sourcePages must be 99, got ${inventory.sourcePages}`);
if (inventory.itemUnit !== 'source-task') fail(`inventory itemUnit must be source-task, got ${inventory.itemUnit}`);
if (inventory.knownItemCount !== EXPECTED_TASK_COUNT) fail(`inventory knownItemCount must be ${EXPECTED_TASK_COUNT}, got ${inventory.knownItemCount}`);
if (!Array.isArray(inventory.sections) || inventory.sections.length !== 12) fail(`inventory must contain 12 audited sections, got ${inventory.sections?.length}`);
const sectionCount = (inventory.sections || []).reduce((sum, section) => sum + Number(section.count || 0), 0);
if (sectionCount !== EXPECTED_TASK_COUNT) fail(`Jerusalem2 section counts must sum to ${EXPECTED_TASK_COUNT}, got ${sectionCount}`);
const sectionIds = new Set();
for (const section of inventory.sections || []) {
  if (!section.id || sectionIds.has(section.id)) fail(`inventory section id missing/duplicate: ${section.id || 'missing'}`);
  sectionIds.add(section.id);
  if (!section.sourcePages || !section.identity || !section.scope) fail(`inventory section ${section.id || 'unknown'} missing sourcePages/identity/scope`);
  if (!Number.isInteger(section.count) || section.count < 1) fail(`inventory section ${section.id || 'unknown'} has invalid count ${section.count}`);
}

const summary = disposition.sources?.jerusalem2;
if (summary?.knownItemUnit !== 'source-task') fail('content disposition Jerusalem2 unit must be source-task');
if (summary?.knownItemCount !== EXPECTED_TASK_COUNT) fail(`content disposition Jerusalem2 count must be ${EXPECTED_TASK_COUNT}`);
if (summary?.finalizedCount !== 0 || summary?.needsReviewCount !== EXPECTED_TASK_COUNT) fail(`content disposition Jerusalem2 current counts must be 0/${EXPECTED_TASK_COUNT}`);
if (summary?.inventory !== inventoryPath) fail('content disposition Jerusalem2 must point to the audited source-task inventory');

const sourceCoverage = coverage.mandatorySources?.jerusalem2;
if (sourceCoverage?.knownSourceTaskCount !== EXPECTED_TASK_COUNT) fail(`source coverage Jerusalem2 count must be ${EXPECTED_TASK_COUNT}`);
if (sourceCoverage?.finalizedSourceTaskCount !== 0 || sourceCoverage?.needsReviewSourceTaskCount !== EXPECTED_TASK_COUNT) fail(`source coverage Jerusalem2 current counts must be 0/${EXPECTED_TASK_COUNT}`);
if (sourceCoverage?.sourceBlobSha !== EXPECTED_SOURCE_BLOB) fail('source coverage Jerusalem2 blob SHA must match inventory');
if (sourceCoverage?.sourceTaskInventory !== inventoryPath) fail('source coverage must point to the audited Jerusalem2 inventory');

if (ledger.coverage?.exactQuestionPlacement === 'complete') {
  const unresolved = ledger.clusters.filter((c) => c.status !== 'not-linear-with-reason' && c.status !== 'included' && c.status !== 'duplicate-verified');
  if (unresolved.length) fail('cannot claim exactQuestionPlacement complete while unresolved clusters remain');
}

if (!process.exitCode) {
  const unresolved = ledger.clusters.filter((c) => c.status !== 'not-linear-with-reason');
  console.log(`Jerusalem2 placement QA PASS: 99 source pages reviewed; ${EXPECTED_TASK_COUNT} source tasks inventoried across 12 sections; ${unresolved.length} clusters still require exact task-level proof/placement.`);
}
