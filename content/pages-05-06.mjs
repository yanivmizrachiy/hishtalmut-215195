// נתוני עמודים 5–6. נגזר ממקור האמת; HTML נבנה אוטומטית.
export const pages = [
  {
    page:5,
    chapter:1,
    kicker:'פרק 1 · ייצוגים של פונקציה קווית',
    title:'ממילים לטבלה, לביטוי ולגרף',
    subtitle:'משתנים → טבלה → ביטוי אלגברי → גרף · רמות 1–4',
    rule:'אותה פונקציה יכולה להופיע בארבעה ייצוגים: תיאור מילולי, טבלת ערכים, ביטוי אלגברי וגרף. בכל ייצוג נשמר אותו קשר בין `x` לבין `y`.',
    questions:[
      {
        id:'P15-P05-Q1', family:'P15', level:1, responseSpace:'mixed',
        stem:'בדוכן משחקים משלמים 12 ₪ דמי כניסה ועוד 4 ₪ לכל משחק.',
        subparts:[
          {label:'א.', text:'`x` מייצג את מספר ה־', responseSpace:'equation'},
          {label:'ב.', text:'`y` מייצג את ה־', responseSpace:'equation'},
          {label:'ג.', text:'יחידות המדידה של `y` הן', responseSpace:'short'}
        ]
      },
      {
        id:'P16-P05-Q2', family:'P16', level:2, responseSpace:'table-cell',
        stem:'השלימו את הטבלה לפי הסיפור.',
        table:{
          ariaLabel:'טבלת מספר משחקים ומחיר כולל',
          rows:[
            ['`x` — מספר משחקים','0','1','2','3','5'],
            ['`y` — מחיר כולל',{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}]
          ]
        }
      },
      {
        id:'P18-P05-Q3', family:'P18', level:3, responseSpace:'equation',
        stem:'כתבו ביטוי אלגברי שמתאים לסיפור ולטבלה.',
        answerLabel:'`y =`'
      },
      {
        id:'P17-P05-Q4', family:'P17', level:3, responseSpace:'graph-draw',
        stem:'סמנו את הנקודות המתאימות ל־`x=0,1,2,3,5` וחברו ביניהן.',
        graph:{
          xMin:0,xMax:6,yMin:0,yMax:48,
          equalUnitScale:false,xTick:1,yTick:8,
          showZeroOnX:true,showZeroOnY:true,showCoordinates:false,
          xLabel:'מספר משחקים',yLabel:'מחיר כולל (₪)',
          ariaLabel:'מערכת צירים ריקה למספר משחקים ולמחיר'
        }
      },
      {
        id:'P19-P05-Q5', family:'P19', level:4, responseSpace:'lines-2',
        stem:'הסבירו כיצד הסיפור, הטבלה, הביטוי והגרף מתארים את אותו קשר מתמטי.'
      }
    ]
  },
  {
    page:6,
    chapter:2,
    kicker:'פרק 2 · זיהוי פונקציה קווית',
    title:'קצב השתנות אחיד בטבלה',
    subtitle:'הפרשים → קצב קבוע → השלמה · רמות 1–4',
    rule:'קצב השתנות אחיד פירושו שכאשר `x` גדל באותו גודל, גם השינוי ב־`y` נשאר קבוע.',
    questions:[
      {
        id:'C02-S02-S03-P06-Q1', family:'C02,S02,S03', level:1, levelLabel:'רמות 1–3', responseSpace:'mixed',
        stem:'נתונה טבלת הערכים הבאה.',
        table:{rows:[
          ['`x`','1','2','3','4','5','6','7'],
          ['`g(x)`','4','7','10','13','16','19','22']
        ]},
        subparts:[
          {label:'א.', level:1, text:'בכמה גדל `x` בכל מעבר?', responseSpace:'short'},
          {label:'ב.', level:2, text:'בכמה גדל `g(x)` בכל מעבר?', responseSpace:'short'},
          {label:'ג.', level:2, text:'האם קצב ההשתנות אחיד? סמנו: כן / לא', responseSpace:'choice-mark', answerCount:2},
          {label:'ד.', level:3, text:'מהו קצב ההשתנות?', responseSpace:'short'}
        ]
      },
      {
        id:'S07-P06-Q2', family:'S07', level:3, responseSpace:'table-cell',
        stem:'השלימו את הערכים הבאים לפי אותו קצב.',
        table:{rows:[
          ['`x`','8','9','10','12'],
          ['`g(x)`',{answer:true},{answer:true},{answer:true},{answer:true}]
        ]}
      },
      {
        id:'C03-P06-Q3', family:'C03', level:4, responseSpace:'lines-2',
        stem:'הסבירו כיצד הטבלה מוכיחה שהקצב אחיד.'
      }
    ]
  }
];