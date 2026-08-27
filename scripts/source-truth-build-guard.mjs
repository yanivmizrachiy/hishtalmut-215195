import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const guardPath=path.join('/tmp','linear-function-source-truth.sha256');
const mode=process.argv[2]||'check';
const stage=process.argv[3]||'unknown';

if(!fs.existsSync(truthPath)){
  console.error('SOURCE_TRUTH_GUARD: SOURCE_OF_TRUTH.md missing');
  process.exit(1);
}
const bytes=fs.readFileSync(truthPath);
const hash=crypto.createHash('sha256').update(bytes).digest('hex');

if(mode==='snapshot'){
  fs.writeFileSync(guardPath,`${hash}\n`,'utf8');
  console.log(`SOURCE_TRUTH_GUARD snapshot ${hash}`);
  process.exit(0);
}
if(!fs.existsSync(guardPath)){
  console.error(`SOURCE_TRUTH_GUARD: missing snapshot before stage ${stage}`);
  process.exit(1);
}
const expected=fs.readFileSync(guardPath,'utf8').trim();
if(hash!==expected){
  console.error(`SOURCE_TRUTH_GUARD FAILED after ${stage}: expected ${expected}, got ${hash}`);
  process.exit(1);
}
console.log(`SOURCE_TRUTH_GUARD ok after ${stage}`);
