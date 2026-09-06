// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 4,
  "chapter": 0,
  "kicker": "ידע מקדים · מושג הפונקציה",
  "title": "מהי פונקציה?",
  "subtitle": "ערך יחיד → זיהוי מטבלה → זיהוי מגרף · רמות 1–4",
  "rule": "פונקציה היא התאמה שבה לכל ערך של `x` מתאים ערך אחד ויחיד של `y`.",
  "sourceRefs": [
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#pages-7-10-function-concept-and-vertical-line-test",
    "razpages:bank.json function-definition"
  ],
  "questions": [
    {
      "id": "P13-P04-Q1",
      "family": "P13",
      "level": 1,
      "responseSpace": "mixed",
      "stem": "השלימו את המשפט.",
      "subparts": [
        {
          "label": "",
          "text": "בפונקציה, לכל ערך של `x` מתאים",
          "responseSpace": "equation",
          "suffix": "של `y`."
        }
      ],
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 7 — פונקציה היא התאמה שבה לכל איבר בתחום מותאם בדיוק ערך אחד",
      "adaptation": "הגדרת המקור קוצרה להשלמה ישירה בשפת x ו-y."
    },
    {
      "id": "P13-P04-Q2",
      "family": "P13",
      "level": 2,
      "responseSpace": "choice-mark",
      "stem": "איזו טבלה מתארת פונקציה? סמנו א או ב.",
      "panels": [
        {
          "label": "א",
          "table": {
            "rows": [
              ["`x`", "1", "2", "3", "4"],
              ["`y`", "5", "7", "7", "9"]
            ]
          }
        },
        {
          "label": "ב",
          "table": {
            "rows": [
              ["`x`", "1", "2", "2", "3"],
              ["`y`", "4", "5", "8", "9"]
            ]
          }
        }
      ],
      "answerLabel": "תשובה:",
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 7 — לכל ערך בתחום מותאם בדיוק ערך אחד; המחשה במספר ייצוגים",
      "adaptation": "נבנתה בדיקת חד-ערכיות בטבלה כדי ליישם את הגדרת המקור בייצוג טבלאי."
    },
    {
      "id": "P14-P04-Q3",
      "family": "P14",
      "level": 3,
      "responseSpace": "choice-mark",
      "stem": "איזה מן הגרפים יכול לתאר פונקציה `y=f(x)`? סמנו א או ב.",
      "panels": [
        {
          "label": "א",
          "graph": {
            "xMin": -2,
            "xMax": 2,
            "yMin": -2,
            "yMax": 2,
            "showCoordinates": false,
            "ariaLabel": "גרף א — ישר אלכסוני",
            "lines": [
              { "through": [[-2,-1.5],[2,1.5]] }
            ]
          }
        },
        {
          "label": "ב",
          "graph": {
            "xMin": -2,
            "xMax": 2,
            "yMin": -2,
            "yMax": 2,
            "showCoordinates": false,
            "ariaLabel": "גרף ב — ישר אנכי",
            "verticalLines": [1]
          }
        }
      ],
      "answerLabel": "תשובה:",
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, pages 7 and 10 — מבחן הישר האנכי ובדיקת גרפים אם הם מייצגים פונקציה",
      "adaptation": "צומצם לזוג גרפים פשוט כדי לבודד את מבחן הישר האנכי."
    },
    {
      "id": "P14-P04-Q4",
      "family": "P14",
      "level": 4,
      "responseSpace": "lines-2",
      "stem": "הסבירו מדוע הגרף שלא סימנתם אינו מתאר פונקציה של `x`.",
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, pages 7 and 10 — יש לנמק אם גרף מתאים להגדרת הפונקציה באמצעות חיתוך בישר אנכי",
      "adaptation": "נשמרה דרישת הנימוק שמופיעה בשאלת המקור."
    },
    {
      "id": "P13-P04-Q5",
      "family": "P13",
      "level": 4,
      "responseSpace": "lines-2",
      "stem": "נתונה קבוצת הנקודות `(1,2)`, `(1,5)` ו־`(3,4)`. האם היא מתארת פונקציה של `x`? נמקו את תשובתכם.",
      "answerLabel": "תשובה ונימוק:",
      "sourceRef": "razpages:bank.json function-definition — בדיקת חד-ערכיות מרשימת נקודות; מספרים שונו",
      "adaptation": "בודק את מבחן החד-ערכיות ישירות מרשימת נקודות; מספרים שונו."
    }
  ]
};
