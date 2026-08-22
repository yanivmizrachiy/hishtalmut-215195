export const page={
  page:42,
  chapter:16,
  kicker:'פרק 16 · ישרים מקבילים זה לזה',
  title:'אותו שיפוע — ישרים מקבילים',
  subtitle:'זיהוי → השוואת m ו-b → גרף → בניית ישר מקביל · רמות 2–5',
  rule:'לשני ישרים מקבילים שונים יש אותו שיפוע `m` וערכי `b` שונים. אם גם `m` וגם `b` שווים — זו אותה משוואת ישר, לא שני ישרים שונים.',
  sourceRefs:['razpages:עמוד-438.html','razpages:עמוד-439.html','razpages:עמוד-440.html','data/parallel-lines-family-map.md'],
  questions:[
    {
      id:'R01-P42-Q1',family:'R01',level:2,responseSpace:'choice-mark',
      stem:'איזה זוג ישרים מקביל? סמנו אפשרות אחת.',
      choices:['`y=2x+1` ו־`y=2x-3`','`y=2x+1` ו־`y=-2x+1`','`y=2x-3` ו־`y=-2x+1`'],
      sourceRef:'razpages:עמוד-438.html — השוואת ישרים בעלי שיפועים זהים וחיתוכי y שונים',
      adaptation:'המשימה צומצמה לזיהוי ישיר ראשון של שיפוע שווה לפני מעבר למשפחת גרפים.'
    },
    {
      id:'R02-P42-Q2',family:'R02',level:3,responseSpace:'mixed',
      stem:'נתונות `y=-2x+3`, `y=-2x+1`, `y=-2x-1`.',
      subparts:[
        {text:'מה זהה בשלוש המשוואות?',responseSpace:'equation'},
        {text:'מה שונה בשלוש המשוואות?',responseSpace:'equation'},
        {text:'מה ניתן להסיק על שלושת הגרפים?',responseSpace:'lines-2'}
      ],
      sourceRef:'razpages:עמוד-440.html — y=-2x+3, y=-2x+1, y=-2x-1 והשוואת הזהה והשונה',
      adaptation:'נשמרו שלוש המשוואות המקוריות; ההנחיה פוצלה לשלושה צעדים קצרים.'
    },
    {
      id:'R02-P42-Q3',family:'R02',level:4,responseSpace:'mixed',
      stem:'במערכת הצירים מסורטטים שלושה ישרים בעלי שיפוע `2`. נקודות החיתוך שלהם עם ציר `y` הן `A=(0,4)`, `B=(0,1)`, `C=(0,-1)`.',
      graph:{
        xMin:-2,xMax:4,yMin:-3,yMax:8,xTick:1,yTick:1,showCoordinates:false,
        ariaLabel:'שלושה ישרים מקבילים בשיפוע שתיים החותכים את ציר y בארבע, אחת ומינוס אחת',
        lines:[{through:[[0,4],[1,6]]},{through:[[0,1],[1,3]]},{through:[[0,-1],[1,1]]}],
        points:[{x:0,y:4,label:'A'},{x:0,y:1,label:'B'},{x:0,y:-1,label:'C'}]
      },
      subparts:[
        {text:'כתבו את משוואת הישר שעובר דרך `A`.',responseSpace:'equation'},
        {text:'כתבו את משוואת הישר שעובר דרך `B`.',responseSpace:'equation'},
        {text:'כתבו את משוואת הישר שעובר דרך `C`.',responseSpace:'equation'}
      ],
      sourceRef:'razpages:עמוד-438.html — שלושה ישרים מקבילים עם חיתוכי y: 4, 1, -1 ושיפוע משותף 2',
      adaptation:'גרף המקור שוחזר במנוע SVG האחיד; השיפוע וחיתוכי הצירים נשמרו.'
    },
    {
      id:'R03-P42-Q4',family:'R03',level:5,responseSpace:'full-work',
      stem:'מצאו את משוואת הישר העובר דרך `(4,5)` ומקביל לישר `y=5x`. הציגו כיצד השתמשתם בשיפוע המשותף כדי למצוא את `b`.',
      answerLabel:'חישוב ומשוואה:',
      sourceRef:'razpages:עמוד-440.html — הישר המקווקו דרך (4,5) המקביל ל-y=5x',
      adaptation:'נשמרו הנקודה והשיפוע מן המקור; השרטוט הוחלף בחישוב מדורג כדי לחזק בניית משוואה.',
      mathModel:{standard:{A:-5,B:1,C:-15},expected:{m:5,b:-15,xIntercept:3},probes:[
        {point:[4,5],onLine:true},{point:[0,-15],onLine:true},{point:[3,0],onLine:true}
      ]}
    }
  ]
};
