import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const ROOT = process.cwd();
const manifestPath = path.join(ROOT, 'meta', 'pages.json');
const latestPath = path.join(ROOT, 'meta', 'visual-qa-latest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const outDir = path.join(ROOT, 'qa');
const shotsDir = path.join(outDir, 'screenshots');
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(shotsDir, { recursive: true });

const requestedConcurrency = Number.parseInt(process.env.QA_CONCURRENCY || '4', 10);
const concurrency = Math.max(1, Math.min(8, Number.isFinite(requestedConcurrency) ? requestedConcurrency : 4, manifest.pages.length));
const browser = await chromium.launch({ headless: true });
const results = new Array(manifest.pages.length);
let cursor = 0;

async function inspectWorkbookPage(item) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 1800 }, deviceScaleFactor: 1 });
  try {
    const filePath = path.join(ROOT, item.file);
    await page.goto(pathToFileURL(filePath).href, { waitUntil: 'load' });
    await page.emulateMedia({ media: 'print' });
    await page.evaluate(() => document.fonts?.ready);

    const metrics = await page.evaluate(() => {
      const mm = document.createElement('div');
      mm.style.cssText = 'position:absolute;visibility:hidden;width:210mm;height:297mm;';
      document.body.appendChild(mm);
      const a4 = mm.getBoundingClientRect();
      mm.remove();

      const sheet = document.querySelector('.a4-page');
      const footer = document.querySelector('.footer');
      const exercises = [...document.querySelectorAll('.exercise')];
      if (!sheet) return { fatal: 'missing .a4-page' };

      const sr = sheet.getBoundingClientRect();
      const fr = footer?.getBoundingClientRect() ?? null;
      const last = exercises.at(-1)?.getBoundingClientRect() ?? null;
      const testSelectors = ['.exercise', '.graph-card', '.graph', '.table', '.answer-box', '.mini-grid', '.mini-card'];
      const horizontalOverflow = [];
      const verticalOverflow = [];
      for (const selector of testSelectors) {
        for (const [index, el] of [...document.querySelectorAll(selector)].entries()) {
          const r = el.getBoundingClientRect();
          if (r.left < sr.left - 1 || r.right > sr.right + 1) horizontalOverflow.push({ selector, index, left: r.left - sr.left, right: r.right - sr.right });
          if (r.top < sr.top - 1 || r.bottom > sr.bottom + 1) verticalOverflow.push({ selector, index, top: r.top - sr.top, bottom: r.bottom - sr.bottom });
        }
      }

      const footerOverlap = fr ? exercises.some(el => el.getBoundingClientRect().bottom > fr.top - 4) : true;
      const gapToFooter = fr && last ? fr.top - last.bottom : null;
      const bodyStyle = getComputedStyle(document.body);
      const sheetStyle = getComputedStyle(sheet);
      const writableSelector = '.answer-number,.answer-short,.answer-medium,.answer-box,.ordered-pair-response,.coordinate-field,.choice-space,table,.graph';
      const answerBoxes = [...document.querySelectorAll('[data-response]')].map(el => ({
        response: el.getAttribute('data-response'),
        hasWritableArea: Boolean(el.querySelector(writableSelector))
      }));

      const graphScaleIssues = [];
      const graphScaleUnchecked = [];
      for (const [index, svg] of [...document.querySelectorAll('svg.graph[data-equal-unit-scale="true"]')].entries()) {
        const gridLines = [...svg.querySelectorAll('.grid line')];
        const xs = [...new Set(gridLines.filter(el => Math.abs(+el.getAttribute('x1') - +el.getAttribute('x2')) < 0.001).map(el => +el.getAttribute('x1')))].sort((a,b)=>a-b);
        const ys = [...new Set(gridLines.filter(el => Math.abs(+el.getAttribute('y1') - +el.getAttribute('y2')) < 0.001).map(el => +el.getAttribute('y1')))].sort((a,b)=>a-b);
        if (xs.length < 2 || ys.length < 2) {
          graphScaleUnchecked.push(index);
          continue;
        }
        const medianStep = values => {
          const diffs = values.slice(1).map((v,i)=>v-values[i]).filter(v=>v>0).sort((a,b)=>a-b);
          return diffs[Math.floor(diffs.length/2)] ?? null;
        };
        const xGridStep = medianStep(xs);
        const yGridStep = medianStep(ys);
        const xTick = Number(svg.dataset.xTick || 1);
        const yTick = Number(svg.dataset.yTick || 1);
        if (!xGridStep || !yGridStep || !xTick || !yTick) {
          graphScaleUnchecked.push(index);
          continue;
        }
        const xUnitStep = xGridStep / xTick;
        const yUnitStep = yGridStep / yTick;
        const ratio = xUnitStep / yUnitStep;
        if (Math.abs(ratio - 1) > 0.02) graphScaleIssues.push({ index, xGridStep, yGridStep, xTick, yTick, xUnitStep, yUnitStep, ratio });
      }

      return {
        targetWidthPx: a4.width,
        targetHeightPx: a4.height,
        sheetWidthPx: sr.width,
        sheetHeightPx: sr.height,
        heightOverflowPx: Math.max(0, sr.height - a4.height),
        widthDeltaPx: Math.abs(sr.width - a4.width),
        footerOverlap,
        gapToFooterPx: gapToFooter,
        horizontalOverflow,
        verticalOverflow,
        missingWritableAreas: answerBoxes.filter(x => !x.hasWritableArea),
        graphScaleIssues,
        graphScaleUnchecked,
        direction: bodyStyle.direction,
        fontFamily: bodyStyle.fontFamily,
        pageBreakAfter: sheetStyle.breakAfter || sheetStyle.pageBreakAfter,
        exerciseCount: exercises.length
      };
    });

    const errors = [];
    const warnings = [];
    if (metrics.fatal) errors.push(metrics.fatal);
    else {
      if (metrics.heightOverflowPx > 3) errors.push(`A4 height overflow ${metrics.heightOverflowPx.toFixed(1)}px`);
      if (metrics.widthDeltaPx > 3) errors.push(`A4 width mismatch ${metrics.widthDeltaPx.toFixed(1)}px`);
      if (metrics.footerOverlap) errors.push('exercise content overlaps footer');
      if (metrics.horizontalOverflow.length) errors.push(`${metrics.horizontalOverflow.length} element(s) overflow page width`);
      if (metrics.verticalOverflow.length) errors.push(`${metrics.verticalOverflow.length} element(s) overflow page height`);
      if (metrics.missingWritableAreas.length) errors.push(`${metrics.missingWritableAreas.length} response block(s) have no writable area`);
      if (metrics.graphScaleIssues.length) errors.push(`${metrics.graphScaleIssues.length} equal-scale graph(s) do not use equal physical x/y unit scale`);
      if (metrics.graphScaleUnchecked.length) warnings.push(`${metrics.graphScaleUnchecked.length} equal-scale graph(s) could not be measured automatically`);
      if (metrics.direction !== 'rtl') errors.push(`body direction is ${metrics.direction}, expected rtl`);
      if (metrics.gapToFooterPx !== null && metrics.gapToFooterPx > 190) warnings.push(`large unused vertical area before footer: ${metrics.gapToFooterPx.toFixed(1)}px`);
      if (metrics.gapToFooterPx !== null && metrics.gapToFooterPx < 12) warnings.push(`very tight space before footer: ${metrics.gapToFooterPx.toFixed(1)}px`);
    }

    await page.locator('.a4-page').screenshot({ path: path.join(shotsDir, `page-${item.page}.png`) });
    console.log(`Page ${item.page}: ${errors.length ? 'FAIL' : 'PASS'}${warnings.length ? `, ${warnings.length} warning(s)` : ''}`);
    return { page: item.page, file: item.file, errors, warnings, metrics };
  } catch (error) {
    console.error(`Page ${item.page}: FATAL ${error.message}`);
    return { page: item.page, file: item.file, errors: [`visual QA runtime failure: ${error.message}`], warnings: [], metrics: { fatal: error.message } };
  } finally {
    await page.close();
  }
}

async function worker(workerId) {
  while (true) {
    const index = cursor++;
    if (index >= manifest.pages.length) return;
    const item = manifest.pages[index];
    console.log(`Worker ${workerId}: checking page ${item.page}`);
    results[index] = await inspectWorkbookPage(item);
  }
}

console.log(`Visual QA: ${manifest.pages.length} pages with concurrency=${concurrency}`);
await Promise.all(Array.from({ length: concurrency }, (_, i) => worker(i + 1)));
await browser.close();

const hardErrors = results.reduce((sum, item) => sum + (item?.errors?.length || 0), 0);
const generatedAt = new Date().toISOString();
const report = { generatedAt, totalPages: manifest.generatedPages, concurrency, hardErrors, results };
fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));

const byPage = new Map(results.map(item => [item.page, item]));
let verifiedPages = 0;
for (const item of manifest.pages) {
  const visual = byPage.get(item.page);
  item.qa = visual && visual.errors.length === 0 ? 'verified' : 'visual-qa-failed';
  if (item.qa === 'verified') verifiedPages += 1;
}
manifest.verifiedPages = verifiedPages;
manifest.status = hardErrors === 0 && verifiedPages === manifest.generatedPages ? 'qa-passed' : 'qa-failed';
manifest.lastVisualQa = {
  generatedAt,
  pipelineOutcome: hardErrors === 0 ? 'success' : 'failed',
  verifiedPages,
  report: 'meta/visual-qa-latest.json'
};
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

const latest = {
  recordedAt: generatedAt,
  pipelineOutcome: hardErrors === 0 ? 'success' : 'failed',
  reportAvailable: true,
  verifiedPages,
  generatedPages: manifest.generatedPages,
  visualReport: report
};
fs.writeFileSync(latestPath, JSON.stringify(latest, null, 2) + '\n');

console.log(`Visual QA complete: ${manifest.generatedPages} pages, ${verifiedPages} verified, ${hardErrors} hard error(s), concurrency=${concurrency}. Evidence persisted to meta/visual-qa-latest.json.`);
if (hardErrors) process.exit(1);
