export const page={
  page:78,
  chapter:20,
  kicker:'פרק 20 · בעיות מילוליות ומודלים קוויים',
  title:'שלושה קבלנים — תחומי כדאיות',
  subtitle:'מי הזול ביותר? → תחום פתרון → האם שלושה ישרים נפגשים?',
  rule:'נקודת חיתוך אומרת מתי שתי הצעות שוות; כדי לדעת איזו הצעה זולה יותר צריך לבדוק את התחומים שבין נקודות החיתוך.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-70-gardening-contractors'
  ],
  questions:[
    {
      id:'J2-GARDEN-P78-Q1',family:'MD03,MD04',level:8,responseSpace:'mixed',
      stem:'המודלים הם: ברוך `y=10x+700`, גדליה `y=30x+200`, אורי `y=45x`.',
      subparts:[
        {label:'א.',text:'מצאו את נקודת החיתוך של גדליה וברוך ואת נקודת החיתוך של גדליה ואורי.',responseSpace:'lines-2'},
        {label:'ב.',text:'גברת ירדני בחרה בגדליה משום שהצעתו הייתה הזולה ביותר עבורה. מה תוכלו לומר על שטח הגינה שלה? כתבו תחום ונמקו.',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, question 5 — Yardeni chose Gedalia as the cheapest offer; infer the possible garden area',
      adaptation:'שאלת המקור נשמרה. נוסף שלב מקדים של מציאת שתי נקודות החיתוך הדרושות כדי שהתלמיד יוכל להצדיק את תחום הכדאיות באופן אלגברי.'
    },
    {
      id:'J2-GARDEN-P78-Q2',family:'MD03,X03',level:9,responseSpace:'mixed',
      stem:'בדקו האם שלוש ההצעות יכולות להיות שוות באותו שטח גינה.',
      subparts:[
        {label:'א.',text:'האם קיימת נקודה משותפת לשלושת הישרים? הסבירו בעזרת נקודות החיתוך או הצבה.',responseSpace:'lines-2'},
        {label:'ב.',text:'כתבו במילים מה מלמדת התשובה על האפשרות שכל שלושת הקבלנים יגבו אותו מחיר.',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, question 6 — determine whether all three contractors can charge the same price for one garden area and explain',
      adaptation:'שאלת המקור נשמרה; ההסבר חולק לחלק מתמטי ולפירוש מילולי כדי להדגיש את הקשר בין גרף, אלגברה והקשר.'
    },
    {
      id:'J2-GARDEN-P78-Q3',family:'MD04',level:9,responseSpace:'mixed',
      stem:'סכמו את תחומי הכדאיות של שלושת הקבלנים.',
      table:{rows:[['תחום שטח `x`','ההצעה הזולה ביותר'],['מתחילת התחום ועד נקודת החיתוך הראשונה',{'answer':true}],['בין שתי נקודות החיתוך הרלוונטיות',{'answer':true}],['אחרי נקודת החיתוך השנייה',{'answer':true}]]},
      sourceRefs:[
        'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 70, questions 2, 5 and 6 — compare contractor models by intersections and cheapest domains',
        'SOURCE_OF_TRUTH.md#6 — progress from calculation to comparison and interpretation'
      ],
      adaptation:'סיכום מקורי מתועד של שאלות המקור: אין נתונים חדשים; הטבלה מארגנת את מסקנות ההשוואה שכבר נדרשו בעמודים 77–78.'
    }
  ]
};
