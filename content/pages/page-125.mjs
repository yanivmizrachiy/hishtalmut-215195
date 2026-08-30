export const page={
  page:125,
  chapter:30,
  kicker:'ייצוג תופעות · רוכב אופניים',
  title:'רוכב במהירות 15 קמ״ש — קריאת הגרף',
  subtitle:'מציאת זמן ממרחק · בדיקת נתוני מקור',
  rule:'כאשר `y=15x`, למציאת הזמן מתוך מרחק מחלקים את המרחק ב־`15`.',
  sourceRefs:['razpages:עמוד-521.html'],
  questions:[
    {
      id:'RZ521-Q1B-P125-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'ענו לפי הגרף שבניתם בעמוד הקודם.',
      sourceRef:'razpages:עמוד-521.html — שאלה 1, סעיפים ג–ה',
      adaptation:'שתי שאלות המרחק נשמרו. בסעיפים ד–ה חסרים במקור נתוני הנקודות עצמם; החוסר מסומן ולא הושלם בניחוש.',
      graph:{xMin:0,xMax:9,yMin:0,yMax:135,xTick:1,yTick:15,xLabel:'זמן (שעות)',yLabel:'מרחק (ק״מ)',lines:[{through:[[0,0],[9,135]],labelAt:[7.5,112.5]}],ariaLabel:'מרחק רוכב אופניים במהירות 15 קמש, y=15x'},
      subparts:[
        {text:'כעבור כמה שעות היה הרוכב במרחק `12` ק״מ מנקודת המוצא?',responseSpace:'lines-2',level:5},
        {text:'כעבור כמה שעות היה הרוכב במרחק `6` ק״מ מנקודת המוצא?',responseSpace:'lines-2',level:5},
        {text:'במקור מופיעה השאלה "האם הנקודות הבאות נמצאות על הגרף", אך רשימת הנקודות חסרה.',responseSpace:'explanation',level:5},
        {text:'במקור מופיעה בקשה לסמן נקודה ולהשלים את שיעוריה, אך נתוני הנקודה חסרים.',responseSpace:'explanation',level:5}
      ],
      mathModel:{standard:{A:-15,B:1,C:0},expected:{m:15,b:0,xIntercept:0}}
    }
  ]
};
