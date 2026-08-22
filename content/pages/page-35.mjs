export const page={
  page:35,
  chapter:10,
  kicker:'פרק 10 · שרטוט ישר ופונקציה קווית',
  title:'שרטוט ישר לפי שתי נקודות',
  subtitle:'שתי נקודות → שיפוע → שרטוט → בדיקת טעות · רמות 3–6',
  rule:'שתי נקודות שונות קובעות ישר אחד. אפשר לסמן את שתי הנקודות ולחבר ביניהן, ובמידת הצורך לחשב את השיפוע לפי `m=(y₂-y₁)/(x₂-x₁)`. חשוב לשמור על אותו סדר חיסור במונה ובמכנה.',
  sourceRefs:['razpages:עמוד-455.html','data/graphing-family-map.md#D04'],
  questions:[
    {
      id:'D04-P35-Q1',family:'D04,S11',level:3,responseSpace:'mixed',
      stem:'הישר עובר דרך הנקודות `A=(1,-2)` ו־`B=(2,3)`. חשבו את השיפוע, ואז שרטטו את הישר העובר דרך שתי הנקודות המסומנות.',
      graph:{xMin:-2,xMax:4,yMin:-8,yMax:8,showCoordinates:false,points:[{x:1,y:-2,label:'A'},{x:2,y:3,label:'B'}],ariaLabel:'מערכת צירים ובה הנקודות A אחת מינוס שתיים ו-B שתיים שלוש'},
      subparts:[{label:'א.',text:'`m=`',responseSpace:'short'},{label:'ב.',text:'שרטטו את הישר.',responseSpace:'graph-draw'}],
      mathModel:{standard:{A:-5,B:1,C:-7},expected:{m:5,b:-7,xIntercept:[7,5]},probes:[{point:[1,-2],onLine:true},{point:[2,3],onLine:true}]}
    },
    {
      id:'D04-P35-Q2',family:'D04,P02',level:4,responseSpace:'graph-draw',
      stem:'נתונות הנקודות `C=(-2,3)` ו־`D=(2,-1)`. סמנו אותן במערכת הצירים ושרטטו את הישר העובר דרכן.',
      graph:{xMin:-5,xMax:5,yMin:-4,yMax:6,showCoordinates:false,ariaLabel:'מערכת צירים ריקה לסימון שתי נקודות ושרטוט ישר'},
      mathModel:{standard:{A:1,B:1,C:1},expected:{m:-1,b:1,xIntercept:1},probes:[{point:[-2,3],onLine:true},{point:[2,-1],onLine:true}]}
    },
    {
      id:'D04-P35-Q3',family:'D04,S11',level:6,responseSpace:'lines-4',
      stem:'תלמיד חישב עבור `A=(1,-2)` ו־`B=(2,3)` כך: `m=(3-(-2))/(1-2)=-5`. הסבירו מה הטעות. כתבו חישוב נכון שבו סדר הנקודות במונה ובמכנה נשמר באופן עקבי.',
      mathModel:{standard:{A:-5,B:1,C:-7},expected:{m:5,b:-7,xIntercept:[7,5]},probes:[{point:[1,-2],onLine:true},{point:[2,3],onLine:true}]}
    }
  ]
};
