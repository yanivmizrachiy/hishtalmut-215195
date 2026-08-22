// Aggregator נגזר: שומר תאימות לבונה/וולידטור הקיימים ומצרף אוטומטית עמודים מודולריים חדשים.
import { pages as legacyPages } from './pages-07-15-legacy.mjs';
import { pages as modularPages } from './pages/index.mjs';

export const pages=[...legacyPages,...modularPages].sort((a,b)=>a.page-b.page);
