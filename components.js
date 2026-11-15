const icon = name => `<i class="${name.startsWith('fa-brands') ? name : `fa-solid ${name}`}"></i>`;

function renderSidebar({ profile }) {
  const info = [
    { icon: 'fa-envelope', label: 'EMAIL', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'fa-location-dot', label: 'LOCATION', value: profile.location },
    { icon: 'fa-brands fa-linkedin', label: 'LINKEDIN', value: 'deepak-singh-ai-ds', href: profile.links.linkedin },
    { icon: 'fa-brands fa-github', label: 'GITHUB', value: 'DeepakAK47', href: profile.links.github },
    { icon: 'fa-code', label: 'LEETCODE', value: 'Deepak_singh01082003', href: profile.links.leetcode }
  ];
  return `
    <img src="${profile.avatar}" alt="Avatar" class="avatar" />
    <h1 class="name">${profile.name}</h1>
    <p class="role">${profile.role}</p>
    <div class="info">
      ${info.map(item => `<${item.href ? 'a' : 'div'} ${item.href ? `href="${item.href}" target="_blank" rel="noopener"` : ''} class="info-item">${item.icon.startsWith('fa-brands') ? `<i class="${item.icon}"></i>` : icon(item.icon)}<div><span class="label">${item.label}</span><span>${item.value}</span></div></${item.href ? 'a' : 'div'}>`).join('')}
    </div>
    <div class="socials">
      <a href="${profile.links.linkedin}" target="_blank" rel="noopener">${icon('fa-brands fa-linkedin')}</a>
      <a href="${profile.links.github}" target="_blank" rel="noopener">${icon('fa-brands fa-github')}</a>
      <a href="${profile.links.leetcode}" target="_blank" rel="noopener">${icon('fa-code')}</a>
      <a href="mailto:${profile.email}">${icon('fa-envelope')}</a>
    </div>
  `;
}

function renderTabs(tabs) {
  return tabs.map((tab, index) => `<button class="tab${index === 0 ? ' active' : ''}" data-tab="${tab.id}">${tab.label}</button>`).join('');
}

function renderAbout({ about }) {
  return `<section id="about" class="section active"><h2>About Me</h2><div class="underline"></div><p>${about.intro}</p><h3>My Interests</h3><div class="cards">${about.interests.map(item => `<div class="card">${icon(item.icon)}<h4>${item.title}</h4><p>${item.description}</p></div>`).join('')}</div></section>`;
}

function renderTimeline(title, sectionIcon, items) {
  return `<div class="resume-block"><div class="block-header"><div class="block-icon">${icon(sectionIcon)}</div><h3>${title}</h3></div><div class="timeline">${items.map(item => `<div class="timeline-item"><h4>${item.title}</h4><span class="timeline-date">${item.date}</span><p>${item.description}</p></div>`).join('')}</div></div>`;
}

function renderResume({ resume }) {
  const skills = resume.skills.map(([name, percentage]) => `<div class="skill"><div class="skill-info"><span>${name}</span><span>${percentage}%</span></div><div class="skill-bar"><div class="skill-fill" style="width: ${percentage}%"></div></div></div>`).join('');
  return `<section id="resume" class="section"><h2>Resume</h2><div class="underline"></div>${renderTimeline('Education', 'fa-book-open', resume.education)}${renderTimeline('Experience', 'fa-briefcase', resume.experience)}<div class="resume-block"><div class="block-header"><div class="block-icon">${icon('fa-graduation-cap')}</div><h3>My Skills</h3></div><div class="skills-card">${skills}</div></div><div class="resume-actions"><a href="${resume.resumeFile}" target="_blank" class="resume-btn">${icon('fa-eye')} View Resume</a><a href="${resume.resumeFile}" download="Deepak_Singh_Resume.pdf" class="resume-btn outline">${icon('fa-download')} Download Resume</a></div></section>`;
}

function renderProjects({ projects }) {
  return `<section id="projects" class="section"><h2>Projects</h2><div class="underline"></div><div class="project-list">${projects.map(project => `<div class="project-card"><div class="project-header"><h4>${project.title}</h4><span class="project-year">${project.year}</span></div>${project.video ? `<video class="project-video" controls preload="metadata" playsinline><source src="${project.video}" type="video/mp4">Your browser does not support the video tag.</video>` : ''}<p>${project.description}</p><div class="project-tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div><div class="project-links"><a href="${project.demo}" target="_blank" rel="noopener" class="project-link">${icon('fa-arrow-up-right-from-square')} Live Demo</a><a href="${project.github}" target="_blank" rel="noopener" class="project-link outline">${icon('fa-brands fa-github')} GitHub</a></div></div>`).join('')}</div></section>`;
}

function renderCertifications({ certifications }) {
  return `<section id="certs" class="section"><h2>Certifications &amp; Awards</h2><div class="underline"></div><div class="cert-list">${certifications.map(cert => `<article class="cert-card"><div class="cert-gallery"><img src="${cert.mainImage}" class="main-img" alt="${cert.title}" loading="lazy" /><div class="sub-imgs"><img src="${cert.subImages[0]}" class="top" alt="${cert.badge} ceremony" loading="lazy" /><img src="${cert.subImages[1]}" alt="${cert.badge} workspace" loading="lazy" /></div><span class="cert-badge">${icon(cert.badgeIcon)} ${cert.badge}</span></div><div class="cert-body"><span class="cert-kicker">${cert.kicker}</span><div class="cert-title-row"><h4>${cert.title}</h4><span class="cert-year">${cert.year}</span></div><p class="cert-issuer">${icon(cert.issuerIcon)} ${cert.issuer}</p><p class="cert-description">${cert.description}</p><div class="cert-details">${cert.details.map(([label, value]) => `<div><span class="detail-label">${label}</span><strong>${value}</strong></div>`).join('')}</div><button type="button" class="cert-btn" data-cert="${cert.certificate}">${icon('fa-arrow-up-right-from-square')} View certificate</button></div></article>`).join('')}</div></section>`;
}

function renderContact({ profile }) {
  const contacts = [
    ['fa-envelope', 'EMAIL', profile.email, `mailto:${profile.email}`],
    ['fa-phone', 'PHONE', profile.phone, `tel:${profile.phone.replace(/-/g, '')}`],
    ['fa-brands fa-linkedin', 'LINKEDIN', 'deepak-singh-ai-ds', profile.links.linkedin],
    ['fa-brands fa-github', 'GITHUB', 'DeepakAK47', profile.links.github],
    ['fa-code', 'LEETCODE', 'Deepak_singh01082003', profile.links.leetcode],
    ['fa-location-dot', 'LOCATION', profile.location, null]
  ];
  return `<section id="contact" class="section"><h2>Let's Connect</h2><div class="underline"></div><p class="contact-intro">I'm actively looking for <strong>AI/ML engineering</strong>, <strong>data science</strong> and <strong>research</strong> roles — plus open to competitive programming collaborations, open-source contributions and ambitious side projects. If you're building something interesting, I'd love to hear about it.</p><div class="availability"><span class="status-dot"></span><span>Currently available for opportunities</span></div><div class="contact-grid">${contacts.map(([contactIcon, label, value, href]) => `<${href ? 'a' : 'div'} ${href ? `href="${href}" target="_blank" rel="noopener"` : ''} class="contact-card${href ? '' : ' static'}"><div class="contact-icon">${contactIcon.startsWith('fa-brands') ? `<i class="${contactIcon}"></i>` : icon(contactIcon)}</div><div class="contact-info"><span class="contact-label">${label}</span><span class="contact-value">${value}</span></div>${href ? icon('fa-arrow-up-right-from-square contact-arrow') : ''}</${href ? 'a' : 'div'}>`).join('')}</div><div class="contact-cta"><div class="cta-text"><h4>Have an idea worth building?</h4><p>Drop me a message — I usually reply within 24 hours.</p></div><a href="mailto:${profile.email}" class="resume-btn">${icon('fa-paper-plane')} Send an Email</a></div></section>`;
}

function renderPortfolio(data) {
  document.getElementById('sidebar').innerHTML = renderSidebar(data);
  document.getElementById('tabs').innerHTML = renderTabs(data.tabs);
  document.getElementById('sections').innerHTML = [renderAbout(data), renderResume(data), renderProjects(data), renderCertifications(data), renderContact(data)].join('');
}
