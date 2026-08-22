export const page={
  page:37,
  chapter:12,
  kicker:'פרק 12 · מציאת משוואת ישר על ידי שיפוע ונקודה',
  title:'משוואת ישר לפי שיפוע ונקודה',
  subtitle:'שאלות מקור אמיתיות · מהישיר לרב־שלבי',
  rule:'כאשר נתונים שיפוע ונקודה, מציבים את הנקודה ב־`y=mx+b`, מוצאים את `b`, ואז כותבים את משוואת הישר. אם הנקודה מתקבלת מחיתוך עם ציר, מוצאים קודם את נקודת החיתוך.',
  sourceRefs:['razpages:עמוד-449.html','razpages:עמוד-450.html','razpages:עמוד-448.html'],
  questions:[
    {
      id:'Q04-P37-Q1',family:'Q04',level:4,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר ששיפועו `-4` והוא עובר בנקודה `(3,-1)`.',
      sourceRef:'razpages:עמוד-449.html — מצא משוואת הישר ששיפועו -4 ועובר בנקודה (3,-1)',
      adaptation:'תיקון כיוון סימן המינוס ואחידות ניסוח בלבד',
      mathModel:{standard:{A:4,B:1,C:11},expected:{m:-4,b:11,xIntercept:[11,4]},probes:[{point:[3,-1],onLine:true}]}
    },
    {
      id:'Q05-P37-Q2',family:'Q05,I01',level:5,responseSpace:'full-work',
      stem:'מצאו את משוואת הישר העובר דרך נקודת החיתוך של הישר `y=2x+7` עם ציר `y`, ושיפועו `3`.',
      sourceRef:'razpages:עמוד-450.html — הישר עובר דרך חיתוך y=2x+7 עם ציר y ושיפועו 3',
      adaptation:'אחידות כתיב מתמטי בלבד',
      mathModel:{standard:{A:-3,B:1,C:7},expected:{m:3,b:7,xIntercept:[-7,3]},probes:[{point:[0,7],onLine:true}]}
    },
    {
      id:'Q06-P37-Q3',family:'Q06,I02',level:6,responseSpace:'full-work',
      stem:'מצאו את משוואת הישר העובר דרך נקודת החיתוך של הישר `y=2x-12` עם ציר `x`, ושיפועו `-2`.',
      sourceRef:'razpages:עמוד-448.html — הישר עובר דרך חיתוך y=2x-12 עם ציר x ושיפועו -2',
      adaptation:'תיקון כיוון סימן המינוס ואחידות ניסוח בלבד',
      mathModel:{standard:{A:2,B:1,C:12},expected:{m:-2,b:12,xIntercept:6},probes:[{point:[6,0],onLine:true}]}
    }
  ]
};
