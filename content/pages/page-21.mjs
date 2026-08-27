export const page={
  page:21,
  chapter:8,
  kicker:'פרק 8 · משוואה לא מסודרת',
  title:'מהמשוואה הלא מסודרת אל הגרף',
  subtitle:'חיתוכים → m,b → התאמה → בדיקת מסיחים · רמות 4–7',
  rule:'כדי להתאים משוואה לא מסודרת לגרף, מסדרים אותה ל־`y=mx+b`. אחר כך בודקים שני מאפיינים בלתי תלויים: השיפוע `m` ונקודת החיתוך עם ציר `y`, `(0,b)`. התאמה לפי מאפיין אחד בלבד עלולה להטעות.',
  sourceRefs:['SOURCE_OF_TRUTH.md#8.2','SOURCE_OF_TRUTH.md#9','razpages:עמוד-434.html'],
  questions:[
    {
      id:'U11-P21-Q1',family:'U11',level:4,responseSpace:'mixed',
      sourceRefs:['razpages:עמוד-434.html'],
      stem:'בגרף הישר חותך את ציר `y` בנקודה `(0,6)` ואת ציר `x` בנקודה `(2,0)`. מצאו את `m` ואת `b`.',
      graph:{xMin:-1,xMax:4,yMin:-2,yMax:8,showCoordinates:true,ariaLabel:'ישר יורד החותך את ציר y ב-6 ואת ציר x ב-2',lines:[{through:[[0,6],[2,0]]}],points:[{x:0,y:6,label:'(0,6)'},{x:2,y:0,label:'(2,0)'}]},
      subparts:[
        {label:'א.',text:'`m=`',responseSpace:'short'},
        {label:'ב.',text:'`b=`',responseSpace:'short'}
      ]
    },
    {
      id:'U11-P21-Q2',family:'U03,U11',level:5,responseSpace:'choice-mark',
      stem:'איזו משוואה לא מסודרת מתארת את הגרף של שאלה 1? סדרו כל מועמד שנדרש לפני הבחירה.',
      choices:['`3x+y=6`','`3x-y=6`','`x+3y=6`','`6x+y=3`']
    },
    {
      id:'U11-P21-Q3',family:'U03,U11',level:6,responseSpace:'mixed',
      stem:'נתונה המשוואה `2x+y=4`. סדרו אותה, ואז בחרו איזה גרף מתאים לה.',
      panels:[
        {label:'א',graph:{xMin:-2,xMax:4,yMin:-4,yMax:6,showCoordinates:true,ariaLabel:'גרף א — ישר יורד החותך את ציר y ב-4',lines:[{through:[[0,4],[2,0]]}],points:[{x:0,y:4,label:'(0,4)'},{x:2,y:0,label:'(2,0)'}]}},
        {label:'ב',graph:{xMin:-2,xMax:4,yMin:-4,yMax:6,showCoordinates:true,ariaLabel:'גרף ב — ישר עולה החותך את ציר y ב-4',lines:[{through:[[0,4],[1,6]]}],points:[{x:0,y:4,label:'(0,4)'}]}}
      ],
      answerLabel:'המשוואה המסודרת והגרף המתאים:'
    },
    {
      id:'U11-P21-Q4',family:'U03,U11,U16',level:7,responseSpace:'lines-2',
      stem:'תלמיד טען שהחיתוך עם ציר `y` הוא `(0,-2)` במשוואה `x+2y=4`, מפני שמופיע בה המספר `2`. סדרו את המשוואה, מצאו את החיתוך הנכון והסבירו את הטעות.',
      answerLabel:'סידור ותיקון הטעות:'
    }
  ]
};
