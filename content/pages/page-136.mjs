export const page={
  page:136,
  chapter:30,
  kicker:'ייצוג תופעות · מע״מ',
  title:'מחיר לפני ואחרי מע״מ',
  subtitle:'קריאת גרף · y=1.2x · אחוז שינוי',
  rule:'הגרף עובר בראשית ומציג מחיר כולל שהוא פי `1.2` מן המחיר לפני מע״מ. לכן תוספת המע״מ היא `20\%`.',
  sourceRefs:['razpages:עמוד-530.html'],
  questions:[
    {
      id:'RZ530-Q1-P136-Q1',family:'W01,Q03,Q05',level:6,responseSpace:'mixed',
      stem:'הגרף מתאר את המחיר לצרכן, כולל מע״מ, לפי המחיר לפני המע״מ.',
      sourceRef:'razpages:עמוד-530.html — שאלה 1',
      adaptation:'שלושת סעיפי המקור נשמרו והישר שוחזר לפי הגרף כ-y=1.2x.',
      graph:{xMin:0,xMax:20,yMin:0,yMax:25,xTick:2,yTick:5,xLabel:'מחיר לפני מע״מ (₪)',yLabel:'מחיר כולל מע״מ (₪)',lines:[{through:[[0,0],[20,24]],label:'y=1.2x',labelAt:[16,19.2]}],ariaLabel:'מחיר כולל מעמ y=1.2x'},
      subparts:[
        {text:'1. כמה שקלים משלם הצרכן כאשר המחיר לפני מע״מ הוא `10` ₪?',responseSpace:'lines-3',level:6},
        {text:'2. מהו המחיר לפני מע״מ כאשר הצרכן משלם `18` ₪?',responseSpace:'lines-3',level:6},
        {text:'3. חשבו את אחוז המע״מ: בכמה אחוזים המע״מ מייקר את המחיר לצרכן?',responseSpace:'lines-4',level:6}
      ],
      mathModel:{standard:{A:-1.2,B:1,C:0},expected:{m:1.2,b:0,xIntercept:0},probes:[{point:[10,12],onLine:true},{point:[15,18],onLine:true},{point:[20,24],onLine:true}]}
    }
  ]
};
