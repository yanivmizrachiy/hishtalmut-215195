// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 6,
  "chapter": 2,
  "kicker": "אפיון של פונקציה קווית",
  "title": "קצב השתנות וייצוג אלגברי",
  "subtitle": "טבלה → ישר → קצב קבוע → נוסחה → הצבה ושאלה הפוכה · רמות 1–7",
  "rule": "פונקציה קווית יכולה להופיע בטבלה, בגרף או בנוסחה. קצב השתנות אחיד נשאר קבוע, והנקודות המתאימות נמצאות על קו ישר.",
  "sourceRefs": [
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-49-question-1",
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-11-tower-model",
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-12-celsius-fahrenheit",
    "razpages:bank.json rate-of-change and graph-from-table families"
  ],
  "questions": [
    {
      "id": "J2-P49-P06-Q1",
      "family": "C02,S02,S03,D02",
      "level": 1,
      "levelLabel": "רמות 1–3",
      "responseSpace": "mixed",
      "stem": "לפניכם טבלת ערכים של פונקציה.",
      "table": {
        "rows": [
          ["`x`", "1", "2", "3", "4", "5", "6", "7"],
          ["`y`", "4", "7", "10", "13", "16", "19", "22"]
        ]
      },
      "graph": {"xMin":0,"xMax":8,"yMin":0,"yMax":25,"xTick":1,"yTick":1,"showCoordinates":false,"ariaLabel":"מערכת צירים ריקה לסימון נקודות הטבלה מעמוד 49"},
      "subparts": [
        {"label":"א.","level":1,"text":"סרטטו את הנקודות על מערכת הצירים ובדקו האם ניתן להעביר דרכן ישר.","responseSpace":"graph-draw"},
        {"label":"ב.","level":2,"text":"האם הטבלה מתארת קצב שינוי קבוע של פונקציה? נמקו.","responseSpace":"lines-2"},
        {"label":"ג.","level":2,"text":"מהו קצב השינוי?","responseSpace":"short"}
      ],
      "mathModel": {"standard":{"A":-3,"B":1,"C":1},"expected":{"m":3,"b":1,"xIntercept":[-1,3]},"probes":[{"x":1,"expectedY":4},{"x":7,"expectedY":22}]},
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 49, question 1(a-c) — exact table x=1..7, y=4,7,10,13,16,19,22; plot points, test whether a straight line passes through them, determine constant rate and rate value",
      "adaptation": "טבלת המקור וכל דרישות סעיפים א–ג נשמרו; מערכת הצירים נבנתה מחדש בסגנון האחיד של הספר."
    },
    {
      "id": "J2-P49-P06-Q2",
      "family": "S07,V01",
      "level": 3,
      "responseSpace": "mixed",
      "stem": "המשיכו את אותה פונקציה מן הטבלה של שאלה 1.",
      "subparts": [
        {"label":"ד1.","text":"מהו ערך ה־`y` של הנקודה על הישר כאשר `x=12`?","responseSpace":"short"},
        {"label":"ד2.","text":"מהו ערך ה־`y` של הנקודה על הישר כאשר `x=-2`?","responseSpace":"short"}
      ],
      "mathModel": {"standard":{"A":-3,"B":1,"C":1},"probes":[{"x":12,"expectedY":37},{"x":-2,"expectedY":-5}]},
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 49, question 1(d) — find y on the same line for x=12 and x=-2",
      "adaptation": "שני ערכי x של המקור נשמרו ללא שינוי."
    },
    {
      "id": "C03-P06-Q3",
      "family": "C03",
      "level": 4,
      "responseSpace": "lines-2",
      "stem": "הסבירו במילים מדוע קצב שינוי קבוע מתאים לגרף שהוא קו ישר.",
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, pages 49-50 — איחוד בין קצב שינוי אחיד, גרף קו ישר וייצוג אלגברי ליניארי",
      "adaptation": "שאלת הסבר קצרה המחברת את שלושת הייצוגים בהתאם לדגש המקור."
    },
    {
      "id":"J2-TOWER-P06-Q4","family":"S07","level":4,"responseSpace":"mixed",
      "stem":"דנה בונה מגדלים מקוביות. מספר הקוביות `N` הדרוש לבניית מגדל תלוי במספר הקומות `k` לפי הנוסחה `N=3k+1`.",
      "subparts":[
        {"label":"א.","text":"כמה קוביות דרושות לדנה כדי לבנות מגדל בעל 8 קומות?","responseSpace":"lines-2"},
        {"label":"ב.","text":"לדנה יש 31 קוביות. מהו מספר הקומות המקסימלי שהיא יכולה לבנות במגדל אחד? הציגו דרך חישוב.","responseSpace":"lines-2"}
      ],
      "sourceRef":"jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 11, example 1 — Dana tower model N=3k+1; 8-floor substitution and inverse question with 31 cubes",
      "adaptation":"נשמרו הנוסחה, הנתונים ושני סעיפי המקור; סימוני N ו-k נשמרו כפי שמופיעים במקור."
    },
    {
      "id":"Q08-P06-Q5","family":"Q08,S03","level":5,"responseSpace":"equation",
      "stem":"כתבו את הייצוג האלגברי בצורה `y=mx+b` של הפונקציה שבטבלה של שאלה 1.",
      "answerLabel":"`y=`",
      "sourceRefs":["jerusalem2:src/content/curriculum/idkun-algebri-8.json, pages 49-50 — מעבר מטבלה ליניארית לייצוג אלגברי מהצורה y=mx+b","razpages:bank.json graph-from-table sum-p094"],
      "adaptation":"סוגר את המעבר מן הטבלה המדויקת של המקור אל הייצוג האלגברי."
    },
    {
      "id":"J2-FC-P06-Q6","family":"S07","level":6,"responseSpace":"mixed",
      "stem":"הקשר בין טמפרטורה במעלות פרנהייט `F` לבין טמפרטורה במעלות צלזיוס `C` נתון בנוסחה `F=1.8C+32`.",
      "subparts":[
        {"label":"א.","level":6,"text":"במעבדה חיממו מים ל־25 מעלות צלזיוס. מה תהיה הטמפרטורה במעלות פרנהייט? הציגו דרך חישוב.","responseSpace":"lines-2"},
        {"label":"ב.","level":6,"text":"מים רותחים ב־100 מעלות צלזיוס. כמה הן מעלות אלו בפרנהייט?","responseSpace":"lines-2"},
        {"label":"ג.","level":7,"text":"אם מד החום מראה 32 מעלות פרנהייט, מהי הטמפרטורה במעלות צלזיוס?","responseSpace":"lines-2"}
      ],
      "sourceRef":"jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 12, example 4 — Celsius/Fahrenheit formula F=1.8C+32 and all three source subquestions",
      "adaptation":"נשמרו הנוסחה, הנתונים ושלושת סעיפי המקור; הניסוח קוצר קלות ללא שינוי מתמטי."
    }
  ]
};
