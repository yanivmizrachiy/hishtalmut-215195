# פונקציה קווית

ספר תרגול דיגיטלי ומודפס בפונקציה קווית.

## מקור האמת

**הקובץ היחיד והמחייב של דרישות הפרויקט הוא [`SOURCE_OF_TRUTH.md`](./SOURCE_OF_TRUTH.md).**

README, קובצי `meta/`, מפות משפחות, קוד ונתוני עמודים הם נגזרים בלבד ואינם מקור אמת נוסף.

## מצב עבודה

יצירת עמודים ותוכן לימודי חדש **מושהית** עד להוראה מפורשת לחדש את העבודה. בזמן ההשהיה מבוצעים רק ניקוי, תיקונים, בדיקות QA ותחזוקת עקביות.

המצב העדכני של מספר העמודים והאימות נמצא ב־[`meta/pages.json`](./meta/pages.json). אין לשכפל כאן מספרי עמודים קשיחים שמתיישנים.

## מבנה נקי

- `content/pages/page-N.mjs` — יחידת התוכן היחידה לכל עמוד.
- `content/book-pages.mjs` — registry טכני יחיד שאוסף אוטומטית את כל העמודים.
- `content/book-config.mjs` — הגדרות טכניות משותפות בלבד.
- `scripts/build-pages.mjs` — בניית HTML מתוך נתוני העמודים.
- `styles/a4-base.css` — עיצוב A4 משותף.
- `sources/razpages-linear/` — עותק מקורות `razpages` הרלוונטיים; חומר מקור בלבד.
- `meta/pages.json` ו־`meta/visual-qa-latest.json` — מצב וראיות QA נגזרים.

אין להשתמש באוספי תוכן legacy מקבילים. כל עמוד פעיל נמצא במודל `page-N.mjs`.

## QA

הפקודה הראשית:

`npm run qa:all`

היא כוללת בנייה מלאה, בדיקות מבניות, Exact Math QA, בדיקות מקורות, רגרסיות של תיקוני משתמש ו־Chromium/Playwright על כל דפי הספר.

ב־Windows אפשר להריץ גם:

`powershell -ExecutionPolicy Bypass -File .\qa-all.ps1`

## ספר דיגיטלי

הקורא הציבורי הקבוע:

https://linear-function-digital-book.vercel.app/

הקורא מושך את מצב הספר מ־`main`.

## זהות הפרויקט

שם הריפו המחייב לפי מקור האמת הוא `linear-function`. שינוי שם הריפו עצמו ב־GitHub חייב להתבצע כאשר פעולת Rename Repository זמינה; אין ליצור ריפו חלופי רק כדי לעקוף זאת.
