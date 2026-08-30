export const page={
  page:144,
  chapter:30,
  kicker:'ייצוג תופעות · משימת Drive מסכמת',
  title:'קובי — משכר מילולי לייצוג אלגברי וטבלה',
  subtitle:'סיפור → y=mx+b → משמעות המשתנים → שיפוע אלגברי → טבלת ערכים → שיפוע מהטבלה',
  rule:'כאשר יש תשלום קבוע ועוד תשלום לכל יחידה, המספר הקבוע הוא `b` והתשלום לכל יחידה הוא השיפוע `m`. כאן מתקבלת הפונקציה `y=40x+18`.',
  sourceRefs:['drive:1gqgkJAe36V6BSW0HMJ7rUbfxbMHU5Aqz — משימה מסכמת שיפוע.pdf'],
  questions:[
    {
      id:'DRV14-P144-Q1',family:'W01,E01,T01',level:5,responseSpace:'mixed',
      stem:'קובי משתכר 40 שקלים לכל שעת עבודה, ובכל יום עבודה מקבל בנוסף 18 שקלים עבור הוצאות נסיעה. נסמן ב־`x` את מספר שעות העבודה וב־`y` את השכר הכולל באותו יום, כולל הוצאות הנסיעה.',
      sourceRef:'drive:1gqgkJAe36V6BSW0HMJ7rUbfxbMHU5Aqz — משימה מסכמת שיפוע.pdf; הייצוגים המילולי, האלגברי והטבלאי מן העמוד המקורי (סעיפים 1–3)',
      adaptation:'הנתונים 40 שקלים לשעה ו־18 שקלים נסיעה נשמרו בדיוק. שאלת השיפוע מן הייצוג האלגברי וזיהוי נקודה מן הטבלה נשמרו מן המקור. המשימה המקורית פוצלה לשני עמודי A4 כדי להשאיר מרחב עבודה אמיתי; הייצוג הגרפי מופיע בעמוד הבא. נוסף סעיף בדיקה עצמית (הצבה בנוסחה ואימות מול הטבלה) כפעילות פדגוגית — אין בו נתונים חדשים מעבר למקור.',
      table:{ariaLabel:'טבלת שעות עבודה ושכר כולל של קובי',rows:[['x — שעות',0,1,2,3,4,5,6],['y — שכר כולל',{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true},{answer:true}]]},
      subparts:[
        {label:'א.',text:'כתבו ייצוג אלגברי המתאר את הקשר בין מספר שעות העבודה לבין השכר הכולל.',responseSpace:'equation'},
        {label:'ב.',text:'מה מסמל `x`? ומה מסמל `y`?',responseSpace:'lines-2'},
        {label:'ג.',text:'מהו השיפוע של הפונקציה מתוך הייצוג האלגברי?',responseSpace:'short'},
        {label:'ד.',text:'השלימו את טבלת הערכים שלמעלה.',responseSpace:'short'},
        {label:'ה.',text:'מהו ההפרש הקבוע בערכי `x` בין עמודות סמוכות? ומהו ההפרש הקבוע בערכי `y`?',responseSpace:'lines-2'},
        {label:'ו.',text:'בחרו עמודה מן הטבלה וכתבו את הנקודה `(x,y)` המתאימה לה.',responseSpace:'short'},
        {label:'ז.',text:'מצאו את השיפוע מתוך טבלת הערכים בעזרת `m=\\frac{\\Delta y}{\\Delta x}`. הראו את החישוב.',responseSpace:'full-work'},
        {label:'ח.',text:'כתבו במילים מה משמעותו של השיפוע בסיפור של קובי.',responseSpace:'lines-2'},
        {label:'ט.',text:'בדיקה עצמית: הציבו `x=4` בנוסחה שכתבתם, חשבו את `y`, ובדקו שהערך מתאים לטבלה.',responseSpace:'full-work'}
      ],
      mathModel:{standard:{A:-40,B:1,C:18},expected:{m:40,b:18},probes:[{point:[0,18],onLine:true},{point:[1,58],onLine:true},{point:[6,258],onLine:true}]}
    }
  ]
};
