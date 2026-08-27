export const page={
  page:47,
  chapter:19,
  kicker:'פרק 19 · אי־שוויונות קוויים',
  title:'האם המספר הוא פתרון של אי־השוויון?',
  subtitle:'מציבים → בודקים אם הטענה נכונה → מסבירים',
  rule:'מספר הוא פתרון של אי־שוויון אם לאחר שמציבים אותו במקום `x` מתקבלת טענה נכונה.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-84-questions-5-7'
  ],
  questions:[
    {
      id:'IN01-P47-Q1',family:'IN01',level:2,responseSpace:'mixed',
      stem:'נתון אי־השוויון `-4x<12`.',
      subparts:[
        {text:'הציבו `x=1`. האם מתקבלת טענה נכונה?',responseSpace:'choice-mark',choices:['כן','לא']},
        {text:'הסבירו במילים מדוע כל מספר חיובי הוא פתרון של אי־השוויון.',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 84, question 6 — explain without solving why every positive number solves -4x<12',
      adaptation:'נוסף קודם מקרה בדיקה אחד, ולאחריו נשמרה דרישת המקור להסבר כללי ללא פתרון אלגברי.'
    },
    {
      id:'IN01-P47-Q2',family:'IN01',level:3,responseSpace:'mixed',
      stem:'עדיין באי־השוויון `-4x<12`.',
      subparts:[
        {text:'תנו דוגמה למספר שלילי שהוא פתרון של אי־השוויון.',responseSpace:'short'},
        {text:'בדקו את המספר שבחרתם בעזרת הצבה.',responseSpace:'lines-2'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 84, question 6(b) — give an example of a negative number that is a solution of -4x<12',
      adaptation:'נשמרה שאלת המקור ונוסף מקום מפורש לבדיקת ההצבה.'
    },
    {
      id:'IN02-P47-Q3',family:'IN02',level:4,responseSpace:'mixed',
      stem:'נתון אי־השוויון `3x>-4`.',
      subparts:[
        {text:'תנו דוגמה למספר שהוא פתרון של אי־השוויון.',responseSpace:'short'},
        {text:'תנו דוגמה למספר שאינו פתרון של אי־השוויון.',responseSpace:'short'},
        {text:'הראו בהצבה מדוע כל אחת מהדוגמאות מתאימה לקביעה שלכם.',responseSpace:'lines-4'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 84, question 7 — give one number that solves 3x>-4 and one that does not',
      adaptation:'נשמרה שאלת המקור; נוסף מרחב עבודה משותף לבדיקת שתי ההצבות.'
    }
  ]
};
