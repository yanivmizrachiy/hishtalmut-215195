// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 2,
  "chapter": 0,
  "kicker": "ידע מקדים · קריאת גרף",
  "title": "קריאת ערכים מתוך גרף",
  "subtitle": "קריאה ישירה → שאלה הפוכה → סימון ערך · רמות 1–3",
  "rule": "כדי למצוא את ערך `y` עבור `x` נתון: מתחילים על ציר `x`, עולים או יורדים עד הגרף, ומשם קוראים את ערך `y`.",
  "sourceRefs": ["jerusalem2:src/content/curriculum/idkun-algebri-8.json pages 3-6 — reading y from x and x from y on graphs"],
  "graph": {
    "xMin": -5,
    "xMax": 5,
    "yMin": -5,
    "yMax": 5,
    "showCoordinates": false,
    "ariaLabel": "גרף קו ישר עם נקודות מסומנות",
    "lines": [
      {
        "through": [
          [-4,-2],
          [2,4]
        ]
      }
    ],
    "points": [
      {"x":-4,"y":-2,"label":"A"},
      {"x":-2,"y":0,"label":"B"},
      {"x":0,"y":2,"label":"C"},
      {"x":2,"y":4,"label":"D"}
    ]
  },
  "questions": [
    {
      "id": "P04-P02-Q1",
      "family": "P04",
      "level": 1,
      "responseSpace": "mixed",
      "stem": "קראו מהגרף את ערך `y`.",
      "subparts": [
        {"label":"א.","text":"כאשר `x=-4`, ערך `y` הוא","responseSpace":"short"},
        {"label":"ב.","text":"כאשר `x=-2`, ערך `y` הוא","responseSpace":"short"},
        {"label":"ג.","text":"כאשר `x=0`, ערך `y` הוא","responseSpace":"short"}
      ]
    },
    {
      "id": "P05-P02-Q2",
      "family": "P05",
      "level": 2,
      "responseSpace": "mixed",
      "stem": "עכשיו עובדים בכיוון ההפוך: מצאו את `x`.",
      "subparts": [
        {"label":"א.","text":"עבור איזה `x` מתקבל `y=0`?","responseSpace":"short"},
        {"label":"ב.","text":"עבור איזה `x` מתקבל `y=2`?","responseSpace":"short"},
        {"label":"ג.","text":"עבור איזה `x` מתקבל `y=4`?","responseSpace":"short"}
      ]
    },
    {
      "id": "P06-P02-Q3",
      "family": "P06",
      "level": 3,
      "responseSpace": "mixed",
      "stem": "כתבו את ערכי הפונקציה בסימון `f(x)`.",
      "subparts": [
        {"label":"","text":"`f(-2)=`","responseSpace":"short"},
        {"label":"","text":"`f(0)=`","responseSpace":"short"},
        {"label":"","text":"`f(2)=`","responseSpace":"short"}
      ]
    },
    {
      "id": "P07-P02-Q4",
      "family": "P07",
      "level": 3,
      "responseSpace": "lines-2",
      "stem": "נתון כי `f(x)=3`. מצאו את `x` והסבירו בקצרה כיצד קראתם זאת מהגרף."
    }
  ]
};
