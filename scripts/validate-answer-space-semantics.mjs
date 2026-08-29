import fs from 'node:fs';
import path from 'node:path';
import { pages } from '../content/book-pages.mjs';

const ROOT=process.cwd();
const errors=[];
const explanationPattern=/(?:נמק|הסבר|הציגו\s+דרך|כתבו\s+דרך|דרך\s+הפתרון|הצדיקו|הסיקו)/;

for(const page of pages){
  const htmlPath=path.join(ROOT,`עמוד-${page.page}.html`);
  if(!fs.existsSync(htmlPath)){errors.push(`Page ${page.page}: generated HTML missing`); continue;}
  const html=fs.readFileSync(htmlPath,'utf8');
  for(const q of page.questions||[]){
    if(!q.expectedAnswerShape) errors.push(`${q.id}: missing expectedAnswerShape`);
    const sectionMatch=html.match(new RegExp(`<section class="exercise"[^>]*data-id="${q.id.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}"[\\s\\S]*?<\\/section>`));
    const section=sectionMatch?.[0]||'';
    if(!section){errors.push(`${q.id}: rendered exercise missing`); continue;}
    if(q.expectedAnswerShape==='ordered-pair'&&!section.includes('ordered-pair-response')&&!q.subparts?.length) errors.push(`${q.id}: point answer must render as ordered pair`);
    if(q.expectedAnswerShape==='worked-solution' && !['full-work','lines-2','lines-3','lines-4','geometry-work'].includes(q.responseSpace||'')) errors.push(`${q.id}: worked solution semantic shape is inconsistent with responseSpace=${q.responseSpace}`);
    if(q.choices?.length){
      if(q.expectedAnswerShape!=='choice') errors.push(`${q.id}: choice question must expose expectedAnswerShape=choice`);
      const count=(section.match(/class="choice-space"/g)||[]).length;
      if(count!==q.choices.length) errors.push(`${q.id}: expected ${q.choices.length} uniform choice boxes, found ${count}`);
    }
    for(const sp of q.subparts||[]){
      if(!sp.expectedAnswerShape) errors.push(`${q.id}: subpart missing expectedAnswerShape`);
      if(sp.expectedAnswerShape==='ordered-pair' && !section.includes('ordered-pair-response')) errors.push(`${q.id}: subpart asking for a point must include ordered-pair response`);
      if(explanationPattern.test(sp.text||'') && ['short','equation'].includes(sp.responseSpace||'')) errors.push(`${q.id}: explanation/work subpart has insufficient response space (${sp.responseSpace})`);
    }
  }
}

if(errors.length){console.error(`ANSWER-SPACE SEMANTIC QA FAILED (${errors.length})`); console.error(errors.join('\n')); process.exit(1);}
console.log(`Answer-space semantic QA passed across ${pages.length} pages with expectedAnswerShape separated from responseSpace.`);
