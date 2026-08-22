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
      stem:'נתונה `y=2x-1`. האם הנקודה `(2,3)` נמצאת על הישר? הציגו הצבה קצרה.',
      answerLabel:'הצבה ומסקנה:',
      mathModel:{standard:{A:-2,B:1,C:-1},probes:[{point:[2,3],onLine:true}]}
    },
    {
      id:'V05-P30-Q2',family:'V05',level:3,responseSpace:'lines-2',
      stem:'נתונה `y=2x-1`. תלמיד טוען שהנקודה `(-1,-2)` נמצאת על הישר. בדקו את הטענה ונמקו.',
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
      stem:'נתונה `y=-\\frac{1}{2}x+4`. בדקו אילו מן הנקודות `(2,3)`, `(6,1)`, `(-2,5)` ו־`(4,1)` נמצאות על הישר. הציגו דרך שמאפשרת לבדוק את כולן ביעילות.',
      answerLabel:'הצבות ומסקנה:',
      mathModel:{standard:{A:[1,2],B:1,C:4},probes:[
        {point:[2,3],onLine:true},
        {point:[6,1],onLine:true},
        {point:[-2,5],onLine:true},
        {point:[4,1],onLine:false}
      ]}
    }
  ]
};
