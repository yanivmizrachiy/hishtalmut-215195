// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 9,
  "chapter": 4,
  "kicker": "פרק 4 · משמעות השיפוע",
  "title": "מה אומר השיפוע?",
  "subtitle": "שינוי ב־y כאשר x גדל ב־1 · רמות 1–5",
  "rule": "השיפוע הוא מספר. משמעות השיפוע: השינוי בערך `y` בכל פעם שערך `x` גדל ב־1.",
  "sourceRefs": [
    "SOURCE_OF_TRUTH.md#8 — משמעות השיפוע ושינוי y כאשר x גדל ב-1",
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-31-rate-of-change",
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-60-heating-model"
  ],
  "questions": [
    {
      "id": "S02-P09-Q1",
      "family": "S02",
      "level": 1,
      "responseSpace": "short",
      "stem": "בכל פעם ש־`x` גדל ב־1, ערך `y` גדל ב־7.",
      "answerLabel": "השיפוע הוא",
      "sourceRef": "SOURCE_OF_TRUTH.md#8.10 — אם בכל פעם ש-x גדל ב-1 ערך y גדל ב-7, אז m=7",
      "adaptation": "יישום ישיר של הדוגמה הקנונית ממקור האמת."
    },
    {
      "id": "S02-P09-Q2",
      "family": "S02",
      "level": 2,
      "responseSpace": "mixed",
      "stem": "השלימו לפי הטבלה.",
      "table": {"rows":[["`x`","0","1","2","3","4"],["`y`","5","8","11","14","17"]]},
      "subparts": [
        {"label":"א.","text":"בכל פעם ש־`x` גדל ב־1, `y` גדל ב־","responseSpace":"short"},
        {"label":"ב.","text":"לכן השיפוע הוא","responseSpace":"short"}
      ],
      "sourceRefs": [
        "SOURCE_OF_TRUTH.md#8.7 — שיפוע הוא השינוי בערכי y בכל פעם ש-x גדל ב-1",
        "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 31 — קצב שינוי כיחס בין שינויי y ו-x"
      ],
      "adaptation": "הכלל מיושם בטבלת ערכים בעלת צעד x של 1."
    },
    {
      "id": "S01-S02-P09-Q3",
      "family": "S01,S02",
      "level": 3,
      "responseSpace": "mixed",
      "stem": "בכל פעם ש־`x` גדל ב־1, ערך `y` קטן ב־4.",
      "subparts": [
        {"label":"א.","text":"האם השיפוע חיובי, שלילי או אפס?","responseSpace":"equation"},
        {"label":"ב.","text":"השיפוע הוא","responseSpace":"short"}
      ],
      "sourceRef": "SOURCE_OF_TRUTH.md#8.9 — כאשר x גדל ב-1 ו-y קטן, השיפוע שלילי; הדוגמה הקנונית משתמשת בירידה קבועה",
      "adaptation": "המספר שונה ל-4 כדי לתרגל את אותו עיקרון עם ערך שלילי אחר."
    },
    {
      "id": "S06-P09-Q4",
      "family": "S06",
      "level": 4,
      "responseSpace": "table-cell",
      "stem": "נתון שהשיפוע הוא `m=-2`. השלימו את הטבלה.",
      "table": {"rows":[["`x`","0","1","2","3","4"],["`y`","9",{"answer":true},{"answer":true},{"answer":true},{"answer":true}]]},
      "sourceRefs": [
        "SOURCE_OF_TRUTH.md#8.7 — משמעות השיפוע כשינוי y לכל תוספת 1 ב-x",
        "SOURCE_OF_TRUTH.md#6 — מעבר מהבנת הכלל להשלמת ייצוג"
      ],
      "adaptation": "כתיבה מקורית מתועדת: שימוש הפוך בשיפוע נתון כדי להשלים טבלה."
    },
    {
      "id":"J2-HEAT-P09-Q6","family":"S02,S07,MD01","level":5,"responseSpace":"mixed",
      "stem":"בשיעור מדעים חיממו מים בסיר א׳. הטמפרטורה ההתחלתית הייתה `25°C`, והמים התחממו בקצב קבוע של `10°C` בדקה. נסמן ב־`x` את זמן החימום בדקות וב־`y` את הטמפרטורה במעלות צלזיוס.",
      "subparts":[
        {"label":"א.","text":"ציינו את `m` ואת `b` וכתבו מה משמעות כל אחד מהם בהקשר.","responseSpace":"lines-2"},
        {"label":"ב.","text":"כתבו משוואה המתארת את טמפרטורת המים בסיר א׳ כתלות בזמן החימום.","responseSpace":"equation"}
      ],
      "sourceRef":"jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 60 — water starts at 25°C and heats at a constant 10°C per minute; write an equation for the temperature as a function of heating time",
      "adaptation":"נתוני המקור והדרישה לכתיבת המשוואה נשמרו; זיהוי m ו-b אוחד לסעיף קצר אחד כדי למנוע כפילות ולשמור על פריסת A4."
    }
  ]
};
