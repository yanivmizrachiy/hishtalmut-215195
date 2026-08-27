import fs from 'node:fs';

const ledgerPath = 'data/jerusalem2-placement-ledger.json';
const manifestPath = 'meta/pages.json';

const fail = (message) => {
  console.error(`Jerusalem2 placement QA FAIL: ${message}`);
  process.exitCode = 1;
};

if (!fs.existsSync(ledgerPath)) fail(`missing ${ledgerPath}`);
if (!fs.existsSync(manifestPath)) fail(`missing ${manifestPath}`);
if (process.exitCode) process.exit();

const ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));
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

if (ledger.coverage?.sourceScan !== '1-99 complete') fail('source scan must explicitly record 1-99 complete');
if (ledger.coverage?.exactQuestionPlacement === 'complete') {
  const unresolved = ledger.clusters.filter((c) => c.status !== 'not-linear-with-reason' && c.status !== 'included' && c.status !== 'duplicate-verified');
  if (unresolved.length) fail('cannot claim exactQuestionPlacement complete while unresolved clusters remain');
}

if (!process.exitCode) {
  const unresolved = ledger.clusters.filter((c) => c.status !== 'not-linear-with-reason');
  console.log(`Jerusalem2 placement QA PASS: ${ledger.clusters.length} clusters tracked; ${unresolved.length} still require exact question-level proof/placement.`);
}
