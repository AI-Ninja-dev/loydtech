import './brand.css';

const brandLogo = `${import.meta.env.BASE_URL}loydtech-logo.jpg`;

// Apply the refined Loydtech identity to every brand lockup.
document.querySelectorAll('.brand').forEach((brand) => {
  brand.classList.add('brand-logo-link');
  brand.innerHTML = `<img class="brand-logo" src="${brandLogo}" alt="Loydtech Digital Solutions" />`;
});

// Add mobile navigation without introducing a framework dependency.
const nav = document.querySelector('.nav');
const links = document.querySelector('.nav-links');
if (nav && links) {
  const toggle = document.createElement('button');
  toggle.className = 'menu-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Toggle navigation');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span></span><span></span>';
  nav.insertBefore(toggle, nav.querySelector('.button-small'));
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Brand-led additions that round the site into a complete company experience.
const howSection = document.querySelector('.how');
if (howSection) {
  howSection.insertAdjacentHTML('afterend', `
    <section id="about" class="brand-section about-section">
      <div class="shell about-grid">
        <div class="about-copy reveal">
          <span class="kicker">05 / LOYDTECH</span>
          <h2>People. Technology. <span class="brand-gradient">A smarter tomorrow.</span></h2>
          <p>Loydtech Digital Solutions helps organisations connect physical operations to useful digital intelligence. We combine field knowledge, connected devices, cloud platforms and automation to make assets and environments easier to see, manage and improve.</p>
          <div class="signature-line">CONNECT <i></i> MONITOR <i></i> OPTIMISE</div>
        </div>
        <div class="about-panel reveal delay">
          <div class="about-stat"><strong>01</strong><span>Discover the operational need</span></div>
          <div class="about-stat"><strong>02</strong><span>Design the device-to-cloud architecture</span></div>
          <div class="about-stat"><strong>03</strong><span>Deploy, integrate and validate</span></div>
          <div class="about-stat"><strong>04</strong><span>Monitor, automate and continuously improve</span></div>
        </div>
      </div>
    </section>
  `);
}

const securitySection = document.querySelector('#security');
if (securitySection) {
  securitySection.querySelector('.kicker').textContent = '06 / TRUST';
  securitySection.insertAdjacentHTML('afterend', `
    <section id="technology" class="section shell ecosystem-section">
      <div class="section-heading reveal">
        <div><span class="kicker">07 / ECOSYSTEM</span><h2>Built to work across your <span class="muted">technology stack.</span></h2></div>
        <p>Flexible integration lets Loydtech solutions connect device, network, cloud, automation and security layers without locking operations into a single vendor.</p>
      </div>
      <div class="ecosystem-grid">
        <article class="ecosystem-card reveal"><span>EDGE</span><h3>Sensors & gateways</h3><p>BLE, RFID, LoRaWAN, cellular, environmental telemetry and equipment interfaces.</p></article>
        <article class="ecosystem-card reveal"><span>PLATFORM</span><h3>Sentinel 365</h3><p>Live dashboards, maps, geofences, alerts, trends, reports and operational workflows.</p></article>
        <article class="ecosystem-card reveal"><span>AUTOMATION</span><h3>Connected workflows</h3><p>APIs and automation links for n8n, business systems, notifications and service processes.</p></article>
        <article class="ecosystem-card reveal"><span>SECURITY</span><h3>Operational security</h3><p>Monitoring-ready architecture for connected infrastructure and audit-focused environments.</p></article>
      </div>
      <div class="tech-ribbon reveal" aria-label="Technology ecosystem"><span>Microsoft Azure</span><span>Cisco</span><span>Milesight</span><span>Minew</span><span>ThingsBoard</span><span>n8n</span><span>Wazuh</span><span>Splunk</span></div>
    </section>
  `);
}

const cta = document.querySelector('#contact');
if (cta) {
  cta.insertAdjacentHTML('beforebegin', `
    <section class="shell contact-intro reveal">
      <span class="kicker">08 / START A PROJECT</span>
      <div class="contact-intro-grid">
        <h2>What do you need to <span class="brand-gradient">see in real time?</span></h2>
        <div><p>Assets moving through a facility. A cold room drifting out of range. Equipment status across multiple sites. Energy use that needs explanation. Start with the operational problem — we’ll shape the connected solution.</p><a class="text-link" href="mailto:info@loydtech.co.za?subject=Loydtech%20project%20enquiry">info@loydtech.co.za <span>↗</span></a></div>
      </div>
    </section>
  `);
  cta.querySelector('.kicker').textContent = 'CONNECT / MONITOR / OPTIMISE';
  cta.querySelector('h2').innerHTML = 'Turn physical operations into<br><span class="brand-gradient">live intelligence.</span>';
}

// Re-observe sections injected after the original observer was initialised.
const lateObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    lateObserver.unobserve(entry.target);
  }
}), { threshold: 0.1 });
document.querySelectorAll('.reveal:not(.visible)').forEach((el) => lateObserver.observe(el));

// Subtle pointer parallax for the Sentinel dashboard on capable devices.
const dashboard = document.querySelector('.dashboard');
if (dashboard && window.matchMedia('(pointer:fine)').matches) {
  dashboard.closest('.hero-visual')?.addEventListener('pointermove', (event) => {
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    dashboard.style.transform = `perspective(1100px) rotateY(${x * 4}deg) rotateX(${y * -4}deg)`;
  });
  dashboard.closest('.hero-visual')?.addEventListener('pointerleave', () => {
    dashboard.style.transform = '';
  });
}
