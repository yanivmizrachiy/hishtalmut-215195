export const page={
  page:29,
  chapter:9,
  kicker:'פרק 9 · נקודה על ישר וערכי פונקציה',
  title:'נתון y — מוצאים את x',
  subtitle:'פתרון הפוך → השלמת נקודה → שברים וביטויים מורכבים · רמות 2–5',
  rule:'כאשר נתון ערך `y`, מציבים אותו במשוואת הישר ופותרים משוואה כדי למצוא את `x`. אם מתקבל `x=a`, הנקודה `(a,y)` נמצאת על הגרף.',
  sourceRefs:['razpages:עמוד-413.html','razpages:עמוד-414.html','razpages:עמוד-415.html','razpages:עמוד-416.html','data/point-values-family-map.md'],
  questions:[
    {
      id:'V02-P29-Q1',family:'V02',level:2,responseSpace:'mixed',
      stem:'נתונה `f(x)=2x-1`. מצאו את ערכי `x` המתאימים.',
      sourceRef:'razpages:עמוד-413.html',
      subparts:[
        {label:'א.',text:'`f(x)=7`',responseSpace:'equation'},
        {label:'ב.',text:'`f(x)=-3`',responseSpace:'equation'},
        {label:'ג.',text:'`f(x)=0`',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:-2,B:1,C:-1},probes:[
        {y:7,expectedX:4},{y:-3,expectedX:-1},{y:0,expectedX:[1,2]}
      ]}
    },
    {
      id:'V04-P29-Q2',family:'V04',level:3,responseSpace:'mixed',
      stem:'נתונה `y=-3x+5`. השלימו את שיעור `x` כך שכל נקודה תהיה על הישר.',
      sourceRef:'razpages:עמוד-414.html',
      subparts:[
        {label:'א.',text:'`(\_\_,8)`',responseSpace:'equation'},
        {label:'ב.',text:'`(\_\_,-1)`',responseSpace:'equation'},
        {label:'ג.',text:'`(\_\_,5)`',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:3,B:1,C:5},probes:[
        {y:8,expectedX:-1},{y:-1,expectedX:2},{y:5,expectedX:0}
      ]}
    },
    {
      id:'V02-V08-P29-Q3',family:'V02,V08',level:4,responseSpace:'mixed',
      stem:'נתונה `f(x)=6-2x`. מצאו `x` עבור כל ערך פונקציה.',
      sourceRef:'razpages:עמוד-416.html',
      subparts:[
        {label:'א.',text:'`f(x)=0`',responseSpace:'equation'},
        {label:'ב.',text:'`f(x)=-2`',responseSpace:'equation'},
        {label:'ג.',text:'`f(x)=8`',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:2,B:1,C:6},probes:[
        {y:0,expectedX:3},{y:-2,expectedX:4},{y:8,expectedX:-1}
      ]}
    },
    {
      id:'V04-V08-P29-Q4',family:'V04,V08',level:5,responseSpace:'full-work',
      stem:'נתונה `y=-\\frac{x+1}{3}`. מצאו את `x` כאשר `y=-7`, ואז כתבו את הנקודה המלאה שעל הגרף.',
      answerLabel:'פתרון והנקודה:',
      sourceRef:'razpages:עמוד-415.html',
      mathModel:{standard:{A:[1,3],B:1,C:[-1,3]},probes:[
        {y:-7,expectedX:20},{point:[20,-7],onLine:true}
      ]}
    }
  ]
};
