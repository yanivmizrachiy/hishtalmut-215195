import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const truthPath=path.join(ROOT,'SOURCE_OF_TRUTH.md');
const SECTION='## 28. ארכיטקטורת שינוי מהיר — נקודת כניסה אחת לכל הספר';
const POLICY=`\n\n${SECTION}\n\n1. כל כלי build/QA/manifest קורא את תוכן הספר דרך \`content/book-pages.mjs\` בלבד. אין לשכפל רשימות imports של עמודים בכל סקריפט.\n2. פרטי הספר המשותפים — שם, URL ציבורי, פרקים ושמות קבצים — מרוכזים ב־\`content/book-config.mjs\`; זהו config טכני נגזר בלבד ואינו מקור אמת נוסף.\n3. כל עמוד נשמר כקובץ עצמאי \`content/pages/page-N.mjs\` ונאסף אוטומטית. שינוי בעמוד דורש עריכת קובץ עמוד אחד בלבד.\n4. קבצי legacy הישנים משמשים קלט הגירה זמני בלבד. רק \`scripts/migrate-legacy-pages.mjs\` רשאי לקרוא אותם; build/QA/manifest אינם מייבאים אותם ישירות.\n5. שינוי רוחבי בעיצוב נעשה ב־\`styles/a4-base.css\`; שינוי רוחבי ברינדור נעשה ב־\`scripts/build-pages.mjs\`; שינוי כלל כתיבה נעשה בחוזה QA משותף — לעולם לא בטלאי HTML בעמוד בודד.\n6. \`scripts/validate-architecture.mjs\` הוא שער רגרסיה: הוא חוסם imports ישירים ישנים, registry כפול, config כפול או כלי שאינו משתמש בנקודת הכניסה המרכזית.\n7. עמודים 1–15 עוברים אוטומטית למודל המודולרי בלי שינוי בתוכן; לאחר ההגירה כל עמודי הספר ניתנים לעריכה באותה צורה.\n8. שינוי עתידי צריך לשאוף למינימום נקודות מגע: עמוד יחיד — קובץ עמוד יחיד; כלל רוחבי — רכיב/חוזה משותף יחיד; נתון משותף — config יחיד.\n`;

if(fs.existsSync(truthPath)){
  let truth=fs.readFileSync(truthPath,'utf8');
  if(!truth.includes(SECTION)){
    truth=truth.trimEnd()+POLICY+'\n';
    fs.writeFileSync(truthPath,truth,'utf8');
  }
}

const replacements=[
  ['scripts/build-pages.mjs',
    "import { pages as corePages } from '../content/page-definitions.mjs';\nimport { pages as pages05to06 } from '../content/pages-05-06.mjs';\nimport { pages as pages07to10 } from '../content/pages-07-10.mjs';\n\nconst pages=[...corePages,...pages05to06,...pages07to10].sort((a,b)=>a.page-b.page);",
    "import { pages } from '../content/book-pages.mjs';"],
  ['scripts/validate-content.mjs',
    "import { pages as corePages } from '../content/page-definitions.mjs';\nimport { pages as pages05to06 } from '../content/pages-05-06.mjs';\nimport { pages as pages07to10 } from '../content/pages-07-10.mjs';\n\nconst ROOT=process.cwd();\nconst dataPages=[...corePages,...pages05to06,...pages07to10].sort((a,b)=>a.page-b.page);",
    "import { pages } from '../content/book-pages.mjs';\n\nconst ROOT=process.cwd();\nconst dataPages=pages;"],
  ['scripts/validate-math-models.mjs',
    "import { pages as corePages } from '../content/page-definitions.mjs';\nimport { pages as pages05to06 } from '../content/pages-05-06.mjs';\nimport { pages as pages07plus } from '../content/pages-07-10.mjs';\n\nconst pages=[...corePages,...pages05to06,...pages07plus].sort((a,b)=>a.page-b.page);",
    "import { pages } from '../content/book-pages.mjs';"],
  ['scripts/sync-manifest.mjs',
    "import { pages as corePages } from '../content/page-definitions.mjs';\nimport { pages as pages05to06 } from '../content/pages-05-06.mjs';\nimport { pages as pages07plus } from '../content/pages-07-10.mjs';\n\nconst ROOT=process.cwd();\nconst manifestPath=path.join(ROOT,'meta','pages.json');\nconst dataPages=[...corePages,...pages05to06,...pages07plus].sort((a,b)=>a.page-b.page);",
    "import { pages } from '../content/book-pages.mjs';\n\nconst ROOT=process.cwd();\nconst manifestPath=path.join(ROOT,'meta','pages.json');\nconst dataPages=pages;"],
  ['scripts/enforce-source-question-provenance.mjs',
    "import { pages as corePages } from '../content/page-definitions.mjs';\nimport { pages as pages05to06 } from '../content/pages-05-06.mjs';\nimport { pages as pages07plus } from '../content/pages-07-10.mjs';",
    "import { pages } from '../content/book-pages.mjs';"],
  ['scripts/enforce-source-question-provenance.mjs',
    "const pages=[...corePages,...pages05to06,...pages07plus].sort((a,b)=>a.page-b.page);\nconst errors=[];",
    "const errors=[];"]
];

for(const [rel,from,to] of replacements){
  const file=path.join(ROOT,rel);
  if(!fs.existsSync(file)) throw new Error(`Architecture target missing: ${rel}`);
  let s=fs.readFileSync(file,'utf8');
  if(s.includes(to)) continue;
  if(!s.includes(from)) throw new Error(`Architecture patch target changed unexpectedly: ${rel}`);
  s=s.replace(from,to);
  fs.writeFileSync(file,s,'utf8');
}

console.log('Maintainable architecture enforced: one technical page registry for build/QA/manifest tooling.');
