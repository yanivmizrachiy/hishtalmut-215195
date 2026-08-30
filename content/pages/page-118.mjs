export const page={
  page:118,
  chapter:30,
  kicker:'ייצוג תופעות · היקף ריבוע',
  title:'היקף ריבוע כפונקציה של אורך הצלע',
  subtitle:'טבלה · משמעות המשתנים · y=4x',
  rule:'לריבוע שאורך צלעו `x` ס״מ יש היקף `4x` ס״מ. לכן `y=4x`, כאשר `x` הוא אורך הצלע ו־`y` הוא ההיקף.',
  sourceRefs:['razpages:עמוד-516.html'],
  questions:[
    {
      id:'RZ516-Q1A-P118-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'לפניכם טבלת ערכים של פונקציה המתאימה לכל ריבוע את היקפו. השלימו ופרשו את המשתנים.',
      sourceRef:'razpages:עמוד-516.html — שאלה 1, משמעות x/y, היקף לצלע 2 והטבלה',
      adaptation:'הקשר y=4x, כל חמש שורות הטבלה ושאלות המשמעות נשמרו.',
      table:{ariaLabel:'אורך צלע והיקף ריבוע',rows:[['צלע x (ס״מ)','היקף y (ס״מ)'],[1,4],[2,{answer:true}],[3,{answer:true}],[4,{answer:true}],[5,{answer:true}]]},
      subparts:[
        {text:'מה מייצג הערך `x` בטבלה?',responseSpace:'explanation',level:5},
        {text:'מה מייצג הערך `y` בטבלה?',responseSpace:'explanation',level:5},
        {text:'מהו היקף ריבוע שאורך צלעו `2` ס״מ?',responseSpace:'short',level:5},
        {text:'מהו היקף ריבוע שאורך צלעו `7` ס״מ?',responseSpace:'short',level:5},
        {text:'מהו אורך הצלע של ריבוע שהיקפו `36` ס״מ?',responseSpace:'short',level:5},
        {text:'השלימו: כאשר אורך הצלע גדל בסנטימטר אחד, ההיקף גדל ב־',responseSpace:'short',suffix:'ס״מ.',level:5},
        {text:'כתבו את הזוג הסדור המתאים לריבוע שאורך צלעו `3` ס״מ.',responseSpace:'short',answerShape:'ordered-pair',level:5}
      ],
      mathModel:{standard:{A:-4,B:1,C:0},expected:{m:4,b:0,xIntercept:0},probes:[{point:[2,8],onLine:true},{point:[5,20],onLine:true}]}
    }
  ]
};
