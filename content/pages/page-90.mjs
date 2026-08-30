export const page={
  page:90,
  chapter:28,
  kicker:'השלמת מקור · התאמת ישרים למשוואות',
  title:'משוואת ישר מתוך גרף',
  subtitle:'ייצוג גרפי ואלגברי · נקודות חיתוך · יישום גאומטרי',
  rule:'מתאימים משוואה לגרף לפי השיפוע והחיתוך עם ציר `y`. לאחר ההתאמה אפשר לקרוא נקודות חיתוך, למצוא משוואה של ישר נוסף ולהשתמש בשיעורי נקודות לחישוב שטח.',
  sourceRefs:['razpages:עמוד-457.html'],
  questions:[
    {
      id:'RZ457-Q2-P90-Q1',family:'Q02,Q03,S14,E04',level:7,responseSpace:'mixed',
      stem:'לפניכם שלושה ישרים ושלוש משוואות: `(1)\\ y=-x+2`, `(2)\\ y=x+2`, `(3)\\ y=-x-2`. ענו על כל הסעיפים.',
      sourceRef:'razpages:עמוד-457.html — שאלה 2: התאמת שלוש משוואות ל-I/II/III, נקודות A-D, משוואת BC ושטח AOB',
      adaptation:'כל המתמטיקה וארבעת סעיפי המקור נשמרו. במקום תוויות I/II/III, הישרים מזוהים באופן חד-משמעי לפי זוגות הנקודות AD, AB ו-DC במנוע הגרפים הקנוני.',
      graph:{xMin:-4,xMax:4,yMin:-4,yMax:4,xTick:1,yTick:1,lines:[{through:[[-2,0],[0,2]]},{through:[[0,2],[2,0]]},{through:[[-2,0],[0,-2]]}],points:[{x:0,y:2,label:'A'},{x:2,y:0,label:'B'},{x:0,y:-2,label:'C'},{x:-2,y:0,label:'D'},{x:0,y:0,label:'O'}],showCoordinates:false,ariaLabel:'שלושה ישרים AD, AB ו-DC והנקודות A B C D O'},
      subparts:[
        {text:'התאימו כל אחת מן המשוואות `(1)`, `(2)`, `(3)` לישר המתאים מבין `AD`, `AB`, `DC`. נמקו לפי שיפוע וחיתוך עם הצירים.',responseSpace:'explanation',level:7},
        {text:'מצאו את שיעורי הנקודות `A`, `B`, `C`, `D` המסומנות בשרטוט.',responseSpace:'lines-2',level:7},
        {text:'מצאו את משוואת הישר `BC`.',responseSpace:'lines-2',level:7},
        {text:'מצאו את שטח המשולש `AOB` והציגו דרך.',responseSpace:'lines-2',level:7}
      ],
      mathModel:{
        standard:{A:-1,B:1,C:-2},
        expected:{m:1,b:-2,xIntercept:2},
        probes:[{point:[2,0],onLine:true},{point:[0,-2],onLine:true}],
        graphLineModels:[
          {standard:{A:-1,B:1,C:2}},
          {standard:{A:1,B:1,C:2}},
          {standard:{A:1,B:1,C:-2}}
        ]
      }
    }
  ]
};
