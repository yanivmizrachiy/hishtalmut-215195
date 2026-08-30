export const page={
  page:64,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — פונקציה קווית',
  title:'מיצ״ב — שני סירים מתחממים',
  subtitle:'ערך התחלתי → קצב שינוי → פונקציה → השוואת גרפים',
  rule:'בפונקציה קווית המתארת התחממות בקצב קבוע, `b` הוא הטמפרטורה ההתחלתית ו־`m` הוא מספר המעלות שהטמפרטורה גדלה בכל דקה.',
  sourceRefs:[
    'drive:0Bylw-NmEpX47ZjA1VVZHc29mYzJEV2c1YlFubUE5eVhmVExJ — שאלות מיצב ברמות קושי 3 או 4 תשעב.docx, שאלה 20'
  ],
  questions:[
    {
      id:'MZ02-P64-Q1',family:'MZ02',level:5,responseSpace:'mixed',
      stem:'בשיעור מדעים חיממו בשני סירים כמות שווה של מים עד לרתיחה. הטמפרטורה ההתחלתית בשני הסירים הייתה `28°C`. בסיר א המים התחממו בקצב קבוע של `12°C` בדקה, ובסיר ב בקצב קבוע של `18°C` בדקה.',
      subparts:[
        {text:'כתבו פונקציה `f` המתארת את הטמפרטורה בסיר א לאחר `x` דקות.',responseSpace:'equation'},
        {text:'מהו השיפוע של `f` ומה משמעותו?',responseSpace:'lines-2'},
        {text:'מהו `b` ומה משמעותו?',responseSpace:'lines-2'}
      ],
      sourceRef:'drive:0Bylw-NmEpX47ZjA1VVZHc29mYzJEV2c1YlFubUE5eVhmVExJ, שאלות מיצב ברמות קושי 3 או 4 תשעב.docx, question 20(a) — initial 28°C, pot A increases 12°C/min, write f(x)',
      adaptation:'נתוני המקור נשמרו. נוספו פירושי m ו-b בהתאם לסגנון ההוראה המחייב.'
    },
    {
      id:'MZ02-P64-Q2',family:'MZ02',level:6,responseSpace:'mixed',
      stem:'כתבו גם פונקציה המתארת את הטמפרטורה בסיר ב.',
      subparts:[
        {text:'כתבו את הפונקציה.',responseSpace:'equation'},
        {text:'איזו פונקציה עולה בתלילות גדולה יותר?',responseSpace:'short'},
        {text:'הסבירו בעזרת השיפועים `12` ו־`18`.',responseSpace:'lines-2'}
      ],
      sourceRef:'drive:0Bylw-NmEpX47ZjA1VVZHc29mYzJEV2c1YlFubUE5eVhmVExJ, שאלות מיצב ברמות קושי 3 או 4 תשעב.docx, question 20 — pot B increases 18°C/min and original task compares graph representations',
      adaptation:'הייצוג האלגברי של סיר ב נבנה ישירות מנתוני המקור כדי להכין את התלמיד להשוואת שני הגרפים שנדרשת בסעיף ב.'
    },
    {
      id:'MZ03-P64-Q3',family:'MZ03',level:7,responseSpace:'mixed',
      stem:'שרטטו את שני הגרפים באותה מערכת צירים עד לרתיחה.',
      graph:{
        xMin:0,xMax:7,yMin:20,yMax:110,xTick:1,yTick:10,showCoordinates:false,
        ariaLabel:'מערכת צירים לטמפרטורת שני סירי מים, שניהם מתחילים ב-28 מעלות, בקצבים 12 ו-18 מעלות לדקה',
        lines:[{through:[[0,28],[1,40]]},{through:[[0,28],[1,46]]}],
        points:[{x:0,y:28,label:'A'}]
      },
      subparts:[
        {text:'איזה מאפיין משותף יש לשני הגרפים?',responseSpace:'lines-2'},
        {text:'איזה גרף תלול יותר ומדוע?',responseSpace:'lines-2'}
      ],
      sourceRef:'drive:0Bylw-NmEpX47ZjA1VVZHc29mYzJEV2c1YlFubUE5eVhmVExJ, שאלות מיצב ברמות קושי 3 או 4 תשעב.docx, question 20(b) — choose the graph sketch describing both pots until boiling',
      adaptation:'במקום אפשרויות גרפיות שלא הועתקו בטקסט המקור, נשמרת אותה מיומנות באמצעות שרטוט וקטורי מדויק מנתוני השאלה, ללא המצאת נתונים.'
    }
  ]
};
