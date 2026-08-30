export const page={
  page:137,
  chapter:30,
  kicker:'ייצוג תופעות · אקווריום',
  title:'ריקון אקווריום — פונקציה יורדת',
  subtitle:'y=-3x+24 · קצב ריקון · חיתוך עם הצירים',
  rule:'האקווריום מתחיל ב־`24` מ״ק ומתרוקן בקצב קבוע של `3` מ״ק לדקה. לכן `y=-3x+24`.',
  sourceRefs:['razpages:עמוד-530.html'],
  questions:[
    {
      id:'RZ530-Q2-P137-Q1',family:'W01,Q03,Q05',level:6,responseSpace:'mixed',
      stem:'האקווריום היה מלא עד הקצה ורוקנו ממנו מים בקצב קבוע. ענו לפי הגרף.',
      sourceRef:'razpages:עמוד-530.html — שאלה 2',
      adaptation:'ארבעת סעיפי המקור נשמרו; הגרף שוחזר בדיוק מן הנקודות (0,24) ו-(8,0).',
      graph:{xMin:0,xMax:12,yMin:0,yMax:25,xTick:2,yTick:5,xLabel:'זמן (דקות)',yLabel:'כמות מים (מ״ק)',lines:[{through:[[0,24],[8,0]],label:'y=-3x+24',labelAt:[4,12]}],ariaLabel:'ריקון אקווריום y=-3x+24'},
      subparts:[
        {text:'א. השלימו: בתחילת התהליך היו ___ מ״ק מים.',responseSpace:'short',level:6},
        {text:'ב. בכל דקה רוקנו ___ מ״ק מים.',responseSpace:'short',level:6},
        {text:'ג. לאחר ___ דקות לא נותרו מים באקווריום.',responseSpace:'short',level:6},
        {text:'ד. מהו שיפוע הגרף? הסבירו את משמעות הסימן השלילי בהקשר.',responseSpace:'explanation',level:6}
      ],
      mathModel:{standard:{A:3,B:1,C:24},expected:{m:-3,b:24,xIntercept:8},probes:[{point:[0,24],onLine:true},{point:[4,12],onLine:true},{point:[8,0],onLine:true}]}
    }
  ]
};
