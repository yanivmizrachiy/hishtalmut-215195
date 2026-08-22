const chapterNames={
  0:'ידע מקדים — מערכת צירים וקריאת גרפים',
  1:'ייצוגים של פונקציה קווית',
  2:'זיהוי פונקציה קווית וקצב השתנות אחיד',
  3:'אפיון של ישר — עולה, יורד או קבוע',
  4:'משמעות השיפוע',
  5:'מציאת שיפוע',
  6:'מציאת שיפוע על ידי שתי נקודות',
  7:'הצורה y=mx+b ומשמעות הפרמטרים',
  8:'משוואה לא מסודרת',
  9:'נקודה על ישר וערכי פונקציה',
  10:'שרטוט ישר ופונקציה קווית',
  11:'מציאת משוואה של ישר',
  12:'משוואת ישר לפי שיפוע ונקודה',
  13:'משוואת ישר לפי שתי נקודות',
  14:'חיתוך ישר עם הצירים',
  15:'ישרים מקבילים לצירים',
  16:'ישרים מקבילים זה לזה',
  17:'חיתוך בין שני ישרים',
  18:'תחומי חיוביות ושליליות',
  19:'אי-שוויונות קוויים',
  20:'בעיות מילוליות ומודלים קוויים',
  21:'בעיות תנועה וגרפי מרחק-זמן',
  22:'שטחים במערכת הצירים',
  23:'גאומטריה אנליטית מתקדמת',
  24:'משימות אינטגרטיביות, חקר והערכה',
  25:'שאלות מיצ״ב — פונקציה קווית'
};

const el=id=>document.getElementById(id);
const state={pages:[],page:1,total:0,verified:0};
const frame=el('pageFrame');
const toc=el('toc');
const menuButton=el('menuButton');
const scrim=el('tocScrim');

function pageFromHash(){
  const match=location.hash.match(/(?:^#|&)page=(\d+)/);
  return match?Number(match[1]):null;
}

function pageEntry(n){return state.pages.find(p=>p.page===n);}

function setDrawer(open){
  toc.classList.toggle('open',open);
  menuButton.setAttribute('aria-expanded',String(open));
  scrim.hidden=!open;
}

function renderToc(){
  const grouped=new Map();
  for(const page of state.pages){
    if(!grouped.has(page.chapter)) grouped.set(page.chapter,[]);
    grouped.get(page.chapter).push(page);
  }
  const root=el('tocList');
  root.innerHTML='';
  for(const [chapter,pages] of [...grouped.entries()].sort((a,b)=>a[0]-b[0])){
    const details=document.createElement('details');
    details.className='chapter';
    details.dataset.chapter=chapter;
    const summary=document.createElement('summary');
    const title=document.createElement('span');
    title.textContent=`פרק ${chapter} · ${chapterNames[chapter]||`פרק ${chapter}`}`;
    const count=document.createElement('span');
    count.className='chapter-count';
    count.textContent=`${pages.length} דפים`;
    summary.append(title,count);
    const list=document.createElement('div');
    list.className='page-list';
    for(const page of pages.sort((a,b)=>a.page-b.page)){
      const button=document.createElement('button');
      button.type='button';
      button.className='toc-page';
      button.dataset.page=page.page;
      button.dataset.search=`${page.page} ${page.title||''} ${(page.families||[]).join(' ')} ${chapterNames[page.chapter]||''}`.toLowerCase();
      button.innerHTML=`<span class="n">${page.page}</span><span class="t">${page.title||`עמוד ${page.page}`}</span>`;
      button.addEventListener('click',()=>{setPage(page.page);setDrawer(false);});
      list.append(button);
    }
    details.append(summary,list);
    root.append(details);
  }
}

function filterToc(query){
  const q=query.trim().toLowerCase();
  for(const details of document.querySelectorAll('.chapter')){
    let visible=0;
    for(const button of details.querySelectorAll('.toc-page')){
      const show=!q||button.dataset.search.includes(q);
      button.hidden=!show;
      if(show) visible++;
    }
    details.classList.toggle('empty',visible===0);
    if(q&&visible) details.open=true;
  }
}

function updateActiveToc(){
  for(const button of document.querySelectorAll('.toc-page')){
    const active=Number(button.dataset.page)===state.page;
    button.classList.toggle('active',active);
    if(active){
      const details=button.closest('details');
      if(details) details.open=true;
      button.setAttribute('aria-current','page');
    }else button.removeAttribute('aria-current');
  }
}

function setPage(n,{replaceHash=false}={}){
  if(!state.total) return;
  const page=Math.max(1,Math.min(state.total,Number(n)||1));
  const entry=pageEntry(page);
  if(!entry) return;
  state.page=page;
  el('currentPageTitle').textContent=entry.title||`עמוד ${page}`;
  el('currentPageMeta').textContent=`פרק ${entry.chapter} · עמוד ${page} מתוך ${state.total}`;
  el('prevPage').disabled=page<=1;
  el('nextPage').disabled=page>=state.total;
  el('openPage').href=`עמוד-${page}.html`;
  el('progressFill').style.width=`${(page/state.total)*100}%`;
  updateActiveToc();
  el('loadingCard').hidden=false;
  frame.classList.remove('ready');
  frame.src=`עמוד-${page}.html`;
  const newHash=`#page=${page}`;
  if(location.hash!==newHash){
    if(replaceHash) history.replaceState(null,'',newHash); else history.pushState(null,'',newHash);
  }
  localStorage.setItem('linear-book-last-page',String(page));
}

function fitEmbeddedPage(){
  try{
    const doc=frame.contentDocument;
    const page=doc?.querySelector('.a4-page');
    if(!doc||!page) return;
    let style=doc.getElementById('digital-reader-cleanup');
    if(!style){
      style=doc.createElement('style');
      style.id='digital-reader-cleanup';
      style.textContent=`
        .preview-nav{display:none!important}
        html,body{margin:0!important;padding:0!important;background:transparent!important;overflow:hidden!important;min-width:0!important}
        body{display:flex!important;justify-content:center!important;align-items:flex-start!important}
        .a4-page{margin:0 auto!important;box-shadow:0 16px 45px rgba(25,47,69,.15)!important;transform-origin:top center!important}
      `;
      doc.head.append(style);
    }
    page.style.transform='none';
    const naturalWidth=page.getBoundingClientRect().width||794;
    const available=Math.max(280,frame.clientWidth-12);
    const scale=Math.min(1,available/naturalWidth);
    page.style.transform=`scale(${scale})`;
    const naturalHeight=Math.max(page.scrollHeight,page.getBoundingClientRect().height);
    frame.style.height=`${Math.ceil(naturalHeight*scale+26)}px`;
  }catch(error){
    frame.style.height='1180px';
  }
}

frame.addEventListener('load',()=>{
  requestAnimationFrame(()=>{
    fitEmbeddedPage();
    frame.classList.add('ready');
    el('loadingCard').hidden=true;
  });
});

window.addEventListener('resize',()=>{if(frame.classList.contains('ready')) fitEmbeddedPage();});
window.addEventListener('hashchange',()=>{const n=pageFromHash();if(n&&n!==state.page)setPage(n,{replaceHash:true});});

el('prevPage').addEventListener('click',()=>setPage(state.page-1));
el('nextPage').addEventListener('click',()=>setPage(state.page+1));
el('printPage').addEventListener('click',()=>{try{frame.contentWindow.focus();frame.contentWindow.print();}catch{window.open(`עמוד-${state.page}.html`,'_blank','noopener');}});
el('tocSearch').addEventListener('input',event=>filterToc(event.target.value));
menuButton.addEventListener('click',()=>setDrawer(!toc.classList.contains('open')));
el('closeToc').addEventListener('click',()=>setDrawer(false));
scrim.addEventListener('click',()=>setDrawer(false));

document.addEventListener('keydown',event=>{
  if(event.target.matches('input,textarea,select')) return;
  if(event.key==='ArrowLeft'||event.key==='PageDown'){event.preventDefault();setPage(state.page+1);}
  if(event.key==='ArrowRight'||event.key==='PageUp'){event.preventDefault();setPage(state.page-1);}
  if(event.key==='Home'){event.preventDefault();setPage(1);}
  if(event.key==='End'){event.preventDefault();setPage(state.total);}
});

async function init(){
  try{
    const response=await fetch('meta/pages.json',{cache:'no-store'});
    if(!response.ok) throw new Error(`manifest ${response.status}`);
    const manifest=await response.json();
    state.pages=(manifest.pages||[]).slice().sort((a,b)=>a.page-b.page);
    state.total=manifest.generatedPages||state.pages.length;
    state.verified=manifest.verifiedPages||0;
    renderToc();
    el('bookStatus').textContent=`${state.total} עמודים · ${state.verified} מאומתים`;
    const requested=pageFromHash();
    const remembered=Number(localStorage.getItem('linear-book-last-page'))||1;
    setPage(requested||remembered,{replaceHash:true});
  }catch(error){
    el('bookStatus').textContent='שגיאה בטעינת הספר';
    el('reader').innerHTML='<div class="error-box"><strong>לא ניתן לטעון כרגע את תוכן העניינים.</strong><br>נסו לרענן את הדף.</div>';
    console.error(error);
  }
}

init();
