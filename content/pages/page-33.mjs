export const page={
  page:33,
  chapter:10,
  kicker:'פרק 10 · שרטוט ישר ופונקציה קווית',
  title:'שרטוט ישר לפי נקודה ושיפוע',
  subtitle:'נקודה → מדרגת שיפוע → נקודה נוספת → ישר · רמות 3–5',
  rule:'כדי לשרטט ישר כאשר נתונים נקודה ושיפוע, מתחילים בנקודה הנתונה. אם `m=\\frac{\\Delta y}{\\Delta x}`, בוחרים שינוי נוח ב־`x`, מחשבים את השינוי המתאים ב־`y`, מסמנים נקודה נוספת ומעבירים ישר דרך שתי הנקודות.',
  sourceRefs:['razpages:עמוד-449.html','data/graphing-family-map.md#D03'],
  questions:[
    {
      id:'D03-P33-Q1',family:'D03,S09',level:3,responseSpace:'mixed',
      stem:'נתונה הנקודה `P(0,1)` והשיפוע `m=2`. בנו נקודה נוספת בעזרת מדרגת שיפוע, כתבו אותה ושרטטו את הישר.',
      graph:{xMin:-3,xMax:4,yMin:-4,yMax:7,showCoordinates:false,points:[{x:0,y:1,label:'P'}],ariaLabel:'מערכת צירים ובה הנקודה P אפס פסיק אחת לשרטוט ישר ששיפועו שתיים'},
      subparts:[
        {label:'א.',text:'אם `\\Delta x=1`, מהו `\\Delta y`?',responseSpace:'short'},
        {label:'ב.',text:'כתבו נקודה נוספת על הישר:',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:-2,B:1,C:1},expected:{m:2,b:1,xIntercept:[-1,2]},probes:[{point:[0,1],onLine:true},{point:[1,3],onLine:true},{point:[1,2],onLine:false}]}
    },
    {
      id:'D03-P33-Q2',family:'D03,S09',level:4,responseSpace:'mixed',
      stem:'נתונה הנקודה `Q(2,3)` והשיפוע `m=-1`. השתמשו בשיפוע כדי לבנות נקודה נוספת, ואז שרטטו את הישר. שימו לב לכיוון הירידה.',
      graph:{xMin:-2,xMax:6,yMin:-2,yMax:7,showCoordinates:false,points:[{x:2,y:3,label:'Q'}],ariaLabel:'מערכת צירים ובה הנקודה Q שתיים פסיק שלוש לשרטוט ישר ששיפועו מינוס אחת'},
      subparts:[
        {label:'א.',text:'אם `\\Delta x=1`, מהו `\\Delta y`?',responseSpace:'short'},
        {label:'ב.',text:'כתבו נקודה נוספת מתאימה:',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:1,B:1,C:5},expected:{m:-1,b:5,xIntercept:5},probes:[{point:[2,3],onLine:true},{point:[3,2],onLine:true},{point:[3,4],onLine:false}]}
    },
    {
      id:'D03-P33-Q3',family:'D03,S09,V05',level:5,responseSpace:'mixed',
      stem:'הנקודה `C(-2,1)` נמצאת על ישר ששיפועו `m=\\frac{1}{2}`. איזו נקודה נוספת מתאימה לאותו ישר? סמנו, הסבירו בעזרת `\\Delta x,\\Delta y`, ואז השלימו את השרטוט.',
      choices:['`(-1,3)`','`(0,2)`','`(2,1)`'],
      panels:[{label:'שרטוט',graph:{xMin:-4,xMax:4,yMin:-2,yMax:5,showCoordinates:false,points:[{x:-2,y:1,label:'C'}],ariaLabel:'מערכת צירים ובה הנקודה C מינוס שתיים פסיק אחת לשרטוט ישר ששיפועו חצי'}}],
      subparts:[
        {label:'',text:'כתבו מדרגת שיפוע אפשרית: `\\Delta x=`',responseSpace:'short',answerCount:2,betweenAnswers:'`, \\Delta y=`'}
      ],
      mathModel:{standard:{A:[-1,2],B:1,C:2},expected:{m:[1,2],b:2,xIntercept:-4},probes:[{point:[-2,1],onLine:true},{point:[0,2],onLine:true},{point:[-1,3],onLine:false},{point:[2,1],onLine:false}]}
    }
  ]
};
