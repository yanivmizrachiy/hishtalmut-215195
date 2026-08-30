export const page={
  page:102,
  chapter:30,
  kicker:'ייצוג תופעות · רוכב אופניים',
  title:'רוכב אופניים — קריאת גרף וטבלה',
  subtitle:'מרחק מנקודת המוצא כפונקציה של השעה',
  rule:'בגרף מרחק–זמן: קטע עולה מתאר התרחקות מנקודת המוצא, קטע אופקי מתאר עצירה, וקטע יורד מתאר חזרה לכיוון נקודת המוצא.',
  sourceRefs:['razpages:עמוד-464.html'],
  questions:[
    {
      id:'RZ464-Q1A-P102-Q1',family:'W01,Q03',level:5,responseSpace:'mixed',
      stem:'רוכב אופניים יצא לדרך בשעה `6:00` בבוקר. הגרף מתאר את מרחקו מנקודת המוצא. ענו לפי הגרף.',
      sourceRef:'razpages:עמוד-464.html — שאלה 1, חלק ראשון: גרף הרוכב ושאלות קריאה',
      adaptation:'הגרף שוחזר מהמקור כ-(6,0)→(9,90)→(11,90)→(14,0). טבלת המקור מוצגת בנפרד משום שבמקור הודפסו בה השעות 1–9, שאינן תואמות את ציר השעות 6–14.',
      graph:{xMin:4,xMax:18,yMin:0,yMax:90,xTick:2,yTick:10,xLabel:'שעה',yLabel:'מרחק מנקודת המוצא (ק״מ)',polyline:[[6,0],[9,90],[11,90],[14,0]],ariaLabel:'רוכב יוצא בשעה 6, מגיע למרחק 90 קמ בשעה 9, נח עד שעה 11 וחוזר לנקודת המוצא בשעה 14'},
      subparts:[
        {text:'א. באיזו שעה יצא הרוכב לדרך?',responseSpace:'short',level:5},
        {text:'ב. באיזה מרחק היה הרוכב בשעה `8:00`?',responseSpace:'short',level:5},
        {text:'ג. באיזו שעה היה הרוכב במרחק `60` ק״מ מנקודת המוצא?',responseSpace:'lines-2',level:5}
      ],
      table:{ariaLabel:'טבלת המקור כפי שהודפסה',rows:[['שעות x','מרחק מנקודת המוצא y'],[1,{answer:true}],[2,{answer:true}],[3,{answer:true}],[4,{answer:true}],[5,{answer:true}],[6,{answer:true}],[7,{answer:true}],[8,{answer:true}],[9,{answer:true}]]}
    }
  ]
};
