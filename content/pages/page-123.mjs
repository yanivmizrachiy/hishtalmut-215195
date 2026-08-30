export const page={
  page:123,
  chapter:30,
  kicker:'ייצוג תופעות · שתי משאיות',
  title:'שתי משאיות — השוואת מהירויות וביטויים',
  subtitle:'שיפוע · מהירות · y=40x · y=-80x+600',
  rule:'שיפוע הגרף מייצג את קצב שינוי המרחק מאילת. למשאית מאילת שיפוע `40`; למשאית מקריית שמונה שיפוע `-80`, ולכן מהירותה גדולה יותר בערך מוחלט.',
  sourceRefs:['razpages:עמוד-520.html'],
  questions:[
    {
      id:'RZ520-Q1B-P123-Q1',family:'W01,Q03,S14',level:6,responseSpace:'mixed',
      stem:'המשיכו לענות לפי שני גרפי המשאיות.',
      sourceRef:'razpages:עמוד-520.html — שאלה 1, סעיפים ד–ה',
      adaptation:'שאלת השוואת המהירויות והבקשה לשני הביטויים האלגבריים נשמרו בדיוק.',
      graph:{xMin:0,xMax:16,yMin:0,yMax:600,xTick:2,yTick:100,xLabel:'זמן (שעות)',yLabel:'מרחק מאילת (ק״מ)',lines:[{through:[[0,0],[15,600]],label:'מאילת',labelAt:[13,520]},{through:[[0,600],[5,200]],label:'מקריית שמונה',labelAt:[2,440]}],ariaLabel:'שתי משאיות: y=40x ו-y=-80x+600'},
      subparts:[
        {text:'ד. איזו משאית נסעה מהר יותר? הסבירו כיצד אפשר לדעת זאת מן הגרף.',responseSpace:'explanation',level:6},
        {text:'ה1. כתבו ביטוי אלגברי לפונקציה של המשאית שיצאה מאילת.',responseSpace:'lines-2',level:6},
        {text:'ה2. כתבו ביטוי אלגברי לפונקציה של המשאית שיצאה מקריית שמונה.',responseSpace:'lines-2',level:6},
        {text:'בדקו שהביטויים נותנים את אותה נקודת מפגש.',responseSpace:'lines-4',level:6}
      ],
      mathModel:{standard:{A:-40,B:1,C:0},expected:{m:40,b:0,xIntercept:0},graphLineModels:[{standard:{A:-40,B:1,C:0}},{standard:{A:80,B:1,C:600}}]}
    }
  ]
};
