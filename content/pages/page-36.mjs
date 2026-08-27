export const page={
  page:36,
  chapter:11,
  kicker:'פרק 11 · מציאת משוואה של ישר',
  title:'מהנתונים למשוואת הישר',
  subtitle:'שאלות מקור אמיתיות · מהישיר אל הפתוח',
  rule:'כדי לכתוב משוואת ישר בצורה `y=mx+b`, מזהים את השיפוע `m` ואת החיתוך עם ציר `y`, כלומר `b`. אם נתונה הנקודה `(0,b)`, הערך השני שלה הוא בדיוק `b`.',
  sourceRefs:[
    'drive:1h6LtsAiSwIIcMDR8H2DESdSbvoMWS9E2 — חוברת פונקציה קווית, 144 עמודים',
    'razpages:עמוד-449.html',
    'drive:1fYhj-oDelvke3vAn1PcrH1XlEzrqdzBY — פונקציה5.pdf'
  ],
  questions:[
    {
      id:'Q01-P36-Q1',family:'Q01,E01',level:2,responseSpace:'equation',
      stem:'נתון `m=2` ו־`b=-4`. כתבו ייצוג אלגברי של הפונקציה הקווית.',
      answerLabel:'`y=`',
      sourceRef:'drive:1h6LtsAiSwIIcMDR8H2DESdSbvoMWS9E2 — שאלה מקורית: m=2, b=-4, כתבו ייצוג אלגברי',
      adaptation:'ניקוי כתיב וסימון מתמטי בלבד',
      mathModel:{standard:{A:-2,B:1,C:-4},expected:{m:2,b:-4,xIntercept:2},probes:[{point:[0,-4],onLine:true},{point:[2,0],onLine:true}]}
    },
    {
      id:'Q01-P36-Q2',family:'Q01,E01,E03',level:3,responseSpace:'mixed',
      stem:'כתבו ייצוג אלגברי לפונקציה שהשיפוע שלה הוא `15`, ונקודת החיתוך שלה עם ציר `y` היא `(0,10)`.',
      subparts:[
        {label:'א.',text:'מה הערך של `m`?',responseSpace:'short'},
        {label:'ב.',text:'מה הערך של `b`?',responseSpace:'short'},
        {label:'ג.',text:'כתבו את משוואת הישר:',responseSpace:'equation'}
      ],
      sourceRef:'razpages:עמוד-449.html — התרגיל: שיפוע 15 וחיתוך עם ציר y בנקודה (0,10)',
      adaptation:'אחידות ניסוח וכתיב מתמטי בלבד',
      mathModel:{standard:{A:-15,B:1,C:10},expected:{m:15,b:10,xIntercept:[-2,3]},probes:[{point:[0,10],onLine:true},{point:[-1,-5],onLine:true}]}
    },
    {
      id:'Q02-P36-Q3',family:'Q02,E03',level:4,responseSpace:'lines-2',
      stem:'נתון `C(0,-2)`, ושיפוע הישר `CD` הוא `2`. כתבו את משוואת הישר.',
      sourceRef:'drive:1fYhj-oDelvke3vAn1PcrH1XlEzrqdzBY — פונקציה5.pdf, שאלה 3',
      adaptation:'שחזור סימני הסוגריים וכיוון הכתיבה בלבד; הנתונים נשמרו',
      mathModel:{standard:{A:-2,B:1,C:-2},expected:{m:2,b:-2,xIntercept:1},probes:[{point:[0,-2],onLine:true},{point:[1,0],onLine:true}]}
    },
    {
      id:'Q03-P36-Q4',family:'Q03,E03',level:5,responseSpace:'full-work',
      stem:'בפונקציה `y=-4x+8` חשבו תחילה את ערך `y` כאשר `x=0`. אחר כך כתבו דוגמה לפונקציה קווית עולה שעוברת דרך אותה נקודה.',
      sourceRef:'drive:1h6LtsAiSwIIcMDR8H2DESdSbvoMWS9E2 — שאלה מקורית: דוגמה לפונקציה קווית עולה העוברת בנקודת החיתוך של y=-4x+8 עם ציר y',
      adaptation:'הניסוח מבהיר את שלב מציאת החיתוך לפני כתיבת הפונקציה; המהות המתמטית והנתונים נשמרו'
    }
  ]
};
