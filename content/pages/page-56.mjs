export const page={
  page:56,
  chapter:23,
  kicker:'פרק 23 · גאומטריה אנליטית מתקדמת',
  title:'בונים ישרים מקבילים ומקבלים מרובע',
  subtitle:'שיפוע זהה → נקודה נתונה → משוואה → שרטוט',
  rule:'אם ישר חדש מקביל לישר נתון, השיפוע שלו זהה. משתמשים בנקודה שדרכה הוא עובר כדי למצוא את `b`, ואז כותבים את המשוואה בצורה `y=mx+b`.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-71-question-6-e-g'
  ],
  questions:[
    {
      id:'AG01-P56-Q1',family:'AG01',level:7,responseSpace:'mixed',
      stem:'במשולש מן העמוד הקודם: `A(0,4)`, `B(-4,0)`, `C(4,0)`. מצאו את משוואת הישר העובר דרך `B` ומקביל לישר `AC`, שמשוואתו `y=-x+4`.',
      subparts:[
        {text:'מהו השיפוע של `AC`?',responseSpace:'short'},
        {text:'מהו השיפוע של הישר המקביל דרך `B`?',responseSpace:'short'},
        {text:'הציבו את `B(-4,0)` ומצאו את `b`.',responseSpace:'lines-2'},
        {text:'כתבו את משוואת הישר.',responseSpace:'equation'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 71, question 6(e) — find the line through B parallel to AC',
      adaptation:'המשימה המקורית פוצלה לשלבים לפי סגנון ההוראה של הפרויקט; הנקודות והישרים נשמרו.'
    },
    {
      id:'AG02-P56-Q2',family:'AG02',level:8,responseSpace:'mixed',
      stem:'מצאו את נקודת החיתוך `D` של הישר שמצאתם עם ציר `y`.',
      subparts:[
        {text:'בחיתוך עם ציר `y`, מהו ערך `x`?',responseSpace:'short'},
        {text:'מצאו את ערך `y`.',responseSpace:'lines-2'},
        {text:'כתבו את `D` כזוג סדור.',responseSpace:'short',answerShape:'ordered-pair'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 71, question 6(e) — draw the parallel line and mark its y-axis intersection D'
    },
    {
      id:'AG03-P56-Q3',family:'AG03',level:8,responseSpace:'mixed',
      stem:'מצאו את משוואת הישר העובר דרך `C(4,0)` ומקביל לישר `AB`, שמשוואתו `y=x+4`.',
      subparts:[
        {text:'מהו השיפוע?',responseSpace:'short'},
        {text:'מצאו את `b`.',responseSpace:'lines-2'},
        {text:'כתבו את משוואת הישר.',responseSpace:'equation'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 71, question 6(f) — find the line through C parallel to AB'
    },
    {
      id:'AG04-P56-Q4',family:'AG04',level:9,responseSpace:'explanation',
      stem:'מה תוכלו לומר על צלעות המרובע `ABCD` שהתקבל? הסבירו בעזרת השיפועים והמקבילות.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 71, question 6(g) — what can be said about the sides of the resulting quadrilateral'
    }
  ]
};
