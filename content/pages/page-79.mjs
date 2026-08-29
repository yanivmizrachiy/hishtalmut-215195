export const page={
  page:79,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — השלמת מקור',
  title:'קוראים שיפוע וגרף של תהליך',
  subtitle:'אומדן שיפוע → השוואת ישרים → מודל ריקון ומילוי',
  rule:'מן הגרף אפשר לקבוע את סימן השיפוע ואת גודלו היחסי. בתהליך קווי השיפוע מתאר את קצב השינוי בכל יחידת זמן.',
  sourceRefs:['drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4 — questions 2,7,22'],
  questions:[
    {
      id:'MZ30-P79-Q1',family:'MZ30',level:5,responseSpace:'choice-mark',
      stem:'במקור מסורטט ישר עולה החותך את ציר `y` בנקודה `(0,4)` והוא תלול יותר מישר ששיפועו `1`. סמנו את הטענה הנכונה על השיפוע.',
      choices:['`m>1`','`m=1`','`0<m<1`','`m<0`'],
      graph:{xMin:-5,xMax:3,yMin:-2,yMax:9,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'ישר עולה תלול החותך את ציר y בארבע ושיפועו גדול מאחד',lines:[{through:[[-2,0],[0,4]]}],points:[{x:0,y:4,label:'(0,4)'}]},
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, question 2 — choose whether the displayed line has slope greater than 1, equal to 1, between 0 and 1, or below 0',
      adaptation:'השרטוט שוחזר וקטורית מתוך תמונת המקור; נשמרת אותה קטגוריית שיפוע.'
    },
    {
      id:'MZ31-P79-Q2',family:'MZ31',level:6,responseSpace:'choice-mark',
      stem:'בגרף המקור מסורטטים שני ישרים עולים `f(x)` ו־`g(x)`. הישר `f` תלול יותר. סמנו את הטענה הנכונה על שיפוע `f`.',
      choices:['`m_f<0`','`0<m_f<1`','`m_f=1`','`m_f>1`'],
      graph:{xMin:-6,xMax:4,yMin:-1,yMax:12,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'שני ישרים עולים; f תלול יותר מ-g; g עובר דרך מינוס חמש אפס ואפס חמש',lines:[{through:[[-2,0],[0,8]]},{through:[[-5,0],[0,5]]}],points:[]},
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, question 7 — determine the slope category of f from a graph of f and g',
      adaptation:'כיוון ותלילות הישרים מן השרטוט המקורי נשמרו במנוע SVG.'
    },
    {
      id:'MZ32-P79-Q3',family:'MZ32',level:8,responseSpace:'mixed',
      stem:'בריכה מכילה בתחילת התהליך `200` מ״ק מים ומתרוקנת בקצב קבוע עד שהיא ריקה אחרי `10` שעות.',
      graph:{xMin:0,xMax:11,yMin:0,yMax:220,xTick:1,yTick:20,showCoordinates:false,ariaLabel:'גרף כמות מים יורד מאפס מאתיים לעשר אפס',lines:[{through:[[0,200],[10,0]]}],points:[{x:0,y:200,label:'A'},{x:10,y:0,label:'B'}]},
      subparts:[
        {text:'מה הייתה כמות המים לפני הפעלת המשאבה?',responseSpace:'short'},
        {text:'בכמה מ״ק מים התרוקנה הבריכה בכל שעה?',responseSpace:'short'},
        {text:'סמנו את הפונקציה המתארת את הכמות.',responseSpace:'choice-mark',choices:['`y=-20x+200`','`y=-200x+10`','`y=20x+200`','`y=200x+10`']},
        {text:'לאחר שהבריכה התרוקנה החלו למלא אותה בקצב `25` מ״ק לשעה, אך משאבת הריקון המשיכה לפעול. כמה מים יהיו בבריכה כעבור `3\\frac{1}{2}` שעות?',responseSpace:'lines-4'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, question 22 — pool empties from 200 m³ to 0 in 10 hours; choose y=-20x+200; then fill at 25 m³/h while drain remains on for 3.5 hours',
      adaptation:'כל נתוני המקור נשמרו; השבר המעורב 3½ נכתב ב-KaTeX תקין.'
    }
  ]
};
