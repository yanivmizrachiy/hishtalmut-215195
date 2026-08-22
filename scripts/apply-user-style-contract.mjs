import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const buildPath=path.join(ROOT,'scripts','build-pages.mjs');
const cssPath=path.join(ROOT,'styles','a4-base.css');
const projectContractPath=path.join(ROOT,'scripts','enforce-project-contract.mjs');

function mustReplace(text,from,to,label){
  if(text.includes(to)) return text;
  if(!text.includes(from)) throw new Error(`Style contract patch target not found: ${label}`);
  return text.replace(from,to);
}

if(fs.existsSync(truthPath)){
  let truth=fs.readFileSync(truthPath,'utf8');
  if(!truth.includes('## 25. סעיפי משנה נקיים ללא אותיות וכיוון מינוס קשיח — חובה')){
    truth=truth.trimEnd()+`\n\n## 25. סעיפי משנה נקיים ללא אותיות וכיוון מינוס קשיח — חובה\n\n1. אין להציג בתחילת סעיפי משנה אותיות עבריות כגון א., ב., ג., ד. או מספור אלפביתי אוטומטי. כל שורת משנה מוצגת נקייה ומתחילה ישירות בנוסח המתמטי/המילולי שלה.\n2. נתוני label יכולים להישמר כמטא־דאטה פנימי לצורך עקיבות, אך המנוע אינו מרנדר אותם בדף.\n3. הכלל חל על כל הספר — דפים קיימים ועתידיים — ולא רק על הדף שבו התגלתה הבעיה.\n4. כל מספר שלילי, משוואה וזוג סדור חייבים להישמר חזותית בכיוון LTR קשיח. סימן המינוס מופיע תמיד לפני המספר: \`-2\`, \`-4\`, \`-1/2\`.\n5. KaTeX משתמש ב־LTR isolate-override; טקסט מתמטי ב־SVG משתמש ב־LTR bidi-override, כדי למנוע היפוך סימנים גם בתוך מסמך RTL.\n6. כל תיקון סגנון של המשתמש מחייב סריקת השפעה על כל הפרויקט, build מחדש, regression QA ו־Chromium QA על הספר כולו לפני מיזוג.\n`;
    fs.writeFileSync(truthPath,truth,'utf8');
  }
}

if(fs.existsSync(buildPath)){
  let build=fs.readFileSync(buildPath,'utf8');
  build=mustReplace(build,"    const prefix=sp.label || `${String.fromCharCode(1488+i)}.`;","    const prefix=''; // labels are metadata only; user style forbids rendered א/ב/ג/ד",'subpart automatic Hebrew labels');
  build=mustReplace(build,"    return `<div class=\"sub\"${sp.level?` data-level=\"${sp.level}\"`:''}>${esc(prefix)} ${mathify(sp.text || '')} ${writable}${sp.suffix?` ${mathify(sp.suffix)}`:''}</div>`;","    return `<div class=\"sub\"${sp.level?` data-level=\"${sp.level}\"`:''}>${mathify(sp.text || '')} ${writable}${sp.suffix?` ${mathify(sp.suffix)}`:''}</div>`;",'subpart prefix rendering');
  fs.writeFileSync(buildPath,build,'utf8');
}

if(fs.existsSync(cssPath)){
  let css=fs.readFileSync(cssPath,'utf8');
  css=css.replace('.math-isolate, .katex { direction:ltr !important; unicode-bidi:isolate !important; display:inline-block; text-align:left; }','.math-isolate, .katex { direction:ltr !important; unicode-bidi:isolate-override !important; display:inline-block; text-align:left; }');
  css=css.replace('.math-isolate .katex, .katex .katex-html { direction:ltr !important; unicode-bidi:isolate !important; }','.math-isolate .katex, .katex .katex-html { direction:ltr !important; unicode-bidi:isolate-override !important; }');
  css=css.replace('.graph, .graph text, .table { direction:ltr !important; unicode-bidi:isolate !important; }','.graph, .table { direction:ltr !important; unicode-bidi:isolate !important; }\n.graph text { direction:ltr !important; unicode-bidi:bidi-override !important; }');
  if(!css.includes('/* User style: strict mathematical glyph order */')) css=css.trimEnd()+`\n\n/* User style: strict mathematical glyph order */\n.math-isolate { direction:ltr !important; unicode-bidi:isolate-override !important; }\n.graph text { direction:ltr !important; unicode-bidi:bidi-override !important; }\n`;
  fs.writeFileSync(cssPath,css,'utf8');
}

// Keep the older project-contract validator synchronized with the stronger bidi contract.
if(fs.existsSync(projectContractPath)){
  let s=fs.readFileSync(projectContractPath,'utf8');
  s=s.replace("if(!css.includes('.math-isolate, .katex { direction:ltr !important; unicode-bidi:isolate !important;')) errors.push('A4 CSS is missing the mathematical bidi contract');","if(!css.includes('.math-isolate, .katex { direction:ltr !important; unicode-bidi:isolate-override !important;')) errors.push('A4 CSS is missing the strict mathematical bidi contract');");
  s=s.replace("if(!css.includes('.graph, .graph text, .table { direction:ltr !important; unicode-bidi:isolate !important;')) errors.push('A4 CSS is missing the mathematical bidi contract');","if(!css.includes('.graph text { direction:ltr !important; unicode-bidi:bidi-override !important;')) errors.push('A4 CSS is missing the strict SVG mathematical bidi contract');");
  fs.writeFileSync(projectContractPath,s,'utf8');
}

console.log('User style contract applied: no rendered Hebrew subpart letters; strict LTR math/minus order enforced.');
