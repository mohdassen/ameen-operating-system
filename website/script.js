const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const demoButton = document.querySelector('#demoButton');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (demoButton) {
  demoButton.addEventListener('click', () => {
    alert('Demo request form is a prototype. Connect this button to email, CRM, or a backend endpoint before production launch.');
  });
}
