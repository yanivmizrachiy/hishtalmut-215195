export const page={
  page:112,
  chapter:30,
  kicker:'ייצוג תופעות · רוכב אופניים',
  title:'רוכב אופניים — מהסיפור לטבלה ולגרף',
  subtitle:'20 קמ״ש · עצירה · חזרה',
  rule:'הרוכב מתקדם במהירות `20` קמ״ש במשך `4` שעות, עוצר לשעה, ואז חוזר לנקודת המוצא. לכן המרחק המרבי הוא `80` ק״מ.',
  sourceRefs:['razpages:עמוד-469.html'],
  questions:[
    {
      id:'RZ469-Q1A-P112-Q1',family:'W01,Q03',level:5,responseSpace:'mixed',
      stem:'רוכב אופניים נסע במהירות `20` קמ״ש במשך `4` שעות, עצר לשעה וחזר לנקודת המוצא. השלימו את הטבלה ובנו גרף מתאים.',
      sourceRef:'razpages:עמוד-469.html — שאלה 1, סעיפים א–ב והטבלה',
      adaptation:'הסיפור, טווח השעות 0–9, הערכים הראשונים 0 ו-20 והבקשה לבנות גרף נשמרו.',
      table:{ariaLabel:'טבלת זמן ומרחק של רוכב האופניים',rows:[['שעות x',0,1,2,3,4,5,6,7,8,9],['מרחק y',0,20,{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}],['נקודה (x,y)','(0,0)','(1,20)',{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}]]},
      graph:{equalUnitScale:false,xMin:0,xMax:9,yMin:0,yMax:95,xTick:1,yTick:5,xLabel:'זמן (שעות)',yLabel:'מרחק מנקודת המוצא (ק״מ)',polyline:[[0,0],[4,80],[5,80],[9,0]],ariaLabel:'רוכב אופניים מתרחק עד 80 קמ בארבע שעות, נח שעה וחוזר לנקודת המוצא בשעה 9'},
      subparts:[{text:'סמנו את הנקודות מן הטבלה במערכת הצירים וחברו אותן לפי מהלך הנסיעה.',responseSpace:'lines-2',level:5}]
    }
  ]
};
