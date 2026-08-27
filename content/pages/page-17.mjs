export const page={
  page:17,
  chapter:8,
  kicker:'פרק 8 · משוואה לא מסודרת',
  title:'מסדרים — ואז קוראים את המידע',
  subtitle:'שיפוע → m,b → כיוון → חיתוך עם ציר y · רמות 2–5',
  rule:'כל עוד המשוואה אינה בצורה `y=mx+b`, אסור לקרוא ממנה ישירות את `m` או את `b`. קודם מבודדים את `y`; אחר כך מפרשים את המשוואה המסודרת.',
  sourceRefs:['SOURCE_OF_TRUTH.md#8.2','SOURCE_OF_TRUTH.md#9','razpages:עמוד-430.html','razpages:עמוד-431.html'],
  questions:[
    {
      id:'U04-P17-Q1',family:'U02,U04',level:2,responseSpace:'mixed',
      stem:'נתונה המשוואה `5x+y=3`. סדרו אותה ורשמו רק את השיפוע.',
      subparts:[
        {label:'א.',text:'`y=`',responseSpace:'equation'},
        {label:'ב.',text:'`m=`',responseSpace:'short'}
      ]
    },
    {
      id:'U05-P17-Q2',family:'U03,U05',level:3,responseSpace:'full-work',
      stem:'נתונה המשוואה `2x+3y=6`. סדרו לצורה `y=mx+b`, ואז מצאו את `m` ואת `b`.',
      answerLabel:'דרך, משוואה מסודרת ופרמטרים:'
    },
    {
      id:'U06-P17-Q3',family:'U03,U06',level:4,responseSpace:'mixed',
      stem:'נתונה המשוואה `-4x+2y=10`. סדרו אותה, ורק לאחר מכן קבעו אם הגרף עולה, יורד או קבוע.',
      subparts:[
        {label:'א.',text:'המשוואה המסודרת:',responseSpace:'equation'},
        {label:'ב.',text:'סוג הגרף:',responseSpace:'short'},
        {label:'ג.',text:'נמקו לפי הסימן של `m`.',responseSpace:'lines-2'}
      ]
    },
    {
      id:'U07-P17-Q4',family:'U03,U07',level:5,responseSpace:'full-work',
      stem:'נתונה המשוואה `2x+4y=-8`. סדרו אותה ומצאו את נקודת החיתוך עם ציר `y`. הסבירו כיצד קראתם את הנקודה מן המשוואה המסודרת.',
      answerLabel:'דרך ונקודת חיתוך:'
    },
    {
      id:'U05-P17-Q5',family:'U03,U05',level:6,responseSpace:'lines-2',
      stem:'סדרו את המשוואה `4x-2y=10` לצורה `y=mx+b`, ומצאו את `m` ואת `b`. הציגו דרך.',
      answerLabel:'משוואה מסודרת, m ו-b:',
      sourceRef:'razpages:bank.json unordered — סידור משוואה עם מקדם שלילי ל-y וזיהוי פרמטרים; מספרים שונו',
      adaptation:'בידוד y כאשר מקדם y שלילי; מספרים שונו.'
    },
    {
      id:'U03-R02-P17-Q6',family:'U03,R02',level:7,responseSpace:'lines-2',
      stem:'סדרו את המשוואה `3x+2y=6` לצורה `y=mx+b`, ובדקו אם הישר שלה מקביל לישר `y=-1.5x+4`. נמקו.',
      answerLabel:'משוואה מסודרת ומסקנה:',
      sourceRef:'razpages:bank.json parallel-lines/unordered — סידור משוואה ובדיקת מקבילוּת לישר נתון; מספרים שונו',
      adaptation:'מחבר סידור משוואה לא מסודרת עם בדיקת מקבילוּת; מספרים שונו.'
    }
  ]
};
