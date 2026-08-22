export const page={
  page:43,
  chapter:17,
  kicker:'פרק 17 · חיתוך בין שני ישרים',
  title:'משווים את ערכי y — ומוצאים את נקודת החיתוך',
  subtitle:'f(x)=g(x) → מוצאים x → מציבים ל-y → מאמתים · רמות 2–5',
  rule:'בנקודת החיתוך של שני גרפים ערכי `y` שווים. לכן פותרים `f(x)=g(x)` כדי למצוא את `x`, מציבים באחת הפונקציות כדי למצוא את `y`, וכותבים את הנקודה `(x,y)`.',
  sourceRefs:['razpages:עמוד-459.html','razpages:עמוד-460.html','razpages:עמוד-461.html','data/intersection-family-map.md'],
  questions:[
    {
      id:'X01-X02-X03-X04-P43-Q1',family:'X01,X02,X03,X04',level:2,levelLabel:'רמות 2–3',responseSpace:'mixed',
      stem:'נתונות `f(x)=-2x+3` ו־`g(x)=2x+11`. מצאו את נקודת החיתוך בשלבים.',
      subparts:[
        {level:2,text:'כתבו את המשוואה שמבטאת `f(x)=g(x)`.',responseSpace:'equation'},
        {level:3,text:'פתרו ומצאו את `x`.',responseSpace:'equation'},
        {level:3,text:'הציבו ומצאו את `y`.',responseSpace:'equation'},
        {level:3,text:'כתבו את נקודת החיתוך.',responseSpace:'equation'}
      ],
      sourceRef:'razpages:עמוד-460.html — הישרים y=-2x+3 ו-y=2x+11 ומציאת נקודת A בעזרת מערכת משוואות',
      adaptation:'התרגיל המקורי פורק לארבעת שלבי האלגוריתם הקנוני בלי לשנות את שתי הפונקציות.',
      intersectionModel:{
        lineA:{A:2,B:1,C:3},
        lineB:{A:-2,B:1,C:11},
        expected:{relation:'point',point:[-2,7]}
      }
    },
    {
      id:'X02-X03-X04-X05-P43-Q2',family:'X02,X03,X04,X05',level:4,responseSpace:'full-work',
      stem:'נתונות `f(x)=3x+5` ו־`g(x)=-2x-10`. מצאו את נקודת החיתוך, ואז בדקו את התוצאה בהצבה בשתי הפונקציות.',
      answerLabel:'פתרון, נקודה ואימות:',
      sourceRef:'razpages:עמוד-461.html — f(x)=3x+5, g(x)=-2x-10; פתרון גרפי ואלגברי',
      adaptation:'נשמרו הפונקציות המקוריות; בעמוד זה מודגש האימות האלגברי בשתיהן.',
      intersectionModel:{
        lineA:{A:-3,B:1,C:5},
        lineB:{A:2,B:1,C:-10},
        expected:{relation:'point',point:[-3,-4]}
      }
    },
    {
      id:'X08-X03-X04-P43-Q3',family:'X08,X03,X04',level:5,responseSpace:'full-work',
      stem:'נתונות `y=4x+2` ו־`y=-2x+17`. מצאו את נקודת החיתוך. כתבו את שיעור ה־`x` כשבר מצומצם והציגו דרך מלאה.',
      answerLabel:'דרך ונקודת חיתוך:',
      sourceRef:'razpages:עמוד-460.html — y=4x+2 ו-y=-2x+17, הישרים נחתכים בנקודה M',
      adaptation:'נשמרו שתי המשוואות המקוריות; נוסף דגש מפורש על כתיבה מדויקת של השיעור השברי.',
      intersectionModel:{
        lineA:{A:-4,B:1,C:2},
        lineB:{A:2,B:1,C:17},
        expected:{relation:'point',point:[[5,2],12]}
      }
    }
  ]
};
