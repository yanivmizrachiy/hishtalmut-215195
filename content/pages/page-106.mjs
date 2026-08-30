export const page={
  page:106,
  chapter:30,
  kicker:'ייצוג תופעות · מחיר חנייה',
  title:'חניון התחנה — גרף וטבלת מחירים',
  subtitle:'מחיר כפונקציה של זמן החנייה',
  rule:'הגרף הוא ישר העובר בראשית, ולכן אין תשלום קבוע. השיפוע מייצג את המחיר לכל שעת חנייה.',
  sourceRefs:['razpages:עמוד-466.html'],
  questions:[
    {
      id:'RZ466-Q1A-P106-Q1',family:'W01,Q03,Q05',level:5,responseSpace:'mixed',
      stem:'הגרף מתאר את מחיר החנייה בחניון "התחנה" כפונקציה של זמן החנייה. השלימו את הטבלה וענו על הסעיפים.',
      sourceRef:'razpages:עמוד-466.html — שאלה 1, טבלה וסעיפים א–ד',
      adaptation:'הישר שוחזר כ-y=10x בהתאם לנקודות המקור ולסולמות הצירים.',
      graph:{xMin:0,xMax:10,yMin:0,yMax:60,xTick:1,yTick:10,xLabel:'זמן החנייה (שעות)',yLabel:'מחיר (₪)',lines:[{through:[[0,0],[6,60]],label:'התחנה',labelAt:[5.4,54]}],ariaLabel:'מחיר החנייה בחניון התחנה: ישר y=10x'},
      table:{ariaLabel:'טבלת זמן חנייה ומחיר',rows:[['זמן החנייה x','מחיר y'],[0,{answer:true}],[1,{answer:true}],[2,{answer:true}],[3,{answer:true}],[4,{answer:true}],[5,{answer:true}],[6,{answer:true}],['x',{answer:true}]]},
      subparts:[
        {text:'ב. מה משמעות הנקודה `(3,30)` בהקשר של החנייה?',responseSpace:'explanation',level:5},
        {text:'ג. האם הנקודה `(7,70)` נמצאת על אותו גרף? נמקו.',responseSpace:'explanation',level:5},
        {text:'ד. מהו השיפוע של הגרף ומה משמעותו בהקשר?',responseSpace:'lines-2',level:5}
      ],
      mathModel:{standard:{A:-10,B:1,C:0},expected:{m:10,b:0,xIntercept:0},probes:[{point:[3,30],onLine:true},{point:[7,70],onLine:true}]}
    }
  ]
};
