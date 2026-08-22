import fs from 'node:fs';
import path from 'node:path';

const file=path.join(process.cwd(),'SOURCE_OF_TRUTH.md');
if(!fs.existsSync(file)) throw new Error('SOURCE_OF_TRUTH.md is missing');
let truth=fs.readFileSync(file,'utf8').replace(/\r\n?/g,'\n');

const replacements=new Map([
  ['8. `content/page-definitions.mjs` וקבצי תוכן עתידיים הם מאגרי ביצוע נגזרים; **הם אינם מקור אמת נוסף** ואסור שיכילו כלל הסותר את הקובץ הזה.',
   '8. `content/pages/page-N.mjs` הם מאגרי ביצוע נגזרים של תוכן העמודים; **הם אינם מקור אמת נוסף** ואסור שיכילו כלל הסותר את הקובץ הזה.'],
  ['7. עמודים 1–15 עוברים אוטומטית למודל המודולרי בלי שינוי בתוכן; לאחר ההגירה כל עמודי הספר ניתנים לעריכה באותה צורה.',
   '7. כל עמודי הספר הפעילים ניתנים לעריכה באותה צורה מודולרית דרך `content/pages/page-N.mjs`; אין מסלול תוכן מקביל.'],
  ['7. עמודים 1–15 עוברים אוטומטית למודל המודולרי בלי שינוי בתוכן; לאחר ההגירה כל עמודי הספר ניתנים לעריכה באותה צורה פשוטה.',
   '7. כל עמודי הספר הפעילים ניתנים לעריכה באותה צורה מודולרית דרך `content/pages/page-N.mjs`; אין מסלול תוכן מקביל.']
]);
for(const [from,to] of replacements) truth=truth.split(from).join(to);

const targetNumbers=new Map([
  ['סעיפי משנה נקיים ללא אותיות וכיוון מינוס קשיח — חובה',28],
  ['ארכיטקטורת שינוי מהיר — נקודת כניסה אחת לכל הספר',29],
  ['תיקוני פריסה חזותית ורגרסיה — חובה',30],
  ['כותרת בסגנון razpages וסיכום פעיל בהשלמות — חובה',31],
  ['מצב עבודה נוכחי — עצירה וניקוי',32]
]);

const heading=/^##\s+(\d+)\.\s+(.+)$/gm;
const matches=[...truth.matchAll(heading)];
const preamble=matches.length?truth.slice(0,matches[0].index):truth;
const sections=[];
for(let i=0;i<matches.length;i++){
  const m=matches[i];
  const end=i+1<matches.length?matches[i+1].index:truth.length;
  sections.push({number:Number(m[1]),title:m[2].trim(),body:truth.slice(m.index+m[0].length,end)});
}

const seenTargetTitles=new Set();
const normalized=[];
for(const section of sections){
  if(targetNumbers.has(section.title)){
    if(seenTargetTitles.has(section.title)) continue;
    seenTargetTitles.add(section.title);
    section.number=targetNumbers.get(section.title);
  }
  normalized.push(section);
}

for(const title of targetNumbers.keys()) if(!seenTargetTitles.has(title)) throw new Error(`Required source-truth section missing: ${title}`);

truth=preamble+normalized.map(s=>`## ${s.number}. ${s.title}${s.body}`).join('');
truth=truth.trimEnd()+'\n';

const numbers=[...truth.matchAll(/^##\s+(\d+)\.\s+/gm)].map(m=>Number(m[1]));
const duplicates=numbers.filter((n,i)=>numbers.indexOf(n)!==i);
if(duplicates.length) throw new Error(`Duplicate SOURCE_OF_TRUTH section numbers remain: ${[...new Set(duplicates)].join(', ')}`);

for(const [title,n] of targetNumbers){
  if(!truth.includes(`## ${n}. ${title}`)) throw new Error(`Section numbering failed for ${title}`);
}
for(const stale of ['content/page-definitions.mjs','scripts/migrate-legacy-pages.mjs','## 25. סעיפי משנה נקיים','## 28. ארכיטקטורת שינוי מהיר','## 28. תיקוני פריסה חזותית','## 28. כותרת בסגנון razpages','## 31. מצב עבודה נוכחי — עצירה וניקוי']){
  if(truth.includes(stale)) throw new Error(`Stale source-truth text remains: ${stale}`);
}

fs.writeFileSync(file,truth,'utf8');
console.log('SOURCE_OF_TRUTH normalized: unique sections, completed legacy migration, paused cleanup state.');
