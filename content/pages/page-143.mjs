export const page={
  page:143,
  chapter:30,
  kicker:'ייצוג תופעות · השוואת מהירויות',
  title:'נוגה — מהירות הקטנה ב־50%',
  subtitle:'חצי מהמהירות · טבלה · שרטוט על אותה מערכת צירים',
  rule:'אם מהירות אחת קטנה ב־`50\\%` ממהירות אחרת, היא שווה למחצית ממנה. לכן גם שיפוע גרף המרחק–זמן קטן פי `2`.',
  sourceRefs:['razpages:עמוד-528.html'],
  questions:[
    {
      id:'RZ528-Q1-P143-Q1',family:'W01,Q03,Q05',level:6,responseSpace:'mixed',
      stem:'נוגה יצאה מנתניה לאימון ריצה. היא רצה במהירות הקטנה ב־`50\\%` ממהירות הרכיבה של בר.',
      sourceRef:'razpages:עמוד-528.html — שאלה 1',
      adaptation:'משימת המקור נשמרה: לשרטט את גרף נוגה באותה מערכת צירים של בר. נוספו חישוב מהירות וטבלת השוואה קצרה כדי להפוך את הקשר בין 50% לבין השיפוע לגלוי.',
      graph:{xMin:0,xMax:3,yMin:0,yMax:60,xTick:0.5,yTick:10,xLabel:'זמן (שעות)',yLabel:'מרחק מנתניה (ק״מ)',lines:[{through:[[0,0],[3,60]],label:'בר',labelAt:[2.4,48]}],ariaLabel:'מערכת צירים ובה גרף בר y=20x; התלמיד מתבקש להוסיף את גרף נוגה'},
      table:{ariaLabel:'השוואת מרחקים של בר ונוגה',rows:[['זמן','בר','נוגה'],[0,0,0],[1,20,{answer:true}],[2,40,{answer:true}],[3,60,{answer:true}]]},
      subparts:[
        {text:'חשבו את מהירות הריצה של נוגה והציגו את חישוב ה־`50\\%`.',responseSpace:'lines-4',level:6},
        {text:'השלימו את עמודת נוגה בטבלה.',responseSpace:'short',level:6},
        {text:'שרטטו במערכת הצירים את הגרף של נוגה.',responseSpace:'explanation',level:6},
        {text:'השוו בין שני השיפועים והסבירו כיצד ההשוואה מתאימה למהירויות.',responseSpace:'full-work',level:6}
      ]
    }
  ]
};
