import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const enforcer=path.join(here,'enforce-maintainable-architecture.mjs');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'linear-function-crlf-'));
const scriptsDir=path.join(tmp,'scripts');
fs.mkdirSync(scriptsDir,{recursive:true});

const crlf=s=>String(s).replace(/\r?\n/g,'\r\n');
const write=(rel,content)=>{
  const file=path.join(tmp,rel);
  fs.mkdirSync(path.dirname(file),{recursive:true});
  fs.writeFileSync(file,crlf(content),'utf8');
};

// Reproduce the exact Windows failure mode: targets are already migrated,
// but their checkout uses CRLF. The enforcer must treat this as a clean no-op.
write('SOURCE_OF_TRUTH.md','# מקור האמת היחיד — פונקציה קווית\n\n## 28. ארכיטקטורת שינוי מהיר — נקודת כניסה אחת לכל הספר\n');
write('scripts/build-pages.mjs',"import { pages } from '../content/book-pages.mjs';\n");
write('scripts/validate-content.mjs',"import { pages } from '../content/book-pages.mjs';\n\nconst ROOT=process.cwd();\nconst dataPages=pages;\n");
write('scripts/validate-math-models.mjs',"import { pages } from '../content/book-pages.mjs';\n");
write('scripts/sync-manifest.mjs',"import { pages } from '../content/book-pages.mjs';\n\nconst ROOT=process.cwd();\nconst manifestPath=path.join(ROOT,'meta','pages.json');\nconst dataPages=pages;\n");
write('scripts/enforce-source-question-provenance.mjs',"import { pages } from '../content/book-pages.mjs';\n");

const run=spawnSync(process.execPath,[enforcer],{cwd:tmp,encoding:'utf8'});
try{
  if(run.status!==0){
    throw new Error(`CRLF architecture regression failed.\nSTDOUT:\n${run.stdout}\nSTDERR:\n${run.stderr}`);
  }
  const validate=fs.readFileSync(path.join(scriptsDir,'validate-content.mjs'),'utf8');
  if(!validate.includes("import { pages } from '../content/book-pages.mjs';")){
    throw new Error('CRLF regression changed the central page registry unexpectedly.');
  }
  console.log('Cross-platform architecture QA passed: Windows CRLF already-migrated files are accepted idempotently.');
} finally {
  fs.rmSync(tmp,{recursive:true,force:true});
}
