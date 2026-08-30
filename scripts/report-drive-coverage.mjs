import fs from 'node:fs';
import path from 'node:path';
import { pages } from '../content/book-pages.mjs';

const ROOT = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT,'data','google-drive-source-manifest.json'),'utf8'));
const byId = new Map((manifest.sources || []).map(source => [source.driveId, source]));
const usage = new Map();

const collectStrings = (value, out=[]) => {
  if (value == null) return out;
  if (typeof value === 'string') { out.push(value); return out; }
  if (Array.isArray(value)) { for (const item of value) collectStrings(item,out); return out; }
  if (typeof value === 'object') {
    for (const [key,item] of Object.entries(value)) if (key === 'sourceRef' || key === 'sourceRefs') collectStrings(item,out);
  }
  return out;
};

for (const page of pages) {
  for (const q of page.questions || []) {
    const refs = collectStrings(q,[]);
    for (const ref of refs) {
      for (const match of ref.matchAll(/drive:([A-Za-z0-9_-]{20,})/g)) {
        const driveId = match[1];
        if (!byId.has(driveId)) continue;
        if (!usage.has(driveId)) usage.set(driveId, {questionIds:new Set(), bookPages:new Set(), refs:new Set()});
        const item = usage.get(driveId);
        item.questionIds.add(q.id || `page-${page.page}`);
        item.bookPages.add(page.page);
        item.refs.add(ref);
      }
    }
  }
}

const sourceRows = (manifest.sources || []).map(source => {
  const item = usage.get(source.driveId);
  return {
    n: source.n,
    driveId: source.driveId,
    title: source.observedTitle || source.inventoryTitle,
    referencedInWorkbook: Boolean(item),
    canonicalQuestionCount: item?.questionIds.size || 0,
    bookPages: item ? [...item.bookPages].sort((a,b)=>a-b) : [],
    referenceExamples: item ? [...item.refs].slice(0,5) : []
  };
});

const referenced = sourceRows.filter(row => row.referencedInWorkbook);
const unreferenced = sourceRows.filter(row => !row.referencedInWorkbook);
const report = {
  generatedAt:new Date().toISOString(),
  authority:'SOURCE_OF_TRUTH.md',
  note:'A Drive file reference proves canonical use of that provider-owned file identity, but does not by itself prove every exercise/sub-question in that file has final disposition.',
  knownSourceCount:manifest.knownSourceCount,
  groundedSourceCount:manifest.groundedCount,
  referencedSourceCount:referenced.length,
  unreferencedSourceCount:unreferenced.length,
  referencedSources:referenced,
  unreferencedSources:unreferenced
};

fs.mkdirSync(path.join(ROOT,'meta'),{recursive:true});
fs.writeFileSync(path.join(ROOT,'meta','drive-coverage-latest.json'),JSON.stringify(report,null,2)+'\n');
console.log(`Drive coverage dashboard: ${referenced.length}/${manifest.knownSourceCount} grounded source files are explicitly referenced by canonical workbook questions; ${unreferenced.length} files have no canonical driveId reference yet.`);
