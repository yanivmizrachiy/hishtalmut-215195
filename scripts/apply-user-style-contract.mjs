import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const buildPath=path.join(ROOT,'scripts','build-pages.mjs');
const cssPath=path.join(ROOT,'styles','a4-base.css');
const projectContractPath=path.join(ROOT,'scripts','enforce-project-contract.mjs');
const errors=[];

if(!fs.existsSync(truthPath)) errors.push('SOURCE_OF_TRUTH.md missing');

if(fs.existsSync(buildPath)){
  let build=fs.readFileSync(buildPath,'utf8');
  // Legacy renderer migration: apply only when the old form still exists.
  const oldPrefix="    const prefix=sp.label || `${String.fromCharCode(1488+i)}.`;";
  const oldRender="    return `<div class=\"sub\"${sp.level?` data-level=\"${sp.level}\"`:''}>${esc(prefix)} ${mathify(sp.text || '')} ${writable}${sp.suffix?` ${mathify(sp.suffix)}`:''}</div>`;";
  if(build.includes(oldPrefix)) build=build.replace(oldPrefix,"    const prefix=''; // labels are metadata only");
  if(build.includes(oldRender)) build=build.replace(oldRender,"    return `<div class=\"sub\"${sp.level?` data-level=\"${sp.level}\"`:''}>${mathify(sp.text || '')} ${writable}${sp.suffix?` ${mathify(sp.suffix)}`:''}</div>`;");
  if(/String\.fromCharCode\(1488\+i\)|esc\(prefix\)/.test(build)) errors.push('build-pages.mjs still renders automatic Hebrew subpart labels');
  fs.writeFileSync(buildPath,build,'utf8');
}else errors.push('scripts/build-pages.mjs missing');

if(fs.existsSync(cssPath)){
  let css=fs.readFileSync(cssPath,'utf8');
  css=css.replaceAll('unicode-bidi:isolate !important','unicode-bidi:isolate-override !important');
  if(!css.includes('.graph text { direction:ltr !important; unicode-bidi:bidi-override !important; }')) css=css.trimEnd()+`\n.graph text { direction:ltr !important; unicode-bidi:bidi-override !important; }\n`;
  fs.writeFileSync(cssPath,css,'utf8');
}else errors.push('styles/a4-base.css missing');

if(fs.existsSync(projectContractPath)){
  let s=fs.readFileSync(projectContractPath,'utf8');
  s=s.replaceAll("unicode-bidi:isolate !important","unicode-bidi:isolate-override !important");
  fs.writeFileSync(projectContractPath,s,'utf8');
}

if(errors.length){console.error(`USER STYLE CONTRACT FAILED (${errors.length})`); console.error(errors.join('\n')); process.exit(1);}
console.log('User style contract verified idempotently; SOURCE_OF_TRUTH.md unchanged.');
