export const page={
  page:55,
  chapter:22,
  kicker:'פרק 22 · חישובי שטחים במערכת הצירים',
  title:'משני ישרים למשולש ולשטח',
  subtitle:'חיתוכים → נקודות → בסיס וגובה → שטח',
  rule:'כאשר ישרים חותכים את הצירים, נקודות החיתוך מאפשרות לבנות צורות במערכת הצירים. כדי לחשב שטח משולש משתמשים בבסיס ובגובה המאונך אליו.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-71-question-6'
  ],
  questions:[
    {
      id:'GA01-P55-Q1',family:'GA01',level:6,responseSpace:'mixed',
      stem:'נתונים הישרים `y=x+4` ו־`y=-x+4`.',
      graph:{
        xMin:-6,xMax:6,yMin:-2,yMax:8,xTick:1,yTick:1,showCoordinates:false,
        ariaLabel:'שני ישרים y שווה x ועוד 4 ו-y שווה מינוס x ועוד 4, נחתכים על ציר y וחותכים את ציר x',
        lines:[{through:[[-4,0],[0,4]]},{through:[[0,4],[4,0]]}],
        points:[{x:0,y:4,label:'A'},{x:-4,y:0,label:'B'},{x:4,y:0,label:'C'}]
      },
      subparts:[
        {text:'מצאו את שיעורי הנקודה `A`, נקודת החיתוך של שני הישרים.',responseSpace:'lines-2',answerShape:'ordered-pair'},
        {text:'מצאו את שיעורי הנקודה `B`, נקודת החיתוך של `y=x+4` עם ציר `x`.',responseSpace:'lines-2',answerShape:'ordered-pair'},
        {text:'מצאו את שיעורי הנקודה `C`, נקודת החיתוך של `y=-x+4` עם ציר `x`.',responseSpace:'lines-2',answerShape:'ordered-pair'}
      ],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 71, question 6(a) — match the two lines y=x+4 and y=-x+4 and calculate A,B,C',
      adaptation:'שמות B ו-C הוגדרו באופן מפורש לפי הישר שעליו כל נקודה נמצאת, כדי למנוע תלות בכיוון תווית מתוך תמונת המקור. הקואורדינטות והישרים נשמרו בדיוק.'
    },
    {
      id:'GA02-P55-Q2',family:'GA02',level:7,responseSpace:'explanation',
      stem:'האם המשולשים `AOB` ו־`AOC` חופפים? נמקו בעזרת האורכים או הסימטריה במערכת הצירים.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 71, question 6(b) — are triangles AOB and AOC congruent; justify'
    },
    {
      id:'GA03-P55-Q3',family:'GA03',level:7,responseSpace:'explanation',
      stem:'הסבירו מדוע המשולש `ABC` הוא משולש שווה־שוקיים.',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 71, question 6(c) — explain why ABC is isosceles'
    },
    {
      id:'GA04-P55-Q4',family:'GA04',level:8,responseSpace:'geometry-work',
      stem:'חשבו את שטח המשולש `ABC`. הציגו את אורך הבסיס, את הגובה ואת החישוב.',
      answerLabel:'דרך ושטח:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 71, question 6(d) — calculate the area of triangle ABC'
    }
  ]
};
