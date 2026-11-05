document.documentElement.classList.add('has-js');

const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const compactLayout = window.matchMedia('(max-width: 680px), (max-width: 960px) and (max-height: 500px)');

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

  compactLayout.addEventListener('change', () => closeMenu());
}

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const canObserve = 'IntersectionObserver' in window;
const heroVisual = document.querySelector('.hero-visual');
const heroSection = document.querySelector('.hero');
const aboutSection = document.querySelector('#about');
const siteHeader = document.querySelector('.site-header');
const contactSection = document.querySelector('#contact');
const mobileContactBar = document.querySelector('.mobile-contact-bar');
const revealElements = [...document.querySelectorAll('.reveal')];
const serviceItems = [...document.querySelectorAll('.service-item')];
const revealStates = revealElements.map((element) => ({
  element, progress: 0, column: serviceItems.indexOf(element),
}));
const clampProgress = (value) => Math.max(0, Math.min(1, value));
const easeOut = (value) => 1 - Math.pow(1 - value, 3);
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
  const enabled = canObserve && !motionPreference.matches;
  document.documentElement.classList.toggle('has-motion', enabled);
  document.documentElement.classList.toggle('has-scroll-motion', enabled);
  if (!enabled) revealStates.forEach((state) => {
    state.progress = 1;
    state.element.style.setProperty('--reveal', '1');
  });
};
setMotionState();
if (canObserve) {
  const heroObserver = new IntersectionObserver(([entry]) => {
    heroVisual.classList.toggle('is-in-view', entry.isIntersecting);
  });
  if (heroVisual) heroObserver.observe(heroVisual);
}

document.addEventListener('visibilitychange', () => {
  document.documentElement.classList.toggle('is-document-hidden', document.hidden);
  if (!document.hidden) requestScrollUpdate();
});
document.documentElement.classList.toggle('is-document-hidden', document.hidden);

let scrollFrame = 0;
const updateScrollEffects = () => {
  scrollFrame = 0;
  const viewportHeight = window.innerHeight;
  const isPhone = compactLayout.matches;
  const hasRoomForContactBar = (window.visualViewport?.height || viewportHeight) >= 480;
  // Measure stable, untransformed containers before writing any styles.
  const heroRect = heroSection?.getBoundingClientRect();
  const contactRect = contactSection?.getBoundingClientRect();
  const headerHeight = siteHeader?.getBoundingClientRect().height || 0;
  let activeLink = null;
  sectionTargets.forEach(({ link, section }) => {
    if (section.getBoundingClientRect().top <= viewportHeight * .4) activeLink = link;
  });
  const animateScroll = canObserve && !motionPreference.matches;
  const aboutRect = animateScroll ? aboutSection?.getBoundingClientRect() : null;
  const revealUpdates = animateScroll ? revealStates.filter((state) => state.progress < 1).map((state) => {
    const delay = !isPhone && state.column > 0 ? state.column * .045 : 0;
    const top = state.element.getBoundingClientRect().top;
    const start = isPhone ? 1.02 : .92;
    const distance = isPhone ? .24 : .28;
    const progress = clampProgress((viewportHeight * (start - delay) - top) / (viewportHeight * distance));
    return { state, progress: Math.max(state.progress, progress) };
  }) : [];

  document.body.classList.toggle('is-scrolled', window.scrollY > 12);
  sectionTargets.forEach(({ link }) => {
    if (link === activeLink) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  if (mobileContactBar && heroRect && contactRect) {
    const show = isPhone && hasRoomForContactBar && heroRect.bottom <= headerHeight &&
      contactRect.top > viewportHeight * .8 &&
      !document.body.classList.contains('is-form-focused') &&
      menuButton?.getAttribute('aria-expanded') !== 'true';
    mobileContactBar.classList.toggle('is-visible', show);
    mobileContactBar.inert = !show;
  }
  if (animateScroll) {
    if (heroRect) heroSection.style.setProperty('--hero-scroll', clampProgress(-heroRect.top / heroRect.height).toFixed(4));
    if (aboutRect) {
      const progress = clampProgress((viewportHeight - aboutRect.top) / (viewportHeight * .65));
      aboutSection.style.setProperty('--section-open', easeOut(progress).toFixed(4));
    }
    revealUpdates.forEach(({ state, progress }) => {
      if (progress === state.progress) return;
      state.progress = progress;
      state.element.style.setProperty('--reveal', easeOut(progress).toFixed(4));
    });
  }
};
const requestScrollUpdate = () => {
  if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollEffects);
};
window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', requestScrollUpdate);
window.visualViewport?.addEventListener('resize', requestScrollUpdate);
window.addEventListener('pageshow', requestScrollUpdate);
window.addEventListener('load', requestScrollUpdate);
motionPreference.addEventListener('change', () => {
  setMotionState();
  requestScrollUpdate();
});
menuButton?.addEventListener('click', requestScrollUpdate);
document.addEventListener('keydown', requestScrollUpdate);
document.addEventListener('pointerdown', requestScrollUpdate);
document.addEventListener('focusin', (event) => {
  const state = revealStates.find(({ element }) => element.contains(event.target));
  if (state) {
    state.progress = 1;
    state.element.style.setProperty('--reveal', '1');
  }
});
updateScrollEffects();

// Keep inquiry links useful when the form is tucked into a disclosure.
const inquiryPanel = document.querySelector('#inquiry');
const openLinkedInquiry = () => {
  if (window.location.hash === '#inquiry' && inquiryPanel) inquiryPanel.open = true;
};
document.querySelectorAll('a[href="#inquiry"]').forEach((link) => {
  link.addEventListener('click', () => {
    if (inquiryPanel) inquiryPanel.open = true;
  });
});
window.addEventListener('hashchange', openLinkedInquiry);
document.querySelectorAll('details').forEach((disclosure) => {
  disclosure.addEventListener('toggle', requestScrollUpdate);
});
openLinkedInquiry();

const inquiryForm = document.querySelector('#project-inquiry');
if (inquiryForm) {
  const replyField = document.querySelector('#inquiry-reply');
  const phoneField = document.querySelector('#inquiry-phone');
  const phoneNote = document.querySelector('#inquiry-phone-note');
  const status = document.querySelector('#inquiry-status');
  const setFormFocus = (focused) => {
    document.body.classList.toggle('is-form-focused', focused);
    requestScrollUpdate();
  };
  const updatePhoneRequirement = () => {
    phoneField.required = replyField.value === 'Phone';
    if (phoneNote) phoneNote.textContent = phoneField.required ? '(required)' : '(optional)';
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
