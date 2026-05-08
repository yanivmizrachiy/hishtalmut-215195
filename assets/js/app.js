const TZ = 'Asia/Jerusalem';
let meetings = [];
let materials = [];
let filter = 'all';
let pdfDoc = null;
let pageNum = 1;
let scale = 1.15;
let currentMaterial = null;
let rendering = false;
let pendingPage = null;

const $ = s => document.querySelector(s);

if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

function fileUrl(file){
  return 'assets/pdfs/' + encodeURIComponent(file);
}

function israelNow(){
  return new Date(new Date().toLocaleString('en-US',{timeZone:TZ}));
}

function meetingEnd(m){
  return new Date(`${m.date}T18:30:00`);
}

function isDone(m){
  return israelNow() > meetingEnd(m);
}

function nextMeeting(){
  return meetings.find(m => meetingEnd(m) >= israelNow()) || null;
}

function updateClock(){
  const now = new Date();
  $('#todayText').textContent = new Intl.DateTimeFormat('he-IL',{
    timeZone:TZ, weekday:'long', day:'2-digit', month:'2-digit', year:'numeric'
  }).format(now);
  $('#clock').textContent = new Intl.DateTimeFormat('he-IL',{
    timeZone:TZ, hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false
  }).format(now);
}

function statusFor(m,n){
  if(n && m.id === n.id) return ['המפגש הבא','next'];
  return isDone(m) ? ['✓ התקיים','done'] : ['טרם התקיים','future'];
}

function renderNext(){
  const n = nextMeeting();
  const box = $('#nextMeeting');
  if(!n){
    box.innerHTML = '<h3>כל המפגשים התקיימו</h3><p>אין מפגש עתידי בלוח ההשתלמות.</p>';
    return;
  }
  box.innerHTML = `
    <h3>מפגש ${n.id}</h3>
    <div class="meta">
      <span>תאריך: ${n.heDate}</span>
      <span>יום: ${n.day}</span>
      <span>שעות: ${n.time}</span>
    </div>
  `;
}

function renderMeetings(){
  const n = nextMeeting();
  const wrap = $('#meetings');
  wrap.innerHTML = '';

  meetings.forEach(m => {
    const done = isDone(m);
    if(filter === 'done' && !done) return;
    if(filter === 'future' && done) return;

    const [txt,cls] = statusFor(m,n);
    const card = document.createElement('article');
    card.className = `meeting ${done ? 'done' : 'future'} ${n && m.id === n.id ? 'next' : ''}`;
    card.innerHTML = `
      <h3>מפגש ${m.id}</h3>
      <span class="status ${cls}">${txt}</span>
      <div class="meta">
        <span>תאריך: ${m.heDate}</span>
        <span>יום: ${m.day}</span>
        <span>שעות: ${m.time}</span>
      </div>
    `;
    wrap.appendChild(card);
  });
}

function actions(mat){
  if(!mat.available){
    return `<div class="missing">הקובץ עדיין לא נמצא באתר בשם המדויק שלו.</div>`;
  }
  return `
    <button class="print subtle-print" type="button" data-print="${mat.file}">להדפסה</button>
  `;
}

function renderMaterials(){
  const grid = $('#materialsGrid');
  const list = $('#viewerList');
  grid.innerHTML = '';
  list.innerHTML = '';

  materials.forEach((m,i)=>{
    const card = document.createElement('article');
    card.className = 'material simple-material-card';
    card.tabIndex = 0;
    card.innerHTML = `
      <h3>${m.title}</h3>
      <div class="file-actions">${actions(m)}</div>
      <p class="tap-hint">לחץ על הכרטיס לצפייה ודפדוף באתר</p>
    `;
    grid.appendChild(card);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = m.title;
    btn.disabled = !m.available;
    btn.addEventListener('click',()=>selectMaterial(m,btn));
    list.appendChild(btn);

    card.addEventListener('click',(ev)=>{
      if(ev.target.closest('button,a')) return;
      if(m.available) selectMaterial(m,btn);
    });

    card.addEventListener('keydown',(ev)=>{
      if((ev.key === 'Enter' || ev.key === ' ') && m.available){
        ev.preventDefault();
        selectMaterial(m,btn);
      }
    });

    if(i === 0 && m.available){
      setTimeout(()=>selectMaterial(m,btn), 0);
    }
  });
}

async function selectMaterial(mat,btn){
  if(!mat || !mat.available) return;

  currentMaterial = mat;
  pageNum = 1;
  scale = 1.15;

  document.querySelectorAll('.viewer-list button').forEach(b=>b.classList.toggle('active',b===btn));
  $('#activeTitle').textContent = mat.title;
  $('#activeButtons').innerHTML = actions(mat);
  location.hash = 'viewer';

  await loadPdf(mat);
}

async function loadPdf(mat){
  const status = $('#pdfStatus');
  status.textContent = 'טוען PDF...';

  try{
    if(!window.pdfjsLib){
      status.textContent = 'טעינת PDF.js נכשלה. אפשר להשתמש בכפתור פתח.';
      return;
    }

    pdfDoc = await pdfjsLib.getDocument(fileUrl(mat.file)).promise;
    pageNum = 1;
    await fitWidth(false);
    status.textContent = `נטען בהצלחה: ${pdfDoc.numPages} עמודים`;
  }catch(err){
    console.error(err);
    status.textContent = 'לא הצלחתי להציג את הקובץ בתוך האתר. נסה פתח / להורדה / להדפסה.';
  }
}

async function renderPage(num){
  if(!pdfDoc) return;

  if(rendering){
    pendingPage = num;
    return;
  }

  rendering = true;
  $('#pdfStatus').textContent = 'מציג עמוד...';

  const page = await pdfDoc.getPage(num);
  const canvas = $('#pdfCanvas');
  const ctx = canvas.getContext('2d');
  const viewport = page.getViewport({scale});

  canvas.height = viewport.height;
  canvas.width = viewport.width;

  await page.render({canvasContext:ctx, viewport}).promise;

  rendering = false;
  $('#pageInfo').textContent = `עמוד ${pageNum} מתוך ${pdfDoc.numPages}`;
  $('#pdfStatus').textContent = currentMaterial ? currentMaterial.title : '';

  if(pendingPage !== null){
    const p = pendingPage;
    pendingPage = null;
    renderPage(p);
  }
}

function nextPage(){
  if(!pdfDoc || pageNum >= pdfDoc.numPages) return;
  pageNum++;
  renderPage(pageNum);
}

function prevPage(){
  if(!pdfDoc || pageNum <= 1) return;
  pageNum--;
  renderPage(pageNum);
}

function zoomIn(){
  if(!pdfDoc) return;
  scale = Math.min(scale + .2, 3);
  renderPage(pageNum);
}

function zoomOut(){
  if(!pdfDoc) return;
  scale = Math.max(scale - .2, .55);
  renderPage(pageNum);
}

async function fitWidth(render=true){
  if(!pdfDoc) return;
  const wrap = document.querySelector('.canvas-wrap');
  const page = await pdfDoc.getPage(pageNum);
  const viewport = page.getViewport({scale:1});
  scale = Math.max(.55, Math.min(3, (wrap.clientWidth - 28) / viewport.width));
  if(render) renderPage(pageNum);
  else await renderPage(pageNum);
}

function printPdf(file){
  const w = window.open(fileUrl(file), '_blank', 'noopener');
  toast('פותח קובץ להדפסה');
  setTimeout(()=>{ try{ if(w) w.print(); }catch(e){} }, 900);
}

function toast(msg){
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2200);
}

document.addEventListener('click',e=>{
  const f = e.target.closest('[data-filter]');
  if(f){
    filter = f.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b===f));
    renderMeetings();
  }

  const p = e.target.closest('[data-print]');
  if(p) printPdf(p.dataset.print);

  const v = e.target.closest('[data-view]');
  if(v){
    const mat = materials.find(x=>x.id === v.dataset.view);
    const btn = [...document.querySelectorAll('.viewer-list button')].find(b=>b.textContent === mat.title);
    selectMaterial(mat,btn);
  }
});

window.addEventListener('resize',()=>{ if(pdfDoc) fitWidth(); });

Promise.all([
  fetch('data/meetings.json'),
  fetch('data/materials.json')
]).then(async res=>{
  meetings = await res[0].json();
  materials = await res[1].json();

  updateClock();
  setInterval(updateClock,1000);

  renderNext();
  renderMeetings();
  renderMaterials();

  $('#nextPage').addEventListener('click',nextPage);
  $('#prevPage').addEventListener('click',prevPage);
  $('#zoomIn').addEventListener('click',zoomIn);
  $('#zoomOut').addEventListener('click',zoomOut);
  $('#fitWidth').addEventListener('click',()=>fitWidth());

  setInterval(()=>{renderNext();renderMeetings();},60000);
}).catch(err=>{
  console.error(err);
  document.body.insertAdjacentHTML('afterbegin','<div class="missing">שגיאה בטעינת נתוני האתר.</div>');
});
