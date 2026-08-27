export const page={
  page:34,
  chapter:10,
  kicker:'פרק 10 · שרטוט ישר ופונקציה קווית',
  title:'שרטוט ישר לפי שיפוע שברי',
  subtitle:'שיפוע שברי → מדרגת שיפוע → תיקון טעות · רמות 5–6',
  rule:'כאשר השיפוע שברי, נוח לבחור מדרגה של מספרים שלמים. למשל אם `m=1/2`, אפשר לבחור `Δx=2` ו־`Δy=1`. היחס חייב להישמר: `m=Δy/Δx`.',
  sourceRefs:['razpages:עמוד-449.html','data/graphing-family-map.md#D03'],
  questions:[
    {
      id:'D03-P34-Q1',family:'D03,S09',level:5,responseSpace:'mixed',
      stem:'נתונה הנקודה `R(-2,3)` והשיפוע `m=1/2`. בחרו מדרגת שיפוע ללא שברים, בנו נקודה נוספת ושרטטו.',
      graph:{xMin:-5,xMax:5,yMin:-1,yMax:7,showCoordinates:false,points:[{x:-2,y:3,label:'R'}],ariaLabel:'מערכת צירים ובה הנקודה R מינוס שתיים שלוש לשרטוט ישר ששיפועו חצי'},
      subparts:[
        {label:'א.',text:'השלימו מדרגה נוחה: `Δx=`',responseSpace:'short',answerCount:2,betweenAnswers:',  Δy='},
        {label:'ב.',text:'כתבו נקודה נוספת מתאימה:',responseSpace:'equation'}
      ],
      mathModel:{standard:{A:-1,B:2,C:8},expected:{m:[1,2],b:4,xIntercept:-8},probes:[{point:[-2,3],onLine:true},{point:[0,4],onLine:true}]}
    },
    {
      id:'D03-P34-Q2',family:'D03,S09',level:6,responseSpace:'lines-4',
      stem:'תלמיד טען שלשיפוע `m=1/2` מתאימה מדרגה של `Δx=1, Δy=2`. הסבירו את הטעות, כתבו מדרגה נכונה, והסבירו כיצד אפשר לבדוק שהנקודה החדשה שקיבלתם ממוקמת על הישר דרך `R(-2,3)`.',
      mathModel:{standard:{A:-1,B:2,C:8},expected:{m:[1,2],b:4,xIntercept:-8},probes:[{point:[-1,5],onLine:false},{point:[0,4],onLine:true}]}
    },
    {
      id:'S09-P34-Q3',family:'S09',level:6,responseSpace:'lines-2',
      stem:'לישר שיפוע `m=3/4`. אם בוחרים מדרגה שבה `Δx=8`, בכמה משתנה ערך ה־`y` (כלומר מהו `Δy`)? הסבירו לפי `m=Δy/Δx`.',
      answerLabel:'`Δy=` והסבר:',
      sourceRef:'razpages:bank.json slope-meaning — מדרגת שיפוע עבור שיפוע שברי; מספרים שונו',
      adaptation:'תרגול היחס `m=Δy/Δx` עם שיפוע שברי ומדרגה שלמה; מספרים שונו.'
    },
    {
      id:'Q06-P34-Q4',family:'Q06',level:7,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר ששיפועו `1/2` ועובר בנקודה `(4,3)`. הציגו דרך.',
      sourceRef:'razpages:bank.json equation-slope-point — משוואת ישר עם שיפוע שברי דרך נקודה; מספרים שונו',
      adaptation:'קישור בין מדרגת שיפוע שברי לבין המשוואה האלגברית; מספרים שונו.',
      mathModel:{standard:{A:[-1,2],B:1,C:1},expected:{m:[1,2],b:1,xIntercept:-2},probes:[{point:[4,3],onLine:true},{point:[0,1],onLine:true}]}
    },
    {
      id:'Q06-P34-Q5',family:'Q06',level:7,responseSpace:'lines-2',
      stem:'מצאו את משוואת הישר ששיפועו `2/3` ועובר בנקודה `(3,-1)`. הציגו דרך.',
      sourceRef:'razpages:bank.json equation-slope-point f4-p099-q ז — משוואת ישר עם שיפוע שברי דרך נקודה; מספרים שונו',
      adaptation:'וריאציה נוספת עם שיפוע שברי; מספרים שונו.',
      mathModel:{standard:{A:[-2,3],B:1,C:-3},expected:{m:[2,3],b:-3,xIntercept:[9,2]},probes:[{point:[3,-1],onLine:true},{point:[0,-3],onLine:true}]}
    }
  ]
};
