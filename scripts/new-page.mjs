import fs from 'node:fs';
import path from 'node:path';
import { nextPageNumber } from '../content/book-pages.mjs';

const ROOT=process.cwd();
const argv=process.argv.slice(2);
const args={};
for(let i=0;i<argv.length;i++){
  if(!argv[i].startsWith('--')) continue;
  const key=argv[i].slice(2);
  const value=argv[i+1] && !argv[i+1].startsWith('--') ? argv[++i] : 'true';
  args[key]=value;
}

const required=['chapter','title','family','level','stem','sourceRef'];
const missing=required.filter(k=>!args[k]);
if(missing.length){
  console.error(`Missing required args: ${missing.join(', ')}`);
  console.error('Usage: npm run new:page -- --chapter 14 --title "..." --family I01 --level 2 --stem "..." --sourceRef "razpages:עמוד-436"');
  process.exit(1);
}

const page=nextPageNumber();
const chapter=Number(args.chapter);
const level=Number(args.level);
if(!Number.isInteger(chapter)||chapter<0) throw new Error('chapter must be a non-negative integer');
if(!Number.isFinite(level)||level<1||level>10) throw new Error('level must be 1..10');

const sourceRef=args.sourceRef.trim();
const qid=`${args.family}-P${String(page).padStart(2,'0')}-Q1`;
const data={
  page,
  chapter,
  title:args.title.trim(),
  rule:(args.rule||'').trim(),
  sourceRefs:[sourceRef],
  questions:[{
    id:qid,
    family:args.family.trim(),
    level,
    responseSpace:(args.responseSpace||'mixed').trim(),
    stem:args.stem.trim(),
    sourceRef
  }]
};

const outDir=path.join(ROOT,'content','pages');
fs.mkdirSync(outDir,{recursive:true});
const file=path.join(outDir,`page-${page}.mjs`);
if(fs.existsSync(file)) throw new Error(`Refusing to overwrite ${file}`);
const body=`// One-page-one-file module. SOURCE_OF_TRUTH.md is the only source of truth.\nexport const page = ${JSON.stringify(data,null,2)};\n`;
fs.writeFileSync(file,body,'utf8');
console.log(`Created content/pages/page-${page}.mjs (${args.family}, chapter ${chapter}).`);
