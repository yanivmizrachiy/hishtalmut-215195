export const page={
  page:27,
  chapter:8,
  kicker:'פרק 8 · משוואה לא מסודרת',
  title:'משוואה לא מסודרת',
  subtitle:'מ־y=mx+b → צורה שקולה → שתי צורות שונות · רמות 6–8',
  rule:'משוואות שונות יכולות לתאר בדיוק את אותו ישר. כדי לבנות משוואה לא מסודרת שקולה, מבצעים על שני אגפי המשוואה פעולות שקולות ושומרים על אותו אוסף פתרונות.',
  sourceRefs:['SOURCE_OF_TRUTH.md#8.2','data/unordered-equation-family-map.md#U17'],
  questions:[
    {
      id:'U17-P27-Q1',family:'U17,U05',level:6,responseSpace:'lines-2',
      stem:'נתונה המשוואה `y=2x+3`. כתבו משוואה לא מסודרת שקולה שבה `x` ו־`y` נמצאים באותו אגף. לאחר מכן סדרו אותה בחזרה כדי לבדוק שקיבלתם את אותו ישר.',
      mathModel:{standard:{A:-2,B:1,C:3},expected:{m:2,b:3,xIntercept:[-3,2]}}
    },
    {
      id:'U17-P27-Q2',family:'U17,U14',level:6,responseSpace:'lines-4',
      stem:'נתונה `y=-\\frac{1}{2}x+4`. בנו משוואה שקולה עם מקדמים שלמים בלבד וללא שברים. הראו כיצד חזרה ל־`y=mx+b` מחזירה את המשוואה המקורית.',
      mathModel:{standard:{A:1,B:2,C:8},expected:{m:[-1,2],b:4,xIntercept:8}}
    },
    {
      id:'U17-P27-Q3',family:'U17,U05',level:7,responseSpace:'lines-4',
      stem:'ידוע ש־`m=-3` ו־`b=2`. כתבו שתי משוואות לא מסודרות שונות המתארות את אותו ישר, אך עם מקדמים שונים. הסבירו מדוע שתיהן שקולות.',
      mathModel:{standard:{A:3,B:1,C:2},expected:{m:-3,b:2,xIntercept:[2,3]}}
    },
    {
      id:'U17-P27-Q4',family:'U17,U16',level:8,responseSpace:'full-work',
      stem:'תלמיד טוען: "אם המקדמים במשוואות שונים, הישרים בהכרח שונים". השתמשו בישר `4x+2y=8` כדי ליצור משוואה אחרת עם מקדמים שונים שמתארת בדיוק אותו ישר, ואז הפריכו את הטענה באמצעות סידור שתי המשוואות.',
      mathModel:{standard:{A:4,B:2,C:8},expected:{m:-2,b:4,xIntercept:2}}
    },
    {
      id:'U17-U05-P27-Q5',family:'U17,U05',level:8,responseSpace:'mixed',
      stem:'נתונה המשוואה הלא מסודרת `3x-y=5`.',
      subparts:[
        {text:'סדרו אותה לצורה `y=mx+b`.',responseSpace:'equation'},
        {text:'כתבו את `m` ואת `b`.',responseSpace:'short',answerCount:2,betweenAnswers:'ו־'},
        {text:'מהי נקודת החיתוך של הישר עם ציר `y`?',responseSpace:'short'},
        {text:'הציבו `x=4` במשוואה `3x-y=5` וחשבו את ערך `y`.',responseSpace:'short'},
        {text:'האם הזוג הסדור `(2,1)` הוא פתרון של המשוואה `3x-y=5`? סמנו כן / לא',responseSpace:'choice-mark',answerCount:2}
      ],
      sourceRef:'SOURCE_OF_TRUTH.md#8.2 — מעבר ממשוואה לא מסודרת אל y=mx+b; מספרים שונו',
      adaptation:'משלים את הכיוון ההפוך — מסידור לא מסודר אל y=mx+b וזיהוי m ו-b; מספרים שונו.',
      mathModel:{standard:{A:-3,B:1,C:-5},expected:{m:3,b:-5,xIntercept:[5,3]}}
    }
  ]
};
