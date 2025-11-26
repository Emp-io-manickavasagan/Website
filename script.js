// Mobile nav toggle and simple animations

document.addEventListener('DOMContentLoaded', function () {
  // year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // mobile nav
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const menuOpen = document.getElementById('menuOpen');
  const menuClose = document.getElementById('menuClose');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('hidden');
      // toggle icons
      menuOpen.classList.toggle('hidden');
      menuClose.classList.toggle('hidden');
      mobileNav.classList.toggle('hidden');
    });
  }

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav if open
        if (!mobileNav.classList.contains('hidden')) {
          mobileNav.classList.add('hidden');
          menuOpen.classList.remove('hidden');
          menuClose.classList.add('hidden');
        }
      }
    });
  });

  // simple reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('section, article, .glass').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-6', 'transition', 'duration-700');
    observer.observe(el);
  });
});
