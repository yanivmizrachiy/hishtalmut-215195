export const page={
  page:128,
  chapter:30,
  kicker:'ייצוג תופעות · שני מכלים',
  title:'מילוי שני מכלים — קצבים שונים',
  subtitle:'מכל א ריק · מכל ב מתחיל ב־48 ליטר',
  rule:'מכל א מתחיל ריק ומתמלא בקצב `8` ליטר לדקה עד `160` ליטר. מכל ב מתחיל עם `48` ליטר ומתמלא בקצב `4` ליטר לדקה עד `136` ליטר.',
  sourceRefs:['razpages:עמוד-523.html'],
  questions:[
    {
      id:'RZ523-Q1A-P128-Q1',family:'W01,Q03,S14',level:6,responseSpace:'mixed',
      stem:'נתונים שני מכלים. מכל א ריק, ובמכל ב יש `48` ליטר. מזרימים מים לשניהם עד שהם מתמלאים. ענו לפי הגרפים.',
      sourceRef:'razpages:עמוד-523.html — שאלה 1, סעיפים 1–2',
      adaptation:'שתי פונקציות המילוי והקטעים האופקיים לאחר התמלאות נשמרו לפי ה-SVG המקורי.',
      graph:{xMin:0,xMax:26,yMin:0,yMax:160,xTick:2,yTick:20,xLabel:'זמן (דקות)',yLabel:'כמות מים (ליטר)',polyline:[[0,0],[20,160],[26,160]],ariaLabel:'מכל א: 8 ליטר לדקה עד 160 ליטר'},
      panels:[{label:'מכל ב',graph:{xMin:0,xMax:26,yMin:0,yMax:160,xTick:2,yTick:20,xLabel:'דקות',yLabel:'ליטרים',polyline:[[0,48],[22,136],[26,136]],ariaLabel:'מכל ב: מתחיל ב-48 ליטר ומתמלא 4 ליטר לדקה עד 136'}}],
      subparts:[
        {text:'1. כמה ליטרים יש בכל אחד מהמכלים `4` דקות לאחר פתיחת הברזים?',responseSpace:'lines-2',level:6},
        {text:'2. לאחר כמה דקות היו במכל א `120` ליטר, ולאחר כמה דקות היו במכל ב `120` ליטר?',responseSpace:'lines-4',level:6}
      ]
    }
  ]
};
