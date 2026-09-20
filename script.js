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