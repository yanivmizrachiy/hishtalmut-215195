export const page={
  page:61,
  chapter:24,
  kicker:'פרק 24 · משימות אינטגרטיביות, חקר והערכה',
  title:'מבצע צבי הים — בונים מערכת',
  subtitle:'יחידות → שתי מגבלות → מערכת → פתרון',
  rule:'במודל עם שתי מגבלות, כל מגבלה יוצרת משוואה אחרת. חשוב להשתמש באותן יחידות בשני אגפי כל משוואה ולפרש את הפתרון לפי משמעות המשתנים.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#pages-98-99-sea-turtles'
  ],
  questions:[
    {
      id:'IT01-P61-Q1',family:'IT01',level:8,responseSpace:'mixed',
      stem:'צוות חוקרים צריך משדרים ל־`30` צבי ים. משדר קל שוקל `200` גרם ועולה `500` ש״ח. משדר לווייני שוקל `500` גרם ועולה `800` ש״ח. התקציב הכולל הוא `18,000` ש״ח והמשקל הכולל חייב להיות `9,000` גרם. נסמן ב־`x` את מספר המשדרים הקלים וב־`y` את מספר המשדרים הלווייניים.',
      subparts:[
        {text:'כתבו משוואה המתארת את מגבלת התקציב.',responseSpace:'equation'},
        {text:'כתבו משוואה המתארת את מגבלת המשקל.',responseSpace:'equation'},
        {text:'הסבירו מדוע בכל משוואה המקדמים של `x` ושל `y` שונים.',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 98 — sea turtle transmitters: Lite 200g/500 NIS, Sat 500g/800 NIS, total budget 18000 NIS and total weight 9000g; build a system',
      adaptation:'כל נתוני המקור נשמרו; המשימה פוצלה לשתי מגבלות לפני שלב הפתרון.'
    },
    {
      id:'IT02-P61-Q2',family:'IT02',level:9,responseSpace:'full-work',
      stem:'פתרו את מערכת המשוואות ומצאו כמה משדרים מכל סוג על החוקרים להזמין.',
      answerLabel:'דרך ותשובה:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 98 — solve the system and determine how many transmitters of each type to order'
    },
    {
      id:'IT03-P61-Q3',family:'IT03',level:9,responseSpace:'mixed',
      stem:'בדקו את הפתרון שקיבלתם.',
      subparts:[
        {text:'האם מספר המשדרים הכולל הוא `30`?',responseSpace:'choice-mark',choices:['כן','לא']},
        {text:'בדקו שהעלות הכוללת היא `18,000` ש״ח.',responseSpace:'lines-2'},
        {text:'בדקו שהמשקל הכולל הוא `9,000` גרם.',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 98 — solution must satisfy budget, weight and the mission for 30 turtles',
      adaptation:'נוסף שלב בקרה מפורש המראה שהפתרון 20+10 אכן מתאים לכל נתוני המשימה.'
    },
    {
      id:'IT03-P61-Q4',family:'IT03',level:9,responseSpace:'lines-2',
      stem:'הפתרון הוא `x=20` משדרים קלים ו־`y=10` לווייניים. הראו שהפתרון מקיים גם את הדרישה שמספר המשדרים הכולל הוא `30`, והסבירו מדוע חשוב שכל שלוש הדרישות (מספר, תקציב, משקל) יתקיימו יחד.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 98 — verify the total-count constraint alongside budget and weight',
      adaptation:'בדיקה נוספת של מגבלת המספר על אותו פתרון; ללא נתונים חדשים.'
    },
    {
      id:'IT06-P61-Q5',family:'IT06,X03',level:10,responseSpace:'lines-2',
      stem:'מערכת שתי המשוואות שכתבתם היא למעשה שני ישרים. הסבירו כיצד רעיון החיתוך בין שני ישרים (שלמדתם בפרק החיתוכים) עוזר להבין מדוע למערכת יש פתרון יחיד.',
      sourceRef:'SOURCE_OF_TRUTH.md#9 — קשר בין פתרון מערכת לבין נקודת חיתוך של שני ישרים',
      adaptation:'רפלקציה מתודית המקשרת מערכת משוואות לנקודת חיתוך; ללא נתונים חדשים.'
    }
  ]
};
