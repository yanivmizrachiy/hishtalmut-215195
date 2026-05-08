const TZ = 'Asia/Jerusalem';
let meetings = [];
let materials = [];

if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

const $ = s => document.querySelector(s);
const fileUrl = file => 'assets/pdfs/' + encodeURIComponent(file);
const pad2 = n => String(n).padStart(2,'0');

function israelNow(){
  return new Date(new Date().toLocaleString('en-US',{timeZone:TZ}));
}

function meetingEnd(m){
  return new Date(`${m.date}T18:30:00+03:00`);
}

function isDone(m){
  return israelNow() > meetingEnd(m);
}

function nextMeeting(){
  return meetings.find(m => meetingEnd(m) >= israelNow()) || null;
}

function updateClock(){
  const now = new Date();
  const ilNow = israelNow();

  let weekday = new Intl.DateTimeFormat('he-IL',{
    timeZone:TZ,
    weekday:'long'
  }).format(now);

  if(!weekday.startsWith('יום')){
    weekday = `יום ${weekday}`;
  }

  const dateText = `${pad2(ilNow.getDate())}/${pad2(ilNow.getMonth()+1)}/${ilNow.getFullYear()}`;
  const timeText = `${pad2(ilNow.getHours())}:${pad2(ilNow.getMinutes())}:${pad2(ilNow.getSeconds())}`;

  $('#todayText').textContent = `היום ${weekday}, ${dateText}`;
  $('#clock').textContent = timeText;
}


function setTextById(id, value){
  const el = document.getElementById(id);
  if(el && value) el.textContent = value;
}

async function loadSiteConfig(){
  try{
    const res = await fetch('data/site.json?v=' + Date.now());
    const cfg = await res.json();

    setTextById('siteTag', cfg.tag);
    setTextById('siteTitle', cfg.title);
    setTextById('siteNumber', cfg.trainingNumber);
    setTextById('mainPrintButton', cfg.mainButtonText);
    setTextById('scheduleTitle', cfg.scheduleTitle);
    setTextById('materialsTitle', cfg.materialsTitle);

    if(cfg.title){
      document.title = 'השתלמות — ' + cfg.title;
    }
  }catch(err){
    console.warn('site config not loaded', err);
  }
}

function renderMeetings(){
  const n = nextMeeting();
  const wrap = $('#meetings');
  wrap.innerHTML = '';

  meetings.forEach(m => {
    const done = isDone(m);
    const isNext = n && m.id === n.id;

    const card = document.createElement('article');
    card.className = `meeting meeting-line ${done ? 'done' : 'future'} ${isNext ? 'next' : ''}`;
    card.innerHTML = `
      <span class="meeting-line-number">מפגש ${m.id}</span>
      <span class="meeting-line-date">${m.heDate} · יום ${m.day}</span>
      <span class="meeting-line-status ${done ? 'done' : 'future'}">${done ? '✓ התקיים' : 'טרם התקיים'}</span>
    `;
    wrap.appendChild(card);
  });
}

async function renderAllPrintMaterials(){
  const container = $('#printMaterials');
  container.innerHTML = '';

  const available = materials.filter(m => m.available && m.file && m.file.toLowerCase().endsWith('.pdf'));

  for (const mat of available) {
    const item = document.createElement('article');
    item.className = 'print-item';
    item.innerHTML = `
      <div class="print-item-head">
        <h3>${mat.title}</h3>
        <button class="print-only" type="button" data-print="${mat.file}">הדפסה</button>
      </div>
      <div class="pdf-pages" data-file="${mat.file}"></div>
    `;
    container.appendChild(item);
    await renderPdfPages(mat.file, item.querySelector('.pdf-pages'));
  }
}

async function renderPdfPages(file, target){
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
  setTimeout(()=>{ try{ if(w) w.print(); }catch(e){} }, 900);
}

function toast(msg){
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2200);
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

  updateClock();
  setInterval(updateClock,1000);

  renderMeetings();
  await renderAllPrintMaterials();

  setInterval(renderMeetings,60000);
});
