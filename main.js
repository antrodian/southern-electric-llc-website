document.documentElement.classList.add('has-js');

const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  const menuLabel = menuButton.querySelector('.menu-label');
  const closeMenu = (restoreFocus = false) => {
    const wasOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', 'false');
    if (menuLabel) menuLabel.textContent = 'Menu';
    siteNav.classList.remove('is-open');
    if (restoreFocus && wasOpen) menuButton.focus();
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    if (menuLabel) menuLabel.textContent = isOpen ? 'Menu' : 'Close';
    siteNav.classList.toggle('is-open', !isOpen);
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu(true);
  });

  document.addEventListener('pointerdown', (event) => {
    if (!event.target.closest('.site-header')) closeMenu();
  });

  window.matchMedia('(min-width: 681px)').addEventListener('change', () => closeMenu());
}

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const canObserve = 'IntersectionObserver' in window;
const heroVisual = document.querySelector('.hero-visual');
const heroSection = document.querySelector('.hero');
const siteHeader = document.querySelector('.site-header');
const contactSection = document.querySelector('#contact');
const mobileContactBar = document.querySelector('.mobile-contact-bar');
const revealElements = [...document.querySelectorAll('.reveal')];
const sectionTargets = [...document.querySelectorAll('.site-nav a[href^="#"]')].map((link) => ({
  link, section: document.querySelector(link.getAttribute('href')),
})).filter(({ section }) => section);

// Decorative type is split only after JS loads; the static words remain the fallback.
document.querySelectorAll('[data-split]').forEach((word) => {
  const letters = [...word.textContent].map((letter, index) => {
    const span = document.createElement('span');
    span.className = 'char';
    span.style.setProperty('--char', index);
    span.textContent = letter;
    return span;
  });
  word.replaceChildren(...letters);
});

const setMotionState = () => {
  document.documentElement.classList.toggle('has-motion', canObserve && !motionPreference.matches);
  if (motionPreference.matches) revealElements.forEach((element) => element.classList.add('is-visible'));
};
setMotionState();
if (canObserve) {
  const heroObserver = new IntersectionObserver(([entry]) => {
    heroVisual.classList.toggle('is-in-view', entry.isIntersecting);
  });
  if (heroVisual) heroObserver.observe(heroVisual);
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .08, rootMargin: '0px 0px -24px 0px' });
  revealElements.forEach((element) => revealObserver.observe(element));
}

document.addEventListener('visibilitychange', () => {
  document.documentElement.classList.toggle('is-document-hidden', document.hidden);
});

let scrollFrame = 0;
const updateScrollEffects = () => {
  scrollFrame = 0;
  document.body.classList.toggle('is-scrolled', window.scrollY > 12);
  let activeLink = null;
  sectionTargets.forEach(({ link, section }) => {
    if (section.getBoundingClientRect().top <= window.innerHeight * .4) activeLink = link;
  });
  sectionTargets.forEach(({ link }) => {
    if (link === activeLink) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  if (mobileContactBar && heroSection && contactSection) {
    const show = window.innerWidth <= 680 && heroSection.getBoundingClientRect().bottom <= siteHeader.getBoundingClientRect().height &&
      contactSection.getBoundingClientRect().top > window.innerHeight * .8 &&
      !document.body.classList.contains('is-form-focused') &&
      menuButton?.getAttribute('aria-expanded') !== 'true';
    mobileContactBar.classList.toggle('is-visible', show);
    mobileContactBar.inert = !show;
  }
};
const requestScrollUpdate = () => {
  if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollEffects);
};
window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', requestScrollUpdate);
window.addEventListener('pageshow', requestScrollUpdate);
window.addEventListener('load', requestScrollUpdate);
motionPreference.addEventListener('change', setMotionState);
menuButton?.addEventListener('click', requestScrollUpdate);
document.addEventListener('keydown', requestScrollUpdate);
document.addEventListener('pointerdown', requestScrollUpdate);
updateScrollEffects();

const inquiryForm = document.querySelector('#project-inquiry');
if (inquiryForm) {
  const replyField = document.querySelector('#inquiry-reply');
  const phoneField = document.querySelector('#inquiry-phone');
  const status = document.querySelector('#inquiry-status');
  const setFormFocus = (focused) => {
    document.body.classList.toggle('is-form-focused', focused);
    requestScrollUpdate();
  };
  const updatePhoneRequirement = () => {
    phoneField.required = replyField.value === 'Phone';
  };
  replyField.addEventListener('change', updatePhoneRequirement);
  updatePhoneRequirement();

  inquiryForm.addEventListener('focusin', () => setFormFocus(true));
  inquiryForm.addEventListener('focusout', () => {
    window.requestAnimationFrame(() => {
      if (!inquiryForm.contains(document.activeElement)) setFormFocus(false);
    });
  });

  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;
    const data = new FormData(inquiryForm);
    const projectType = String(data.get('projectType')).trim();
    const body = [
      `Name: ${String(data.get('name')).trim()}`,
      `Email: ${String(data.get('email')).trim()}`,
      `Phone: ${String(data.get('phone')).trim() || 'Not provided'}`,
      `Preferred reply: ${String(data.get('replyBy')).trim()}`,
      `Project type: ${projectType}`,
      '',
      'Project details:',
      String(data.get('message')).trim(),
    ].join('\n');
    const subject = `Southern Electric LLC project inquiry: ${projectType}`;
    status.textContent = 'Email draft opening. Review and send it from your email app.';
    window.location.href = `mailto:tylan.southernelectricllc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
