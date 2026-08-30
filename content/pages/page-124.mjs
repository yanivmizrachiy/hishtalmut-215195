export const page={
  page:124,
  chapter:30,
  kicker:'ייצוג תופעות · רוכב אופניים',
  title:'רוכב במהירות 15 קמ״ש — טבלה וגרף',
  subtitle:'מרחק כפונקציה של זמן · y=15x',
  rule:'במהירות קבועה של `15` קמ״ש המרחק לאחר `x` שעות הוא `y=15x`.',
  sourceRefs:['razpages:עמוד-521.html'],
  questions:[
    {
      id:'RZ521-Q1A-P124-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'מהירות רוכב אופניים היא `15` קמ״ש. השלימו את טבלת המקור ובנו גרף מתאים.',
      sourceRef:'razpages:עמוד-521.html — שאלה 1, סעיפים א–ב והטבלה',
      adaptation:'כל זמני המקור 0–9, הערכים הראשונים (0,0), (1,15) והבקשה לבנות גרף נשמרו.',
      table:{ariaLabel:'זמן ומרחק לרוכב במהירות 15 קמש',rows:[['שעות x',0,1,2,3,4,5,6,7,8,9],['מרחק y',0,15,{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}],['נקודה (x,y)','(0,0)','(1,15)',{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}]]},
      graph:{xMin:0,xMax:9,yMin:0,yMax:135,xTick:1,yTick:15,xLabel:'זמן (שעות)',yLabel:'מרחק (ק״מ)',lines:[{through:[[0,0],[9,135]],label:'y=15x',labelAt:[7.5,112.5]}],ariaLabel:'מרחק רוכב אופניים במהירות 15 קמש, y=15x'},
      subparts:[
        {label:'ו.',text:'מהו קצב השינוי של המרחק, בקילומטרים לכל שעת נסיעה?',responseSpace:'short',level:5},
        {label:'ז.',text:'כעבור כמה שעות עבר הרוכב `90` ק״מ? היעזרו בטבלה.',responseSpace:'short',level:5},
        {label:'ח.',text:'עבור אילו ערכי `x` שבטבלה המרחק גדול מ־`75` ק״מ?',responseSpace:'short',level:5},
        {label:'ט.',text:'מהי נקודת החיתוך של הגרף עם ציר `y`?',responseSpace:'short',level:5}
      ],
      mathModel:{standard:{A:-15,B:1,C:0},expected:{m:15,b:0,xIntercept:0},probes:[{point:[1,15],onLine:true},{point:[9,135],onLine:true}]}
    }
  ]
};
