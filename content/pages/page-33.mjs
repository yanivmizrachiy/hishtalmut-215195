export const page={
  page:33,
  chapter:10,
  kicker:'פרק 10 · שרטוט ישר ופונקציה קווית',
  title:'שרטוט ישר לפי נקודה ושיפוע',
  subtitle:'נקודה → מדרגת שיפוע → נקודה נוספת → ישר · רמות 3–4',
  rule:'כדי לשרטט ישר כאשר נתונים נקודה ושיפוע, מתחילים בנקודה הנתונה. אם היחס בין השינוי ב־`y` לשינוי ב־`x`, בוחרים שינוי נוח ב־`x`, מחשבים את השינוי המתאים ב־`y`, מסמנים נקודה נוספת ומעבירים ישר דרך שתי הנקודות.',
  sourceRefs:['razpages:עמוד-449.html','data/graphing-family-map.md#D03'],
  questions:[
    {
      id:'D03-P33-Q1',family:'D03,S09',level:3,responseSpace:'mixed',
      stem:'נתונה הנקודה `P(0,1)` והשיפוע `m=2`. בנו נקודה נוספת בעזרת מדרגת שיפוע, כתבו אותה ושרטטו את הישר.',
      graph:{xMin:-3,xMax:4,yMin:-4,yMax:6,showCoordinates:false,points:[{x:0,y:1,label:'P'}],ariaLabel:'מערכת צירים ובה הנקודה P אפס אחד לשרטוט ישר ששיפועו שתיים'},
      subparts:[
        {label:'א.',text:'אם מגדילים את `x` ב־`1`, בכמה ישתנה `y`?',responseSpace:'short'},
        {label:'ב.',text:'כתבו נקודה נוספת על הישר:',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:-2,B:1,C:1},expected:{m:2,b:1,xIntercept:[-1,2]},probes:[{point:[0,1],onLine:true},{point:[1,3],onLine:true}]}
    },
    {
      id:'D03-P33-Q2',family:'D03,S09',level:4,responseSpace:'mixed',
      stem:'נתונה הנקודה `Q(2,3)` והשיפוע `m=-1`. השתמשו בשיפוע כדי לבנות נקודה נוספת, ואז שרטטו את הישר.',
      graph:{xMin:-2,xMax:6,yMin:-2,yMax:7,showCoordinates:false,points:[{x:2,y:3,label:'Q'}],ariaLabel:'מערכת צירים ובה הנקודה Q שתיים שלוש לשרטוט ישר ששיפועו מינוס אחת'},
      subparts:[
        {label:'א.',text:'כאשר `x` גדל ב־`1`, מה השינוי ב־`y`?',responseSpace:'short'},
        {label:'ב.',text:'כתבו נקודה נוספת מתאימה:',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:1,B:1,C:5},expected:{m:-1,b:5,xIntercept:5},probes:[{point:[2,3],onLine:true},{point:[3,2],onLine:true}]}
    },
    {
      id:'D03-P33-Q3',family:'D03,Q08',level:5,responseSpace:'mixed',
      stem:'נתונים הנקודה `(0,-2)` והשיפוע `m=3`.',
      subparts:[
        {label:'א.',text:'בעזרת מדרגת שיפוע (הגדילו את `x` ב־`1`) מצאו נקודה נוספת על הישר.',responseSpace:'equation'},
        {label:'ב.',text:'כתבו את משוואת הישר בצורה `y=mx+b`.',responseSpace:'equation'},
        {label:'ג.',text:'האם הנקודה `(2,4)` ממוקמת על הישר? סמנו כן / לא',responseSpace:'choice-mark',answerCount:2},
        {label:'ד.',text:'כאשר `x` גדל ב־`2`, בכמה גדל `y`?',responseSpace:'short'},
        {label:'ה.',text:'מהי נקודת החיתוך של הישר עם ציר `y`?',responseSpace:'short'}
      ],
      sourceRef:'razpages:עמוד-449.html — בניית נקודה נוספת ומשוואת הישר מנקודה ושיפוע; מספרים שונו',
      adaptation:'מוסיף מעבר ממדרגת שיפוע אל כתיבת משוואת הישר; מספרים שונו.',
      mathModel:{standard:{A:-3,B:1,C:-2},expected:{m:3,b:-2,xIntercept:[2,3]},probes:[{point:[0,-2],onLine:true},{point:[1,1],onLine:true}]}
    }
  ]
};
