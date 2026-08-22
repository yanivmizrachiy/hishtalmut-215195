import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const ROOT=process.cwd();
const file=path.join(ROOT,'עמוד-1.html');
if(!fs.existsSync(file)) throw new Error('עמוד-1.html missing');

const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1280,height:1800},deviceScaleFactor:1});
await page.goto(pathToFileURL(file).href,{waitUntil:'load'});
await page.emulateMedia({media:'print'});
await page.evaluate(()=>document.fonts?.ready);

const metrics=await page.evaluate(()=>{
  const pairs=[...document.querySelectorAll('.ordered-pair-answer')];
  const visibleLevels=[...document.querySelectorAll('.level')].filter(el=>{
    const s=getComputedStyle(el); const r=el.getBoundingClientRect();
    return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0;
  });
  const header=document.querySelector('.page-header');
  const title=header?.querySelector('h1');
  const pageNo=header?.querySelector('.page-no');
  const summary=document.querySelector('.completion-summary');
  const summaryBlanks=[...document.querySelectorAll('.completion-summary .summary-blank')];
  const hs=header?getComputedStyle(header):null;
  const ns=pageNo?getComputedStyle(pageNo):null;
  const ss=summary?getComputedStyle(summary):null;
  const hr=header?.getBoundingClientRect();
  const tr=title?.getBoundingClientRect();
  const nr=pageNo?.getBoundingClientRect();
  return {
    pairCount:pairs.length,
    visibleLevelCount:visibleLevels.length,
    header:{
      exists:Boolean(header),
      titleText:title?.textContent?.trim()||'',
      borderBottomWidth:hs?.borderBottomWidth||'',
      borderBottomStyle:hs?.borderBottomStyle||'',
      borderBottomColor:hs?.borderBottomColor||'',
      background:hs?.backgroundColor||'',
      titleRightOfNumber:Boolean(tr&&nr&&tr.left>nr.left),
      height:hr?.height||0
    },
    pageNumber:{
      exists:Boolean(pageNo),
      width:nr?.width||0,
      height:nr?.height||0,
      borderRadius:ns?.borderRadius||'',
      borderWidth:ns?.borderWidth||'',
      text:pageNo?.textContent?.trim()||''
    },
    summary:{
      exists:Boolean(summary),
      text:summary?.textContent?.replace(/\s+/g,' ').trim()||'',
      blankCount:summaryBlanks.length,
      background:ss?.backgroundColor||'',
      blanks:summaryBlanks.map(el=>({width:el.getBoundingClientRect().width,height:el.getBoundingClientRect().height}))
    },
    pairs:pairs.map((el,index)=>{
      const r=el.getBoundingClientRect();
      const slots=[...el.querySelectorAll('.answer-short')].map(s=>s.getBoundingClientRect());
      const children=[...el.children].map(c=>c.getBoundingClientRect());
      const verticalSpread=children.length?Math.max(...children.map(x=>x.bottom))-Math.min(...children.map(x=>x.top)):0;
      return {
        index,
        direction:getComputedStyle(el).direction,
        whiteSpace:getComputedStyle(el).whiteSpace,
        width:r.width,
        height:r.height,
        slotCount:slots.length,
        verticalSpread,
        childLefts:children.map(x=>x.left)
      };
    })
  };
});

const errors=[];
if(metrics.pairCount!==4) errors.push(`expected 4 ordered-pair answers, found ${metrics.pairCount}`);
if(metrics.visibleLevelCount!==0) errors.push(`${metrics.visibleLevelCount} visible difficulty labels remain`);
for(const p of metrics.pairs){
  if(p.direction!=='ltr') errors.push(`pair ${p.index+1} direction is ${p.direction}`);
  if(p.whiteSpace!=='nowrap') errors.push(`pair ${p.index+1} can wrap`);
  if(p.slotCount!==2) errors.push(`pair ${p.index+1} has ${p.slotCount} answer slots instead of 2`);
  if(p.verticalSpread>32) errors.push(`pair ${p.index+1} visually split across lines (${p.verticalSpread.toFixed(1)}px spread)`);
}

if(!metrics.header.exists) errors.push('RazPages header missing');
if(metrics.header.titleText!=='נקודות במערכת הצירים') errors.push(`unexpected page-1 title: ${metrics.header.titleText}`);
if(metrics.header.borderBottomStyle!=='solid') errors.push(`header bottom rule is ${metrics.header.borderBottomStyle}`);
if(parseFloat(metrics.header.borderBottomWidth)<1||parseFloat(metrics.header.borderBottomWidth)>2.5) errors.push(`header bottom rule width ${metrics.header.borderBottomWidth}`);
if(!metrics.header.titleRightOfNumber) errors.push('title/page-number placement does not match RTL RazPages header');
if(!metrics.pageNumber.exists) errors.push('page-number circle missing');
if(Math.abs(metrics.pageNumber.width-metrics.pageNumber.height)>2) errors.push('page-number frame is not circular/square');
if(parseFloat(metrics.pageNumber.borderRadius)<15) errors.push(`page-number border radius too small: ${metrics.pageNumber.borderRadius}`);
if(metrics.pageNumber.text!=='1') errors.push(`page-number text is ${metrics.pageNumber.text}`);
if(!metrics.summary.exists) errors.push('active completion summary missing');
if(!metrics.summary.text.includes('השלימו:')) errors.push('completion summary does not say השלימו');
if(metrics.summary.blankCount<1||metrics.summary.blankCount>2) errors.push(`completion summary has ${metrics.summary.blankCount} blanks`);
if(metrics.summary.blanks.some(b=>b.width<40)) errors.push('completion blank is visually too narrow to write in');

fs.mkdirSync(path.join(ROOT,'qa','screenshots'),{recursive:true});
await page.locator('.a4-page').screenshot({path:path.join(ROOT,'qa','screenshots','page-1-user-benchmark.png')});
await browser.close();

const report={generatedAt:new Date().toISOString(),errors,metrics};
fs.writeFileSync(path.join(ROOT,'qa','page-1-user-regression.json'),JSON.stringify(report,null,2));
if(errors.length){
  console.error(`PAGE 1 USER VISUAL REGRESSION FAILED (${errors.length})`);
  for(const e of errors) console.error(e);
  process.exit(1);
}
console.log('Page 1 user visual regression passed: RazPages header, active completion summary, ordered-pair LTR units and hidden difficulty labels are preserved.');
