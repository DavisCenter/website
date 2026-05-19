/* Davis Center for Child Development — script.js */

(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('nav-drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      const open = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Close drawer when a link inside it is clicked
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  /* ---- Mark current page nav link ---- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ---- Contact form Formspree handling ---- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const successMsg = document.getElementById('form-success');
      const originalText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      try {
        const data = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          contactForm.reset();
          contactForm.style.display = 'none';
          if (successMsg) successMsg.style.display = 'block';
        } else {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          alert('There was a problem submitting your request. Please try emailing us directly at office@daviscentercd.org.');
        }
      } catch (err) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        alert('There was a problem submitting your request. Please try emailing us directly at office@daviscentercd.org.');
      }
    });
  }

})();
