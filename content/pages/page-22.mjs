export const page={
  page:22,
  chapter:8,
  kicker:'פרק 8 · משוואה לא מסודרת',
  title:'x ו־y בשני אגפים',
  subtitle:'העברת איברים → כינוס → בידוד y → פירוש · רמות 4–7',
  rule:'כאשר `x` ו־`y` מופיעים בשני אגפי המשוואה, קודם מעבירים ומכנסים איברים מאותו סוג. רק לאחר שמקבלים משוואה פשוטה יותר מבודדים את `y` ומסדרים ל־`y=mx+b`.',
  sourceRefs:['SOURCE_OF_TRUTH.md#8.2','data/unordered-equation-family-map.md#U12'],
  questions:[
    {
      id:'U12-P22-Q1',family:'U12,U05',level:4,responseSpace:'full-work',
      stem:'סדרו את `x+y=2x+5` לצורה `y=mx+b`, ואז כתבו את `m` ואת `b`.',
      answerLabel:'העברת איברים, סידור ופרמטרים:',
      sourceRefs:['SOURCE_OF_TRUTH.md#8.22','data/unordered-equation-family-map.md#U12'],
      adaptation:'משפחת U12: משתנים בשני אגפים, העברת איברים ובידוד y.'
    },
    {
      id:'U12-P22-Q2',family:'U12,U05',level:5,responseSpace:'full-work',
      stem:'סדרו את `2x+y=5x-2y+9` לצורה `y=mx+b`. הקפידו לכנס תחילה את איברי `y` ואת איברי `x`.',
      answerLabel:'כינוס וסידור:',
      sourceRefs:['SOURCE_OF_TRUTH.md#8.22','data/unordered-equation-family-map.md#U12'],
      adaptation:'וריאציה של U12 עם x ו-y בשני אגפים הדורשת כינוס לפני בידוד.'
    },
    {
      id:'U12-P22-Q3',family:'U12,U05',level:6,responseSpace:'full-work',
      stem:'סדרו את `4x+2y=2x-y+6` לצורה `y=mx+b`. כתבו את השיפוע כשבר מצומצם.',
      answerLabel:'דרך מלאה:',
      sourceRefs:['SOURCE_OF_TRUTH.md#8.22','data/unordered-equation-family-map.md#U12'],
      adaptation:'אותה משפחה עם מקדמים שמובילים לשיפוע שברי מצומצם.'
    },
    {
      id:'U12-P22-Q4',family:'U12,U06,U07',level:7,responseSpace:'mixed',
      stem:'נתונה המשוואה `3x-2y=x+y-9`. סדרו אותה, ואז השתמשו בתוצאה כדי לתאר את הגרף.',
      subparts:[
        {label:'א.',text:'המשוואה המסודרת:',responseSpace:'equation'},
        {label:'ב.',text:'הגרף עולה / יורד / קבוע?',responseSpace:'short'},
        {label:'ג.',text:'נקודת החיתוך עם ציר `y`:',responseSpace:'equation'},
        {label:'ד.',text:'נמקו כיצד הסימן של `m` וערך `b` קובעים את שתי התשובות.',responseSpace:'lines-2'}
      ],
      sourceRefs:['SOURCE_OF_TRUTH.md#8.22','SOURCE_OF_TRUTH.md#8.3-8.5','SOURCE_OF_TRUTH.md#8.11','data/unordered-equation-family-map.md#U12'],
      adaptation:'אחרי סידור משפחת U12 נקראים מן המשוואה הכיוון והחיתוך עם ציר y.'
    },
    {
      id:'U12-P22-Q5',family:'U12,U05',level:7,responseSpace:'lines-2',
      stem:'סדרו את המשוואה `5x-3y=2x+y-8` לצורה `y=mx+b`, וכתבו את `m` ואת `b`. הקפידו לכנס תחילה את איברי `x` ואת איברי `y`.',
      sourceRef:'razpages:bank.json unordered — x ו-y בשני אגפים, סידור וזיהוי פרמטרים; מספרים שונו',
      adaptation:'וריאציה נוספת עם משתנים בשני אגפים ושיפוע שברי; מספרים שונו.'
    }
  ]
};
