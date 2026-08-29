export const page={
  page:55,
  chapter:22,
  kicker:'פרק 22 · חישובי שטחים במערכת הצירים',
  title:'משני ישרים למשולש ולשטח',
  subtitle:'חיתוכים → נקודות → בסיס וגובה → שטח',
  rule:'כאשר ישרים חותכים את הצירים, נקודות החיתוך מאפשרות לבנות צורות במערכת הצירים. כדי לחשב שטח משולש משתמשים בבסיס ובגובה המאונך אליו.',
  sourceRefs:['razpages:bank.json coordinate-geometry','official:linear:8','official:linear:13'],
  questions:[
    {id:'GA01-P55-Q1',family:'GA01',level:6,responseSpace:'mixed',stem:'נתונים הישרים `y=x+4` ו־`y=-x+4`.',graph:{xMin:-6,xMax:6,yMin:-2,yMax:8,xTick:1,yTick:1,showCoordinates:false,ariaLabel:'שני ישרים y שווה x ועוד 4 ו-y שווה מינוס x ועוד 4, נחתכים על ציר y וחותכים את ציר x',lines:[{through:[[-4,0],[0,4]]},{through:[[0,4],[4,0]]}],points:[{x:0,y:4,label:'A'},{x:-4,y:0,label:'B'},{x:4,y:0,label:'C'}]},subparts:[{text:'מצאו את שיעורי הנקודה `A`, נקודת החיתוך של שני הישרים.',responseSpace:'lines-2',answerShape:'ordered-pair'},{text:'מצאו את שיעורי הנקודה `B`, נקודת החיתוך של `y=x+4` עם ציר `x`.',responseSpace:'lines-2',answerShape:'ordered-pair'},{text:'מצאו את שיעורי הנקודה `C`, נקודת החיתוך של `y=-x+4` עם ציר `x`.',responseSpace:'lines-2',answerShape:'ordered-pair'}],sourceRef:'razpages:bank.json coordinate-geometry — חיתוכי ישרים עם הצירים ובניית משולש; מספרים מותאמים',adaptation:'שילוב חיתוכי ישרים וקריאת נקודות במערכת הצירים.'},
    {id:'GA02-P55-Q2',family:'GA02',level:7,responseSpace:'explanation',stem:'האם המשולשים `AOB` ו־`AOC` חופפים? נמקו בעזרת האורכים או הסימטריה במערכת הצירים.',sourceRef:'razpages:bank.json coordinate-geometry — חפיפה וסימטריה במערכת צירים',adaptation:'שאלת נימוק גאומטרית הנשענת על הנקודות שחושבו.'},
    {id:'GA03-P55-Q3',family:'GA03',level:7,responseSpace:'explanation',stem:'הסבירו מדוע המשולש `ABC` הוא משולש שווה־שוקיים.',sourceRef:'razpages:bank.json coordinate-geometry — זיהוי משולש שווה־שוקיים לפי קואורדינטות',adaptation:'חיבור בין קואורדינטות לתכונות גאומטריות.'},
    {id:'GA04-P55-Q4',family:'GA04',level:8,responseSpace:'geometry-work',stem:'חשבו את שטח המשולש `ABC`. הציגו את אורך הבסיס, את הגובה ואת החישוב.',answerLabel:'דרך ושטח:',sourceRef:'razpages:bank.json coordinate-geometry — חישוב שטח משולש במערכת הצירים',adaptation:'שטח מתוך נקודות חיתוך שכבר נמצאו.'}
  ]
};
