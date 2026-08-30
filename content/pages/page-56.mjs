export const page={
  page:56,
  chapter:23,
  kicker:'פרק 23 · גאומטריה אנליטית מתקדמת',
  title:'פונקציה קווית וגאומטריה',
  subtitle:'שיפוע זהה → נקודה נתונה → משוואה → שרטוט',
  rule:'אם ישר חדש מקביל לישר נתון, השיפוע שלו זהה. משתמשים בנקודה שדרכה הוא עובר כדי למצוא את `b`, ואז כותבים את המשוואה בצורה `y=mx+b`.',
  sourceRefs:['razpages:bank.json parallel-lines coordinate-geometry','official:linear:4','official:linear:11'],
  questions:[
    {id:'AG01-P56-Q1',family:'AG01',level:7,responseSpace:'mixed',stem:'במשולש מן העמוד הקודם: `A(0,4)`, `B(-4,0)`, `C(4,0)`. מצאו את משוואת הישר העובר דרך `B` ומקביל לישר `AC`, שמשוואתו `y=-x+4`.',graph:{xMin:-6,xMax:6,yMin:-2,yMax:8,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'המשולש מן העמוד הקודם: הישרים דרך A B ו-A C, עם A על ציר y ו-B C על ציר x',lines:[{through:[[-4,0],[0,4]]},{through:[[0,4],[4,0]]}],points:[{x:0,y:4,label:'A'},{x:-4,y:0,label:'B'},{x:4,y:0,label:'C'}]},subparts:[{text:'מהו השיפוע של `AC`?',responseSpace:'short'},{text:'מהו השיפוע של הישר המקביל דרך `B`?',responseSpace:'short'},{text:'הציבו את `B(-4,0)` ומצאו את `b`.',responseSpace:'lines-2'},{text:'כתבו את משוואת הישר.',responseSpace:'equation'}],sourceRef:'official:linear:4 — ישרים מקבילים בעלי שיפוע שווה; official:linear:11 — מציאת משוואה משיפוע ונקודה',adaptation:'תרגול מדורג של בניית ישר מקביל דרך נקודה נתונה; המשולש מהעמוד הקודם מוצג שוב לשמירת הרצף החזותי.'},
    {id:'AG02-P56-Q2',family:'AG02',level:8,responseSpace:'mixed',stem:'מצאו את נקודת החיתוך `D` של הישר שמצאתם עם ציר `y`.',subparts:[{text:'בחיתוך עם ציר `y`, מהו ערך `x`?',responseSpace:'short'},{text:'מצאו את ערך `y`.',responseSpace:'lines-2'},{text:'כתבו את `D` כזוג סדור.',responseSpace:'short',answerShape:'ordered-pair'}],sourceRef:'official:linear:7 — b הוא חיתוך עם ציר y',adaptation:'חיבור בין המשוואה שנמצאה לבין נקודת החיתוך עם ציר y.'},
    {id:'AG03-P56-Q3',family:'AG03',level:8,responseSpace:'mixed',stem:'מצאו את משוואת הישר העובר דרך `C(4,0)` ומקביל לישר `AB`, שמשוואתו `y=x+4`.',subparts:[{text:'מהו השיפוע?',responseSpace:'short'},{text:'מצאו את `b`.',responseSpace:'lines-2'},{text:'כתבו את משוואת הישר.',responseSpace:'equation'}],sourceRef:'official:linear:4 — מקבילות; official:linear:11 — משוואה משיפוע ונקודה',adaptation:'תרגול נוסף עם שיפוע חיובי.'},
    {id:'AG04-P56-Q4',family:'AG04',level:9,responseSpace:'explanation',stem:'מה תוכלו לומר על צלעות המרובע `ABCD` שהתקבל? הסבירו בעזרת השיפועים והמקבילות.',sourceRef:'razpages:bank.json parallel-lines coordinate-geometry — הסקת תכונות מרובע משיפועים',adaptation:'נימוק גאומטרי מתוך תכונות של ישרים מקבילים.'},
    {id:'AG05-P56-Q5',family:'AG05',level:9,responseSpace:'lines-2',stem:'המרובע `ABCD` הוא מעוין שקודקודיו `A(0,4)`, `B(-4,0)`, `C(4,0)`, `D(0,-4)`. אלכסוניו הם `AD` ו־`BC`. חשבו את אורך כל אלכסון ואת שטח המעוין. הציגו דרך.',sourceRef:'razpages:bank.json coordinate-geometry — אורכי אלכסונים ושטח במערכת צירים',adaptation:'יישום גאומטרי אינטגרטיבי של קואורדינטות ואורכים.'}
  ]
};
