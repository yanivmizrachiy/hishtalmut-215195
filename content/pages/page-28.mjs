export const page={
  page:28,
  chapter:9,
  kicker:'פרק 9 · נקודה על ישר וערכי פונקציה',
  title:'מציבים x — ומוצאים את y',
  subtitle:'ערך פונקציה → השלמת נקודה → הקשר מציאותי → שליליים ושברים · רמות 1–7',
  rule:'כדי למצוא את ערך הפונקציה עבור `x=a`, מציבים `a` במקום `x` במשוואה ומחשבים את `y`. אם מתקבל `y=b`, הנקודה `(a,b)` נמצאת על גרף הפונקציה.',
  sourceRefs:['razpages:עמוד-413.html','razpages:עמוד-414.html','razpages:עמוד-415.html','razpages:עמוד-416.html','data/point-values-family-map.md','jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-21-aquarium'],
  questions:[
    {
      id:'V01-P28-Q1',family:'V01',level:1,responseSpace:'mixed',
      stem:'נתונה `f(x)=2x-1`. חשבו את ערכי הפונקציה.',
      subparts:[
        {label:'א.',text:'`f(2)=`',responseSpace:'short'},
        {label:'ב.',text:'`f(-1)=`',responseSpace:'short'},
        {label:'ג.',text:'`f(5)=`',responseSpace:'short'}
      ],
      mathModel:{standard:{A:-2,B:1,C:-1},probes:[{x:2,expectedY:3},{x:-1,expectedY:-3},{x:5,expectedY:9}]},
      sourceRefs:['data/point-values-family-map.md#V01','razpages:עמוד-413.html','razpages:עמוד-416.html'],
      adaptation:'יישום ישיר של משפחת V01: הצבת x וחישוב f(a).'
    },
    {
      id:'V03-P28-Q2',family:'V03',level:2,responseSpace:'mixed',
      stem:'נתונה הפונקציה `y=-3x+5`. השלימו את שיעור `y` כך שכל נקודה תהיה על הישר.',
      subparts:[
        {label:'א.',text:'`(0,\;\_\_)`',responseSpace:'short'},
        {label:'ב.',text:'`(2,\;\_\_)`',responseSpace:'short'},
        {label:'ג.',text:'`(-1,\;\_\_)`',responseSpace:'short'}
      ],
      mathModel:{standard:{A:3,B:1,C:5},probes:[{x:0,expectedY:5},{x:2,expectedY:-1},{x:-1,expectedY:8}]},
      sourceRefs:['data/point-values-family-map.md#V03','razpages:עמוד-414.html','razpages:עמוד-415.html'],
      adaptation:'יישום משפחת V03: השלמת שיעור y בנקודה כך שתהיה על הישר.'
    },
    {
      id:'V01-V08-P28-Q3',family:'V01,V08',level:3,responseSpace:'mixed',
      stem:'נתונה `f(x)=6-2x`. חשבו. שימו לב להצבה של שבר.',
      subparts:[
        {label:'א.',text:'`f(0)=`',responseSpace:'short'},
        {label:'ב.',text:'`f(7)=`',responseSpace:'short'},
        {label:'ג.',text:'`f(\\frac{1}{2})=`',responseSpace:'short'}
      ],
      mathModel:{standard:{A:2,B:1,C:6},probes:[{x:0,expectedY:6},{x:7,expectedY:-8},{x:[1,2],expectedY:5}]},
      sourceRefs:['data/point-values-family-map.md#V01','data/point-values-family-map.md#V08','razpages:עמוד-416.html'],
      adaptation:'אותה הצבת x עם מספר שלילי ושבר כשלב קושי מובחן של V08.'
    },
    {
      id:'V03-V08-P28-Q4',family:'V03,V08',level:4,responseSpace:'mixed',
      stem:'נתונה `y=\\frac{2}{3}x+3`. השלימו את הנקודות והציגו חישוב קצר לכל הצבה.',
      subparts:[
        {label:'א.',text:'`(6,\;\_\_)`',responseSpace:'equation'},
        {label:'ב.',text:'`(-3,\;\_\_)`',responseSpace:'equation'},
        {label:'ג.',text:'`(\\frac{3}{2},\;\_\_)`',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:[-2,3],B:1,C:3},probes:[{x:6,expectedY:7},{x:-3,expectedY:1},{x:[3,2],expectedY:4}]},
      sourceRefs:['data/point-values-family-map.md#V03','data/point-values-family-map.md#V08','razpages:עמוד-415.html','razpages:עמוד-416.html'],
      adaptation:'השלמת y במשוואה בעלת שיפוע שברי, כולל הצבה שברית.'
    },
    {
      id:'J2-AQUA-P28-Q5',family:'V01,V08',level:5,responseSpace:'mixed',
      stem:'אקווריום היה מלא ב־24 מ״ק מים. רוקנו את המים בקצב קבוע של 2 מ״ק לדקה. הגרף מתאר את כמות המים באקווריום בהתאם לזמן שחלף.',
      graph:{
        xMin:0,xMax:12,yMin:0,yMax:24,xTick:1,yTick:4,
        showZeroOnX:true,showZeroOnY:true,showCoordinates:false,
        xLabel:'זמן (דקות)',yLabel:'כמות מים (מ״ק)',
        ariaLabel:'גרף קווי יורד של כמות המים באקווריום מ-24 מ״ק עד 0 בקצב 2 מ״ק לדקה',
        lines:[{through:[[0,24],[12,0]]}]
      },
      subparts:[
        {label:'א.',text:'מה הייתה כמות המים באקווריום כעבור דקה אחת?',responseSpace:'short',suffix:'מ״ק.'},
        {label:'ב.',text:'מה הייתה כמות המים באקווריום כעבור חצי דקה?',responseSpace:'short',suffix:'מ״ק.'},
        {label:'ג.',text:'מה הייתה כמות המים באקווריום כעבור רבע דקה?',responseSpace:'short',suffix:'מ״ק.'},
        {label:'ד.',text:'מה הייתה כמות המים באקווריום כעבור שבע וחצי דקות?',responseSpace:'short',suffix:'מ״ק.'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 21, question 6 — aquarium emptied at 2 cubic meters per minute; all four source time-value questions',
      adaptation:'נשמרו קצב הריקון, הכמות ההתחלתית המשתקפת בגרף וכל ארבעת סעיפי המקור; הגרף נבנה מחדש באותה פונקציה קווית בשפה הגרפית האחידה של הספר.'
    },
    {
      id:'V04-P28-Q7',family:'V04',level:7,responseSpace:'lines-2',
      stem:'הנקודה `(a,7)` ממוקמת על הישר `y=2x-1`. מצאו את `a`, ובדקו אם גם הנקודה `(5,9)` נמצאת על אותו ישר. הציגו דרך.',
      answerLabel:'דרך ומסקנה:',
      sourceRef:'razpages:bank.json point-on-line f2-p014-q2 — מציאת שיעור חסר ובדיקת שייכות; מספרים שונו',
      adaptation:'שאלה רב־שלבית: מציאת x מערך y ובדיקת שייכות של נקודה נוספת; מספרים שונו.'
    }
  ]
};
