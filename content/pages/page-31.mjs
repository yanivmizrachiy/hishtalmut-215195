export const page={
  page:31,
  chapter:9,
  kicker:'פרק 9 · נקודה על ישר וערכי פונקציה',
  title:'איזו נקודה ממוקמת על הישר?',
  subtitle:'זיהוי חזותי → בחירת נקודות → אימות בהצבה · רמות 2–4',
  rule:'נקודה ממוקמת על ישר כאשר הסימון שלה מונח על הגרף. אם משוואת הישר ידועה, אפשר לאמת את הקביעה בהצבה: מציבים את שיעור ה־`x` ובודקים אם מתקבל שיעור ה־`y` של הנקודה.',
  sourceRefs:['razpages:עמוד-413.html','razpages:עמוד-414.html','data/point-values-family-map.md#V07'],
  questions:[
    {
      id:'V07-P31-Q1',family:'V07,P01',level:2,responseSpace:'short',
      stem:'בגרף מסומן הישר העובר דרך `A(0,-6)`. איזו נקודה נוספת מבין `P,M,Q,T` ממוקמת על הישר?',
      graph:{xMin:-6,xMax:6,yMin:-10,yMax:2,showCoordinates:true,ariaLabel:'ישר יורד העובר דרך A ו-P, ולצדו נקודות מסיחות M Q T',lines:[{through:[[0,-6],[2,-8]]}],points:[{x:0,y:-6,label:'A'},{x:2,y:-8,label:'P'},{x:3,y:-5,label:'M'},{x:-4,y:-1,label:'Q'},{x:5,y:0,label:'T'}]},
      answerLabel:'הנקודה:',
      mathModel:{standard:{A:1,B:1,C:-6},expected:{m:-1,b:-6,xIntercept:-6},probes:[{point:[0,-6],onLine:true},{point:[2,-8],onLine:true},{point:[3,-5],onLine:false},{point:[-4,-1],onLine:false},{point:[5,0],onLine:false}]}
    },
    {
      id:'V07-P31-Q2',family:'V07,V06',level:3,responseSpace:'short',
      stem:'בגרף השני מסומנות ארבע נקודות. כתבו את כל האותיות של הנקודות שממוקמות על הישר.',
      graph:{xMin:-4,xMax:4,yMin:-4,yMax:4,showCoordinates:true,ariaLabel:'ישר עולה ועליו K ו-N; הנקודות L ו-R אינן על הישר',lines:[{through:[[-1,-3],[2,3]]}],points:[{x:-1,y:-3,label:'K'},{x:0,y:0,label:'L'},{x:2,y:3,label:'N'},{x:3,y:4,label:'R'}]},
      answerLabel:'הנקודות שעל הישר:',
      mathModel:{standard:{A:2,B:-1,C:1},expected:{m:2,b:-1,xIntercept:[1,2]},probes:[{point:[-1,-3],onLine:true},{point:[0,0],onLine:false},{point:[2,3],onLine:true},{point:[3,4],onLine:false}]}
    },
    {
      id:'V07-P31-Q3',family:'V07,V05,V01,V16',level:4,responseSpace:'mixed',
      stem:'בגרף של שאלה 2 בדקו בהצבה מדוע `K` ממוקמת על הישר `y=2x-1`, ומדוע `L` אינה ממוקמת עליו. כך אפשר גם להסביר מדוע עצם הופעת נקודה בתוך מערכת הצירים אינה אומרת שהיא על הישר.',
      subparts:[
        {label:'א.',text:'שיעורי `K` והצבה במשוואה:',responseSpace:'equation'},
        {label:'ב.',text:'שיעורי `L` והצבה במשוואה:',responseSpace:'equation'},
        {label:'ג.',text:'מסקנה קצרה:',responseSpace:'lines-2'}
      ],
      mathModel:{standard:{A:2,B:-1,C:1},expected:{m:2,b:-1,xIntercept:[1,2]},probes:[{point:[-1,-3],onLine:true},{point:[0,0],onLine:false}]}
    }
  ]
};
