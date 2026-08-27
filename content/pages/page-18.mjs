export const page={
  page:18,
  chapter:8,
  kicker:'פרק 8 · משוואה לא מסודרת',
  title:'חיתוך עם ציר x — מציבים y=0',
  subtitle:'עיקרון → חישוב → שני חיתוכים → נימוק בין שתי דרכים · רמות 3–6',
  rule:'בנקודת חיתוך עם ציר `x`, שיעור ה־`y` הוא `0`. לכן אפשר להציב `y=0` ולפתור עבור `x`. במשוואה לא מסודרת עדיין חשוב לדעת לסדר ל־`y=mx+b`, כדי לקרוא נכון את שאר המידע על הישר.',
  sourceRefs:['SOURCE_OF_TRUTH.md#8.2','SOURCE_OF_TRUTH.md#9','razpages:עמוד-436.html'],
  questions:[
    {
      id:'U08-P18-Q1',family:'U08',level:3,responseSpace:'mixed',
      sourceRefs:['razpages:עמוד-436.html'],
      stem:'נתונה המשוואה `2x+y=6`. מצאו את נקודת החיתוך עם ציר `x`.',
      subparts:[
        {label:'א.',text:'בחיתוך עם ציר `x` מציבים `y=`',responseSpace:'short'},
        {label:'ב.',text:'פתרו עבור `x`.',responseSpace:'equation'},
        {label:'ג.',text:'נקודת החיתוך היא',responseSpace:'equation'}
      ]
    },
    {
      id:'U08-P18-Q2',family:'U03,U08',level:4,responseSpace:'full-work',
      stem:'נתונה המשוואה `3x+2y=12`. סדרו תחילה לצורה `y=mx+b`, ולאחר מכן מצאו את החיתוך עם ציר `x`.',
      answerLabel:'סידור, הצבה ונקודת חיתוך:'
    },
    {
      id:'U07-U08-P18-Q3',family:'U03,U07,U08',level:5,responseSpace:'full-work',
      stem:'נתונה המשוואה `x-2y=-4`. סדרו אותה, ואז מצאו את שתי נקודות החיתוך: עם ציר `y` ועם ציר `x`.',
      answerLabel:'משוואה מסודרת ושתי נקודות החיתוך:'
    },
    {
      id:'U08-P18-Q4',family:'U08',level:6,responseSpace:'lines-4',
      stem:'למשוואה `4x+3y=12` תלמיד א מציב `y=0` ישירות במשוואה המקורית. תלמיד ב מסדר קודם ל־`y=mx+b` ורק אז מציב `y=0`. האם שתי הדרכים חייבות לתת אותה נקודת חיתוך? בצעו את שתיהן והסבירו.',
      answerLabel:'שתי דרכים והסבר:'
    },
    {
      id:'I04-P18-Q5',family:'U08,I04',level:6,responseSpace:'lines-2',
      stem:'מצאו את שתי נקודות החיתוך של הישר `y=-5x+20` עם הצירים. הציגו דרך.',
      answerLabel:'חיתוך עם ציר y וחיתוך עם ציר x:',
      sourceRef:'razpages:bank.json x-intercept f4-p071-q69 — חיתוכי ישר עם הצירים; מספרים שונו',
      adaptation:'תרגול שני חיתוכים מן הצורה המפורשת; מספרים שונו.'
    },
    {
      id:'U08-I04-P18-Q6',family:'U03,U08,I04',level:7,responseSpace:'lines-2',
      stem:'סדרו את המשוואה `2x+5y=10` לצורה `y=mx+b`, ומצאו את שתי נקודות החיתוך שלה עם הצירים. הציגו דרך.',
      sourceRef:'razpages:bank.json unordered/x-intercept — סידור משוואה ומציאת שני חיתוכים; מספרים שונו',
      adaptation:'משלב סידור משוואה לא מסודרת עם מציאת חיתוכים עם הצירים; מספרים שונו.'
    }
  ]
};
