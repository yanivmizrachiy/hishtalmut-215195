export const page={
  page:59,
  chapter:24,
  kicker:'פרק 24 · משימות אינטגרטיביות, חקר והערכה',
  title:'מערכת שבה המשוואות אינן שתיהן מסודרות',
  subtitle:'מפשטים → בוחרים דרך → מוצאים x ו-y → כותבים זוג סדור',
  rule:'במערכת משוואות אפשר קודם לפשט כל משוואה ולבחור דרך נוחה. הפתרון הסופי הוא זוג סדור `(x,y)` שמקיים את שתי המשוואות.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-95-question-3'
  ],
  questions:[
    {
      id:'SY03-P59-Q1',family:'SY03',level:7,responseSpace:'mixed',
      stem:'נתונה המערכת `2x+y=2` ו־`3x-y-x=-4`.',
      subparts:[
        {text:'פשטו את המשוואה השנייה על ידי כינוס איברים דומים.',responseSpace:'equation'},
        {text:'בחרו דרך פתרון נוחה והסבירו בקצרה מדוע בחרתם בה.',responseSpace:'lines-2'},
        {text:'פתרו ומצאו את ערך `x`.',responseSpace:'lines-4'},
        {text:'מצאו את ערך `y`.',responseSpace:'lines-2'},
        {text:'כתבו את פתרון המערכת כזוג סדור.',responseSpace:'short',answerShape:'ordered-pair'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 95, question 3 — solve the system 2x+y=2 and 3x-y-x=-4',
      adaptation:'המערכת המקורית נשמרה; נוספו שלבי פישוט ובחירת שיטה בהתאם לדגשי התוכנית על שיקול איזו שיטה נוחה.'
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
    }
  ]
};
