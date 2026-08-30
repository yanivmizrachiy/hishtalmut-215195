export const page={
  page:141,
  chapter:30,
  kicker:'ייצוג תופעות · מהירות קבועה',
  title:'בר — מרחק כפונקציה של זמן',
  subtitle:'y=20x · טבלה · קריאת שיפוע כמהירות',
  rule:'בגרף מרחק–זמן של תנועה במהירות קבועה, השיפוע הוא המהירות.',
  sourceRefs:['razpages:עמוד-526.html','razpages:עמוד-527.html'],
  questions:[
    {
      id:'RZ526-Q1-P141-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'בר יצא מנתניה לאימון רכיבה. הגרף מתאר את המרחק שלו מנתניה לפי הזמן. השלימו את הטבלה לפי הגרף.',
      sourceRef:'razpages:עמוד-526.html — שאלה 1',
      adaptation:'הגרף המקורי עובר דרך `(0,0)` ו־`(3,60)`, ולכן הוא מתאר `y=20x`. במקור הודפס בטבלה התא `x=1, y=8`, הסותר את הגרף, וגם הופיע `x=4` מחוץ לטווח הגרף. הטבלה הקנונית תוקנה לפי הגרף עצמו ולפי שאלת המהירות בעמוד המקור הבא.',
      graph:{xMin:0,xMax:3,yMin:0,yMax:60,xTick:0.5,yTick:10,xLabel:'זמן (שעות)',yLabel:'מרחק מנתניה (ק״מ)',lines:[{through:[[0,0],[3,60]],labelAt:[2.3,46]}],ariaLabel:'גרף המרחק של בר, קו ישר מן הראשית עד הנקודה שלוש שעות ושישים קילומטר'},
      table:{ariaLabel:'טבלת זמן ומרחק של בר',rows:[['זמן x','מרחק y'],[0,0],[0.5,{answer:true}],[1,{answer:true}],[1.5,{answer:true}],[2,{answer:true}],[2.5,{answer:true}],[3,{answer:true}]]},
      subparts:[
        {text:'הסבירו כיצד רואים מן הגרף שבכל שעה המרחק גדל ב־`20` ק״מ.',responseSpace:'full-work',level:5}
      ],
      mathModel:{standard:{A:-20,B:1,C:0},expected:{m:20,b:0,xIntercept:0},probes:[{point:[1,20],onLine:true},{point:[2,40],onLine:true},{point:[3,60],onLine:true}]}
    },
    {
      id:'RZ527-Q1-P141-Q2',family:'W01,Q03',level:5,responseSpace:'choice-mark',
      stem:'מה הייתה המהירות של בר בקמ״ש?',
      choices:['`50` קמ״ש','`30` קמ״ש','`20` קמ״ש','`10` קמ״ש'],
      sourceRef:'razpages:עמוד-527.html — שאלה 1',
      adaptation:'ארבע אפשרויות המקור נשמרו ללא שינוי; השאלה נשענת על הגרף המתוקן והעקבי של בר שמופיע מעליה.'
    }
  ]
};
