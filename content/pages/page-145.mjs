export const page={
  page:145,
  chapter:30,
  kicker:'ייצוג תופעות · משימת Drive מסכמת',
  title:'קובי — מהטבלה אל הגרף והשיפוע',
  subtitle:'נקודות → גרף → מדרגת שיפוע → פירוש בהקשר',
  rule:'בגרף של `y=40x+18`, כל תוספת של שעה אחת מגדילה את השכר הכולל ב־40 שקלים. לכן השיפוע הוא `40`, והגרף חותך את ציר `y` ב־`18`.',
  sourceRefs:['drive:1gqgkJAe36V6BSW0HMJ7rUbfxbMHU5Aqz — משימה מסכמת שיפוע.pdf'],
  questions:[
    {
      id:'DRV14-P145-Q1',family:'W01,G01,S01',level:6,responseSpace:'mixed',
      stem:'המשיכו את משימת קובי. השתמשו בקשר `y=40x+18` ובטבלה מהעמוד הקודם כדי לשרטט את הגרף ולמצוא את השיפוע גם מן הגרף.',
      sourceRef:'drive:1gqgkJAe36V6BSW0HMJ7rUbfxbMHU5Aqz — משימה מסכמת שיפוע.pdf; הייצוג הגרפי ומציאת השיפוע מן הגרף (סעיף 4)',
      adaptation:'מערכת הצירים נבנתה מחדש באופן דיגיטלי עם קנה מידה מותאם לתופעה (שעות מול שקלים); נתוני המשימה והדרישה למצוא שיפוע מן הגרף נשמרו.',
      graph:{xMin:0,xMax:6,yMin:0,yMax:280,xTick:1,yTick:40,equalUnitScale:false,xLabel:'x — שעות עבודה',yLabel:'y — שכר כולל',showCoordinates:false,lines:[],points:[],ariaLabel:'מערכת צירים ריקה לשרטוט הגרף y=40x+18 עבור שעות עבודה 0 עד 6'},
      subparts:[
        {label:'א.',text:'סמנו על מערכת הצירים לפחות ארבע נקודות מן הטבלה שבעמוד הקודם, ושרטטו את הישר העובר דרכן.',responseSpace:'explanation'},
        {label:'ב.',text:'בחרו שתי נקודות על הישר ורשמו את השינוי ב־`y` ואת השינוי ב־`x` ביניהן.',responseSpace:'lines-2'},
        {label:'ג.',text:'חשבו מן הגרף את השיפוע לפי היחס בין השינוי ב־`y` לשינוי ב־`x`. הראו את בחירת שתי הנקודות ואת החישוב.',responseSpace:'full-work'},
        {label:'ד.',text:'הסבירו מדוע השיפוע שקיבלתם מתאים לנתון “40 שקלים לכל שעת עבודה”.',responseSpace:'lines-2'},
        {label:'ה.',text:'מה מייצגת נקודת החיתוך `(0,18)` בהקשר של הסיפור?',responseSpace:'lines-2'},
        {label:'ו.',text:'מהו השכר הכולל עבור `4` שעות עבודה? חשבו לפי `y=40x+18`.',responseSpace:'short'}
      ],
      mathModel:{standard:{A:-40,B:1,C:18},expected:{m:40,b:18},probes:[{point:[0,18],onLine:true},{point:[2,98],onLine:true},{point:[5,218],onLine:true}]}
    }
  ]
};
