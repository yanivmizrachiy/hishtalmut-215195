export const page={
  page:154,
  chapter:33,
  kicker:'שחזור מקור מלא · סימון נקודות והשלמות',
  title:'ארנונה ומכלי מים — השלמת סעיפי המקור',
  subtitle:'סימון נקודות על ישר → קריאה דו־כיוונית → זמן התמלאות מכל',
  rule:'על ישר העובר דרך ראשית הצירים, `y=mx`, אפשר להשלים כל נקודה לשני הכיוונים: מ־`x` אל `y` בהצבה, ומ־`y` אל `x` בחילוק בשיפוע.',
  sourceRefs:['razpages:עמוד-518.html'],
  questions:[
    {
      id:'RZ518-Q1C-P154-Q1',family:'W01,P01,S16',level:6,responseSpace:'mixed',
      stem:'הגרף מתאר את סכום הארנונה לפי שטח הנכס: לכל מטר מרובע משלמים `5` שקלים.',
      sourceRef:'razpages:עמוד-518.html — שאלה 1, סעיף ו: סימון הנקודות A(200,_), B(_,2000), C(700,_), D(_,1500) והשלמת שיעוריהן',
      adaptation:'סעיף ו של המקור הועבר עם ארבע הנקודות המקוריות בדיוק; הגרף זהה לזה שבעמודים 120–121.',
      graph:{equalUnitScale:false,xMin:0,xMax:1000,yMin:0,yMax:5000,xTick:100,yTick:500,xLabel:'שטח הנכס (מ״ר)',yLabel:'ארנונה (₪)',lines:[{through:[[0,0],[900,4500]],labelAt:[800,4000]}],points:[],showCoordinates:false,ariaLabel:'ישר הארנונה y=5x עבור שטח נכס מ-0 עד 1000 מטר מרובע'},
      subparts:[
        {text:'סמנו את `A(200,\\;)` והשלימו את שיעורה החסר.',responseSpace:'short'},
        {text:'סמנו את `B(\\;,2000)` והשלימו את שיעורה החסר.',responseSpace:'short'},
        {text:'סמנו את `C(700,\\;)` והשלימו את שיעורה החסר.',responseSpace:'short'},
        {text:'סמנו את `D(\\;,1500)` והשלימו את שיעורה החסר.',responseSpace:'short'},
        {text:'הסבירו כיצד חישבתם את שיעורי `B` ו־`D` מתוך התשלום, ומדוע הפעולה הפוכה לזו שביצעתם ב־`A` וב־`C`.',responseSpace:'full-work'},
        {text:'רשמו את ארבע הנקודות שסימנתם כרשימת זוגות סדורים, לפי סדר עולה של שטח הנכס.',responseSpace:'lines-2'},
        {text:'משפחה שוקלת לעבור מדירה בת `200` מ״ר לבית בן `700` מ״ר. בכמה שקלים תגדל הארנונה שלה? הראו את החישוב.',responseSpace:'full-work'},
        {text:'הסבירו מדוע הישר עובר דרך ראשית הצירים, ומה המשמעות של כך בהקשר של הארנונה.',responseSpace:'lines-2'}
      ],
      mathModel:{standard:{A:-5,B:1,C:0},expected:{m:5,b:0},probes:[{point:[200,1000],onLine:true},{point:[400,2000],onLine:true},{point:[700,3500],onLine:true},{point:[300,1500],onLine:true}]}
    }
  ]
};
