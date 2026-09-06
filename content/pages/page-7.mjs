// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 7,
  "chapter": 2,
  "kicker": "פרק 2 · זיהוי פונקציה קווית",
  "title": "איך מזהים פונקציה קווית?",
  "subtitle": "גרף ישר → קצב אחיד → זיהוי בין מסיחים · רמות 1–5",
  "rule": "פונקציה קווית מתאפיינת בקצב השתנות אחיד, והגרף שלה הוא קו ישר.",
  "sourceRefs": [
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-31-uniform-rate-definition",
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-50-uniform-rate-line-y-mx-b",
    "SOURCE_OF_TRUTH.md#8"
  ],
  "questions": [
    {
      "id": "C01-P07-Q1",
      "family": "C01",
      "level": 1,
      "responseSpace": "choice-mark",
      "stem": "איזה גרף מתאר פונקציה קווית? סמנו א או ב.",
      "panels": [
        {
          "label": "א",
          "graph": {
            "xMin": -2,"xMax": 2,"yMin": -2,"yMax": 2,"showCoordinates": false,
            "ariaLabel": "גרף א — ישר",
            "lines": [{"through":[[-2,-1.5],[2,1.5]]}]
          }
        },
        {
          "label": "ב",
          "graph": {
            "xMin": -2,"xMax": 2,"yMin": -2,"yMax": 2,"showCoordinates": false,
            "ariaLabel": "גרף ב — עקומה",
            "quadratics": [{"a":-0.7,"h":0,"k":1.5}]
          }
        }
      ],
      "answerLabel": "תשובה:",
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, pages 31 and 50 — קצב אחיד מאפיין פונקציה שגרפה קו ישר",
      "adaptation": "המאפיין הוצג כזיהוי חזותי בסיסי בין ישר לעקומה."
    },
    {
      "id": "C03-P07-Q2",
      "family": "C03",
      "level": 2,
      "responseSpace": "choice-mark",
      "stem": "באיזו טבלה קצב ההשתנות אחיד?",
      "panels": [
        {"label":"א","table":{"rows":[["`x`","0","1","2","3"],["`y`","2","5","8","11"]]}},
        {"label":"ב","table":{"rows":[["`x`","0","1","2","3"],["`y`","2","5","9","14"]]} }
      ],
      "answerLabel": "תשובה:",
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 31 — קצב שינוי אחיד כאשר יחס השינויים נשאר קבוע",
      "adaptation": "נבנו שתי טבלאות קצרות, אחת בעלת קצב אחיד ואחת שאינה אחידה."
    },
    {
      "id": "C04-P07-Q3",
      "family": "C04",
      "level": 4,
      "responseSpace": "full-work",
      "stem": "האם הטבלה הבאה מתארת קצב השתנות אחיד? שימו לב שצעדי `x` אינם שווים.",
      "table": {
        "rows": [["`x`","0","2","5","9"],["`y`","1","5","11","19"]]
      },
      "answerLabel": "דרך ונימוק:",
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 31 — קצב שינוי מוגדר כיחס בין השינוי ב-y לשינוי ב-x",
      "adaptation": "נוספו צעדי x לא שווים כדי לחייב בדיקת יחס ולא רק הפרש y."
    },
    {
      "id": "C05-P07-Q4",
      "family": "C05",
      "level": 5,
      "responseSpace": "choice-mark",
      "stem": "סמנו את הביטויים שיכולים לתאר פונקציה קווית.",
      "choices": ["`y=3x+2`","`y=x^2+1`","`y=-2x`","`y=7`"],
      "sourceRefs": [
        "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 50 — פונקציה בעלת קצב אחיד מיוצגת בצורה y=mx+b",
        "SOURCE_OF_TRUTH.md#8 — m=0 מתאר פונקציה קבועה y=c"
      ],
      "adaptation": "נוספו מסיח ריבועי ופונקציה קבועה כדי לבדוק את גבולות ההגדרה של פונקציה קווית בפרויקט."
    }
  ]
};
