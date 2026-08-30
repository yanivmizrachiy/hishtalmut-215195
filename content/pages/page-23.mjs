export const page={
  page:23,
  chapter:8,
  kicker:'פרק 8 · משוואה לא מסודרת',
  title:'משוואה לא מסודרת',
  subtitle:'פילוג → כינוס → בידוד → פירוש · רמות 4–7',
  rule:'כאשר במשוואה מופיעים סוגריים, מפעילים את חוק הפילוג ומכנסים איברים דומים. לאחר שהמשוואה פשוטה יותר, מבודדים את `y` ומסדרים אותה לצורה `y=mx+b`.',
  sourceRefs:['SOURCE_OF_TRUTH.md#8.2','razpages:עמוד-431.html'],
  questions:[
    {
      id:'U13-P23-Q1',family:'U13,U03',level:4,responseSpace:'full-work',
      stem:'סדרו את `2(y+3)=4x+10` לצורה `y=mx+b`. הציגו במפורש את שלב פתיחת הסוגריים.',
      mathModel:{standard:{A:-2,B:1,C:2},expected:{m:2,b:2,xIntercept:-1}}
    },
    {
      id:'U13-P23-Q2',family:'U13,U02,U05',level:5,responseSpace:'full-work',
      stem:'סדרו את `3(x-2)+y=2x+5` לצורה `y=mx+b`, ואז כתבו את `m` ואת `b`.',
      mathModel:{standard:{A:1,B:1,C:11},expected:{m:-1,b:11,xIntercept:11}}
    },
    {
      id:'U13-P23-Q3',family:'U13,U12,U03',level:6,responseSpace:'full-work',
      stem:'סדרו את `2(x+y)=4x-6` לצורה `y=mx+b`. שימו לב שלאחר פתיחת הסוגריים יש `x` בשני אגפים.',
      mathModel:{standard:{A:-1,B:1,C:-3},expected:{m:1,b:-3,xIntercept:3}}
    },
    {
      id:'U13-P23-Q4',family:'U13,U12,U06,U07',level:7,responseSpace:'mixed',
      stem:'נתונה המשוואה `4(x-1)-2(y+3)=0`. סדרו אותה, ואז תארו את הישר.',
      mathModel:{standard:{A:2,B:-1,C:5},expected:{m:2,b:-5,xIntercept:[5,2]}},
      subparts:[
        {text:'כתבו את המשוואה המסודרת.',responseSpace:'equation'},
        {text:'`m=`',responseSpace:'short'},
        {text:'הגרף עולה / יורד / קבוע?',responseSpace:'short'},
        {text:'מהי נקודת החיתוך עם ציר `y`?',responseSpace:'equation'}
      ]
    },
    {
      id:'U13-P23-Q5',family:'U13,U03',level:7,responseSpace:'lines-2',
      stem:'סדרו את המשוואה `y=2x+3(x-4)` לצורה `y=mx+b`, וכתבו את `m` ואת `b`. הציגו את פתיחת הסוגריים.',
      mathModel:{standard:{A:-5,B:1,C:-12},expected:{m:5,b:-12,xIntercept:[12,5]}},
      sourceRef:'razpages:bank.json unordered sum-p099-q2 — פתיחת סוגריים וסידור ל-y=mx+b; מספרים שונו',
      adaptation:'פתיחת סוגריים באגף אחד וכינוס; מספרים שונו.'
    },
    {
      id:'U13-P23-Q6',family:'U13,U12,U03',level:8,responseSpace:'lines-2',
      stem:'סדרו את המשוואה `y=3(x+2)-2(x-1)` לצורה `y=mx+b`, וכתבו את `m` ואת `b`. הציגו את פתיחת שני זוגות הסוגריים.',
      mathModel:{standard:{A:-1,B:1,C:8},expected:{m:1,b:8,xIntercept:-8}},
      sourceRef:'razpages:bank.json unordered sum-p099-q2#7 — פתיחת שני זוגות סוגריים; מספרים שונו',
      adaptation:'פתיחת שני זוגות סוגריים וכינוס איברים; מספרים שונו.'
    }
  ]
};
