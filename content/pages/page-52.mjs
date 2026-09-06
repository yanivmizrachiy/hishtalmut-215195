export const page={
  page:52,
  chapter:20,
  kicker:'פרק 20 · בעיות מילוליות ומודלים קוויים',
  title:'מפרשים את המודל ומקבלים החלטה',
  subtitle:'מציבים נתון אמיתי → משווים → מנמקים בעזרת השיפוע',
  rule:'במודל קווי, השיפוע אומר בכמה ערך הפונקציה משתנה בכל פעם ש־`x` גדל ב־1. לכן אפשר להסביר הבדלים בין מודלים גם דרך השיפועים ולא רק דרך הצבה.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-88-solar-recommendation',
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-79-score-improvement'
  ],
  questions:[
    {
      id:'MD05-P52-Q1',family:'MD05',level:6,responseSpace:'full-work',
      stem:'משרד האנרגיה פרסם כי משפחה ממוצעת בישראל צורכת כ־`800` קוט״ש בחודש. חשבו את המחיר בשתי התכניות עבור צריכה זו.',
      answerLabel:'חישוב:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88, question ד(1) — average family consumes about 800 kWh; decide whether to recommend the solar plan using calculation',
      adaptation:'שלב החישוב הופרד מן ההמלצה כדי להשאיר מקום מספק לדרך.'
    },
    {
      id:'MD05-P52-Q2',family:'MD05',level:7,responseSpace:'explanation',
      stem:'בהסתמך על החישוב, האם הייתם ממליצים למשפחה ממוצעת לעבור לתכנית "גג ירוק"? נמקו.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88, question ד(1) — recommend or not, justify with calculation',
      adaptation:'נשמרה שאלת המקור כהחלטה מנומקת לאחר שלב החישוב.'
    },
    {
      id:'MD06-P52-Q3',family:'MD06',level:8,responseSpace:'mixed',
      stem:'בחודשי הקיץ הצריכה עולה ב־50% מן הממוצע.',
      subparts:[
        {text:'מה תהיה הצריכה החדשה בקוט״ש?',responseSpace:'short'},
        {text:'בלי לחשב תחילה מחיר מדויק: האם החיסכון של "גג ירוק" צפוי לגדול, לקטון או להישאר קבוע?',responseSpace:'choice-mark',choices:['לגדול','לקטון','להישאר קבוע']},
        {text:'הסבירו את תשובתכם בעזרת השיפועים `0.6` ו־`0.2`.',responseSpace:'lines-4'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88, question ד(2) — summer consumption rises by 50%; explain effect on monthly savings, referring to slope',
      adaptation:'נשמרה דרישת המקור להסבר ללא צורך בחישוב מחיר מדויק; נוסף שדה קצר למציאת הצריכה החדשה.'
    },
    {
      id:'J2-SCORE-P52-Q4',family:'MD04',level:9,responseSpace:'mixed',
      stem:'בשיפור ציונים: דרך I היא `y=x+10` ודרך II היא `y=1.2x`. לכל היגד סמנו: דרך I, דרך II, שתי הדרכים או אף אחת.',
      subparts:[
        {label:'א.',text:'התוספת לציון גדולה יותר ככל שהציון במבחן גבוה יותר.',responseSpace:'choice-mark',choices:['I','II','שתיהן','אף אחת']},
        {label:'ב.',text:'הציונים הנמוכים מקבלים תוספת גדולה יותר מאשר הציונים הגבוהים.',responseSpace:'choice-mark',choices:['I','II','שתיהן','אף אחת']},
        {label:'ג.',text:'שני ציונים שונים יכולים לקבל אותה תוספת.',responseSpace:'choice-mark',choices:['I','II','שתיהן','אף אחת']},
        {label:'ד.',text:'הציון `50` משתפר לציון `60`.',responseSpace:'choice-mark',choices:['I','II','שתיהן','אף אחת']},
        {label:'ה.',text:'הציון המשופר יכול להיות גדול פי `2` מהציון המקורי.',responseSpace:'choice-mark',choices:['I','II','שתיהן','אף אחת']}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 79, question 6 — classify five statements as fitting method I, method II, both or neither and explain',
      adaptation:'חמשת היגדי המקור נשמרו. דרישת ההסבר נתמכת בדיון המשותף על שני המודלים בעמודים 51–52; רכיב הסימון נשמר קומפקטי כדי למנוע כפילות וגלישת A4.'
    }
  ]
};
