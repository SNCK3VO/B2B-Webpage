const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();


// Founder and leadership biography modal
const bioModal = document.getElementById('bio-modal');
const bioModalName = document.getElementById('bio-modal-name');
const bioModalRole = document.getElementById('bio-modal-role');
const bioModalText = document.getElementById('bio-modal-text');
const bioTriggers = document.querySelectorAll('.bio-trigger');
const bioCloseButtons = document.querySelectorAll('[data-bio-close]');
let lastBioTrigger = null;

function openBio(trigger) {
  if (!bioModal || !trigger) return;
  lastBioTrigger = trigger;
  bioModalName.textContent = trigger.dataset.name || '';
  bioModalRole.textContent = trigger.dataset.role || '';
  bioModalText.textContent = trigger.dataset.bio || '';
  bioModal.classList.add('is-open');
  bioModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('bio-modal-open');
  const closeButton = bioModal.querySelector('.bio-modal-close');
  if (closeButton) closeButton.focus();
}

function closeBio() {
  if (!bioModal) return;
  bioModal.classList.remove('is-open');
  bioModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('bio-modal-open');
  if (lastBioTrigger) lastBioTrigger.focus();
}

bioTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => openBio(trigger));
});

bioCloseButtons.forEach((button) => {
  button.addEventListener('click', closeBio);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && bioModal?.classList.contains('is-open')) {
    closeBio();
  }
});


// Suggestion box: anonymous vs. contact-information choice
const identityChoices = document.querySelectorAll('[data-identity-choice]');
const optionalContact = document.querySelector('[data-optional-contact]');
if (identityChoices.length && optionalContact) {
  const contactInputs = optionalContact.querySelectorAll('input');
  const updateContactVisibility = () => {
    const selected = document.querySelector('[data-identity-choice]:checked');
    const showContact = selected?.dataset.identityChoice === 'contact';
    optionalContact.hidden = !showContact;
    contactInputs.forEach((input) => {
      input.required = showContact;
      if (!showContact) input.value = '';
    });
  };
  identityChoices.forEach((choice) => choice.addEventListener('change', updateContactVisibility));
  updateContactVisibility();
}


// Select the next dated event from the event cards. End times use campus time
// (America/Chicago); events without a confirmed end time remain all day.
function updateNextUp(now = new Date()) {
  const banner = document.getElementById('next-up-text');
  if (!banner) return;
  const upcoming = Array.from(document.querySelectorAll('[data-event-end]'))
    .map((card) => ({ card, end: new Date(card.dataset.eventEnd) }))
    .filter(({ end }) => Number.isFinite(end.getTime()) && end >= now)
    .sort((a, b) => a.end - b.end);
  const next = upcoming[0];
  if (!next) {
    banner.textContent = 'More events coming soon • Follow @brother2brother.asu for updates';
    return;
  }
  const date = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago', month: 'long', day: 'numeric', year: 'numeric'
  }).format(next.end);
  const details = Array.from(next.card.querySelectorAll('.event-meta li'))
    .map((item) => item.textContent.trim());
  banner.textContent = [next.card.querySelector('h3').textContent.trim(), date, ...details].join(' • ');
}
updateNextUp();
setInterval(updateNextUp, 60000);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) updateNextUp();
});
