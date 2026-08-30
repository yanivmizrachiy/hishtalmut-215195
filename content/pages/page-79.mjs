export const page={
  page:79,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — השלמת מקור',
  title:'מציאת שיפוע מגרף',
  subtitle:'אומדן חזותי → השוואת תלילות',
  rule:'מן הגרף אפשר לקבוע את סימן השיפוע ואת גודלו היחסי עוד לפני חישוב מדויק: ישר עולה הוא בעל שיפוע חיובי, וככל שהוא תלול יותר באותו קנה מידה — `|m|` גדול יותר.',
  sourceRefs:['drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4 — questions 2,7'],
  questions:[
    {
      id:'MZ30-P79-Q1',family:'MZ30',level:5,responseSpace:'choice-mark',
      stem:'במקור מסורטט ישר עולה החותך את ציר `y` בנקודה `(0,4)` והוא תלול יותר מישר ששיפועו `1`. סמנו את הטענה הנכונה על השיפוע.',
      choices:['`m>1`','`m=1`','`0<m<1`','`m<0`'],
      graph:{xMin:-5,xMax:3,yMin:-2,yMax:9,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'ישר עולה תלול החותך את ציר y בארבע ושיפועו גדול מאחד',lines:[{through:[[-2,0],[0,4]]}],points:[{x:0,y:4}]},
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, question 2 — choose whether the displayed line has slope greater than 1, equal to 1, between 0 and 1, or below 0',
      adaptation:'השרטוט שוחזר וקטורית מתוך תמונת המקור; נשמרת אותה קטגוריית שיפוע.'
    },
    {
      id:'MZ31-P79-Q2',family:'MZ31',level:6,responseSpace:'mixed',
      stem:'בגרף המקור מסורטטים שני ישרים עולים `f(x)` ו־`g(x)`. הישר `f` תלול יותר.',
      graph:{xMin:-6,xMax:4,yMin:-1,yMax:12,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'שני ישרים עולים; f תלול יותר מ-g; g עובר דרך מינוס חמש אפס ואפס חמש',lines:[{through:[[-2,0],[0,8]]},{through:[[-5,0],[0,5]]}],points:[]},
      subparts:[
        {text:'סמנו את הטענה הנכונה על שיפוע `f`.',responseSpace:'choice-mark',choices:['`m_f<0`','`0<m_f<1`','`m_f=1`','`m_f>1`']},
        {text:'הסבירו במשפט אחד כיצד התלילות של `f` תומכת בבחירה שלכם.',responseSpace:'lines-2'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, question 7 — determine the slope category of f from a graph of f and g',
      adaptation:'כיוון ותלילות הישרים מן השרטוט המקורי נשמרו במנוע SVG; נוסף נימוק קצר כדי לנצל את שטח הדף ללמידה ולא לרווח מלאכותי.'
    }
  ]
};
