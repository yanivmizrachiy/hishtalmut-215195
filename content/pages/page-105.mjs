export const page={
  page:105,
  chapter:30,
  kicker:'ייצוג תופעות · תשלום סלולרי',
  title:'תוכנית סלולר — טבלה ונקודות על הגרף',
  subtitle:'השלמת ערכים · פונקציה קטעית · קריאת שיעורים',
  rule:'עד `100` דקות מתקבל אותו תשלום. לאחר מכן כל `50` דקות נוספות מעלות את התשלום ב־`25 ₪`, כלומר קצב השינוי הוא `0.5` שקל לדקה.',
  sourceRefs:['razpages:עמוד-465.html'],
  questions:[
    {
      id:'RZ465-Q1B-P105-Q1',family:'W01,Q03',level:5,responseSpace:'mixed',
      stem:'השלימו את טבלת המקור והמשיכו לענות לפי אותו גרף.',
      sourceRef:'razpages:עמוד-465.html — שאלה 1, סעיפים ד–ו והטבלה',
      adaptation:'כל שורות הטבלה ושני הסעיפים האחרונים נשמרו. השורות שבהן נתון התשלום בלבד נשארו כשאלות למציאת מספר הדקות.',
      graph:{xMin:0,xMax:450,yMin:0,yMax:225,xTick:50,yTick:25,xLabel:'דקות שיחה',yLabel:'תשלום (₪)',polyline:[[0,50],[100,50],[450,225]],ariaLabel:'תשלום 50 שקלים עד 100 דקות, ואחר כך עליה לינארית עד 225 שקלים ב-450 דקות'},
      table:{ariaLabel:'טבלת דקות שיחה ותשלום',rows:[['דקות שיחה x','תשלום y'],[50,{answer:true}],[100,{answer:true}],[150,{answer:true}],[200,{answer:true}],[250,{answer:true}],[300,{answer:true}],[{answer:true},175],[{answer:true},200],[450,{answer:true}]]},
      subparts:[
        {text:'ה. האם ניתן לקבוע מן התוכנית מהו התשלום עבור דקת שיחה אחת בלבד? הסבירו.',responseSpace:'explanation',level:5},
        {text:'ו. סמנו על הגרף והשלימו את השיעורים: `A(150,___)`, `B(___,125)`, `C(200,___)`, `D(___,200)`.',responseSpace:'lines-4',level:5}
      ]
    }
  ]
};
