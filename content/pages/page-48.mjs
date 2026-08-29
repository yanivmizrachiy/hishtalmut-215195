export const page={
  page:48,
  chapter:19,
  kicker:'פרק 19 · אי־שוויונות קוויים',
  title:'פותרים אי־שוויון צעד אחר צעד',
  subtitle:'אלגברה → כיוון סימן → בדיקה גרפית',
  rule:'פותרים אי־שוויון בדומה למשוואה, תוך שמירה על כיוון הסימן. אפשר גם לפרש אותו גרפית: בודקים עבור אילו ערכי `x` גרף אחד נמצא מעל או מתחת לגרף האחר.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#pages-84-85-question-8',
    'official-curriculum:linear-inequalities-algebraic-and-graphical'
  ],
  questions:[
    {
      id:'IN03-P48-Q1',family:'IN03',level:3,responseSpace:'lines-2',
      stem:'פתרו את אי־השוויון `x+3<7.1`.',
      answerLabel:'דרך ותחום פתרון:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 84, question 8(a) — x+3<7.1'
    },
    {
      id:'IN03-P48-Q2',family:'IN03',level:4,responseSpace:'lines-2',
      stem:'פתרו את אי־השוויון `8x-4>17.2`.',
      answerLabel:'דרך ותחום פתרון:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 84, question 8(b) — 8x-4>17.2'
    },
    {
      id:'IN04-P48-Q3',family:'IN04',level:5,responseSpace:'lines-2',
      stem:'פתרו את אי־השוויון `4x-3>2x+5`.',
      answerLabel:'דרך ותחום פתרון:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 85, question 8(c) — 4x-3>2x+5'
    },
    {
      id:'IN05-P48-Q4',family:'IN05',level:6,responseSpace:'lines-2',
      stem:'פתרו את אי־השוויון `2(x+5)>x+18`.',
      answerLabel:'דרך ותחום פתרון:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 85, question 8(d) — 2(x+5)>x+18'
    },
    {
      id:'IN06-P48-Q5',family:'IN06',level:7,responseSpace:'lines-2',
      stem:'פתרו את אי־השוויון `-3x+6>0`. שימו לב להפוך את כיוון הסימן כאשר מחלקים במספר שלילי.',
      answerLabel:'דרך ותחום פתרון:',
      sourceRef:'razpages:bank.json inequalities — אי־שוויון עם מקדם שלילי המחייב היפוך כיוון הסימן; מספרים שונו',
      adaptation:'מוסיף את המקרה שבו נדרש היפוך סימן, בהתאם לכלל המופיע בראש העמוד; מספרים שונו.'
    },
    {
      id:'IN09-P48-Q6',family:'IN09',level:7,responseSpace:'mixed',
      stem:'הגרפים מתארים את `y=2x+3` ואת `y=11`. רוצים לדעת מתי `2x+3>11`.',
      graph:{
        xMin:0,xMax:7,yMin:0,yMax:17,xTick:1,yTick:2,showCoordinates:false,
        ariaLabel:'הישר y שווה 2x ועוד 3 והישר האופקי y שווה 11, נחתכים כאשר x שווה 4',
        lines:[{through:[[0,3],[7,17]]},{through:[[0,11],[7,11]]}],
        points:[{x:4,y:11,label:'A'}]
      },
      subparts:[
        {text:'מהגרף: עבור אילו ערכי `x` הישר `y=2x+3` נמצא מעל הישר `y=11`?',responseSpace:'short'},
        {text:'פתרו אלגברית את `2x+3>11` והשוו לתשובה הגרפית.',responseSpace:'lines-2'}
      ],
      sourceRef:'official-curriculum:linear-inequalities-algebraic-and-graphical — solve a linear inequality by algebraic and graphical means',
      adaptation:'נוסף ייצוג גרפי מפורש לאותו אי־שוויון כדי לקשור בין תחום הפתרון לבין מיקום שני גרפים.'
    }
  ]
};
