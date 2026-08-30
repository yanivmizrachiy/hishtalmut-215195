export const page={
  page:126,
  chapter:30,
  kicker:'ייצוג תופעות · משאית',
  title:'משאית במהירות 40 קמ״ש — טבלה וגרף',
  subtitle:'מרחק כפונקציה של זמן · y=40x',
  rule:'במהירות קבועה של `40` קמ״ש המרחק לאחר `x` שעות הוא `y=40x`.',
  sourceRefs:['razpages:עמוד-522.html'],
  questions:[
    {
      id:'RZ522-Q1A-P126-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'מהירות משאית היא `40` קמ״ש. השלימו את טבלת המקור ובנו גרף מתאים.',
      sourceRef:'razpages:עמוד-522.html — שאלה 1, סעיפים א–ב והטבלה',
      adaptation:'כל זמני המקור 0–9, הערכים הראשונים (0,0), (1,40) והבקשה לבנות גרף נשמרו.',
      table:{ariaLabel:'זמן ומרחק למשאית במהירות 40 קמש',rows:[['שעות x',0,1,2,3,4,5,6,7,8,9],['מרחק y',0,40,{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}],['נקודה (x,y)','(0,0)','(1,40)',{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}]]},
      graph:{xMin:0,xMax:9,yMin:0,yMax:360,xTick:1,yTick:40,xLabel:'זמן (שעות)',yLabel:'מרחק (ק״מ)',lines:[{through:[[0,0],[9,360]],label:'y=40x',labelAt:[7.5,300]}],ariaLabel:'מרחק משאית במהירות 40 קמש, y=40x'},
      subparts:[
        {text:'מהו קצב השינוי של המרחק, בקילומטרים לכל שעת נסיעה?',responseSpace:'short',level:5},
        {text:'כעבור כמה שעות עברה המשאית `200` ק״מ? היעזרו בטבלה.',responseSpace:'short',level:5},
        {text:'עבור אילו ערכי `x` שבטבלה המרחק גדול מ־`240` ק״מ?',responseSpace:'short',level:5},
        {text:'מהי נקודת החיתוך של הגרף עם ציר `y`?',responseSpace:'short',level:5}
      ],
      mathModel:{standard:{A:-40,B:1,C:0},expected:{m:40,b:0,xIntercept:0},probes:[{point:[1,40],onLine:true},{point:[9,360],onLine:true}]}
    }
  ]
};
