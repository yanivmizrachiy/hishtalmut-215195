export const page={
  page:18,
  chapter:8,
  kicker:'פרק 8 · משוואה לא מסודרת',
  title:'משוואה לא מסודרת',
  subtitle:'עיקרון → חישוב → שני חיתוכים → שתי דרכים · רמות 3–7',
  rule:'בחיתוך עם ציר `x` מתקיים `y=0`, ולכן מציבים `y=0` ופותרים עבור `x`. משוואה שאינה מסודרת מסדרים לצורה `y=mx+b` כאשר יש לקרוא גם שיפוע או חיתוך עם ציר `y`.',
  sourceRefs:['SOURCE_OF_TRUTH.md#8.2','SOURCE_OF_TRUTH.md#9','razpages:עמוד-436.html'],
  questions:[
    {
      id:'U08-P18-Q1',family:'U08',level:3,responseSpace:'mixed',
      sourceRefs:['razpages:עמוד-436.html'],
      stem:'נתונה המשוואה `2x+y=6`. מצאו את נקודת החיתוך עם ציר `x`.',
      subparts:[
        {text:'בחיתוך עם ציר `x` מציבים `y=`',responseSpace:'short'},
        {text:'פתרו עבור `x`.',responseSpace:'equation'},
        {text:'מהי נקודת החיתוך עם ציר `x`?',responseSpace:'equation'}
      ]
    },
    {
      id:'U08-P18-Q2',family:'U03,U08',level:4,responseSpace:'full-work',
      stem:'נתונה המשוואה `3x+2y=12`. סדרו תחילה לצורה `y=mx+b`, ולאחר מכן מצאו את החיתוך עם ציר `x`.'
    },
    {
      id:'U07-U08-P18-Q3',family:'U03,U07,U08',level:5,responseSpace:'full-work',
      stem:'נתונה המשוואה `x-2y=-4`. סדרו אותה, ואז מצאו את שתי נקודות החיתוך: עם ציר `y` ועם ציר `x`.'
    },
    {
      id:'U08-P18-Q4',family:'U08',level:6,responseSpace:'lines-4',
      stem:'במשוואה `4x+3y=12`, תלמיד א מציב `y=0` ישירות. תלמיד ב מסדר ל־`y=mx+b` ואז מציב `y=0`. בצעו את שתי הדרכים והסבירו מדוע מתקבלת אותה נקודת חיתוך.'
    },
    {
      id:'I04-P18-Q5',family:'U08,I04',level:6,responseSpace:'lines-2',
      stem:'מצאו את שתי נקודות החיתוך של הישר `y=-5x+20` עם הצירים. הציגו דרך.',
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
