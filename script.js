const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    // Add active to clicked tab + its section
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});


// ===== SKILL BAR ANIMATION =====
const resumeTab = document.querySelector('[data-tab="resume"]');

resumeTab.addEventListener('click', () => {
  const fills = document.querySelectorAll('.skill-fill');
  fills.forEach(fill => {
    const target = fill.style.width;
    fill.style.width = '0';
    setTimeout(() => {
      fill.style.width = target;
    }, 100);
  });
});

/* ===== CERTIFICATE MODAL ===== */
const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const certButtons = document.querySelectorAll('.cert-btn');
const certCloseEls = document.querySelectorAll('[data-close]');

// Open modal
certButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const imgSrc = btn.getAttribute('data-cert');
    certModalImg.src = imgSrc;
    certModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Close modal function
function closeCertModal() {
  certModal.classList.remove('active');
  certModalImg.src = '';
  document.body.style.overflow = '';
}

// Close on X / overlay click
certCloseEls.forEach(el => {
  el.addEventListener('click', closeCertModal);
});

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && certModal.classList.contains('active')) {
    closeCertModal();
  }
});