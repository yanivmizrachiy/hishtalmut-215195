export const page={
  page:138,
  chapter:30,
  kicker:'ייצוג תופעות · קריאת גרף מרחק–זמן',
  title:'סיור תיירים — טבלה וקריאת ערכים',
  subtitle:'התרחקות · מנוחה · חזרה',
  rule:'בגרף מרחק–זמן קוראים לכל זמן את המרחק המתאים. קטע אופקי מתאר פרק זמן שבו המרחק מן המחנה אינו משתנה.',
  sourceRefs:['razpages:עמוד-519.html'],
  questions:[
    {
      id:'RZ519-Q1A-P138-Q1',family:'W01,Q03',level:6,responseSpace:'mixed',
      stem:'קבוצת תיירים יצאה לסיור. הגרף מתאר את מרחק הקבוצה מן המחנה בכל שעה של הסיור. השלימו את הטבלה וענו לפי הגרף.',
      sourceRef:'razpages:עמוד-519.html — שאלה 1, סעיפים א–ג',
      adaptation:'הגרף והנתונים המספריים של המקור נשמרו: (0,0)→(4,8)→(7,8)→(9,0). הטבלה הוצגה אנכית כדי לשמור על A4 קריא.',
      graph:{xMin:0,xMax:10,yMin:0,yMax:9,xTick:1,yTick:1,xLabel:'שעות',yLabel:'מרחק מהמחנה (ק״מ)',polyline:[[0,0],[4,8],[7,8],[9,0]],ariaLabel:'קבוצת תיירים מתרחקת מן המחנה עד מרחק 8 קמ בשעה 4, נשארת במרחק זה עד שעה 7 וחוזרת למחנה בשעה 9'},
      table:{ariaLabel:'טבלת שעות ומרחק מהמחנה',rows:[['שעה x','מרחק y'],[1,{answer:true}],[2,{answer:true}],[3,{answer:true}],[4,{answer:true}],[5,{answer:true}],[6,{answer:true}],[7,{answer:true}],[8,{answer:true}],[9,{answer:true}]]},
      subparts:[
        {text:'ב. באיזה מרחק מן המחנה הייתה הקבוצה כעבור `3` שעות?',responseSpace:'lines-2',level:6},
        {text:'ג. כעבור כמה שעות הייתה הקבוצה במרחק `8` ק״מ מן המחנה? כתבו את כל הזמנים המתאימים.',responseSpace:'lines-2',level:6},
        {label:'ד.',text:'באיזה תחום זמן היה מרחק הקבוצה מן המחנה קבוע?',responseSpace:'short',level:6}
      ]
    }
  ]
};
