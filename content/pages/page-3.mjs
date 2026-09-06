export const page={
  page:3,
  chapter:0,
  kicker:'ידע מקדים · טבלה ונקודות',
  title:'מהצלע להיקף — משולש שווה־צלעות',
  subtitle:'ערך משתנה → היקף → טבלה → נקודות · רמות 1–2',
  rule:'במשולש שווה־צלעות שאורך כל צלע בו `m`, ההיקף הוא סכום שלוש הצלעות, ולכן `P=3m`.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-4-question-2'
  ],
  questions:[
    {
      id:'P11-P03-Q1',family:'P11',level:1,responseSpace:'table-cell',
      stem:'נסמן ב־`m` את אורך הצלע במשולש שווה־צלעות. השלימו את הטבלה המתארת את היקף המשולש עבור הערכים הנתונים של `m`.',
      table:{
        ariaLabel:'טבלת אורך צלע והיקף של משולש שווה צלעות',
        rows:[
          ['`m` — אורך הצלע','1','2','3','4','5'],
          ['`P` — היקף',{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}]
        ]
      },
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 4, question 2 — create a table of the perimeter of an equilateral triangle for different values of m',
      adaptation:'שאלת המקור נשמרה; נבחרו חמישה ערכי m חיוביים כדי לתת טבלה קונקרטית לתלמיד.'
    },
    {
      id:'P12-P03-Q2',family:'P12',level:2,responseSpace:'graph-draw',
      stem:'שרטטו על מערכת הצירים את הנקודות המתאימות לערכים שבטבלה.',
      graph:{
        xMin:0,xMax:6,yMin:0,yMax:18,xTick:1,yTick:3,
        showZeroOnX:true,showZeroOnY:true,showCoordinates:false,
        xLabel:'m — אורך הצלע',yLabel:'P — היקף',
        ariaLabel:'מערכת צירים לסימון נקודות של אורך צלע והיקף משולש שווה צלעות'
      },
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 4, question 2 — plot the points corresponding to the table values on a coordinate system',
      adaptation:'פעולת הסרטוט נשמרה בדיוק; מערכת הצירים הותאמה לערכי הטבלה שנבחרו בסעיף הקודם.'
    }
  ]
};
