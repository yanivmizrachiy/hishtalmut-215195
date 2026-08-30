export const page={
  page:58,
  chapter:24,
  kicker:'פרק 24 · משימות אינטגרטיביות, חקר והערכה',
  title:'מערכת משוואות',
  subtitle:'מקבילים → פתרון יחיד → אותו ישר',
  rule:'פתרון של מערכת שתי משוואות קוויות הוא נקודת חיתוך משותפת. ישרים מקבילים שונים נותנים אפס פתרונות; ישרים בעלי שיפועים שונים נותנים פתרון יחיד; שתי משוואות המתארות אותו ישר נותנות אינסוף פתרונות.',
  sourceRefs:['official:systems:2','official:systems:4','razpages:bank.json systems'],
  questions:[
    {id:'SY01-P58-Q1',family:'SY01',level:6,responseSpace:'mixed',stem:'נתונה המערכת `y=2x+6` ו־`y=2x-6`.',subparts:[{text:'מהו השיפוע של כל אחד משני הישרים?',responseSpace:'short',answerCount:2,betweenAnswers:'ו־'},{text:'מה שונה בין שתי המשוואות?',responseSpace:'lines-2'},{text:'מה ניתן להסיק על שני הישרים?',responseSpace:'lines-2'}],sourceRef:'official:systems:4 — זיהוי מערכת ללא פתרון באמצעות ישרים מקבילים',adaptation:'זיהוי קשר בין שיפועים למספר פתרונות.'},
    {id:'SY01-P58-Q2',family:'SY01',level:7,responseSpace:'short',stem:'כמה פתרונות יש למערכת?',sourceRef:'official:systems:4 — אפס, פתרון יחיד או אינסוף פתרונות',adaptation:'קביעת מספר הפתרונות.'},
    {id:'SY02-P58-Q3',family:'SY02',level:8,responseSpace:'mixed',stem:'שרטטו את שני הישרים ובדקו את המסקנה הגרפית.',graph:{xMin:-5,xMax:5,yMin:-10,yMax:16,xTick:1,yTick:2,showCoordinates:false,ariaLabel:'שני ישרים מקבילים y שווה 2x ועוד 6 ו-y שווה 2x פחות 6',lines:[{through:[[0,6],[1,8]]},{through:[[0,-6],[1,-4]]}],points:[]},subparts:[{text:'האם הגרפים נחתכים?',responseSpace:'choice-mark',choices:['כן','לא']},{text:'הסבירו כיצד הגרף מאשר את מספר הפתרונות שקבעתם.',responseSpace:'lines-2'}],sourceRef:'official:systems:2 — פתרון מערכת באופן גרפי',adaptation:'המשמעות הגרפית של מערכת ללא פתרון.'},
    {id:'SY01-P58-Q4',family:'SY01',level:8,responseSpace:'mixed',stem:'לכל מערכת קבעו כמה פתרונות יש לה ונמקו לפי הקשר בין הישרים.',subparts:[{text:'`y=3x+1` ו־`y=3x-4` — כמה פתרונות?',responseSpace:'short'},{text:'`y=3x+1` ו־`y=-x+5` — כמה פתרונות?',responseSpace:'short'},{text:'`y=3x+1` ו־`2y=6x+2` — כמה פתרונות? הסבירו מדוע שתי המשוואות מתארות אותו ישר.',responseSpace:'lines-2'}],sourceRef:'official:systems:4 — הבחנה בין אפס, אחד ואינסוף פתרונות',adaptation:'שלושת המצבים האפשריים למערכת קווית.'}
  ]
};
