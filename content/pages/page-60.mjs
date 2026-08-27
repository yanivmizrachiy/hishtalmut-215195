export const page={
  page:60,
  chapter:24,
  kicker:'פרק 24 · משימות אינטגרטיביות, חקר והערכה',
  title:'מתיאור מילולי למערכת משוואות',
  subtitle:'מגדירים משתנים → בונים שתי משוואות → פותרים → בודקים',
  rule:'בבעיה מילולית עם שני נעלמים מגדירים בבירור מה מייצג כל משתנה, מתרגמים כל תנאי למשוואה, פותרים את המערכת ובסוף בודקים שהתשובה מתאימה להקשר.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#pages-95-96-word-problems'
  ],
  questions:[
    {
      id:'SY05-P60-Q1',family:'SY05',level:7,responseSpace:'mixed',
      stem:'מצאו שני מספרים שסכומם `127` והפרשם `47`.',
      subparts:[
        {text:'סמנו את המספר הגדול ב־`x` ואת המספר הקטן ב־`y`. כתבו משוואה המתאימה לסכום.',responseSpace:'equation'},
        {text:'כתבו משוואה המתאימה להפרש.',responseSpace:'equation'},
        {text:'פתרו את המערכת.',responseSpace:'lines-4'},
        {text:'כתבו את שני המספרים.',responseSpace:'short',answerCount:2,betweenAnswers:'ו־'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 95, question 2 — find two numbers whose sum is 127 and difference is 47',
      adaptation:'הבעיה המקורית נשמרה; נוספו שלבי הגדרת משתנים ובניית שתי המשוואות.'
    },
    {
      id:'SY06-P60-Q2',family:'SY06',level:9,responseSpace:'mixed',
      stem:'רות שילמה `29` ש״ח בעבור כביסה של `4` מגבות ו־`7` סדינים. במבצע של `20%` הנחה שילמה `20` ש״ח בעבור כביסה של `5` מגבות ו־`5` סדינים. מצאו את התעריף הרגיל לכביסת מגבת אחת ולכביסת סדין אחד.',
      subparts:[
        {text:'הגדירו `x` כתעריף הרגיל למגבת ו־`y` כתעריף הרגיל לסדין. כתבו את המשוואה המתארת את התשלום הראשון.',responseSpace:'equation'},
        {text:'לפני ההנחה, כמה היה צריך לעלות התשלום השני? חשבו.',responseSpace:'lines-2'},
        {text:'כתבו את המשוואה השנייה לפי המחיר לפני ההנחה.',responseSpace:'equation'},
        {text:'פתרו את המערכת ומצאו את שני התעריפים.',responseSpace:'lines-4'},
        {text:'בדקו שהתעריפים מתאימים לשני התשלומים.',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 96, question 4 — laundry prices from 4 towels+7 sheets for 29 NIS and discounted 5 towels+5 sheets for 20 NIS',
      adaptation:'הנתונים נשמרו; שלב החזרת מחיר המבצע למחיר לפני הנחה הופרד כדי למנוע קפיצה קוגניטיבית ולהשאיר מקום לדרך.'
    },
    {
      id:'SY05-P60-Q3',family:'SY05',level:9,responseSpace:'full-work',
      stem:'בקופסה `40` מטבעות: חלקן של `1` ש״ח וחלקן של `5` ש״ח, ובסך הכול `120` ש״ח. הגדירו משתנים, בנו מערכת שתי משוואות, פתרו אותה ומצאו כמה מטבעות יש מכל סוג. הציגו דרך.',
      answerLabel:'הגדרה, מערכת, פתרון ותשובה:',
      sourceRef:'razpages:bank.json word-problems-system — בעיית מטבעות עם מספר כולל וסכום כולל; מספרים שונו',
      adaptation:'בעיה מילולית נוספת מסוג "מספר כולל וערך כולל", בהתאם לסגנון בניית המערכת של הפרק; מספרים שונו.'
    }
  ]
};
