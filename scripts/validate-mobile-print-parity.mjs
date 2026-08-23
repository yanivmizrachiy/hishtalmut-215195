import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const ROOT=process.cwd();
const manifest=JSON.parse(fs.readFileSync(path.join(ROOT,'meta','pages.json'),'utf8'));
const browser=await chromium.launch({headless:true});
const tolerance=0.75;
const failures=[];
const concurrency=Math.max(1,Math.min(6,Number.parseInt(process.env.QA_CONCURRENCY||'4',10)||4,manifest.pages.length));
let cursor=0;

const watchedSelectors=['h1','.rule-card','.exercise-head','.exercise-title','.sub','.table','.graph','.mini-grid','.mini-card','.answer-box','.answer-short','.answer-medium'];
const textSelectors=['h1','.rule-card','.exercise-title','.sub'];

async function settle(page){
  await page.evaluate(async()=>{
    if(document.fonts?.ready) await document.fonts.ready;
    await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
  });
}

async function collect(page,media){
  await page.emulateMedia({media});
  await settle(page);
  return page.evaluate(({watchedSelectors,textSelectors})=>{
    const sheet=document.querySelector('.a4-page');
    if(!sheet) return {fatal:'missing .a4-page'};
    const sr=sheet.getBoundingClientRect();
    const rel=r=>({x:r.left-sr.left,y:r.top-sr.top,w:r.width,h:r.height});
    const rects={};
    for(const selector of watchedSelectors){
      rects[selector]=[...sheet.querySelectorAll(selector)].map(el=>rel(el.getBoundingClientRect()));
    }
    const lines={};
    for(const selector of textSelectors){
      lines[selector]=[...sheet.querySelectorAll(selector)].map(el=>{
        const range=document.createRange();
        range.selectNodeContents(el);
        return [...range.getClientRects()].filter(r=>r.width>0&&r.height>0).map(rel);
      });
    }
    const cs=getComputedStyle(sheet);
    const body=getComputedStyle(document.body);
    return {
      sheet:{w:sr.width,h:sr.height},
      style:{paddingTop:cs.paddingTop,paddingRight:cs.paddingRight,paddingBottom:cs.paddingBottom,paddingLeft:cs.paddingLeft,fontSize:body.fontSize,lineHeight:body.lineHeight},
      rects,lines
    };
  },{watchedSelectors,textSelectors});
}

function near(a,b){return Math.abs(a-b)<=tolerance;}
function compareRect(a,b,label,out){
  for(const k of ['x','y','w','h']) if(!near(a[k],b[k])) out.push(`${label} ${k}: screen=${a[k].toFixed(2)} print=${b[k].toFixed(2)}`);
}

function compareSnapshots(screen,print,pageNo){
  const out=[];
  if(screen.fatal||print.fatal){out.push(screen.fatal||print.fatal);return out;}
  if(!near(screen.sheet.w,print.sheet.w)||!near(screen.sheet.h,print.sheet.h)) out.push(`sheet geometry differs: screen ${screen.sheet.w.toFixed(2)}x${screen.sheet.h.toFixed(2)}, print ${print.sheet.w.toFixed(2)}x${print.sheet.h.toFixed(2)}`);
  for(const [k,v] of Object.entries(screen.style)) if(v!==print.style[k]) out.push(`computed ${k} differs: screen=${v}, print=${print.style[k]}`);
  for(const selector of watchedSelectors){
    const a=screen.rects[selector]||[],b=print.rects[selector]||[];
    if(a.length!==b.length){out.push(`${selector} count differs ${a.length}/${b.length}`);continue;}
    a.forEach((r,i)=>compareRect(r,b[i],`${selector}[${i}]`,out));
  }
  for(const selector of textSelectors){
    const a=screen.lines[selector]||[],b=print.lines[selector]||[];
    if(a.length!==b.length){out.push(`${selector} text-block count differs`);continue;}
    for(let i=0;i<a.length;i++){
      if(a[i].length!==b[i].length){out.push(`${selector}[${i}] line-fragment count differs ${a[i].length}/${b[i].length}`);continue;}
      a[i].forEach((r,j)=>compareRect(r,b[i][j],`${selector}[${i}] line[${j}]`,out));
    }
  }
  return out.map(x=>`Page ${pageNo}: ${x}`);
}

async function inspect(item){
  const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});
  try{
    await page.goto(pathToFileURL(path.join(ROOT,item.file)).href,{waitUntil:'load'});
    const screen=await collect(page,'screen');
    const print=await collect(page,'print');
    const problems=compareSnapshots(screen,print,item.page);
    if(problems.length) console.error(`Page ${item.page}: MOBILE/PRINT PARITY FAIL (${problems.length})`);
    else console.log(`Page ${item.page}: mobile/print layout identical`);
    return problems;
  }catch(error){return [`Page ${item.page}: parity runtime failure: ${error.message}`];}
  finally{await page.close();}
}

async function worker(){
  while(true){
    const i=cursor++;
    if(i>=manifest.pages.length)return;
    failures.push(...await inspect(manifest.pages[i]));
  }
}

console.log(`Mobile/print parity QA: ${manifest.pages.length} pages, viewport 390x844, concurrency=${concurrency}`);
await Promise.all(Array.from({length:concurrency},worker));
await browser.close();

if(failures.length){
  console.error(`MOBILE/PRINT PARITY QA FAILED (${failures.length} differences)`);
  console.error(failures.slice(0,200).join('\n'));
  if(failures.length>200) console.error(`... ${failures.length-200} more differences omitted`);
  process.exit(1);
}
console.log(`Mobile/print parity QA passed: ${manifest.pages.length}/${manifest.pages.length} pages preserve identical A4 geometry and text line fragments.`);
