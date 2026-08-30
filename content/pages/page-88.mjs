export const page={
  page:88,
  chapter:28,
  kicker:'השלמת מקור · משוואת ישר מתוך גרף',
  title:'משוואת ישר מתוך גרף',
  subtitle:'שיפוע · חיתוך עם הצירים · בדיקת נקודות',
  rule:'כדי לזהות משוואת ישר מתוך גרף, קוראים תחילה את החיתוך עם ציר `y` ואת השיפוע. לאחר שמתקבלת המשוואה אפשר לבדוק נקודות בהצבה ולהשלים שיעורים חסרים.',
  sourceRefs:['razpages:עמוד-456.html'],
  questions:[
    {
      id:'RZ456-Q1-P88-Q1',family:'Q02,Q03,E04',level:5,responseSpace:'mixed',
      stem:'בשרטוט נתון גרף של פונקציה קווית. ענו על כל הסעיפים.',
      sourceRef:'razpages:עמוד-456.html — שאלה 1: ישר דרך (0,1) ו-(1,-1), בחירת ייצוג, בדיקת (5,-9) והשלמת נקודות',
      adaptation:'הגרף שוחזר במנוע ה-SVG הקנוני; הנתונים, ארבע אפשרויות הבחירה וכל סעיפי המקור נשמרו.',
      graph:{xMin:-5,xMax:5,yMin:-5,yMax:5,xTick:1,yTick:1,lines:[{through:[[0,1],[1,-1]]}],showCoordinates:false,ariaLabel:'ישר יורד העובר דרך (0,1) ו-(1,-1)'},
      choices:['`y=-x+1`','`y=x-1`','`y=2x-1`','`y=-2x+1`'],
      subparts:[
        {text:'בחרו את הייצוג האלגברי המתאים והסבירו כיצד קבעתם.',responseSpace:'explanation',level:5},
        {text:'האם הנקודה `(5,-9)` ממוקמת על הישר? הסבירו בהצבה.',responseSpace:'explanation',level:5},
        {text:'השלימו את הנקודה `(-4,\;)`: `y=`',responseSpace:'short',level:5},
        {text:'השלימו את הנקודה `(-2,\;)`: `y=`',responseSpace:'short',level:5},
        {text:'השלימו את הנקודה `(3,\;)`: `y=`',responseSpace:'short',level:5},
        {text:'השלימו נקודה שעל הישר שבה `y=7`: `x=`',responseSpace:'short',level:5},
        {text:'השלימו נקודה שעל הישר שבה `y=1`: `x=`',responseSpace:'short',level:5},
        {text:'מהו השיפוע של הישר?',responseSpace:'short',level:5},
        {text:'מהי נקודת החיתוך של הישר עם ציר `y`?',responseSpace:'short',level:5},
        {text:'מהי נקודת החיתוך של הישר עם ציר `x`?',responseSpace:'short',level:5},
        {text:'עבור אילו ערכי `x` ערכי הפונקציה חיוביים? היעזרו בגרף.',responseSpace:'short',level:5}
      ],
      mathModel:{standard:{A:2,B:1,C:1},expected:{m:-2,b:1,xIntercept:[1,2]},probes:[{point:[0,1],onLine:true},{point:[1,-1],onLine:true},{point:[5,-9],onLine:true}]}
    }
  ]
};
