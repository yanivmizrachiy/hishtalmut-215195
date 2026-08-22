export const page={
  page:41,
  chapter:13,
  kicker:'פרק 13 · מציאת משוואת ישר על ידי שתי נקודות',
  title:'משוואות צלעות משולש',
  subtitle:'שאלת מקור אמיתית · שלושה ישרים משלוש זוגות נקודות',
  rule:'במשולש, כל צלע היא ישר שנקבע על ידי שני קדקודים. עובדים צלע־צלע: בוחרים את שני הקדקודים המתאימים, מחשבים שיפוע, מוצאים `b` וכותבים את משוואת הישר.',
  sourceRefs:['razpages:עמוד-455.html'],
  questions:[
    {
      id:'Q12-P41-Q1',family:'Q12,S11',level:6,responseSpace:'lines-2',
      stem:'קדקודי המשולש הם `A=(2,8)`, `B=(5,-4)`, `C=(-3,-12)`. מצאו את משוואת הצלע `AB`.',
      sourceRef:'razpages:עמוד-455.html — מצאו משוואות צלעות המשולש ABC; תת־משימה AB עבור A(2,8), B(5,-4), C(-3,-12)',
      adaptation:'השאלה המקורית פוצלה לצלעות נפרדות כדי לתת מקום פתרון מלא; הנתונים נשמרו',
      mathModel:{standard:{A:4,B:1,C:16},expected:{m:-4,b:16,xIntercept:4},probes:[{point:[2,8],onLine:true},{point:[5,-4],onLine:true}]}
    },
    {
      id:'Q12-P41-Q2',family:'Q12,S11',level:6,responseSpace:'lines-2',
      stem:'עבור אותם קדקודים, מצאו את משוואת הצלע `BC`.',
      sourceRef:'razpages:עמוד-455.html — אותה שאלת משולש; תת־משימה BC עבור B(5,-4), C(-3,-12)',
      adaptation:'פיצול של אותה משימת מקור; הנתונים נשמרו',
      mathModel:{standard:{A:-1,B:1,C:-9},expected:{m:1,b:-9,xIntercept:9},probes:[{point:[5,-4],onLine:true},{point:[-3,-12],onLine:true}]}
    },
    {
      id:'Q12-P41-Q3',family:'Q12,S11',level:7,responseSpace:'lines-4',
      stem:'עבור אותם קדקודים, מצאו את משוואת הצלע `CA`. לאחר מכן בדקו האם היא עוברת בראשית הצירים.',
      sourceRef:'razpages:עמוד-455.html — אותה שאלת משולש; תת־משימה CA עבור C(-3,-12), A(2,8)',
      adaptation:'פיצול של אותה משימת מקור והוספת בדיקת־מסקנה ישירה מן המשוואה; הנתונים המקוריים נשמרו',
      mathModel:{standard:{A:-4,B:1,C:0},expected:{m:4,b:0,xIntercept:0},probes:[{point:[-3,-12],onLine:true},{point:[2,8],onLine:true},{point:[0,0],onLine:true}]}
    }
  ]
};
