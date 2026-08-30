export const page={
  page:29,
  chapter:9,
  kicker:'פרק 9 · נקודה על ישר וערכי פונקציה',
  title:'נקודות על פונקציה קווית',
  subtitle:'פתרון הפוך → השלמת נקודה → שברים וביטויים מורכבים · רמות 2–5',
  rule:'כאשר נתון ערך `y`, מציבים אותו במשוואת הישר ופותרים משוואה כדי למצוא את `x`. אם מתקבל `x=a`, הנקודה `(a,y)` נמצאת על הגרף.',
  sourceRefs:['razpages:עמוד-413.html','razpages:עמוד-414.html','razpages:עמוד-415.html','razpages:עמוד-416.html','data/point-values-family-map.md'],
  questions:[
    {
      id:'V02-P29-Q1',family:'V02',level:2,responseSpace:'mixed',
      stem:'נתונה `f(x)=2x-1`. מצאו את ערכי `x` המתאימים.',
      sourceRef:'razpages:עמוד-413.html',
      subparts:[
        {text:'`f(x)=7`',responseSpace:'equation'},
        {text:'`f(x)=-3`',responseSpace:'equation'},
        {text:'`f(x)=0`',responseSpace:'equation'}
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
        {text:'`(\_\_,8)`',responseSpace:'equation'},
        {text:'`(\_\_,-1)`',responseSpace:'equation'},
        {text:'`(\_\_,5)`',responseSpace:'equation'}
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
        {text:'`f(x)=0`',responseSpace:'equation'},
        {text:'`f(x)=-2`',responseSpace:'equation'},
        {text:'`f(x)=8`',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:2,B:1,C:6},probes:[
        {y:0,expectedX:3},{y:-2,expectedX:4},{y:8,expectedX:-1}
      ]}
    },
    {
      id:'V04-V08-P29-Q4',family:'V04,V08',level:5,responseSpace:'full-work',
      stem:'נתונה `y=-\\frac{x+1}{3}`. מצאו את `x` כאשר `y=-7`, ואז כתבו את הנקודה המלאה שעל הגרף.',
      sourceRef:'razpages:עמוד-415.html',
      mathModel:{standard:{A:[1,3],B:1,C:[-1,3]},probes:[
        {y:-7,expectedX:20},{point:[20,-7],onLine:true}
      ]}
    },
    {
      id:'V04-P29-Q5',family:'V04',level:5,responseSpace:'mixed',
      stem:'נתונה הפונקציה `f(x)=4x`. השלימו את שיעור ה־`x` החסר כך שכל נקודה תהיה על הגרף.',
      subparts:[
        {text:'`(\_\_,0)`',responseSpace:'short'},
        {text:'`(\_\_,4)`',responseSpace:'short'},
        {text:'`(\_\_,-16)`',responseSpace:'short'},
        {text:'`(\_\_,24)`',responseSpace:'short'}
      ],
      sourceRef:'razpages:bank.json point-on-line f2-p021-q2 — השלמת שיעור x חסר כדי שהנקודה תהיה על f(x)=4x; מספרים שונו',
      adaptation:'מבנה השלמת שיעור x מן המאגר; מספרים שונו.'
    },
    {
      id:'V04-P29-Q6',family:'V04',level:6,responseSpace:'mixed',
      stem:'נתונה הפונקציה `f(x)=3x-2`.',
      subparts:[
        {text:'הנקודה `(a,7)` על הגרף. מצאו את `a`.',responseSpace:'equation'},
        {text:'הנקודה `(b,-8)` על הגרף. מצאו את `b`.',responseSpace:'equation'}
      ],
      sourceRef:'razpages:bank.json point-on-line — מציאת שיעור x מערך y נתון; מספרים שונו',
      adaptation:'תרגול מציאת x מערכי y שונים; מספרים שונו.'
    },
    {
      id:'V04-P29-Q7',family:'V04,I05',level:7,responseSpace:'full-work',
      stem:'נתונה הפונקציה `y=-2x+6`. מצאו את `x` שעבורו הפונקציה מתאפסת (`f(x)=0`), ואת `x` שעבורו `f(x)=10`. הציגו דרך.',
      sourceRef:'razpages:bank.json point-on-line/x-intercept — מציאת x לפי ערך y כולל התאפסות; מספרים שונו',
      adaptation:'מקשר בין מציאת x מערך y לבין התאפסות הפונקציה (חיתוך עם ציר x); מספרים שונו.'
    }
  ]
};
