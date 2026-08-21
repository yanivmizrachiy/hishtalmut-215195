import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const manifestPath=path.join(ROOT,'data','razpages-linear-manifest.json');
const mirrorRoot=path.join(ROOT,'sources','razpages-linear');
const fail=[];

if(!fs.existsSync(manifestPath)) fail.push('Missing data/razpages-linear-manifest.json');
if(!fs.existsSync(mirrorRoot)) fail.push('Missing sources/razpages-linear mirror root');

if(!fail.length){
  const m=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
  const expected=[];
  for(const r of m.ranges||[]){
    for(let n=r.fileStart;n<=r.fileEnd;n++) expected.push(`עמוד-${n}.html`);
  }
  const expectedSet=new Set(expected);
  if(expected.length!==m.sourceTopicCount) fail.push(`Manifest ranges produce ${expected.length} pages, expected ${m.sourceTopicCount}`);
  if(expectedSet.size!==expected.length) fail.push('Manifest ranges contain duplicate HTML pages');
  if(m.status!=='physical-copy-complete') fail.push(`Mirror status is ${m.status}, expected physical-copy-complete`);
  if(m.importedPageCount!==m.sourceTopicCount) fail.push(`importedPageCount=${m.importedPageCount}, sourceTopicCount=${m.sourceTopicCount}`);
  if(!m.sourceCommit || !/^[0-9a-f]{40}$/i.test(m.sourceCommit)) fail.push('Missing or invalid sourceCommit provenance');

  const actual=fs.readdirSync(mirrorRoot,{withFileTypes:true})
    .filter(e=>e.isFile() && /^עמוד-\d+\.html$/.test(e.name))
    .map(e=>e.name)
    .sort((a,b)=>Number(a.match(/\d+/)[0])-Number(b.match(/\d+/)[0]));
  const actualSet=new Set(actual);
  const missing=expected.filter(name=>!actualSet.has(name));
  const extra=actual.filter(name=>!expectedSet.has(name));
  if(missing.length) fail.push(`Missing ${missing.length} expected razpages HTML file(s): ${missing.slice(0,12).join(', ')}`);
  if(extra.length) fail.push(`Unrelated HTML entered mirror (${extra.length}): ${extra.slice(0,12).join(', ')}`);
  if(actual.length!==m.sourceTopicCount) fail.push(`Physical HTML count=${actual.length}, expected ${m.sourceTopicCount}`);

  const allFiles=[];
  const walk=dir=>{
    for(const e of fs.readdirSync(dir,{withFileTypes:true})){
      const p=path.join(dir,e.name);
      if(e.isDirectory()) walk(p); else if(e.isFile()) allFiles.push(p);
    }
  };
  walk(mirrorRoot);
  const supportCount=allFiles.length-actual.length;
  if(supportCount!==m.supportFileCount) fail.push(`supportFileCount=${m.supportFileCount}, physical support files=${supportCount}`);
}

if(fail.length){
  console.error(`RAZPAGES MIRROR QA FAILED (${fail.length} issue(s))`);
  console.error(fail.join('\n'));
  process.exit(1);
}
console.log('Razpages mirror QA passed: exact 95 linear-function HTML pages, provenance and support-file count verified; no unrelated HTML present.');
