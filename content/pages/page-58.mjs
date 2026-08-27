export const page={
  page:58,
  chapter:24,
  kicker:'פרק 24 · משימות אינטגרטיביות, חקר והערכה',
  title:'מערכת משוואות בלי פתרון',
  subtitle:'משווים שיפועים → מזהים מקבילות → מסיקים שאין חיתוך',
  rule:'פתרון של מערכת שתי משוואות קוויות הוא נקודת חיתוך משותפת. אם שני הישרים שונים ומקבילים, אין להם נקודת חיתוך ולכן למערכת אין פתרון.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-94-question-10'
  ],
  questions:[
    {
      id:'SY01-P58-Q1',family:'SY01',level:6,responseSpace:'mixed',
      stem:'נתונה המערכת `y=2x+6` ו־`y=2x-6`.',
      subparts:[
        {text:'מהו השיפוע של כל אחד משני הישרים?',responseSpace:'short',answerCount:2,betweenAnswers:'ו־'},
        {text:'מה שונה בין שתי המשוואות?',responseSpace:'lines-2'},
        {text:'מה ניתן להסיק על שני הישרים?',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 94, question 10 — system y=2x+6 and y=2x-6; determine number of solutions',
      adaptation:'נוסף שלב זיהוי שיפועים לפני שאלת מספר הפתרונות כדי לחבר במפורש לכלל המקבילות.'
    },
    {
      id:'SY01-P58-Q2',family:'SY01',level:7,responseSpace:'short',
      stem:'כמה פתרונות יש למערכת?',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 94, question 10 — how many solutions does the system have?'
    },
    {
      id:'SY02-P58-Q3',family:'SY02',level:8,responseSpace:'mixed',
      stem:'שרטטו את שני הישרים ובדקו את המסקנה הגרפית.',
      graph:{
        xMin:-5,xMax:5,yMin:-10,yMax:16,xTick:1,yTick:2,showCoordinates:false,
        ariaLabel:'שני ישרים מקבילים y שווה 2x ועוד 6 ו-y שווה 2x פחות 6',
        lines:[{through:[[0,6],[1,8]]},{through:[[0,-6],[1,-4]]}],
        points:[]
      },
      subparts:[
        {text:'האם הגרפים נחתכים?',responseSpace:'choice-mark',choices:['כן','לא']},
        {text:'הסבירו כיצד הגרף מאשר את מספר הפתרונות שקבעתם.',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 94, question 10 — graphical meaning of a system with parallel lines',
      adaptation:'נוסף ייצוג גרפי מדויק של שתי משוואות המקור כדי לחזק את המשמעות הגרפית של אפס פתרונות.'
    },
    {
      id:'SY01-P58-Q4',family:'SY01',level:8,responseSpace:'mixed',
      stem:'לכל מערכת קבעו כמה פתרונות יש לה, ונמקו לפי השיפועים.',
      subparts:[
        {text:'`y=3x+1` ו־`y=3x-4`',responseSpace:'short'},
        {text:'`y=3x+1` ו־`y=-x+5` — כמה פתרונות ומדוע?',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 94 — contrast: parallel lines (no solution) vs different slopes (one solution); numbers changed',
      adaptation:'מנגיד את מקרה חוסר הפתרון עם מקרה של פתרון יחיד כדי לחדד את הקשר בין השיפועים למספר הפתרונות; מספרים שונו.'
    }
  ]
};
