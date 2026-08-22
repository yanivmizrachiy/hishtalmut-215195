export const page={
  page:39,
  chapter:13,
  kicker:'פרק 13 · מציאת משוואת ישר על ידי שתי נקודות',
  title:'שתי נקודות — וממשיכים לחיתוכים ולגרף',
  subtitle:'שאלות מקור אמיתיות · יישום, שבר וקריאה מגרף',
  rule:'אחרי שמוצאים משוואת ישר משתי נקודות, אפשר להסיק ממנה מידע נוסף: חיתוך עם ציר `y` מתקבל כאשר `x=0`, וחיתוך עם ציר `x` מתקבל כאשר `y=0`. אם שתי הנקודות נתונות בגרף, קוראים קודם את שיעוריהן ורק אז מחשבים.',
  sourceRefs:['razpages:עמוד-454.html'],
  questions:[
    {
      id:'Q08-P39-Q1',family:'Q08,S11,I01,I02',level:6,responseSpace:'mixed',
      stem:'נתונות שתי הנקודות `A(2,4)` ו־`B(6,-4)`.',
      subparts:[
        {label:'א.',text:'מצאו את משוואת הישר העובר דרך `A` ו־`B`.',responseSpace:'lines-2'},
        {label:'ב.',text:'מצאו את נקודת החיתוך עם ציר `y`.',responseSpace:'equation'},
        {label:'ג.',text:'מצאו את נקודת החיתוך עם ציר `x`.',responseSpace:'equation'}
      ],
      sourceRef:'razpages:עמוד-454.html — השאלה עם A(2,4), B(6,-4) וחיתוכי הצירים',
      adaptation:'אחידות ניסוח וכיוון מתמטי בלבד; כל הנתונים והסעיפים נשמרו',
      mathModel:{standard:{A:2,B:1,C:8},expected:{m:-2,b:8,xIntercept:4},probes:[{point:[2,4],onLine:true},{point:[6,-4],onLine:true},{point:[0,8],onLine:true},{point:[4,0],onLine:true}]}
    },
    {
      id:'Q09-P39-Q2',family:'Q09,S11',level:7,responseSpace:'full-work',
      stem:'מצאו את משוואת הישר העובר דרך הנקודות `(3,-1)` ו־`(-12,4)`.',
      sourceRef:'razpages:עמוד-454.html — התרגיל: (3,-1), (-12,4)',
      adaptation:'אחידות ניסוח וכיוון מתמטי בלבד; הנתונים נשמרו',
      mathModel:{standard:{A:1,B:3,C:0},expected:{m:[-1,3],b:0,xIntercept:0},probes:[{point:[3,-1],onLine:true},{point:[-12,4],onLine:true}]}
    },
    {
      id:'Q10-P39-Q3',family:'Q10,S12',level:7,responseSpace:'mixed',
      stem:'בגרף מסומנות הנקודות `A(2,9)` ו־`B(5,0)`. מצאו את משוואת הישר `AB` והציגו דרך פתרון.',
      graph:{xMin:-1,xMax:6,yMin:-1,yMax:10,showCoordinates:true,ariaLabel:'ישר יורד העובר דרך A שתיים תשע ו-B חמש אפס',lines:[{through:[[2,9],[5,0]]}],points:[{x:2,y:9,label:'A(2,9)'},{x:5,y:0,label:'B(5,0)'}]},
      sourceRef:'razpages:עמוד-454.html — גרף AB עם A(2,9), B(5,0)',
      adaptation:'הגרף שוחזר במנוע ה-SVG האחיד של הספר; הנתונים המתמטיים נשמרו',
      mathModel:{standard:{A:3,B:1,C:15},expected:{m:-3,b:15,xIntercept:5},probes:[{point:[2,9],onLine:true},{point:[5,0],onLine:true}]}
    }
  ]
};
