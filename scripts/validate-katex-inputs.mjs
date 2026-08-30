import { pages } from '../content/book-pages.mjs';

const errors=[];
const seen=[];

function checkString(value,location){
  const text=String(value??'');
  for(const m of text.matchAll(/`([^`]*)`/g)){
    const tex=m[1];
    seen.push({location,tex});
    if(/[\u0590-\u05FF]/u.test(tex)) errors.push(`${location}: Hebrew text must not be sent to KaTeX: ${JSON.stringify(tex)}`);
    if(/[½¼¾⅓⅔⅛⅜⅝⅞]/u.test(tex)) errors.push(`${location}: Unicode fraction must use LaTeX \\frac: ${JSON.stringify(tex)}`);
    if(/(^|[^\\])%/.test(tex)) errors.push(`${location}: raw % must be escaped as \\% in KaTeX: ${JSON.stringify(tex)}`);
  }
}

function checkTable(table,location){
  for(const [ri,row] of (table?.rows||[]).entries()){
    for(const [ci,cell] of row.entries()){
      if(typeof cell==='string') checkString(cell,`${location}.rows[${ri}][${ci}]`);
      else if(cell&&typeof cell==='object'&&!cell.answer) checkString(cell.text??'',`${location}.rows[${ri}][${ci}]`);
    }
  }
}

for(const page of pages){
  const p=`page-${page.page}`;
  checkString(page.rule,`${p}.rule`);
  for(const [qi,q] of (page.questions||[]).entries()){
    const qloc=`${p}.questions[${qi}](${q.id||'no-id'})`;
    checkString(q.stem,`${qloc}.stem`);
    checkString(q.answerLabel,`${qloc}.answerLabel`);
    for(const [ci,c] of (q.choices||[]).entries()) checkString(c,`${qloc}.choices[${ci}]`);
    for(const [si,sp] of (q.subparts||[]).entries()){
      checkString(sp.text,`${qloc}.subparts[${si}].text`);
      checkString(sp.suffix,`${qloc}.subparts[${si}].suffix`);
      checkString(sp.betweenAnswers,`${qloc}.subparts[${si}].betweenAnswers`);
      for(const [ci,c] of (sp.choices||[]).entries()) checkString(c,`${qloc}.subparts[${si}].choices[${ci}]`);
    }
    for(const [pi,panel] of (q.panels||[]).entries()){
      checkString(panel.text,`${qloc}.panels[${pi}].text`);
      checkString(panel.answerLabel,`${qloc}.panels[${pi}].answerLabel`);
      checkTable(panel.table,`${qloc}.panels[${pi}].table`);
    }
    checkTable(q.table,`${qloc}.table`);
  }
}

if(errors.length){
  console.error(`KATEX INPUT VALIDATION FAILED: ${errors.length} invalid source math fragment(s).`);
  for(const e of errors) console.error(`- ${e}`);
  process.exit(1);
}
console.log(`KaTeX source-input validation passed: ${seen.length} inline math fragment(s), 0 Hebrew/raw-percent/Unicode-fraction violations.`);
