#!/usr/bin/env node
// Build a single self-contained, navigable HTML preview of the whole workbook.
// Reads the generated עמוד-N.html pages + styles, inlines CSS and KaTeX woff2
// fonts as data: URIs, and emits one file that needs no server and no external
// hosts (safe to publish as a Claude Artifact / open from disk).
//
// Usage: node scripts/build-preview-bundle.mjs [outFile]
// Default output: <scratchpad or ./>/linear-function-preview.html
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outArg = process.argv[2];
const OUT = outArg ? path.resolve(outArg) : path.join(ROOT, 'linear-function-preview.html');

const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

// --- inline KaTeX fonts (woff2 only) into katex.min.css ---
function inlineKatexFonts(css) {
  const fontsDir = path.join(ROOT, 'styles', 'fonts');
  // Rewrite each @font-face src to a single woff2 data: URI, dropping woff/ttf.
  return css.replace(/src:([^;]+);/g, (whole, srcBody) => {
    const m = srcBody.match(/url\(\s*fonts\/([A-Za-z0-9_\-]+\.woff2)\s*\)/);
    if (!m) return whole;
    const file = path.join(fontsDir, m[1]);
    if (!fs.existsSync(file)) return whole;
    const b64 = fs.readFileSync(file).toString('base64');
    return `src:url(data:font/woff2;base64,${b64}) format("woff2");`;
  });
}

const katexCss = inlineKatexFonts(read('styles/katex.min.css'));
const baseCss = read('styles/a4-base.css');
const layoutCss = read('styles/layout-contract.css');

// --- collect pages ---
const pageFiles = fs.readdirSync(ROOT)
  .filter((n) => /^עמוד-\d+\.html$/.test(n))
  .map((n) => ({ n, num: Number(n.match(/\d+/)[0]) }))
  .sort((a, b) => a.num - b.num);

if (!pageFiles.length) {
  console.error('No עמוד-N.html pages found. Run `npm run build` first.');
  process.exit(1);
}

const mainRe = /<main class="a4-page"[\s\S]*?<\/main>/;
const titleRe = /<title>([^<]*)<\/title>/;
const pages = [];
for (const { n, num } of pageFiles) {
  const html = read(n);
  const mm = html.match(mainRe);
  if (!mm) { console.error(`Page ${num}: no <main class="a4-page"> found`); process.exit(1); }
  const title = (html.match(titleRe)?.[1] || `עמוד ${num}`).trim();
  // Give each page a stable anchor id for navigation.
  const withId = mm[0].replace(/^<main class="a4-page"/, `<main id="page-${num}" class="a4-page"`);
  pages.push({ num, title, html: withId });
}

const total = pages.length;
const optionList = pages
  .map((p) => `<option value="${p.num}">${p.num} · ${escapeHtml(stripPrefix(p.title))}</option>`) // 1 · title
  .join('');

function stripPrefix(t) { return t.replace(/^עמוד\s*\d+\s*[—–-]\s*/, '').trim() || t; }
function escapeHtml(s) { return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

const chrome = `
<style>
:root{
  --pv-bg:#e9edf3; --pv-panel:#ffffff; --pv-ink:#1f2a44; --pv-muted:#5b6577;
  --pv-accent:#1f4e8c; --pv-border:#cdd6e4; --pv-shadow:0 2px 16px #15203022;
}
:root[data-theme="dark"], :root:not([data-theme="light"]) {}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --pv-bg:#0f1622; --pv-panel:#18212f; --pv-ink:#e7edf6; --pv-muted:#9aa7ba;
    --pv-accent:#7fb0ee; --pv-border:#2a3547; --pv-shadow:0 2px 18px #0007;
  }
}
:root[data-theme="dark"]{
  --pv-bg:#0f1622; --pv-panel:#18212f; --pv-ink:#e7edf6; --pv-muted:#9aa7ba;
  --pv-accent:#7fb0ee; --pv-border:#2a3547; --pv-shadow:0 2px 18px #0007;
}
body{ background:var(--pv-bg); margin:0; }
#pv-app{ direction:rtl; font-family:"Rubik",system-ui,-apple-system,"Segoe UI","Arial Hebrew",Arial,sans-serif; color:var(--pv-ink); }
#pv-bar{
  position:sticky; top:0; z-index:50; display:flex; flex-wrap:wrap; gap:10px; align-items:center;
  padding:10px 14px; background:var(--pv-panel); border-bottom:1px solid var(--pv-border);
  box-shadow:var(--pv-shadow); backdrop-filter:saturate(1.1);
}
#pv-bar .pv-title{ font-weight:700; font-size:15px; margin-inline-end:auto; }
#pv-bar .pv-title small{ color:var(--pv-muted); font-weight:500; }
#pv-bar button, #pv-bar select, #pv-bar input{
  font:inherit; color:var(--pv-ink); background:var(--pv-bg); border:1px solid var(--pv-border);
  border-radius:8px; padding:6px 10px; cursor:pointer;
}
#pv-bar button:hover{ border-color:var(--pv-accent); color:var(--pv-accent); }
#pv-bar select{ max-width:min(46vw,420px); }
#pv-bar input#pv-jump{ width:64px; text-align:center; }
#pv-bar .pv-count{ color:var(--pv-muted); font-variant-numeric:tabular-nums; min-width:96px; text-align:center; }
#pv-pages{ padding:22px 12px 60px; }
#pv-pages .a4-page{ box-shadow:var(--pv-shadow); }
#pv-toTop{ position:fixed; inset-inline-end:18px; bottom:18px; z-index:60; display:none; }
@media print{
  #pv-bar,#pv-toTop{ display:none !important; }
  #pv-pages{ padding:0; }
  body{ background:#fff; }
}
</style>
<div id="pv-app">
  <div id="pv-bar">
    <span class="pv-title">פונקציה קווית — חוברת עבודה <small>· תצוגה מקדימה חיה</small></span>
    <button id="pv-prev" title="עמוד קודם (→)">◀ הקודם</button>
    <span class="pv-count"><span id="pv-cur">1</span> / ${total}</span>
    <button id="pv-next" title="עמוד הבא (←)">הבא ▶</button>
    <input id="pv-jump" type="number" min="1" max="${total}" value="1" aria-label="דלגו לעמוד" />
    <select id="pv-select" aria-label="בחרו עמוד לפי נושא">${optionList}</select>
    <button id="pv-print" title="הדפסה / שמירה כ-PDF">הדפסה</button>
  </div>
  <div id="pv-pages">
${pages.map((p) => p.html).join('\n')}
  </div>
  <button id="pv-toTop" title="חזרה לראש">▲</button>
</div>
<script>
(function(){
  var pages = Array.prototype.slice.call(document.querySelectorAll('#pv-pages .a4-page'));
  var cur = document.getElementById('pv-cur');
  var jump = document.getElementById('pv-jump');
  var sel = document.getElementById('pv-select');
  var total = pages.length;
  var current = 1;
  function numOf(el){ return Number((el.id||'page-1').split('-')[1]); }
  function setCurrent(n){
    current = Math.min(total, Math.max(1, n));
    cur.textContent = current; jump.value = current; sel.value = current;
  }
  function go(n){
    n = Math.min(total, Math.max(1, n));
    var el = document.getElementById('page-'+n);
    if(el){ el.scrollIntoView({behavior:'smooth', block:'start'}); setCurrent(n); }
  }
  document.getElementById('pv-prev').onclick = function(){ go(current-1); };
  document.getElementById('pv-next').onclick = function(){ go(current+1); };
  document.getElementById('pv-print').onclick = function(){ window.print(); };
  jump.onchange = function(){ go(Number(jump.value)); };
  sel.onchange = function(){ go(Number(sel.value)); };
  document.addEventListener('keydown', function(e){
    if(e.target && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
    if(e.key==='ArrowLeft'||e.key==='PageDown'){ go(current+1); e.preventDefault(); }
    else if(e.key==='ArrowRight'||e.key==='PageUp'){ go(current-1); e.preventDefault(); }
  });
  var toTop = document.getElementById('pv-toTop');
  toTop.onclick = function(){ go(1); };
  // Track current page while scrolling.
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting) setCurrent(numOf(en.target)); });
      toTop.style.display = window.scrollY > 600 ? 'block' : 'none';
    }, { rootMargin:'-45% 0px -50% 0px', threshold:0 });
    pages.forEach(function(p){ io.observe(p); });
  }
  window.addEventListener('scroll', function(){ toTop.style.display = window.scrollY > 600 ? 'block' : 'none'; }, {passive:true});
})();
</script>`;

// Rubik (the booklet's own type system) is a Google Font — the one external
// host the Artifact CSP admits. Import it first so the preview matches print.
const fontImport = `<style>@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');</style>`;
const doc = `${fontImport}\n<style>\n${katexCss}\n</style>\n<style>\n${baseCss}\n</style>\n<style>\n${layoutCss}\n</style>\n${chrome}\n`;

fs.writeFileSync(OUT, doc, 'utf8');
const kb = (Buffer.byteLength(doc, 'utf8') / 1024).toFixed(0);
console.log(`Preview bundle: ${total} pages -> ${OUT} (${kb} KB)`);
