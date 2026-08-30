export const page={
  page:149,
  chapter:30,
  kicker:'ישרים מקבילים · השלמת מקור Razpages',
  title:'מקבילות משתי נקודות — ומתי `b` אינו אפס',
  subtitle:'ישר מקביל דרך נקודה → שיפוע משתי נקודות → קביעת b מהצבה',
  rule:'את השיפוע של ישר העובר דרך שתי נקודות מחשבים לפי `m=\\frac{\\Delta y}{\\Delta x}`. ישר מקביל שומר על אותו `m`, ואת `b` קובעים לפי הנקודה שדרכה הוא עובר: אם היא ראשית הצירים מתקבל `b=0`, ואחרת `b` נקבע מהצבה.',
  sourceRefs:['razpages:עמוד-441.html','razpages:עמוד-442.html','razpages:עמוד-443.html','razpages:עמוד-445.html'],
  questions:[
    {
      id:'RZ441-Q3-P149-Q1',family:'S16,Q12',level:6,responseSpace:'full-work',
      stem:'מצאו את משוואת הישר העובר דרך הנקודה `(4,-9)` ומקביל לישר `y=4x-8`.',
      sourceRef:'razpages:עמוד-441.html — שאלה 3: ישר דרך (4,-9) המקביל ל־y=4x-8',
      adaptation:'הנתונים והמשימה נשמרו בדיוק; נוספה השוואה מפורשת למקרה שבו הישר עובר בראשית הצירים.',
      subparts:[
        {label:'א.',text:'מצאו את משוואת הישר. הראו את הדרך.',responseSpace:'full-work'},
        {label:'ב.',text:'מדוע כאן `b` אינו `0`, בניגוד לישרים שעברו דרך ראשית הצירים?',responseSpace:'lines-2'}
      ],
      mathModel:{standard:{A:-4,B:1,C:-25},expected:{m:4,b:-25},probes:[{point:[4,-9],onLine:true},{point:[0,-25],onLine:true}]}
    },
    {
      id:'RZ445-Q3-P149-Q2',family:'S16,S06',level:7,responseSpace:'full-work',
      stem:'מצאו את משוואת הישר העובר דרך ראשית הצירים ומקביל לישר העובר דרך הנקודות `(7,3)` ו־`(4,2)`.',
      sourceRef:'razpages:עמוד-445.html — שאלה 3: ישר דרך ראשית הצירים המקביל לישר דרך (7,3) ו־(4,2)',
      adaptation:'שתי הנקודות והמשימה נשמרו בדיוק; חושב השיפוע בשבר מדויק `1/3`.',
      subparts:[
        {label:'א.',text:'חשבו את שיפוע הישר העובר דרך `(7,3)` ו־`(4,2)`.',responseSpace:'short'},
        {label:'ב.',text:'כתבו את משוואת הישר המבוקש. הראו את הדרך.',responseSpace:'full-work'}
      ],
      mathModel:{standard:{A:[-1,3],B:1,C:0},expected:{m:[1,3],b:0},probes:[{point:[0,0],onLine:true},{point:[3,1],onLine:true}]}
    },
    {
      id:'RZ442-Q3-P149-Q3',family:'S16,S06',level:7,responseSpace:'full-work',
      stem:'מצאו את משוואת הישר העובר דרך הנקודה `(3,0)` ומקביל לישר העובר דרך הנקודות `(-7,2)` ו־`(-3,6)`.',
      sourceRef:'razpages:עמוד-442.html — שאלה 3: ישר דרך (3,0) המקביל לישר דרך (-7,2) ו־(-3,6)',
      adaptation:'שלוש הנקודות והמשימה נשמרו בדיוק.',
      subparts:[
        {label:'א.',text:'חשבו את שיפוע הישר העובר דרך `(-7,2)` ו־`(-3,6)`.',responseSpace:'short'},
        {label:'ב.',text:'מצאו את משוואת הישר המבוקש. הראו את הדרך.',responseSpace:'full-work'}
      ],
      mathModel:{standard:{A:-1,B:1,C:-3},expected:{m:1,b:-3},probes:[{point:[3,0],onLine:true},{point:[0,-3],onLine:true}]}
    },
    {
      id:'RZ443-Q2-P149-Q4',family:'S16,S06',level:7,responseSpace:'mixed',
      stem:'בכל סעיף נתונות שלוש נקודות `A`, `B`, `C`. מצאו את משוואת הישר העובר דרך `C` ומקביל לישר העובר דרך `A` ו־`B`.',
      sourceRef:'razpages:עמוד-443.html — שאלה 2, סעיפים א–ג: ישר דרך C המקביל לישר AB',
      adaptation:'שלושת הסעיפים הראשונים ונתוניהם נשמרו בדיוק; יתר הסעיפים של המקור ממשיכים בעמוד ההמשך.',
      subparts:[
        {label:'א.',text:'`A(1,11)`, `B(3,19)`, `C(2,5)`:',responseSpace:'equation'},
        {label:'ב.',text:'`A(-2,-6)`, `B(-1,1)`, `C(-1,-11)`:',responseSpace:'equation'},
        {label:'ג.',text:'`A(-2,9)`, `B(1,-9)`, `C(0,5)`:',responseSpace:'equation'}
      ]
    }
  ]
};
