export const page={
  page:75,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — פונקציה קווית',
  title:'מיצ״ב — מלבן, אלכסון ומשוואת ישר',
  subtitle:'משלימים נקודה → אורכי צלעות → שיפוע אלכסון → משוואה',
  rule:'במלבן שצלעותיו מקבילות לצירים, לנקודות שעל אותה צלע אנכית יש אותו `x`, ולנקודות שעל אותה צלע אופקית יש אותו `y`. לאחר שמוצאים את קצות האלכסון אפשר לחשב את השיפוע ולמצוא את משוואת הישר.',
  sourceRefs:[
    'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4 — מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, שאלה 4'
  ],
  questions:[
    {
      id:'MZ21-P75-Q1',family:'MZ21',level:6,responseSpace:'mixed',
      stem:'במלבן `ABCD` הצלעות מקבילות לצירים. נתונות `A(7,6)` ו־`C(4,-3)`.',
      graph:{
        xMin:0,xMax:10,yMin:-5,yMax:8,xTick:1,yTick:1,showCoordinates:false,
        ariaLabel:'מלבן עם A שבע שש, B שבע מינוס שלוש, C ארבע מינוס שלוש, D ארבע שש',
        points:[{x:7,y:6,label:'A'},{x:7,y:-3,label:'B'},{x:4,y:-3,label:'C'},{x:4,y:6,label:'D'}],
        polyline:[[7,6],[7,-3],[4,-3],[4,6],[7,6]]
      },
      subparts:[
        {text:'כתבו את שיעורי `D` כזוג סדור.',responseSpace:'short',answerShape:'ordered-pair'},
        {text:'מצאו את אורך `AD`.',responseSpace:'short'},
        {text:'מצאו את אורך `DC`.',responseSpace:'short'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 4(a-b) — rectangle with A(7,6), C(4,-3); find D and lengths AD, DC',
      adaptation:'המלבן שוחזר מהקואורדינטות המדויקות שבתמונה המקורית.'
    },
    {
      id:'MZ22-P75-Q2',family:'MZ22',level:8,responseSpace:'mixed',
      stem:'העבירו את האלכסון `AC`.',
      subparts:[
        {text:'חשבו את שיפוע הישר `AC` והציגו דרך.',responseSpace:'lines-2'},
        {text:'מצאו את `b`.',responseSpace:'lines-2'},
        {text:'כתבו את משוואת הישר `AC`.',responseSpace:'equation'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 4(c) — draw diagonal AC, find its slope and equation, show work',
      adaptation:'הסעיף המקורי פוצל לשיפוע, b ומשוואה בהתאם לסגנון העבודה המדורג.'
    },
    {
      id:'MZ23-P75-Q3',family:'MZ23',level:8,responseSpace:'mixed',
      stem:'השתמשו באורכי הצלעות שמצאתם (`AD` ו־`DC`).',
      subparts:[
        {text:'חשבו את היקף המלבן `ABCD`.',responseSpace:'short'},
        {text:'חשבו את שטח המלבן `ABCD`.',responseSpace:'short'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 4 — perimeter and area of rectangle ABCD from the side lengths',
      adaptation:'מרחיב את אורכי הצלעות אל היקף ושטח; ללא נתונים חדשים.'
    },
    {
      id:'MZ24-P75-Q4',family:'MZ24',level:9,responseSpace:'lines-2',
      stem:'העבירו את האלכסון השני `BD` (מ־`B(7,-3)` אל `D(4,6)`). מצאו את שיפועו ואת משוואת הישר `BD`. הציגו דרך.',
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 4 — equation of the second diagonal BD of the rectangle',
      adaptation:'מוסיף את האלכסון המשלים לאותו מלבן; הנקודות מן הגרף המקורי נשמרו.'
    }
  ]
};
