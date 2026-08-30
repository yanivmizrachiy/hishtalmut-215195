export const page={
  page:129,
  chapter:30,
  kicker:'ייצוג תופעות · שני מכלים',
  title:'שני מכלים — השוואה, שוויון והתמלאות',
  subtitle:'השוואת פונקציות · נקודת חיתוך · קיבולת',
  rule:'לפני ההתמלאות: מכל א מתואר על ידי `y=8x`, ומכל ב על ידי `y=4x+48`. הכמויות שוות כאשר `8x=4x+48`, כלומר לאחר `12` דקות.',
  sourceRefs:['razpages:עמוד-523.html'],
  questions:[
    {
      id:'RZ523-Q1B-P129-Q1',family:'W01,Q03,S14',level:6,responseSpace:'mixed',
      stem:'המשיכו להשוות בין שני מכלי המים.',
      sourceRef:'razpages:עמוד-523.html — שאלה 1, סעיפים 3–5',
      adaptation:'שלושת סעיפי המקור נשמרו; נוסף חישוב אלגברי גלוי של נקודת השוויון.',
      graph:{xMin:0,xMax:26,yMin:0,yMax:160,xTick:2,yTick:20,xLabel:'זמן (דקות)',yLabel:'כמות מים (ליטר)',lines:[{through:[[0,0],[20,160]],label:'א',labelAt:[17,136]},{through:[[0,48],[22,136]],label:'ב',labelAt:[18,120]}],points:[{x:12,y:96,label:'שוויון'}],ariaLabel:'שני מכלים לפני התמלאות: y=8x ו-y=4x+48, חיתוך ב-(12,96)'},
      subparts:[
        {text:'3. במשך כמה דקות מרגע פתיחת הברזים הייתה כמות המים במכל ב גדולה מכמות המים במכל א?',responseSpace:'lines-2',level:6},
        {text:'4. באיזה מכל היו יותר מים `20` דקות לאחר פתיחת הברזים, ובכמה ליטרים יותר?',responseSpace:'lines-4',level:6},
        {text:'5. לאחר כמה דקות מרגע פתיחת הברזים התמלא מכל ב?',responseSpace:'lines-2',level:6},
        {text:'מצאו אלגברית את נקודת הזמן שבה היו בשני המכלים כמויות שוות.',responseSpace:'lines-4',level:6}
      ],
      mathModel:{graphLineModels:[{standard:{A:-8,B:1,C:0}},{standard:{A:-4,B:1,C:-48}}]}
    }
  ]
};
