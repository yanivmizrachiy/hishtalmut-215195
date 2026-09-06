export const page={
  page:50,
  chapter:20,
  kicker:'פרק 20 · בעיות מילוליות ומודלים קוויים',
  title:'בונים מודלים ומשווים ביניהם',
  subtitle:'תשלום קבוע → מחיר ליחידה → גרף → החלטה',
  rule:'במודל קווי מהצורה `y=mx+b`, המספר `m` מייצג את השינוי במחיר לכל יחידה נוספת, והמספר `b` מייצג את התשלום הקבוע כאשר `x=0`.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#pages-87-88-solar-electricity',
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-70-gardening-contractors'
  ],
  questions:[
    {
      id:'MD01-P50-Q1',family:'MD01',level:4,responseSpace:'mixed',
      stem:'משפחת לוי משווה בין שתי תכניות חשמל. בתכנית "חשמל רגיל" משלמים `0.6` ש״ח לכל קוט״ש ואין תשלום קבוע. בתכנית "גג ירוק" משלמים `120` ש״ח קבועים ועוד `0.2` ש״ח לכל קוט״ש. נסמן ב־`x` את מספר הקוט״ש בחודש.',
      subparts:[
        {text:'כתבו את פונקציית המחיר של "חשמל רגיל".',responseSpace:'equation'},
        {text:'כתבו את פונקציית המחיר של "גג ירוק".',responseSpace:'equation'},
        {text:'בכל פונקציה ציינו מהו `m` ומהו `b` ומה המשמעות שלהם בהקשר.',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 87 — regular electricity: 0.6 NIS per kWh and no fixed fee; green roof: 120 NIS fixed plus 0.2 NIS per kWh; write expressions',
      adaptation:'הנתונים והמשימה המקוריים נשמרו; נוספה בקשה מפורשת לפרש m ו-b לפי שפת ההוראה הקנונית של הפרויקט.'
    },
    {
      id:'MD02-P50-Q2',family:'MD02',level:5,responseSpace:'lines-2',
      stem:'אם המשפחה צרכה `200` קוט״ש, חשבו את המחיר בכל אחת מהתכניות ואת ההפרש ביניהן.',
      answerLabel:'חישוב ומסקנה:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88, question 1 — at 200 kWh determine the difference between the two plans',
      adaptation:'במקור השאלה אמריקאית; כאן נשמרה אותה שאלה כתרגיל חישובי קצר עם דרך לפני בחירת מסקנה.'
    },
    {
      id:'MD02-P50-Q3',family:'MD02',level:6,responseSpace:'choice-mark',
      stem:'לפי החישוב עבור `200` קוט״ש, איזו מסקנה נכונה?',
      choices:['"חשמל רגיל" זולה ב־40 ש״ח','"גג ירוק" זולה ב־40 ש״ח','המחיר זהה בשתי התכניות','"גג ירוק" יקרה ב־120 ש״ח'],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88, question 1 — original multiple-choice conclusions for 200 kWh',
      adaptation:'נשמרו ארבע אפשרויות המקור; הן מופיעות אחרי חישוב כדי שהסימון יתבסס על דרך ולא על ניחוש.'
    },
    {
      id:'J2-GARDEN-P50-Q4',family:'MD01,MD02',level:7,responseSpace:'mixed',
      stem:'שלושה קבלני גינון מציעים לסדר גינה ששטחה `x` מ״ר: ברוך — `700` ש״ח לייעוץ ועוד `10` ש״ח לכל מ״ר; גדליה — `200` ש״ח לייעוץ ועוד `30` ש״ח לכל מ״ר; אורי — `45` ש״ח לכל מ״ר והייעוץ כלול.',
      graph:{
        xMin:0,xMax:50,yMin:0,yMax:2500,xTick:10,yTick:500,showCoordinates:false,
        ariaLabel:'שלושה ישרים של הצעות קבלני גינון: ברוך עשר איקס ועוד שבע מאות, גדליה שלושים איקס ועוד מאתיים, אורי ארבעים וחמש איקס',
        lines:[{through:[[0,700],[50,1200]]},{through:[[0,200],[50,1700]]},{through:[[0,0],[50,2250]]}],
        points:[{x:40,y:1100,label:'I'},{x:40,y:1400,label:'II'},{x:40,y:1800,label:'III'}]
      },
      subparts:[
        {label:'א.',text:'כתבו ליד `I`, `II`, `III` את שם הקבלן המתאים.',responseSpace:'short'},
        {label:'ב.',text:'כתבו את שלוש פונקציות המחיר.',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, question 1 + contractor offers — match the three price graphs to Baruch, Gedalia and Uri',
      adaptation:'שלושת הישרים שוחזרו מנתוני המחיר המדויקים של המקור; תוויות I–III הוצבו על הישרים כדי לאפשר התאמה בתוך הגרף הווקטורי של הספר.'
    },
    {
      id:'J2-GARDEN-P50-Q5',family:'MD02,MD03,X03',level:8,responseSpace:'mixed',
      stem:'המשיכו עם שלוש הצעות המחיר של הקבלנים.',
      subparts:[
        {label:'א.',text:'מהו שטח הגינה שבו אורי וגדליה גובים מחיר זהה, ומהו המחיר במקרה זה?',responseSpace:'lines-2'},
        {label:'ב.',text:'למשפחת ישראלי גינה של `100` מ״ר. כמה כסף תחסוך אם תבחר בהצעה הזולה ביותר במקום בהצעה היקרה ביותר? הסבירו בחישוב.',responseSpace:'lines-2'},
        {label:'ג.',text:'למשפחת מזרחי תקציב של `1500` ש״ח. איזה קבלן יסדר את השטח הגדול ביותר במסגרת התקציב, ומה גודל השטח?',responseSpace:'lines-2'},
        {label:'ד.',text:'גברת ירדני בחרה בגדליה משום שהצעתו הייתה הזולה ביותר עבורה. מה אפשר לומר על שטח הגינה שלה? כתבו תחום.',responseSpace:'equation'},
        {label:'ה.',text:'האם קיים שטח גינה שבו שלושת הקבלנים גובים אותו מחיר? נמקו בקצרה.',responseSpace:'lines-2'}
      ],
      sourceRefs:[
        'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, question 2 — find the garden area and price where Uri and Gedalia charge equally',
        'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, question 3 — 100-square-meter garden; compare the most expensive and cheapest offers and find the saving',
        'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, question 4 — budget 1500 NIS; determine which contractor can cover the largest garden area and its size',
        'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, question 5 — Gedalia was the cheapest offer; infer the possible garden-area range',
        'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, question 6 — determine whether all three contractors can charge the same price for one garden area'
      ],
      adaptation:'חמש שאלות המקור נשמרו כיחידת החלטה אחת כדי למנוע כפילות של כרטיסים. הנתונים לא שונו.'
    }
  ]
};
