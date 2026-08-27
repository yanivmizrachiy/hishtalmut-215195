export const page={
  page:32,
  chapter:10,
  kicker:'פרק 10 · שרטוט ישר ופונקציה קווית',
  title:'מטבלה של נקודות אל הישר',
  subtitle:'משוואה → טבלה → נקודות → גרף · רמות 2–4',
  rule:'כדי לשרטט ישר אפשר ליצור זוגות סדורים, לסמן לפחות שתי נקודות מתאימות במערכת הצירים ולחבר ביניהן בקו ישר. נקודה שמתקבלת מהטבלה חייבת לקיים את משוואת הפונקציה.',
  sourceRefs:['razpages:עמוד-396.html','razpages:עמוד-397.html','data/graphing-family-map.md#D01','data/graphing-family-map.md#D02'],
  questions:[
    {
      id:'D01-P32-Q1',family:'D01,V01',level:2,responseSpace:'mixed',
      stem:'נתונה הפונקציה `y=x+2`. השלימו את הטבלה, סמנו את הנקודות במערכת הצירים ושרטטו את הישר.',
      panelsColumns:2,
      panels:[
        {label:'טבלת ערכים',table:{ariaLabel:'טבלת ערכים לפונקציה y=x+2',rows:[['x',-2,-1,0,1,2],['y',{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}]]}},
        {label:'שרטוט',graph:{xMin:-3,xMax:3,yMin:-2,yMax:6,showCoordinates:false,ariaLabel:'מערכת צירים ריקה לשרטוט y=x+2'}}
      ],
      mathModel:{standard:{A:-1,B:1,C:2},expected:{m:1,b:2,xIntercept:-2},probes:[{x:-2,expectedY:0},{x:-1,expectedY:1},{x:0,expectedY:2},{x:1,expectedY:3},{x:2,expectedY:4}]}
    },
    {
      id:'D02-P32-Q2',family:'D02,C02',level:3,responseSpace:'mixed',
      stem:'הטבלה מתארת פונקציה קווית. סמנו במערכת הצירים את הזוגות הסדורים ושרטטו את הישר שעובר דרכם.',
      panelsColumns:2,
      panels:[
        {label:'טבלה נתונה',table:{ariaLabel:'טבלה נתונה לפונקציה קווית',rows:[['x',0,1,2,3],['y',-1,1,3,5]]}},
        {label:'שרטוט',graph:{xMin:-1,xMax:4,yMin:-3,yMax:7,showCoordinates:false,ariaLabel:'מערכת צירים ריקה לשרטוט הישר מן הטבלה'}}
      ],
      mathModel:{standard:{A:2,B:-1,C:1},expected:{m:2,b:-1,xIntercept:[1,2]},probes:[{point:[0,-1],onLine:true},{point:[1,1],onLine:true},{point:[2,3],onLine:true},{point:[3,5],onLine:true}]}
    },
    {
      id:'D01-P32-Q3',family:'D01,D02,V05',level:4,responseSpace:'explanation',
      stem:'תלמיד סימן עבור `y=x+2` את הנקודה `(2,3)`. בלי לשרטט מחדש את כל הגרף, בדקו בהצבה אם הנקודה יכולה להשתייך לישר והסבירו כיצד טעות כזאת משפיעה על השרטוט.',
      answerLabel:'בדיקה והסבר:',
      mathModel:{standard:{A:-1,B:1,C:2},expected:{m:1,b:2,xIntercept:-2},probes:[{point:[2,3],onLine:false}]}
    },
    {
      id:'Q08-P32-Q4',family:'Q08,S03',level:5,responseSpace:'equation',
      stem:'הטבלה בשאלה 2 מתארת פונקציה קווית. כתבו את הייצוג האלגברי שלה בצורה `y=mx+b`.',
      answerLabel:'`y=`',
      mathModel:{standard:{A:2,B:-1,C:1},expected:{m:2,b:-1,xIntercept:[1,2]}},
      sourceRef:'razpages:bank.json graph-from-table — ייצוג אלגברי מטבלת נקודות; מספרים שונו',
      adaptation:'מעבר מטבלת נקודות אל משוואת הישר; מספרים שונו.'
    },
    {
      id:'V01-P32-Q5',family:'V01,S03',level:5,responseSpace:'mixed',
      stem:'נתונה הפונקציה `y=3x-2`.',
      subparts:[
        {label:'א.',text:'`f(0)=`',responseSpace:'short'},
        {label:'ב.',text:'`f(1)=`',responseSpace:'short'},
        {label:'ג.',text:'`f(2)=`',responseSpace:'short'},
        {label:'ד.',text:'מהי נקודת החיתוך עם ציר `y`?',responseSpace:'equation'}
      ],
      sourceRef:'razpages:bank.json point-values — חישוב זוגות סדורים לקראת שרטוט; מספרים שונו',
      adaptation:'יצירת זוגות סדורים מן המשוואה וזיהוי החיתוך עם ציר y; מספרים שונו.'
    }
  ]
};
