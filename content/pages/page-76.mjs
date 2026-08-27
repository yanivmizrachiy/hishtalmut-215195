export const page={
  page:76,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — פונקציה קווית',
  title:'מיצ״ב — מלבן, שטח ומשוואת האלכסון',
  subtitle:'משלימים נקודה → מחשבים שטח → מוצאים ישר',
  rule:'כאשר צלעות מלבן מקבילות לצירים, אפשר לקרוא את אורכי הצלעות מהפרשי הקואורדינטות. אחר כך משתמשים בשתי נקודות על האלכסון כדי למצוא את משוואת הישר.',
  sourceRefs:[
    'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4 — מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, שאלה 6'
  ],
  questions:[
    {
      id:'MZ23-P76-Q1',family:'MZ23',level:6,responseSpace:'mixed',
      stem:'במלבן `ABCD` הצלעות מקבילות לצירים. נתונות `A(-2,5)` ו־`C(6,1)`.',
      graph:{
        xMin:-4,xMax:8,yMin:-1,yMax:7,xTick:1,yTick:1,showCoordinates:false,
        ariaLabel:'מלבן עם A מינוס שתיים חמש, B שש חמש, C שש אחת, D מינוס שתיים אחת',
        points:[{x:-2,y:5,label:'A'},{x:6,y:5,label:'B'},{x:6,y:1,label:'C'},{x:-2,y:1,label:'D'}],
        polyline:[[-2,5],[6,5],[6,1],[-2,1],[-2,5]]
      },
      subparts:[
        {text:'כתבו את שיעורי `B` כזוג סדור.',responseSpace:'short',answerShape:'ordered-pair'},
        {text:'מצאו את אורך המלבן.',responseSpace:'short'},
        {text:'מצאו את רוחב המלבן.',responseSpace:'short'},
        {text:'חשבו את שטח המלבן.',responseSpace:'lines-2'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 6(a-b) — rectangle A(-2,5), C(6,1); find B and area',
      adaptation:'הקואורדינטות והמלבן שוחזרו מן השרטוט המקורי; הופרדו אורכי הצלעות לפני חישוב השטח.'
    },
    {
      id:'MZ24-P76-Q2',family:'MZ24',level:8,responseSpace:'mixed',
      stem:'העבירו את האלכסון `AC` ומצאו את משוואת הישר שעליו הוא מונח.',
      subparts:[
        {text:'חשבו את השיפוע של `AC`.',responseSpace:'lines-2'},
        {text:'מצאו את `b`.',responseSpace:'lines-2'},
        {text:'כתבו את משוואת הישר.',responseSpace:'equation'},
        {text:'בדקו ששתי הנקודות `A` ו־`C` מקיימות את המשוואה.',responseSpace:'lines-4'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 6(c) — draw diagonal AC and find its equation, show work',
      adaptation:'נוסף שלב בדיקה בשתי נקודות כדי לחזק את משמעות "נקודה נמצאת על ישר".'
    }
  ]
};
