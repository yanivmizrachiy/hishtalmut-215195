export const page={
  page:108,
  chapter:30,
  kicker:'ייצוג תופעות · נסיעת מכונית',
  title:'מכונית — מהסיפור לטבלה ולגרף',
  subtitle:'מהירות קבועה · עצירה · חזרה',
  rule:'המכונית נוסעת במהירות `120` קמ״ש במשך `3` שעות, עוצרת לשעתיים, ואז חוזרת לנקודת המוצא באותה מהירות.',
  sourceRefs:['razpages:עמוד-467.html'],
  questions:[
    {
      id:'RZ467-Q1A-P108-Q1',family:'W01,Q03',level:5,responseSpace:'mixed',
      stem:'מכונית יצאה לדרך במהירות `120` קמ״ש, נסעה `3` שעות, עצרה לשעתיים וחזרה לנקודת המוצא באותה מהירות. השלימו את הטבלה ובנו גרף מתאים.',
      sourceRef:'razpages:עמוד-467.html — שאלה 1, סעיפים א–ב והטבלה',
      adaptation:'הסיפור, טווח השעות 0–9, שתי השורות הראשונות (0,0) ו-(1,120) והבקשה לבנות גרף נשמרו.',
      table:{ariaLabel:'טבלת זמן ומרחק של המכונית',rows:[['שעות x',0,1,2,3,4,5,6,7,8,9],['מרחק y',0,120,{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}],['נקודה (x,y)','(0,0)','(1,120)',{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}]]},
      graph:{xMin:0,xMax:9,yMin:0,yMax:380,xTick:1,yTick:20,xLabel:'זמן (שעות)',yLabel:'מרחק מנקודת המוצא (ק״מ)',polyline:[[0,0],[3,360],[5,360],[8,0]],ariaLabel:'מכונית מתרחקת עד 360 קמ בשלוש שעות, עומדת שעתיים וחוזרת לנקודת המוצא בשעה 8'},
      subparts:[{text:'ב. סמנו את הנקודות מן הטבלה במערכת הצירים וחברו אותן לפי מהלך הנסיעה.',responseSpace:'lines-2',level:5}]
    }
  ]
};
