export const page={
  page:98,
  chapter:30,
  kicker:'ייצוג תופעות · קריאת גרף',
  title:'טיול קבוצת תיירים — טבלה וקריאת ערכים',
  subtitle:'מרחק מהמחנה כפונקציה של הזמן',
  rule:'הגרף מתאר מרחק מהמחנה: עליה פירושה התרחקות, קטע אופקי פירושו מרחק קבוע, וירידה פירושה חזרה לכיוון המחנה.',
  sourceRefs:['razpages:עמוד-462.html'],
  questions:[
    {
      id:'RZ462-Q1A-P98-Q1',family:'W01,Q03',level:5,responseSpace:'mixed',
      stem:'קבוצת תיירים יצאה לסיור. הגרף מתאר את מרחק הקבוצה מהמחנה בכל שעה. השלימו את הטבלה וענו על הסעיפים.',
      sourceRef:'razpages:עמוד-462.html — שאלה 1, סעיפים א–ג: גרף (0,0)→(4,8)→(7,8)→(9,0), טבלה וקריאת ערכים',
      adaptation:'שאלת המקור הארוכה פוצלה לשני עמודי A4 בלבד; הגרף, הטבלה וכל הסעיפים נשמרים יחד בעמודים 98–99.',
      graph:{xMin:0,xMax:10,yMin:0,yMax:9,xTick:1,yTick:1,xLabel:'שעות',yLabel:'מרחק מהמחנה (ק״מ)',polyline:[[0,0],[4,8],[7,8],[9,0]],ariaLabel:'מרחק התיירים: מ-0 עד 4 שעות עליה ל-8 קמ, מנוחה עד שעה 7, וחזרה למחנה בשעה 9'},
      table:{ariaLabel:'טבלת שעה ומרחק מהמחנה',rows:[['שעה x','מרחק y'],[1,{answer:true}],[2,{answer:true}],[3,{answer:true}],[4,{answer:true}],[5,{answer:true}],[6,{answer:true}],[7,{answer:true}],[8,{answer:true}],[9,{answer:true}]]},
      subparts:[
        {text:'ב. באיזה מרחק מהמחנה הייתה הקבוצה כעבור `3` שעות?',responseSpace:'short',level:5},
        {text:'ג. כעבור כמה שעות הייתה הקבוצה במרחק `8` ק״מ מהמחנה? כתבו את כל האפשרויות.',responseSpace:'lines-2',level:5}
      ]
    }
  ]
};
