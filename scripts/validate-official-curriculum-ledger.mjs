import fs from 'node:fs';

const detail=JSON.parse(fs.readFileSync('data/official-curriculum-disposition.json','utf8'));
const ledger=JSON.parse(fs.readFileSync('data/content-disposition-ledger.json','utf8'));
const coverage=JSON.parse(fs.readFileSync('data/source-coverage.json','utf8'));
const errors=[];
const finals=new Set(['included','merged','verified_duplicate','out_of_scope']);
const reqs=detail.requirements||[];
const ids=new Set(reqs.map(r=>r.id));
if(detail.knownItemCount!==23||reqs.length!==23||ids.size!==23) errors.push(`Official curriculum ledger must contain 23 unique requirements; got declared=${detail.knownItemCount}, rows=${reqs.length}, unique=${ids.size}`);
const expected=[...Array.from({length:13},(_,i)=>`official:linear:${i+1}`),...Array.from({length:5},(_,i)=>`official:ineq:${i+1}`),...Array.from({length:5},(_,i)=>`official:systems:${i+1}`)];
for(const id of expected) if(!ids.has(id)) errors.push(`Official curriculum requirement missing: ${id}`);
const finalized=detail.finalized||{};
for(const [id,record] of Object.entries(finalized)){
  if(!ids.has(id)) errors.push(`Finalized official requirement does not exist: ${id}`);
  if(!finals.has(record?.disposition)) errors.push(`Official requirement ${id} has invalid disposition ${record?.disposition||'missing'}`);
  if(!Array.isArray(record?.evidence)||record.evidence.length===0) errors.push(`Official requirement ${id} requires evidence`);
}
const finalCount=Object.keys(finalized).length;
const needsReview=23-finalCount;
const s=ledger.sources?.officialCurriculum||{};
if(s.knownItemCount!==23||s.finalizedCount!==finalCount||s.needsReviewCount!==needsReview||s.detailedLedger!=='data/official-curriculum-disposition.json') errors.push('Official curriculum summary/detail counts disagree');
const c=coverage.mandatorySources?.officialCurriculum||{};
if(c.knownRequirementCount!==23||c.finalizedRequirementCount!==finalCount||c.needsReviewRequirementCount!==needsReview||c.requirementDispositionLedger!=='data/official-curriculum-disposition.json') errors.push('Official curriculum coverage/detail counts disagree');
if(finalCount===23&&(s.status!=='complete'||c.status!=='complete')) errors.push('Official curriculum must be marked complete when all 23 requirements are finalized');
if(errors.length){console.error(`OFFICIAL CURRICULUM LEDGER FAILED (${errors.length})`);console.error(errors.join('\n'));process.exit(1);}
console.log(`Official curriculum ledger PASS: 23 requirements; finalized=${finalCount}, needs_review=${needsReview}.`);
