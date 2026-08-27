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
    },
    {
      id:'Q04-P37-Q4',family:'Q04',level:6,responseSpace:'full-work',
      stem:'מצאו את משוואת הישר ששיפועו `4` ועובר בנקודה `(-1,3)`. הציגו דרך.',
      sourceRef:'razpages:bank.json equation-slope-point f4-p078-q99 — משוואת ישר לפי שיפוע ונקודה; מספרים שונו',
      adaptation:'תרגול הצבת שיפוע ונקודה למציאת b; מספרים שונו.',
      mathModel:{standard:{A:-4,B:1,C:7},expected:{m:4,b:7,xIntercept:[-7,4]},probes:[{point:[-1,3],onLine:true},{point:[0,7],onLine:true}]}
    },
    {
      id:'Q04-P37-Q5',family:'Q04',level:7,responseSpace:'full-work',
      stem:'השיפוע של גרף פונקציה קווית הוא `3`, וידוע שערך ה־`y` עבור `x=4` הוא `10`. מצאו את הייצוג האלגברי של הפונקציה, ומהו הערך של `y` עבור `x=6`?',
      sourceRef:'razpages:bank.json equation-slope-point f4-p079-q104 style — שיפוע וערך פונקציה; מספרים שונו',
      adaptation:'שאלה רב־שלבית: משיפוע וערך בודד אל המשוואה ואל ערך נוסף; מספרים שונו.',
      mathModel:{standard:{A:-3,B:1,C:-2},expected:{m:3,b:-2,xIntercept:[2,3]},probes:[{point:[4,10],onLine:true},{point:[6,16],onLine:true}]}
    },
    {
      id:'Q04-R07-P37-Q6',family:'Q04,R07',level:7,responseSpace:'full-work',
      stem:'מצאו את משוואת הישר העובר דרך `(-1,-3)` ששיפועו `4`. אחר כך מצאו את משוואת הישר המקביל לו העובר דרך `(1,-1)`. הציגו דרך.',
      sourceRef:'razpages:bank.json equation-slope-point sum-p... — שיפוע ונקודה + מקביל דרך נקודה נוספת; מספרים שונו',
      adaptation:'מחבר בין שיפוע-ונקודה לבין ישרים מקבילים; מספרים שונו.',
      mathModel:{standard:{A:-4,B:1,C:1},expected:{m:4,b:1,xIntercept:[-1,4]},probes:[{point:[-1,-3],onLine:true},{point:[0,1],onLine:true}]}
    }
  ]
};
