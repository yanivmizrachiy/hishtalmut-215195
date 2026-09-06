// Auto-migrated from the former legacy collection. Edit this page here from now on.
export const page = {
  page:5,
  chapter:1,
  kicker:'ייצוגים של פונקציה קווית',
  title:'ממילים לטבלה, לביטוי ולגרף',
  subtitle:'שאלת מקור: דלק → טבלה → ביטוי אלגברי → גרף · רמות 1–4',
  rule:'אותה פונקציה יכולה להופיע בארבעה ייצוגים: תיאור מילולי, טבלת ערכים, ביטוי אלגברי וגרף. בכל ייצוג נשמר אותו קשר בין `d` — כמות הדלק בליטרים — לבין `y` — העלות בשקלים.',
  sourceRefs:['jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-3-fuel-table-expression-graph','SOURCE_OF_TRUTH.md#7 — פרק 1: ייצוגים של פונקציה קווית'],
  questions:[
    {
      id:'P15-P16-P05-Q1',family:'P15,P16',level:1,responseSpace:'mixed',
      stem:'מחיר ליטר דלק הוא 7 שקלים. השלימו את הטבלה, סמנו את הנקודות במערכת הצירים ושרטטו את גרף העלות.',
      panelsColumns:2,
      panels:[
        {label:'טבלה',table:{ariaLabel:'טבלת כמות דלק ועלות לפי 7 שקלים לליטר',rows:[['`d` — ליטרים','0','5','10','20','30'],['`y` — עלות בשקלים',{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}]]}},
        {label:'גרף',graph:{xMin:0,xMax:35,yMin:0,yMax:245,equalUnitScale:false,xTick:5,yTick:35,showZeroOnX:true,showZeroOnY:true,showCoordinates:false,xLabel:'כמות דלק `d` (ליטרים)',yLabel:'עלות `y` (₪)',ariaLabel:'מערכת צירים ריקה לכמות דלק ולעלות'}}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 3, example 1a — fuel at 7 shekels per liter: create the quantity-cost table, plot the points and draw the graph',
      adaptation:'כל דרישות סעיף א נשמרו; הטבלה והגרף מוצגים זה לצד זה כדי לשמור על פריסת A4.'
    },
    {
      id:'P18-P05-Q3',family:'P18',level:3,responseSpace:'equation',
      stem:'בין 21:00 ל־06:00 נגבית עמלה קבועה של 2 שקלים בכל מילוי. כתבו ביטוי אלגברי לעלות של `d` ליטרים בשעות אלה.',
      answerLabel:'`y =`',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 3, example 1b — fuel at 7 shekels per liter plus a fixed 2-shekel fee; write the algebraic expression',
      adaptation:'נוסח המקור והנתונים המתמטיים נשמרו; y משמש לסימון העלות באופן עקבי עם הספר.'
    },
    {
      id:'P17-P19-P05-Q4',family:'P17,P19',level:4,responseSpace:'mixed',
      stem:'השלימו את הטבלה ושרטטו את הגרף המתארים את עלות מילוי הדלק בשעות שבהן נגבית העמלה הקבועה. בדקו שלכל כמות דלק מתאימה עלות יחידה.',
      panelsColumns:2,
      panels:[
        {label:'טבלה כולל עמלה',table:{ariaLabel:'טבלת כמות דלק ועלות עם עמלה קבועה של 2 שקלים',rows:[['`d` — ליטרים','0','5','10','20','30'],['`y` — עלות כולל עמלה',{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}]]}},
        {label:'גרף כולל עמלה',graph:{xMin:0,xMax:35,yMin:0,yMax:247,equalUnitScale:false,xTick:5,yTick:35,showZeroOnX:true,showZeroOnY:true,showCoordinates:false,xLabel:'כמות דלק `d` (ליטרים)',yLabel:'עלות `y` כולל עמלה (₪)',ariaLabel:'מערכת צירים ריקה לכמות דלק ולעלות כולל עמלה'}}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 3, example 1b — create the table, draw the graph with the fixed fee and note the single output for each input',
      adaptation:'כל דרישות סעיף ב נשמרו; הטבלה והגרף מוצגים זה לצד זה כדי לחסוך גובה ללא שינוי מתמטי.'
    }
  ]
};
