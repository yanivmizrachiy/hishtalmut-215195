export const page={
  page:59,
  chapter:24,
  kicker:'פרק 24 · משימות אינטגרטיביות, חקר והערכה',
  title:'פותרים מערכת בשיטות אלגבריות',
  subtitle:'מפשטים → הצבה → השוואת מקדמים → בודקים',
  rule:'אפשר לפתור מערכת שתי משוואות בשיטת ההצבה או בשיטת השוואת המקדמים. בוחרים שיטה נוחה לפי מבנה המערכת, ובסוף בודקים שהזוג הסדור מקיים את שתי המשוואות.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-95-question-3',
    'official-curriculum:systems-algebraic-methods'
  ],
  questions:[
    {
      id:'SY03-P59-Q1',family:'SY03',level:7,responseSpace:'mixed',
      stem:'נתונה המערכת `2x+y=2` ו־`3x-y-x=-4`.',
      subparts:[
        {text:'פשטו את המשוואה השנייה על ידי כינוס איברים דומים.',responseSpace:'equation'},
        {text:'בטאו את `y` מן המשוואה הראשונה והשתמשו בשיטת ההצבה.',responseSpace:'lines-2'},
        {text:'פתרו ומצאו את ערך `x`.',responseSpace:'lines-4'},
        {text:'מצאו את ערך `y`.',responseSpace:'lines-2'},
        {text:'כתבו את פתרון המערכת כזוג סדור.',responseSpace:'short',answerShape:'ordered-pair'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 95, question 3 — solve the system 2x+y=2 and 3x-y-x=-4',
      adaptation:'המערכת המקורית נשמרה; דרך ההצבה נכתבה במפורש כדי לעמוד בדרישת התוכנית ללימוד השיטה.'
    },
    {
      id:'SY04-P59-Q2',family:'SY04',level:8,responseSpace:'mixed',
      stem:'בדקו את הפתרון שמצאתם על ידי הצבה בשתי המשוואות המקוריות.',
      subparts:[
        {text:'הציבו במשוואה `2x+y=2`.',responseSpace:'lines-2'},
        {text:'הציבו במשוואה `3x-y-x=-4`.',responseSpace:'lines-2'},
        {text:'האם הפתרון מקיים את שתי המשוואות?',responseSpace:'choice-mark',choices:['כן','לא']}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 95 — curriculum emphasis on self-check and algebraic meaning of a system solution',
      adaptation:'נוסף שלב בקרה מפורש כדי לחזק את משמעות הפתרון כזוג שמקיים את שתי המשוואות.'
    },
    {
      id:'SY03-P59-Q3',family:'SY03',level:8,responseSpace:'full-work',
      stem:'פתרו את המערכת `x+y=5` ו־`2x-y=1` בשיטת השוואת המקדמים: חברו את המשוואות כך שה־`y` יתבטל, מצאו את `x`, אחר כך את `y`, וכתבו זוג סדור.',
      answerLabel:'דרך ופתרון:',
      sourceRef:'official-curriculum:systems-algebraic-methods — explicit equal-coefficient/elimination practice',
      adaptation:'המערכת שכבר הייתה בעמוד נשמרה; ההנחיה הובהרה כך שהתרגיל מלמד במפורש את שיטת השוואת המקדמים ולא רק פתרון חופשי.'
    }
  ]
};
