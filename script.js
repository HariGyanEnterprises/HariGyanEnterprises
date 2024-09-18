let currentLanguage = 'en';

function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';

  elements.forEach((el) => {
    el.textContent = el.getAttribute(`data-${currentLanguage}`);
  });
}

