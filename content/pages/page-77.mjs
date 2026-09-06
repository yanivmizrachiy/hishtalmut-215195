export const page={
  page:77,
  chapter:20,
  kicker:'פרק 20 · בעיות מילוליות ומודלים קוויים',
  title:'שלושה קבלנים — משווים שלושה מודלים',
  subtitle:'שלושה ישרים → נקודות איזון → תקציב → תחומי כדאיות',
  rule:'כאשר משווים כמה מודלים קוויים, בודקים נקודות חיתוך וגם תחומים: באיזה תחום כל פונקציה נותנת ערך קטן או גדול מן האחרות.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-70-gardening-contractors'
  ],
  questions:[
    {
      id:'J2-GARDEN-P77-Q1',family:'MD01,MD02',level:6,responseSpace:'mixed',
      stem:'שלושה קבלנים מציעים לסדר גינה. ברוך גובה `700` ש״ח לייעוץ ועוד `10` ש״ח לכל מ״ר; גדליה גובה `200` ש״ח לייעוץ ועוד `30` ש״ח לכל מ״ר; אורי גובה `45` ש״ח לכל מ״ר והייעוץ כלול במחיר. נסמן ב־`x` את שטח הגינה וב־`y` את המחיר.',
      subparts:[
        {label:'א.',text:'כתבו פונקציית מחיר לכל קבלן.',responseSpace:'lines-2'},
        {label:'ב.',text:'זהו בגרף את שלושת הישרים לפי השיפוע והחיתוך עם ציר `y`.',responseSpace:'short'}
      ],
      graph:{xMin:0,xMax:50,yMin:0,yMax:2500,xTick:10,yTick:500,showCoordinates:false,ariaLabel:'שלושת מודלי המחיר של הקבלנים ברוך גדליה ואורי',lines:[{through:[[0,700],[50,1200]]},{through:[[0,200],[50,1700]]},{through:[[0,0],[50,2250]]}]},
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70 — Baruch: 700 NIS consultation plus 10 NIS per square meter; Gedalia: 200 plus 30 per square meter; Uri: 45 per square meter including consultation; three source graphs are compared',
      adaptation:'שלושת נתוני המקור נשמרו במלואם. במקום לנחש את סימוני I/II/III שבתמונת המקור, התלמיד מזהה את הישרים מתוך אותם שלושה מודלים מדויקים.'
    },
    {
      id:'J2-GARDEN-P77-Q2',family:'MD02,X03',level:7,responseSpace:'mixed',
      stem:'השתמשו בשלושת מודלי המחיר שכתבתם.',
      subparts:[
        {label:'א.',text:'מהו שטח הגינה שבו אורי וגדליה גובים מחיר זהה? מהו המחיר במקרה זה?',responseSpace:'lines-2'},
        {label:'ב.',text:'למשפחת ישראלי גינה בשטח `100` מ״ר. כמה כסף תחסוך המשפחה אם תבחר בהצעה הזולה ביותר במקום בהצעה היקרה ביותר? הסבירו.',responseSpace:'lines-2'},
        {label:'ג.',text:'למשפחת מזרחי תקציב של `1500` ש״ח. איזה קבלן יוכל לסדר לה את הגינה הגדולה ביותר במסגרת התקציב, ומה יהיה שטח הגינה?',responseSpace:'lines-2'}
      ],
      sourceRefs:[
        'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, question 2 — area and price where Uri and Gedalia charge the same',
        'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, question 3 — Israeli family has 100 square meter garden; compare most expensive and cheapest proposals and find savings',
        'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, question 4 — Mizrahi family has a 1500 NIS budget; choose contractor giving largest possible garden and find its area'
      ],
      adaptation:'שלוש שאלות המקור נשמרו עם כל המספרים וההקשרים; הן אוחדו ליחידת השוואה אחת משום שהן נשענות על אותם שלושה מודלים.'
    },
    {
      id:'J2-GARDEN-P77-Q3',family:'MD03,MD04',level:8,responseSpace:'mixed',
      stem:'עברו מנקודות חיתוך לתחומי כדאיות.',
      subparts:[
        {label:'א.',text:'גברת ירדני בחרה בגדליה משום שהצעתו הייתה הזולה ביותר עבורה. מה תוכלו לומר על שטח הגינה שלה? נמקו בעזרת אי־שוויונות או נקודות חיתוך.',responseSpace:'lines-2'},
        {label:'ב.',text:'האם קיים שטח גינה שבו שלושת הקבלנים גובים אותו מחיר? הסבירו.',responseSpace:'lines-2'}
      ],
      sourceRefs:[
        'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, question 5 — Yardeni chose Gedalia as the cheapest offer; infer the possible garden area',
        'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, question 6 — determine whether all three contractors can charge the same price for one garden area and explain'
      ],
      adaptation:'שתי שאלות המקור נשמרו ללא שינוי בנתונים; נוספה הצעה מפורשת לנמק באמצעות אי־שוויונות או נקודות חיתוך בהתאם לשפת הפרק.'
    }
  ]
};
