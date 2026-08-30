import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pages as bookPages } from '../content/book-pages.mjs';

const ROOT=process.cwd();
const scope=JSON.parse(fs.readFileSync(path.join(ROOT,'data','razpages-curriculum-scope.json'),'utf8'));
const disposition=JSON.parse(fs.readFileSync(path.join(ROOT,'data','razpages-question-disposition.json'),'utf8'));
const BASE=scope.sourceBaselineSha;
const allSourcePages=[...new Set(scope.families.flatMap(f=>f.pages))].sort((a,b)=>a-b);
const DIRECT=new Set([
  ...Array.from({length:22},(_,i)=>395+i),96,97,98,
  ...Array.from({length:54},(_,i)=>417+i),
  ...Array.from({length:16},(_,i)=>515+i)
]);
const localDirectRoot=path.join(ROOT,'sources','razpages-linear');
const STOPWORDS=new Set(['את','של','עם','על','אל','או','אם','אז','כי','כל','לכל','לפי','בין','מה','מהו','מהי','האם','איזה','איזו','איזהו','נתון','נתונה','נתונים','נתונות','לפניכם','לפניך','השלימו','מצאו','כתבו','קבעו','חשבו','הסבירו','סמנו','בחרו','הציגו','באמצעות','הבאים','הבאות','הבא','הבאה']);
const BOOK_TEXT_SKIP=new Set(['id','family','level','responseSpace','expectedAnswerShape','sourceRef','sourceRefs','adaptation','answerLabel','kinds','mathModel']);

function sha256(s){return crypto.createHash('sha256').update(s).digest('hex');}
function decodeEntities(s){return s.replaceAll('&nbsp;',' ').replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&quot;','"').replaceAll('&#39;',"'").replaceAll('&amp;','&');}
function stripHtml(html){
  return decodeEntities(String(html)
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
function extractSourceSubparts(html){
  const chunks=[];
  const patterns=[
    /<li\b[^>]*>([\s\S]*?)<\/li>/gi,
    /<(?:div|p)\b[^>]*class="[^"]*\b(?:sub|part|subquestion)\b[^"]*"[^>]*>([\s\S]*?)<\/(?:div|p)>/gi
  ];
  for(const re of patterns){let m; while((m=re.exec(html))){const t=stripHtml(m[1]); if(t.length>=2)chunks.push(t);}}
  return [...new Set(chunks)];
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
function collectBookText(value,key=''){
  if(value==null||BOOK_TEXT_SKIP.has(key))return [];
  if(typeof value==='string')return [value];
  if(Array.isArray(value))return value.flatMap(v=>collectBookText(v,key));
  if(typeof value==='object')return Object.entries(value).flatMap(([k,v])=>collectBookText(v,k));
  return [];
}
function normalizedTokens(text){
  return String(text).toLowerCase()
    .replace(/[\u0591-\u05c7]/g,'')
    .replace(/[`*_{}()[\],;:!?"'“”׳״=+<>|\\/]/g,' ')
    .replace(/[–—−]/g,'-')
    .split(/\s+/).map(t=>t.replace(/^[.\-]+|[.\-]+$/g,'')).filter(t=>t.length>=2&&!STOPWORDS.has(t)&&!/^-?\d+(?:\.\d+)?$/.test(t));
}
function numbers(text){return [...String(text).matchAll(/-?\d+(?:[.,]\d+)?(?:\/\d+)?/g)].map(m=>m[0].replace(',','.'));}
function mathAtoms(text){
  const s=String(text).replace(/[–—−]/g,'-');
  const atoms=[];
  for(const m of s.matchAll(/(?:[xy]|m|b)\s*(?:=|<|>|≤|≥)\s*-?(?:\d+(?:[.,]\d+)?(?:\/\d+)?)?(?:\s*[xy])?(?:\s*[+\-]\s*\d+(?:[.,]\d+)?(?:\/\d+)?)?/gi)) atoms.push(m[0].replace(/\s+/g,'').replace(',','.').toLowerCase());
  for(const m of s.matchAll(/\(-?\d+(?:[.,]\d+)?\s*,\s*-?\d+(?:[.,]\d+)?\)/g)) atoms.push(m[0].replace(/\s+/g,'').replaceAll(',','.'));
  return [...new Set(atoms)];
}
function uniqueCoverage(source,covered){
  const S=new Set(source),C=new Set(covered); if(!S.size)return 1;
  let inter=0; for(const x of S)if(C.has(x))inter++;
  return inter/S.size;
}
function jaccard(a,b){
  const A=new Set(a),B=new Set(b); if(!A.size||!B.size)return 0;
  let inter=0; for(const x of A)if(B.has(x))inter++;
  return inter/(A.size+B.size-inter);
}
function sourceRefsOfQuestion(q){
  const vals=[]; const visit=v=>{if(v==null)return;if(typeof v==='string')vals.push(v);else if(Array.isArray(v))v.forEach(visit);};
  visit(q.sourceRef);visit(q.sourceRefs);return vals;
}
const bookQuestions=bookPages.flatMap(p=>(p.questions||[]).map(q=>{
  const text=collectBookText(q).join(' ');
  return {bookPage:p.page,chapter:p.chapter,questionId:q.id,text,tokens:normalizedTokens(text),numbers:numbers(text),mathAtoms:mathAtoms(text),sourceRefs:sourceRefsOfQuestion(q)};
}));
function explicitBookQuestionsForPage(sourcePage){return bookQuestions.filter(b=>b.sourceRefs.some(r=>r.includes(`razpages:עמוד-${sourcePage}.html`)));}
function coverageMetrics(sourceText,bookText){
  const sTokens=normalizedTokens(sourceText),bTokens=normalizedTokens(bookText);
  const sNums=numbers(sourceText),bNums=numbers(bookText);
  const sMath=mathAtoms(sourceText),bMath=mathAtoms(bookText);
  return {
    sourceTokenCoverage:uniqueCoverage(sTokens,bTokens),
    bookTokenCoverage:uniqueCoverage(bTokens,sTokens),
    tokenJaccard:jaccard(sTokens,bTokens),
    sourceNumberCoverage:uniqueCoverage(sNums,bNums),
    sourceMathCoverage:uniqueCoverage(sMath,bMath),
    sourceTokenCount:new Set(sTokens).size,
    sourceNumberCount:new Set(sNums).size,
    sourceMathCount:new Set(sMath).size
  };
}
function subpartCoverage(subparts,bookText){
  if(!subparts.length)return {sourceSubpartCount:0,coveredSubpartCount:0,coverage:1,parts:[]};
  const parts=subparts.map((text,index)=>{
    const m=coverageMetrics(text,bookText);
    const covered=m.sourceTokenCoverage>=0.8 && (m.sourceNumberCount===0||m.sourceNumberCoverage>=0.8) && (m.sourceMathCount===0||m.sourceMathCoverage>=0.7);
    return {index:index+1,textPreview:text.slice(0,140),covered,sourceTokenCoverage:Number(m.sourceTokenCoverage.toFixed(3)),sourceNumberCoverage:Number(m.sourceNumberCoverage.toFixed(3)),sourceMathCoverage:Number(m.sourceMathCoverage.toFixed(3))};
  });
  const coveredSubpartCount=parts.filter(p=>p.covered).length;
  return {sourceSubpartCount:parts.length,coveredSubpartCount,coverage:coveredSubpartCount/parts.length,parts};
}
function candidateMatches(sourcePage,sourceText){
  return bookQuestions.map(b=>{
    const m=coverageMetrics(sourceText,b.text);
    const pageRef=b.sourceRefs.some(r=>r.includes(`razpages:עמוד-${sourcePage}.html`));
    const evidenceScore=0.55*m.sourceTokenCoverage+0.2*m.tokenJaccard+0.15*m.sourceNumberCoverage+0.1*m.sourceMathCoverage+(pageRef?0.08:0);
    return {
      bookPage:b.bookPage,chapter:b.chapter,questionId:b.questionId,
      score:Number(Math.min(1,evidenceScore).toFixed(3)),
      sourceTokenCoverage:Number(m.sourceTokenCoverage.toFixed(3)),
      bookTokenCoverage:Number(m.bookTokenCoverage.toFixed(3)),
      tokenJaccard:Number(m.tokenJaccard.toFixed(3)),
      sourceNumberCoverage:Number(m.sourceNumberCoverage.toFixed(3)),
      sourceMathCoverage:Number(m.sourceMathCoverage.toFixed(3)),
      explicitPageRef:pageRef
    };
  }).filter(c=>c.sourceTokenCoverage>=0.15||c.explicitPageRef).sort((a,b)=>b.sourceTokenCoverage-a.sourceTokenCoverage||b.sourceNumberCoverage-a.sourceNumberCoverage||Number(b.explicitPageRef)-Number(a.explicitPageRef)||b.score-a.score).slice(0,5);
}
function unionCoverage(sourcePage,sourceText,subparts){
  const members=explicitBookQuestionsForPage(sourcePage);
  if(!members.length)return null;
  const unionText=members.map(b=>b.text).join(' ');
  const m=coverageMetrics(sourceText,unionText);
  const sp=subpartCoverage(subparts,unionText);
  const high=m.sourceTokenCoverage>=0.85 && (m.sourceNumberCount===0||m.sourceNumberCoverage>=0.85) && (m.sourceMathCount===0||m.sourceMathCoverage>=0.75) && sp.coverage>=0.9;
  return {
    bookQuestions:members.map(b=>({bookPage:b.bookPage,chapter:b.chapter,questionId:b.questionId})),
    sourceTokenCoverage:Number(m.sourceTokenCoverage.toFixed(3)),
    sourceNumberCoverage:Number(m.sourceNumberCoverage.toFixed(3)),
    sourceMathCoverage:Number(m.sourceMathCoverage.toFixed(3)),
    subpartCoverage:Number(sp.coverage.toFixed(3)),
    sourceSubpartCount:sp.sourceSubpartCount,
    coveredSubpartCount:sp.coveredSubpartCount,
    candidateStatus:high?'review-high-union':'review-required'
  };
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
const records=[]; let totalQuestions=0; let fetchErrors=[]; let inventoryErrors=[]; let itemsWithCandidates=0; let individualHigh=0; let unionHigh=0; let partialSourceItems=0;
for(const n of allSourcePages){
  try{
    const {html,origin}=await readSourcePage(n);
    const qs=extractDivBlocks(html,'q');
    const expectedCount=Number(disposition.inventoryByPage?.[String(n)]||0);
    if(expectedCount!==qs.length) inventoryErrors.push({sourcePage:n,expectedCount,actualCount:qs.length});
    const chapter=(html.match(/class="chapter-name"[^>]*>([\s\S]*?)<\/span>/i)?.[1]||html.match(/class="page-subtitle"[^>]*>([\s\S]*?)<\/p>/i)?.[1]||'');
    const sourceItems=qs.map((q,i)=>{
      const text=stripHtml(q), subparts=extractSourceSubparts(q), candidates=candidateMatches(n,text), top=candidates[0]||null, group=unionCoverage(n,text,subparts);
      if(candidates.length)itemsWithCandidates++;
      const topHigh=Boolean(top&&top.sourceTokenCoverage>=0.85&&(numbers(text).length===0||top.sourceNumberCoverage>=0.85)&&(mathAtoms(text).length===0||top.sourceMathCoverage>=0.75)&&top.explicitPageRef);
      if(topHigh)individualHigh++;
      if(group?.candidateStatus==='review-high-union')unionHigh++;
      const bestCoverage=Math.max(top?.sourceTokenCoverage||0,group?.sourceTokenCoverage||0);
      if(bestCoverage>0&&bestCoverage<0.85)partialSourceItems++;
      const candidateStatus=topHigh?'review-high-individual':group?.candidateStatus==='review-high-union'?'review-high-union':'review-required';
      return {
        id:`razpages:${n}:q${i+1}`,index:i+1,textHash:sha256(text),textPreview:text.slice(0,220),
        sourceSubparts:subparts.map((s,idx)=>({index:idx+1,textHash:sha256(s),textPreview:s.slice(0,180)})),
        candidateMatches:candidates,unionCoverage:group,candidateStatus
      };
    });
    totalQuestions+=sourceItems.length;
    records.push({sourcePage:n,origin,chapter:stripHtml(chapter),questionCount:sourceItems.length,pageHash:sha256(html),bookReferenceCount:(bookRefs.get(n)||[]).length,bookReferences:bookRefs.get(n)||[],sourceItems});
    console.log(`RAZPAGE ${n}: q=${sourceItems.length} refs=${(bookRefs.get(n)||[]).length} origin=${origin}`);
  }catch(err){fetchErrors.push({sourcePage:n,error:String(err)}); console.error(`RAZPAGE ${n}: FETCH_ERROR ${err}`);}
}
const directRecords=records.filter(r=>DIRECT.has(r.sourcePage));
const extraRecords=records.filter(r=>!DIRECT.has(r.sourcePage));
const inventoryPageCount=Object.keys(disposition.inventoryByPage||{}).length;
const inventoryQuestionCount=Object.values(disposition.inventoryByPage||{}).reduce((s,n)=>s+Number(n||0),0);
if(disposition.sourceBaselineSha!==BASE) inventoryErrors.push({error:'disposition baseline SHA differs from curriculum audit baseline'});
if(inventoryPageCount!==141) inventoryErrors.push({error:`disposition inventory has ${inventoryPageCount} pages instead of 141`});
if(inventoryQuestionCount!==299) inventoryErrors.push({error:`disposition inventory totals ${inventoryQuestionCount} questions instead of 299`});
const report={
  generatedAt:new Date().toISOString(),authority:'SOURCE_OF_TRUTH.md',sourceRepository:'yanivmizrachiy/razpages',sourceBaselineSha:BASE,
  summary:{
    expectedPages:141,auditedPages:records.length,fetchErrors:fetchErrors.length,inventoryErrors:inventoryErrors.length,totalSourceQuestions:totalQuestions,
    directPages:directRecords.length,directQuestions:directRecords.reduce((s,r)=>s+r.questionCount,0),additionalPages:extraRecords.length,additionalQuestions:extraRecords.reduce((s,r)=>s+r.questionCount,0),
    pagesReferencedByBook:records.filter(r=>r.bookReferenceCount>0).length,pagesNotReferencedByBook:records.filter(r=>r.bookReferenceCount===0).length,
    itemsWithCandidateMatches:itemsWithCandidates,individualHighReviewItems:individualHigh,unionHighReviewItems:unionHigh,partialSourceItems
  },
  thresholds:{sourceTokenCoverage:0.85,sourceNumberCoverage:0.85,sourceMathCoverage:0.75,subpartCoverage:0.9},
  caveat:'Candidate matches are deterministic triage only. A high individual/union result never finalizes a source item. Final included/merged/verified_duplicate/out_of_scope disposition requires explicit evidence under SOURCE_OF_TRUTH.md.',
  fetchErrors,inventoryErrors,records
};
fs.mkdirSync(path.join(ROOT,'meta'),{recursive:true});
fs.writeFileSync(path.join(ROOT,'meta','razpages-source-audit-latest.json'),JSON.stringify(report,null,2)+'\n');
console.log(`RAZPAGES SOURCE AUDIT: ${records.length}/141 pages, ${totalQuestions} source questions; direct=${report.summary.directQuestions}, additional=${report.summary.additionalQuestions}; referenced pages=${report.summary.pagesReferencedByBook}; candidate-items=${itemsWithCandidates}; individual-high=${individualHigh}; union-high=${unionHigh}; partial=${partialSourceItems}; inventory-errors=${inventoryErrors.length}.`);
if(records.length!==141||fetchErrors.length||inventoryErrors.length||totalQuestions!==299) process.exit(1);
