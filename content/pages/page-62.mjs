export const page={
  page:62,
  chapter:24,
  kicker:'פרק 24 · משימות אינטגרטיביות, חקר והערכה',
  title:'מבצע צבי הים — אילוץ חדש וקבלת החלטה',
  subtitle:'בודקים פתרון → מזהים בעיה → מציעים שינוי',
  rule:'פתרון מתמטי טוב חייב להתאים גם לאילוצים של המציאות. כאשר נוסף אילוץ חדש, בודקים מחדש אם הפתרון עדיין אפשרי; אם לא, מסבירים מה נכשל ומציעים שינוי סביר.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-99-sea-turtles-constraint'
  ],
  questions:[
    {
      id:'IT04-P62-Q1',family:'IT04',level:9,responseSpace:'mixed',
      stem:'בבוקר המבצע התברר כי `25` מצבי הים הם צעירים, והם אינם יכולים לשאת משדר השוקל יותר מ־`300` גרם.',
      subparts:[
        {text:'איזה מסוגי המשדרים מתאים לצב צעיר לפי מגבלת המשקל?',responseSpace:'short'},
        {text:'בפתרון שמצאתם היו `20` משדרים קלים ו־`10` משדרים לווייניים. האם יש מספיק משדרים מתאימים ל־`25` הצבים הצעירים?',responseSpace:'choice-mark',choices:['כן','לא']},
        {text:'הסבירו מדוע הפתרון המקורי כבר אינו מאפשר את ביצוע המשימה עבור כל `30` הצבים.',responseSpace:'lines-4'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 99 — 25 young turtles cannot carry a transmitter heavier than 300g; determine whether the original solution still works',
      adaptation:'המשימה המקורית פוצלה לזיהוי המשדר המתאים, בדיקת כמות והסבר.'
    },
    {
      id:'IT05-P62-Q2',family:'IT05',level:10,responseSpace:'explanation',
      stem:'הציעו שינוי אחד שהחוקרים יכולים לבצע כדי לפתור את הבעיה החדשה. אפשר לשנות למשל את התקציב או את מספר הצבים. הסבירו כיצד השינוי שלכם פותר את האילוץ.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 99 — propose one change such as budget or number of turtles to resolve the new constraint'
    },
    {
      id:'IT06-P62-Q3',family:'IT06',level:10,responseSpace:'explanation',
      stem:'חוקר הציע לקנות רק משדרים קלים כדי לעקוב אחרי יותר צבים באותו תקציב. ציינו סיבה מדעית אחת שבגללה הצוות עשוי להתנגד להצעה, למרות החיסכון הכספי.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 99 — discuss why researchers may reject buying only Lite transmitters despite lower cost'
    },
    {
      id:'IT04-P62-Q4',family:'IT04',level:10,responseSpace:'full-work',
      stem:'בפתרון המקורי היו `20` משדרים קלים. אם רק המשדרים הקלים מתאימים ל־`25` הצבים הצעירים (בשל מגבלת המשקל), כמה צבים צעירים יישארו בלי משדר מתאים? הציגו חישוב, והסבירו מה המשמעות למבצע.',
      answerLabel:'חישוב ומשמעות:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 99 — quantify the shortfall of suitable transmitters for the young turtles',
      adaptation:'המשך כמותי הנשען אך ורק על נתוני התרחיש הקיימים (20 קלים, 25 צעירים); אין המצאת נתונים חדשים.'
    },
    {
      id:'IT06-P62-Q5',family:'IT06',level:10,responseSpace:'explanation',
      stem:'בבעיות שיש בהן אילוצים מהמציאות — מדוע לא מספיק למצוא פתרון מתמטי נכון, אלא צריך גם לבדוק אותו מול תנאי המציאות? הביאו דוגמה מן המשימה הזו.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 99 — reflect on why a mathematically valid solution must also satisfy real-world constraints',
      adaptation:'שאלת רפלקציה מתודית הסוגרת את המשימה האינטגרטיבית, ללא נתונים חדשים.'
    }
  ]
};
