export const page={
  page:31,
  chapter:9,
  kicker:'פרק 9 · נקודה על ישר וערכי פונקציה',
  title:'נקודות מסומנות על הגרף',
  subtitle:'זיהוי חזותי → קריאת שיעורים → אימות אלגברי · רמות 2–5',
  rule:'הגרף והמשוואה מתארים את אותו אוסף נקודות. אפשר לזהות נקודה על הישר מן השרטוט, ואפשר לאמת את אותה מסקנה בדיוק באמצעות הצבה במשוואה.',
  sourceRefs:['razpages:עמוד-413.html','razpages:עמוד-414.html','data/point-values-family-map.md'],
  mathModel:{standard:{A:1,B:1,C:-1}},
  graph:{
    xMin:-4,xMax:4,yMin:-4,yMax:4,equalUnitScale:true,showCoordinates:false,
    ariaLabel:'ישר יורד וארבע נקודות מסומנות A B C D',
    lines:[{through:[[-4,3],[3,-4]]}],
    points:[
      {x:0,y:-1,label:'A'},
      {x:2,y:-2,label:'B'},
      {x:-2,y:2,label:'C'},
      {x:1,y:-1,label:'D'}
    ]
  },
  questions:[
    {
      id:'V07-P31-Q1',family:'V07',level:2,responseSpace:'choice-mark',
      stem:'איזו מן הנקודות המסומנות נמצאת על הישר? סמנו לפי הגרף.',
      choices:['A','B','C','D'],
      mathProbes:[
        {point:[0,-1],onLine:true},
        {point:[2,-2],onLine:false},
        {point:[-2,2],onLine:false},
        {point:[1,-1],onLine:false}
      ]
    },
    {
      id:'V07-V05-P31-Q2',family:'V07,V05',level:3,responseSpace:'lines-2',
      stem:'קראו מן הצירים את שיעורי הנקודה `A`, ואז אמתו בהצבה שהיא מקיימת את `y=-x-1`.',
      answerLabel:'שיעורים והצבה:',
      mathProbes:[{point:[0,-1],onLine:true}]
    },
    {
      id:'V07-V05-P31-Q3',family:'V07,V05',level:4,responseSpace:'lines-2',
      stem:'בחרו אחת מן הנקודות `B`, `C` או `D`. כתבו את שיעוריה והסבירו באמצעות הצבה מדוע היא אינה נמצאת על הישר.',
      answerLabel:'נקודה, הצבה ומסקנה:',
      mathProbes:[
        {point:[2,-2],onLine:false},
        {point:[-2,2],onLine:false},
        {point:[1,-1],onLine:false}
      ]
    },
    {
      id:'V05-P31-Q4',family:'V05',level:5,responseSpace:'lines-2',
      stem:'בלי להוסיף נקודה לגרף: האם `E=(-3,2)` נמצאת על אותו ישר? קבעו באמצעות המשוואה בלבד.',
      answerLabel:'בדיקה ומסקנה:',
      mathProbes:[{point:[-3,2],onLine:true}]
    }
  ]
};
