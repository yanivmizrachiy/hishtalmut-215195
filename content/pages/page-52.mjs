export const page={
  page:52,
  chapter:20,
  kicker:'פרק 20 · בעיות מילוליות ומודלים קוויים',
  title:'מפרשים את המודל ומקבלים החלטה',
  subtitle:'מציבים נתון אמיתי → משווים → מנמקים בעזרת השיפוע',
  rule:'במודל קווי, השיפוע אומר בכמה המחיר משתנה בכל פעם ש־`x` גדל ב־1. לכן כאשר הצריכה גדלה, ההפרש בין שתי תכניות תלוי גם בהפרש בין השיפועים שלהן.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-88-solar-recommendation'
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
      id:'MD05-P52-Q4',family:'MD05,X03',level:8,responseSpace:'lines-2',
      stem:'פונקציות המחיר הן "גג ירוק" `y=0.6x` ו"חשמל רגיל" `y=0.2x+120` (`x` בקוט״ש). מצאו את הצריכה שבה המחיר בשתי התכניות שווה. הציגו דרך.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88 — break-even consumption between the two plans',
      adaptation:'מציאת נקודת השוויון בין שני המודלים במפורש; הנתונים נשמרו.'
    },
    {
      id:'MD05-P52-Q5',family:'MD05',level:9,responseSpace:'lines-2',
      stem:'מהו המחיר (בש״ח) בנקודת השוויון שמצאתם? הסבירו מה המשמעות של נקודה זו עבור המשפחה.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88 — price at break-even and its meaning',
      adaptation:'פירוש נקודת השוויון בהקשר; הנתונים נשמרו.'
    },
    {
      id:'MD06-P52-Q6',family:'MD06',level:9,responseSpace:'lines-2',
      stem:'עבור צריכת קיץ של `1200` קוט״ש, בכמה שקלים תכנית אחת יקרה יותר מהשנייה? הציגו חישוב, וקבעו איזו תכנית משתלמת יותר בצריכה זו.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88 — compare the two plans at high consumption',
      adaptation:'השוואת מחיר בצריכה גבוהה וקבלת החלטה; הנתונים נשמרו.'
    }
  ]
};
