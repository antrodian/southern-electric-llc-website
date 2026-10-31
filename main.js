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
const revealElements = [...document.querySelectorAll('.reveal')];
const valuesFlow = document.querySelector('.values-flow');
const valueItems = valuesFlow ? [...valuesFlow.querySelectorAll('.value-item')] : [];
const valueCounter = document.querySelector('.about-progress-current');
const servicesGrid = document.querySelector('.service-grid');
const heroVisual = document.querySelector('.hero-visual');
const motionToggle = document.querySelector('.motion-toggle');
const mainElement = document.querySelector('main');
const aboutSection = document.querySelector('.about');
const contactActions = document.querySelector('.contact-actions');
const journeySvg = document.querySelector('.journey-trace');
const journeyTrack = document.querySelector('.journey-track');
const journeyLive = document.querySelector('.journey-live');
const journeyHead = document.querySelector('.journey-head');
const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sectionTargets = sectionLinks.map((link) => ({
  link,
  section: document.querySelector(link.getAttribute('href')),
})).filter(({ section }) => section);
const canObserve = 'IntersectionObserver' in window;

if (motionToggle) {
  motionToggle.addEventListener('click', () => {
    const paused = document.documentElement.classList.toggle('circuit-paused');
    motionToggle.setAttribute('aria-pressed', String(paused));
    motionToggle.textContent = paused ? 'Play circuit' : 'Pause circuit';
  });
  motionToggle.textContent = 'Pause circuit';
}

if (canObserve) {
  if (heroVisual) {
    const heroObserver = new IntersectionObserver(([entry]) => {
      heroVisual.classList.toggle('is-in-view', entry.isIntersecting);
    });
    heroObserver.observe(heroVisual);
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -10% 0px' });

  revealElements.forEach((element) => revealObserver.observe(element));
}

const setMotionState = () => {
  document.documentElement.classList.toggle('has-motion', canObserve && !motionPreference.matches);
  if (motionPreference.matches) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
    valueItems.forEach((item) => item.classList.remove('is-active'));
  }
};

setMotionState();

let scrollFrame = 0;
let previousValueIndex = -1;
let journeyLength = 0;
let journeyStartY = 0;
let journeyEndY = 0;
const clamp = (value) => Math.min(1, Math.max(0, value));

const measureJourney = () => {
  const enabled = !motionPreference.matches && window.innerWidth > 800 &&
    mainElement && heroVisual && servicesGrid && aboutSection && contactActions &&
    valuesFlow && journeySvg && journeyTrack && journeyLive && journeyHead;
  document.documentElement.classList.toggle('has-journey', Boolean(enabled));
  if (!enabled) {
    journeyLength = 0;
    return;
  }

  const mainRect = mainElement.getBoundingClientRect();
  const heroRect = heroVisual.getBoundingClientRect();
  const servicesRect = servicesGrid.getBoundingClientRect();
  const aboutRect = aboutSection.getBoundingClientRect();
  const valuesRect = valuesFlow.getBoundingClientRect();
  const contactRect = contactActions.getBoundingClientRect();
  const startX = heroRect.right - mainRect.left - 1;
  const serviceX = servicesRect.left - mainRect.left + 1;
  const workX = Math.max(16, serviceX - 36);
  const valueX = valuesRect.left - mainRect.left;
  journeyStartY = heroRect.bottom - mainRect.top;
  journeyEndY = contactRect.top - mainRect.top;
  const serviceTop = servicesRect.top - mainRect.top;
  const serviceBottom = servicesRect.bottom - mainRect.top;
  const aboutTop = aboutRect.top - mainRect.top;
  const valuesBottom = valuesRect.bottom - mainRect.top;
  const contactRight = contactRect.right - mainRect.left - 1;
  const contactLeft = contactRect.left - mainRect.left;
  const path = `M ${startX} ${journeyStartY} L ${startX} ${serviceTop} L ${serviceX} ${serviceTop} L ${serviceX} ${serviceBottom} L ${workX} ${serviceBottom} L ${workX} ${aboutTop} L ${valueX} ${aboutTop} L ${valueX} ${valuesBottom} L ${contactRight} ${valuesBottom} L ${contactRight} ${journeyEndY} L ${contactLeft} ${journeyEndY}`;
  journeySvg.setAttribute('viewBox', `0 0 ${mainRect.width} ${mainRect.height}`);
  journeyTrack.setAttribute('d', path);
  journeyLive.setAttribute('d', path);
  journeyLength = journeyLive.getTotalLength();
  journeyLive.style.strokeDasharray = String(journeyLength);
  requestScrollUpdate();
};

const updateJourney = () => {
  if (!journeyLength) return;
  const markerY = window.innerHeight * 0.62 - mainElement.getBoundingClientRect().top;
  const progress = clamp((markerY - journeyStartY) / Math.max(1, journeyEndY - journeyStartY));
  const currentLength = journeyLength * progress;
  journeyLive.style.strokeDashoffset = String(journeyLength - currentLength);
  const point = journeyLive.getPointAtLength(currentLength);
  journeyHead.setAttribute('cx', point.x.toFixed(1));
  journeyHead.setAttribute('cy', point.y.toFixed(1));
  journeyHead.style.opacity = progress > 0.01 ? '1' : '0';
};

const updateScrollEffects = () => {
  scrollFrame = 0;

  const navMarker = window.innerHeight * 0.5;
  let currentSection = null;
  sectionTargets.forEach(({ link, section }) => {
    if (section.getBoundingClientRect().top <= navMarker) currentSection = link;
  });
  sectionTargets.forEach(({ link }) => {
    if (link === currentSection) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });

  if (motionPreference.matches) return;

  const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const pageProgress = clamp(window.scrollY / scrollRange);
  document.documentElement.style.setProperty('--page-progress', pageProgress.toFixed(4));

  if (servicesGrid) {
    const servicesRect = servicesGrid.getBoundingClientRect();
    const servicesProgress = clamp((window.innerHeight * 0.62 - servicesRect.top) / Math.max(1, servicesRect.height));
    servicesGrid.style.setProperty('--services-progress', servicesProgress.toFixed(4));
  }

  updateJourney();

  if (!valuesFlow || valueItems.length < 2) return;

  const markerY = window.innerHeight * 0.46;
  const flowRect = valuesFlow.getBoundingClientRect();
  const centers = valueItems.map((item) => {
    const rect = item.getBoundingClientRect();
    return rect.top + rect.height / 2;
  });
  const railProgress = clamp((markerY - flowRect.top) / Math.max(1, flowRect.height));
  valuesFlow.style.setProperty('--rail-progress', railProgress.toFixed(4));

  let activeIndex = 0;
  centers.forEach((center, index) => {
    if (Math.abs(center - markerY) < Math.abs(centers[activeIndex] - markerY)) activeIndex = index;
  });
  if (activeIndex !== previousValueIndex) {
    valueItems.forEach((item, index) => item.classList.toggle('is-active', index === activeIndex));
    if (valueCounter) {
      valueCounter.textContent = String(activeIndex + 1).padStart(2, '0');
      valueCounter.classList.remove('is-changing');
      void valueCounter.offsetWidth;
      valueCounter.classList.add('is-changing');
    }
    previousValueIndex = activeIndex;
  }
};

const requestScrollUpdate = () => {
  if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollEffects);
};

window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', measureJourney);
window.addEventListener('pageshow', measureJourney);
motionPreference.addEventListener('change', () => {
  setMotionState();
  previousValueIndex = -1;
  measureJourney();
});
measureJourney();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(measureJourney);
window.addEventListener('load', measureJourney);

const inquiryForm = document.querySelector('#project-inquiry');
if (inquiryForm) {
  const replyField = document.querySelector('#inquiry-reply');
  const phoneField = document.querySelector('#inquiry-phone');
  const status = document.querySelector('#inquiry-status');
  const mobileContactBar = document.querySelector('.mobile-contact-bar');
  const setFormFocus = (focused) => {
    document.body.classList.toggle('is-form-focused', focused);
    if (mobileContactBar) mobileContactBar.inert = focused;
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
