export const page={
  page:44,
  chapter:17,
  kicker:'פרק 17 · חיתוך בין שני ישרים',
  title:'איזה זוג סדור הוא נקודת החיתוך?',
  subtitle:'בודקים זוג סדור → מציבים בשני הישרים → מנמקים',
  rule:'נקודת החיתוך חייבת להיות ממוקמת על שני הישרים. לכן זוג סדור מתאים רק אם בהצבת ערך ה־`x` מתקבל אותו ערך `y` בשתי המשוואות.',
  sourceRefs:['official:systems:2','official:systems:3','razpages:bank.json intersection'],
  questions:[
    {id:'X03-P44-Q1',family:'X03',level:3,responseSpace:'mixed',stem:'נתונה המערכת `y=2x` ו־`y=-3x+5`.',subparts:[{text:'הציבו `x=1` במשוואה `y=2x`. מהו ערך ה־`y`?',responseSpace:'short'},{text:'הציבו `x=1` במשוואה `y=-3x+5`. מהו ערך ה־`y`?',responseSpace:'short'},{text:'כתבו את נקודת החיתוך כזוג סדור.',responseSpace:'short'}],sourceRef:'official:systems:3 — בדיקת פתרון משותף באמצעות הצבה',adaptation:'תרגיל קנוני לבדיקת זוג סדור בשתי משוואות.',mathModel:{standard:{A:-2,B:1,C:0},expected:{m:2,b:0,xIntercept:0},probes:[{point:[1,2],onLine:true}]}},
    {id:'X03-P44-Q2',family:'X03',level:4,responseSpace:'explanation',stem:'הסבירו מדוע `(1,2)` הוא פתרון של שתי המשוואות יחד, ולא רק של אחת מהן.',sourceRef:'official:systems:3 — משמעות פתרון מערכת כזוג המקיים את שתי המשוואות',adaptation:'נימוק מפורש למשמעות פתרון משותף.'},
    {id:'X04-P44-Q3',family:'X04',level:5,responseSpace:'full-work',stem:'מצאו את נקודת החיתוך של `y=2x` ו־`y=-3x+5` בלי לנחש זוג סדור: השוו בין הביטויים של `y`, פתרו, הציבו, ובסוף כתבו תשובה כזוג סדור.',sourceRef:'official:systems:3 — פתרון מערכת בשיטה אלגברית',adaptation:'תרגיל מדורג המחבר בדיקת זוג סדור לפתרון עצמאי.',mathModel:{standard:{A:3,B:1,C:5},expected:{m:-3,b:5,xIntercept:[5,3]},probes:[{point:[1,2],onLine:true}]}},
    {id:'X03-P44-Q4',family:'X03',level:5,responseSpace:'full-work',stem:'חשבו, בלי לסרטט, את שיעורי נקודת החיתוך של הישרים `y=3x+2` ו־`y=-4x+9`. הציגו דרך.',sourceRef:'razpages:bank.json intersection f4-p075-q88א — נקודת חיתוך של שני ישרים; מספרים שונו',adaptation:'תרגול השוואת שני ביטויי y ופתרון; מספרים שונו.'},
    {id:'X03-P44-Q5',family:'X03',level:6,responseSpace:'full-work',stem:'מצאו את שיעורי נקודת החיתוך של הישרים `y=-8x+12` ו־`y=-x-2`. הציגו דרך.',sourceRef:'razpages:bank.json intersection f4-p075-q88ב — נקודת חיתוך של שני ישרים; מספרים שונו',adaptation:'וריאציה עם שני שיפועים שליליים; מספרים שונו.'},
    {id:'X03-P44-Q6',family:'X03',level:7,responseSpace:'lines-2',stem:'מצאו את שיעורי נקודת החיתוך של הישרים `y=\\frac{1}{2}x+5` ו־`y=-2x`. הציגו דרך.',sourceRef:'razpages:bank.json intersection f4-p075-q88ד — נקודת חיתוך עם שיפוע שברי; מספרים שונו',adaptation:'וריאציה עם שיפוע שברי לחיזוק המיומנות; מספרים שונו.'}
  ]
};
