// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 6,
  "chapter": 2,
  "kicker": "פרק 2 · זיהוי פונקציה קווית",
  "title": "קצב שינוי אחיד בטבלה",
  "subtitle": "הפרשים → קצב קבוע → השלמה · רמות 1–4",
  "rule": "קצב שינוי אחיד פירושו שכאשר `x` גדל באותו גודל, גם השינוי ב־`y` נשאר קבוע.",
  "questions": [
    {
      "id": "C02-S02-S03-P06-Q1",
      "family": "C02,S02,S03",
      "level": 1,
      "levelLabel": "רמות 1–3",
      "responseSpace": "mixed",
      "stem": "נתונה טבלת הערכים הבאה.",
      "table": {
        "rows": [
          [
            "`x`",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7"
          ],
          [
            "`g(x)`",
            "4",
            "7",
            "10",
            "13",
            "16",
            "19",
            "22"
          ]
        ]
      },
      "subparts": [
        {
          "label": "א.",
          "level": 1,
          "text": "בכמה גדל `x` בכל מעבר?",
          "responseSpace": "short"
        },
        {
          "label": "ב.",
          "level": 2,
          "text": "בכמה גדל `g(x)` בכל מעבר?",
          "responseSpace": "short"
        },
        {
          "label": "ג.",
          "level": 2,
          "text": "האם קצב השינוי אחיד? סמנו: כן / לא",
          "responseSpace": "choice-mark",
          "answerCount": 2
        },
        {
          "label": "ד.",
          "level": 3,
          "text": "מהו קצב השינוי?",
          "responseSpace": "short"
        }
      ]
    },
    {
      "id": "S07-P06-Q2",
      "family": "S07",
      "level": 3,
      "responseSpace": "table-cell",
      "stem": "השלימו את הערכים הבאים לפי אותו קצב.",
      "table": {
        "rows": [
          [
            "`x`",
            "8",
            "9",
            "10",
            "12"
          ],
          [
            "`g(x)`",
            {
              "answer": true
            },
            {
              "answer": true
            },
            {
              "answer": true
            },
            {
              "answer": true
            }
          ]
        ]
      }
    },
    {
      "id": "C03-P06-Q3",
      "family": "C03",
      "level": 4,
      "responseSpace": "mixed",
      "stem": "השלימו לפי הטבלה שבשאלה 1:",
      "subparts": [
        {"label":"א.","text":"בכל פעם שערך `x` גדל ב־","responseSpace":"short","answerCount":2,"betweenAnswers":", ערך `g(x)` גדל ב־"},
        {"label":"ב.","text":"ההפרש בין כל שני ערכי `g(x)` סמוכים הוא תמיד","responseSpace":"short"},
        {"label":"ג.","text":"ההפרש הזה חוזר על עצמו לאורך כל הטבלה, ולכן קצב השינוי הוא","responseSpace":"short"}
      ]
    },
    {
      "id":"S02-P06-Q4","family":"S02","level":4,"responseSpace":"mixed",
      "stem":"בטבלה של פונקציה קווית, בכל פעם ש־`x` גדל ב־1, ערך ה־`y` קטן ב־3.",
      "subparts":[
        {"label":"א.","text":"מהו השיפוע? `m=`","responseSpace":"short"},
        {"label":"ב.","text":"האם הפונקציה עולה או יורדת?","responseSpace":"short"}
      ],
      "sourceRef":"razpages:bank.json rate-of-change sum-p037 — קצב שינוי שלילי בטבלה; מספרים שונו",
      "adaptation":"קישור בין קצב שינוי שלילי לשיפוע ולכיוון; מספרים שונו."
    },
    {
      "id":"Q08-P06-Q5","family":"Q08,S03","level":5,"responseSpace":"equation",
      "stem":"כתבו את הייצוג האלגברי בצורה `y=mx+b` של הפונקציה `g` שבטבלה של שאלה 1.",
      "answerLabel":"`g(x)=`",
      "sourceRef":"razpages:bank.json graph-from-table sum-p094 — ייצוג אלגברי מטבלת ערכים; מספרים שונו",
      "adaptation":"מעבר מטבלה לייצוג אלגברי לפי השיפוע ונקודת החיתוך; מספרים שונו."
    },
    {
      "id":"S07-P06-Q6","family":"S07","level":6,"responseSpace":"mixed",
      "stem":"נתונה הפונקציה `y=5x-2`. חשבו את ערכי הפונקציה.",
      "subparts":[
        {"label":"א.","text":"`f(0)=`","responseSpace":"short"},
        {"label":"ב.","text":"`f(1)=`","responseSpace":"short"},
        {"label":"ג.","text":"`f(2)=`","responseSpace":"short"},
        {"label":"ד.","text":"בכמה גדל `y` בכל פעם ש־`x` גדל ב־1?","responseSpace":"short"}
      ],
      "sourceRef":"razpages:bank.json point-values — חישוב ערכים וקצב שינוי מייצוג אלגברי; מספרים שונו",
      "adaptation":"סוגר את המעגל: מייצוג אלגברי אל ערכים ואל הקצב הקבוע; מספרים שונו."
    }
  ]
};
