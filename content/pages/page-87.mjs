export const page={
  page:87,
  chapter:27,
  kicker:'השלמת מקור · משוואות ישרים',
  title:'משוואת ישר',
  subtitle:'שיפוע ונקודה · שתי נקודות · ישר אנכי',
  rule:'בישר שאינו אנכי אפשר להשתמש ב־`y=mx+b`: מציבים שיפוע ונקודה או מחשבים שיפוע משתי נקודות. אם לשתי הנקודות אותו ערך `x`, הישר אנכי ומשוואתו היא `x=c`.',
  sourceRefs:['razpages:עמוד-450.html','razpages:עמוד-455.html'],
  questions:[
    {
      id:'RZ450-Q4A-P87-Q1',family:'Q04,E03',level:4,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר העובר דרך `(0,12)` ושיפועו `-\\frac{3}{14}`.',
      sourceRef:'razpages:עמוד-450.html — שאלה 4 סעיף א: (0,12), m=-3/14',
      adaptation:'אחידות ניסוח וכתיב מתמטי בלבד; הנתונים נשמרו בדיוק.',
      mathModel:{standard:{A:3,B:14,C:168},expected:{m:[-3,14],b:12,xIntercept:56},probes:[{point:[0,12],onLine:true}]}
    },
    {
      id:'RZ450-Q4B-P87-Q2',family:'Q04,E03',level:4,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר העובר דרך `(0,-17)` ושיפועו `1`.',
      sourceRef:'razpages:עמוד-450.html — שאלה 4 סעיף ב: (0,-17), m=1',
      adaptation:'אחידות ניסוח בלבד; הנתונים נשמרו בדיוק.',
      mathModel:{standard:{A:-1,B:1,C:-17},expected:{m:1,b:-17,xIntercept:17},probes:[{point:[0,-17],onLine:true}]}
    },
    {
      id:'RZ450-Q4C-P87-Q3',family:'Q04,E03',level:5,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר העובר דרך `(2,2)` ושיפועו `2`.',
      sourceRef:'razpages:עמוד-450.html — שאלה 4 סעיף ג: (2,2), m=2',
      adaptation:'אחידות ניסוח בלבד; הנתונים נשמרו בדיוק.',
      mathModel:{standard:{A:-2,B:1,C:-2},expected:{m:2,b:-2,xIntercept:1},probes:[{point:[2,2],onLine:true}]}
    },
    {
      id:'RZ455-Q3-P87-Q4',family:'Q07',level:6,responseSpace:'lines-4',
      stem:'מצאו את משוואת הישר העובר דרך הנקודות `A(2,-3)` ו־`B(4,11)`. הציגו חישוב שיפוע ומציאת `b`.',
      sourceRef:'razpages:עמוד-455.html — שאלה 3: A(2,-3), B(4,11)',
      adaptation:'נוספה דרישה להציג את שלבי החישוב; שתי הנקודות והמשימה נשמרו.',
      mathModel:{standard:{A:-7,B:1,C:-17},expected:{m:7,b:-17,xIntercept:[17,7]},probes:[{point:[2,-3],onLine:true},{point:[4,11],onLine:true}]}
    },
    {
      id:'RZ455-Q4-P87-Q5',family:'Q07',level:6,responseSpace:'lines-4',
      stem:'מצאו את משוואת הישר העובר דרך הנקודות `A(7,-12)` ו־`B(6,-11)`. הציגו דרך.',
      sourceRef:'razpages:עמוד-455.html — שאלה 4: A(7,-12), B(6,-11)',
      adaptation:'אחידות ניסוח בלבד; שתי הנקודות והמשימה נשמרו.',
      mathModel:{standard:{A:1,B:1,C:-5},expected:{m:-1,b:-5,xIntercept:-5},probes:[{point:[7,-12],onLine:true},{point:[6,-11],onLine:true}]}
    },
    {
      id:'RZ455-Q5-P87-Q6',family:'C06,Q07',level:6,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר העובר דרך `(4,2)` ו־`(4,-3)`. הסבירו מדוע הוא אינו מהצורה `y=mx+b`.',
      sourceRef:'razpages:עמוד-455.html — שאלה 5: (4,2), (4,-3)',
      adaptation:'תוקנה צורת התשובה: הישר אנכי ולכן משוואתו x=4; נוסף נימוק קצר.',
      mathModel:{standard:{A:1,B:0,C:4},expected:{xIntercept:4},probes:[{point:[4,2],onLine:true},{point:[4,-3],onLine:true}]}
    }
  ]
};
