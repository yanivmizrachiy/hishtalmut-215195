export const page={
  page:40,
  chapter:14,
  title:'חיתוך ישר עם הצירים',
  rule:'בחיתוך עם ציר `y` מתקיים `x=0`. בחיתוך עם ציר `x` מתקיים `y=0`. נקודת חיתוך נכתבת תמיד כזוג סדור.',
  sourceRefs:['razpages:עמוד-434.html'],
  questions:[
    {
      id:'I01-I02-P40-Q1',family:'I01,I02',level:2,responseSpace:'mixed',
      stem:'בגרף מסורטט ישר החותך את ציר `y` בנקודה `A` ואת ציר `x` בנקודה `B`. קראו מן הגרף את שתי נקודות החיתוך.',
      graph:{
        xMin:-1,xMax:3,yMin:-1,yMax:7,xTick:1,yTick:1,showCoordinates:true,
        ariaLabel:'ישר יורד החותך את ציר y בנקודה A אפס שש ואת ציר x בנקודה B שתיים אפס',
        lines:[{through:[[0,6],[2,0]]}],
        points:[{x:0,y:6,label:'A'},{x:2,y:0,label:'B'}]
      },
      subparts:[
        {text:'נקודת החיתוך עם ציר `y` היא',responseSpace:'equation'},
        {text:'נקודת החיתוך עם ציר `x` היא',responseSpace:'equation'}
      ],
      sourceRef:'razpages:עמוד-434.html — הגרף שבו A על ציר y בערך 6 ו-B על ציר x בערך 2',
      adaptation:'הגרף שוחזר במנוע ה-SVG האחיד; נתוני החיתוכים נשמרו',
      mathModel:{standard:{A:3,B:1,C:6},expected:{m:-3,b:6,xIntercept:2},probes:[{point:[0,6],onLine:true},{point:[2,0],onLine:true}]}
    },
    {
      id:'I01-I02-P40-Q2',family:'I01,I02',level:3,responseSpace:'full-work',
      stem:'אותו ישר מתואר על ידי המשוואה `y=-3x+6`. מצאו אלגברית את שתי נקודות החיתוך עם הצירים והראו שהן תואמות לגרף.',
      sourceRef:'razpages:עמוד-434.html — אותו ישר A(0,6), B(2,0), בעיבוד ממשוואת הישר המתאימה לגרף',
      adaptation:'הוספת אימות אלגברי לאותו ייצוג גרפי, ללא שינוי בנתונים',
      mathModel:{standard:{A:3,B:1,C:6},expected:{m:-3,b:6,xIntercept:2},probes:[{expectedY:6,x:0},{expectedX:2,y:0}]}
    },
    {
      id:'I03-Q08-P40-Q3',family:'I03,Q08',level:5,responseSpace:'lines-4',
      stem:'השתמשו רק בשתי נקודות החיתוך שמצאתם כדי לכתוב את משוואת הישר. הציגו חישוב שיפוע ובדיקה של `b`.',
      sourceRef:'razpages:עמוד-434.html — שחזור המשוואה מן החיתוכים A(0,6), B(2,0)',
      adaptation:'הפיכת נתוני המקור למשימת קישור בין חיתוכי הצירים למשוואת הישר',
      mathModel:{standard:{A:3,B:1,C:6},expected:{m:-3,b:6,xIntercept:2},probes:[{point:[0,6],onLine:true},{point:[2,0],onLine:true}]}
    }
  ]
};
