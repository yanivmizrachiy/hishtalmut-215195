// Browser-level regression for the permanent linear-function reader.
// Read-only test: loads local generated pages and never publishes or changes content.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const root=process.cwd();
const manifest=JSON.parse(await readFile(path.join(root,'meta/pages.json'),'utf8'));
assert.equal(manifest.generatedPages,78,'Expected full published book at 78 pages');
const entries=[...manifest.pages].sort((a,b)=>a.page-b.page);
assert.equal(entries.length,manifest.generatedPages,'Build manifest count');
assert.deepEqual(entries.map(x=>x.page),Array.from({length:entries.length},(_,i)=>i+1),'Page numbers must be continuous');
const base='https://yanivmizrachiy.github.io/hishtalmut-215195/';
const mime={'.html':'text/html; charset=utf-8','.json':'application/json; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.woff2':'font/woff2','.png':'image/png'};

const server=createServer(async (req,res)=>{
  const p=new URL(req.url,'http://localhost').pathname;
  if(p!=='/reader/'){res.writeHead(404).end('Not found');return}
  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
  res.end(await readFile(path.join(root,'reader/index.html')));
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const port=server.address().port;
const browser=await chromium.launch({headless:true});

async function testReader(label,viewport,isMobile){
  const context=await browser.newContext({viewport,isMobile,hasTouch:isMobile,deviceScaleFactor:isMobile?2:1,reducedMotion:'reduce'});
  await context.route(base+'**',async route=>{
    const url=new URL(route.request().url());
    const rel=decodeURIComponent(url.pathname).replace(/^\/hishtalmut-215195\//,'');
    const file=path.resolve(root,rel);
    if(!file.startsWith(root+path.sep)){await route.fulfill({status:403,body:'Forbidden'});return}
    try{
      if(!(await stat(file)).isFile())throw Error('not file');
      await route.fulfill({status:200,headers:{'Access-Control-Allow-Origin':'*'},contentType:mime[path.extname(file)]||'application/octet-stream',body:await readFile(file)});
    }catch{await route.fulfill({status:404,body:'Missing local generated file: '+rel,headers:{'Access-Control-Allow-Origin':'*'}})}
  });
  const page=await context.newPage();
  const failures=[];
  page.on('pageerror',e=>failures.push(String(e)));
  await page.goto('http://127.0.0.1:'+port+'/reader/',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(n=>document.querySelectorAll('.page-wrap').length===n,entries.length,{timeout:15000});
  assert.equal(await page.locator('.page-btn').count(),entries.length,label+': navigation count');
  assert.equal(await page.locator('.page-wrap iframe').count(),entries.length,label+': iframe count');
  assert.equal(await page.locator('#page-'+entries.length+' iframe').getAttribute('src'),base+'עמוד-'+entries.length+'.html',label+': last page URL');
  assert.match(await page.locator('#status').innerText(),new RegExp('^'+entries.length+' עמודים'),label+': visible page count');
  // Browser deep links and real click handlers (not just static manifest checks).
  await page.locator('#next').click();
  await page.waitForFunction(()=>location.hash==='#page=2',{timeout:15000});
  await page.locator('#prev').click();
  await page.waitForFunction(()=>location.hash==='#page=1',{timeout:15000});
  if(isMobile){
    await page.locator('#menu').click();
    assert.equal(await page.locator('#toc').evaluate(el=>el.classList.contains('open')),true,'Mobile drawer opened');
  }
  const last=page.locator('.page-btn[data-page="'+entries.length+'"]');
  await last.evaluate(el=>{el.closest('details').open=true;el.click()});
  await page.waitForFunction(n=>location.hash==='#page='+n,entries.length,{timeout:15000});
  assert.equal(await page.locator('#print').getAttribute('href'),base+'עמוד-'+entries.length+'.html',label+': print/deep link');
  assert.equal(await page.locator('#next').isDisabled(),true,label+': next disabled on final page');
  if(isMobile)assert.equal(await page.locator('#toc').evaluate(el=>el.classList.contains('open')),false,'Mobile drawer closes after selection');
  if(isMobile)await page.locator('#menu').click();
  await page.locator('#search').fill(String(entries.length));
  assert.equal(await last.isHidden(),false,label+': last page searchable');
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
  assert.ok(overflow<=2,label+': horizontal overflow '+overflow+'px at '+viewport.width+'px');
  await mkdir('qa/screenshots',{recursive:true});
  await page.screenshot({path:'qa/screenshots/reader-'+label+'.png'});
  assert.equal(failures.length,0,label+': JS runtime errors '+failures.join('; '));
  await context.close();
  console.log('Reader browser QA passed: '+label+', '+entries.length+' pages, search, clicks, deep-link, print URL, viewport.');
}
try{
  await testReader('desktop',{width:1365,height:850},false);
  await testReader('mobile',{width:390,height:844},true);
}finally{
  await browser.close();
  await new Promise(resolve=>server.close(resolve));
}
