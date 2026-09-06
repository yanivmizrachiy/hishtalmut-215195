// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 8,
  "chapter": 3,
  "kicker": "אפיון של פונקציה קווית",
  "title": "עולה, יורד או קבוע",
  "subtitle": "גרף → טבלה → קשר לשינוי · רמות 1–5",
  "rule": "כאשר `x` גדל: אם `y` גדל — הפונקציה עולה; אם `y` קטן — הפונקציה יורדת; ואם `y` אינו משתנה — הפונקציה קבועה.",
  "sourceRefs": [
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-13-increasing-decreasing-from-graph",
    "SOURCE_OF_TRUTH.md#8",
    "razpages:bank.json increasing-decreasing"
  ],
  "questions": [
    {
      "id": "M01-P08-Q1",
      "family": "M01",
      "level": 1,
      "responseSpace": "mixed",
      "panelsColumns": 3,
      "stem": "כתבו מתחת לכל גרף: עולה, יורדת או קבועה.",
      "panels": [
        {"graph":{"xMin":-2,"xMax":2,"yMin":-2,"yMax":2,"showCoordinates":false,"ariaLabel":"ישר עולה","lines":[{"through":[[-2,-1.5],[2,1.5]]}]},"responseSpace":"equation"},
        {"graph":{"xMin":-2,"xMax":2,"yMin":-2,"yMax":2,"showCoordinates":false,"ariaLabel":"ישר יורד","lines":[{"through":[[-2,1.5],[2,-1.5]]}]},"responseSpace":"equation"},
        {"graph":{"xMin":-2,"xMax":2,"yMin":-2,"yMax":2,"showCoordinates":false,"ariaLabel":"ישר קבוע","lines":[{"through":[[-2,1],[2,1]]}]},"responseSpace":"equation"}
      ],
      "sourceRefs": [
        "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 13 — עלייה וירידה של פונקציה על סמך קריאה מהייצוג הגרפי",
        "SOURCE_OF_TRUTH.md#8 — פונקציה קבועה כאשר m=0"
      ],
      "adaptation": "הורחב לשלושה ישרים בסיסיים: עולה, יורד וקבוע."
    },
    {
      "id": "M02-P08-Q2",
      "family": "M02",
      "level": 2,
      "responseSpace": "mixed",
      "stem": "קבעו לפי כל טבלה אם הפונקציה עולה, יורדת או קבועה.",
      "panels": [
        {"table":{"rows":[["`x`","0","1","2","3"],["`y`","10","7","4","1"]]},"answerLabel":"סוג:","responseSpace":"short"},
        {"table":{"rows":[["`x`","-1","0","1","2"],["`y`","5","5","5","5"]]},"answerLabel":"סוג:","responseSpace":"short"}
      ],
      "sourceRefs": [
        "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 13 — זיהוי עלייה וירידה ובמעבר בין ייצוגים",
        "SOURCE_OF_TRUTH.md#6 — אותה מיומנות בייצוג נוסף"
      ],
      "adaptation": "המיומנות הגרפית הועברה לטבלה כדי לחזק מעבר ייצוג."
    },
    {
      "id": "M04-P08-Q3",
      "family": "M04",
      "level": 3,
      "responseSpace": "lines-2",
      "stem": "השלימו במילים: כאשר פונקציה קווית עולה, בכל פעם ש־`x` גדל גם `y` ________. כאשר היא יורדת, `y` ________.",
      "sourceRefs": [
        "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 13 — עלייה וירידה של פונקציה",
        "SOURCE_OF_TRUTH.md#8 — קשר מפורש בין שינוי x לשינוי y"
      ],
      "adaptation": "ניסוח מילולי ישיר של מגמת השינוי בהתאם לסגנון ההוראה המחייב."
    },
    {
      "id": "M05-P08-Q4",
      "family": "M05",
      "level": 5,
      "responseSpace": "mixed",
      "stem": "נתונה הנקודה `A(1,2)`. כתבו נקודה נוספת כך שהישר העובר דרך שתי הנקודות יהיה:",
      "subparts": [
        {"label":"א.","text":"עולה:","responseSpace":"equation"},
        {"label":"ב.","text":"יורד:","responseSpace":"equation"},
        {"label":"ג.","text":"קבוע:","responseSpace":"equation"}
      ],
      "sourceRef": "SOURCE_OF_TRUTH.md#6 — שאלה הפוכה/אילוץ לאחר זיהוי ישיר של אותה מיומנות",
      "adaptation": "כתיבה מקורית מתועדת: שאלה הפוכה לסגירת פער של יצירת ישר עולה, יורד או קבוע מנקודה נתונה."
    },
    {
      "id": "M03-P08-Q5",
      "family": "M03",
      "level": 5,
      "responseSpace": "mixed",
      "stem": "לכל פונקציה קבעו אם היא עולה, יורדת או קבועה.",
      "subparts": [
        { "label": "א.", "text": "`y=6x`", "responseSpace": "short" },
        { "label": "ב.", "text": "`y=-2x+9`", "responseSpace": "short" },
        { "label": "ג.", "text": "`y=-5`", "responseSpace": "short" }
      ],
      "sourceRef": "razpages:bank.json increasing-decreasing — קביעת כיוון הפונקציה מהצורה y=mx+b; מספרים שונו",
      "adaptation": "מיישם את סימן השיפוע לקביעת כיוון ישירות מן המשוואה; מספרים שונו."
    }
  ]
};
