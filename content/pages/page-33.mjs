export const page={
  page:33,
  chapter:10,
  kicker:'פרק 10 · שרטוט ישר ופונקציה קווית',
  title:'שרטוט ישר לפי נקודה ושיפוע',
  subtitle:'נקודה → מדרגת שיפוע → נקודה נוספת → שיעור חסר · רמות 3–5',
  rule:'כדי לשרטט ישר כאשר נתונים נקודה ושיפוע, מתחילים בנקודה הנתונה. אם `m=Δy/Δx`, בוחרים שינוי נוח ב־`x`, מחשבים את השינוי המתאים ב־`y`, מסמנים נקודה נוספת ומעבירים ישר דרך שתי הנקודות.',
  sourceRefs:['razpages:עמוד-449.html','data/graphing-family-map.md#D03','jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-38-question-9'],
  questions:[
    {
      id:'D03-P33-Q1',family:'D03,S09',level:3,responseSpace:'mixed',
      stem:'נתונה הנקודה `P(0,1)` והשיפוע `m=2`. בנו נקודה נוספת בעזרת מדרגת שיפוע, כתבו אותה ושרטטו את הישר.',
      graph:{xMin:-3,xMax:4,yMin:-4,yMax:6,showCoordinates:false,points:[{x:0,y:1,label:'P'}],ariaLabel:'מערכת צירים ובה הנקודה P אפס אחד לשרטוט ישר ששיפועו שתיים'},
      subparts:[
        {label:'א.',text:'אם מגדילים את `x` ב־`1`, בכמה ישתנה `y`?',responseSpace:'short'},
        {label:'ב.',text:'כתבו נקודה נוספת על הישר:',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:-2,B:1,C:1},expected:{m:2,b:1,xIntercept:[-1,2]},probes:[{point:[0,1],onLine:true},{point:[1,3],onLine:true}]},
      sourceRefs:['data/graphing-family-map.md#D03','razpages:עמוד-449.html'],
      adaptation:'יישום ישיר של D03: נקודה ושיפוע → מדרגת שיפוע → נקודה נוספת → ישר.'
    },
    {
      id:'D03-P33-Q2',family:'D03,S09',level:4,responseSpace:'mixed',
      stem:'נתונה הנקודה `Q(2,3)` והשיפוע `m=-1`. השתמשו בשיפוע כדי לבנות נקודה נוספת, ואז שרטטו את הישר.',
      graph:{xMin:-2,xMax:6,yMin:-2,yMax:7,showCoordinates:false,points:[{x:2,y:3,label:'Q'}],ariaLabel:'מערכת צירים ובה הנקודה Q שתיים שלוש לשרטוט ישר ששיפועו מינוס אחת'},
      subparts:[
        {label:'א.',text:'כאשר `x` גדל ב־`1`, מה השינוי ב־`y`?',responseSpace:'short'},
        {label:'ב.',text:'כתבו נקודה נוספת מתאימה:',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:1,B:1,C:5},expected:{m:-1,b:5,xIntercept:5},probes:[{point:[2,3],onLine:true},{point:[3,2],onLine:true}]},
      sourceRefs:['data/graphing-family-map.md#D03','razpages:עמוד-449.html'],
      adaptation:'אותה משפחה עם שיפוע שלילי כדי לקשור את סימן השיפוע לכיוון המדרגה.'
    },
    {
      id:'J2-P38-P33-Q3',family:'D03,S09',level:5,responseSpace:'mixed',
      stem:'הנקודות `A(2,1)` ו־`B(4,\;\_\_)` נמצאות על ישר ששיפועו `3`. השלימו את השיעור החסר של הנקודה `B` וכתבו את דרך הפתרון.',
      graph:{xMin:0,xMax:5,yMin:0,yMax:9,xTick:1,yTick:1,showCoordinates:true,points:[{x:2,y:1,label:'A'}],ariaLabel:'מערכת צירים עם הנקודה A שתיים אחד; יש להשלים את שיעור y של B כאשר x שווה ארבע ושיפוע הישר שלוש'},
      answerLabel:'דרך ותשובה:',
      mathModel:{standard:{A:-3,B:1,C:-5},expected:{m:3,b:-5,xIntercept:[5,3]},probes:[{point:[2,1],onLine:true},{point:[4,7],onLine:true}]},
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 38, question 9 — points A(2,1) and B(4,__) lie on a line of slope 3; complete the missing coordinate and show the solution method',
      adaptation:'נשמרו הנקודה A, ערך x של B, השיפוע 3 ודרישת הצגת הדרך; מערכת הצירים נבנתה מחדש בסגנון האחיד של הספר.'
    }
  ]
};
