export const page={
  page:57,
  chapter:24,
  kicker:'פרק 24 · משימות אינטגרטיביות, חקר והערכה',
  title:'מה אפשר להוכיח על המרובע?',
  subtitle:'חפיפה → היקף → תכונות',
  rule:'במשימה אינטגרטיבית משלבים מידע אלגברי וגאומטרי: משוואות ישרים, מקבילות, אורכים, חפיפה ותכונות של מרובע. כל מסקנה צריכה להישען על נתון או על תוצאה שכבר הוכחה.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-71-question-6-h-k'
  ],
  questions:[
    {
      id:'IG01-P57-Q1',family:'IG01',level:8,responseSpace:'explanation',
      stem:'האם המשולשים `ABC` ו־`DBC` חופפים? נמקו.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 71, question 6(h) — are triangles ABC and DBC congruent; justify'
    },
    {
      id:'IG02-P57-Q2',family:'IG02',level:9,responseSpace:'explanation',
      stem:'האם קיימים משולשים חופפים נוספים בשרטוט שהתקבל? אם כן, ציינו אותם ונמקו.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 71, question 6(i) — identify additional congruent triangles if any'
    },
    {
      id:'IG03-P57-Q3',family:'IG03',level:9,responseSpace:'geometry-work',
      stem:'נתון שאורך הקטע `AC` הוא `28`. יוסי טוען שהיקף המרובע `ABCD` הוא `88`. בדקו את הטענה והציגו דרך.',
      answerLabel:'דרך ומסקנה:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 71, question 6(j) — AC=28; Yossi claims perimeter ABCD is 88; determine whether he is correct'
    },
    {
      id:'IG04-P57-Q4',family:'IG04',level:10,responseSpace:'explanation',
      stem:'כתבו לפחות שלוש תכונות של המרובע `ABCD`. התייחסו לצלעות, לאלכסונים ולזוויות, ונמקו כל תכונה.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 71, question 6(k) — write at least three properties of ABCD concerning sides, diagonals and angles',
      adaptation:'נשמרה דרישת המקור; נוספה בקשה לנמק כל תכונה כדי להתאים לרמת החקר הגבוהה.'
    },
    {
      id:'G07-P57-Q5',family:'G07',level:10,responseSpace:'geometry-work',
      stem:'במערכת הצירים נתון מלבן שקדקודיו `A(0,0)`, `B(6,0)`, `C(6,4)`, `D(0,4)`. חשבו: א. את אורכי הצלעות `AB` ו־`BC`. ב. את שיפועי האלכסונים `AC` ו־`BD`. ג. את היקף המלבן ואת שטחו. הציגו דרך.',
      answerLabel:'דרך ותשובות:',
      sourceRef:'razpages:bank.json coordinate-system/geometry — אורכים, שיפועי אלכסונים, היקף ושטח של מלבן במערכת צירים; מספרים שונו',
      adaptation:'משימת גאומטריה אנליטית עצמאית (נתונים כל הקדקודים) המחזקת את אותן מיומנויות; אין הישענות על שרטוט חיצוני.'
    },
    {
      id:'IG05-P57-Q6',family:'IG05',level:10,responseSpace:'explanation',
      stem:'במשימות אלה שילבתם מידע אלגברי (שיפועים, משוואות, אורכים) עם מידע גאומטרי. הסבירו כיצד ידע על שיפועים ומקבילות עוזר להוכיח תכונות של מרובע במערכת הצירים.',
      sourceRef:'SOURCE_OF_TRUTH.md#9 — רפלקציה על הקשר בין אלגברה לגאומטריה אנליטית',
      adaptation:'שאלת רפלקציה מתודית הסוגרת את המשימה האינטגרטיבית, ללא נתונים חדשים.'
    }
  ]
};
