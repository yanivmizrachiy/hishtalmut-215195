export const page={
  page:119,
  chapter:30,
  kicker:'ייצוג תופעות · היקף ריבוע',
  title:'היקף ריבוע — שיפוע, נקודה ושרטוט',
  subtitle:'קצב שינוי · בדיקת נקודה · גרף',
  rule:'בפונקציה `y=4x` השיפוע הוא `4`: כל הגדלה של הצלע בסנטימטר אחד מגדילה את ההיקף ב־`4` ס״מ.',
  sourceRefs:['razpages:עמוד-516.html'],
  questions:[
    {
      id:'RZ516-Q1B-P119-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'המשיכו לחקור את הפונקציה המתאימה לאורך צלע ריבוע את היקפו.',
      sourceRef:'razpages:עמוד-516.html — שאלה 1, שיפוע, בדיקת (6,24), שרטוט והכלל 4x',
      adaptation:'כל יתר סעיפי המקור נשמרו, כולל המשפט המפורש שהיקף ריבוע שאורך צלעו x הוא 4x.',
      graph:{equalUnitScale:false,xMin:0,xMax:6,yMin:0,yMax:24,xTick:1,yTick:2,xLabel:'צלע x (ס״מ)',yLabel:'היקף y (ס״מ)',lines:[{through:[[0,0],[6,24]],label:'y=4x',labelAt:[5,20]}],ariaLabel:'גרף y=4x של היקף ריבוע לפי אורך הצלע'},
      subparts:[
        {text:'ד. מהו השיפוע של הפונקציה?',responseSpace:'short',level:5},
        {text:'ה. האם הנקודה `(6,24)` נמצאת על גרף הפונקציה? נמקו.',responseSpace:'explanation',level:5},
        {text:'ו. שרטטו את הפונקציה `y=4x` במערכת הצירים.',responseSpace:'lines-2',level:5},
        {text:'ז. השלימו במילים: היקף ריבוע שאורך צלעו `x` ס״מ הוא ______ ס״מ.',responseSpace:'short',level:5},
        {label:'יב.',text:'מהי נקודת החיתוך של הגרף עם ציר `y`?',responseSpace:'short',level:5},
        {label:'יג.',text:'מהו ההיקף של ריבוע שאורך צלעו `3` ס״מ? היעזרו בגרף.',responseSpace:'short',level:5},
        {label:'יד.',text:'השלימו: כאשר אורך הצלע גדל ב־`2` ס״מ, ההיקף גדל ב־',responseSpace:'short',suffix:'ס״מ.',level:5},
        {label:'טו.',text:'עבור אילו ערכי `x` ההיקף גדול מ־`16` ס״מ?',responseSpace:'short',level:5}
      ],
      mathModel:{standard:{A:-4,B:1,C:0},expected:{m:4,b:0,xIntercept:0},probes:[{point:[6,24],onLine:true}]}
    }
  ]
};
