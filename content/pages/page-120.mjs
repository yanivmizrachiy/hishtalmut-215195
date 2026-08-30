export const page={
  page:120,
  chapter:30,
  kicker:'ייצוג תופעות · ארנונה',
  title:'ארנונה לפי שטח הנכס',
  subtitle:'קריאת גרף · קשר ישר · y=5x',
  rule:'הגרף עובר בראשית ומראה תשלום של `5 ₪` לכל מטר רבוע, ולכן הקשר בין שטח הנכס `x` לבין הארנונה `y` הוא `y=5x`.',
  sourceRefs:['razpages:עמוד-518.html'],
  questions:[
    {
      id:'RZ518-Q1A-P120-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'הגרף מתאר את סכום הארנונה לפי שטח הנכס. ענו על שאלות המקור.',
      sourceRef:'razpages:עמוד-518.html — שאלה 1, סעיפים א–ד',
      adaptation:'הישר שוחזר לפי גרף המקור כ-y=5x וכל ארבעת נתוני הסעיפים נשמרו.',
      graph:{xMin:0,xMax:1000,yMin:0,yMax:5000,xTick:100,yTick:500,xLabel:'שטח הנכס (מ״ר)',yLabel:'ארנונה (₪)',lines:[{through:[[0,0],[900,4500]],label:'y=5x',labelAt:[800,4000]}],ariaLabel:'ארנונה לפי שטח הנכס, ישר y=5x'},
      subparts:[
        {text:'א. משפחת ישראלי גרה בדירה ששטחה `100` מ״ר. כמה הם משלמים ארנונה?',responseSpace:'lines-2',level:5},
        {text:'ב. משפחת פרץ גרה בבית ששטחו `200` מ״ר. כמה הם משלמים ארנונה?',responseSpace:'lines-2',level:5},
        {text:'ג. מר כהן משלם `2500` ₪ ארנונה עבור חנות. מהו שטח החנות?',responseSpace:'lines-2',level:5},
        {text:'ד. מפעל אלקטרוניקה משלם `4500` ₪ ארנונה. מהו שטח המפעל?',responseSpace:'lines-2',level:5}
      ],
      mathModel:{standard:{A:-5,B:1,C:0},expected:{m:5,b:0,xIntercept:0},probes:[{point:[100,500],onLine:true},{point:[500,2500],onLine:true},{point:[900,4500],onLine:true}]}
    }
  ]
};
