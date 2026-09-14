import './brand.css';

const brandLogo = '/loydtech-logo.jpg';

document.querySelectorAll('.brand').forEach((brand) => {
  brand.classList.add('brand-logo-link');
  brand.innerHTML = `<img class="brand-logo" src="${brandLogo}" alt="Loydtech Digital Solutions" />`;
});

const nav = document.querySelector('.nav');
const links = document.querySelector('.nav-links');
if (nav && links) {
  links.innerHTML = '<a href="#solutions">Solutions</a><a href="#platform">Sentinel 365</a><a href="#industries">Industries</a><a href="#about">About</a><a href="#technology">Technology</a>';
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

const howSection = document.querySelector('.how');
if (howSection) {
  howSection.insertAdjacentHTML('afterend', `
    <section id="about" class="brand-section about-section">
      <div class="shell about-grid">
        <div class="about-copy reveal">
          <span class="kicker">05 / LOYDTECH</span>
          <h2>People. Technology. <span class="brand-gradient">A smarter tomorrow.</span></h2>
          <p>Loydtech Digital Solutions connects physical operations to useful digital intelligence. We combine connected devices, cloud platforms, automation and hands-on technical knowledge to make assets and environments easier to see, manage and improve.</p>
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
    <section id="experience" class="experience-section">
      <div class="shell">
        <div class="section-heading reveal">
          <div><span class="kicker">07 / LIVE EXPERIENCE</span><h2>See how one platform changes with the <span class="muted">operational question.</span></h2></div>
          <p>Sentinel 365 can present the same connected estate differently depending on what your team needs to know right now.</p>
        </div>
        <div class="experience-shell reveal">
          <div class="experience-tabs" role="tablist" aria-label="Sentinel 365 views">
            <button class="experience-tab active" data-view="track" type="button">Track assets</button>
            <button class="experience-tab" data-view="monitor" type="button">Monitor conditions</button>
            <button class="experience-tab" data-view="automate" type="button">Automate response</button>
          </div>
          <div class="experience-grid">
            <div class="experience-copy">
              <span class="experience-label">SENTINEL 365</span>
              <h3 id="experience-title">Where is the asset?</h3>
              <p id="experience-text">Locate critical equipment across rooms, buildings and sites, then review movement history and utilisation context from one operational view.</p>
              <div class="experience-points" id="experience-points">
                <span>Indoor location</span><span>Geofences</span><span>Movement history</span>
              </div>
            </div>
            <div class="experience-panel">
              <div class="experience-top"><span>LIVE OPERATIONS</span><span class="live-dot">● CONNECTED</span></div>
              <div class="experience-visual" id="experience-visual">
                <div class="floor-zone z1">LAB</div><div class="floor-zone z2">STORE</div><div class="floor-zone z3">WARD</div>
                <div class="asset-pulse p1"><i></i><b>Pump 042</b></div><div class="asset-pulse p2"><i></i><b>Cart 018</b></div><div class="asset-pulse p3"><i></i><b>Freezer 04</b></div>
              </div>
              <div class="experience-metrics"><div><span>Connected</span><strong id="metric-a">1,284</strong></div><div><span>Visible now</span><strong id="metric-b">97.8%</strong></div><div><span>Exceptions</span><strong id="metric-c">08</strong></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="technology" class="section shell ecosystem-section">
      <div class="section-heading reveal">
        <div><span class="kicker">08 / ECOSYSTEM</span><h2>Built to work across your <span class="muted">technology stack.</span></h2></div>
        <p>Flexible integration lets Loydtech connect device, network, cloud, automation and security layers without making the operational experience dependent on one vendor.</p>
      </div>
      <div class="ecosystem-grid">
        <article class="ecosystem-card reveal"><span>EDGE</span><h3>Sensors & gateways</h3><p>BLE, RFID, LoRaWAN, cellular, environmental telemetry and equipment interfaces.</p></article>
        <article class="ecosystem-card reveal"><span>PLATFORM</span><h3>Sentinel 365</h3><p>Live dashboards, maps, geofences, alerts, trends, reports and operational workflows.</p></article>
        <article class="ecosystem-card reveal"><span>AUTOMATION</span><h3>Connected workflows</h3><p>APIs and automation links for notifications, service processes and business systems.</p></article>
        <article class="ecosystem-card reveal"><span>SECURITY</span><h3>Operational security</h3><p>Monitoring-ready architecture for connected infrastructure and audit-focused environments.</p></article>
      </div>
      <div class="tech-ribbon reveal" aria-label="Technology ecosystem"><span>Microsoft Azure</span><span>Cisco</span><span>Milesight</span><span>Minew</span><span>ThingsBoard</span><span>n8n</span><span>Wazuh</span><span>Splunk</span></div>
    </section>
  `);
}

const views = {
  track: {
    title: 'Where is the asset?',
    text: 'Locate critical equipment across rooms, buildings and sites, then review movement history and utilisation context from one operational view.',
    points: ['Indoor location','Geofences','Movement history'],
    metrics: ['1,284','97.8%','08'],
    mode: 'track'
  },
  monitor: {
    title: 'Is the environment within range?',
    text: 'Bring temperature, humidity, pressure, power and equipment state into one live view with trends that make deviations easy to understand.',
    points: ['Telemetry','Thresholds','Historical trends'],
    metrics: ['2.8°C','44% RH','03'],
    mode: 'monitor'
  },
  automate: {
    title: 'What should happen next?',
    text: 'Turn events into action with rules that notify the right people, trigger workflows and pass useful context into connected business systems.',
    points: ['Rules engine','Escalations','API workflows'],
    metrics: ['24','06','99.2%'],
    mode: 'automate'
  }
};

document.querySelectorAll('.experience-tab').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.experience-tab').forEach((tab) => tab.classList.remove('active'));
    button.classList.add('active');
    const view = views[button.dataset.view];
    document.querySelector('#experience-title').textContent = view.title;
    document.querySelector('#experience-text').textContent = view.text;
    document.querySelector('#experience-points').innerHTML = view.points.map((point) => `<span>${point}</span>`).join('');
    document.querySelector('#metric-a').textContent = view.metrics[0];
    document.querySelector('#metric-b').textContent = view.metrics[1];
    document.querySelector('#metric-c').textContent = view.metrics[2];
    document.querySelector('#experience-visual').dataset.mode = view.mode;
  });
});

const cta = document.querySelector('#contact');
if (cta) {
  cta.insertAdjacentHTML('beforebegin', `
    <section class="shell contact-intro reveal">
      <span class="kicker">09 / START A PROJECT</span>
      <div class="contact-intro-grid">
        <h2>What do you need to <span class="brand-gradient">see in real time?</span></h2>
        <div><p>Assets moving through a facility. A cold room drifting out of range. Equipment status across multiple sites. Energy use that needs explanation. Start with the operational problem — we’ll shape the connected solution.</p><a class="text-link" href="mailto:info@loydtech.co.za?subject=Loydtech%20project%20enquiry">info@loydtech.co.za <span>↗</span></a></div>
      </div>
    </section>
  `);
  cta.querySelector('.kicker').textContent = 'CONNECT / MONITOR / OPTIMISE';
  cta.querySelector('h2').innerHTML = 'Turn physical operations into<br><span class="brand-gradient">live intelligence.</span>';
}

const progress = document.createElement('div');
progress.className = 'scroll-progress';
document.body.appendChild(progress);
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
}, { passive: true });

const lateObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    lateObserver.unobserve(entry.target);
  }
}), { threshold: 0.1 });
document.querySelectorAll('.reveal:not(.visible)').forEach((el) => lateObserver.observe(el));

const dashboard = document.querySelector('.dashboard');
if (dashboard && window.matchMedia('(pointer:fine)').matches) {
  dashboard.closest('.hero-visual')?.addEventListener('pointermove', (event) => {
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    dashboard.style.transform = `perspective(1100px) rotateY(${x * 4}deg) rotateX(${y * -4}deg)`;
  });
  dashboard.closest('.hero-visual')?.addEventListener('pointerleave', () => { dashboard.style.transform = ''; });
}
