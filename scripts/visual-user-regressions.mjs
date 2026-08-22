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
  return {
    pairCount:pairs.length,
    visibleLevelCount:visibleLevels.length,
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
console.log('Page 1 user visual regression passed: ordered pairs remain indivisible LTR units and difficulty labels are hidden.');
