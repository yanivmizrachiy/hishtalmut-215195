export const page={
  page:72,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — פונקציה קווית',
  title:'מיצ״ב — שרטטו ישר שהשיפוע שלו 2',
  subtitle:'בוחרים נקודה → x גדל ב-1 → y גדל ב-2 → מעבירים ישר',
  rule:'שיפוע `2` אומר שבכל פעם ש־`x` גדל ב־1, ערך ה־`y` גדל ב־2. יש אינסוף ישרים בעלי שיפוע `2`; מספיק לבחור נקודה אחת ולבנות ממנה נקודה נוספת לפי השיפוע.',
  sourceRefs:[
    'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4 — מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, שאלה 3'
  ],
  questions:[
    {
      id:'MZ17-P72-Q1',family:'MZ17',level:5,responseSpace:'mixed',
      stem:'שרטטו במערכת הצירים ישר שהשיפוע שלו `2`.',
      graph:{
        xMin:-5,xMax:5,yMin:-6,yMax:6,xTick:1,yTick:1,showCoordinates:false,
        ariaLabel:'מערכת צירים ריקה לשרטוט ישר ששיפועו שתיים',
        points:[]
      },
      subparts:[
        {text:'בחרו נקודה אחת שדרכה יעבור הישר וכתבו אותה כזוג סדור.',responseSpace:'short',answerShape:'ordered-pair'},
        {text:'אם `x` גדל ב־1, בכמה צריך ערך ה־`y` לגדול?',responseSpace:'short'},
        {text:'סמנו נקודה נוספת מתאימה ושרטטו את הישר.',responseSpace:'graph-draw'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, מקבץ פונקציה קוית מייצב תשעא-תשעו.docx, question 3 — draw a line whose slope is 2',
      adaptation:'המשימה המקורית נשמרה; נוספו שני שלבי תכנון קצרים שמבטאים את משמעות השיפוע בשפה הקנונית של הפרויקט.'
    },
    {
      id:'MZ17-P72-Q2',family:'MZ17',level:5,responseSpace:'graph-draw',
      stem:'שרטטו במערכת הצירים ישר שהשיפוע שלו `-3` והעובר דרך הנקודה `(0,2)`.',
      graph:{xMin:-5,xMax:5,yMin:-6,yMax:6,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'מערכת צירים ריקה לשרטוט ישר ששיפועו מינוס שלוש דרך (0,2)',points:[]},
      sourceRef:'razpages:bank.json equation-slope-point f4-p045-q15 — שרטוט ישר לפי נקודה ושיפוע נתון; מספרים שונו',
      adaptation:'וריאציה עם שיפוע שלילי דרך נקודת חיתוך נתונה עם ציר y; מספרים שונו.'
    },
    {
      id:'MZ17-P72-Q3',family:'MZ17',level:6,responseSpace:'lines-2',
      stem:'ישר ששיפועו `2` עובר דרך הנקודה `(1,3)`. כתבו את משוואתו בצורה `y=mx+b`. הציגו דרך.',
      answerLabel:'`y=`',
      sourceRef:'razpages:bank.json equation-slope-point f4-p078-q98 — משוואת ישר לפי שיפוע ונקודה; מספרים שונו',
      adaptation:'קישור בין שרטוט השיפוע לבין כתיבת המשוואה האלגברית; מספרים שונו.'
    },
    {
      id:'MZ17-P72-Q4',family:'MZ17',level:7,responseSpace:'explanation',
      stem:'לישר א שיפוע `2` ולישר ב שיפוע `-5`. איזה ישר תלול יותר? נמקו לפי המרחק של השיפוע מ־`0` (הערך המוחלט).',
      sourceRef:'SOURCE_OF_TRUTH.md#9.13 — השוואת תלילות לפי |m|',
      adaptation:'שאלת נימוק הסוגרת את הרצף: ממשמעות השיפוע אל השוואת תלילות.'
    }
  ]
};
