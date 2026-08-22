export const page={
  page:34,
  chapter:10,
  kicker:'פרק 10 · שרטוט ישר ופונקציה קווית',
  title:'שרטוט ישר לפי שיפוע שברי',
  subtitle:'שיפוע שברי → מדרגת שיפוע → תיקון טעות · רמות 5–6',
  rule:'כאשר השיפוע שברי, נוח לבחור מדרגה של מספרים שלמים. למשל אם `m=1/2`, אפשר לבחור `Δx=2` ו־`Δy=1`. היחס חייב להישמר: `m=Δy/Δx`.',
  sourceRefs:['razpages:עמוד-449.html','data/graphing-family-map.md#D03'],
  questions:[
    {
      id:'D03-P34-Q1',family:'D03,S09',level:5,responseSpace:'mixed',
      stem:'נתונה הנקודה `R=(-2,3)` והשיפוע `m=1/2`. בחרו מדרגת שיפוע ללא שברים, בנו נקודה נוספת ושרטטו.',
      graph:{xMin:-5,xMax:5,yMin:-1,yMax:7,showCoordinates:false,points:[{x:-2,y:3,label:'R'}],ariaLabel:'מערכת צירים ובה הנקודה R מינוס שתיים שלוש לשרטוט ישר ששיפועו חצי'},
      subparts:[
        {label:'א.',text:'השלימו מדרגה נוחה: `Δx=`',responseSpace:'short',answerCount:2,betweenAnswers:',  Δy='},
        {label:'ב.',text:'כתבו נקודה נוספת מתאימה:',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:-1,B:2,C:8},expected:{m:[1,2],b:4,xIntercept:-8},probes:[{point:[-2,3],onLine:true},{point:[0,4],onLine:true}]}
    },
    {
      id:'D03-P34-Q2',family:'D03,S09',level:6,responseSpace:'lines-4',
      stem:'תלמיד טען שלשיפוע `m=1/2` מתאימה מדרגה של `Δx=1, Δy=2`. הסבירו את הטעות, כתבו מדרגה נכונה, והסבירו כיצד אפשר לבדוק שהנקודה החדשה שקיבלתם נמצאת על הישר דרך `R=(-2,3)`.',
      mathModel:{standard:{A:-1,B:2,C:8},expected:{m:[1,2],b:4,xIntercept:-8},probes:[{point:[-1,5],onLine:false},{point:[0,4],onLine:true}]}
    }
  ]
};
