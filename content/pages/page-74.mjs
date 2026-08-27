export const page={
  page:74,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — פונקציה קווית',
  title:'מיצ״ב — משוואת הישר ואורך הקטע',
  subtitle:'חיתוכים → שיפוע → משוואה → מרחק בין נקודות',
  rule:'כאשר ידועות שתי נקודות על ישר, אפשר למצוא את השיפוע ואת משוואת הישר. אורך הקטע בין שתי נקודות מחושב לפי השינויים ב־`x` וב־`y` ומשפט פיתגורס.',
  sourceRefs:[
    'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4 — מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, שאלה 9'
  ],
  questions:[
    {
      id:'MZ19-P74-Q1',family:'MZ19',level:6,responseSpace:'choice-mark',
      stem:'הישר `AB` עובר דרך `A(0,6)` ו־`B(2,0)`. סמנו את משוואת הישר.',
      graph:{
        xMin:-1,xMax:4,yMin:-3,yMax:9,xTick:1,yTick:1,showCoordinates:false,
        ariaLabel:'ישר יורד דרך A אפס שש ו-B שתיים אפס',
        lines:[{through:[[0,6],[2,0]]}],
        points:[{x:0,y:6,label:'A'},{x:2,y:0,label:'B'}]
      },
      choices:['`y=-2x+6`','`y=-6x+2`','`y=-3x+6`','`y=-3x+2`'],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 9(a) — choose equation AB from four original options; source graph A(0,6), B(2,0)',
      adaptation:'ארבע אפשרויות המקור והנקודות מן השרטוט נשמרו בדיוק.'
    },
    {
      id:'MZ20-P74-Q2',family:'MZ20',level:8,responseSpace:'geometry-work',
      stem:'חשבו את אורך הקטע `AB`. כתבו את התשובה בעזרת שורש או כמספר עשרוני עם שתי ספרות אחרי הנקודה.',
      answerLabel:'דרך ותשובה:',
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 9(b) — calculate segment AB length, answer as radical or decimal with two digits, show work',
      adaptation:'נשמר נוסח דרישת המקור; הוקצה מרחב geometry-work מלא.'
    },
    {
      id:'MZ20-I08-P74-Q3',family:'MZ20,I08',level:8,responseSpace:'lines-2',
      stem:'הנקודות `A(0,6)` ו־`B(2,0)` הן נקודות החיתוך של הישר `AB` עם הצירים. חשבו את שטח המשולש שהישר יוצר עם הצירים. הציגו דרך.',
      sourceRef:'razpages:bank.json area — שטח משולש שיוצר ישר עם הצירים; מספרים שונו',
      adaptation:'מרחיב מן משוואת הישר אל חישוב שטח המשולש עם הצירים; מספרים שונו.'
    },
    {
      id:'MZ20-G05-P74-Q4',family:'MZ20,G05',level:9,responseSpace:'lines-2',
      stem:'נתונות שתי נקודות `P(1,2)` ו־`Q(4,6)`. חשבו את אורך הקטע `PQ` בעזרת משפט פיתגורס. הציגו דרך.',
      sourceRef:'razpages:bank.json geometry — אורך קטע בעזרת פיתגורס; מספרים שונו',
      adaptation:'תרגול נוסף של אורך קטע לפי שני שיעורים ומשפט פיתגורס; מספרים שונו.'
    }
  ]
};
