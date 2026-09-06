export const page={
  page:32,
  chapter:10,
  kicker:'פרק 10 · שרטוט ישר ופונקציה קווית',
  title:'מטבלה של נקודות אל הישר',
  subtitle:'משוואה → טבלה → נקודות → גרף · רמות 2–5',
  rule:'כדי לשרטט ישר אפשר ליצור זוגות סדורים, לסמן לפחות שתי נקודות מתאימות במערכת הצירים ולחבר ביניהן בקו ישר. נקודה שמתקבלת מהטבלה חייבת לקיים את משוואת הפונקציה.',
  sourceRefs:['jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-49-question-2','data/graphing-family-map.md#D02','jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-20-table-and-line'],
  questions:[
    {
      id:'J2-P49-P32-Q1',family:'D01,V01,S03',level:2,responseSpace:'mixed',stem:'נתונה המשוואה `y=2x-4`.',panelsColumns:2,
      panels:[
        {label:'טבלת ערכים — 5 נקודות',table:{ariaLabel:'טבלת ערכים לפונקציה y=2x-4',rows:[['`x`','-2','-1','0','1','2'],['`y`',{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}]]}},
        {label:'שרטוט',graph:{xMin:-3,xMax:4,yMin:-9,yMax:5,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'מערכת צירים ריקה לשרטוט y=2x-4'}}
      ],
      subparts:[
        {label:'א.',text:'השלימו טבלת ערכים הכוללת 5 נקודות.',responseSpace:'table-cell'},
        {label:'ב.',text:'סמנו את הנקודות ושרטטו את הישר.',responseSpace:'graph-draw'},
        {label:'ג.',text:'מהו קצב השינוי (השיפוע)? `m=`',responseSpace:'short'},
        {label:'ד.',text:'מהו `y` כאשר `x=0`?',responseSpace:'short'},
        {label:'ה.',text:'בעבור איזה `x` מתקיים `y=0`?',responseSpace:'short'}
      ],
      mathModel:{standard:{A:-2,B:1,C:-4},expected:{m:2,b:-4,xIntercept:2},probes:[{x:-2,expectedY:-8},{x:-1,expectedY:-6},{x:0,expectedY:-4},{x:1,expectedY:-2},{x:2,expectedY:0}]},
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 49, question 2 — exact equation y=2x-4; build a five-point table, draw the line, find slope, find y when x=0, and find x when y=0',
      adaptation:'נשמרו המשוואה וכל חמש דרישות המקור; נבחרו חמישה ערכי x פשוטים לטבלה ומערכת הצירים נבנתה מחדש בסגנון הספר.'
    },
    {
      id:'J2-P20-P32-Q3',family:'D02,V03',level:4,responseSpace:'mixed',stem:'נתונה טבלת הערכים הבאה. דרך הנקודות יכול לעבור קו ישר.',panelsColumns:2,
      panels:[
        {label:'טבלת המקור',table:{ariaLabel:'טבלת המקור מעמוד 20',rows:[['`x`','-2','-1','0','1','2','3'],['`y`','-7','-5','-3','-1','1','3']]}},
        {label:'שרטוט',graph:{xMin:-3,xMax:4,yMin:-9,yMax:5,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'מערכת צירים לשרטוט הישר העובר דרך נקודות טבלת המקור'}}
      ],
      subparts:[
        {label:'א.',text:'העבירו את הישר וסמנו עליו נקודות עבור `x=-1.5,-0.5,0.5,1.5,2.5`.',responseSpace:'graph-draw'},
        {label:'ב.',text:'רשמו לפי הסדר את שיעורי ה־`y` של חמש הנקודות.',responseSpace:'short'}
      ],
      mathModel:{standard:{A:2,B:-1,C:3},expected:{m:2,b:-3,xIntercept:[3,2]},probes:[{x:[-3,2],expectedY:-6},{x:[-1,2],expectedY:-4},{x:[1,2],expectedY:-2},{x:[3,2],expectedY:0},{x:[5,2],expectedY:2}]},
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 20, question 5 — exact table x=-2,-1,0,1,2,3 and y=-7,-5,-3,-1,1,3; draw the line, mark half-step x-values and read their y-values',
      adaptation:'נשמרו טבלת המקור, חמשת ערכי ה-x וכל דרישות השאלה; שטח התשובה קוצר בלבד.'
    },
    {
      id:'V01-P32-Q5',family:'V01,S03',level:5,responseSpace:'mixed',stem:'נתונה הפונקציה `y=3x-2`.',
      subparts:[{label:'א.',text:'`f(0)=`',responseSpace:'short'},{label:'ב.',text:'`f(1)=`',responseSpace:'short'},{label:'ג.',text:'`f(2)=`',responseSpace:'short'},{label:'ד.',text:'מהי נקודת החיתוך עם ציר `y`?',responseSpace:'equation'}],
      sourceRef:'razpages:bank.json point-values — חישוב זוגות סדורים לקראת שרטוט; מספרים שונו',
      adaptation:'יצירת זוגות סדורים מן המשוואה וזיהוי החיתוך עם ציר y; מספרים שונו.'
    }
  ]
};
