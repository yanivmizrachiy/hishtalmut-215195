// Generates the workbook catalog (index.html) from the canonical page registry.
// SOURCE_OF_TRUTH.md remains the only source of truth; this is derived output.
// Kept in sync automatically: one card per real page, razpages design, no external assets.
import { pages } from '../content/book-pages.mjs';
import fs from 'node:fs';
import path from 'node:path';

const total = pages.length;
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function chapterLabel(chapter, ps) {
  for (const p of ps) {
    if (p.kicker) return p.kicker.replace(/^פרק\s*\d+\s*·\s*/, '').trim();
  }
  return `פרק ${chapter}`;
}

const byChapter = new Map();
for (const p of pages) {
  if (!byChapter.has(p.chapter)) byChapter.set(p.chapter, []);
  byChapter.get(p.chapter).push(p);
}

let sections = '';
for (const [chapter, ps] of byChapter) {
  const label = chapterLabel(chapter, ps);
  const cards = ps.map(p =>
    `<a class="card" href="עמוד-${p.page}.html"><span class="pageno">${p.page}</span><span class="title">${esc(p.title || ('עמוד ' + p.page))}</span></a>`
  ).join('\n');
  sections += `<section class="chapter"><h2><span class="cnum">${esc(chapter)}</span>${esc(label)}</h2><div class="grid">${cards}</div></section>\n`;
}

const html = `<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>פונקציה קווית — תוכן עניינים</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{--accent:#1d4ed8;--ink:#0b1220;--muted:#5b6472;--line:#dbe3ef;--bg:#f4f7fb;--card:#fff;}
*{box-sizing:border-box;}
body{margin:0;direction:rtl;background:var(--bg);color:var(--ink);font-family:"Rubik",system-ui,"Segoe UI",Arial,sans-serif;}
header{background:var(--accent);color:#fff;padding:26px 28px;position:sticky;top:0;z-index:5;box-shadow:0 2px 10px #0002;}
header h1{margin:0;font-size:23px;font-weight:600;}
header p{margin:5px 0 0;opacity:.92;font-size:14px;}
main{padding:20px 24px 40px;max-width:1180px;margin:0 auto;}
.chapter{margin:26px 0;}
.chapter h2{font-size:16px;color:var(--accent);border-bottom:2px solid var(--line);padding-bottom:7px;display:flex;align-items:center;gap:10px;font-weight:600;}
.cnum{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--accent);color:#fff;font-size:13px;font-weight:600;}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px;margin-top:14px;}
.card{display:flex;align-items:center;gap:12px;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:13px 15px;text-decoration:none;color:inherit;transition:transform .12s,box-shadow .12s,border-color .12s;}
.card:hover{transform:translateY(-2px);box-shadow:0 8px 20px #0000001a;border-color:var(--accent);}
.pageno{flex:0 0 auto;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;border:2px solid var(--accent);color:var(--accent);font-weight:700;font-size:14px;}
.title{font-weight:500;font-size:14px;line-height:1.35;}
footer{border-top:1px solid var(--line);margin-top:30px;padding:18px 24px;text-align:center;color:var(--muted);font-size:12px;line-height:1.6;}
</style>
</head>
<body>
<header>
  <h1>פונקציה קווית — ספר תרגול</h1>
  <p>${total} עמודי עבודה · לחצו על עמוד כדי לפתוח אותו</p>
</header>
<main>
${sections}</main>
<footer>
  <div>יניב רז - מדריך מחוזי חט"ב בעיר ירושלים</div>
  <div>הדרכה במחוז ירושלים והעיר ירושלים - מנח"י, בהובלת איילת קריספין</div>
</footer>
</body>
</html>
`;

fs.writeFileSync(path.join(process.cwd(), 'index.html'), html);
console.log(`Generated index.html catalog: ${total} pages across ${byChapter.size} chapters.`);
