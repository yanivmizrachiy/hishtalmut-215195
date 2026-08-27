export const page={
  page:50,
  chapter:20,
  kicker:'פרק 20 · בעיות מילוליות ומודלים קוויים',
  title:'בונים שני מודלים ומשווים ביניהם',
  subtitle:'מזהים תשלום קבוע → מזהים מחיר לכל יחידה → כותבים פונקציה',
  rule:'במודל קווי מהצורה `y=mx+b`, המספר `m` מייצג את השינוי במחיר לכל יחידה נוספת, והמספר `b` מייצג את התשלום הקבוע כאשר `x=0`.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#pages-87-88-solar-electricity'
  ],
  questions:[
    {
      id:'MD01-P50-Q1',family:'MD01',level:4,responseSpace:'mixed',
      stem:'משפחת לוי משווה בין שתי תכניות חשמל. בתכנית "חשמל רגיל" משלמים `0.6` ש״ח לכל קוט״ש ואין תשלום קבוע. בתכנית "גג ירוק" משלמים `120` ש״ח קבועים ועוד `0.2` ש״ח לכל קוט״ש. נסמן ב־`x` את מספר הקוט״ש בחודש.',
      subparts:[
        {text:'כתבו את פונקציית המחיר של "חשמל רגיל".',responseSpace:'equation'},
        {text:'כתבו את פונקציית המחיר של "גג ירוק".',responseSpace:'equation'},
        {text:'בכל פונקציה ציינו מהו `m` ומהו `b` ומה המשמעות שלהם בהקשר.',responseSpace:'lines-4'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 87 — regular electricity: 0.6 NIS per kWh and no fixed fee; green roof: 120 NIS fixed plus 0.2 NIS per kWh; write expressions',
      adaptation:'הנתונים והמשימה המקוריים נשמרו; נוספה בקשה מפורשת לפרש m ו-b לפי שפת ההוראה הקנונית של הפרויקט.'
    },
    {
      id:'MD02-P50-Q2',family:'MD02',level:5,responseSpace:'full-work',
      stem:'אם המשפחה צרכה `200` קוט״ש, חשבו את המחיר בכל אחת מהתכניות ואת ההפרש ביניהן.',
      answerLabel:'חישוב ומסקנה:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88, question 1 — at 200 kWh determine the difference between the two plans',
      adaptation:'במקור השאלה אמריקאית; כאן נשמרה אותה שאלה כתרגיל חישובי עם דרך מלאה לפני בחירת מסקנה.'
    },
    {
      id:'MD02-P50-Q3',family:'MD02',level:6,responseSpace:'choice-mark',
      stem:'לפי החישוב עבור `200` קוט״ש, איזו מסקנה נכונה?',
      choices:['"חשמל רגיל" זולה ב־40 ש״ח','"גג ירוק" זולה ב־40 ש״ח','המחיר זהה בשתי התכניות','"גג ירוק" יקרה ב־120 ש״ח'],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88, question 1 — original multiple-choice conclusions for 200 kWh',
      adaptation:'נשמרו ארבע אפשרויות המקור; הן מופיעות אחרי חישוב מלא כדי שהסימון יתבסס על דרך ולא על ניחוש.'
    }
  ]
};
