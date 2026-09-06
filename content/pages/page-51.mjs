export const page={
  page:51,
  chapter:20,
  kicker:'פרק 20 · בעיות מילוליות ומודלים קוויים',
  title:'מתי תכנית אחת משתלמת יותר?',
  subtitle:'מתרגמים השוואה → אי־שוויון → נקודת איזון → מפרשים',
  rule:'כאשר משווים שני מודלים קוויים, נקודת החיתוך היא נקודת האיזון שבה התוצאות שוות. משני צדי נקודת האיזון אפשר לקבוע איזה מודל נותן ערך גדול יותר.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-88-solar-inequality',
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-79-score-improvement'
  ],
  questions:[
    {
      id:'MD03-P51-Q1',family:'MD03',level:5,responseSpace:'choice-mark',
      stem:'איזה אי־שוויון מייצג את המצב שבו תכנית "גג ירוק" זולה יותר מתכנית "חשמל רגיל"?',
      choices:['`0.6x<0.2x+120`','`0.6x>0.2x+120`','`0.6x+120<0.2x`','`0.8x>120`'],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88, question 2 — choose the inequality representing when green roof is cheaper',
      adaptation:'ארבע אפשרויות המקור נשמרו ללא שינוי מתמטי.'
    },
    {
      id:'MD03-P51-Q2',family:'MD03',level:6,responseSpace:'full-work',
      stem:'פתרו את האי־שוויון המתאים שמצאתם.',
      answerLabel:'דרך ותחום פתרון:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88, question 2 + question ג — determine the consumption for which green roof is cheaper',
      adaptation:'הבחירה האמריקאית מחוברת לפתרון אלגברי מלא, כפי שנדרש בהמשך אותה שאלת מקור.'
    },
    {
      id:'MD04-P51-Q3',family:'MD04',level:7,responseSpace:'explanation',
      stem:'הסבירו במילים מה אומר תחום הפתרון על צריכת החשמל של משפחת לוי. מתי משתלם לעבור לתכנית "גג ירוק"?',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88, question ג — explain what the electricity consumption must be for green roof to be worthwhile',
      adaptation:'נשמרה דרישת המקור לפרש את התוצאה בהקשר ולא להסתפק בפתרון אלגברי.'
    },
    {
      id:'J2-SCORE-P51-Q4',family:'MD02,MD03',level:7,responseSpace:'mixed',
      stem:'במבחן קשה המורה הציע שתי דרכים לשיפור ציון: דרך I — להוסיף `10` נקודות; דרך II — להוסיף `20%`. אם `x` הוא הציון המקורי, המודלים הם `y=x+10` ו־`y=1.2x`.',
      subparts:[
        {label:'א.',text:'דני קיבל `64`. מה יהיה ציונו בדרך I?',responseSpace:'short'},
        {label:'ב.',text:'מה יהיה ציונו בדרך II?',responseSpace:'short'},
        {label:'ג.',text:'באיזו דרך כדאי לדני לבחור? הסבירו בקצרה.',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 79, question 1 — Dani scored 64; choose between adding 10 points and adding 20 percent, and explain',
      adaptation:'שתי דרכי המקור נשמרו ונכתבו גם כמודלים קוויים כדי לחבר את ההקשר במפורש לפרק.'
    },
    {
      id:'J2-SCORE-P51-Q5',family:'MD03,X03',level:8,responseSpace:'lines-2',
      stem:'רן טען שלא משנה באיזו דרך ישפרו את ציונו, כי בשתי הדרכים יתקבל אותו ציון. מצאו את הציון המקורי של רן, וכתבו את נקודת החיתוך `(x,y)` של שני המודלים.',
      answerLabel:'דרך, ציון ונקודת חיתוך:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 79, question 4 — find Ran original score when both improvement methods give the same result and identify the corresponding graph point',
      adaptation:'שאלת המקור נשמרה; נקודת הגרף נכתבת במפורש כזוג סדור כדי לקשור לנקודת איזון בין ישרים.'
    },
    {
      id:'J2-SCORE-P51-Q6',family:'MD03,MD04',level:9,responseSpace:'mixed',
      stem:'המשיכו להשוות בין `y=x+10` ובין `y=1.2x`.',
      subparts:[
        {label:'א.',text:'דינה מעדיפה את דרך II. מה תוכלו לומר על הציון המקורי שלה? כתבו תחום ונמקו בקצרה.',responseSpace:'lines-2'},
        {label:'ב.',text:'עופר מצא שבדרך II הוא מקבל `5` נקודות יותר מאשר בדרך I. מה היה ציונו המקורי?',responseSpace:'lines-2'}
      ],
      sourceRefs:['jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 79, question 5 — Dina prefers method II; infer her original-score domain from the graph','jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 79, question 7 — method II gives Ofer 5 points more than method I; find his original score'],
      adaptation:'שתי שאלות המקור אוחדו לכרטיס אחד משום שהן נשענות על אותם שני מודלים; אין שינוי בנתונים.'
    }
  ]
};
