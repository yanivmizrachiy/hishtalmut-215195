export const page={
  page:93,
  chapter:29,
  kicker:'נקודת חיתוך · קריאת גרף',
  title:'נקודת החיתוך של שני ישרים',
  subtitle:'ערכי פונקציה · עליה וירידה · טענות · שטח משולש',
  rule:'בגרף זה `f` הוא הישר העובר דרך `A` ו־`C`, ו־`g` הוא הישר העובר דרך `A` ו־`B`. קוראים ערכים מהגרף, בודקים נקודות באמצעות המשוואה, ובחישוב שטח משתמשים באורך בסיס ובגובה מאונך.',
  sourceRefs:['razpages:עמוד-459.html'],
  questions:[
    {
      id:'RZ459-Q1-P93-Q1',family:'Q02,Q03,S14',level:7,responseSpace:'mixed',
      stem:'לפניכם הגרפים של `f` ו־`g`, הנחתכים בנקודה `A`. ענו על כל סעיפי המקור.',
      sourceRef:'razpages:עמוד-459.html — שאלה 1: גרפי f,g; ערכים ב-x=0; גרף יורד; ארבע טענות; שטח ABC',
      adaptation:'הגרף שוחזר בדיוק מן הנקודות המסומנות במקור. במקום תוויות טקסט על הישרים, f מזוהה כ-AC ו-g כ-AB.',
      graph:{xMin:-10,xMax:10,yMin:-10,yMax:10,xTick:2,yTick:2,lines:[{through:[[-3,0],[0,6]]},{through:[[-3,0],[0,-6]]}],points:[{x:-3,y:0,label:'A'},{x:0,y:-6,label:'B'},{x:0,y:6,label:'C'},{x:0,y:0,label:'O'}],showCoordinates:false,ariaLabel:'הישרים f=AC ו-g=AB, נחתכים בנקודה A(-3,0)'},
      subparts:[
        {text:'השלימו: `f(0)=`',responseSpace:'short',level:7},
        {text:'השלימו: `g(0)=`',responseSpace:'short',level:7},
        {text:'איזה מבין הישרים `f`, `g` הוא גרף יורד?',responseSpace:'short',level:7},
        {text:'קבעו נכון/לא נכון: הנקודה `(-1,4)` נמצאת על גרף `f`. נמקו.',responseSpace:'explanation',level:7},
        {text:'קבעו נכון/לא נכון: נקודת החיתוך של שתי הפונקציות היא `(-3,0)`. נמקו.',responseSpace:'explanation',level:7},
        {text:'קבעו נכון/לא נכון: `f(1)=4`.',responseSpace:'short',level:7},
        {text:'קבעו נכון/לא נכון: `f(1)>g(1)`.',responseSpace:'short',level:7},
        {text:'חשבו את שטח המשולש `ABC` והציגו דרך.',responseSpace:'lines-2',level:7}
      ],
      mathModel:{
        standard:{A:-2,B:1,C:6},expected:{m:2,b:6,xIntercept:-3},
        probes:[{point:[-3,0],onLine:true},{point:[0,6],onLine:true},{point:[-1,4],onLine:true}],
        graphLineModels:[{standard:{A:-2,B:1,C:6}},{standard:{A:2,B:1,C:-6}}]
      }
    }
  ]
};
