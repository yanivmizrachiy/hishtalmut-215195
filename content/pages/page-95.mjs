export const page={
  page:95,
  chapter:29,
  kicker:'נקודות חיתוך · ישרים ושטח',
  title:'מהמשוואה לנקודות, מקבילות ושטח',
  subtitle:'ישר אנכי · חיתוך עם ציר y · מקבילים · משולש',
  rule:'הישר `BE` מקביל לציר `y`, לכן ל־B ול־E אותו שיעור `x`. את E מוצאים בהצבה במשוואת `CE`; נקודת C מתקבלת בחיתוך עם ציר `y`. משוואת ישר דרך שתי נקודות נקבעת מהשיפוע ונקודה.',
  sourceRefs:['razpages:עמוד-460.html'],
  questions:[
    {
      id:'RZ460-Q3-P95-Q1',family:'S14,Q07,E04',level:8,responseSpace:'mixed',
      stem:'נתון `B(3,-3)`. הקטע `BE` מקביל לציר `y`. דרך `E` עובר הישר `CE` שמשוואתו `y=-2x+10`, והוא חותך את ציר `y` בנקודה `C`. ענו על כל הסעיפים.',
      sourceRef:'razpages:עמוד-460.html — שאלה 3: B(3,-3), BE אנכי, CE: y=-2x+10, שישה סעיפים',
      adaptation:'כל הנתונים וששת סעיפי המקור נשמרו; הגרף שוחזר במנוע הקנוני ונוסף מקום חישוב.',
      graph:{xMin:-1,xMax:4,yMin:-4,yMax:11,xTick:1,yTick:1,lines:[{through:[[0,10],[3,4]]}],verticalLines:[3],points:[{x:3,y:-3,label:'B'},{x:3,y:4,label:'E'},{x:0,y:10,label:'C'},{x:0,y:0,label:'O'}],showCoordinates:false,ariaLabel:'הישר CE דרך C(0,10) ו-E(3,4), והישר האנכי דרך B(3,-3) ו-E'},
      subparts:[
        {text:'א. חשבו את שיעורי הנקודה `E`.',responseSpace:'lines-2',answerShape:'ordered-pair',level:8},
        {text:'ב. חשבו את אורך הקטע `BE`.',responseSpace:'short',level:8},
        {text:'ג. חשבו את שיעורי הנקודה `C`.',responseSpace:'lines-2',answerShape:'ordered-pair',level:8},
        {text:'ד. מצאו את משוואת הישר העובר דרך `C` ו־`B`.',responseSpace:'lines-2',level:8},
        {text:'ה. מצאו את משוואת הישר העובר דרך `B` ומקביל ל־`EC`.',responseSpace:'lines-2',level:8},
        {text:'ו. חשבו את שטח המשולש `OCE` והציגו דרך.',responseSpace:'lines-2',level:8}
      ],
      mathModel:{standard:{A:2,B:1,C:10},expected:{m:-2,b:10,xIntercept:5},probes:[{point:[0,10],onLine:true},{point:[3,4],onLine:true}],graphLineModels:[{standard:{A:2,B:1,C:10}}]}
    }
  ]
};
