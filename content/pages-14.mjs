// עמוד 14 — נגזר ממקור האמת וממקורות razpages; HTML נבנה אוטומטית.
export const pages = [
  {
    page:14,
    chapter:7,
    kicker:'פרק 7 · הצורה y=mx+b',
    title:'מה מספרים m ו-b?',
    subtitle:'זיהוי פרמטרים → חיתוך עם ציר y → כיוון → שאלה הפוכה → תיקון טעות · רמות 1–6',
    rule:'משוואה של ישר היא `y=mx+b`. `m` הוא השיפוע. `b` הוא המספר החופשי, והוא מייצג את נקודת החיתוך עם ציר `y`: `(0,b)`.',
    sourceRefs:['razpages:עמוד-430.html','razpages:עמוד-431.html'],
    questions:[
      {
        id:'E01-P14-Q1',family:'E01',level:1,responseSpace:'table-cell',
        stem:'השלימו את ערכי `m` ו-`b` בכל משוואה.',
        table:{rows:[
          ['המשוואה','`m`','`b`'],
          ['`y=3x+4`',{answer:true},{answer:true}],
          ['`y=-x+5`',{answer:true},{answer:true}],
          ['`y=2x`',{answer:true},{answer:true}],
          ['`y=-4`',{answer:true},{answer:true}]
        ]}
      },
      {
        id:'E02-P14-Q2',family:'E02',level:2,responseSpace:'mixed',
        stem:'נתונה הפונקציה `y=-2x+3`.',
        subparts:[
          {label:'א.',text:'מהו השיפוע `m`?',responseSpace:'short'},
          {label:'ב.',text:'מהו המספר החופשי `b`?',responseSpace:'short'},
          {label:'ג.',text:'מהי נקודת החיתוך עם ציר `y`?',responseSpace:'equation'}
        ]
      },
      {
        id:'E03-M03-P14-Q3',family:'E03,M03',level:3,responseSpace:'mixed',
        stem:'הישר `y=\\frac{1}{2}x-2` נתון.',
        subparts:[
          {label:'א.',text:'האם הגרף עולה, יורד או קבוע?',responseSpace:'equation'},
          {label:'ב.',text:'כתבו את נקודת החיתוך שלו עם ציר `y`.',responseSpace:'equation'},
          {label:'ג.',text:'הסבירו בקצרה איזה פרמטר קבע את הכיוון ואיזה פרמטר קבע את החיתוך.',responseSpace:'lines-2'}
        ]
      },
      {
        id:'E04-P14-Q4',family:'E04',level:5,responseSpace:'mixed',
        stem:'בנו משוואה של ישר ששיפועו `m=-3` ונקודת החיתוך שלו עם ציר `y` היא `(0,4)`.',
        subparts:[
          {label:'א.',text:'כתבו את ערך `b`.',responseSpace:'short'},
          {label:'ב.',text:'כתבו את משוואת הישר בצורה `y=mx+b`.',responseSpace:'equation'}
        ]
      },
      {
        id:'E05-P14-Q5',family:'E05',level:6,responseSpace:'lines-4',
        stem:'תלמיד כתב שלפונקציה `y=5-2x` מתקבלים `m=5` ו-`b=-2`. הסבירו את הטעות, כתבו את הערכים הנכונים של `m,b`, וציינו את נקודת החיתוך עם ציר `y`.'
      }
    ]
  }
];
