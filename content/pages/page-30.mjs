export const page={
  page:30,
  chapter:9,
  kicker:'פרק 9 · נקודה על ישר וערכי פונקציה',
  title:'האם הנקודה ממוקמת על הישר?',
  subtitle:'בדיקה בהצבה → מסיחים → כמה נקודות → שבר · רמות 2–5',
  rule:'נקודה `(a,b)` נמצאת על גרף הפונקציה אם ורק אם הצבת `x=a` במשוואה נותנת `y=b`. כדי לנמק, מציגים את ההצבה ומשווים בין הערך שהתקבל לבין שיעור ה־`y` של הנקודה.',
  sourceRefs:['razpages:עמוד-413.html','razpages:עמוד-414.html','razpages:עמוד-415.html','data/point-values-family-map.md'],
  questions:[
    {
      id:'V05-P30-Q1',family:'V05',level:2,responseSpace:'lines-2',
      stem:'נתונה `y=2x-1`. האם הנקודה `(2,3)` ממוקמת על הישר? הציגו הצבה קצרה.',
      answerLabel:'הצבה ומסקנה:',
      mathModel:{standard:{A:-2,B:1,C:-1},probes:[{point:[2,3],onLine:true}]}
    },
    {
      id:'V05-P30-Q2',family:'V05',level:3,responseSpace:'lines-2',
      stem:'נתונה `y=2x-1`. תלמיד טוען שהנקודה `(-1,-2)` ממוקמת על הישר. בדקו את הטענה ונמקו.',
      answerLabel:'בדיקה ונימוק:',
      mathModel:{standard:{A:-2,B:1,C:-1},probes:[{point:[-1,-2],onLine:false}]}
    },
    {
      id:'V06-P30-Q3',family:'V06',level:4,responseSpace:'choice-mark',
      stem:'נתונה `f(x)=7x`. סמנו את כל הנקודות שממוקמות על גרף הפונקציה.',
      choices:['`(-3,10)`','`(-1,-7)`','`(0,7)`','`(1,7)`','`(10,70)`'],
      mathModel:{standard:{A:-7,B:1,C:0},probes:[
        {point:[-3,10],onLine:false},
        {point:[-1,-7],onLine:true},
        {point:[0,7],onLine:false},
        {point:[1,7],onLine:true},
        {point:[10,70],onLine:true}
      ]}
    },
    {
      id:'V05-V08-P30-Q4',family:'V05,V08',level:5,responseSpace:'full-work',
      stem:'נתונה `y=-\\frac{1}{2}x+4`. בדקו אילו מן הנקודות `(2,3)`, `(6,1)`, `(-2,5)` ו־`(4,1)` ממוקמות על הישר. הציגו דרך שמאפשרת לבדוק את כולן ביעילות.',
      answerLabel:'הצבות ומסקנה:',
      mathModel:{standard:{A:[1,2],B:1,C:4},probes:[
        {point:[2,3],onLine:true},
        {point:[6,1],onLine:true},
        {point:[-2,5],onLine:true},
        {point:[4,1],onLine:false}
      ]}
    },
    {
      id:'V04-P30-Q5',family:'V04',level:6,responseSpace:'mixed',
      stem:'הייצוג האלגברי של פונקציה קווית הוא `y=-2x+3`.',
      subparts:[
        {label:'א.',text:'מהם שיעורי הנקודה שעל הגרף ששיעור ה־`x` שלה `4`?',responseSpace:'short',answerShape:'ordered-pair'},
        {label:'ב.',text:'מהם שיעורי הנקודה שעל הגרף ששיעור ה־`y` שלה `9`?',responseSpace:'short',answerShape:'ordered-pair'}
      ],
      sourceRef:'razpages:bank.json point-on-line f2-p014-q2 — מציאת נקודה לפי שיעור x או y נתון; מספרים שונו',
      adaptation:'מציאת נקודה בשני הכיוונים (מ-x ומ-y); מספרים שונו.'
    },
    {
      id:'V04-P30-Q6',family:'V04',level:7,responseSpace:'lines-2',
      stem:'הנקודה `(a,10)` ממוקמת על הישר `y=3x-2`. מצאו את `a`, ובדקו אם גם הנקודה `(3,8)` ממוקמת על אותו ישר. הציגו דרך.',
      answerLabel:'דרך ומסקנה:',
      sourceRef:'razpages:bank.json point-on-line — מציאת שיעור חסר ובדיקת שייכות; מספרים שונו',
      adaptation:'מציאת x מערך y ובדיקת שייכות של נקודה נוספת; מספרים שונו.'
    }
  ]
};
