const TZ='Asia/Jerusalem';
let meetings=[], materials=[], filter='all';

const $=s=>document.querySelector(s);
const url=f=>'assets/pdfs/'+encodeURIComponent(f);
const start=m=>new Date(`${m.date}T16:00:00+03:00`);
const end=m=>new Date(`${m.date}T18:30:00+03:00`);
const done=m=>new Date()>end(m);
const next=()=>meetings.find(m=>end(m)>=new Date())||null;

function clock(){
  const now=new Date();
  $('#todayText').textContent=new Intl.DateTimeFormat('he-IL',{timeZone:TZ,weekday:'long',day:'2-digit',month:'2-digit',year:'numeric'}).format(now);
  $('#clock').textContent=new Intl.DateTimeFormat('he-IL',{timeZone:TZ,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now);
}
function status(m,n){
  if(n&&m.id===n.id)return ['המפגש הבא','next'];
  return done(m)?['✓ התקיים','done']:['טרם התקיים','future'];
}
function renderNext(){
  const n=next(), box=$('#nextMeeting');
  if(!n){box.innerHTML='<h3>כל המפגשים התקיימו</h3><p>אין מפגש עתידי בלוח.</p>';return;}
  box.innerHTML=`<h3>מפגש ${n.id} — ${n.topic}</h3><div class="meta"><span>${n.heDate}</span><span>יום ${n.day}</span><span>${n.time}</span><span>מנחה: ${n.facilitator}</span></div>`;
}
function renderMeetings(){
  const n=next(), wrap=$('#meetings'); wrap.innerHTML='';
  meetings.forEach(m=>{
    const d=done(m);
    if(filter==='done'&&!d)return;
    if(filter==='future'&&d)return;
    const [txt,cls]=status(m,n);
    const card=document.createElement('article');
    card.className=`meeting ${d?'done':'future'} ${n&&m.id===n.id?'next':''}`;
    card.innerHTML=`<strong>מפגש ${m.id}</strong><h3>${m.topic}</h3><span class="status ${cls}">${txt}</span><div class="meta"><span>${m.heDate}</span><span>יום ${m.day}</span><span>${m.time}</span><span>מנחה: ${m.facilitator}</span></div>`;
    wrap.appendChild(card);
  });
}
function btns(m){
  if(!m.available)return `<div class="missing">הקובץ עדיין לא נמצא בתיקיית assets/pdfs בשם המדויק שלו</div>`;
  return `<a class="open" href="${url(m.file)}" target="_blank">פתח</a><a class="download" href="${url(m.file)}" download="${m.file}">להורדה</a><button class="print" data-print="${m.file}">להדפסה</button>`;
}
function renderMaterials(){
  $('#materialsGrid').innerHTML='';
  $('#viewerList').innerHTML='';
  materials.forEach((m,i)=>{
    const card=document.createElement('article');
    card.className='material';
    card.innerHTML=`<div class="material-body"><h3>${m.title}</h3><p>${m.topic}</p></div>${m.available?`<iframe title="${m.title}" src="${url(m.file)}#toolbar=1&navpanes=0"></iframe>`:''}<div class="material-actions">${btns(m)}</div>`;
    $('#materialsGrid').appendChild(card);
    const b=document.createElement('button');
    b.textContent=m.title;
    b.onclick=()=>selectMaterial(m,b);
    $('#viewerList').appendChild(b);
    if(i===0)setTimeout(()=>selectMaterial(m,b),0);
  });
}
function selectMaterial(m,b){
  document.querySelectorAll('.viewer-list button').forEach(x=>x.classList.toggle('active',x===b));
  $('#activeTitle').textContent=m.title;
  $('#activeButtons').innerHTML=btns(m);
  $('#pdfFrame').src=m.available?url(m.file)+'#toolbar=1&navpanes=0':'about:blank';
}
function printPdf(file){
  const w=window.open(url(file),'_blank','noopener');
  toast('פותח קובץ להדפסה');
  setTimeout(()=>{try{w&&w.print()}catch(e){}},900);
}
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}
document.addEventListener('click',e=>{
  const f=e.target.closest('[data-filter]');
  if(f){filter=f.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b===f));renderMeetings();}
  const p=e.target.closest('[data-print]');
  if(p)printPdf(p.dataset.print);
});
Promise.all([fetch('data/meetings.json'),fetch('data/materials.json')]).then(async r=>{
  meetings=await r[0].json(); materials=await r[1].json();
  clock(); setInterval(clock,1000); renderNext(); renderMeetings(); renderMaterials();
  setInterval(()=>{renderNext();renderMeetings()},60000);
});
