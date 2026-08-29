// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  "page": 11,
  "chapter": 5,
  "kicker": "פרק 5 · מציאת שיפוע",
  "title": "מציאת שיפוע מגרף",
  "subtitle": "אומדן חזותי → מדרגת שיפוע → חישוב מדויק · רמות 2–4",
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
      "family": "S09,S10",
      "level": 4,
      "responseSpace": "mixed",
      "stem": "הישר עובר דרך הנקודות `(-1,-2)` ו-`(2,4)`.",
      "graph": {
        "xMin": -4,
        "xMax": 5,
        "yMin": -5,
        "yMax": 7,
        "lines": [{"through": [[-1,-2],[2,4]]}],
        "points": [[-1,-2],[2,4]],
        "step": [[-1,-2],[2,-2],[2,4]]
      },
      "subparts": [
        {"text":"לפני חישוב, אמדו לפי התלילות: האם השיפוע קרוב יותר ל־`0.5`, ל־`1` או ל־`2`?","responseSpace":"choice-mark","choices":["`0.5`","`1`","`2`"]},
        {"text":"כעת מצאו את השיפוע במדויק בעזרת מדרגת השיפוע והציגו דרך.","responseSpace":"lines-4"},
        {"text":"האם החישוב המדויק תואם לאומדן?","responseSpace":"choice-mark","choices":["כן","לא"]}
      ],
      "sourceRef":"official-curriculum:linear-slope-estimation — estimate slope magnitude from visual inspection and then verify by exact delta-y/delta-x calculation",
      "adaptation":"האומדן והחישוב המדויק אוחדו על אותו גרף כדי לשמור על רצף פדגוגי ולמנוע גרף שלישי מיותר."
    }
  ]
};
