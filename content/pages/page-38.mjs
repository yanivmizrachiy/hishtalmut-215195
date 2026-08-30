export const page={
  page:38,
  chapter:13,
  kicker:'פרק 13 · מציאת משוואת ישר על ידי שתי נקודות',
  title:'משוואת ישר לפי שתי נקודות',
  subtitle:'שאלות מקור אמיתיות · שלמים → שליליים → שברים → עשרוניים',
  rule:'כאשר נתונות שתי נקודות, מחשבים תחילה את השיפוע `m=(y₂-y₁)/(x₂-x₁)`. לאחר מכן מציבים אחת מן הנקודות ב־`y=mx+b` ומוצאים את `b` וכותבים את משוואת הישר.',
  sourceRefs:['razpages:עמוד-453.html'],
  questions:[
    {
      id:'Q07-P38-Q1',family:'Q07,S11',level:4,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר העובר דרך הנקודות `(4,6)` ו־`(1,3)`.',
      sourceRef:'razpages:עמוד-453.html — תרגיל א: (4,6), (1,3)',
      adaptation:'אחידות ניסוח וכתיב מתמטי בלבד; הנתונים נשמרו',
      mathModel:{standard:{A:-1,B:1,C:2},expected:{m:1,b:2,xIntercept:-2},probes:[{point:[4,6],onLine:true},{point:[1,3],onLine:true}]}
    },
    {
      id:'Q07-P38-Q2',family:'Q07,S11',level:5,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר העובר דרך הנקודות `(7,-2)` ו־`(-2,7)`.',
      sourceRef:'razpages:עמוד-453.html — תרגיל ו: (7,-2), (-2,7)',
      adaptation:'אחידות ניסוח וכיוון מתמטי בלבד; הנתונים נשמרו',
      mathModel:{standard:{A:1,B:1,C:5},expected:{m:-1,b:5,xIntercept:5},probes:[{point:[7,-2],onLine:true},{point:[-2,7],onLine:true}]}
    },
    {
      id:'Q07-P38-Q3',family:'Q07,S11',level:6,responseSpace:'lines-4',
      stem:'מצאו את משוואת הישר העובר דרך הנקודות `(5,5.5)` ו־`(1,3.5)`.',
      sourceRef:'razpages:עמוד-453.html — תרגיל ד: (5,5.5), (1,3.5)',
      adaptation:'אחידות ניסוח בלבד; הנתונים העשרוניים נשמרו',
      mathModel:{standard:{A:-1,B:2,C:6},expected:{m:[1,2],b:3,xIntercept:-6},probes:[{point:[5,[11,2]],onLine:true},{point:[1,[7,2]],onLine:true}]}
    },
    {
      id:'Q07-P38-Q4',family:'Q07,S11',level:7,responseSpace:'lines-4',
      stem:'מצאו את משוואת הישר העובר דרך הנקודות `(-0.5,0)` ו־`(0,-1)`.',
      sourceRef:'razpages:עמוד-453.html — תרגיל י: (-0.5,0), (0,-1)',
      adaptation:'אחידות ניסוח וכיוון מתמטי בלבד; הנתונים נשמרו',
      mathModel:{standard:{A:2,B:1,C:-1},expected:{m:-2,b:-1,xIntercept:[-1,2]},probes:[{point:[[-1,2],0],onLine:true},{point:[0,-1],onLine:true}]}
    },
    {
      id:'Q07-X04-P38-Q5',family:'Q07,X04',level:7,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר העובר דרך `(3,5)` ו־`(1,-1)`, ואת נקודות החיתוך שלו עם שני הצירים. הציגו דרך.',
      sourceRef:'razpages:bank.json equation-two-points f4-p083-q121 — משוואת ישר דרך שתי נקודות וחיתוכיו עם הצירים; מספרים שונו',
      adaptation:'מרחיב משתי נקודות אל מציאת חיתוכים עם הצירים; מספרים שונו.',
      mathModel:{standard:{A:-3,B:1,C:-4},expected:{m:3,b:-4,xIntercept:[4,3]},probes:[{point:[3,5],onLine:true},{point:[1,-1],onLine:true},{point:[0,-4],onLine:true}]}
    },
    {
      id:'Q07-P38-Q7',family:'Q07',level:8,responseSpace:'geometry-work',
      stem:'קדקודי משולש `ABC` הם `A(2,8)`, `B(5,-4)`, `C(-3,-12)`. מצאו את משוואות שלוש צלעות המשולש: `AB`, `BC`, `AC`. הציגו דרך.',
      subparts:[
        {text:'מהו שיפוע הצלע `AB`?',responseSpace:'short'},
        {text:'מהו שיפוע הצלע `BC`?',responseSpace:'short'},
        {text:'מהו שיפוע הצלע `AC`?',responseSpace:'short'}
      ],
      sourceRef:'razpages:bank.json equation-two-points f4-p082-q115 — משוואות צלעות משולש לפי קדקודים; מספרים שונו',
      adaptation:'משימה רב־שלבית: שלוש משוואות ישר לפי זוגות קדקודים; מספרים שונו.'
    }
  ]
};
