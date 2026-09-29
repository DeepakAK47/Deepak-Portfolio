const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// ===== SKILL BAR ANIMATION =====
const resumeTab = document.querySelector('[data-tab="resume"]');

if (resumeTab) {
  resumeTab.addEventListener('click', () => {
    document.querySelectorAll('.skill-fill').forEach(fill => {
      const target = fill.style.width;
      fill.style.width = '0';
      setTimeout(() => {
        fill.style.width = target;
      }, 100);
    });
  });
}

// ===== CERTIFICATE MODAL =====
const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const certButtons = document.querySelectorAll('.cert-btn');
const certCloseEls = document.querySelectorAll('[data-close]');
let lastFocused = null;

function openCertModal(src) {
  lastFocused = document.activeElement;
  certModalImg.src = src;
  certModalImg.alt = 'Certificate preview';
  certModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  certModal.querySelector('.cert-modal-close').focus();
}

function closeCertModal() {
  certModal.classList.remove('active');
  certModalImg.removeAttribute('src');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

certButtons.forEach(btn => {
  btn.addEventListener('click', () => openCertModal(btn.dataset.cert));
});

certCloseEls.forEach(el => el.addEventListener('click', closeCertModal));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && certModal.classList.contains('active')) {
    closeCertModal();
  }
});