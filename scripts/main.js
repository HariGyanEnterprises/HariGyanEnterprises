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
// Function to apply dynamic padding based on header height
    function applySmartPadding() {
      const header = document.getElementById('header');
      const mainContent = document.querySelector('.main-content');

      // Get the actual height of the header
      const headerHeight = header.offsetHeight;

      // Set the padding as 1.2 times the header height
      mainContent.style.paddingTop = `${headerHeight * 1.2}px`;
    }

    // Call the function when the page loads
    window.onload = applySmartPadding;

    // Optional: If the header height changes dynamically, listen for resize events
    window.onresize = applySmartPadding;
