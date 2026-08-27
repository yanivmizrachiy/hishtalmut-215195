export const page={
  page:16,
  chapter:8,
  kicker:'פרק 8 · משוואה לא מסודרת',
  title:'קודם מסדרים ל־y=mx+b',
  subtitle:'זיהוי → בידוד y → זיהוי m,b → פירוש הגרף · רמות 1–4',
  rule:'במשוואה לא מסודרת קודם מסדרים לצורה `y=mx+b`; רק אחר כך מזהים `m` ו־`b`. דוגמה: `2x+4y=9 \\Rightarrow 4y=-2x+9 \\Rightarrow y=-\\frac{1}{2}x+\\frac{9}{4}`.',
  sourceRefs:['SOURCE_OF_TRUTH.md#8.2','SOURCE_OF_TRUTH.md#9','razpages:עמוד-430.html'],
  questions:[
    {
      id:'U01-P16-Q1',family:'U01',level:1,responseSpace:'choice-mark',
      stem:'איזו משוואה כבר כתובה בצורה `y=mx+b` ואינה דורשת סידור נוסף?',
      choices:['`2x+y=7`','`y=3x-4`','`4y=8x+12`','`x-2y=5`']
    },
    {
      id:'U02-P16-Q2',family:'U02,U05',level:2,responseSpace:'mixed',
      stem:'נתונה המשוואה `x+y=6`. בודדו את `y`, ואז זהו את הפרמטרים.',
      subparts:[
        {label:'א.',text:'המשוואה המסודרת היא `y=`',responseSpace:'equation'},
        {label:'ב.',text:'`m=`',responseSpace:'short'},
        {label:'ג.',text:'`b=`',responseSpace:'short'}
      ]
    },
    {
      id:'U03-P16-Q3',family:'U03,U05',level:3,responseSpace:'full-work',
      stem:'סדרו את `2x+4y=12` לצורה `y=mx+b`. הציגו את שלבי הבידוד, ואז כתבו את `m` ואת `b`.',
      answerLabel:'דרך, משוואה מסודרת ופרמטרים:'
    },
    {
      id:'U04-P16-Q4',family:'U03,U06,U07',level:4,responseSpace:'mixed',
      stem:'נתונה המשוואה `3x+2y=8`. סדרו אותה לצורה `y=mx+b`, ורק אחר כך קבעו מה ניתן ללמוד על הגרף.',
      subparts:[
        {label:'א.',text:'המשוואה המסודרת:',responseSpace:'equation'},
        {label:'ב.',text:'הגרף עולה / יורד / קבוע?',responseSpace:'short'},
        {label:'ג.',text:'נקודת החיתוך עם ציר `y`:',responseSpace:'equation'}
      ]
    },
    {
      id:'U05-P16-Q5',family:'U03,U05',level:5,responseSpace:'lines-2',
      stem:'סדרו את המשוואה `2x-3y=6` לצורה `y=mx+b`, וקבעו אם הישר עולה או יורד. הציגו דרך.',
      answerLabel:'משוואה מסודרת ותשובה:',
      sourceRef:'razpages:bank.json special-lines/unordered — סידור משוואה לא מסודרת עם מקדם שלילי ל-y; מספרים שונו',
      adaptation:'תרגול בידוד y כאשר המקדם שלילי; מספרים שונו.'
    },
    {
      id:'U06-P16-Q6',family:'U03,U06',level:6,responseSpace:'lines-2',
      stem:'סדרו את המשוואה `x-2y=8` לצורה `y=mx+b`, מצאו את `m` ואת `b`, ואת נקודת החיתוך עם ציר `y`.',
      answerLabel:'משוואה מסודרת, m, b וחיתוך:',
      sourceRef:'razpages:bank.json unordered — סידור וזיהוי m,b וחיתוך עם ציר y; מספרים שונו',
      adaptation:'סידור וקריאת כל המידע מן המשוואה המסודרת; מספרים שונו.'
    },
    {
      id:'U03-R02-P16-Q7',family:'U03,R02',level:7,responseSpace:'lines-2',
      stem:'סדרו את המשוואות `5x-y=3` ו־`2y=6x+8` לצורה `y=mx+b`, וקבעו אם הישרים מקבילים. נמקו.',
      answerLabel:'שתי משוואות מסודרות ומסקנה:',
      sourceRef:'razpages:bank.json parallel-lines/unordered — סידור שתי משוואות והשוואת שיפועים; מספרים שונו',
      adaptation:'מחבר סידור משוואות לא מסודרות עם בדיקת מקבילוּת; מספרים שונו.'
    }
  ]
};
