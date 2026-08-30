export const page={
  page:89,
  chapter:28,
  kicker:'השלמת מקור · משוואת ישר מתוך גרף',
  title:'מגרף של שתי נקודות למשוואת ישר',
  subtitle:'קריאת נקודות · חישוב שיפוע · בחירת משוואה',
  rule:'כאשר שתי נקודות על הישר ידועות, מחשבים `m=\\frac{y_2-y_1}{x_2-x_1}`, מוצאים את `b` בעזרת אחת הנקודות, ואז משווים לאפשרויות הנתונות.',
  sourceRefs:['razpages:עמוד-456.html'],
  questions:[
    {
      id:'RZ456-Q2-P89-Q1',family:'Q02,E04',level:5,responseSpace:'mixed',
      stem:'הישר `AB` עובר דרך `A(0,6)` ו־`B(2,0)`. מצאו את משוואתו ובחרו את האפשרות המתאימה.',
      sourceRef:'razpages:עמוד-456.html — שאלה 2: גרף AB עם A(0,6), B(2,0) וארבע אפשרויות למשוואה',
      adaptation:'הגרף וארבע אפשרויות המקור נשמרו; נוספו שלבי חישוב מפורשים כדי לנצל את עמוד A4 לעבודה מתמטית אמיתית.',
      graph:{xMin:-1,xMax:3,yMin:-1,yMax:7,xTick:0.5,yTick:1,lines:[{through:[[0,6],[2,0]]}],points:[{x:0,y:6,label:'A'},{x:2,y:0,label:'B'}],showCoordinates:false,ariaLabel:'הישר AB דרך A(0,6) ו-B(2,0)'},
      choices:['`y=-2x+6`','`y=-6x+2`','`y=-3x+6`','`y=-3x+2`'],
      subparts:[
        {text:'א. חשבו את השיפוע `m` והציגו את החישוב.',responseSpace:'lines-2',level:5},
        {text:'ב. מצאו את `b` בעזרת אחת הנקודות.',responseSpace:'lines-2',level:5},
        {text:'ג. כתבו את משוואת הישר ובחרו את האפשרות המתאימה.',responseSpace:'explanation',level:5}
      ],
      mathModel:{standard:{A:3,B:1,C:6},expected:{m:-3,b:6,xIntercept:2},probes:[{point:[0,6],onLine:true},{point:[2,0],onLine:true}]}
    }
  ]
};
