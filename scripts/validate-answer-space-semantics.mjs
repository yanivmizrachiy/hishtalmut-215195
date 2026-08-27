import fs from 'node:fs';
import path from 'node:path';
import { pages } from '../content/book-pages.mjs';

const ROOT=process.cwd();
const errors=[];
const pointAnswerPattern=/(?:מהי\s+הנקודה|מהם\s+שיעורי\s+הנקודה|כתבו\s+(?:את\s+)?(?:שיעורי\s+)?הנקודה|מצאו\s+(?:את\s+)?(?:שיעורי\s+)?הנקודה|מצאו\s+(?:את\s+)?נקודת\s+(?:ה)?חיתוך|כתבו\s+(?:את\s+)?נקודת\s+(?:ה)?חיתוך|מהי\s+נקודת\s+(?:ה)?חיתוך|מהם\s+שיעורי\s+נקודת\s+(?:ה)?חיתוך)/;
const explanationPattern=/(?:נמק|הסבר|הציגו\s+דרך|כתבו\s+דרך|דרך\s+הפתרון)/;

function expected(item={}){
  const text=`${item.text||''} ${item.stem||''} ${item.answerLabel||''}`;
  if(item.answerShape==='ordered-pair'||pointAnswerPattern.test(text)){
    if(['full-work','lines-4','geometry-work'].includes(item.responseSpace)) return 'work-plus-ordered-pair';
    return 'ordered-pair';
  }
  if(/(?:^|\s)(?:`?[mb]`?\s*=|מהו\s+(?:השיפוע|`?m`?|`?b`?)|מהי\s+(?:השיפוע|`?m`?|`?b`?))/.test(text)&&item.responseSpace==='short'&&!explanationPattern.test(text)) return 'single-number';
  return item.responseSpace||'short';
}

for(const page of pages){
  const htmlPath=path.join(ROOT,`עמוד-${page.page}.html`);
  if(!fs.existsSync(htmlPath)){errors.push(`Page ${page.page}: generated HTML missing`); continue;}
  const html=fs.readFileSync(htmlPath,'utf8');
  for(const q of page.questions||[]){
    const qExpected=expected(q);
    const sectionMatch=html.match(new RegExp(`<section class="exercise"[^>]*data-id="${q.id.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}"[\\s\\S]*?<\\/section>`));
    const section=sectionMatch?.[0]||'';
    if(!section){errors.push(`${q.id}: rendered exercise missing`); continue;}
    if(qExpected==='ordered-pair'&&!section.includes('ordered-pair-response')&&!q.subparts?.length) errors.push(`${q.id}: point answer must render as ordered pair`);
    if(qExpected==='work-plus-ordered-pair'&&(!section.includes('work-box')||!section.includes('ordered-pair-response'))) errors.push(`${q.id}: computed point needs work space plus final ordered pair`);
    if(q.choices?.length){
      const count=(section.match(/class="choice-space"/g)||[]).length;
      if(count!==q.choices.length) errors.push(`${q.id}: expected ${q.choices.length} uniform choice boxes, found ${count}`);
    }
    for(const sp of q.subparts||[]){
      const spExpected=expected(sp);
      if(spExpected==='ordered-pair' && !section.includes('ordered-pair-response')) errors.push(`${q.id}: subpart asking for a point must include ordered-pair response`);
      if(explanationPattern.test(sp.text||'') && ['short','equation'].includes(sp.responseSpace||'')) errors.push(`${q.id}: explanation/work subpart has insufficient response space (${sp.responseSpace})`);
    }
  }
}

if(errors.length){console.error(`ANSWER-SPACE SEMANTIC QA FAILED (${errors.length})`); console.error(errors.join('\n')); process.exit(1);}
console.log(`Answer-space semantic QA passed across ${pages.length} pages.`);
