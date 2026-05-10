const TZ = 'Asia/Jerusalem';
let meetings = [];
let materials = [];

if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

const $ = s => document.querySelector(s);
const fileUrl = file => 'assets/pdfs/' + encodeURIComponent(file);
const pad2 = n => String(n).padStart(2,'0');

function cleanMaterialTitle(value){
  return String(value || '')
    .replace(/\.pdf$/i, '')
    .replace(/\s*\(\d+\)\s*$/g, '')
    .replace(/\s*PDF\s*/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatMeetingTime(time){
  return `<span class="meeting-line-time" dir="ltr" style="direction:ltr;unicode-bidi:isolate;white-space:nowrap">${time || ''}</span>`;
}

function israelNow(){
  return new Date(new Date().toLocaleString('en-US',{timeZone:TZ}));
}

function meetingEnd(m){
  return new Date(`${m.date}T18:30:00+03:00`);
}

function isDone(m){
  return new Date() > meetingEnd(m);
}

function nextMeeting(){
  return meetings.find(m => meetingEnd(m) >= new Date()) || null;
}

function updateClock(){
  const todayText = $('#todayText');
  const clock = $('#clock');
  if(!todayText || !clock) return;

  const ilNow = israelNow();
  let weekday = new Intl.DateTimeFormat('he-IL',{timeZone:TZ, weekday:'long'}).format(new Date());
  if(!weekday.startsWith('יום')) weekday = `יום ${weekday}`;

  const dateText = `${pad2(ilNow.getDate())}/${pad2(ilNow.getMonth()+1)}/${ilNow.getFullYear()}`;
  const timeText = `${pad2(ilNow.getHours())}:${pad2(ilNow.getMinutes())}:${pad2(ilNow.getSeconds())}`;

  todayText.textContent = `היום ${weekday}, ${dateText}`;
  clock.textContent = timeText;
}

async function loadSiteConfig(){
  try{
    const res = await fetch('data/site.json?v=' + Date.now());
    const cfg = await res.json();
    const set = (id,val) => {
      const el = document.getElementById(id);
      if(el && val) el.textContent = val;
    };
    set('siteTag', cfg.tag);
    set('siteTitle', cfg.title);
    set('siteNumber', cfg.trainingNumber);
    if(cfg.title) document.title = 'השתלמות — ' + cfg.title;
  }catch(err){
    console.warn('site config not loaded', err);
  }
}

function renderMeetings(){
  const wrap = $('#meetings');
  if(!wrap) return;

  const next = nextMeeting();
  wrap.innerHTML = '';

  const doneMeetings = meetings.filter(m => isDone(m));
  const nextList = next ? [next] : [];
  const futureMeetings = meetings.filter(m => !isDone(m) && (!next || m.id !== next.id));

  const orderedMeetings = [...doneMeetings, ...nextList, ...futureMeetings];

  orderedMeetings.forEach(m => {
    const done = isDone(m);
    const isNext = next && m.id === next.id;
    const timeText = formatMeetingTime(m.time);

    const card = document.createElement('article');
    card.className = `meeting meeting-line ${done ? 'done' : 'future'} ${isNext ? 'next next-feature' : ''}`;

    if(isNext){
      card.innerHTML = `
        <span class="next-feature-title">המפגש הבא</span>
        <span class="meeting-line-number">מפגש ${m.id}</span>
        <span class="meeting-line-date">${m.heDate} · יום ${m.day} · ${timeText}</span>
      `;
    } else {
      card.innerHTML = `
        <span class="meeting-line-number">מפגש ${m.id}</span>
        <span class="meeting-line-date">${m.heDate} · יום ${m.day} · ${timeText}</span>
        <span class="meeting-line-status ${done ? 'done' : 'future'}">${done ? '✓ התקיים' : 'טרם התקיים'}</span>
      `;
    }

    if (Number(m.id) === 2) {
      const resources = document.createElement('div');
      resources.className = 'meeting-resource-buttons';
      resources.innerHTML = `
        <a class="meeting-resource-button summary-button" href="#bot-summary-meeting-2">סיכום הבוט</a>
      `;
      card.appendChild(resources);
    }

    wrap.appendChild(card);
  });
}

async function renderAllPrintMaterials(){
  const container = $('#printMaterials');
  if(!container) return;

  container.innerHTML = '';
  const available = materials.filter(m => m.available && m.file && m.file.toLowerCase().endsWith('.pdf'));

  for (const mat of available) {
    const item = document.createElement('article');
    item.className = 'print-item';
    item.innerHTML = `
      <div class="print-item-head">
        <h3>${cleanMaterialTitle(mat.title || mat.file)}</h3>
        <button class="print-only" type="button" data-print="${mat.file}">הדפסה</button>
      </div>
      <div class="pdf-pages" data-file="${mat.file}"></div>
    `;
    container.appendChild(item);
    await renderPdfPages(mat.file, item.querySelector('.pdf-pages'));
  }
}

async function renderPdfPages(file, target){
  if (!target) return;

  if (!window.pdfjsLib) {
    target.innerHTML = '<p class="pdf-message">לא ניתן להציג את הקובץ בדפדפן הזה.</p>';
    return;
  }

  try {
    const pdf = await pdfjsLib.getDocument(fileUrl(file)).promise;
    target.innerHTML = '';

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const wrapWidth = Math.min(target.clientWidth || window.innerWidth - 32, 980);
      const vp1 = page.getViewport({scale:1});
      const scale = Math.max(.65, Math.min(2.4, (wrapWidth - 16) / vp1.width));
      const viewport = page.getViewport({scale});

      const canvas = document.createElement('canvas');
      canvas.className = 'pdf-page-canvas';
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const pageWrap = document.createElement('div');
      pageWrap.className = 'pdf-page-wrap';
      pageWrap.appendChild(canvas);
      target.appendChild(pageWrap);

      await page.render({canvasContext: canvas.getContext('2d'), viewport}).promise;
    }
  } catch (err) {
    console.error(err);
    target.innerHTML = '<p class="pdf-message">לא הצלחתי להציג את הקובץ בתוך האתר.</p>';
  }
}

function printPdf(file){
  const w = window.open(fileUrl(file), '_blank', 'noopener');
  toast('פותח להדפסה');
  setTimeout(()=>{ try{ if(w) { w.focus(); w.print(); } }catch(e){} }, 120);
}

function toast(msg){
  const el = $('#toast');
  if(!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2200);
}

function enhancePageTransitions(){
  document.body.classList.add('page-ready');

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href') || '';
    if(href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

    link.addEventListener('click', ev => {
      if(ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey || link.target === '_blank') return;
      ev.preventDefault();
      document.body.classList.add('page-leaving');
      setTimeout(() => { window.location.href = href; }, 260);
    });
  });
}

document.addEventListener('click', e => {
  const p = e.target.closest('[data-print]');
  if (p) printPdf(p.dataset.print);
});

Promise.all([
  fetch('data/meetings.json'),
  fetch('data/materials.json')
]).then(async res => {
  await loadSiteConfig();
  meetings = await res[0].json();
  materials = await res[1].json();

  enhancePageTransitions();
  updateClock();
  setInterval(updateClock,1000);

  renderMeetings();
  await renderAllPrintMaterials();

  setInterval(renderMeetings,60000);
});
