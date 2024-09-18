let currentLanguage = 'en';

function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';

  elements.forEach((el) => {
    el.textContent = el.getAttribute(`data-${currentLanguage}`);
  });

  // Update the button text
  const langToggleButton = document.getElementById('language-toggle');
  langToggleButton.textContent = currentLanguage === 'en' ? 'हिंदी' : 'English';
}

// Mobile Menu Toggle
function toggleMenu() {
  const nav = document.querySelector('header nav');
  nav.classList.toggle('active');
}
