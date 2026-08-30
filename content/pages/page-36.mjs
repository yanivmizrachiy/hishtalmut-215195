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
        {text:'מה הערך של `m`?',responseSpace:'short'},
        {text:'מה הערך של `b`?',responseSpace:'short'},
        {text:'כתבו את משוואת הישר:',responseSpace:'equation'}
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
      id:'Q03-P36-Q4',family:'Q03,E03',level:5,responseSpace:'mixed',
      stem:'בפונקציה `y=-4x+8` חשבו תחילה את ערך `y` כאשר `x=0`. כתבו את נקודת החיתוך עם ציר `y` כזוג סדור. אחר כך כתבו דוגמה לפונקציה קווית עולה שעוברת דרך אותה נקודה.',
      subparts:[
        {text:'חשבו את ערך `y` כאשר `x=0`. הראו דרך.',responseSpace:'lines-2'}
      ],
      sourceRef:'drive:1h6LtsAiSwIIcMDR8H2DESdSbvoMWS9E2 — שאלה מקורית: דוגמה לפונקציה קווית עולה העוברת בנקודת החיתוך של y=-4x+8 עם ציר y',
      adaptation:'הניסוח מבהיר את שלב מציאת החיתוך לפני כתיבת הפונקציה; המהות המתמטית והנתונים נשמרו'
    },
    {
      id:'Q06-P36-Q5',family:'Q06,E03',level:5,responseSpace:'full-work',
      stem:'מצאו את משוואת הישר ששיפועו `4` ועובר בנקודה `(-1,3)`. הציגו דרך.',
      sourceRef:'razpages:bank.json equation-slope-point f4-p078-q99ג — משוואת ישר לפי שיפוע ונקודה; מספרים שונו',
      adaptation:'תרגול הצבת שיפוע ונקודה למציאת b; מספרים שונו.',
      mathModel:{standard:{A:-4,B:1,C:7},expected:{m:4,b:7,xIntercept:[-7,4]},probes:[{point:[-1,3],onLine:true},{point:[0,7],onLine:true}]}
    },
    {
      id:'Q06-P36-Q6',family:'Q06,E03',level:6,responseSpace:'full-work',
      stem:'מהו הייצוג האלגברי של הפונקציה הקווית ששיפוע הגרף שלה הוא `(-2)`, והגרף עובר דרך הנקודה `(1,5)`?',
      sourceRef:'razpages:bank.json equation-slope-point sum-p047-q1 — ייצוג אלגברי לפי שיפוע ונקודה; מספרים שונו',
      adaptation:'ניסוח המקור נשמר; המספרים שונו.',
      mathModel:{standard:{A:2,B:1,C:7},expected:{m:-2,b:7,xIntercept:[7,2]},probes:[{point:[1,5],onLine:true},{point:[0,7],onLine:true}]}
    },
    {
      id:'Q07-P36-Q7',family:'Q07,E03',level:7,responseSpace:'full-work',
      stem:'נתונה פונקציה קווית המקיימת `f(0)=1` ו־`f(4)=-3`. מצאו את הנקודות שעליהן עובר הגרף, חשבו את השיפוע, וכתבו את משוואת הישר.',
      sourceRefs:[
        'razpages:bank.json slope-two-points sum-p046-q1 — שיפוע ומשוואה לפי שני ערכי פונקציה; מספרים שונו',
        'drive:1ZPTufhySVjryT_smWbiWKTkWtgYRHrES — שיפוע עפ 2 נקודות.pdf, שאלה 7: f(0)=1, f(4)=-3, נקודות ושיפוע',
        'drive:1_bsLq2zQTvCc-a3dkJ48J7HeFB_i_fAz — שיפוע עפ 2 נקודות.docx, שאלה 7: f(0)=1, f(4)=-3, נקודות ושיפוע'
      ],
      adaptation:'שאלה רב־שלבית: מערכי פונקציה אל נקודות, שיפוע ומשוואה; נתוני Drive נשמרו בדיוק והתווספה גם כתיבת משוואת הישר.',
      mathModel:{standard:{A:1,B:1,C:1},expected:{m:-1,b:1,xIntercept:1},probes:[{point:[0,1],onLine:true},{point:[4,-3],onLine:true}]}
    }
  ]
};
