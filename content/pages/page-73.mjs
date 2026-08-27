export const page={
  page:73,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — פונקציה קווית',
  title:'מיצ״ב — איזה גרף מתאים ל־y=x+5?',
  subtitle:'קוראים m ו-b → בודקים כיוון → בודקים חיתוך עם y',
  rule:'במשוואה `y=x+5` השיפוע הוא `1`, ולכן הגרף עולה. המספר החופשי הוא `5`, ולכן הגרף חותך את ציר `y` בנקודה `(0,5)`.',
  sourceRefs:[
    'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4 — מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, שאלה 15'
  ],
  questions:[
    {
      id:'MZ18-P73-Q1',family:'MZ18',level:6,responseSpace:'choice-mark',
      stem:'אחד מארבעת הגרפים מתאר את הפונקציה `y=x+5`. סמנו את הגרף המתאים.',
      panelsColumns:2,
      panels:[
        {label:'1',graph:{xMin:-6,xMax:6,yMin:-6,yMax:8,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'אפשרות 1 ישר אופקי מעל ציר x',lines:[{through:[[-4,4],[4,4]]}],points:[]}},
        {label:'2',graph:{xMin:-6,xMax:6,yMin:-6,yMax:8,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'אפשרות 2 ישר עולה תלול העובר בראשית',lines:[{through:[[0,0],[1,2]]}],points:[]}},
        {label:'3',graph:{xMin:-6,xMax:6,yMin:-6,yMax:8,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'אפשרות 3 ישר יורד החותך את ציר y מעל הראשית',lines:[{through:[[0,5],[5,0]]}],points:[]}},
        {label:'4',graph:{xMin:-6,xMax:6,yMin:-6,yMax:8,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'אפשרות 4 ישר עולה בשיפוע אחד החותך את ציר y בחמש',lines:[{through:[[-5,0],[0,5]]}],points:[]}}
      ],
      choices:['גרף 1','גרף 2','גרף 3','גרף 4'],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 15 — choose which of four graphs represents y=x+5',
      adaptation:'ארבעת השרטוטים המקוריים שוחזרו ב־SVG על פי מאפייניהם; אפשרות 4 משמרת במדויק שיפוע 1 וחיתוך y=5.'
    },
    {
      id:'MZ18-P73-Q2',family:'MZ18',level:7,responseSpace:'lines-2',
      stem:'הסבירו מדוע הגרף שבחרתם מתאים גם לשיפוע וגם לנקודת החיתוך עם ציר `y`.',
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 15 — reasoning added from the exact equation and source graph options',
      adaptation:'נוסף נימוק קצר כדי לחזק קריאת m ו-b ולא להסתפק בסימון.'
    },
    {
      id:'MZ18-P73-Q3',family:'MZ18,E01',level:7,responseSpace:'mixed',
      stem:'לכל פונקציה כתבו את השיפוע `m`, את המספר החופשי `b`, וקבעו אם הגרף עולה או יורד.',
      subparts:[
        {label:'א.',text:'`y=x+5`',responseSpace:'short'},
        {label:'ב.',text:'`y=-2x+3`',responseSpace:'short'},
        {label:'ג.',text:'`y=4x`',responseSpace:'short'}
      ],
      sourceRef:'razpages:bank.json b-yintercept f4-p032-q12 — זיהוי m,b וכיוון לכל פונקציה; מספרים שונו',
      adaptation:'זיהוי m ו-b וקביעת כיוון לכמה פונקציות; מספרים שונו.'
    },
    {
      id:'MZ18-N05-P73-Q4',family:'MZ18,N05',level:8,responseSpace:'lines-2',
      stem:'כתבו משוואה של פונקציה קווית שהגרף שלה **יורד** וחותך את ציר `y` בנקודה `(0,5)`. נמקו כיצד המשוואה שלכם מקיימת את שני התנאים.',
      sourceRef:'razpages:bank.json slope-meaning sum-p006 — בניית פונקציה יורדת דרך חיתוך נתון; מספרים שונו',
      adaptation:'שאלת יצירה המשלבת סימן שיפוע וחיתוך עם ציר y; מספרים שונו.'
    }
  ]
};
