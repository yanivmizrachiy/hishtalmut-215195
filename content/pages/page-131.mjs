export const page={
  page:131,
  chapter:30,
  kicker:'ייצוג תופעות · חיסכון',
  title:'תוכנית חיסכון — קריאת ערכים ובדיקת נקודות',
  subtitle:'מציאת זמן מסכום · בדיקת נקודות על ישר',
  rule:'בפונקציה `y=750x+1000`, למציאת הזמן מסכום נתון פותרים `750x+1000=y`.',
  sourceRefs:['razpages:עמוד-524.html'],
  questions:[
    {
      id:'RZ524-Q1B-P131-Q1',family:'W01,Q03,Q05',level:6,responseSpace:'mixed',
      stem:'המשיכו לענות לפי גרף תוכנית החיסכון.',
      sourceRef:'razpages:עמוד-524.html — שאלה 1, סעיפים ה–ח',
      adaptation:'כל ארבעת סעיפי המקור וכל ארבע הנקודות לבדיקה נשמרו בדיוק.',
      graph:{xMin:-1,xMax:9,yMin:0,yMax:9000,xTick:1,yTick:1000,xLabel:'שנים',yLabel:'סכום (₪)',lines:[{through:[[0,1000],[8,7000]],label:'y=750x+1000',labelAt:[6.5,5875]}],ariaLabel:'תוכנית חיסכון y=750x+1000'},
      subparts:[
        {text:'ה. כעבור כמה שנים נצבר בתוכנית סכום של `7000` ₪? הציגו דרך.',responseSpace:'lines-5',level:6},
        {text:'ו. מהו הסכום שנצבר בתוכנית כעבור `6` שנים?',responseSpace:'lines-5',level:6},
        {text:'ז. כעבור כמה שנים נצבר בתוכנית סכום של `2500` ₪?',responseSpace:'lines-5',level:6},
        {text:'ח. קבעו עבור כל נקודה אם היא נמצאת על הגרף ונמקו: `(1,4000)`, `(4,4000)`, `(8,7000)`, `(2,3000)`.',responseSpace:'explanation',level:6}
      ],
      mathModel:{standard:{A:-750,B:1,C:1000},expected:{m:750,b:1000,xIntercept:-1.3333333333},probes:[{point:[1,4000],onLine:false},{point:[4,4000],onLine:true},{point:[8,7000],onLine:true},{point:[2,3000],onLine:false}]}
    }
  ]
};
