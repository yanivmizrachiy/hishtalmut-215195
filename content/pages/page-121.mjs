export const page={
  page:121,
  chapter:30,
  kicker:'ייצוג תופעות · ארנונה',
  title:'ארנונה — טבלה ונקודות על הגרף',
  subtitle:'השלמת ערכים · קריאת שיעורים · y=5x',
  rule:'בפונקציה `y=5x` אפשר לחשב ארנונה משטח באמצעות כפל ב־5, ולמצוא שטח מתשלום באמצעות חילוק ב־5.',
  sourceRefs:['razpages:עמוד-518.html'],
  questions:[
    {
      id:'RZ518-Q1B-P121-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'השלימו את טבלת המקור ואת שיעורי הנקודות המסומנות.',
      sourceRef:'razpages:עמוד-518.html — שאלה 1, סעיפים ה–ו והטבלה',
      adaptation:'כל חמש שורות הטבלה וארבע הנקודות A-D נשמרו בדיוק.',
      table:{ariaLabel:'טבלת שטח נכס וארנונה',rows:[['שטח הנכס x','ארנונה y'],[100,{answer:true}],[{answer:true},3000],[800,{answer:true}],[{answer:true},4500],[1000,{answer:true}]]},
      subparts:[
        {text:'ו1. השלימו: `A(200,___)`.',responseSpace:'short',level:5},
        {text:'ו2. השלימו: `B(___,2000)`.',responseSpace:'short',level:5},
        {text:'ו3. השלימו: `C(700,___)`.',responseSpace:'short',level:5},
        {text:'ו4. השלימו: `D(___,1500)`.',responseSpace:'short',level:5},
        {text:'כתבו את הייצוג האלגברי של הקשר בין שטח הנכס לארנונה.',responseSpace:'lines-2',level:5}
      ],
      graph:{xMin:0,xMax:1000,yMin:0,yMax:5000,xTick:100,yTick:500,xLabel:'שטח הנכס (מ״ר)',yLabel:'ארנונה (₪)',lines:[{through:[[0,0],[900,4500]],label:'y=5x',labelAt:[800,4000]}],ariaLabel:'ארנונה לפי שטח הנכס, ישר y=5x'},
      mathModel:{standard:{A:-5,B:1,C:0},expected:{m:5,b:0,xIntercept:0},probes:[{point:[200,1000],onLine:true},{point:[400,2000],onLine:true},{point:[700,3500],onLine:true},{point:[300,1500],onLine:true}]}
    }
  ]
};
