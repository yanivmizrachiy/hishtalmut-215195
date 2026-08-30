export const page={
  page:86,
  chapter:27,
  kicker:'השלמת מקור · חיתוך ישרים כנקודת עיגון',
  title:'משוואת ישר ע"פ שיפוע ונקודה',
  subtitle:'מוצאים חיתוך → משתמשים בנקודה נוספת → כותבים משוואה',
  rule:'כאשר הישר המבוקש עובר דרך נקודת החיתוך של שני ישרים, פותרים תחילה את מערכת שתי המשוואות כדי למצוא את נקודת החיתוך. לאחר מכך משתמשים בנקודה הנוספת או בשיפוע הנתון כדי למצוא את משוואת הישר המבוקש.',
  sourceRefs:['razpages:עמוד-451.html','razpages:עמוד-452.html','razpages:עמוד-453.html','razpages:עמוד-454.html'],
  questions:[
    {
      id:'RZ451-Q4-P86-Q1',family:'Q05,E03',level:4,responseSpace:'lines-2',
      stem:'מצאו תחילה היכן הישר `y=-2x+5` פוגש את ציר `y`. דרך נקודה זו עובר ישר ששיפועו `-3`; מצאו את משוואתו.',
      sourceRef:'razpages:עמוד-451.html — שאלה 4: y=-2x+5, חיתוך עם ציר y, שיפוע -3',
      adaptation:'אחידות ניסוח וכתיב מתמטי בלבד; כל נתוני המקור נשמרו.',
      mathModel:{standard:{A:3,B:1,C:5},expected:{m:-3,b:5,xIntercept:[5,3]},probes:[{point:[0,5],onLine:true}]}
    },
    {
      id:'RZ452-Q2-P86-Q2',family:'S14,Q07',level:6,responseSpace:'lines-2',
      stem:'פתרו את המערכת `y=-3x-6`, `y=-2x+4`. הישר המבוקש עובר דרך פתרון המערכת וגם דרך `(-2,12)`; מצאו את משוואתו.',
      sourceRef:'razpages:עמוד-452.html — שאלה 2: חיתוך y=-3x-6 עם y=-2x+4 והנקודה (-2,12)',
      adaptation:'אחידות ניסוח בלבד; שתי המשוואות והנקודה נשמרו בדיוק.',
      mathModel:{standard:{A:3,B:2,C:18},expected:{m:[-3,2],b:9,xIntercept:6},probes:[{point:[-10,24],onLine:true},{point:[-2,12],onLine:true}]}
    },
    {
      id:'RZ452-Q3-P86-Q3',family:'S14,Q07',level:7,responseSpace:'lines-2',
      stem:'פתרו את המערכת `y=x+4`, `y=2x-4`. הישר המבוקש עובר דרך פתרון המערכת וגם דרך `(5,-4)`; מצאו את משוואתו.',
      sourceRef:'razpages:עמוד-452.html — שאלה 3: חיתוך y=x+4 עם y=2x-4 והנקודה (5,-4)',
      adaptation:'אחידות ניסוח בלבד; שתי המשוואות והנקודה נשמרו בדיוק.',
      mathModel:{standard:{A:-16,B:3,C:-92},expected:{m:[16,3],b:[-92,3],xIntercept:[23,4]},probes:[{point:[8,12],onLine:true},{point:[5,-4],onLine:true}]}
    },
    {
      id:'RZ453-Q4-P86-Q4',family:'S14,Q07',level:7,responseSpace:'lines-2',
      stem:'פתרו את המערכת `y=3x-5`, `y=x+7`. הישר המבוקש עובר דרך פתרון המערכת וגם דרך `(5,-3)`; מצאו את משוואתו.',
      sourceRef:'razpages:עמוד-453.html — שאלה 4: חיתוך y=3x-5 עם y=x+7 והנקודה (5,-3)',
      adaptation:'אחידות ניסוח בלבד; שתי המשוואות והנקודה נשמרו בדיוק.',
      mathModel:{standard:{A:-16,B:1,C:-83},expected:{m:16,b:-83,xIntercept:[83,16]},probes:[{point:[6,13],onLine:true},{point:[5,-3],onLine:true}]}
    },
    {
      id:'RZ454-Q4-P86-Q5',family:'S14,Q07',level:7,responseSpace:'lines-2',
      stem:'פתרו את המערכת `y=2x`, `y=-3x+10`. הישר המבוקש עובר דרך פתרון המערכת וגם דרך `(-1,-5)`; מצאו את משוואתו.',
      sourceRef:'razpages:עמוד-454.html — שאלה 4: חיתוך y=2x עם y=-3x+10 והנקודה (-1,-5)',
      adaptation:'אחידות ניסוח בלבד; שתי המשוואות והנקודה נשמרו בדיוק.',
      mathModel:{standard:{A:-3,B:1,C:-2},expected:{m:3,b:-2,xIntercept:[2,3]},probes:[{point:[2,4],onLine:true},{point:[-1,-5],onLine:true}]}
    }
  ]
};
