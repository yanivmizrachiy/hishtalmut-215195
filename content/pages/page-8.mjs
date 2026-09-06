// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 8,
  "chapter": 3,
  "kicker": "אפיון של פונקציה קווית",
  "title": "עולה, יורד או קבוע",
  "subtitle": "גרף → טבלה → מודל יורד · רמות 1–5",
  "rule": "כאשר `x` גדל: אם `y` גדל — הפונקציה עולה; אם `y` קטן — הפונקציה יורדת; ואם `y` אינו משתנה — הפונקציה קבועה.",
  "sourceRefs": [
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-13-increasing-decreasing-from-graph",
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-13-max-heart-rate",
    "SOURCE_OF_TRUTH.md#8"
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
      "id":"J2-HR-P08-Q4","family":"M05","level":4,"responseSpace":"lines-2",
      "stem":"הדופק המרבי המומלץ `M` לפי גיל המתאמן `x` נתון בנוסחה `M=208-0.7x`. מאמן כושר בן 40 רוצה לדעת מהו הדופק המרבי שלו. חשבו בעזרת הנוסחה.",
      "sourceRef":"jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 13, example 5(a) — maximal heart rate M=208-0.7x for a 40-year-old trainer",
      "adaptation":"שאלת המקור והנוסחה נשמרו ללא שינוי מתמטי."
    },
    {
      "id":"J2-HR-P08-Q5","family":"M05","level":5,"responseSpace":"lines-4",
      "stem":"לפי אותה נוסחה `M=208-0.7x`, מי יכול להגיע לדופק גבוה יותר בזמן מאמץ: נער בן 15 או אדם בן 60? הוכיחו בעזרת הצבה בנוסחה.",
      "sourceRef":"jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 13, example 5(b) — compare a 15-year-old and a 60-year-old by substitution in M=208-0.7x",
      "adaptation":"שאלת המקור נשמרה במלואה; היא משמשת יישום מדויק של פונקציה יורדת בהקשר מציאותי."
    }
  ]
};
