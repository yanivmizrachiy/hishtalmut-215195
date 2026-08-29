import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pages as bookPages } from '../content/book-pages.mjs';

const ROOT=process.cwd();
const scope=JSON.parse(fs.readFileSync(path.join(ROOT,'data','razpages-curriculum-scope.json'),'utf8'));
const BASE=scope.sourceBaselineSha;
const allSourcePages=[...new Set(scope.families.flatMap(f=>f.pages))].sort((a,b)=>a-b);
const DIRECT=new Set([
  ...Array.from({length:22},(_,i)=>395+i),96,97,98,
  ...Array.from({length:54},(_,i)=>417+i),
  ...Array.from({length:16},(_,i)=>515+i)
]);
const localDirectRoot=path.join(ROOT,'sources','razpages-linear');

function sha256(s){return crypto.createHash('sha256').update(s).digest('hex');}
function decodeEntities(s){return s.replaceAll('&nbsp;',' ').replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&quot;','"').replaceAll('&#39;',"'").replaceAll('&amp;','&');}
function stripHtml(html){
  return decodeEntities(html
    .replace(/<script\b[\s\S]*?<\/script>/gi,' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi,' ')
    .replace(/<span[^>]*data-tex="([^"]+)"[^>]*><\/span>/gi,' $1 ')
    .replace(/<[^>]+>/g,' '))
    .replace(/\\\(|\\\)/g,' ')
    .replace(/\s+/g,' ').trim();
}
function extractDivBlocks(html,className='q'){
  const blocks=[];
  const startRe=new RegExp(`<div\\s+class="[^"]*\\b${className}\\b[^"]*"[^>]*>`,'gi');
  let m;
  while((m=startRe.exec(html))){
    const start=m.index; let pos=startRe.lastIndex; let depth=1;
    const tagRe=/<div\b[^>]*>|<\/div>/gi; tagRe.lastIndex=pos; let t;
    while(depth>0 && (t=tagRe.exec(html))){
      if(t[0].startsWith('</')) depth--; else depth++;
      pos=tagRe.lastIndex;
    }
    if(depth===0){blocks.push(html.slice(start,pos)); startRe.lastIndex=pos;} else break;
  }
  return blocks;
}
function pageRefsFromBook(){
  const map=new Map();
  const visit=(value,bookPage,qid)=>{
    if(value==null)return;
    if(typeof value==='string'){
      for(const m of value.matchAll(/razpages:עמוד-(\d+)\.html/g)){
        const n=Number(m[1]); if(!map.has(n))map.set(n,[]); map.get(n).push({bookPage,questionId:qid||null});
      }
    } else if(Array.isArray(value)) value.forEach(v=>visit(v,bookPage,qid));
    else if(typeof value==='object') for(const [k,v] of Object.entries(value)) if(k==='sourceRef'||k==='sourceRefs') visit(v,bookPage,qid);
  };
  for(const p of bookPages){visit(p.sourceRefs,p.page,null); for(const q of p.questions||[])visit(q,p.page,q.id);}
  return map;
}
async function fetchText(url){
  const controller=new AbortController(); const timer=setTimeout(()=>controller.abort(),20000);
  try{const r=await fetch(url,{signal:controller.signal,headers:{'user-agent':'linear-function-zero-loss-audit'}}); if(!r.ok)throw new Error(`${r.status} ${r.statusText}`); return await r.text();}
  finally{clearTimeout(timer);}
}
async function readSourcePage(n){
  if(DIRECT.has(n)){
    const candidates=[path.join(localDirectRoot,`עמוד-${n}.html`),path.join(localDirectRoot,'pages',`עמוד-${n}.html`)];
    for(const p of candidates) if(fs.existsSync(p)) return {html:fs.readFileSync(p,'utf8'),origin:'local-mirror'};
  }
  const url=`https://raw.githubusercontent.com/yanivmizrachiy/razpages/${BASE}/${encodeURIComponent(`עמוד-${n}.html`)}`;
  return {html:await fetchText(url),origin:'pinned-raw'};
}

const bookRefs=pageRefsFromBook();
const records=[]; let totalQuestions=0; let fetchErrors=[];
for(const n of allSourcePages){
  try{
    const {html,origin}=await readSourcePage(n);
    const qs=extractDivBlocks(html,'q');
    const chapter=(html.match(/class="chapter-name"[^>]*>([\s\S]*?)<\/span>/i)?.[1]||html.match(/class="page-subtitle"[^>]*>([\s\S]*?)<\/p>/i)?.[1]||'');
    const sourceItems=qs.map((q,i)=>{
      const text=stripHtml(q);
      return {id:`razpages:${n}:q${i+1}`,index:i+1,textHash:sha256(text),textPreview:text.slice(0,220)};
    });
    totalQuestions+=sourceItems.length;
    records.push({sourcePage:n,origin,chapter:stripHtml(chapter),questionCount:sourceItems.length,pageHash:sha256(html),bookReferenceCount:(bookRefs.get(n)||[]).length,bookReferences:bookRefs.get(n)||[],sourceItems});
    console.log(`RAZPAGE ${n}: q=${sourceItems.length} refs=${(bookRefs.get(n)||[]).length} origin=${origin}`);
  }catch(err){fetchErrors.push({sourcePage:n,error:String(err)}); console.error(`RAZPAGE ${n}: FETCH_ERROR ${err}`);}
}
const directRecords=records.filter(r=>DIRECT.has(r.sourcePage));
const extraRecords=records.filter(r=>!DIRECT.has(r.sourcePage));
const report={
  generatedAt:new Date().toISOString(),authority:'SOURCE_OF_TRUTH.md',sourceRepository:'yanivmizrachiy/razpages',sourceBaselineSha:BASE,
  summary:{expectedPages:141,auditedPages:records.length,fetchErrors:fetchErrors.length,totalSourceQuestions:totalQuestions,directPages:directRecords.length,directQuestions:directRecords.reduce((s,r)=>s+r.questionCount,0),additionalPages:extraRecords.length,additionalQuestions:extraRecords.reduce((s,r)=>s+r.questionCount,0),pagesReferencedByBook:records.filter(r=>r.bookReferenceCount>0).length,pagesNotReferencedByBook:records.filter(r=>r.bookReferenceCount===0).length},
  caveat:'A book sourceRef is evidence of use, not proof that every source question is semantically represented. Final included/merged/duplicate/out_of_scope disposition remains mandatory per SOURCE_OF_TRUTH.',
  fetchErrors,records
};
fs.mkdirSync(path.join(ROOT,'meta'),{recursive:true});
fs.writeFileSync(path.join(ROOT,'meta','razpages-source-audit-latest.json'),JSON.stringify(report,null,2)+'\n');
console.log(`RAZPAGES SOURCE AUDIT: ${records.length}/141 pages, ${totalQuestions} source questions; direct=${report.summary.directQuestions}, additional=${report.summary.additionalQuestions}; referenced pages=${report.summary.pagesReferencedByBook}.`);
if(records.length!==141||fetchErrors.length) process.exit(1);
