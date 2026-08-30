export const page={
  page:104,
  chapter:30,
  kicker:'ייצוג תופעות · תשלום סלולרי',
  title:'תוכנית סלולר — תשלום לפי דקות שיחה',
  subtitle:'תשלום קבוע · מעבר לפונקציה עולה · קריאת גרף',
  rule:'בתוכנית יש תשלום מינימלי קבוע עד `100` דקות. לאחר מכן התשלום גדל בקצב קבוע, ולכן חלקו השני של הגרף הוא קטע של פונקציה קווית.',
  sourceRefs:['razpages:עמוד-465.html'],
  questions:[
    {
      id:'RZ465-Q1A-P104-Q1',family:'W01,Q03',level:5,responseSpace:'mixed',
      stem:'הגרף מתאר תשלום בתוכנית סלולר: עבור תשלום קבוע מקבלים `100` דקות שיחה ללא תוספת. ענו לפי הגרף.',
      sourceRef:'razpages:עמוד-465.html — שאלה 1, סעיפים א–ג',
      adaptation:'הגרף נשמר כקטע אופקי עד (100,50) ואחריו קטע עולה עד (450,225). כל נתוני הסעיפים נשמרו.',
      graph:{xMin:0,xMax:450,yMin:0,yMax:225,xTick:50,yTick:25,xLabel:'דקות שיחה',yLabel:'תשלום (₪)',polyline:[[0,50],[100,50],[450,225]],ariaLabel:'תשלום 50 שקלים עד 100 דקות, ואחר כך עליה לינארית עד 225 שקלים ב-450 דקות'},
      subparts:[
        {text:'א1. כמה משלמים עבור `50` דקות שיחה?',responseSpace:'short',level:5},
        {text:'א2. כמה משלמים עבור `100` דקות שיחה?',responseSpace:'short',level:5},
        {text:'א3. כמה משלמים עבור `200` דקות שיחה?',responseSpace:'short',level:5},
        {text:'א4. כמה משלמים עבור `350` דקות שיחה?',responseSpace:'short',level:5},
        {text:'ב. רון שילם `125 ₪`. כמה דקות דיבר?',responseSpace:'lines-2',level:5},
        {text:'ג. מהו התשלום המינימלי בתוכנית?',responseSpace:'short',level:5}
      ]
    }
  ]
};
