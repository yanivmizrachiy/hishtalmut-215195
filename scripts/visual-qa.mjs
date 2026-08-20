import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const ROOT = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'meta', 'pages.json'), 'utf8'));
const outDir = path.join(ROOT, 'qa');
const shotsDir = path.join(outDir, 'screenshots');
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(shotsDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = [];
let hardErrors = 0;

for (const item of manifest.pages) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 1800 }, deviceScaleFactor: 1 });
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
    for (const selector of testSelectors) {
      for (const [index, el] of [...document.querySelectorAll(selector)].entries()) {
        const r = el.getBoundingClientRect();
        if (r.left < sr.left - 1 || r.right > sr.right + 1) horizontalOverflow.push({ selector, index, left: r.left - sr.left, right: r.right - sr.right });
      }
    }

    const footerOverlap = fr ? exercises.some(el => el.getBoundingClientRect().bottom > fr.top - 4) : true;
    const gapToFooter = fr && last ? fr.top - last.bottom : null;
    const bodyStyle = getComputedStyle(document.body);
    const sheetStyle = getComputedStyle(sheet);
    const answerBoxes = [...document.querySelectorAll('[data-response]')].map(el => ({
      response: el.getAttribute('data-response'),
      hasWritableArea: Boolean(el.querySelector('.answer-short,.answer-medium,.answer-box,.choice-space,table,.graph'))
    }));

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
      missingWritableAreas: answerBoxes.filter(x => !x.hasWritableArea),
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
    if (metrics.missingWritableAreas.length) errors.push(`${metrics.missingWritableAreas.length} response block(s) have no writable area`);
    if (metrics.direction !== 'rtl') errors.push(`body direction is ${metrics.direction}, expected rtl`);
    if (metrics.gapToFooterPx !== null && metrics.gapToFooterPx > 190) warnings.push(`large unused vertical area before footer: ${metrics.gapToFooterPx.toFixed(1)}px`);
    if (metrics.gapToFooterPx !== null && metrics.gapToFooterPx < 12) warnings.push(`very tight space before footer: ${metrics.gapToFooterPx.toFixed(1)}px`);
  }

  await page.locator('.a4-page').screenshot({ path: path.join(shotsDir, `page-${item.page}.png`) });
  results.push({ page: item.page, file: item.file, errors, warnings, metrics });
  hardErrors += errors.length;
  console.log(`Page ${item.page}: ${errors.length ? 'FAIL' : 'PASS'}${warnings.length ? `, ${warnings.length} warning(s)` : ''}`);
  await page.close();
}

await browser.close();
const report = { generatedAt: new Date().toISOString(), totalPages: manifest.generatedPages, hardErrors, results };
fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
console.log(`Visual QA complete: ${manifest.generatedPages} pages, ${hardErrors} hard error(s). Report: qa/report.json`);
if (hardErrors) process.exit(1);
