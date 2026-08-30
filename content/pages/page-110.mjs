export const page={
  page:110,
  chapter:30,
  kicker:'ייצוג תופעות · הולך רגל',
  title:'הולך רגל — מהסיפור לטבלה ולגרף',
  subtitle:'מהירות קבועה · מנוחה · חזרה',
  rule:'הולך הרגל מתקדם במהירות `4` קמ״ש במשך `3` שעות, עוצר לשעה, ואז חוזר לנקודת המוצא באותה מהירות.',
  sourceRefs:['razpages:עמוד-468.html'],
  questions:[
    {
      id:'RZ468-Q1A-P110-Q1',family:'W01,Q03',level:5,responseSpace:'mixed',
      stem:'הולך רגל יצא לטיול במהירות `4` קמ״ש, הלך `3` שעות, עצר לשעה וחזר לנקודת המוצא באותה מהירות. השלימו את הטבלה ובנו גרף מתאים.',
      sourceRef:'razpages:עמוד-468.html — שאלה 1, סעיפים א–ב והטבלה',
      adaptation:'הסיפור, טווח השעות 0–7, שתי השורות הראשונות (0,0) ו-(1,4) והבקשה לבנות גרף נשמרו.',
      table:{ariaLabel:'טבלת זמן ומרחק של הולך הרגל',rows:[['שעות x',0,1,2,3,4,5,6,7],['מרחק y',0,4,{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}],['נקודה (x,y)','(0,0)','(1,4)',{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}]]},
      graph:{equalUnitScale:false,xMin:0,xMax:7,yMin:0,yMax:18,xTick:1,yTick:2,xLabel:'זמן (שעות)',yLabel:'מרחק מנקודת המוצא (ק״מ)',polyline:[[0,0],[3,12],[4,12],[7,0]],ariaLabel:'הולך רגל מתרחק עד 12 קמ בשלוש שעות, נח שעה וחוזר לנקודת המוצא בשעה 7'},
      subparts:[{text:'סמנו את הנקודות מן הטבלה במערכת הצירים וחברו אותן לפי מהלך הטיול.',responseSpace:'lines-2',level:5}]
    }
  ]
};
