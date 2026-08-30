export const page={
  page:122,
  chapter:30,
  kicker:'ייצוג תופעות · שתי משאיות',
  title:'מאילת לקריית שמונה — שתי פונקציות',
  subtitle:'מרחק מאילת · מהירות · נקודת מפגש',
  rule:'המרחק בין אילת לקריית שמונה הוא כ־`600` ק״מ. משאית אחת מתרחקת מאילת בקצב קבוע, והשנייה מתקרבת לאילת בקצב קבוע.',
  sourceRefs:['razpages:עמוד-520.html'],
  questions:[
    {
      id:'RZ520-Q1A-P122-Q1',family:'W01,Q03,S14',level:6,responseSpace:'mixed',
      stem:'בשעה `6:00` יצאה משאית מאילת לקריית שמונה, ובאותה שעה יצאה משאית מקריית שמונה לאילת. הגרפים מתארים את מרחקן מאילת.',
      sourceRef:'razpages:עמוד-520.html — שאלה 1, סעיפים א–ג',
      adaptation:'שלוש הנקודות המסומנות במקור, שתי הפונקציות ושאלות המהירות והמפגש נשמרו.',
      graph:{xMin:0,xMax:16,yMin:0,yMax:600,xTick:2,yTick:100,xLabel:'זמן (שעות)',yLabel:'מרחק מאילת (ק״מ)',lines:[{through:[[0,0],[15,600]],label:'מאילת',labelAt:[13,520]},{through:[[0,600],[5,200]],label:'מקריית שמונה',labelAt:[2,440]}],points:[{x:0,y:600,label:'(0,600)'},{x:15,y:600,label:'(15,600)'},{x:7.5,y:0,label:'(7.5,0)'}],showCoordinates:false,ariaLabel:'שתי משאיות: y=40x ו-y=-80x+600'},
      subparts:[
        {text:'א. הסבירו מה מתארות הנקודות `(0,600)`, `(15,600)`, `(7.5,0)` בהקשר של הנסיעה.',responseSpace:'explanation',level:6},
        {text:'ב. מה הייתה מהירותה של המשאית שיצאה מאילת?',responseSpace:'lines-2',level:6},
        {text:'ג. באיזו שעה ובאיזה מרחק מאילת נפגשו המשאיות? הציגו דרך.',responseSpace:'lines-4',level:6}
      ],
      mathModel:{standard:{A:-40,B:1,C:0},expected:{m:40,b:0,xIntercept:0},graphLineModels:[{standard:{A:-40,B:1,C:0}},{standard:{A:80,B:1,C:600}}]}
    }
  ]
};
