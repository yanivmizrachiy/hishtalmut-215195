export const page={
  page:84,
  chapter:27,
  kicker:'השלמת מקור · משוואת ישר לפי שיפוע ונקודה',
  title:'משוואת ישר — תרגילי מקור משלימים',
  subtitle:'חיתוך עם ציר → נקודה → שיפוע → משוואה',
  rule:'כאשר נקודת העיגון מתקבלת מחיתוך של ישר נתון עם אחד הצירים, מוצאים קודם את נקודת החיתוך. אחר כך מציבים את הנקודה ואת השיפוע ב־`y=mx+b` ומוצאים את `b`.',
  sourceRefs:['razpages:עמוד-448.html','razpages:עמוד-449.html','razpages:עמוד-450.html'],
  questions:[
    {
      id:'RZ448-Q1-P84-Q1',family:'Q05,E03',level:4,responseSpace:'lines-2',
      stem:'מצאו תחילה היכן הישר `y=5x-1` פוגש את ציר `y`. דרך נקודה זו עובר ישר ששיפועו `-4`; מצאו את משוואתו.',
      sourceRef:'razpages:עמוד-448.html — שאלה 1: y=5x-1, חיתוך עם ציר y, שיפוע -4',
      adaptation:'אחידות ניסוח וכתיב מתמטי בלבד; כל נתוני המקור נשמרו.',
      mathModel:{standard:{A:4,B:1,C:-1},expected:{m:-4,b:-1,xIntercept:[-1,4]},probes:[{point:[0,-1],onLine:true}]}
    },
    {
      id:'RZ449-Q3-P84-Q2',family:'Q06,E03',level:4,responseSpace:'lines-2',
      stem:'מצאו תחילה היכן הישר `y=4x+4` פוגש את ציר `x`. דרך נקודה זו עובר ישר ששיפועו `2`; מצאו את משוואתו.',
      sourceRef:'razpages:עמוד-449.html — שאלה 3: y=4x+4, חיתוך עם ציר x, שיפוע 2',
      adaptation:'אחידות ניסוח וכתיב מתמטי בלבד; כל נתוני המקור נשמרו.',
      mathModel:{standard:{A:-2,B:1,C:2},expected:{m:2,b:2,xIntercept:-1},probes:[{point:[-1,0],onLine:true}]}
    },
    {
      id:'RZ449-Q4-P84-Q3',family:'Q04,E03',level:4,responseSpace:'lines-2',
      stem:'מהו הייצוג האלגברי של הפונקציה הקווית ששיפוע הגרף שלה הוא `-4`, והגרף עובר דרך הנקודה `(1,6)`?',
      sourceRef:'razpages:עמוד-449.html — שאלה 4: שיפוע -4 והנקודה (1,6)',
      adaptation:'אחידות כיוון וסימון מתמטי בלבד; הנתונים והמשימה נשמרו.',
      mathModel:{standard:{A:4,B:1,C:10},expected:{m:-4,b:10,xIntercept:[5,2]},probes:[{point:[1,6],onLine:true}]}
    },
    {
      id:'RZ450-Q2-P84-Q4',family:'Q06,E03',level:5,responseSpace:'lines-2',
      stem:'מצאו תחילה היכן הישר `y=-5x+20` פוגש את ציר `x`. דרך נקודה זו עובר ישר ששיפועו `-0.5`; מצאו את משוואתו.',
      sourceRef:'razpages:עמוד-450.html — שאלה 2: y=-5x+20, חיתוך עם ציר x, שיפוע -0.5',
      adaptation:'אחידות ניסוח וסימון עשרוני בלבד; כל נתוני המקור נשמרו.',
      mathModel:{standard:{A:1,B:2,C:4},expected:{m:[-1,2],b:2,xIntercept:4},probes:[{point:[4,0],onLine:true}]}
    },
    {
      id:'RZ450-Q5-P84-Q5',family:'Q04,E03',level:5,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר שעובר בנקודה `(-1,5)` ושיפועו `2`.',
      sourceRef:'razpages:עמוד-450.html — שאלה 5: נקודה (-1,5), שיפוע 2',
      adaptation:'אחידות ניסוח וכתיב מתמטי בלבד; כל נתוני המקור נשמרו.',
      mathModel:{standard:{A:-2,B:1,C:7},expected:{m:2,b:7,xIntercept:[-7,2]},probes:[{point:[-1,5],onLine:true}]}
    }
  ]
};
