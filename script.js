// ── Language toggle ──
let currentLang = 'fr';

function toggleLang() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  const btn = document.getElementById('langBtn');
  btn.textContent = '';
  btn.classList.toggle('en');
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-fr][data-en]').forEach(el => {
    el.textContent = el.getAttribute('data-' + currentLang);
  });
}

// ── Back to top ──
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    backToTop.style.visibility = 'visible';
    backToTop.style.opacity = '1';
    backToTop.style.transform = 'scale(1)';
  } else {
    backToTop.style.visibility = 'hidden';
    backToTop.style.opacity = '0';
    backToTop.style.transform = 'scale(0)';
  }
});

// ── Keyboard accessibility ──
const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing');
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);