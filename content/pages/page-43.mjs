export const page={
  page:43,
  chapter:17,
  kicker:'פרק 17 · חיתוך בין שני ישרים',
  title:'נקודת החיתוך של שני ישרים',
  subtitle:'משווים ערכי y → מוצאים x → מוצאים y → כותבים זוג סדור',
  rule:'בנקודת החיתוך של שני ישרים יש לשני הישרים אותו ערך `x` ואותו ערך `y`. לכן משווים בין הביטויים של `y`, מוצאים את `x`, מציבים באחת המשוואות כדי למצוא את `y`, ובסוף כותבים את נקודת החיתוך כזוג סדור.',
  sourceRefs:['official:systems:2','official:systems:3','razpages:bank.json intersection-two-lines','SOURCE_OF_TRUTH.md#8'],
  questions:[
    {
      id:'X01-P43-Q1',family:'X01',level:2,responseSpace:'mixed',
      stem:'נתונים שני הישרים `y=3x-7` ו־`y=-2x+3`. בנקודת החיתוך ערכי ה־`y` שווים.',
      subparts:[
        {text:'כתבו את המשוואה שמתקבלת מהשוואת שני הביטויים של `y`.',responseSpace:'equation'},
        {text:'פתרו את המשוואה ומצאו את ערך `x` בנקודת החיתוך.',responseSpace:'lines-2'},
        {text:'הציבו את ערך `x` באחת ממשוואות הישרים ומצאו את ערך `y`.',responseSpace:'lines-2'},
        {text:'כתבו את נקודת החיתוך כזוג סדור.',responseSpace:'short'}
      ],
      sourceRef:'official:systems:3 — פתרון אלגברי של מערכת שתי משוואות קוויות; תרגיל קנוני מדורג',
      adaptation:'התרגיל מנוסח כשלבי השוואה, פתרון, הצבה וכתיבת זוג סדור בהתאם לרצף ההוראה של הפרויקט.',
      mathModel:{standard:{A:-3,B:1,C:-7},expected:{m:3,b:-7,xIntercept:[7,3]},probes:[{point:[2,-1],onLine:true}]}
    },
    {
      id:'X01-P43-Q2',family:'X01',level:3,responseSpace:'mixed',
      stem:'בדקו את התוצאה שמצאתם: הציבו את `x=2` בכל אחת משתי המשוואות.',
      subparts:[
        {text:'מהו ערך ה־`y` שמתקבל במשוואה `y=3x-7`?',responseSpace:'short'},
        {text:'מהו ערך ה־`y` שמתקבל במשוואה `y=-2x+3`?',responseSpace:'short'},
        {text:'הסבירו בקצרה מדוע השוויון בין שני ערכי ה־`y` מאשר שזו נקודת החיתוך.',responseSpace:'lines-2'}
      ],
      sourceRef:'official:systems:3 — בדיקת פתרון מערכת באמצעות הצבה בשתי המשוואות',
      adaptation:'שלב בקרה עצמית המחזק את משמעות נקודת החיתוך ולא רק את הפרוצדורה.'
    },
    {
      id:'X02-P43-Q3',family:'X02',level:4,responseSpace:'mixed',
      stem:'עכשיו מצאו את אותה נקודת חיתוך בדרך גרפית.',
      graph:{xMin:-1,xMax:5,yMin:-8,yMax:8,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'מערכת צירים לשרטוט שני הישרים y שווה 3x פחות 7 ו-y שווה מינוס 2x ועוד 3',points:[]},
      subparts:[
        {text:'שרטטו על אותה מערכת צירים את `y=3x-7` ואת `y=-2x+3`.',responseSpace:'graph-draw'},
        {text:'כתבו את נקודת החיתוך שקראתם מן הגרף כזוג סדור.',responseSpace:'short'},
        {text:'האם קיבלתם אותה נקודה כמו בדרך האלגברית?',responseSpace:'choice-mark',choices:['כן','לא']},
        {text:'היעזרו בגרף וכתבו את נקודת החיתוך של `y=3x-7` עם ציר `y`.',responseSpace:'short'},
        {text:'היעזרו בגרף וכתבו את נקודת החיתוך של `y=-2x+3` עם ציר `y`.',responseSpace:'short'},
        {text:'איזה משני הישרים מתאר פונקציה יורדת?',responseSpace:'short'},
        {text:'עבור אילו ערכי `x` הגרף של `y=3x-7` ממוקם מעל הגרף של `y=-2x+3`?',responseSpace:'short'}
      ],
      sourceRef:'official:systems:2 — פתרון מערכת באופן גרפי',
      adaptation:'הדרך הגרפית מוצבת לאחר הדרך האלגברית כדי להשוות בין שני הייצוגים.'
    },
    {
      id:'X01-P43-Q4',family:'X01',level:5,responseSpace:'lines-2',
      stem:'מצאו את נקודת החיתוך של הישרים `y=2x-1` ו־`y=-x+5`. הציגו דרך וכתבו את הנקודה כזוג סדור.',
      answerLabel:'דרך וזוג סדור:',
      sourceRef:'razpages:bank.json intersection-two-lines — מציאת נקודת חיתוך בהשוואת ביטויי y; מספרים שונו',
      adaptation:'וריאציה נוספת של מציאת נקודת חיתוך בדרך אלגברית; מספרים שונו.',
      mathModel:{standard:{A:-2,B:1,C:-1},expected:{m:2,b:-1,xIntercept:[1,2]},probes:[{point:[2,3],onLine:true}]}
    }
  ]
};
