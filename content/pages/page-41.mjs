export const page={
  page:41,
  chapter:15,
  title:'ישרים מקבילים לצירים',
  rule:'ישר המקביל לציר `x` הוא ישר אופקי ומשוואתו `y=c`. ישר המקביל לציר `y` הוא ישר אנכי ומשוואתו `x=c`.',
  sourceRefs:['razpages:עמוד-444.html','razpages:עמוד-446.html'],
  questions:[
    {
      id:'AX01-P41-Q1',family:'AX01',level:1,responseSpace:'mixed',
      stem:'התבוננו בשני הישרים. כתבו מתחת לכל גרף אם הוא מקביל לציר `x` או לציר `y`, ולאחר מכן כתבו את משוואתו.',
      panels:[
        {label:'א',graph:{xMin:-5,xMax:5,yMin:-5,yMax:5,xTick:1,yTick:1,showCoordinates:true,ariaLabel:'ישר אופקי בגובה מינוס שלוש',lines:[{through:[[-5,-3],[5,-3]]}]},answerLabel:'מקביל לציר: ____   משוואה: ____'},
        {label:'ב',graph:{xMin:-5,xMax:5,yMin:-5,yMax:5,xTick:1,yTick:1,showCoordinates:true,ariaLabel:'ישר אנכי באיקס שתיים',lines:[{through:[[2,-5],[2,5]]}]},answerLabel:'מקביל לציר: ____   משוואה: ____'}
      ],
      sourceRef:'razpages:עמוד-444.html — זיהוי y=-3 מתוך שרטוטים; razpages:עמוד-446.html — ישר המקביל לציר y',
      adaptation:'איחוד שני ייצוגים משלימים באותו דף והצגה במנוע SVG האחיד'
    },
    {
      id:'AX02-P41-Q2',family:'AX02',level:2,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר המקביל לציר `x` ועובר דרך הנקודה `(-3,1)`. הסבירו מדוע שיעור ה־`x` של הנקודה אינו קובע את המשוואה.',
      sourceRef:'razpages:עמוד-444.html — ישר מקביל לציר x דרך (-3,1)',
      adaptation:'שמירת נתוני המקור והוספת נימוק מושגי קצר',
      mathModel:{standard:{A:0,B:1,C:1},expected:{m:0,b:1},probes:[{point:[-3,1],onLine:true},{point:[4,1],onLine:true}]}
    },
    {
      id:'AX03-P41-Q3',family:'AX03,V05',level:3,responseSpace:'mixed',
      stem:'הישר המקביל לציר `x` עובר דרך `A=(0,-6)`. איזו מן הנקודות הבאות נמצאת גם היא על הישר? סמנו ונמקו לפי המשוואה.',
      subparts:[
        {label:'א.',text:'`P=(4,-6)`',responseSpace:'choice-mark'},
        {label:'ב.',text:'`Q=(-6,4)`',responseSpace:'choice-mark'},
        {label:'ג.',text:'`R=(0,4)`',responseSpace:'choice-mark'}
      ],
      sourceRef:'razpages:עמוד-444.html — ישר אופקי דרך A(0,-6) וזיהוי נקודה נוספת עליו',
      adaptation:'המסיחים נבנו כך שהבדיקה דורשת לזהות ש־y קבוע',
      mathModel:{standard:{A:0,B:1,C:-6},expected:{m:0,b:-6},probes:[{point:[4,-6],onLine:true},{point:[-6,4],onLine:false},{point:[0,4],onLine:false}]}
    },
    {
      id:'AX04-P41-Q4',family:'AX04',level:4,responseSpace:'full-work',
      stem:'מצאו את משוואת הישר המקביל לציר `y` ועובר דרך הנקודה `(2,0)`. שרטטו אותו במערכת הצירים והסבירו מדוע אי־אפשר לכתוב אותו בצורה `y=mx+b`.',
      graph:{xMin:-5,xMax:5,yMin:-5,yMax:5,xTick:1,yTick:1,showCoordinates:true,ariaLabel:'מערכת צירים ריקה לשרטוט ישר אנכי'},
      sourceRef:'razpages:עמוד-446.html — ישר מקביל לציר y דרך (2,0)',
      adaptation:'שמירת משימת המקור והוספת הבחנה מפורשת בין x=c לבין y=mx+b'
    }
  ]
};