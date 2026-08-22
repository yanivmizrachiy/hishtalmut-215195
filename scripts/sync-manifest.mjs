import fs from 'node:fs';
import path from 'node:path';
import { pages as corePages } from '../content/page-definitions.mjs';
import { pages as pages05to06 } from '../content/pages-05-06.mjs';
import { pages as pages07plus } from '../content/pages-07-10.mjs';

const ROOT=process.cwd();
const manifestPath=path.join(ROOT,'meta','pages.json');
const dataPages=[...corePages,...pages05to06,...pages07plus].sort((a,b)=>a.page-b.page);
const old=fs.existsSync(manifestPath)?JSON.parse(fs.readFileSync(manifestPath,'utf8')):{};
const oldByPage=new Map((old.pages||[]).map(item=>[item.page,item]));

const familyList=p=>[...new Set((p.questions||[])
  .flatMap(q=>String(q.family||'').split(','))
  .map(x=>x.trim()).filter(Boolean))];

const levelList=p=>(p.questions||[]).flatMap(q=>[
  q.level,
  ...(q.subparts||[]).map(sp=>sp.level).filter(Number.isFinite)
]).filter(Number.isFinite);

const entries=dataPages.map(p=>{
  const levels=levelList(p);
  const min=Math.min(...levels);
  const max=Math.max(...levels);
  const previous=oldByPage.get(p.page);
  const item={
    page:p.page,
    file:`עמוד-${p.page}.html`,
    chapter:p.chapter,
    title:p.title,
    families:familyList(p),
    levels:min===max?String(min):`${min}-${max}`,
    qa:previous?.qa==='verified'?'verified':'data-driven-pending-visual'
  };
  const source=p.source||(p.sourceRefs?.length?p.sourceRefs.join(' + '):null);
  if(source) item.source=source;
  return item;
});

const generatedPages=entries.length;
const verifiedPages=entries.filter(p=>p.qa==='verified').length;
const manifest={
  sourceOfTruth:'SOURCE_OF_TRUTH.md',
  generatedPages,
  verifiedPages,
  status:verifiedPages===generatedPages?'qa-passed':'qa-in-progress',
  orderingRule:'easiest-to-hardest',
  qaRule:'No page is considered verified until visual A4 QA, response-space QA, technology consistency QA and source-of-truth compliance pass.',
  pages:entries
};
if(old.lastVisualQa) manifest.lastVisualQa=old.lastVisualQa;
if(old.nextPlanned?.page>generatedPages) manifest.nextPlanned=old.nextPlanned;

fs.mkdirSync(path.dirname(manifestPath),{recursive:true});
fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n','utf8');
console.log(`Synced manifest from content data: ${generatedPages} pages, ${verifiedPages} previously verified.`);
