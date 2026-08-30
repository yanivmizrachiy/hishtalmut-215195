export const page={
  page:70,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — פונקציה קווית',
  title:'מיצ״ב — איזו נקודה ממוקמת על הישר?',
  subtitle:'נקודה ושיפוע → משוואה → בודקים נקודות',
  rule:'אם ישר עובר דרך `A(0,-6)` ושיפועו `2`, אז `b=-6` ולכן משוואתו `y=2x-6`. נקודה ממוקמת על הישר אם ערך ה־`y` שלה מתאים לערך ה־`x` לפי המשוואה.',
  sourceRefs:[
    'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4 — מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, שאלה 18'
  ],
  questions:[
    {
      id:'MZ15-P70-Q1',family:'MZ15',level:6,responseSpace:'mixed',
      stem:'ישר עובר דרך `A(0,-6)` והשיפוע שלו הוא `2`.',
      graph:{
        xMin:-5,xMax:5,yMin:-10,yMax:4,xTick:1,yTick:1,showCoordinates:false,
        ariaLabel:'מערכת צירים עם A אפס מינוס שש והנקודות T מינוס שלוש אפס, P שתיים מינוס שתיים, M שתיים מינוס ארבע, Q מינוס שתיים מינוס שש',
        points:[
          {x:0,y:-6},{x:-3,y:0},{x:2,y:-2},{x:2,y:-4},{x:-2,y:-6}
        ]
      },
      subparts:[
        {text:'כתבו את משוואת הישר.',responseSpace:'equation'},
        {text:'סמנו איזו נקודה ממוקמת על הישר.',responseSpace:'choice-mark',choices:['T','M','Q','P']},
        {text:'בדקו את הנקודה שבחרתם באמצעות הצבה.',responseSpace:'lines-2'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 18 — line through A(0,-6) with slope 2; choose which of T,M,Q,P lies on it',
      adaptation:'הקואורדינטות של כל הנקודות חולצו מן השרטוט המקורי ושוחזרו במערכת צירים וקטורית; נוסף שלב כתיבת המשוואה ובדיקת הצבה.'
    },
    {
      id:'V03-P70-Q2',family:'V03',level:6,responseSpace:'mixed',
      stem:'נתונה הפונקציה `f(x)=5x`. השלימו את שיעור ה־`y` החסר כך שכל נקודה תהיה על הגרף.',
      subparts:[
        {text:'`(-1,\_\_)`',responseSpace:'short'},
        {text:'`(0,\_\_)`',responseSpace:'short'},
        {text:'`(3,\_\_)`',responseSpace:'short'},
        {text:'`(10,\_\_)`',responseSpace:'short'}
      ],
      sourceRef:'razpages:bank.json point-on-line f2-p021-q1 — השלמת שיעור y כדי שהנקודה על f(x)=5x; מספרים שונו',
      adaptation:'מבנה השלמת שיעור y מן המאגר; מספרים שונו.'
    },
    {
      id:'V04-P70-Q3',family:'V04',level:7,responseSpace:'mixed',
      stem:'הייצוג האלגברי של פונקציה קווית הוא `y=-3x+5`.',
      subparts:[
        {text:'מהם שיעורי הנקודה שעל הגרף ששיעור ה־`x` שלה `8`?',responseSpace:'short',answerShape:'ordered-pair'},
        {text:'מהם שיעורי הנקודה שעל הגרף ששיעור ה־`y` שלה `8`?',responseSpace:'short',answerShape:'ordered-pair'}
      ],
      sourceRef:'razpages:bank.json point-on-line f2-p014-q2 — מציאת נקודה לפי שיעור x או y נתון; מספרים שונו',
      adaptation:'שני כיוונים: מציאת נקודה מ־x נתון ומ־y נתון; מספרים שונו.'
    },
    {
      id:'V05-P70-Q4',family:'V05',level:7,responseSpace:'lines-2',
      stem:'ישר עובר דרך `(0,3)` והשיפוע שלו `-2`. כתבו את משוואתו, ובדקו אילו מהנקודות `(1,1)`, `(2,-1)`, `(3,0)` נמצאות עליו. הציגו דרך.',
      sourceRef:'razpages:bank.json point-on-line — כתיבת משוואה מנקודה ושיפוע ובדיקת שייכות; מספרים שונו',
      adaptation:'מחבר כתיבת משוואה עם בדיקת שייכות של כמה נקודות; מספרים שונו.'
    }
  ]
};
