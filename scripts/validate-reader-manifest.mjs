import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Run after the workbook build, and again against the staged GitHub Pages output.
// The reader must never list fewer pages than the successfully published book.
const root = path.resolve(process.argv[2] || '.');
const manifestFile = path.join(root, 'meta', 'pages.json');
assert.ok(fs.existsSync(manifestFile), `Missing reader manifest: ${manifestFile}`);

const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
assert.ok(Array.isArray(manifest.pages), 'Manifest pages must be an array');
assert.equal(manifest.generatedPages, manifest.pages.length, 'Manifest page count is inconsistent');

const expected = manifest.pages.map(({ page, file }) => {
  assert.ok(Number.isInteger(page) && page > 0, `Invalid manifest page: ${page}`);
  assert.equal(file, `עמוד-${page}.html`, `Manifest filename mismatch for page ${page}`);
  return file;
}).sort();

const actual = fs.readdirSync(root)
  .filter(name => /^עמוד-[0-9]+[.]html$/.test(name))
  .sort();

assert.deepEqual(actual, expected, 'Published workbook HTML pages do not match reader navigation');
console.log(`Reader manifest matches all ${actual.length} pages in ${root}`);
