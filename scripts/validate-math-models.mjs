import { pages as corePages } from '../content/page-definitions.mjs';
import { pages as pages05to06 } from '../content/pages-05-06.mjs';
import { pages as pages07plus } from '../content/pages-07-10.mjs';

const pages=[...corePages,...pages05to06,...pages07plus].sort((a,b)=>a.page-b.page);
const errors=[];
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b];}return a||1;};
const rat=v=>{
  if(Array.isArray(v)){
    if(v.length!==2||!v.every(Number.isInteger)||v[1]===0) throw new Error(`invalid rational ${JSON.stringify(v)}`);
    let [n,d]=v;if(d<0){n=-n;d=-d;}const g=gcd(n,d);return [n/g,d/g];
  }
  if(Number.isInteger(v)) return [v,1];
  throw new Error(`mathModel values must be integers or [numerator,denominator], got ${JSON.stringify(v)}`);
};
const add=(a,b)=>{const [an,ad]=rat(a),[bn,bd]=rat(b);return rat([an*bd+bn*ad,ad*bd]);};
const sub=(a,b)=>{const [an,ad]=rat(a),[bn,bd]=rat(b);return rat([an*bd-bn*ad,ad*bd]);};
const mul=(a,b)=>{const [an,ad]=rat(a),[bn,bd]=rat(b);return rat([an*bn,ad*bd]);};
const div=(a,b)=>{const [an,ad]=rat(a),[bn,bd]=rat(b);if(bn===0)throw new Error('division by zero');return rat([an*bd,ad*bn]);};
const neg=a=>{const [n,d]=rat(a);return [-n,d];};
const eq=(a,b)=>{const [an,ad]=rat(a),[bn,bd]=rat(b);return an===bn&&ad===bd;};
const fmt=a=>{const [n,d]=rat(a);return d===1?String(n):`${n}/${d}`;};

function lineFromStandard({A,B,C}){
  const a=rat(A),b=rat(B),c=rat(C);
  if(eq(b,0)) return {vertical:true,xIntercept:div(c,a)};
  return {vertical:false,m:div(neg(a),b),b:div(c,b),xIntercept:eq(a,0)?null:div(c,a)};
}

function yAtX(line,x){
  if(line.vertical) throw new Error('cannot evaluate y=f(x) for a vertical line');
  return add(mul(line.m,x),line.b);
}

function xAtY(line,y){
  if(line.vertical) return line.xIntercept;
  if(eq(line.m,0)) throw new Error(`cannot solve a unique x for horizontal line y=${fmt(line.b)}`);
  return div(sub(y,line.b),line.m);
}

function validateProbes(probes,line,owner){
  for(const [i,probe] of (probes||[]).entries()){
    const label=`${owner} probe ${i+1}`;
    const modes=[probe.expectedY!==undefined,probe.expectedX!==undefined,probe.onLine!==undefined].filter(Boolean).length;
    if(modes!==1){errors.push(`${label}: use exactly one of expectedY, expectedX or onLine`);continue;}
    try{
      if(probe.expectedY!==undefined){
        if(probe.x===undefined) throw new Error('expectedY probe requires x');
        const actual=yAtX(line,probe.x);
        if(!eq(actual,probe.expectedY)) errors.push(`${label}: at x=${fmt(probe.x)} expected y=${fmt(probe.expectedY)} but model gives ${fmt(actual)}`);
      }else if(probe.expectedX!==undefined){
        if(probe.y===undefined) throw new Error('expectedX probe requires y');
        const actual=xAtY(line,probe.y);
        if(!eq(actual,probe.expectedX)) errors.push(`${label}: at y=${fmt(probe.y)} expected x=${fmt(probe.expectedX)} but model gives ${fmt(actual)}`);
      }else{
        if(!Array.isArray(probe.point)||probe.point.length!==2) throw new Error('onLine probe requires point:[x,y]');
        const [x,y]=probe.point;
        let actualOnLine;
        if(line.vertical) actualOnLine=eq(x,line.xIntercept);
        else actualOnLine=eq(yAtX(line,x),y);
        if(actualOnLine!==probe.onLine) errors.push(`${label}: point (${fmt(x)},${fmt(y)}) onLine=${actualOnLine}, expected ${probe.onLine}`);
      }
    }catch(error){errors.push(`${label}: ${error.message}`);}
  }
}

function validateGraphAgainstLine(graph,line,owner){
  if(!graph||line.vertical) return;
  for(const [i,ln] of (graph.lines||[]).entries()){
    if(!ln.through||ln.through.length!==2) continue;
    for(const [j,[x,y]] of ln.through.entries()){
      const actual=yAtX(line,x);
      if(!eq(y,actual)) errors.push(`${owner}: graph line ${i+1} point ${j+1} (${x},${y}) is not on declared mathModel y=${fmt(line.m)}x+${fmt(line.b)}`);
    }
  }
}

let modeled=0;
let probeCount=0;
for(const p of pages){
  for(const q of p.questions||[]){
    if(!q.mathModel) continue;
    modeled++;
    try{
      if(!q.mathModel.standard) throw new Error('mathModel.standard is required');
      const line=lineFromStandard(q.mathModel.standard);
      const expected=q.mathModel.expected||{};
      if(expected.m!==undefined){
        if(line.vertical) errors.push(`${q.id}: expected m supplied for vertical line`);
        else if(!eq(line.m,expected.m)) errors.push(`${q.id}: expected m=${fmt(expected.m)} but standard form gives ${fmt(line.m)}`);
      }
      if(expected.b!==undefined){
        if(line.vertical) errors.push(`${q.id}: expected b supplied for vertical line`);
        else if(!eq(line.b,expected.b)) errors.push(`${q.id}: expected b=${fmt(expected.b)} but standard form gives ${fmt(line.b)}`);
      }
      if(expected.xIntercept!==undefined){
        if(line.xIntercept===null) errors.push(`${q.id}: expected x-intercept but line has none/all depending on form`);
        else if(!eq(line.xIntercept,expected.xIntercept)) errors.push(`${q.id}: expected x-intercept=${fmt(expected.xIntercept)} but standard form gives ${fmt(line.xIntercept)}`);
      }
      probeCount+=(q.mathModel.probes||[]).length;
      validateProbes(q.mathModel.probes,line,q.id);
      if(q.graph) validateGraphAgainstLine(q.graph,line,q.id);
    }catch(error){errors.push(`${q.id}: ${error.message}`);}
  }
}

if(errors.length){
  console.error(`EXACT MATH QA FAILED (${errors.length})`);
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Exact rational math QA passed for ${modeled} modeled question(s), including ${probeCount} exact value/point probe(s).`);
