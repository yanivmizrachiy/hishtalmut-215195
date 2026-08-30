export const page={
  page:148,
  chapter:30,
  kicker:'ישרים מקבילים · השלמת מקור Razpages',
  title:'ישר מקביל דרך ראשית הצירים',
  subtitle:'שיפוע משותף → מעבר בראשית ⇒ b=0 → סידור משוואה לא מסודרת',
  rule:'לישרים מקבילים יש אותו שיפוע. ישר העובר דרך ראשית הצירים מקיים `b=0`, ולכן משוואתו היא `y=mx`. כאשר המשוואה אינה מסודרת, מבודדים תחילה את `y` כדי לקרוא את השיפוע.',
  sourceRefs:['razpages:עמוד-442.html','razpages:עמוד-443.html','razpages:עמוד-445.html'],
  questions:[
    {
      id:'RZ443-Q7-P148-Q1',family:'S16,Q12',level:5,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר המקביל לישר `AB: y=3x+8` והעובר דרך ראשית הצירים.',
      sourceRef:'razpages:עמוד-443.html — שאלה 7: ישר מקביל ל־y=3x+8 העובר בראשית הצירים',
      adaptation:'הנתון והמשימה נשמרו בדיוק; נוספה בקשה לנמק מדוע `b=0`.',
      subparts:[
        {label:'א.',text:'מהו השיפוע של הישר `AB`?',responseSpace:'short'},
        {label:'ב.',text:'כתבו את משוואת הישר המבוקש והסבירו מדוע `b=0`.',responseSpace:'lines-2'}
      ],
      mathModel:{standard:{A:-3,B:1,C:0},expected:{m:3,b:0},probes:[{point:[0,0],onLine:true},{point:[2,6],onLine:true}]}
    },
    {
      id:'RZ442-Q1-P148-Q2',family:'S16,Q12',level:5,responseSpace:'mixed',
      stem:'תרגול: בכל סעיף מצאו את משוואת הישר העובר דרך הנקודה הנתונה ומקביל לישר הנתון.',
      sourceRef:'razpages:עמוד-442.html — שאלה 1, סעיפים א–ד: ישר דרך נקודה המקביל לישר נתון',
      adaptation:'ארבעת הסעיפים ונתוניהם נשמרו בדיוק כפי שהם במקור.',
      subparts:[
        {label:'א.',text:'דרך `(1,14)`, מקביל ל־`y=5x+1`:',responseSpace:'equation'},
        {label:'ב.',text:'דרך `(2,11)`, מקביל ל־`y=2x-3`:',responseSpace:'equation'},
        {label:'ג.',text:'דרך `(-1,4)`, מקביל ל־`y=-4x+1`:',responseSpace:'equation'},
        {label:'ד.',text:'דרך `(1,-2)`, מקביל ל־`y=-3x-5`:',responseSpace:'equation'},
        {label:'ה.',text:'באיזה מן הסעיפים התקבל ישר העובר דרך ראשית הצירים? הסבירו כיצד זיהיתם זאת.',responseSpace:'lines-2'},
        {label:'ו.',text:'בדקו את סעיף א׳ בהצבת שיעורי הנקודה `(1,14)` במשוואה שקיבלתם. הראו את ההצבה.',responseSpace:'full-work'}
      ]
    },
    {
      id:'RZ445-Q1-P148-Q3',family:'S16,E08',level:6,responseSpace:'full-work',
      stem:'מצאו את משוואת הישר העובר דרך ראשית הצירים ומקביל לישר `6x=-2y+14`.',
      sourceRef:'razpages:עמוד-445.html — שאלה 1: ישר דרך ראשית הצירים המקביל ל־6x=-2y+14',
      adaptation:'הנתון והמשימה נשמרו בדיוק; נוסף שלב ביניים מפורש של סידור המשוואה לצורת `y=mx+b`.',
      subparts:[
        {label:'א.',text:'סדרו את המשוואה `6x=-2y+14` לצורה `y=mx+b`.',responseSpace:'equation'},
        {label:'ב.',text:'מצאו את משוואת הישר המבוקש. הראו את הדרך.',responseSpace:'full-work'}
      ],
      mathModel:{standard:{A:3,B:1,C:0},expected:{m:-3,b:0},probes:[{point:[0,0],onLine:true},{point:[1,-3],onLine:true}]}
    },
    {
      id:'RZ445-Q2-P148-Q4',family:'S16,E08',level:6,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר העובר דרך ראשית הצירים ומקביל לישר `-4y=12x+4`.',
      sourceRef:'razpages:עמוד-445.html — שאלה 2: ישר דרך ראשית הצירים המקביל ל־-4y=12x+4',
      adaptation:'הנתון והמשימה נשמרו בדיוק.',
      subparts:[
        {label:'א.',text:'סדרו את המשוואה לצורה `y=mx+b` ורשמו את השיפוע.',responseSpace:'equation'},
        {label:'ב.',text:'כתבו את משוואת הישר המבוקש.',responseSpace:'lines-2'}
      ],
      mathModel:{standard:{A:3,B:1,C:0},expected:{m:-3,b:0},probes:[{point:[0,0],onLine:true},{point:[2,-6],onLine:true}]}
    }
  ]
};
