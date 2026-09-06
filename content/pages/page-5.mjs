// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 5,
  "chapter": 1,
  "kicker": "ייצוגים של פונקציה קווית",
  "title": "ממילים לטבלה, לביטוי ולגרף",
  "subtitle": "משתנים → טבלה → ביטוי אלגברי → גרף · רמות 1–4",
  "rule": "אותה פונקציה יכולה להופיע בארבעה ייצוגים: תיאור מילולי, טבלת ערכים, ביטוי אלגברי וגרף. בכל ייצוג נשמר אותו קשר בין `x` לבין `y`.",
  "sourceRefs": [
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-3-fuel-table-expression-graph",
    "SOURCE_OF_TRUTH.md#7 — פרק 1: ייצוגים של פונקציה קווית"
  ],
  "questions": [
    {
      "id": "P15-P05-Q1",
      "family": "P15",
      "level": 1,
      "responseSpace": "mixed",
      "stem": "בדוכן משחקים משלמים 12 ₪ דמי כניסה ועוד 4 ₪ לכל משחק.",
      "subparts": [
        { "label": "א.", "text": "`x` מייצג את מספר ה־", "responseSpace": "equation" },
        { "label": "ב.", "text": "`y` מייצג את ה־", "responseSpace": "equation" },
        { "label": "ג.", "text": "יחידות המדידה של `y` הן", "responseSpace": "short" }
      ],
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 3 — תופעת דלק: כמות כמשתנה, עלות כמשתנה תלוי ומעבר בין ייצוגים",
      "adaptation": "הקשר הוחלף מדלק לדוכן משחקים והמספרים שונו; זיהוי המשתנים נשמר כחלק מאותו רצף ייצוגים."
    },
    {
      "id": "P16-P05-Q2",
      "family": "P16",
      "level": 2,
      "responseSpace": "table-cell",
      "stem": "השלימו את הטבלה לפי הסיפור.",
      "table": {
        "ariaLabel": "טבלת מספר משחקים ומחיר כולל",
        "rows": [
          ["`x` — מספר משחקים", "0", "1", "2", "3", "5"],
          ["`y` — מחיר כולל", {"answer":true}, {"answer":true}, {"answer":true}, {"answer":true}, {"answer":true}]
        ]
      },
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 3 — יצירת טבלה המקשרת בין כמות לעלות",
      "adaptation": "אותה פעולת מעבר מתיאור מילולי לטבלת ערכים; ההקשר והמספרים שונו."
    },
    {
      "id": "P18-P05-Q3",
      "family": "P18",
      "level": 3,
      "responseSpace": "equation",
      "stem": "כתבו ביטוי אלגברי שמתאים לסיפור ולטבלה.",
      "answerLabel": "`y =`",
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 3 — כתיבת ביטוי אלגברי המתאר עלות לפי כמות",
      "adaptation": "מבנה המודל הקווי נשמר; המספרים וההקשר שונו."
    },
    {
      "id": "P17-P05-Q4",
      "family": "P17",
      "level": 3,
      "responseSpace": "graph-draw",
      "stem": "סמנו את הנקודות המתאימות ל־`x=0,1,2,3,5` וחברו ביניהן.",
      "graph": {
        "xMin": 0,
        "xMax": 6,
        "yMin": 0,
        "yMax": 48,
        "equalUnitScale": false,
        "xTick": 1,
        "yTick": 8,
        "showZeroOnX": true,
        "showZeroOnY": true,
        "showCoordinates": false,
        "xLabel": "מספר משחקים",
        "yLabel": "מחיר כולל (₪)",
        "ariaLabel": "מערכת צירים ריקה למספר משחקים ולמחיר"
      },
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 3 — סרטוט נקודות מן הטבלה וחיבורן לגרף המתאר עלות",
      "adaptation": "אותה פעולת מעבר מטבלה לגרף עם נתוני המודל המותאם."
    },
    {
      "id": "P19-P05-Q5",
      "family": "P19",
      "level": 4,
      "responseSpace": "lines-2",
      "stem": "הסבירו כיצד הסיפור, הטבלה, הביטוי והגרף מתארים את אותו קשר מתמטי.",
      "sourceRefs": [
        "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 3 — שילוב תיאור מילולי, טבלה, ביטוי וגרף",
        "SOURCE_OF_TRUTH.md#7 — פרק 1: ייצוגים של פונקציה קווית"
      ],
      "adaptation": "נוספה שאלת רפלקציה המחברת במפורש את ארבעת הייצוגים שהמקור דורש לשלב."
    }
  ]
};
