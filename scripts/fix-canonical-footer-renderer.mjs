import fs from 'node:fs';
import path from 'node:path';

const file=path.join(process.cwd(),'scripts','build-pages.mjs');
if(!fs.existsSync(file)){console.error('Missing scripts/build-pages.mjs');process.exit(1);}
let src=fs.readFileSync(file,'utf8');
if(!src.includes('function canonicalFooter')){console.error('canonicalFooter() was not installed by the style contract');process.exit(1);}
const old=/<footer class="footer">[\s\S]*?<\/footer><\/main>/;
if(old.test(src)) src=src.replace(old,'${canonicalFooter()}</main>');
if(!src.includes('${canonicalFooter()}</main>')){console.error('Could not wire canonicalFooter() into renderPage()');process.exit(1);}
fs.writeFileSync(file,src,'utf8');
console.log('Canonical footer renderer wired into shared page engine.');
