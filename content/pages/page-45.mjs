export const page={
  page:45,
  chapter:17,
  kicker:'פרק 17 · חיתוך בין שני ישרים',
  title:'אחרי נקודת החיתוך — מי מעל מי?',
  subtitle:'נקודת חיתוך → בדיקת ערכים → תחום שבו ישר אחד מעל האחר',
  rule:'נקודת החיתוך מחלקת את ההשוואה בין שני הישרים. כדי לדעת מתי ישר אחד מעל ישר אחר, משווים את ערכי ה־`y` שלהם עבור אותו ערך `x`.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-85-question-9',
    'SOURCE_OF_TRUTH.md#8'
  ],
  questions:[
    {
      id:'X05-P45-Q1',family:'X05',level:4,responseSpace:'mixed',
      stem:'המשיכו עם הישרים `y=3x-7` ו־`y=-2x+3`, שנחתכים בנקודה `(2,-1)`.',
      subparts:[
        {text:'עבור `x=0`, מצאו את ערך ה־`y` בכל אחד מהישרים.',responseSpace:'lines-2'},
        {text:'איזה ישר ממוקם גבוה יותר כאשר `x=0`?',responseSpace:'short'},
        {text:'עבור `x=3`, מצאו את ערך ה־`y` בכל אחד מהישרים.',responseSpace:'lines-2'},
        {text:'איזה ישר ממוקם גבוה יותר כאשר `x=3`?',responseSpace:'short'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 85, question 9, subpart ח — determine the x-values for which line A has larger y-values than line B',
      adaptation:'נוספו שתי בדיקות ערך משני צדי נקודת החיתוך כהכנה מדורגת לקביעת תחום ההשוואה; שתי המשוואות נשמרו ללא שינוי.'
    },
    {
      id:'X06-P45-Q2',family:'X06',level:5,responseSpace:'full-work',
      stem:'מצאו את תחום הערכים של `x` שעבורם ערכי ה־`y` של `y=3x-7` גדולים מערכי ה־`y` של `y=-2x+3`.',
      answerLabel:'דרך מלאה ותחום:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 85, question 9, subpart ח — find the domain where line A y-values exceed line B y-values',
      adaptation:'נשמרה שאלת המקור; היא מוקמה מיד לאחר מציאת נקודת החיתוך כדי לקשור בין החיתוך לבין תחומי ההשוואה.',
      mathModel:{
        standard:{A:-3,B:1,C:-7},
        expected:{m:3,b:-7,xIntercept:[7,3]},
        probes:[
          {x:0,expectedY:-7},
          {x:3,expectedY:2}
        ]
      }
    },
    {
      id:'X06-P45-Q3',family:'X06',level:6,responseSpace:'explanation',
      stem:'הסבירו במילים מדוע נקודת החיתוך `(2,-1)` היא הגבול שבו משתנה התשובה לשאלה איזה ישר גבוה יותר.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 85, question 9, subparts ז–ח — connect intersection with comparison domains',
      adaptation:'הנימוק מחבר במפורש בין שני סעיפי המקור: מציאת נקודת החיתוך וקביעת התחום שבו פונקציה אחת גדולה מהשנייה.'
    }
  ]
};
