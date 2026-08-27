export const page={
  page:71,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — פונקציה קווית',
  title:'מיצ״ב — באיזה קצב האקווריום מתרוקן?',
  subtitle:'קוראים שתי נקודות → שינוי ב-y → שינוי ב-x → שיפוע',
  rule:'בגרף כמות מים כתלות בזמן, השיפוע הוא השינוי בכמות המים בכל דקה. כאשר האקווריום מתרוקן השיפוע שלילי; קצב הריקון מתאר כמה מ״ק יוצאים בכל דקה ולכן מציינים את גודל השינוי.',
  sourceRefs:[
    'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4 — מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, שאלה 10'
  ],
  questions:[
    {
      id:'MZ16-P71-Q1',family:'MZ16',level:6,responseSpace:'mixed',
      stem:'האקווריום היה מלא עד הקצה ורוקנו ממנו את המים. הגרף מתאר את כמות המים במ״ק כתלות בזמן בדקות.',
      graph:{
        xMin:0,xMax:12,yMin:0,yMax:27,xTick:1,yTick:1,showCoordinates:false,
        ariaLabel:'גרף ריקון אקווריום, ישר מן הנקודה אפס עשרים וארבע אל הנקודה שמונה אפס',
        lines:[{through:[[0,24],[8,0]]}],
        points:[{x:0,y:24,label:'A'},{x:8,y:0,label:'B'}]
      },
      subparts:[
        {text:'בכמה מ״ק השתנתה כמות המים מן ההתחלה ועד סוף הריקון?',responseSpace:'short'},
        {text:'בכמה דקות התרחש השינוי?',responseSpace:'short'},
        {text:'חשבו את השיפוע של הגרף.',responseSpace:'lines-2'},
        {text:'השלימו: רוקנו את המים מהאקווריום בקצב של ______ מ״ק בדקה.',responseSpace:'short'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 10 — aquarium graph from (0,24) to (8,0); complete the emptying rate in cubic meters per minute',
      adaptation:'הגרף המקורי שוחזר כ־SVG לפי נקודות הקצה המדויקות. נוספו שלבי שינוי y ושינוי x לפני תשובת קצב הריקון.'
    },
    {
      id:'MZ16-P71-Q2',family:'MZ16',level:7,responseSpace:'lines-2',
      stem:'כתבו את הייצוג האלגברי (משוואת הישר) המתאר את כמות המים `y` (במ״ק) כתלות בזמן `x` (בדקות).',
      answerLabel:'`y=`',
      sourceRef:'razpages:bank.json word-problems sum-p041 — משוואת ישר לכמות מים כתלות בזמן; מספרים שונו',
      adaptation:'קישור בין הגרף לבין הייצוג האלגברי של המודל.'
    },
    {
      id:'MZ16-P71-Q3',family:'MZ16',level:7,responseSpace:'lines-2',
      stem:'לפי המודל שכתבתם: כמה מ״ק מים באקווריום לאחר `5` דקות? לאחר כמה דקות יישארו בו `6` מ״ק? הציגו דרך.',
      answerLabel:'דרך ותשובות:',
      sourceRef:'razpages:bank.json word-problems — שימוש במודל קווי לחישוב ערך וזמן; מספרים שונו',
      adaptation:'שימוש במודל שנבנה כדי לענות על שתי שאלות (ערך וזמן).'
    },
    {
      id:'MZ16-P71-Q4',family:'MZ16',level:8,responseSpace:'full-work',
      stem:'בריכה ובה `200` מ״ק מים מתרוקנת בקצב קבוע, ולאחר `10` שעות היא ריקה. מהו קצב הריקון (מ״ק לשעה)? כתבו משוואה לכמות המים `y` (מ״ק) אחרי `x` שעות. הציגו דרך.',
      sourceRef:'razpages:bank.json word-problems MEITZAV-pool — בריכה מתרוקנת בקצב קבוע; מספרים שונו',
      adaptation:'הקשר מקביל (בריכה) לחיזוק בניית מודל ריקון קווי; מספרים שונו.'
    }
  ]
};
