import fs from 'node:fs';

const manifest=JSON.parse(fs.readFileSync('data/google-drive-source-manifest.json','utf8'));
const coverage=JSON.parse(fs.readFileSync('data/source-coverage.json','utf8'));
const ledger=JSON.parse(fs.readFileSync('data/content-disposition-ledger.json','utf8'));
const errors=[];
const sources=manifest.sources||[];
const ids=new Set();
const numbers=new Set();
let grounded=0, unresolved=0;

if(manifest.knownSourceCount!==46||sources.length!==46) errors.push(`Drive manifest must contain exactly 46 sources; got declared=${manifest.knownSourceCount}, actual=${sources.length}`);
for(const source of sources){
  if(!Number.isInteger(source.n)||source.n<1||source.n>46||numbers.has(source.n)) errors.push(`Invalid/duplicate Drive inventory number ${source.n}`);
  numbers.add(source.n);
  if(source.status==='grounded'){
    grounded++;
    if(!source.driveId) errors.push(`Grounded Drive source ${source.n} has no provider id`);
    else if(ids.has(source.driveId)) errors.push(`Duplicate Drive id ${source.driveId} at source ${source.n}`);
    else ids.add(source.driveId);
  } else if(source.status==='identity-unresolved'){
    unresolved++;
    if(source.driveId) errors.push(`Unresolved Drive source ${source.n} unexpectedly has an id`);
    if(!source.searchEvidence) errors.push(`Unresolved Drive source ${source.n} requires search evidence`);
  } else errors.push(`Invalid Drive identity status for source ${source.n}: ${source.status}`);
}
for(let n=1;n<=46;n++) if(!numbers.has(n)) errors.push(`Drive manifest missing inventory source ${n}`);
if(grounded!==46||unresolved!==0||manifest.groundedCount!==grounded||manifest.unresolvedIdentityCount!==unresolved) errors.push(`Drive identity counts must be 46 grounded / 0 unresolved; got ${grounded}/${unresolved}`);
if(sources.some(s=>s.status==='identity-unresolved')) errors.push('No Drive identity may remain unresolved after full identity grounding');
const source39=sources.find(s=>s.n===39);
if(source39?.driveId!=='1vy4VYIVc6nPzucDq0BTIO5LjA87fO0Jc'||source39?.observedTitle!=='חישוב שיפוע מתוך טבלה.ppsx') errors.push('Drive source 39 must remain grounded to the verified PPSX provider identity');
const c=coverage.mandatorySources?.googleDrive||{};
if(c.knownTeachingFiles!==46||c.identityGroundedCount!==grounded||c.identityUnresolvedCount!==unresolved||c.identityManifest!=='data/google-drive-source-manifest.json') errors.push('source-coverage Drive identity summary disagrees with manifest');
const l=ledger.sources?.googleDrive||{};
if(l.knownItemCount!==46||l.identityGroundedCount!==grounded||l.identityUnresolvedCount!==unresolved||l.identityManifest!=='data/google-drive-source-manifest.json') errors.push('content-disposition Drive identity summary disagrees with manifest');

if(errors.length){console.error(`DRIVE SOURCE MANIFEST FAILED (${errors.length})`);console.error(errors.join('\n'));process.exit(1);}
console.log(`Drive source manifest PASS: 46 inventoried, ${grounded} provider IDs grounded, ${unresolved} identity unresolved. Semantic exercise-level review remains open.`);
