// נתוני עמודים 7–10 ועמודים 13–15. נגזר ממקור האמת; HTML נבנה אוטומטית.
export const pages = [
  {
    page:7,
    chapter:2,
    kicker:'פרק 2 · זיהוי פונקציה קווית',
    title:'איך מזהים פונקציה קווית?',
    subtitle:'גרף ישר → קצב אחיד → זיהוי בין מסיחים · רמות 1–5',
    rule:'פונקציה קווית מתאפיינת בקצב השתנות אחיד, והגרף שלה הוא קו ישר.',
    questions:[
      { id:'C01-P07-Q1', family:'C01', level:1, responseSpace:'choice-mark', stem:'איזה גרף מתאר פונקציה קווית? סמנו א או ב.', panels:[{label:'א', graph:{xMin:-2,xMax:2,yMin:-2,yMax:2,showCoordinates:false,ariaLabel:'גרף א — ישר',lines:[{through:[[-2,-1.5],[2,1.5]]}]}},{label:'ב', graph:{xMin:-2,xMax:2,yMin:-2,yMax:2,showCoordinates:false,ariaLabel:'גרף ב — עקומה',quadratics:[{a:-0.7,h:0,k:1.5}]}}], answerLabel:'תשובה:' },
      { id:'C03-P07-Q2', family:'C03', level:2, responseSpace:'choice-mark', stem:'באיזו טבלה קצב ההשתנות אחיד?', panels:[{label:'א',table:{rows:[['`x`','0','1','2','3'],['`y`','2','5','8','11']]}},{label:'ב',table:{rows:[['`x`','0','1','2','3'],['`y`','2','5','9','14']]}}], answerLabel:'תשובה:' },
      { id:'C04-P07-Q3', family:'C04', level:4, responseSpace:'full-work', stem:'האם הטבלה הבאה מתארת קצב השתנות אחיד? שימו לב שצעדי `x` אינם שווים.', table:{rows:[['`x`','0','2','5','9'],['`y`','1','5','11','19']]}, answerLabel:'דרך ונימוק:' },
      { id:'C05-P07-Q4', family:'C05', level:5, responseSpace:'choice-mark', stem:'סמנו את הביטויים שיכולים לתאר פונקציה קווית.', choices:['`y=3x+2`','`y=x^2+1`','`y=-2x`','`y=7`'] }
    ]
  },
  {
    page:8, chapter:3, kicker:'פרק 3 · אפיון של ישר', title:'עולה, יורד או קבוע', subtitle:'גרף → טבלה → קשר לשינוי · רמות 1–5', rule:'כאשר `x` גדל: אם `y` גדל — הפונקציה עולה; אם `y` קטן — הפונקציה יורדת; ואם `y` אינו משתנה — הפונקציה קבועה.',
    questions:[
      { id:'M01-P08-Q1', family:'M01', level:1, responseSpace:'mixed', panelsColumns:3, stem:'כתבו מתחת לכל גרף: עולה, יורדת או קבועה.', panels:[{graph:{xMin:-2,xMax:2,yMin:-2,yMax:2,showCoordinates:false,ariaLabel:'ישר עולה',lines:[{through:[[-2,-1.5],[2,1.5]]}]},responseSpace:'equation'},{graph:{xMin:-2,xMax:2,yMin:-2,yMax:2,showCoordinates:false,ariaLabel:'ישר יורד',lines:[{through:[[-2,1.5],[2,-1.5]]}]},responseSpace:'equation'},{graph:{xMin:-2,xMax:2,yMin:-2,yMax:2,showCoordinates:false,ariaLabel:'ישר קבוע',lines:[{through:[[-2,1],[2,1]]}]},responseSpace:'equation'}] },
      { id:'M02-P08-Q2', family:'M02', level:2, responseSpace:'mixed', stem:'קבעו לפי כל טבלה אם הפונקציה עולה, יורדת או קבועה.', panels:[{table:{rows:[['`x`','0','1','2','3'],['`y`','10','7','4','1']]},answerLabel:'סוג:',responseSpace:'short'},{table:{rows:[['`x`','-1','0','1','2'],['`y`','5','5','5','5']]},answerLabel:'סוג:',responseSpace:'short'}] },
      { id:'M04-P08-Q3', family:'M04', level:3, responseSpace:'lines-2', stem:'השלימו במילים: כאשר פונקציה קווית עולה, בכל פעם ש־`x` גדל גם `y` ________. כאשר היא יורדת, `y` ________.' },
      { id:'M05-P08-Q4', family:'M05', level:5, responseSpace:'mixed', stem:'נתונה הנקודה `A=(1,2)`. כתבו נקודה נוספת כך שהישר העובר דרך שתי הנקודות יהיה:', subparts:[{label:'א.',text:'עולה:',responseSpace:'equation'},{label:'ב.',text:'יורד:',responseSpace:'equation'},{label:'ג.',text:'קבוע:',responseSpace:'equation'}] }
    ]
  },
  {
    page:9, chapter:4, kicker:'פרק 4 · משמעות השיפוע', title:'מה אומר השיפוע?', subtitle:'שינוי ב־y כאשר x גדל ב־1 · רמות 1–4', rule:'השיפוע הוא מספר. משמעות השיפוע: השינוי בערך `y` בכל פעם שערך `x` גדל ב־1.',
    questions:[
      { id:'S02-P09-Q1',family:'S02',level:1,responseSpace:'short',stem:'בכל פעם ש־`x` גדל ב־1, ערך `y` גדל ב־7.',answerLabel:'השיפוע הוא' },
      { id:'S02-P09-Q2',family:'S02',level:2,responseSpace:'mixed',stem:'השלימו לפי הטבלה.',table:{rows:[['`x`','0','1','2','3','4'],['`y`','5','8','11','14','17']]},subparts:[{label:'א.',text:'בכל פעם ש־`x` גדל ב־1, `y` גדל ב־',responseSpace:'short'},{label:'ב.',text:'לכן השיפוע הוא',responseSpace:'short'}] },
      { id:'S01-S02-P09-Q3',family:'S01,S02',level:3,responseSpace:'mixed',stem:'בכל פעם ש־`x` גדל ב־1, ערך `y` קטן ב־4.',subparts:[{label:'א.',text:'האם השיפוע חיובי, שלילי או אפס?',responseSpace:'equation'},{label:'ב.',text:'השיפוע הוא',responseSpace:'short'}] },
      { id:'S06-P09-Q4',family:'S06',level:4,responseSpace:'table-cell',stem:'נתון שהשיפוע הוא `m=-2`. השלימו את הטבלה.',table:{rows:[['`x`','0','1','2','3','4'],['`y`','9',{answer:true},{answer:true},{answer:true},{answer:true}]]} },
      { id:'S18-P09-Q5',family:'S18',level:4,responseSpace:'lines-2',stem:'הסבירו במילים מה משמעות השיפוע `m=-2` בטבלה של שאלה 4.' }
    ]
  },
  {
    page:10, chapter:5, kicker:'פרק 5 · מציאת שיפוע', title:'מציאת שיפוע מטבלה', subtitle:'צעדי x של 1 → צעדים גדולים → צעדים לא אחידים · רמות 2–6', rule:'כדי למצוא שיפוע מטבלה בודקים את השינוי ב־`y` ביחס לשינוי ב־`x`. מתחילים מטבלאות שבהן `x` גדל ב־1, ורק אחר כך עוברים לצעדים אחרים.',
    questions:[
      { id:'S03-P10-Q1',family:'S03',level:2,responseSpace:'mixed',stem:'מצאו את השיפוע.',table:{rows:[['`x`','-1','0','1','2'],['`y`','2','5','8','11']]},subparts:[{label:'א.',text:'בכל פעם ש־`x` גדל ב־1, `y` משתנה ב־',responseSpace:'short'},{label:'ב.',text:'לכן `m=`',responseSpace:'short'}] },
      { id:'S04-P10-Q2',family:'S04',level:4,responseSpace:'full-work',stem:'כאן `x` גדל בכל פעם ב־2. מצאו את השיפוע והציגו דרך.',table:{rows:[['`x`','0','2','4','6'],['`y`','1','9','17','25']]},answerLabel:'דרך:' },
      { id:'S05-P10-Q3',family:'S05',level:5,responseSpace:'full-work',stem:'צעדי `x` אינם שווים. בדקו כמה זוגות עוקבים וקבעו את השיפוע.',table:{rows:[['`x`','1','3','6','10'],['`y`','4','10','19','31']]},answerLabel:'דרך:' },
      { id:'S08-P10-Q4',family:'S08',level:6,responseSpace:'lines-4',stem:'האם הנתונים הבאים יכולים להשתייך לפונקציה קווית אחת? נמקו.',table:{rows:[['`x`','0','2','5','8'],['`y`','2','8','17','25']]},answerLabel:'נימוק:' }
    ]
  },
  {
    page:13, chapter:6, kicker:'פרק 6 · מציאת שיפוע על ידי שתי נקודות', title:'שיפוע משתי נקודות', subtitle:'שתי נקודות מפורשות → נקודות מהגרף → f(a),f(b) → שינוי הפוך · רמות 3–6', rule:'אם `A=(x_1,y_1)` ו־`B=(x_2,y_2)`, אז `m=\\frac{y_2-y_1}{x_2-x_1}`. חשוב לחסר את ערכי `x` ואת ערכי `y` באותו סדר.',
    questions:[
      { id:'S11-P13-Q1',family:'S11',level:3,responseSpace:'mixed',stem:'נתונות הנקודות `A=(1,2)` ו־`B=(4,8)`. מצאו את השיפוע בשלושה צעדים.',subparts:[{label:'א.',text:'`\\Delta x = 4-1 =`',responseSpace:'short'},{label:'ב.',text:'`\\Delta y = 8-2 =`',responseSpace:'short'},{label:'ג.',text:'לכן `m=\\frac{\\Delta y}{\\Delta x}=`',responseSpace:'equation'}] },
      { id:'S12-P13-Q2',family:'S12',level:4,responseSpace:'full-work',stem:'קראו מן הגרף את שיעורי הנקודות `A` ו־`B`, ואז חשבו את השיפוע והציגו דרך.',graph:{xMin:-4,xMax:4,yMin:-4,yMax:7,showCoordinates:false,ariaLabel:'ישר עם שתי נקודות מסומנות A ו-B שמהן יש לקרוא את השיעורים',lines:[{through:[[-2,-1],[2,5]]}],points:[{x:-2,y:-1,label:'A'},{x:2,y:5,label:'B'}]},answerLabel:'דרך:' },
      { id:'S13-P13-Q3',family:'S13',level:5,responseSpace:'full-work',stem:'נתון `f(-1)=5` ו־`f(3)=-1`. כתבו תחילה את שתי הנקודות המתאימות, ואז מצאו את השיפוע.',answerLabel:'נקודות ודרך:' },
      { id:'S14-P13-Q4',family:'S14',level:6,responseSpace:'lines-2',stem:'ידוע ששיפוע הישר הוא `m=-\\frac{3}{2}` וש־`\\Delta x=6`. מצאו את `\\Delta y` והסבירו מה אומר הסימן של התוצאה.',answerLabel:'דרך:' }
    ]
  },
  {
    page:14, chapter:7, kicker:'פרק 7 · הצורה y=mx+b', title:'מה אומרים m ו-b?', subtitle:'זיהוי ישיר → מקדם סמוי → חיתוך עם ציר y → השוואת גרפים · רמות 1–4', rule:'משוואה של ישר היא `y=mx+b`. `m` הוא השיפוע. `b` הוא המספר החופשי, והוא מייצג את נקודת החיתוך עם ציר `y`: `(0,b)`.', sourceRefs:['SOURCE_OF_TRUTH.md#9','razpages:עמוד-429.html','razpages:עמוד-430.html'],
    questions:[
      { id:'E01-P14-Q1',family:'E01',level:1,responseSpace:'mixed',sourceRefs:['razpages:עמוד-430.html'],stem:'נתונה המשוואה `y=3x+5`. זהו את שני הפרמטרים.',subparts:[{label:'א.',text:'`m=`',responseSpace:'short'},{label:'ב.',text:'`b=`',responseSpace:'short'}] },
      { id:'E02-P14-Q2',family:'E02',level:2,responseSpace:'mixed',sourceRefs:['razpages:עמוד-430.html'],stem:'נתונה המשוואה `y=-x-2`. שימו לב שלפני `x` לא כתוב מספר מפורש.',subparts:[{label:'א.',text:'מהו `m`?',responseSpace:'short'},{label:'ב.',text:'מהו `b`?',responseSpace:'short'},{label:'ג.',text:'איזה מספר כפול `x` שווה ל־`-x`?',responseSpace:'short'}] },
      { id:'E03-P14-Q3',family:'E03',level:3,responseSpace:'mixed',sourceRefs:['SOURCE_OF_TRUTH.md#9','razpages:עמוד-430.html'],stem:'נתון הישר `y=2x-4`.',subparts:[{label:'א.',text:'כתבו את נקודת החיתוך עם ציר `y`.',responseSpace:'equation'},{label:'ב.',text:'האם הישר עולה או יורד? נמקו לפי הסימן של `m`.',responseSpace:'lines-2'}] },
      { id:'E04-P14-Q4',family:'E04',level:4,responseSpace:'lines-2',sourceRefs:['razpages:עמוד-429.html'],stem:'בגרף מופיעים שלושה ישרים: `y=x-1`, `y=2x-1`, `y=3x-1`. מה זהה בשלוש המשוואות ובשלושת הגרפים, ומה משתנה?',graph:{xMin:-2,xMax:3,yMin:-3,yMax:6,showCoordinates:false,ariaLabel:'שלושה ישרים בעלי אותו חיתוך עם ציר y ושיפועים 1, 2 ו-3',lines:[{through:[[0,-1],[1,0]]},{through:[[0,-1],[1,1]]},{through:[[0,-1],[1,2]]}],points:[{x:0,y:-1,label:'(0,-1)'}]},answerLabel:'הסבר:' }
    ]
  },
  {
    page:15, chapter:7, kicker:'פרק 7 · הצורה y=mx+b', title:'מחברים בין m, b והגרף', subtitle:'כיוון הישר → מקרים מיוחדים → גרף למשוואה · רמות 2–5', rule:'`m` קובע את כיוון וקצב השינוי של הישר. `b` קובע את נקודת החיתוך עם ציר `y`: `(0,b)`. כאשר `b=0` הגרף עובר בראשית; כאשר `m=0` הישר קבוע ואופקי.', sourceRefs:['SOURCE_OF_TRUTH.md#9','razpages:עמוד-431.html','razpages:עמוד-432.html'],
    questions:[
      { id:'E05-P15-Q1',family:'E05',level:2,responseSpace:'mixed',sourceRefs:['razpages:עמוד-431.html'],stem:'נתונה הפונקציה `y=-3x-1`.',subparts:[{label:'א.',text:'`m=`',responseSpace:'short'},{label:'ב.',text:'`b=`',responseSpace:'short'},{label:'ג.',text:'הגרף עולה / יורד / קבוע?',responseSpace:'short'},{label:'ד.',text:'נקודת החיתוך עם ציר `y` היא',responseSpace:'equation'}] },
      { id:'E06-P15-Q2',family:'E06',level:3,responseSpace:'mixed',sourceRefs:['razpages:עמוד-431.html'],stem:'נתונה הפונקציה `y=3x`.',subparts:[{label:'א.',text:'מהו `b`?',responseSpace:'short'},{label:'ב.',text:'מהי נקודת החיתוך עם ציר `y`?',responseSpace:'equation'},{label:'ג.',text:'השלימו: הגרף עובר ב־',responseSpace:'equation'}] },
      { id:'E07-P15-Q3',family:'E07',level:3,responseSpace:'mixed',sourceRefs:['razpages:עמוד-431.html'],stem:'נתונה הפונקציה הקבועה `y=-2`.',subparts:[{label:'א.',text:'`m=`',responseSpace:'short'},{label:'ב.',text:'`b=`',responseSpace:'short'},{label:'ג.',text:'הגרף עולה / יורד / קבוע?',responseSpace:'short'},{label:'ד.',text:'נקודת החיתוך עם ציר `y` היא',responseSpace:'equation'}] },
      { id:'E08-P15-Q4',family:'E08',level:5,responseSpace:'full-work',sourceRefs:['razpages:עמוד-432.html'],stem:'הישר בגרף עובר דרך `(2,3)` ו־`(4,7)`. מצאו את `m`, קבעו את `b` בעזרת החיתוך עם ציר `y`, וכתבו את משוואת הישר.',graph:{xMin:-1,xMax:5,yMin:-2,yMax:8,showCoordinates:true,ariaLabel:'ישר העובר דרך הנקודות 2,3 ו-4,7 וחוצה את ציר y במינוס 1',lines:[{through:[[2,3],[4,7]]}],points:[{x:2,y:3,label:'(2,3)'},{x:4,y:7,label:'(4,7)'},{x:0,y:-1,label:'(0,-1)'}]},answerLabel:'דרך ומשוואה:' }
    ]
  }
];