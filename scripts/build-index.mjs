// Generates the canonical workbook reader and PWA shell from source data.
// SOURCE_OF_TRUTH.md remains the only authority; all files emitted here are derived build output.
import { pages } from '../content/book-pages.mjs';
import { BOOK_CONFIG } from '../content/book-config.mjs';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const total = pages.length;
const esc = s => String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const byChapter = new Map();
for (const p of pages) {
  if (!byChapter.has(p.chapter)) byChapter.set(p.chapter, []);
  byChapter.get(p.chapter).push(p);
}

const chapterButtons = [`<button class="chapter-filter is-active" data-chapter="all" aria-pressed="true">כל הספר</button>`]
  .concat([...byChapter.keys()].map(ch => `<button class="chapter-filter" data-chapter="${ch}" aria-pressed="false">${esc(BOOK_CONFIG.chapters[ch] || `פרק ${ch}`)}</button>`))
  .join('');

const sections = [...byChapter.entries()].map(([chapter, ps]) => {
  const chapterName = BOOK_CONFIG.chapters[chapter] || `פרק ${chapter}`;
  const cards = ps.map(p => {
    const searchText = `${p.page} ${p.title || ''} ${chapterName}`;
    return `<a class="page-card" href="עמוד-${p.page}.html" data-page="${p.page}" data-chapter="${chapter}" data-search="${esc(searchText)}"><span class="page-number">${p.page}</span><span class="page-meta"><span class="page-title">${esc(p.title || `עמוד ${p.page}`)}</span><span class="page-sub">פרק ${chapter} · ${esc(chapterName)}</span></span></a>`;
  }).join('\n');
  return `<section class="chapter-section" data-chapter-section="${chapter}"><h2 class="chapter-title"><span class="chapter-number">${chapter}</span>${esc(chapterName)}</h2><div class="page-grid">${cards}</div></section>`;
}).join('\n');

const html = `<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#1d4ed8">
<meta name="description" content="ספר תרגול מקצועי ומדורג בפונקציה קווית">
<title>פונקציה קווית — ספר תרגול</title>
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="app-icon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="reader/reader.css">
</head>
<body>
<header class="reader-header"><div class="reader-top"><div class="brand"><h1>פונקציה קווית</h1><p>ספר תרגול מדורג · ${total} עמודים · ${byChapter.size} פרקים</p></div><div class="header-actions"><span id="networkBadge" class="status-badge">מחובר</span><a id="continueLink" class="action-link" hidden>המשך</a><button id="installButton" class="action-button" type="button" hidden>התקנה</button></div></div></header>
<section class="hero"><div class="hero-panel"><div class="hero-row"><div class="hero-copy"><h2>ספר פונקציה קווית</h2><p>מהיסודות ועד משימות מתקדמות, ברצף פדגוגי אחד. בחרו פרק או חפשו נושא.</p></div><div class="progress-box"><strong id="progressText">0 מתוך ${total} עמודים נפתחו · 0%</strong><progress id="progressBar" value="0" max="${Math.max(total,1)}" aria-label="התקדמות בקריאת הספר"></progress></div></div></div></section>
<section class="controls" aria-label="חיפוש וסינון"><div class="search-row"><div class="search-wrap"><input id="bookSearch" type="search" inputmode="search" autocomplete="off" placeholder="חיפוש לפי נושא, פרק או מספר עמוד" aria-label="חיפוש בספר"><button id="clearSearch" class="clear-button" type="button" aria-label="ניקוי חיפוש">×</button></div></div><nav class="chapter-filters" aria-label="פרקי הספר">${chapterButtons}</nav></section>
<main>${sections}<div id="emptyState" hidden>לא נמצאו עמודים התואמים לחיפוש.</div></main>
<footer><div>יניב רז - מדריך מחוזי חט"ב בעיר ירושלים</div><div>הדרכה במחוז ירושלים והעיר ירושלים - מנח"י, בהובלת איילת קריספין</div></footer>
<script src="reader/reader.js" defer></script>
</body>
</html>`;

const manifest = {
  name: 'פונקציה קווית — ספר תרגול',
  short_name: 'פונקציה קווית',
  lang: 'he',
  dir: 'rtl',
  start_url: './index.html',
  scope: './',
  display: 'standalone',
  background_color: '#f4f7fb',
  theme_color: '#1d4ed8',
  icons: [{src:'app-icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]
};

const cacheVersion = `linear-book-${total}-${pages.map(p=>p.page).join('-')}`;
const serviceWorker = `const CACHE=${JSON.stringify(cacheVersion)};\nconst CORE=['./','./index.html','./reader/reader.css','./reader/reader.js','./styles/a4-base.css','./styles/katex.min.css','./app-icon.svg','./manifest.webmanifest'];\nself.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\nself.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==location.origin)return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{if(r&&r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return r;}).catch(()=>caches.match('./index.html'))));});\n`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="96" fill="#1d4ed8"/><path d="M92 376h328M120 340L220 224l72 58 100-150" fill="none" stroke="#fff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/><circle cx="220" cy="224" r="16" fill="#fff"/><circle cx="292" cy="282" r="16" fill="#fff"/></svg>`;

fs.writeFileSync(path.join(ROOT,'index.html'), html);
fs.writeFileSync(path.join(ROOT,'manifest.webmanifest'), JSON.stringify(manifest,null,2));
fs.writeFileSync(path.join(ROOT,'sw.js'), serviceWorker);
fs.writeFileSync(path.join(ROOT,'app-icon.svg'), icon);
console.log(`Generated canonical reader: ${total} pages across ${byChapter.size} chapters + PWA shell.`);
