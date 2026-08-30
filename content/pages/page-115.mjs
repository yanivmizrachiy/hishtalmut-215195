export const page={
  page:115,
  chapter:30,
  kicker:'ייצוג תופעות · מילוי בריכה',
  title:'מילוי בריכה — טבלת ערכים ופונקציה',
  subtitle:'זמן ↔ כמות מים · בדיקת פונקציה',
  rule:'לכל זמן מילוי מתאים ערך יחיד של כמות מים, ולכן כמות המים היא פונקציה של הזמן. הקשר הוא `y=20x`.',
  sourceRefs:['razpages:עמוד-470.html'],
  questions:[
    {
      id:'RZ470-Q1B-P115-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'השלימו את טבלת הערכים והסבירו מדוע כמות המים היא פונקציה של זמן המילוי.',
      sourceRef:'razpages:עמוד-470.html — שאלה 1, סעיפים ד–ה והטבלה',
      adaptation:'כל שמונת זמני המקור וסעיף הפונקציה נשמרו.',
      table:{ariaLabel:'טבלת זמן מילוי וכמות מים',rows:[['זמן המילוי x (שניות)','כמות המים y (ליטרים)'],[5,{answer:true}],[8,{answer:true}],[10,{answer:true}],[15,{answer:true}],[25,{answer:true}],[30,{answer:true}],[40,{answer:true}],[50,{answer:true}]]},
      subparts:[
        {text:'האם כמות המים היא פונקציה של זמן המילוי? הסבירו על סמך הטבלה והגרף.',responseSpace:'lines-4',level:5},
        {text:'כתבו את הייצוג האלגברי המתאים לקשר בין `x` לבין `y`.',responseSpace:'lines-2',level:5},
        {text:'מהו קצב השינוי של כמות המים, בליטרים לכל שנייה?',responseSpace:'short',level:5},
        {text:'כעבור כמה שניות היו בבריכה `600` ליטרים? היעזרו בטבלה.',responseSpace:'short',level:5},
        {text:'השלימו: כאשר זמן המילוי גדל ב־`5` שניות, כמות המים גדלה ב־',responseSpace:'short',suffix:'ליטרים.',level:5},
        {text:'כתבו את הזוג הסדור המתאים לזמן מילוי של `8` שניות.',responseSpace:'short',answerShape:'ordered-pair',level:5}
      ],
      mathModel:{standard:{A:-20,B:1,C:0},expected:{m:20,b:0,xIntercept:0},probes:[{point:[8,160],onLine:true},{point:[50,1000],onLine:true}]}
    }
  ]
};
