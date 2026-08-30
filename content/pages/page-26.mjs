export const page={
  page:26,
  chapter:8,
  kicker:'פרק 8 · משוואה לא מסודרת',
  title:'איפה נפלה הטעות?',
  subtitle:'סימן → חלוקה → פילוג → ניקוי שברים · רמות 6–8',
  rule:'בתיקון טעות לא מספיק לכתוב את התשובה הנכונה. מאתרים את המעבר הראשון שאינו שקול למשוואה הקודמת, מסבירים מה השתבש, וממשיכים משם בסידור נכון ל־`y=mx+b`.',
  sourceRefs:['SOURCE_OF_TRUTH.md#8.2','data/unordered-equation-family-map.md#U16','razpages:עמוד-431.html'],
  questions:[
    {
      id:'U16-P26-Q1',family:'U16,U03,U04',level:6,responseSpace:'full-work',
      stem:'תלמיד סידר את `2x+4y=8` כך: `4y=2x+8` ולכן `y=\\frac{1}{2}x+2`. מצאו את המעבר הראשון השגוי, הסבירו את טעות הסימן וכתבו פתרון מתוקן.',
      subparts:[{label:'א.',text:'השלימו את המעבר הנכון: `4y=`',responseSpace:'short'}],
      answerLabel:'איתור הטעות ותיקון:',
      mathModel:{standard:{A:2,B:4,C:8},expected:{m:[-1,2],b:2,xIntercept:4}}
    },
    {
      id:'U16-P26-Q2',family:'U16,U03,U05',level:6,responseSpace:'full-work',
      stem:'תלמיד כתב: `3x-2y=6 \\Rightarrow -2y=-3x+6 \\Rightarrow y=\\frac{3}{2}x+6`. מה לא חולק נכון? תקנו את השלב האחרון והשלימו ל־`y=mx+b`.',
      subparts:[{label:'א.',text:'באיזה מספר יש לחלק את שני האגפים של `-2y=-3x+6` כדי לבודד את `y`?',responseSpace:'short'}],
      answerLabel:'הסבר ותיקון:',
      mathModel:{standard:{A:3,B:-2,C:6},expected:{m:[3,2],b:-3,xIntercept:2}}
    },
    {
      id:'U16-P26-Q3',family:'U16,U13,U12',level:7,responseSpace:'full-work',
      stem:'תלמיד פתח סוגריים כך: `2(x+y)=4x-6 \\Rightarrow 2x+y=4x-6`. מצאו את הטעות, תקנו את הפילוג והמשיכו עד למשוואה מסודרת.',
      subparts:[{label:'א.',text:'השלימו את הפילוג הנכון: `2(x+y)=`',responseSpace:'short'}],
      answerLabel:'פילוג נכון, כינוס ובידוד:',
      mathModel:{standard:{A:-2,B:2,C:-6},expected:{m:1,b:-3,xIntercept:3}}
    },
    {
      id:'U16-P26-Q4',family:'U16,U14,U03,U05',level:8,responseSpace:'full-work',
      stem:'כדי להיפטר מן השבר ב־`3x-\\frac{1}{2}y=5`, תלמיד כפל ב־2 וקיבל `6x-y=5`. הסבירו מדוע השלב אינו שקול, תקנו אותו והמשיכו עד `y=mx+b`.',
      subparts:[{label:'א.',text:'השלימו את המשוואה השקולה המתקבלת לאחר כפל שני האגפים ב־2: `6x-y=`',responseSpace:'short'}],
      answerLabel:'איתור הטעות, תיקון וסידור מלא:',
      mathModel:{standard:{A:3,B:[-1,2],C:5},expected:{m:6,b:-10,xIntercept:[5,3]}}
    }
  ]
};
