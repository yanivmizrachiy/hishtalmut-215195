export const page={
  page:43,
  chapter:17,
  kicker:'פרק 17 · חיתוך בין שני ישרים',
  title:'נקודת החיתוך של שני ישרים',
  subtitle:'משווים ערכי y → מוצאים x → מוצאים y → כותבים זוג סדור',
  rule:'בנקודת החיתוך של שני ישרים יש לשני הישרים אותו ערך `x` ואותו ערך `y`. לכן משווים בין הביטויים של `y`, מוצאים את `x`, מציבים באחת המשוואות כדי למצוא את `y`, ובסוף כותבים את נקודת החיתוך כזוג סדור.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-85-question-9',
    'SOURCE_OF_TRUTH.md#8'
  ],
  questions:[
    {
      id:'X01-P43-Q1',family:'X01',level:2,responseSpace:'mixed',
      stem:'נתונים שני הישרים `y=3x-7` ו־`y=-2x+3`. בנקודת החיתוך ערכי ה־`y` שווים.',
      subparts:[
        {text:'כתבו את המשוואה שמתקבלת מהשוואת שני הביטויים של `y`.',responseSpace:'equation'},
        {text:'פתרו את המשוואה ומצאו את ערך `x` בנקודת החיתוך.',responseSpace:'lines-2'},
        {text:'הציבו את ערך `x` באחת ממשוואות הישרים ומצאו את ערך `y`.',responseSpace:'lines-2'},
        {text:'כתבו את נקודת החיתוך כזוג סדור.',responseSpace:'short'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 85, question 9, subpart ז — y=3x-7 and y=-2x+3; find the intersection graphically and algebraically',
      adaptation:'החלק האלגברי של שאלת המקור פוצל לצעדים מדורגים לפתיחת פרק החיתוך. הנתונים נשמרו ללא שינוי; הדרך הגרפית נשמרת לשאלת ההמשך בפרק.',
      mathModel:{
        expected:{intersection:[2,-1]},
        probes:[
          {point:[2,-1],onLine:true}
        ]
      }
    },
    {
      id:'X01-P43-Q2',family:'X01',level:3,responseSpace:'mixed',
      stem:'בדקו את התוצאה שמצאתם: הציבו את `x=2` בכל אחת משתי המשוואות.',
      subparts:[
        {text:'מהו ערך ה־`y` שמתקבל במשוואה `y=3x-7`?',responseSpace:'short'},
        {text:'מהו ערך ה־`y` שמתקבל במשוואה `y=-2x+3`?',responseSpace:'short'},
        {text:'הסבירו בקצרה מדוע השוויון בין שני ערכי ה־`y` מאשר שזו נקודת החיתוך.',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 85, question 9, subpart ז — algebraic verification of the same intersection',
      adaptation:'נוסף שלב בקרה עצמית מתוך אותה משימת מקור כדי לחזק את משמעות נקודת החיתוך ולא רק את הפרוצדורה.'
    },
    {
      id:'X02-P43-Q3',family:'X02',level:4,responseSpace:'mixed',
      stem:'עכשיו מצאו את אותה נקודת חיתוך בדרך גרפית.',
      graph:{
        xMin:-1,xMax:5,yMin:-8,yMax:8,xTick:1,yTick:1,showCoordinates:false,
        ariaLabel:'מערכת צירים לשרטוט שני הישרים y שווה 3x פחות 7 ו-y שווה מינוס 2x ועוד 3',
        points:[]
      },
      subparts:[
        {text:'שרטטו על אותה מערכת צירים את `y=3x-7` ואת `y=-2x+3`.',responseSpace:'graph-draw'},
        {text:'כתבו את נקודת החיתוך שקראתם מן הגרף כזוג סדור.',responseSpace:'short'},
        {text:'האם קיבלתם אותה נקודה כמו בדרך האלגברית?',responseSpace:'choice-mark',choices:['כן','לא']}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 85, question 9, subpart ז — find the intersection graphically and algebraically',
      adaptation:'זהו החלק הגרפי המקורי של אותה שאלה; הוא הוצב לאחר הדרך האלגברית כדי ליצור מדרג ברור ולהשוות בין שני הייצוגים.'
    }
  ]
};
