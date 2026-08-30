export const page={
  page:127,
  chapter:30,
  kicker:'ייצוג תופעות · משאית',
  title:'משאית במהירות 40 קמ״ש — קריאת הגרף',
  subtitle:'מציאת זמן ממרחק · בדיקת נתוני מקור',
  rule:'כאשר `y=40x`, למציאת הזמן מתוך מרחק מחלקים את המרחק ב־`40`.',
  sourceRefs:['razpages:עמוד-522.html'],
  questions:[
    {
      id:'RZ522-Q1B-P127-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'ענו לפי הגרף שבניתם בעמוד הקודם.',
      sourceRef:'razpages:עמוד-522.html — שאלה 1, סעיפים ג–ה',
      adaptation:'שתי שאלות המרחק נשמרו. בסעיפים ד–ה חסרים במקור נתוני הנקודות עצמם; החוסר מסומן ולא הושלם בניחוש.',
      graph:{xMin:0,xMax:9,yMin:0,yMax:360,xTick:1,yTick:40,xLabel:'זמן (שעות)',yLabel:'מרחק (ק״מ)',lines:[{through:[[0,0],[9,360]],label:'y=40x',labelAt:[7.5,300]}],ariaLabel:'מרחק משאית במהירות 40 קמש, y=40x'},
      subparts:[
        {text:'כעבור כמה שעות הייתה המשאית במרחק `120` ק״מ מנקודת המוצא?',responseSpace:'lines-2',level:5},
        {text:'כעבור כמה שעות הייתה המשאית במרחק `220` ק״מ מנקודת המוצא?',responseSpace:'lines-2',level:5},
        {text:'במקור מופיעה השאלה "האם הנקודות הבאות נמצאות על הגרף", אך רשימת הנקודות חסרה.',responseSpace:'explanation',level:5},
        {text:'במקור מופיעה בקשה לסמן נקודה ולהשלים את שיעוריה, אך נתוני הנקודה חסרים.',responseSpace:'explanation',level:5}
      ],
      mathModel:{standard:{A:-40,B:1,C:0},expected:{m:40,b:0,xIntercept:0}}
    }
  ]
};
