export const page={
  page:69,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — פונקציה קווית',
  title:'מיצ״ב — ממשוואת ישר לתחום חיוביות',
  subtitle:'שתי נקודות → שיפוע → משוואה → נקודת אפס → חיוביות',
  rule:'כדי למצוא משוואת ישר על פי שתי נקודות מוצאים תחילה את השיפוע ולאחר מכן את `b`. תחום החיוביות הוא תחום ערכי `x` שבו הגרף נמצא מעל ציר `x`, כלומר `y>0`.',
  sourceRefs:[
    'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4 — מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, שאלה 17'
  ],
  questions:[
    {
      id:'MZ13-P69-Q1',family:'MZ13',level:7,responseSpace:'mixed',
      stem:'בגרף מסומנות הנקודות `A(2,9)` ו־`B(5,0)` על אותו ישר.',
      graph:{
        xMin:-1,xMax:7,yMin:-4,yMax:18,xTick:1,yTick:3,showCoordinates:false,
        ariaLabel:'ישר יורד העובר דרך A שתיים תשע ו-B חמש אפס',
        lines:[{through:[[2,9],[5,0]]}],
        points:[{x:2,y:9},{x:5,y:0}]
      },
      subparts:[
        {text:'חשבו את השיפוע של הישר `AB`.',responseSpace:'lines-2'},
        {text:'מצאו את `b`.',responseSpace:'lines-2'},
        {text:'כתבו את משוואת הישר.',responseSpace:'equation'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 17(a) — graph marks A(2,9), B(5,0); find equation AB and show work',
      adaptation:'השרטוט המקורי שוחזר כ־SVG בדיוק מן הקואורדינטות המסומנות.'
    },
    {
      id:'MZ14-P69-Q2',family:'MZ14',level:8,responseSpace:'mixed',
      stem:'מהו התחום שבו הפונקציה חיובית?',
      subparts:[
        {text:'באיזה ערך של `x` הפונקציה מתאפסת?',responseSpace:'short'},
        {text:'האם הגרף נמצא מעל ציר `x` משמאל לנקודת האפס או מימין לה?',responseSpace:'choice-mark',choices:['משמאל','מימין']},
        {text:'כתבו את תחום החיוביות.',responseSpace:'equation'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 17(b) — find the domain where the function is positive',
      adaptation:'נוספו שני שלבי ביניים כדי לקשור את תחום החיוביות לנקודת האפס ולמיקום הגרף מעל ציר x.'
    },
    {
      id:'MZ14-P69-Q3',family:'MZ14,N03',level:8,responseSpace:'lines-2',
      stem:'עבור אותו ישר `AB` — כתבו את התחום שבו הפונקציה **שלילית** (`y<0`), ונמקו לפי מיקום הגרף ביחס לציר `x`.',
      sourceRef:'razpages:bank.json positivity — תחום שליליות ביחס לנקודת האפס; מספרים שונו',
      adaptation:'משלים את תחום השליליות לצד תחום החיוביות של אותו ישר.'
    },
    {
      id:'N04-P69-Q4',family:'N03,N04',level:8,responseSpace:'lines-2',
      stem:'נתון הישר `y=2x-6`. מצאו את הנקודה שבה הפונקציה מתאפסת (`y=0`), וכתבו את תחום החיוביות ואת תחום השליליות. הציגו דרך.',
      mathModel:{standard:{A:-2,B:1,C:-6},expected:{m:2,b:-6,xIntercept:3},probes:[{point:[3,0],onLine:true}]},
      sourceRef:'razpages:bank.json positivity — נקודת אפס ותחומי סימן של ישר; מספרים שונו',
      adaptation:'תרגול עצמאי של נקודת האפס ותחומי הסימן מתוך משוואה נתונה; מספרים שונו.'
    }
  ]
};
