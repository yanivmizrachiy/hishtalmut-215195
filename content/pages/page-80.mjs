export const page={
  page:80,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — השלמת מקור',
  title:'ייצוגים, שטח ופונקציות דרך נקודה',
  subtitle:'מתאים / לא מתאים → משולש → בונים פונקציות',
  rule:'אותה פונקציה קווית יכולה להופיע בטבלה, במשוואה ובגרף. דרך נקודה נתונה עוברים אינסוף ישרים, ולכן אפשר לכתוב יותר מפונקציה קווית אחת המתאימה לה.',
  sourceRefs:['drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4 — questions 24,28,29,32'],
  questions:[
    {
      id:'MZ33-P80-Q1',family:'MZ33',level:6,responseSpace:'mixed',
      stem:'דני התבקש לכתוב ייצוגים לפונקציה `y=3x`. קבעו לגבי כל ייצוג אם הוא מתאים לפונקציה.',
      subparts:[
        {text:'טבלה שבה `x=1,2,3` והערכים הם `y=4,5,6`.',responseSpace:'choice-mark',choices:['מתאים','אינו מתאים']},
        {text:'המשוואה `y=3x`.',responseSpace:'choice-mark',choices:['מתאים','אינו מתאים']},
        {text:'גרף של ישר העובר בראשית וגם בנקודה `(1,3)`.',responseSpace:'choice-mark',choices:['מתאים','אינו מתאים']}
      ],
      graph:{xMin:-3,xMax:4,yMin:-8,yMax:10,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'ישר y שווה 3x העובר בראשית ובנקודה אחת שלוש',lines:[{through:[[0,0],[1,3]]}],points:[{x:0,y:0,label:'O'},{x:1,y:3,label:'(1,3)'}]},
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, question 24 — decide whether table, equation and graph representations match the rule y=3x',
      adaptation:'ייצוגי המקור הועברו ל-SVG וטקסט קנוני; נשמרת החלטת מתאים/לא מתאים לכל ייצוג.'
    },
    {
      id:'MZ34-P80-Q2',family:'MZ34',level:8,responseSpace:'mixed',
      stem:'במערכת הצירים מסורטט המשולש `ABC` עם `A(5,15)`, `B(2,0)`, `C(11,0)`.',
      graph:{xMin:0,xMax:13,yMin:0,yMax:17,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'משולש ABC עם A חמש חמש עשרה, B שתיים אפס, C אחת עשרה אפס',points:[{x:5,y:15,label:'A(5,15)'},{x:2,y:0,label:'B(2,0)'},{x:11,y:0,label:'C(11,0)'}],polyline:[[2,0],[5,15],[11,0],[2,0]]},
      subparts:[
        {text:'חשבו את שטח המשולש בעזרת הנתונים שבשרטוט והציגו דרך.',responseSpace:'geometry-work'},
        {text:'מהו שיפוע הישר העובר דרך `A` ו־`B`? נמקו.',responseSpace:'lines-2'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, question 28 — triangle A(5,15), B(2,0), C(11,0): area and slope AB',
      adaptation:'הקואורדינטות מן השרטוט המקורי נשמרו בדיוק.'
    },
    {
      id:'MZ35-P80-Q3',family:'MZ35',level:7,responseSpace:'mixed',
      stem:'נתונה הנקודה `A(1,3)`. כתבו שתי פונקציות קוויות שונות שהגרפים שלהן עוברים דרך `A`.',
      subparts:[
        {text:'פונקציה ראשונה:',responseSpace:'equation'},
        {text:'פונקציה שנייה:',responseSpace:'equation'},
        {text:'בדקו בהצבה ש־`x=1` נותן `y=3` בשתי הפונקציות.',responseSpace:'lines-2'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, question 29 — give two different linear functions whose graphs pass through A(1,3)',
      adaptation:'שתי דרישות המקור נשמרו ונוסף שלב בדיקה בלבד.'
    },
    {
      id:'MZ36-P80-Q4',family:'MZ36',level:6,responseSpace:'explanation',
      stem:'נתונות `f(x)=4x-8` ו־`g(x)=x+2`. האם גרפי הפונקציות מקבילים? נמקו בעזרת השיפועים.',
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, question 32 — decide whether f(x)=4x-8 is parallel to g(x)=x+2 and justify',
      adaptation:'נוסח המקור נשמר מתמטית; הנימוק מחייב השוואת שיפועים.'
    }
  ]
};
