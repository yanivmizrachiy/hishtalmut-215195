export const page={
  page:114,
  chapter:30,
  kicker:'ייצוג תופעות · מילוי בריכה',
  title:'מילוי בריכה — 20 ליטר בכל שנייה',
  subtitle:'קצב קבוע · y=20x · ערכי פונקציה',
  rule:'הבריכה מתחילה ריקה ומתווספים `20` ליטר בכל שנייה. לכן כמות המים לאחר `x` שניות היא `y=20x`.',
  sourceRefs:['razpages:עמוד-470.html'],
  questions:[
    {
      id:'RZ470-Q1A-P114-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'בתהליך מילוי בריכה ריקה מזרימים `20` ליטר מים בכל שנייה. הגרף מתאר את כמות המים לפי הזמן מתחילת המילוי.',
      sourceRef:'razpages:עמוד-470.html — שאלה 1, סעיפים א–ג',
      adaptation:'קצב המילוי, הגרף y=20x ושלושת סעיפי המקור הראשונים נשמרו.',
      graph:{equalUnitScale:false,xMin:0,xMax:60,yMin:0,yMax:1400,xTick:10,yTick:200,xLabel:'זמן (שניות)',yLabel:'כמות המים (ליטרים)',lines:[{through:[[0,0],[60,1200]],label:'y=20x',labelAt:[48,960]}],ariaLabel:'כמות המים בבריכה לפי y=20x עד 60 שניות'},
      subparts:[
        {text:'כמה ליטרים יהיו בבריכה אחרי `5` שניות?',responseSpace:'short',level:5},
        {text:'כמה ליטרים יהיו בבריכה אחרי `8` שניות?',responseSpace:'short',level:5},
        {text:'כמה ליטרים יהיו בבריכה אחרי `25` שניות?',responseSpace:'short',level:5},
        {text:'האם אפשר למצוא את כמות המים לפי זמן המילוי? אם כן — הסבירו כיצד.',responseSpace:'explanation',level:5},
        {text:'האם יכול להיות שבאותה נקודת זמן יהיו בבריכה שתי כמויות מים שונות? הסבירו.',responseSpace:'explanation',level:5}
      ],
      mathModel:{standard:{A:-20,B:1,C:0},expected:{m:20,b:0,xIntercept:0},probes:[{point:[5,100],onLine:true},{point:[25,500],onLine:true}]}
    }
  ]
};
