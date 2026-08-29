import fs from 'node:fs';

const detail=JSON.parse(fs.readFileSync('data/meitzav-question-disposition.json','utf8'));
const ledger=JSON.parse(fs.readFileSync('data/content-disposition-ledger.json','utf8'));
const coverage=JSON.parse(fs.readFileSync('data/source-coverage.json','utf8'));
const errors=[];
const finals=new Set(['included','merged','verified_duplicate','out_of_scope']);

if(detail.sourceDriveId!=='1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4') errors.push('Meitzav ledger source Drive ID drifted');
if(detail.knownItemCount!==36) errors.push(`Meitzav source must contain exactly 36 numbered questions; got ${detail.knownItemCount}`);
const inv=detail.inventory||[];
if(inv.length!==36||new Set(inv).size!==36) errors.push('Meitzav inventory must contain 36 unique question numbers');
for(let n=1;n<=36;n++) if(!inv.includes(n)) errors.push(`Meitzav inventory missing question ${n}`);
const finalized=detail.finalized||{};
for(const [id,record] of Object.entries(finalized)){
  const m=id.match(/^meitzav:q(\d+)$/);
  if(!m||Number(m[1])<1||Number(m[1])>36) errors.push(`Invalid Meitzav item id ${id}`);
  if(!finals.has(record?.disposition)) errors.push(`Meitzav item ${id} has non-final disposition ${record?.disposition||'missing'}`);
  if(!Array.isArray(record?.evidence)||record.evidence.length===0) errors.push(`Meitzav item ${id} requires evidence`);
}
const finalCount=Object.keys(finalized).length;
const needsReview=36-finalCount;
const s=ledger.sources?.meitzav||{};
if(s.knownItemCount!==36||s.finalizedCount!==finalCount||s.needsReviewCount!==needsReview||s.detailedLedger!=='data/meitzav-question-disposition.json') errors.push('Meitzav summary/detail counts disagree');
const c=coverage.mandatorySources?.meitzav||{};
if(c.knownQuestionCount!==36||c.finalizedQuestionCount!==finalCount||c.needsReviewQuestionCount!==needsReview||c.questionDispositionLedger!=='data/meitzav-question-disposition.json') errors.push('Meitzav coverage/detail counts disagree');

if(errors.length){console.error(`MEITZAV LEDGER FAILED (${errors.length})`);console.error(errors.join('\n'));process.exit(1);}
console.log(`Meitzav source ledger PASS: 36 numbered questions; finalized=${finalCount}, needs_review=${needsReview}.`);
