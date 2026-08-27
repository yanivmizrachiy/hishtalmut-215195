export const page={
  page:46,
  chapter:18,
  kicker:'פרק 18 · תחומי חיוביות ושליליות',
  title:'מתי ערך הפונקציה חיובי?',
  subtitle:'מוצאים אפס → בודקים צד → כותבים תחום',
  rule:'פונקציה חיובית במקום שבו ערך ה־`y` שלה גדול מ־0. קודם מוצאים היכן הפונקציה מתאפסת, כלומר היכן `y=0`, ואז קובעים באיזה צד של נקודת האפס ערכי ה־`y` חיוביים.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-85-question-9-subpart-vav',
    'SOURCE_OF_TRUTH.md#9'
  ],
  questions:[
    {
      id:'PZ01-P46-Q1',family:'PZ01',level:2,responseSpace:'mixed',
      stem:'נתונה משוואה ב: `y=-2x+3`. מצאו תחילה את נקודת האפס של הפונקציה.',
      subparts:[
        {text:'הציבו `y=0` וכתבו את המשוואה שמתקבלת.',responseSpace:'equation'},
        {text:'פתרו ומצאו את ערך `x` שבו הפונקציה מתאפסת.',responseSpace:'lines-2'},
        {text:'כתבו את נקודת החיתוך עם ציר `x` כזוג סדור.',responseSpace:'short'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 85, question 9, subpart ו — determine the x-values for which the y-values of equation B are positive; equation B is y=-2x+3',
      adaptation:'שאלת המקור פוצלה לשלב מקדים הכרחי: מציאת נקודת האפס לפני קביעת תחום החיוביות. המשוואה המקורית נשמרה ללא שינוי.',
      mathModel:{
        standard:{A:2,B:1,C:3},
        expected:{m:-2,b:3,xIntercept:[3,2]},
        probes:[
          {x:0,expectedY:3},
          {x:[3,2],expectedY:0}
        ]
      }
    },
    {
      id:'PZ01-P46-Q2',family:'PZ01',level:3,responseSpace:'mixed',
      stem:'עבור `y=-2x+3`, קבעו באיזה צד של `x=3/2` ערכי הפונקציה חיוביים.',
      subparts:[
        {text:'בדקו ערך פשוט משמאל ל־`3/2`, למשל `x=0`. מהו ערך ה־`y`?',responseSpace:'short'},
        {text:'האם ערך ה־`y` שקיבלתם חיובי?',responseSpace:'choice-mark',choices:['כן','לא']},
        {text:'כתבו את תחום ערכי `x` שעבורם ערך הפונקציה חיובי.',responseSpace:'equation'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 85, question 9, subpart ו — what is the domain of x-values for which equation B has positive y-values',
      adaptation:'נשמרה משימת המקור; נוסף ערך בדיקה פשוט כדי לחזק את משמעות "ערך פונקציה חיובי" לפני כתיבת התחום.'
    },
    {
      id:'PZ02-P46-Q3',family:'PZ02',level:4,responseSpace:'mixed',
      stem:'הציגו את אותה מסקנה בדרך גרפית.',
      graph:{
        xMin:-2,xMax:4,yMin:-5,yMax:7,xTick:1,yTick:1,showCoordinates:false,
        ariaLabel:'מערכת צירים לשרטוט הישר y שווה מינוס 2x ועוד 3',
        lines:[{through:[[0,3],[1,1]]}],
        points:[{x:1.5,y:0,label:'A'}]
      },
      subparts:[
        {text:'סמנו על הגרף את החלק שבו הישר נמצא מעל ציר `x`.',responseSpace:'graph-draw'},
        {text:'השלימו: כאשר הגרף מעל ציר `x`, ערך ה־`y` ______ מ־0.',responseSpace:'short'},
        {text:'כתבו שוב את תחום החיוביות.',responseSpace:'equation'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 85, question 9, subpart ו — positive y-values of equation B, linked to the graph drawn in subpart ה',
      adaptation:'שאלת המקור מחוברת כאן לגרף שנדרש בסעיף ה של אותה שאלה, כדי לקשור בין התחום האלגברי לבין מיקום הגרף מעל ציר x.'
    }
  ]
};
