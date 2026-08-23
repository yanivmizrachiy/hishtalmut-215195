export const page={
  page:43,
  chapter:17,
  kicker:'פרק 17 · חיתוך בין שני ישרים',
  title:'נקודת חיתוך בין שני ישרים',
  subtitle:'גרף → השוואת ערכי y → פתרון אלגברי → אימות · רמות 2–5',
  rule:'בנקודת החיתוך של שני ישרים שני ערכי `y` שווים. לכן משווים בין שתי המשוואות, מוצאים את `x`, ואז מציבים באחת מהן כדי למצוא את `y`.',
  sourceRefs:['razpages:עמוד-459.html','razpages:עמוד-460.html','razpages:עמוד-461.html','data/intersection-family-map.md'],
  questions:[
    {
      id:'X01-P43-Q1',family:'X01',level:2,responseSpace:'mixed',
      stem:'במערכת הצירים מסורטטים הישרים `f` ו־`g`. קראו מהגרף את נקודת החיתוך `A`.',
      graph:{
        xMin:-8,xMax:4,yMin:-8,yMax:8,xTick:2,yTick:2,showCoordinates:false,
        ariaLabel:'שני ישרים, f עולה ו-g יורד, הנחתכים בנקודה A(-3,0). הישר f חותך את ציר y בנקודה C(0,6), והישר g חותך את ציר y בנקודה B(0,-6).',
        lines:[{through:[[-3,0],[0,6]]},{through:[[-3,0],[0,-6]]}],
        points:[{x:-3,y:0,label:'A'},{x:0,y:6,label:'C'},{x:0,y:-6,label:'B'}]
      },
      subparts:[
        {text:'כתבו את שיעורי נקודת החיתוך `A(__,__)`.',responseSpace:'equation'},
        {text:'בנקודת החיתוך השלימו: `f(-3)=g(-3)=`',responseSpace:'short'}
      ],
      sourceRef:'razpages:עמוד-459.html — גרף f,g והטענה שנקודת החיתוך היא (-3,0)',
      adaptation:'רכיב החיתוך מן שאלת הגרף המקורית הופרד למשימת פתיחה ישירה, לפני המעבר לפתרון אלגברי.',
      mathModel:{intersection:{
        lines:[{A:-2,B:1,C:6},{A:2,B:1,C:-6}],
        expected:[-3,0]
      }}
    },
    {
      id:'X02-P43-Q2',family:'X02',level:3,responseSpace:'full-work',
      stem:'הישר `AB` הוא גרף הפונקציה `y=-x+2`, והישר `AC` הוא גרף הפונקציה `y=2x+8`. מצאו את שיעורי נקודת החיתוך `A` בעזרת פתרון המשוואה המתקבלת מהשוואת שני ערכי `y`.',
      answerLabel:'דרך פתרון ונקודת החיתוך:',
      sourceRef:'razpages:עמוד-459.html — y=-x+2, y=2x+8; מציאת A בעזרת פתרון מערכת משוואות',
      adaptation:'הנתונים נשמרו; הניסוח מדגיש במפורש את מעבר הביניים f(x)=g(x).',
      mathModel:{intersection:{
        lines:[{A:1,B:1,C:2},{A:-2,B:1,C:8}],
        expected:[-2,4]
      }}
    },
    {
      id:'X04-P43-Q3',family:'X04',level:4,responseSpace:'full-work',
      stem:'נתונים הישרים `y=4x+2` ו־`y=-2x+17`. הם נחתכים בנקודה `M`. מצאו את שיעורי `M` והציגו דרך מלאה.',
      answerLabel:'חישוב ונקודת החיתוך:',
      sourceRef:'razpages:עמוד-460.html — y=4x+2, y=-2x+17; מציאת שיעורי M',
      adaptation:'השאלה נשמרה במהותה ובנתוניה; נוסף מקום מפורש לדרך פתרון מלאה.',
      mathModel:{intersection:{
        lines:[{A:-4,B:1,C:2},{A:2,B:1,C:17}],
        expected:[[5,2],12]
      }}
    },
    {
      id:'X03-X04-P43-Q4',family:'X03,X04',level:5,responseSpace:'full-work',
      stem:'נתונות `f(x)=3x+5` ו־`g(x)=-2x-10`. מצאו את נקודת החיתוך, ולאחר מכן בדקו את תשובתכם בהצבה בשתי הפונקציות.',
      answerLabel:'פתרון ובדיקת הצבה:',
      sourceRef:'razpages:עמוד-461.html — f(x)=3x+5, g(x)=-2x-10; שרטוט ומציאת נקודת החיתוך',
      adaptation:'החלק האלגברי והאימות בהצבה רוכזו יחד כדי לבדוק שהזוג הסדור מקיים את שתי הפונקציות.',
      mathModel:{intersection:{
        lines:[{A:-3,B:1,C:5},{A:2,B:1,C:-10}],
        expected:[-3,-4]
      }}
    }
  ]
};
