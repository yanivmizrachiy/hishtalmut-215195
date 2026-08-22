export const page={
  page:33,
  chapter:10,
  kicker:'פרק 10 · שרטוט ישר ופונקציה קווית',
  title:'שרטוט ישר לפי נקודה ושיפוע',
  subtitle:'נקודה → מדרגת שיפוע → נקודה נוספת → ישר · רמות 3–6',
  rule:'כדי לשרטט ישר כאשר נתונים נקודה ושיפוע, מתחילים בנקודה הנתונה. אם `m=Δy/Δx`, בוחרים שינוי נוח ב־`x`, מחשבים את השינוי המתאים ב־`y`, מסמנים נקודה נוספת ומעבירים ישר דרך שתי הנקודות.',
  sourceRefs:['razpages:עמוד-449.html','data/graphing-family-map.md#D03'],
  questions:[
    {
      id:'D03-P33-Q1',family:'D03,S09',level:3,responseSpace:'mixed',
      stem:'נתונה הנקודה `P=(0,1)` והשיפוע `m=2`. בנו נקודה נוספת בעזרת מדרגת שיפוע, כתבו אותה ושרטטו את הישר.',
      graph:{xMin:-3,xMax:4,yMin:-4,yMax:6,showCoordinates:false,points:[{x:0,y:1,label:'P'}],ariaLabel:'מערכת צירים ובה הנקודה P אפס אחד לשרטוט ישר ששיפועו שתיים'},
      subparts:[
        {label:'א.',text:'אם מגדילים את `x` ב־`1`, בכמה ישתנה `y`?',responseSpace:'short'},
        {label:'ב.',text:'כתבו נקודה נוספת על הישר:',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:-2,B:1,C:1},expected:{m:2,b:1,xIntercept:[-1,2]},probes:[{point:[0,1],onLine:true},{point:[1,3],onLine:true}]}
    },
    {
      id:'D03-P33-Q2',family:'D03,S09',level:4,responseSpace:'mixed',
      stem:'נתונה הנקודה `Q=(2,3)` והשיפוע `m=-1`. השתמשו בשיפוע כדי לבנות נקודה נוספת, ואז שרטטו את הישר.',
      graph:{xMin:-2,xMax:6,yMin:-2,yMax:7,showCoordinates:false,points:[{x:2,y:3,label:'Q'}],ariaLabel:'מערכת צירים ובה הנקודה Q שתיים שלוש לשרטוט ישר ששיפועו מינוס אחת'},
      subparts:[
        {label:'א.',text:'כאשר `x` גדל ב־`1`, מה השינוי ב־`y`?',responseSpace:'short'},
        {label:'ב.',text:'כתבו נקודה נוספת מתאימה:',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:1,B:1,C:5},expected:{m:-1,b:5,xIntercept:5},probes:[{point:[2,3],onLine:true},{point:[3,2],onLine:true}]}
    },
    {
      id:'D03-P33-Q3',family:'D03,S09',level:5,responseSpace:'mixed',
      stem:'נתונה הנקודה `R=(-2,3)` והשיפוע `m=1/2`. בחרו מדרגת שיפוע ללא שברים, בנו נקודה נוספת ושרטטו.',
      graph:{xMin:-5,xMax:5,yMin:-1,yMax:7,showCoordinates:false,points:[{x:-2,y:3,label:'R'}],ariaLabel:'מערכת צירים ובה הנקודה R מינוס שתיים שלוש לשרטוט ישר ששיפועו חצי'},
      subparts:[
        {label:'א.',text:'השלימו מדרגה נוחה: `Δx=`',responseSpace:'short',answerCount:2,betweenAnswers:',  Δy='},
        {label:'ב.',text:'כתבו נקודה נוספת מתאימה:',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:-1,B:2,C:8},expected:{m:[1,2],b:4,xIntercept:-8},probes:[{point:[-2,3],onLine:true},{point:[0,4],onLine:true}]}
    },
    {
      id:'D03-P33-Q4',family:'D03,S09',level:6,responseSpace:'lines-2',
      stem:'תלמיד טען שלשיפוע `m=1/2` מתאימה תמיד מדרגה של `Δx=1, Δy=2`. הסבירו את הטעות וכתבו מדרגה נכונה שאפשר להשתמש בה לשרטוט הישר דרך `R=(-2,3)`.',
      mathModel:{standard:{A:-1,B:2,C:8},expected:{m:[1,2],b:4,xIntercept:-8},probes:[{point:[-1,5],onLine:false},{point:[0,4],onLine:true}]}
    }
  ]
};
