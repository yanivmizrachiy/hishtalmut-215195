export const page={
  page:44,
  chapter:17,
  kicker:'פרק 17 · חיתוך בין שני ישרים',
  title:'איזה זוג סדור הוא נקודת החיתוך?',
  subtitle:'בודקים זוג סדור → מציבים בשני הישרים → מנמקים',
  rule:'נקודת החיתוך חייבת להיות ממוקמת על שני הישרים. לכן זוג סדור מתאים רק אם בהצבת ערך ה־`x` מתקבל אותו ערך `y` בשתי המשוואות.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-93-question-8',
    'SOURCE_OF_TRUTH.md#8'
  ],
  questions:[
    {
      id:'X03-P44-Q1',family:'X03',level:3,responseSpace:'mixed',
      stem:'נתונה המערכת `y=2x` ו־`y=-3x+5`.',
      subparts:[
        {text:'הציבו `x=1` במשוואה `y=2x`. מהו ערך ה־`y`?',responseSpace:'short'},
        {text:'הציבו `x=1` במשוואה `y=-3x+5`. מהו ערך ה־`y`?',responseSpace:'short'},
        {text:'כתבו את נקודת החיתוך כזוג סדור.',responseSpace:'short'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 93, question 8 — system y=2x and y=-3x+5; select the ordered pair that solves the system and justify',
      adaptation:'שאלת הבחירה מן המקור פוצלה קודם לבדיקת הצבה בשני הישרים ורק אחר כך לכתיבת הזוג הסדור, כדי לחזק את משמעות הפתרון.',
      mathModel:{
        standard:{A:-2,B:1,C:0},
        expected:{m:2,b:0,xIntercept:0},
        probes:[{point:[1,2],onLine:true}]
      }
    },
    {
      id:'X03-P44-Q2',family:'X03',level:4,responseSpace:'explanation',
      stem:'הסבירו מדוע `(1,2)` הוא פתרון של שתי המשוואות יחד, ולא רק של אחת מהן.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 93, question 8 — justify the chosen ordered-pair solution',
      adaptation:'נשמרה דרישת הנימוק המקורית והודגשה המשמעות של פתרון משותף לשתי משוואות.'
    },
    {
      id:'X04-P44-Q3',family:'X04',level:5,responseSpace:'full-work',
      stem:'מצאו את נקודת החיתוך של `y=2x` ו־`y=-3x+5` בלי לנחש זוג סדור: השוו בין הביטויים של `y`, פתרו, הציבו, ובסוף כתבו תשובה כזוג סדור.',
      answerLabel:'דרך מלאה ונקודת חיתוך:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 93, question 8 — same system; algebraic derivation added as graded extension of the source task',
      adaptation:'הנתונים נשמרו בדיוק; נוספה דרך אלגברית מלאה כדי לקשר בין בדיקת זוג סדור לבין מציאת הפתרון באופן עצמאי.',
      mathModel:{
        standard:{A:3,B:1,C:5},
        expected:{m:-3,b:5,xIntercept:[5,3]},
        probes:[{point:[1,2],onLine:true}]
      }
    },
    {
      id:'X03-P44-Q4',family:'X03',level:5,responseSpace:'full-work',
      stem:'חשבו, בלי לסרטט, את שיעורי נקודת החיתוך של הישרים `y=3x+2` ו־`y=-4x+9`. הציגו דרך.',
      answerLabel:'דרך ונקודת חיתוך:',
      sourceRef:'razpages:bank.json intersection f4-p075-q88א — נקודת חיתוך של שני ישרים; מספרים שונו',
      adaptation:'תרגול השוואת שני ביטויי y ופתרון; מספרים שונו.'
    },
    {
      id:'X03-P44-Q5',family:'X03',level:6,responseSpace:'full-work',
      stem:'מצאו את שיעורי נקודת החיתוך של הישרים `y=-8x+12` ו־`y=-x-2`. הציגו דרך.',
      answerLabel:'דרך ונקודת חיתוך:',
      sourceRef:'razpages:bank.json intersection f4-p075-q88ב — נקודת חיתוך של שני ישרים; מספרים שונו',
      adaptation:'וריאציה עם שני שיפועים שליליים; מספרים שונו.'
    },
    {
      id:'X03-P44-Q6',family:'X03',level:7,responseSpace:'lines-2',
      stem:'מצאו את שיעורי נקודת החיתוך של הישרים `y=½x+5` ו־`y=-2x`. הציגו דרך.',
      answerLabel:'דרך ונקודת חיתוך:',
      sourceRef:'razpages:bank.json intersection f4-p075-q88ד — נקודת חיתוך עם שיפוע שברי; מספרים שונו',
      adaptation:'וריאציה עם שיפוע שברי לחיזוק המיומנות; מספרים שונו.'
    }
  ]
};
