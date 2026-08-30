export const page={
  page:107,
  chapter:30,
  kicker:'ייצוג תופעות · מחיר חנייה',
  title:'חניון התחנה — ייצוג אלגברי וערכי פונקציה',
  subtitle:'שיפוע · משוואת ישר · חיתוך עם הצירים',
  rule:'כאשר המחיר גדל ב־`10 ₪` לכל שעה והגרף עובר בראשית, הייצוג האלגברי הוא `y=10x`.',
  sourceRefs:['razpages:עמוד-466.html'],
  questions:[
    {
      id:'RZ466-Q1B-P107-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'המשיכו לענות לפי גרף חניון "התחנה".',
      sourceRef:'razpages:עמוד-466.html — שאלה 1, סעיפים ה–ח',
      adaptation:'כל יתר סעיפי המקור נשמרו.',
      graph:{equalUnitScale:false,xMin:0,xMax:10,yMin:0,yMax:60,xTick:1,yTick:10,xLabel:'זמן החנייה (שעות)',yLabel:'מחיר (₪)',lines:[{through:[[0,0],[6,60]],label:'התחנה',labelAt:[5.4,54]}],ariaLabel:'מחיר החנייה בחניון התחנה: ישר y=10x'},
      subparts:[
        {text:'ה. השלימו: `f(4)=` ___ וגם `f(___)=50`.',responseSpace:'lines-2',level:5},
        {text:'ו. כתבו את הייצוג האלגברי של הגרף.',responseSpace:'lines-2',level:5},
        {text:'ז. מהי נקודת החיתוך של הגרף עם ציר `y`?',responseSpace:'lines-2',answerShape:'ordered-pair',level:5},
        {text:'ח. מהו ערך הפונקציה עבור `x=4`?',responseSpace:'short',level:5}
      ],
      mathModel:{standard:{A:-10,B:1,C:0},expected:{m:10,b:0,xIntercept:0},probes:[{point:[0,0],onLine:true},{point:[4,40],onLine:true}]}
    }
  ]
};
