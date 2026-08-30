export const page={
  page:85,
  chapter:27,
  kicker:'השלמת מקור · משוואות ישרים במקרים מיוחדים',
  title:'משוואת ישר — אופקי, אנכי ומקביל',
  subtitle:'שיפוע ונקודה · שתי נקודות · ישרים מיוחדים · מקבילים',
  rule:'לפני שמחשבים, מזהים את סוג הישר. ישר אופקי הוא `y=c`, ישר אנכי הוא `x=c`, ובישרים שאינם אנכיים אפשר להשתמש בשיפוע ובנקודה כדי למצוא את `b`.',
  sourceRefs:['razpages:עמוד-451.html','razpages:עמוד-452.html','razpages:עמוד-453.html','razpages:עמוד-454.html'],
  questions:[
    {
      id:'RZ451-Q2-P85-Q1',family:'Q04,E03',level:3,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר ששיפועו `3` ועובר דרך הנקודה `(1,7)`.',
      sourceRef:'razpages:עמוד-451.html — שאלה 2: שיפוע 3 והנקודה (1,7)',
      adaptation:'הוסרה הפניה להדרכה קודמת; הנתונים והמשימה המתמטית נשמרו בדיוק.',
      mathModel:{standard:{A:-3,B:1,C:4},expected:{m:3,b:4,xIntercept:[-4,3]},probes:[{point:[1,7],onLine:true}]}
    },
    {
      id:'RZ452-Q1-P85-Q2',family:'M08,Q07',level:3,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר העובר דרך הנקודות `(-2,7)` ו־`(0,7)`.',
      sourceRef:'razpages:עמוד-452.html — שאלה 1: הנקודות (-2,7) ו-(0,7)',
      adaptation:'אחידות ניסוח וכתיב מתמטי בלבד; שתי הנקודות נשמרו.',
      mathModel:{standard:{A:0,B:1,C:7},expected:{m:0,b:7},probes:[{point:[-2,7],onLine:true},{point:[0,7],onLine:true}]}
    },
    {
      id:'RZ453-Q2-P85-Q3',family:'Q07,I01,I02',level:5,responseSpace:'mixed',
      stem:'נתונות הנקודות `A(-2,-7)` ו־`B(-3,-12)`.',
      subparts:[
        {text:'מצאו את משוואת הישר העובר דרך `A` ו־`B`.',responseSpace:'lines-2'},
        {text:'מצאו את נקודת החיתוך עם ציר `y`.',responseSpace:'equation'},
        {text:'מצאו את נקודת החיתוך עם ציר `x`.',responseSpace:'equation'},
        {text:'האם הנקודה `(1,8)` ממוקמת על הישר העובר דרך `A` ו־`B`? סמנו כן / לא',responseSpace:'choice-mark',answerCount:2},
        {text:'כתבו משוואה של ישר המקביל לישר העובר דרך `A` ו־`B` וחותך את ציר `y` בנקודה `(0,-2)`.',responseSpace:'equation'}
      ],
      sourceRef:'razpages:עמוד-453.html — שאלה 2: A(-2,-7), B(-3,-12), משוואה וחיתוכי הצירים',
      adaptation:'המקור מבקש חיתוך עם הצירים; הוא פורק במפורש לחיתוך עם כל ציר, ללא שינוי בנתונים.',
      mathModel:{standard:{A:-5,B:1,C:3},expected:{m:5,b:3,xIntercept:[-3,5]},probes:[{point:[-2,-7],onLine:true},{point:[-3,-12],onLine:true},{point:[0,3],onLine:true}]}
    },
    {
      id:'RZ453-Q3-P85-Q4',family:'C06,Q07',level:5,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר העובר דרך הנקודות `(5,4)` ו־`(5,-7)`. האם אפשר לכתוב אותו בצורה `y=mx+b`? נמקו.',
      sourceRef:'razpages:עמוד-453.html — שאלה 3: הנקודות (5,4) ו-(5,-7)',
      adaptation:'תוקנה צורת התשובה של המקור: זהו ישר אנכי ולכן המשוואה היא מהצורה x=c; נוסף נימוק קצר.',
      mathModel:{standard:{A:1,B:0,C:5},expected:{xIntercept:5},probes:[{point:[5,4],onLine:true},{point:[5,-7],onLine:true}]}
    },
    {
      id:'RZ454-Q1-P85-Q5',family:'R07,Q07,Q04',level:6,responseSpace:'mixed',
      stem:'ישר מבוקש עובר דרך הנקודה `(5,3)` ומקביל לישר העובר דרך `(4,2)` ו־`(6.5,3)`.',
      subparts:[
        {text:'חשבו את שיפוע הישר העובר דרך `(4,2)` ו־`(6.5,3)`.',responseSpace:'short'},
        {text:'מהו שיפוע הישר המבוקש? נמקו.',responseSpace:'lines-2'},
        {text:'כתבו את משוואת הישר המבוקש.',responseSpace:'equation'},
        {text:'מצאו את נקודת החיתוך של הישר המבוקש עם ציר `y`.',responseSpace:'equation'},
        {text:'מצאו את נקודת החיתוך של הישר המבוקש עם ציר `x`.',responseSpace:'equation'}
      ],
      sourceRef:'razpages:עמוד-454.html — שאלה 1: ישר דרך (5,3) המקביל לישר דרך (4,2) ו-(6.5,3)',
      adaptation:'אחידות ניסוח בלבד; הנקודות, מבנה שלושת הסעיפים והמשימה נשמרו.',
      mathModel:{standard:{A:-2,B:5,C:5},expected:{m:[2,5],b:1,xIntercept:[-5,2]},probes:[{point:[5,3],onLine:true}]}
    }
  ]
};
