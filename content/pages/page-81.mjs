export const page={
  page:81,
  chapter:25,
  kicker:'פרק 25 · שאלות מיצ״ב — השלמת מקור',
  title:'גרף, משוואה וקצב שינוי',
  subtitle:'בוחרים גרף → משחזרים משוואה → ממשיכים לפי קצב',
  rule:'בפונקציה קווית אותו קצב שינוי נשמר לכל ערכי x. שתי נקודות מספיקות כדי למצוא שיפוע ומשוואה.',
  sourceRefs:['drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4 — questions 34,35,36'],
  questions:[
    {
      id:'MZ37-P81-Q1',family:'MZ37',level:5,responseSpace:'choice-mark',
      stem:'נתונה הפונקציה `y=x-3`. איזה גרף מתאים לה?',
      panelsColumns:2,
      panels:[
        {label:'1',graph:{xMin:-4,xMax:5,yMin:-6,yMax:6,showCoordinates:false,ariaLabel:'ישר עולה בשיפוע אחד החותך את ציר y במינוס שלוש',lines:[{through:[[0,-3],[3,0]]}]}},
        {label:'2',graph:{xMin:-4,xMax:5,yMin:-6,yMax:6,showCoordinates:false,ariaLabel:'ישר עולה בשיפוע אחד החותך את ציר y בשלוש',lines:[{through:[[0,3],[-3,0]]}]}},
        {label:'3',graph:{xMin:-4,xMax:5,yMin:-6,yMax:6,showCoordinates:false,ariaLabel:'ישר יורד החותך את ציר y במינוס שלוש',lines:[{through:[[0,-3],[-3,0]]}]}},
        {label:'4',graph:{xMin:-4,xMax:5,yMin:-6,yMax:6,showCoordinates:false,ariaLabel:'ישר אופקי y שווה מינוס שלוש',lines:[{through:[[-4,-3],[5,-3]]}]}}
      ],
      choices:['גרף 1','גרף 2','גרף 3','גרף 4'],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, question 34 — choose the graph representing y=x-3',
      adaptation:'אפשרות היעד שומרת בדיוק שיפוע 1 וחיתוך y=-3; חלופות נבנו סביב שתי התכונות שהמקור בודק.'
    },
    {
      id:'MZ38-P81-Q2',family:'MZ38',level:7,responseSpace:'full-work',
      stem:'בגרף מסומנות הנקודות `A(-1,3)` ו־`B(2,9)`. מצאו את משוואת הישר והציגו דרך.',
      graph:{xMin:-4,xMax:5,yMin:-2,yMax:12,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'ישר דרך A מינוס אחת שלוש ו-B שתיים תשע',lines:[{through:[[-1,3],[2,9]]}],points:[{x:-1,y:3,label:'A(-1,3)'},{x:2,y:9,label:'B(2,9)'}]},
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, question 35 — graph with A(-1,3), B(2,9): find line equation and show work',
      adaptation:'שתי נקודות המקור נשמרו בדיוק והשרטוט הומר ל-SVG.'
    },
    {
      id:'MZ39-P81-Q3',family:'MZ39',level:8,responseSpace:'mixed',
      stem:'`f` היא פונקציה קווית. נתון `f(101)=6` ו־`f(102)=8`.',
      subparts:[
        {text:'קבעו אם הפונקציה עולה, יורדת או קבועה, ונמקו לפי קצב השינוי.',responseSpace:'lines-2'},
        {text:'השלימו: `f(106)=`',responseSpace:'short'},
        {text:'השלימו: `f(____)=0`',responseSpace:'short'},
        {text:'כתבו את הייצוג האלגברי של הפונקציה.',responseSpace:'equation'}
      ],
      sourceRef:'drive:1JBzDY_ntI7Or2mqAVT1secDAO1FVd2Q4, question 36 — f(101)=6, f(102)=8; identify direction and complete f(106) and the x for which f(x)=0',
      adaptation:'שני סעיפי המקור נשמרו; נוסף ייצוג אלגברי כסיכום של אותו קצב קבוע.'
    }
  ]
};
