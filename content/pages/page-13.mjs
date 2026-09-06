// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 13,
  "chapter": 6,
  "kicker": "פרק 6 · מציאת שיפוע על ידי שתי נקודות",
  "title": "שיפוע משתי נקודות",
  "subtitle": "שתי נקודות מפורשות → נקודות מהגרף → f(a),f(b) → שינוי הפוך · רמות 3–6",
  "rule": "אם `A(x_1,y_1)` ו־`B(x_2,y_2)`, אז `m=\\frac{y_2-y_1}{x_2-x_1}`. חשוב לחסר את ערכי `x` ואת ערכי `y` באותו סדר.",
  "sourceRefs": [
    "jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-41-slope-through-two-points",
    "SOURCE_OF_TRUTH.md#7 — chapter 6: finding slope from two points",
    "SOURCE_OF_TRUTH.md#8 — slope meaning and function-value language"
  ],
  "questions": [
    {
      "id": "S11-P13-Q1",
      "family": "S11",
      "level": 3,
      "responseSpace": "mixed",
      "stem": "נתונות הנקודות `A(1,2)` ו־`B(4,8)`. מצאו את השיפוע בשלושה צעדים.",
      "subparts": [
        {"label":"א.","text":"`\\Delta x = 4-1 =`","responseSpace":"short"},
        {"label":"ב.","text":"`\\Delta y = 8-2 =`","responseSpace":"short"},
        {"label":"ג.","text":"לכן `m=\\frac{\\Delta y}{\\Delta x}=`","responseSpace":"equation"}
      ],
      "sourceRef": "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 41 — חישוב שיפוע ישר העובר דרך שתי נקודות",
      "adaptation": "החישוב פורק ל-Δx, Δy והמנה כדי להדגיש סדר חיסור עקבי."
    },
    {
      "id": "S12-P13-Q2",
      "family": "S12",
      "level": 4,
      "responseSpace": "full-work",
      "stem": "קראו מן הגרף את שיעורי הנקודות `A` ו־`B`, ואז חשבו את השיפוע והציגו דרך.",
      "graph": {
        "xMin":-4,"xMax":4,"yMin":-4,"yMax":7,"showCoordinates":false,
        "ariaLabel":"ישר עם שתי נקודות מסומנות A ו-B שמהן יש לקרוא את השיעורים",
        "lines":[{"through":[[-2,-1],[2,5]]}],
        "points":[{"x":-2,"y":-1,"label":"A"},{"x":2,"y":5,"label":"B"}]
      },
      "answerLabel": "דרך:",
      "sourceRefs": [
        "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 41 — שיפוע משתי נקודות",
        "SOURCE_OF_TRUTH.md#6 — אותה מיומנות בייצוג נוסף"
      ],
      "adaptation": "הנקודות נדרשות להיקרא מן הגרף לפני השימוש בנוסחת שתי נקודות."
    },
    {
      "id": "S13-P13-Q3",
      "family": "S13",
      "level": 5,
      "responseSpace": "full-work",
      "stem": "נתון `f(-1)=5` ו־`f(3)=-1`. כתבו תחילה את שתי הנקודות המתאימות, ואז מצאו את השיפוע.",
      "answerLabel": "נקודות ודרך:",
      "sourceRefs": [
        "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 7 — נקודה על גרף פונקציה מתוארת כ-(x,f(x))",
        "jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 41 — מציאת שיפוע משתי נקודות"
      ],
      "adaptation": "שילוב סימון ערכי פונקציה עם נוסחת השיפוע כדי לחזק מעבר ייצוג."
    },
    {
      "id": "S14-P13-Q4",
      "family": "S14",
      "level": 6,
      "responseSpace": "lines-2",
      "stem": "ידוע ששיפוע הישר הוא `m=-\\frac{3}{2}` וש־`\\Delta x=6`. מצאו את `\\Delta y` והסבירו מה אומר הסימן של התוצאה.",
      "answerLabel": "דרך:",
      "sourceRefs": [
        "SOURCE_OF_TRUTH.md#8.7 — slope as Δy for a given Δx ratio",
        "SOURCE_OF_TRUTH.md#6 — reverse question / constraint after direct calculation"
      ],
      "adaptation": "כתיבה מקורית מתועדת של שאלה הפוכה: m ו-Δx נתונים ויש למצוא Δy ולפרש את הסימן."
    }
  ]
};
