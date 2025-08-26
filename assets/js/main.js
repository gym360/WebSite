// Mobile nav toggle
const navToggleButton = document.getElementById('navToggle');
const primaryNavList = document.getElementById('primaryNav');
if (navToggleButton && primaryNavList) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = primaryNavList.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Theme (dark/light) toggle with persistence
const themeToggleButton = document.getElementById('themeToggle');
const rootHtml = document.documentElement;
const THEME_KEY = 'gym360_theme';

function applyTheme(theme) {
  rootHtml.setAttribute('data-theme', theme);
  themeToggleButton && (themeToggleButton.textContent = theme === 'dark' ? '🌙' : '☀️');
}

const preferredTheme = localStorage.getItem(THEME_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(preferredTheme);

themeToggleButton?.addEventListener('click', () => {
  const next = rootHtml.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
});

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href.length <= 1) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


