export const page={
  page:100,
  chapter:30,
  kicker:'ייצוג תופעות · קצב שינוי',
  title:'חבית מים — מילוי, המתנה והוצאה',
  subtitle:'טבלת ערכים · קטעים בגרף · זמני תהליך',
  rule:'בקטע עולה כמות המים גדלה, בקטע אופקי היא קבועה, ובקטע יורד היא קטנה. את קצב השינוי קוראים מן השיפוע של כל קטע.',
  sourceRefs:['razpages:עמוד-463.html'],
  questions:[
    {
      id:'RZ463-Q1A-P100-Q1',family:'W01,Q03',level:6,responseSpace:'mixed',
      stem:'ממלאים חבית, משאירים את הכמות קבועה לזמן מה, ולאחר מכן מוציאים חלק מהמים. השלימו את הטבלה וענו על הסעיפים.',
      sourceRef:'razpages:עמוד-463.html — שאלה 1, חלק ראשון: גרף O-M-N-K, טבלה, מילוי והוצאת מים',
      adaptation:'שאלת המקור פוצלה לשני עמודי A4; הגרף והטבלה נשמרו בדיוק.',
      graph:{xMin:0,xMax:9.5,yMin:0,yMax:225,xTick:1,yTick:25,xLabel:'שעות',yLabel:'כמות המים (ליטר)',polyline:[[0,0],[3.5,175],[6,175],[7.5,25]],points:[{x:0,y:0,label:'O'},{x:3.5,y:175,label:'M'},{x:6,y:175,label:'N'},{x:7.5,y:25,label:'K'}],showCoordinates:false,ariaLabel:'חבית: מילוי עד 175 ליטר בשעה 3.5, כמות קבועה עד שעה 6, והוצאה עד 25 ליטר בשעה 7.5'},
      table:{ariaLabel:'טבלת זמן וכמות מים',rows:[['שעות x','כמות מים y'],[0.5,{answer:true}],[1,{answer:true}],[1.5,{answer:true}],[2,{answer:true}],[2.5,{answer:true}],[3,{answer:true}],[3.5,{answer:true}],[5,{answer:true}],[6,{answer:true}],[6.5,{answer:true}],[7,{answer:true}]]},
      subparts:[
        {text:'ב. איזה חלק מהגרף מתאר את מילוי החבית, ובאילו שעות זה קרה?',responseSpace:'lines-2',level:6},
        {text:'ג. איזה חלק מהגרף מתאר את הוצאת המים, ובאילו שעות זה קרה?',responseSpace:'lines-2',level:6}
      ]
    }
  ]
};
