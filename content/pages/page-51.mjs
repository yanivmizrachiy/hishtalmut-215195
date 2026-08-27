export const page={
  page:51,
  chapter:20,
  kicker:'פרק 20 · בעיות מילוליות ומודלים קוויים',
  title:'מתי תכנית אחת משתלמת יותר?',
  subtitle:'מתרגמים "זולה יותר" → אי־שוויון → פותרים → מפרשים',
  rule:'כדי לבדוק מתי תכנית אחת זולה יותר מתכנית אחרת, משווים בין שתי פונקציות המחיר באמצעות אי־שוויון. תחום הפתרון אומר עבור אילו ערכי `x` ההשוואה נכונה.',
  sourceRefs:[
    'jerusalem2:src/content/curriculum/idkun-algebri-8.json#page-88-solar-inequality'
  ],
  questions:[
    {
      id:'MD03-P51-Q1',family:'MD03',level:5,responseSpace:'choice-mark',
      stem:'איזה אי־שוויון מייצג את המצב שבו תכנית "גג ירוק" זולה יותר מתכנית "חשמל רגיל"?',
      choices:['`0.6x<0.2x+120`','`0.6x>0.2x+120`','`0.6x+120<0.2x`','`0.8x>120`'],
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88, question 2 — choose the inequality representing when green roof is cheaper',
      adaptation:'ארבע אפשרויות המקור נשמרו ללא שינוי מתמטי.'
    },
    {
      id:'MD03-P51-Q2',family:'MD03',level:6,responseSpace:'full-work',
      stem:'פתרו את האי־שוויון המתאים שמצאתם.',
      answerLabel:'דרך ותחום פתרון:',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88, question 2 + question ג — determine the consumption for which green roof is cheaper',
      adaptation:'הבחירה האמריקאית מחוברת לפתרון אלגברי מלא, כפי שנדרש בהמשך אותה שאלת מקור.'
    },
    {
      id:'MD04-P51-Q3',family:'MD04',level:7,responseSpace:'explanation',
      stem:'הסבירו במילים מה אומר תחום הפתרון על צריכת החשמל של משפחת לוי. מתי משתלם לעבור לתכנית "גג ירוק"?',
      sourceRef:'jerusalem2:src/content/curriculum/idkun-algebri-8.json, page 88, question ג — explain what the electricity consumption must be for green roof to be worthwhile',
      adaptation:'נשמרה דרישת המקור לפרש את התוצאה בהקשר ולא להסתפק בפתרון אלגברי.'
    },
    {
      id:'MD03-P51-Q4',family:'MD03,X03',level:7,responseSpace:'full-work',
      stem:'חברת משלוחים "איילה" גובה `y=2x+10` ש״ח לפי משקל `x` בק״ג, וחברת "הצבי" גובה `y=3x` ש״ח. באיזה משקל המחיר בשתי החברות שווה? הציגו דרך.',
      sourceRef:'razpages:bank.json word-problems MEITZAV-delivery — נקודת שוויון בין שני מודלי מחיר; מספרים שונו',
      adaptation:'הקשר משלוחים מן המאגר; מציאת נקודת השוויון בין שני המודלים; מספרים שונו.'
    },
    {
      id:'MD03-P51-Q5',family:'MD03',level:7,responseSpace:'lines-2',
      stem:'עבור אילו משקלים חברת "איילה" זולה יותר מ"הצבי"? כתבו אי־שוויון מתאים ופתרו אותו.',
      answerLabel:'אי־שוויון ותחום פתרון:',
      sourceRef:'razpages:bank.json word-problems — השוואת מודלים באמצעות אי־שוויון; מספרים שונו',
      adaptation:'המשך ישיר: מנקודת השוויון אל תחום העדיפות באמצעות אי־שוויון.'
    },
    {
      id:'MD04-P51-Q6',family:'MD04',level:8,responseSpace:'explanation',
      stem:'כתבו דוגמה למחיר של חברה שלישית "יונה" שתמיד תהיה יקרה יותר משתי החברות "איילה" ו"הצבי", עבור כל משקל. נמקו מדוע.',
      sourceRef:'razpages:bank.json word-problems MEITZAV-delivery — בניית מודל שלישי יקר תמיד; מספרים שונו',
      adaptation:'שאלת יצירה/נימוק הסוגרת את רצף השוואת המודלים.'
    }
  ]
};
