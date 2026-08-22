// נגזר ממקור האמת. זהו מאגר תוכן לעריכה קלה, לא מקור אמת נוסף.
// כל דף שעבר הגירה נבנה כאן כאובייקט תוכן; HTML הוא פלט שניתן לייצר מחדש.

export const pages = [
  {
    page: 1,
    chapter: 0,
    kicker: 'ידע מקדים · מערכת הצירים',
    title: 'נקודות במערכת הצירים',
    subtitle: 'קריאה → זיהוי → סימון · רמות 1–2',
    rule: 'זוג סדור נכתב בצורה `(x,y)`. המספר הראשון הוא שיעור ה־`x`, והמספר השני הוא שיעור ה־`y`.',
    questions: [
      {
        id: 'P01-P01-Q1', family: 'P01', level: 1, responseSpace: 'mixed',
        stem: 'קראו את שיעורי הנקודות המסומנות.',
        graph: {
          xMin:-5,xMax:5,yMin:-5,yMax:5, showCoordinates:false,
          ariaLabel:'מערכת צירים ובה הנקודות A B C D',
          points:[
            {x:-4,y:3,label:'A'},
            {x:2,y:4,label:'B'},
            {x:3,y:-2,label:'C'},
            {x:-2,y:-3,label:'D'}
          ]
        },
        subparts:[
          {label:'', pairName:'A', responseSpace:'ordered-pair'},
          {label:'', pairName:'B', responseSpace:'ordered-pair'},
          {label:'', pairName:'C', responseSpace:'ordered-pair'},
          {label:'', pairName:'D', responseSpace:'ordered-pair'}
        ]
      },
      {
        id: 'P03-P01-Q2', family: 'P03', level: 1, responseSpace: 'mixed',
        stem: 'נתונות הנקודות: `E=(0,4), F=(-3,0), O=(0,0), G=(2,2)`.',
        subparts:[
          {label:'א.', text:'איזו נקודה נמצאת על ציר `x`?', responseSpace:'short'},
          {label:'ב.', text:'איזו נקודה נמצאת על ציר `y`?', responseSpace:'short'},
          {label:'ג.', text:'איזו נקודה היא ראשית הצירים?', responseSpace:'short'}
        ]
      },
      {
        id: 'P02-P01-Q3', family: 'P02', level: 2, responseSpace: 'graph-draw',
        stem: 'סמנו במערכת הצירים את הנקודות `H=(-3,2), K=(4,1), L=(2,-3), M=(-1,-4)`.',
        graph: {xMin:-5,xMax:5,yMin:-5,yMax:5, showCoordinates:false, ariaLabel:'מערכת צירים ריקה לסימון נקודות'}
      }
    ]
  },
  {
    page: 2,
    chapter: 0,
    kicker: 'ידע מקדים · קריאת גרף',
    title: 'קריאת ערכים מתוך גרף',
    subtitle: 'קריאה ישירה → שאלה הפוכה → סימון ערך · רמות 1–3',
    rule: 'כדי למצוא את ערך `y` עבור `x` נתון: מתחילים על ציר `x`, עולים או יורדים עד הגרף, ומשם קוראים את ערך `y`.',
    graph: {
      xMin:-5,xMax:5,yMin:-5,yMax:5, showCoordinates:false,
      ariaLabel:'גרף קו ישר עם נקודות מסומנות',
      lines:[{through:[[-4,-2],[2,4]]}],
      points:[
        {x:-4,y:-2,label:'A'},
        {x:-2,y:0,label:'B'},
        {x:0,y:2,label:'C'},
        {x:2,y:4,label:'D'}
      ]
    },
    questions: [
      {
        id: 'P04-P02-Q1', family: 'P04', level: 1, responseSpace: 'mixed',
        stem: 'קראו מהגרף את ערך `y`.',
        subparts:[
          {label:'א.', text:'כאשר `x=-4`, ערך `y` הוא', responseSpace:'short'},
          {label:'ב.', text:'כאשר `x=-2`, ערך `y` הוא', responseSpace:'short'},
          {label:'ג.', text:'כאשר `x=0`, ערך `y` הוא', responseSpace:'short'}
        ]
      },
      {
        id: 'P05-P02-Q2', family: 'P05', level: 2, responseSpace: 'mixed',
        stem: 'עכשיו עובדים בכיוון ההפוך: מצאו את `x`.',
        subparts:[
          {label:'א.', text:'עבור איזה `x` מתקבל `y=0`?', responseSpace:'short'},
          {label:'ב.', text:'עבור איזה `x` מתקבל `y=2`?', responseSpace:'short'},
          {label:'ג.', text:'עבור איזה `x` מתקבל `y=4`?', responseSpace:'short'}
        ]
      },
      {
        id: 'P06-P02-Q3', family: 'P06', level: 3, responseSpace: 'mixed',
        stem: 'כתבו את ערכי הפונקציה בסימון `f(x)`.',
        subparts:[
          {label:'', text:'`f(-2)=`', responseSpace:'short'},
          {label:'', text:'`f(0)=`', responseSpace:'short'},
          {label:'', text:'`f(2)=`', responseSpace:'short'}
        ]
      },
      {
        id: 'P07-P02-Q4', family: 'P07', level: 3, responseSpace: 'lines-2',
        stem: 'נתון כי `f(x)=3`. מצאו את `x` והסבירו בקצרה כיצד קראתם זאת מהגרף.'
      }
    ]
  },
  {
    page: 3,
    chapter: 0,
    kicker: 'ידע מקדים · קריאת גרף בהקשר',
    title: 'מרחק כתלות בזמן',
    subtitle: 'קריאה ישירה → שינוי → מנוחה → קצב · רמות 2–5',
    rule: 'בגרף מרחק–זמן: קטע עולה מתאר התרחקות מנקודת המוצא, קטע אופקי מתאר מנוחה, וקטע יורד מתאר התקרבות חזרה לנקודת המוצא.',
    questions: [
      {
        id: 'P08-P10-P03-Q1', family: 'P08,P09,P10', level: 2, levelLabel: 'רמות 2–5', responseSpace: 'mixed',
        stem: 'רוכב אופניים יצא מנקודת המוצא. הגרף מתאר את מרחקו מנקודת המוצא במהלך שש שעות.',
        graph: {
          xMin:0,xMax:6,yMin:0,yMax:24,
          equalUnitScale:false,
          xTick:1,yTick:4,
          showZeroOnX:true,showZeroOnY:true,showCoordinates:false,
          xLabel:'זמן (שעות)',
          yLabel:'מרחק מנקודת המוצא (ק״מ)',
          ariaLabel:'גרף מרחק זמן מקוטע ובו קטע עולה, מנוחה, קטע עולה תלול יותר וקטע חזרה',
          polyline:[[0,0],[2,8],[3,8],[5,20],[6,16]],
          points:[[0,0],[2,8],[3,8],[5,20],[6,16]]
        },
        subparts:[
          {label:'א.', level:2, text:'מה היה מרחקו של הרוכב לאחר שעתיים?', responseSpace:'short', suffix:'ק״מ.'},
          {label:'ב.', level:2, text:'מה היה מרחקו לאחר שלוש שעות?', responseSpace:'short', suffix:'ק״מ.'},
          {label:'ג.', level:3, text:'בין אילו שעות הרוכב נח? משעה', responseSpace:'short', answerCount:2, betweenAnswers:'עד שעה'},
          {label:'ד.', level:3, text:'כמה זמן נמשכה המנוחה?', responseSpace:'short', suffix:'שעות.'},
          {label:'ה.', level:4, text:'כמה קילומטרים עבר בין השעה 3 לשעה 5?', responseSpace:'short', suffix:'ק״מ.'},
          {label:'ו.', level:5, text:'חשבו את מהירות הרוכב בין השעה 3 לשעה 5. הציגו דרך.', responseSpace:'lines-2'},
          {label:'ז.', level:5, text:'באיזה קטע נסע במהירות הגדולה ביותר? נמקו בעזרת הגרף.', responseSpace:'lines-2'}
        ]
      }
    ]
  },
  {
    page: 4,
    chapter: 0,
    kicker: 'ידע מקדים · מושג הפונקציה',
    title: 'מהי פונקציה?',
    subtitle: 'ערך יחיד → זיהוי מטבלה → זיהוי מגרף · רמות 1–4',
    rule: 'פונקציה היא התאמה שבה לכל ערך של `x` מתאים ערך אחד ויחיד של `y`.',
    questions: [
      {
        id:'P13-P04-Q1', family:'P13', level:1, responseSpace:'mixed',
        stem:'השלימו את המשפט.',
        subparts:[{label:'', text:'בפונקציה, לכל ערך של `x` מתאים', responseSpace:'equation', suffix:'של `y`.'}]
      },
      {
        id:'P13-P04-Q2', family:'P13', level:2, responseSpace:'choice-mark',
        stem:'איזו טבלה מתארת פונקציה? סמנו א או ב.',
        panels:[
          {label:'א', table:{rows:[['`x`','1','2','3','4'],['`y`','5','7','7','9']]}},
          {label:'ב', table:{rows:[['`x`','1','2','2','3'],['`y`','4','5','8','9']]}}
        ],
        answerLabel:'תשובה:'
      },
      {
        id:'P14-P04-Q3', family:'P14', level:3, responseSpace:'choice-mark',
        stem:'איזה מן הגרפים יכול לתאר פונקציה `y=f(x)`? סמנו א או ב.',
        panels:[
          {label:'א', graph:{xMin:-2,xMax:2,yMin:-2,yMax:2, showCoordinates:false, ariaLabel:'גרף א — ישר אלכסוני', lines:[{through:[[-2,-1.5],[2,1.5]]}]}},
          {label:'ב', graph:{xMin:-2,xMax:2,yMin:-2,yMax:2, showCoordinates:false, ariaLabel:'גרף ב — ישר אנכי', verticalLines:[1]}}
        ],
        answerLabel:'תשובה:'
      },
      {
        id:'P14-P04-Q4', family:'P14', level:4, responseSpace:'lines-2',
        stem:'הסבירו מדוע הגרף שלא סימנתם אינו מתאר פונקציה של `x`.'
      }
    ]
  },
  {
    page: 11,
    chapter: 5,
    kicker: 'פרק 5 · מציאת שיפוע',
    title: 'מציאת שיפוע מגרף',
    subtitle: 'מדרגת שיפוע מדויקת · רמות 2–3',
    rule: 'כדי לקרוא שיפוע מגרף בוחרים שתי נקודות נוחות על הישר. בודקים את השינוי ב-`y` ביחס לשינוי ב-`x`. מתחילים ממדרגת שיפוע ברורה ומסומנת.',
    questions: [
      {
        id: 'S09-P11-Q1', family: 'S09', level: 2, responseSpace: 'short',
        stem: 'בגרף מסומן ישר העובר דרך הנקודות `(0,1)` ו-`(1,3)`. כאשר `x` גדל ב-1, בכמה `y` גדל?',
        answerLabel: 'השינוי ב-`y` הוא',
        graph: { xMin:-3,xMax:4,yMin:-3,yMax:7, lines:[{through:[[0,1],[1,3]]}], points:[[0,1],[1,3]], step:[[0,1],[1,1],[1,3]] }
      },
      {
        id: 'S09-P11-Q2', family: 'S09', level: 3, responseSpace: 'full-work',
        stem: 'הישר עובר דרך הנקודות `(-1,-2)` ו-`(2,4)`. מצאו את השיפוע בעזרת מדרגת שיפוע והציגו דרך.',
        graph: { xMin:-4,xMax:5,yMin:-5,yMax:7, lines:[{through:[[-1,-2],[2,4]]}], points:[[-1,-2],[2,4]], step:[[-1,-2],[2,-2],[2,4]] }
      }
    ]
  },
  {
    page: 12,
    chapter: 5,
    kicker: 'פרק 5 · מציאת שיפוע',
    title: 'תלילות והשוואת שיפועים',
    subtitle: 'קנה מידה אחיד → |m| → נימוק · רמות 4–7',
    rule: 'כאשר משווים תלילות משתמשים בערך המוחלט של השיפוע `|m|` ובאותו קנה מידה של הצירים. ככל שהשיפוע רחוק יותר מאפס, הישר תלול יותר.',
    questions: [
      {
        id: 'S16-P12-Q1', family: 'S16', level: 4, responseSpace: 'choice-mark',
        stem: 'במערכת הצירים בעלת קנה מידה אחיד הישר עובר דרך `(0,0)` ו-`(4,2)`. איזה טווח מתאים לשיפוע שלו?',
        choices: ['`m>1`', '`0<m<1`', '`m=0`', '`m<0`'],
        graph: { xMin:-2,xMax:6,yMin:-3,yMax:5, lines:[{through:[[0,0],[4,2]]}], points:[[0,0],[4,2]], step:[[0,0],[4,0],[4,2]] }
      },
      {
        id: 'S17-P12-Q2', family: 'S17', level: 5, responseSpace: 'short',
        stem: 'סדרו את השיפועים לפי תלילות הישר, מהפחות תלול ליותר תלול: `0, 1/2, 2, -4`.',
        answerLabel: 'הסדר הוא'
      },
      {
        id: 'S17-P12-Q3', family: 'S17', level: 6, responseSpace: 'lines-2',
        stem: 'לישר א שיפוע `2` ולישר ב שיפוע `-5`. איזה ישר תלול יותר? נמקו באמצעות המרחק של השיפוע מאפס.'
      },
      {
        id: 'S18-P12-Q4', family: 'S18', level: 7, responseSpace: 'lines-4',
        stem: 'תלמיד טען: "ישר ששיפועו `-1` פחות תלול מישר ששיפועו `1/2`, כי `-1` קטן מ-`1/2`". הסבירו את הטעות ותקנו את הטענה.'
      }
    ]
  }
];