// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 10,
  "chapter": 5,
  "kicker": "פרק 5 · מציאת שיפוע",
  "title": "מציאת שיפוע מטבלה",
  "subtitle": "צעדי x של 1 → צעדים גדולים → צעדים לא אחידים · רמות 2–6",
  "rule": "כדי למצוא שיפוע מטבלה בודקים את השינוי ב־`y` ביחס לשינוי ב־`x`. מתחילים מטבלאות שבהן `x` גדל ב־1, ורק אחר כך עוברים לצעדים אחרים.",
  "sourceRefs": [
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-31-rate-of-change-ratio",
    "SOURCE_OF_TRUTH.md#6 — progression from simple integer steps to unequal steps",
    "SOURCE_OF_TRUTH.md#7 — chapter 5: finding slope"
  ],
  "questions": [
    {
      "id": "S03-P10-Q1",
      "family": "S03",
      "level": 2,
      "responseSpace": "mixed",
      "stem": "מצאו את השיפוע.",
      "table": {"rows":[["`x`","-1","0","1","2"],["`y`","2","5","8","11"]]},
      "subparts": [
        {"label":"א.","text":"בכל פעם ש־`x` גדל ב־1, `y` משתנה ב־","responseSpace":"short"},
        {"label":"ב.","text":"לכן `m=`","responseSpace":"short"}
      ],
      "sourceRefs": [
        "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 31 — קצב שינוי הוא היחס בין שינוי y לשינוי x",
        "SOURCE_OF_TRUTH.md#8.7 — כאשר x גדל ב-1 השיפוע הוא השינוי ב-y"
      ],
      "adaptation": "שלב פתיחה עם צעדי x של 1 וערכים שלמים פשוטים."
    },
    {
      "id": "S04-P10-Q2",
      "family": "S04",
      "level": 4,
      "responseSpace": "full-work",
      "stem": "כאן `x` גדל בכל פעם ב־2. מצאו את השיפוע והציגו דרך.",
      "table": {"rows":[["`x`","0","2","4","6"],["`y`","1","9","17","25"]]},
      "answerLabel": "דרך:",
      "sourceRefs": [
        "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 31 — יחס שינוי y לשינוי x",
        "SOURCE_OF_TRUTH.md#6.4 — התקדמות מספרית לאחר שליטה בבסיס"
      ],
      "adaptation": "אותו יחס קצב עם צעד x של 2 כדי למנוע זיהוי שגוי של השיפוע כהפרש y בלבד."
    },
    {
      "id": "S05-P10-Q3",
      "family": "S05",
      "level": 5,
      "responseSpace": "full-work",
      "stem": "צעדי `x` אינם שווים. בדקו כמה זוגות עוקבים וקבעו את השיפוע.",
      "table": {"rows":[["`x`","1","3","6","10"],["`y`","4","10","19","31"]]},
      "answerLabel": "דרך:",
      "sourceRefs": [
        "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 31 — יחס השינויים הוא הקריטריון לקצב אחיד",
        "SOURCE_OF_TRUTH.md#6 — מעבר הדרגתי מצעדים פשוטים לביטויים מורכבים יותר"
      ],
      "adaptation": "צעדי x לא אחידים מחייבים לחשב Δy/Δx בכמה זוגות ולא להסתמך על הפרש יחיד."
    },
    {
      "id": "S08-P10-Q4",
      "family": "S08",
      "level": 6,
      "responseSpace": "lines-4",
      "stem": "האם הנתונים הבאים יכולים להשתייך לפונקציה קווית אחת? נמקו.",
      "table": {"rows":[["`x`","0","2","5","8"],["`y`","2","8","17","25"]]},
      "answerLabel": "נימוק:",
      "sourceRefs": [
        "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 31 — אם יחס השינויים אינו קבוע, קצב השינוי אינו אחיד",
        "SOURCE_OF_TRUTH.md#6 — השוואה וסיווג לאחר שליטה בחישוב"
      ],
      "adaptation": "שאלת סיווג ונימוק הבודקת אם כל הזוגות מתאימים לשיפוע יחיד."
    }
  ]
};
