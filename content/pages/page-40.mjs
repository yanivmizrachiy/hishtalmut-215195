export const page={
  page:40,
  chapter:13,
  kicker:'פרק 13 · מציאת משוואת ישר על ידי שתי נקודות',
  title:'משתי נקודות לכל המידע על הישר',
  subtitle:'שאלת מקור אינטגרטיבית · שיפוע → גרף → ערכים → משוואה',
  rule:'אותן שתי נקודות מאפשרות לעבור בין כל הייצוגים: מחשבים שיפוע, משרטטים את הישר, קוראים או מחשבים ערכי פונקציה, ולבסוף כותבים את המשוואה `y=mx+b`.',
  sourceRefs:['razpages:עמוד-455.html'],
  questions:[
    {
      id:'Q11-P40-Q1',family:'Q11,S11,D04,V01',level:7,responseSpace:'mixed',
      stem:'גרף של פונקציה קווית עובר דרך הנקודות `(1,-2)` ו־`(2,3)`.',
      graph:{xMin:-3,xMax:5,yMin:-8,yMax:8,showCoordinates:true,points:[{x:1,y:-2,label:'(1,-2)'},{x:2,y:3,label:'(2,3)'}],ariaLabel:'מערכת צירים ובה הנקודות אחת מינוס שתיים ושתיים שלוש לשרטוט הישר'},
      subparts:[
        {label:'א.',text:'מהו קצב ההשתנות של הפונקציה? `m=`',responseSpace:'short'},
        {label:'ב.',text:'שרטטו את גרף הפונקציה דרך שתי הנקודות המסומנות.',responseSpace:'graph-draw'},
        {label:'ג.',text:'מצאו את ערכי הפונקציה כאשר `x=0` וכאשר `x=5`.',responseSpace:'equation',answerCount:2,betweenAnswers:' ; '},
        {label:'ד.',text:'כתבו את הייצוג האלגברי של הפונקציה.',responseSpace:'equation'}
      ],
      sourceRef:'razpages:עמוד-455.html — המשימה הראשונה: הנקודות (1,-2), (2,3), שיפוע, שרטוט, f(0), f(5), ייצוג אלגברי',
      adaptation:'המשימה והנתונים נשמרו; הגרף שוחזר במנוע ה-SVG האחיד והניסוח נוקה בלבד',
      mathModel:{standard:{A:-5,B:1,C:-7},expected:{m:5,b:-7,xIntercept:[7,5]},probes:[{point:[1,-2],onLine:true},{point:[2,3],onLine:true},{point:[0,-7],onLine:true},{point:[5,18],onLine:true}]}
    }
  ]
};
