export const page={
  page:92,
  chapter:28,
  kicker:'השלמת מקור · התאמת ישרים למשוואות',
  title:'משוואת ישר מתוך גרף',
  subtitle:'שיפוע · חיתוך · משוואת ישר · שטח משולש',
  rule:'במערכת עם כמה ישרים מזהים כל ישר בעזרת השיפוע ונקודת החיתוך עם ציר `y`. לאחר מכן אפשר להשתמש בנקודות שעל הצירים כדי למצוא משוואות ושטחים.',
  sourceRefs:['razpages:עמוד-458.html'],
  questions:[
    {
      id:'RZ458-Q3-P92-Q1',family:'Q02,Q03,S14,E04',level:7,responseSpace:'mixed',
      stem:'לפניכם שלושה ישרים ושלוש משוואות: `(1)\\ y=-x+5`, `(2)\\ y=x+5`, `(3)\\ y=-x-5`. ענו על כל הסעיפים.',
      sourceRef:'razpages:עמוד-458.html — שאלה 3: שלושה ישרים, y=-x+5, y=x+5, y=-x-5, נקודות A-D, משוואת BC ושטח AOB',
      adaptation:'כל הנתונים וארבעת סעיפי המקור נשמרו. הישרים מזוהים לפי זוגות הנקודות AD, AB ו-DC במקום I/II/III כדי לשמור על זיהוי חד-משמעי במנוע הגרפים הקנוני.',
      graph:{xMin:-8,xMax:8,yMin:-8,yMax:8,xTick:2,yTick:2,lines:[{through:[[-5,0],[0,5]]},{through:[[0,5],[5,0]]},{through:[[-5,0],[0,-5]]}],points:[{x:0,y:5},{x:5,y:0},{x:0,y:-5},{x:-5,y:0},{x:0,y:0}],showCoordinates:false,ariaLabel:'שלושה ישרים AD, AB ו-DC והנקודות A B C D O'},
      subparts:[
        {text:'התאימו כל אחת מן המשוואות `(1)`, `(2)`, `(3)` לישר המתאים מבין `AD`, `AB`, `DC`. נמקו.',responseSpace:'explanation',level:7},
        {text:'מצאו את שיעורי הנקודות `A`, `B`, `C`, `D` המסומנות בשרטוט.',responseSpace:'lines-2',level:7},
        {text:'מצאו את משוואת הישר `BC`.',responseSpace:'lines-2',level:7},
        {text:'מצאו את שטח המשולש `AOB` והציגו דרך.',responseSpace:'lines-2',level:7}
      ],
      mathModel:{
        standard:{A:-1,B:1,C:-5},
        expected:{m:1,b:-5,xIntercept:5},
        probes:[{point:[5,0],onLine:true},{point:[0,-5],onLine:true}],
        graphLineModels:[
          {standard:{A:-1,B:1,C:5}},
          {standard:{A:1,B:1,C:5}},
          {standard:{A:1,B:1,C:-5}}
        ]
      }
    }
  ]
};
