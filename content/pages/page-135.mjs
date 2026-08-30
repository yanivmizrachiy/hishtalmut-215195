export const page={
  page:135,
  chapter:30,
  kicker:'ייצוג תופעות · תשלום קבוע',
  title:'לונה פארק — פונקציה קבועה',
  subtitle:'y=30 · שיפוע 0 · חיתוך עם ציר y',
  rule:'בגרף אופקי התשלום אינו משתנה כאשר `x` משתנה. לכן השיפוע הוא `0` והפונקציה היא מהצורה `y=b`.',
  sourceRefs:['razpages:עמוד-529.html'],
  questions:[
    {
      id:'RZ529-Q2-P135-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'הגרף מתאר את התשלום בלונה פארק "הכוכב" כפונקציה של מספר המתקנים.',
      sourceRef:'razpages:עמוד-529.html — שאלה 2',
      adaptation:'כל ששת סעיפי המקור נשמרו. הגרף האופקי במקור הוא y=30.',
      graph:{xMin:0,xMax:10,yMin:0,yMax:60,xTick:1,yTick:10,xLabel:'מספר המתקנים',yLabel:'תשלום (₪)',lines:[{through:[[0,30],[10,30]],label:'y=30',labelAt:[8,30]}],ariaLabel:'גרף אופקי y=30 של תשלום קבוע בלונה פארק'},
      subparts:[
        {text:'א. כמה שילמה יעל אם עלתה על `2` מתקנים?',responseSpace:'lines-2',level:5},
        {text:'ב. רפאל עלה על `5` מתקנים. כמה שילם?',responseSpace:'lines-2',level:5},
        {text:'ג. מהו שיפוע הגרף? קבעו אם הגרף עולה, יורד או קבוע.',responseSpace:'lines-4',level:5},
        {text:'ד. השלימו: `m=___`, `b=___`.',responseSpace:'short',level:5},
        {text:'ה. מהם שיעורי נקודת החיתוך עם ציר `y`?',responseSpace:'short',level:5},
        {text:'ו. כתבו את הייצוג האלגברי של הישר.',responseSpace:'lines-2',level:5}
      ],
      mathModel:{standard:{A:0,B:1,C:30},expected:{m:0,b:30},probes:[{point:[2,30],onLine:true},{point:[5,30],onLine:true},{point:[0,30],onLine:true}]}
    }
  ]
};
