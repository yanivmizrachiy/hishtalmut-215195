import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const cssPath=path.join(ROOT,'styles','a4-base.css');
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const errors=[];

if(!fs.existsSync(truthPath)) errors.push('Missing SOURCE_OF_TRUTH.md');
if(!fs.existsSync(cssPath)) errors.push('Missing styles/a4-base.css');
else {
  let css=fs.readFileSync(cssPath,'utf8');
  if(css.includes('@media print {')) css=css.replace('@media print {','@media print, screen {');
  const widthNeedle='.a4-page {\n  width: var(--page-w);\n  min-height: var(--page-h);';
  if(css.includes(widthNeedle)) css=css.replace(widthNeedle,'.a4-page {\n  width: var(--page-w);\n  min-width: var(--page-w);\n  max-width: var(--page-w);\n  min-height: var(--page-h);');
  if(!css.includes('/* Screen shell only: preserve print geometry */')) css=css.trimEnd()+`\n\n/* Screen shell only: preserve print geometry */\n@media screen {\n  body { background: var(--screen); }\n  .preview-nav { display: grid; }\n  .a4-page { margin: 0 auto 18px; box-shadow: 0 2px 16px #1520301a; }\n}\n`;
  if(!css.includes('@media print, screen {')) errors.push('A4 print rules are not shared with screen preview');
  if(!css.includes('min-width: var(--page-w);')||!css.includes('max-width: var(--page-w);')) errors.push('A4 page width is not rigidly locked to 210mm on screen');
  fs.writeFileSync(cssPath,css,'utf8');
}
if(errors.length){console.error(`MOBILE/PRINT PARITY CONTRACT FAILED (${errors.length})`); console.error(errors.join('\n')); process.exit(1);}
console.log('Mobile/print parity enforced. SOURCE_OF_TRUTH.md is never modified by build scripts.');
