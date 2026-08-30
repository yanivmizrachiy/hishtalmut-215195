export const page={
  page:130,
  chapter:30,
  kicker:'ייצוג תופעות · חיסכון',
  title:'תוכנית חיסכון — סכום התחלתי וקצב שנתי',
  subtitle:'קריאת גרף · y=750x+1000',
  rule:'בתוכנית הופקדו בתחילה `1000` ₪, ובכל שנה הסכום גדל ב־`750` ₪. לכן לאחר `x` שנים הסכום הוא `y=750x+1000`.',
  sourceRefs:['razpages:עמוד-524.html'],
  questions:[
    {
      id:'RZ524-Q1A-P130-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'הגרף מתאר את הסכום שנצבר בתוכנית חיסכון לפי מספר השנים. ענו על סעיפי המקור.',
      sourceRef:'razpages:עמוד-524.html — שאלה 1, סעיפים א–ד',
      adaptation:'הגרף שוחזר מן המקור כ-y=750x+1000; משמעות הצירים, הסכום ההתחלתי ושאלת ארבע השנים נשמרו.',
      graph:{xMin:-1,xMax:9,yMin:0,yMax:9000,xTick:1,yTick:1000,xLabel:'שנים',yLabel:'סכום (₪)',lines:[{through:[[0,1000],[8,7000]],label:'y=750x+1000',labelAt:[6.5,5875]}],ariaLabel:'תוכנית חיסכון y=750x+1000'},
      subparts:[
        {text:'א. מה מייצגים המספרים שעל ציר `x`?',responseSpace:'explanation',level:5},
        {text:'ב. מה מייצגים המספרים שעל ציר `y`?',responseSpace:'explanation',level:5},
        {text:'ג. מהו הסכום ההתחלתי שהופקד בתוכנית החיסכון?',responseSpace:'lines-4',level:5},
        {text:'ד. מהו הסכום שנצבר בתוכנית כעבור `4` שנים? הציגו דרך.',responseSpace:'lines-6',level:5}
      ],
      mathModel:{standard:{A:-750,B:1,C:1000},expected:{m:750,b:1000,xIntercept:-1.3333333333},probes:[{point:[0,1000],onLine:true},{point:[4,4000],onLine:true},{point:[8,7000],onLine:true}]}
    }
  ]
};
