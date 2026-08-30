export const page={
  page:134,
  chapter:30,
  kicker:'ייצוג תופעות · הולך רגל',
  title:'הולך רגל במהירות 3 קמ״ש',
  subtitle:'טבלה · גרף · y=3x · קריאת מרחק מזמן',
  rule:'כאשר המהירות קבועה `3` קמ״ש, המרחק לאחר `x` שעות הוא `y=3x`.',
  sourceRefs:['razpages:עמוד-527.html'],
  questions:[
    {
      id:'RZ527-Q2-P134-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'הולך רגל מטייל במהירות `3` קמ״ש. השלימו את הטבלה, בנו גרף וענו לפי הגרף.',
      sourceRef:'razpages:עמוד-527.html — שאלה 2',
      adaptation:'התרגיל העצמאי נשמר במלואו: מהירות 3 קמ״ש, טבלה לשעות 0–9, בניית גרף ושתי שאלות הקריאה. הטבלה הוצגה אנכית כדי להתאים ל-A4 בלי להקטין טקסט; הטבלה עצמה משמשת משטח התשובה לסעיף א. שאלת המהירות של בר בראש המקור אינה נכללת משום שהיא תלויה בגרף הסותר של עמוד 526.',
      table:{ariaLabel:'זמן ומרחק של הולך רגל במהירות 3 קמש',rows:[['שעות x','מרחק y'],[0,0],[1,3],[2,{answer:true}],[3,{answer:true}],[4,{answer:true}],[5,{answer:true}],[6,{answer:true}],[7,{answer:true}],[8,{answer:true}],[9,{answer:true}]]},
      graph:{xMin:0,xMax:9,yMin:0,yMax:27,xTick:1,yTick:3,xLabel:'זמן (שעות)',yLabel:'מרחק (ק״מ)',lines:[{through:[[0,0],[9,27]],label:'y=3x',labelAt:[7,21]}],ariaLabel:'גרף y=3x להולך רגל במהירות 3 קמש'},
      subparts:[
        {text:'השלימו את כל הערכים החסרים בטבלה.',responseSpace:'short',level:5},
        {text:'סמנו במערכת הצירים את נקודות הטבלה וחברו אותן בקו ישר.',responseSpace:'explanation',level:5},
        {text:'כעבור כמה שעות היה הולך הרגל במרחק `12` ק״מ מנקודת המוצא?',responseSpace:'lines-2',level:5},
        {text:'כעבור כמה שעות היה במרחק `6` ק״מ מנקודת המוצא?',responseSpace:'lines-2',level:5}
      ],
      mathModel:{standard:{A:-3,B:1,C:0},expected:{m:3,b:0,xIntercept:0},probes:[{point:[2,6],onLine:true},{point:[4,12],onLine:true},{point:[9,27],onLine:true}]}
    }
  ]
};
