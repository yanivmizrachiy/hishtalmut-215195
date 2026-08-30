export const page={
  page:150,
  chapter:32,
  kicker:'ישרים מקבילים · השלמת מקור Razpages',
  title:'מקבילות דרך נקודה — המשך והרחבה',
  subtitle:'בדיקת מקבילות משיפועים → שיפועים בשברים → מקבילות במרובע',
  rule:'גם כאשר השיפוע יוצא שבר, הכלל נשמר: ישרים מקבילים בעלי אותו `m`. במרובע, שתי צלעות מקבילות אם השיפועים שלהן שווים.',
  sourceRefs:['razpages:עמוד-441.html','razpages:עמוד-442.html','razpages:עמוד-443.html'],
  questions:[
    {
      id:'RZ441-Q2-P150-Q1',family:'S16,S06',level:6,responseSpace:'full-work',
      stem:'הישר `l₁` עובר דרך הנקודות `(-1,8)` ו־`(0,1)`. הישר `l₂` עובר דרך הנקודות `(-1,13)` ו־`(2,-8)`.',
      sourceRef:'razpages:עמוד-441.html — שאלה 2: חישוב שיפועי l₁ ו־l₂ ובדיקת מקבילות',
      adaptation:'ארבע הנקודות ושני הסעיפים נשמרו בדיוק.',
      subparts:[
        {text:'חשבו את השיפועים של `l₁` ושל `l₂`. הראו את הדרך.',responseSpace:'full-work'},
        {text:'האם הישרים `l₁` ו־`l₂` מקבילים? נמקו.',responseSpace:'lines-2'}
      ]
    },
    {
      id:'RZ443-Q2B-P150-Q2',family:'S16,S06',level:7,responseSpace:'mixed',
      stem:'המשך התרגיל מן העמוד הקודם: בכל סעיף מצאו את משוואת הישר העובר דרך `C` ומקביל לישר העובר דרך `A` ו־`B`.',
      sourceRef:'razpages:עמוד-443.html — שאלה 2, סעיפים ד–ו: ישר דרך C המקביל לישר AB',
      adaptation:'שלושת הסעיפים הנותרים של שאלה 2 במקור נשמרו בדיוק, כולל השיפועים השבריים בסעיפים ה׳ ו־ו׳. יחד עם סעיפים א–ג בעמוד הקודם הועברו כל ששת הסעיפים של שאלת המקור.',
      subparts:[
        {text:'`A(-1,5)`, `B(0,0)`, `C(-1,-3)`:',responseSpace:'equation'},
        {text:'`A(-8,4)`, `B(2,9)`, `C(-1,-4.5)`:',responseSpace:'equation'},
        {text:'`A(-6,-5)`, `B(-3,-6)`, `C(0,2)`:',responseSpace:'equation'},
        {text:'באילו סעיפים התקבל שיפוע שאינו שלם? רשמו אותו כשבר מצומצם.',responseSpace:'lines-2'}
      ]
    },
    {
      id:'RZ442-Q2-P150-Q3',family:'S16,G05',level:7,responseSpace:'mixed',
      stem:'קדקודי המרובע `ABCD` הם `A(6,4)`, `B(-2,-4)`, `C(-6,-5)`, `D(-4,0)`.',
      sourceRef:'razpages:עמוד-442.html — שאלה 2: שיפועי צלעות המרובע ובדיקת מקבילות AB ו־DC',
      adaptation:'ארבעת הקדקודים ושני הסעיפים נשמרו בדיוק כפי שהם במקור.',
      subparts:[
        {text:'חשבו את השיפועים של הצלעות `AB`, `BC`, `CD`, `AD`.',responseSpace:'full-work'},
        {text:'האם הצלעות `AB` ו־`DC` מקבילות? נמקו על סמך השיפועים.',responseSpace:'lines-2'},
        {text:'האם מצאתם במרובע זוג צלעות מקבילות כלשהו? בססו את תשובתכם על השיפועים שחישבתם.',responseSpace:'lines-2'}
      ]
    }
  ]
};
