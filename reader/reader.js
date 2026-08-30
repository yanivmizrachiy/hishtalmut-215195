'use strict';

const STORAGE_PREFIX = 'linear-book:';
const q = (sel, root = document) => root.querySelector(sel);
const qa = (sel, root = document) => [...root.querySelectorAll(sel)];
const cards = qa('.page-card');
const search = q('#bookSearch');
const empty = q('#emptyState');
const progressText = q('#progressText');
const progressBar = q('#progressBar');
const continueLink = q('#continueLink');
const installButton = q('#installButton');
const networkBadge = q('#networkBadge');
let activeChapter = 'all';
let deferredInstallPrompt = null;

function storageGet(key, fallback = '') {
  try { return localStorage.getItem(STORAGE_PREFIX + key) ?? fallback; }
  catch { return fallback; }
}

function storageSet(key, value) {
  try { localStorage.setItem(STORAGE_PREFIX + key, String(value)); }
  catch { /* storage can be unavailable without breaking the reader */ }
}

function normalize(value) {
  return String(value ?? '').trim().toLocaleLowerCase('he').replace(/[־–—]/g, '-');
}

function readVisited() {
  try {
    const parsed = JSON.parse(storageGet('visited', '[]'));
    return new Set(Array.isArray(parsed) ? parsed.map(Number).filter(Number.isFinite) : []);
  } catch { return new Set(); }
}

function writeVisited(set) {
  storageSet('visited', JSON.stringify([...set].sort((a, b) => a - b)));
}

function updateProgress() {
  const visited = readVisited();
  const total = cards.length;
  const done = cards.filter(card => visited.has(Number(card.dataset.page))).length;
  const percent = total ? Math.round(done / total * 100) : 0;
  if (progressText) progressText.textContent = `${done} מתוך ${total} עמודים נפתחו · ${percent}%`;
  if (progressBar) {
    progressBar.value = done;
    progressBar.max = Math.max(total, 1);
    progressBar.setAttribute('aria-valuetext', `${percent}%`);
  }
  cards.forEach(card => card.classList.toggle('is-visited', visited.has(Number(card.dataset.page))));
}

function updateContinue() {
  if (!continueLink) return;
  const page = Number(storageGet('last-page', ''));
  const card = cards.find(item => Number(item.dataset.page) === page);
  if (!card) {
    continueLink.hidden = true;
    return;
  }
  continueLink.href = card.href;
  continueLink.textContent = `המשך מעמוד ${page}`;
  continueLink.hidden = false;
}

function applyFilter() {
  const term = normalize(search?.value || '');
  let visible = 0;
  cards.forEach(card => {
    const chapterMatches = activeChapter === 'all' || card.dataset.chapter === activeChapter;
    const textMatches = !term || normalize(card.dataset.search).includes(term);
    const show = chapterMatches && textMatches;
    card.hidden = !show;
    if (show) visible += 1;
  });
  qa('.chapter-section').forEach(section => {
    section.hidden = !qa('.page-card:not([hidden])', section).length;
  });
  if (empty) empty.hidden = visible > 0;
}

cards.forEach(card => {
  card.addEventListener('click', () => {
    const page = Number(card.dataset.page);
    storageSet('last-page', page);
    const visited = readVisited();
    visited.add(page);
    writeVisited(visited);
  });
});

search?.addEventListener('input', applyFilter);
q('#clearSearch')?.addEventListener('click', () => {
  if (search) search.value = '';
  search?.focus();
  applyFilter();
});

qa('.chapter-filter').forEach(button => button.addEventListener('click', () => {
  activeChapter = button.dataset.chapter || 'all';
  qa('.chapter-filter').forEach(item => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  applyFilter();
}));

function updateNetworkState() {
  if (!networkBadge) return;
  const online = navigator.onLine;
  networkBadge.textContent = online ? 'מחובר' : 'מצב לא מקוון';
  networkBadge.classList.toggle('is-offline', !online);
}
window.addEventListener('online', updateNetworkState);
window.addEventListener('offline', updateNetworkState);
updateNetworkState();

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (installButton) installButton.hidden = false;
});

installButton?.addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installButton.hidden = true;
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}

updateContinue();
updateProgress();
applyFilter();
