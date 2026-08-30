export const page={
  page:25,
  chapter:8,
  kicker:'פרק 8 · משוואה לא מסודרת',
  title:'משוואה לא מסודרת',
  subtitle:'בודקים טענות על m ו-b רק אחרי y=mx+b · רמות 5–7',
  rule:'במשוואה שאינה מסודרת לא ניתן לזהות את `m` ואת `b` לפי מיקומם בלבד. תחילה מסדרים את המשוואה לצורה `y=mx+b`, ורק לאחר מכן קובעים אם הטענה נכונה או אינה נכונה.',
  sourceRefs:['SOURCE_OF_TRUTH.md#8.2','SOURCE_OF_TRUTH.md#9','razpages:עמוד-431.html'],
  questions:[
    {
      id:'U15-P25-Q1',family:'U15,U03,U04',level:5,responseSpace:'lines-2',
      stem:'אמת או שקר? במשוואה `2x+4y=8` השיפוע הוא `m=2`, מפני שזהו המקדם של `x`. סדרו את המשוואה ונמקו.',
      mathModel:{standard:{A:2,B:4,C:8},expected:{m:[-1,2],b:2,xIntercept:4}}
    },
    {
      id:'U15-P25-Q2',family:'U15,U03,U05',level:5,responseSpace:'lines-2',
      stem:'אמת או שקר? במשוואה `3y=9x+6` מתקבל `b=6`. סדרו את המשוואה ונמקו.',
      mathModel:{standard:{A:-9,B:3,C:6},expected:{m:3,b:2,xIntercept:[-2,3]}}
    },
    {
      id:'U15-P25-Q3',family:'U15,U02,U05,U06',level:6,responseSpace:'mixed',
      stem:'אמת או שקר? מן המשוואה `-2x+y=5` אפשר להסיק שהישר עולה, `m=2` ו-`b=5`.',
      subparts:[
        {text:'כתבו את המשוואה המסודרת.',responseSpace:'equation'},
        {text:'האם הטענה נכונה או שגויה?',responseSpace:'short'},
        {text:'נמקו בקצרה.',responseSpace:'lines-2'}
      ],
      mathModel:{standard:{A:-2,B:1,C:5},expected:{m:2,b:5,xIntercept:[-5,2]}}
    },
    {
      id:'U15-P25-Q4',family:'U15,U03,U05,U06,U07',level:7,responseSpace:'full-work',
      stem:'אמת או שקר? עבור `6x-3y=9` מתקבלים `m=2`, `b=-3`, ולכן הישר עולה וחוצה את ציר `y` בנקודה `(0,-3)`. בדקו כל חלק בטענה רק לאחר סידור מלא.',
      mathModel:{standard:{A:6,B:-3,C:9},expected:{m:2,b:-3,xIntercept:[3,2]}}
    },
    {
      id:'U15-P25-Q5',family:'U15,U03,U05',level:7,responseSpace:'lines-2',
      stem:'אמת או שקר? במשוואה `4x-2y=10` מתקבלים `m=4` ו-`b=10`. סדרו את המשוואה ונמקו את תשובתכם.',
      mathModel:{standard:{A:4,B:-2,C:10},expected:{m:2,b:-5,xIntercept:[5,2]}},
      sourceRef:'razpages:bank.json unordered — טענת אמת/שקר על m,b לפני סידור; מספרים שונו',
      adaptation:'טענה שגויה שמקורה בקריאה ישירה לפני סידור; מספרים שונו.'
    },
    {
      id:'U15-R02-P25-Q6',family:'U15,U03,R02',level:8,responseSpace:'lines-2',
      stem:'אמת או שקר? הישרים `2x+y=5` ו-`4x+2y=8` מקבילים. סדרו את שתי המשוואות ונמקו.',
      sourceRef:'razpages:bank.json parallel-lines/unordered — טענת מקבילוּת הדורשת סידור שתי משוואות; מספרים שונו',
      adaptation:'בדיקת טענת מקבילוּת רק לאחר סידור שתי המשוואות; מספרים שונו.'
    }
  ]
};
