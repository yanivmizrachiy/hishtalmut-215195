export const page={
  page:68,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — פונקציה קווית',
  title:'מיצ״ב — משווים מחירי משלוחים',
  subtitle:'קוראים גרף → נקודת איזון → משוואה → בונים מודל נוסף',
  rule:'נקודת החיתוך של שני גרפי מחיר מייצגת משקל שבו המחיר זהה. השיפוע מייצג את התוספת למחיר לכל ק״ג, ו־`b` מייצג את התשלום ההתחלתי.',
  sourceRefs:[
    'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4 — מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, שאלה 19'
  ],
  questions:[
    {
      id:'MZ10-P68-Q1',family:'MZ10',level:7,responseSpace:'mixed',
      stem:'אלעד בדק מחירים בשתי חברות משלוחים. הגרפים מתארים את המחיר `y` בש״ח לפי משקל החבילה `x` בק״ג.',
      graph:{
        xMin:0,xMax:9,yMin:0,yMax:95,xTick:1,yTick:5,showCoordinates:false,
        ariaLabel:'גרף מחירי שתי חברות משלוחים: הצבי y שווה 15x ואיילה y שווה 10x ועוד 20, נחתכות בנקודה 4 פסיק 60',
        lines:[{through:[[0,0],[4,60]]},{through:[[0,20],[4,60]]}],
        points:[{x:4,y:60,label:'A'}]
      },
      subparts:[
        {text:'מהו משקל החבילה שבעבורו המחיר בשתי החברות שווה?',responseSpace:'short'},
        {text:'מהו המחיר המשותף במשקל זה?',responseSpace:'short'},
        {text:'כתבו את נקודת האיזון כזוג סדור `(משקל, מחיר)`.',responseSpace:'short',answerShape:'ordered-pair'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 19(a) — find package weight where Tzvi and Ayala prices are equal; source graph intersects at (4,60)',
      adaptation:'הגרף המקורי שוחזר כ־SVG וקטורי מנתוני הרשת המדויקים שבשרטוט.'
    },
    {
      id:'MZ11-P68-Q2',family:'MZ11',level:7,responseSpace:'choice-mark',
      stem:'סמנו את הפונקציה המתארת את המחיר בחברת "הצבי".',
      choices:['`y=x`','`y=3x`','`y=10x`','`y=15x`'],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 19(b) — choose Tzvi price function from y=x, y=3x, y=10x, y=15x'
    },
    {
      id:'MZ12-P68-Q3',family:'MZ12',level:8,responseSpace:'mixed',
      stem:'חברת "יונה" גובה תשלום התחלתי ותשלום לפי משקל. אלעד מצא שלכל משקל חבילה המחיר ב"יונה" גבוה יותר מהמחיר בשתי החברות האחרות.',
      subparts:[
        {text:'כתבו דוגמה לפונקציה קווית `y=mx+b` שיכולה לתאר את מחיר חברת "יונה" עבור `x≥0`.',responseSpace:'equation'},
        {text:'הסבירו מדוע הגרף שבחרתם נמצא מעל שני הגרפים האחרים לכל משקל לא־שלילי.',responseSpace:'lines-4'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 19(c) — give a linear function for Yona whose price is higher than both companies for every package weight',
      adaptation:'השאלה הפתוחה המקורית נשמרה; התחום `x≥0` נכתב במפורש משום שמשקל חבילה אינו שלילי.'
    }
  ]
};
