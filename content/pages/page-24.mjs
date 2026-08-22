export const page={
  page:24,
  chapter:8,
  kicker:'פרק 8 · משוואה לא מסודרת',
  title:'מקדמים שליליים ושברים',
  subtitle:'סימנים → שברים ב-x → שבר במקדם של y → שילוב · רמות 5–7',
  rule:'כאשר יש מקדמים שליליים או שבריים, סדר הפעולות אינו משתנה: מכנסים לפי הצורך, מבודדים את `y`, ורק לאחר קבלת `y=mx+b` קוראים את `m` ואת `b`. חלוקה במספר שלילי משנה את הסימן של כל איברי האגף.',
  sourceRefs:['SOURCE_OF_TRUTH.md#8.2','razpages:עמוד-431.html'],
  questions:[
    {
      id:'U14-P24-Q1',family:'U14,U03,U05',level:5,responseSpace:'full-work',
      stem:'סדרו את `2x-4y=8` לצורה `y=mx+b`, ואז כתבו את `m` ואת `b`.',
      answerLabel:'דרך מלאה ופרמטרים:',
      mathModel:{standard:{A:2,B:-4,C:8},expected:{m:[1,2],b:-2,xIntercept:4}}
    },
    {
      id:'U14-P24-Q2',family:'U14,U02,U05',level:5,responseSpace:'full-work',
      stem:'סדרו את `\\frac{1}{2}x+y=3` לצורה `y=mx+b`. שימו לב שהמקדם השברי נמצא ליד `x`.',
      answerLabel:'סידור ופרמטרים:',
      mathModel:{standard:{A:[1,2],B:1,C:3},expected:{m:[-1,2],b:3,xIntercept:6}}
    },
    {
      id:'U14-P24-Q3',family:'U14,U03,U06',level:6,responseSpace:'mixed',
      stem:'נתונה המשוואה `3x-\\frac{1}{2}y=5`. סדרו אותה ורק אחר כך תארו את הישר.',
      subparts:[
        {label:'א.',text:'המשוואה המסודרת:',responseSpace:'equation'},
        {label:'ב.',text:'`m=`',responseSpace:'short'},
        {label:'ג.',text:'`b=`',responseSpace:'short'},
        {label:'ד.',text:'הגרף עולה / יורד / קבוע?',responseSpace:'short'}
      ],
      mathModel:{standard:{A:3,B:[-1,2],C:5},expected:{m:6,b:-10,xIntercept:[5,3]}}
    },
    {
      id:'U14-P24-Q4',family:'U14,U03,U05,U08',level:7,responseSpace:'full-work',
      stem:'סדרו את `-\\frac{3}{4}x-2y=6`. מצאו את `m`, את `b` ואת נקודת החיתוך עם ציר `x`.',
      answerLabel:'דרך, פרמטרים וחיתוך:',
      mathModel:{standard:{A:[-3,4],B:-2,C:6},expected:{m:[-3,8],b:-3,xIntercept:-8}}
    }
  ]
};
