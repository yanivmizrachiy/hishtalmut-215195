export const page={
  page:96,
  chapter:29,
  kicker:'נקודת חיתוך · גרפי שתי פונקציות',
  title:'שרטוט שתי פונקציות ומציאת החיתוך',
  subtitle:'f(x) · g(x) · פתרון גרפי ואלגברי',
  rule:'כדי לשרטט כל ישר מספיקות שתי נקודות. נקודת החיתוך שייכת לשני הגרפים ולכן מתקיים בה `f(x)=g(x)`.',
  sourceRefs:['razpages:עמוד-461.html'],
  questions:[
    {
      id:'RZ461-Q1-P96-Q1',family:'S14,Q02,Q08',level:7,responseSpace:'mixed',
      stem:'נתונות הפונקציות `f(x)=3x+5` ו־`g(x)=-2x-10`. ענו על שלושת הסעיפים.',
      sourceRef:'razpages:עמוד-461.html — שאלה 1: f(x)=3x+5, g(x)=-2x-10, שרטוט משותף, חיתוך ו-x שבו f=g',
      adaptation:'שתי הפונקציות וכל שלושת סעיפי המקור נשמרו. כמו במקור, מערכת הצירים ניתנת ריקה — סעיף א׳ הוא משימת שרטוט של התלמיד, ולכן הישרים ונקודת החיתוך אינם מסומנים מראש ואינם מסגירים את התשובה לסעיפים ב׳ ו־ג׳. טווח הצירים זהה לזה שבמקור.',
      graph:{xMin:-7,xMax:4,yMin:-12,yMax:8,xTick:1,yTick:4,lines:[],points:[],showCoordinates:false,ariaLabel:'מערכת צירים ריקה לשרטוט הגרפים f(x)=3x+5 ו-g(x)=-2x-10, בטווח x מ-7- עד 4 ו-y מ-12- עד 8'},
      subparts:[
        {text:'שרטטו את שני הגרפים במערכת הצירים. סמנו לכל גרף לפחות שתי נקודות חישוב.',responseSpace:'lines-2',level:7},
        {text:'מהם שיעורי נקודת החיתוך של שני הגרפים? הציגו גם בדיקה אלגברית.',responseSpace:'lines-4',answerShape:'ordered-pair',level:7},
        {text:'מהו ערך `x` שעבורו `f(x)=g(x)`?',responseSpace:'short',level:7}
      ],
      mathModel:{standard:{A:-3,B:1,C:5},expected:{m:3,b:5,xIntercept:[-5,3]},probes:[{point:[-3,-4],onLine:true}]}
    }
  ]
};
