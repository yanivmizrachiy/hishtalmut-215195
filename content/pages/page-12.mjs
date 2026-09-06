// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 12,
  "chapter": 5,
  "kicker": "פרק 5 · מציאת שיפוע",
  "title": "תלילות והשוואת שיפועים",
  "subtitle": "קנה מידה אחיד → |m| → נימוק · רמות 4–7",
  "rule": "כאשר משווים תלילות משתמשים בערך המוחלט של השיפוע `|m|` ובאותו קנה מידה של הצירים. ככל שהשיפוע רחוק יותר מאפס, הישר תלול יותר.",
  "sourceRefs": [
    "SOURCE_OF_TRUTH.md#8.13 — steepness is compared by |m| on the same scale",
    "SOURCE_OF_TRUTH.md#6 — progression to comparison, reasoning and error analysis"
  ],
  "questions": [
    {
      "id": "S16-P12-Q1",
      "family": "S16",
      "level": 4,
      "responseSpace": "choice-mark",
      "stem": "במערכת הצירים בעלת קנה מידה אחיד הישר עובר דרך `(0,0)` ו-`(4,2)`. איזה טווח מתאים לשיפוע שלו?",
      "choices": ["`m>1`","`0<m<1`","`m=0`","`m<0`"],
      "graph": {
        "xMin":-2,"xMax":6,"yMin":-3,"yMax":5,
        "lines":[{"through":[[0,0],[4,2]]}],
        "points":[[0,0],[4,2]],
        "step":[[0,0],[4,0],[4,2]]
      },
      "sourceRefs": [
        "SOURCE_OF_TRUTH.md#8.13 — השוואת תלילות מחייבת קנה מידה אחיד והסתכלות על גודל השיפוע",
        "SOURCE_OF_TRUTH.md#6 — מעבר מחישוב ישיר לסיווג"
      ],
      "adaptation": "כתיבה מקורית מתועדת הבודקת אומדן גודל השיפוע לפני השוואת תלילות מלאה."
    },
    {
      "id": "S17-P12-Q2",
      "family": "S17",
      "level": 5,
      "responseSpace": "short",
      "stem": "סדרו את השיפועים לפי תלילות הישר, מהפחות תלול ליותר תלול: `0, 1/2, 2, -4`.",
      "answerLabel": "הסדר הוא",
      "sourceRef": "SOURCE_OF_TRUTH.md#8.13 — ככל שהשיפוע רחוק יותר מ-0 כך הישר תלול יותר; משווים לפי |m|",
      "adaptation": "יישום ישיר של הכלל על אפס, שבר, חיובי ושלילי."
    },
    {
      "id": "S17-P12-Q3",
      "family": "S17",
      "level": 6,
      "responseSpace": "lines-2",
      "stem": "לישר א שיפוע `2` ולישר ב שיפוע `-5`. איזה ישר תלול יותר? נמקו באמצעות המרחק של השיפוע מאפס.",
      "sourceRef": "SOURCE_OF_TRUTH.md#8.13 — תלילות נקבעת לפי המרחק של השיפוע מ-0 ולא לפי סימנו",
      "adaptation": "שאלת נימוק ישירה על השוואת |2| ו-|-5|."
    },
    {
      "id": "S18-P12-Q4",
      "family": "S18",
      "level": 7,
      "responseSpace": "lines-4",
      "stem": "תלמיד טען: \"ישר ששיפועו `-1` פחות תלול מישר ששיפועו `1/2`, כי `-1` קטן מ-`1/2`\". הסבירו את הטעות ותקנו את הטענה.",
      "sourceRefs": [
        "SOURCE_OF_TRUTH.md#8.13 — השוואת תלילות לפי |m|",
        "SOURCE_OF_TRUTH.md#6 — נימוק/תיקון טעות לאחר השוואה וסיווג"
      ],
      "adaptation": "כתיבה מקורית מתועדת של ניתוח טעות נפוצה: בלבול בין סדר מספרי לבין ערך מוחלט של השיפוע."
    }
  ]
};
