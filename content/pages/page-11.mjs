// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 11,
  "chapter": 5,
  "kicker": "פרק 5 · מציאת שיפוע",
  "title": "מציאת שיפוע מגרף",
  "subtitle": "אומדן חזותי → מדרגת שיפוע → חישוב מדויק · רמות 2–5",
  "rule": "אפשר לאמוד תחילה את גודל השיפוע לפי תלילות וכיוון הישר, ואז לחשב במדויק: בוחרים שתי נקודות נוחות ובודקים את השינוי ב־`y` ביחס לשינוי ב־`x`.",
  "sourceRefs": ["official-curriculum:linear-slope-estimation"],
  "questions": [
    {
      "id": "S09-P11-Q1",
      "family": "S09",
      "level": 2,
      "responseSpace": "short",
      "stem": "בגרף מסומן ישר העובר דרך הנקודות `(0,1)` ו-`(1,3)`. כאשר `x` גדל ב-1, בכמה `y` גדל?",
      "answerLabel": "השינוי ב-`y` הוא",
      "graph": {
        "xMin": -3,
        "xMax": 4,
        "yMin": -3,
        "yMax": 7,
        "lines": [{"through": [[0,1],[1,3]]}],
        "points": [[0,1],[1,3]],
        "step": [[0,1],[1,1],[1,3]]
      }
    },
    {
      "id": "S09-P11-Q2",
      "family": "S09",
      "level": 3,
      "responseSpace": "full-work",
      "stem": "הישר עובר דרך הנקודות `(-1,-2)` ו-`(2,4)`. מצאו את השיפוע בעזרת מדרגת שיפוע והציגו דרך.",
      "graph": {
        "xMin": -4,
        "xMax": 5,
        "yMin": -5,
        "yMax": 7,
        "lines": [{"through": [[-1,-2],[2,4]]}],
        "points": [[-1,-2],[2,4]],
        "step": [[-1,-2],[2,-2],[2,4]]
      }
    },
    {
      "id":"S10-P11-Q3",
      "family":"S10",
      "level":4,
      "responseSpace":"mixed",
      "stem":"לפני חישוב מדויק, אמדו את השיפוע של הישר לפי התלילות שלו.",
      "graph":{
        "xMin":-4,"xMax":4,"yMin":-5,"yMax":5,"xTick":1,"yTick":1,"showCoordinates":false,
        "ariaLabel":"ישר עולה בשיפוע חיובי הגדול מאחד וקטן משלוש",
        "lines":[{"through":[[-2,-3],[2,5]]}],"points":[]
      },
      "subparts":[
        {"text":"בלי לחשב, סמנו אומדן מתאים לשיפוע.","responseSpace":"choice-mark","choices":["`m<0`","`0<m<1`","`1<m<3`","`m>4`"]},
        {"text":"כעת בחרו שתי נקודות נוחות על הישר, חשבו את השיפוע ובדקו אם האומדן היה מתאים.","responseSpace":"lines-2"}
      ],
      "sourceRef":"official-curriculum:linear-slope-estimation — estimate slope magnitude from visual inspection, then verify exactly",
      "adaptation":"נוספה משימת אומדן מפורשת בהתאם לדגש העדכני של משרד החינוך; לאחר האומדן נדרש חישוב מדויק לבקרה."
    }
  ]
};
