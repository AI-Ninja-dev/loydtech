import './styles.css';

const solutions = [
  ['01','Asset Tracking & RTLS','Know where critical assets are, how they move, and whether they are being used — across rooms, facilities and sites.'],
  ['02','Remote Monitoring','Continuously monitor temperature, humidity, pressure, power, equipment status and other operational conditions.'],
  ['03','Cold Chain Intelligence','Protect temperature-sensitive products with live telemetry, excursion alerts, audit-ready records and trend analytics.'],
  ['04','Smart Facilities','Connect rooms, equipment, utilities and environmental sensors into one operational view.'],
  ['05','Energy Monitoring','Measure consumption, identify anomalies and create visibility into high-impact energy assets.'],
  ['06','IoT Security & Compliance','Strengthen connected operations with monitoring, audit trails, role-based access and compliance-focused architecture.']
];

const industries = [
  'Healthcare & Laboratories','Pharmaceutical','Logistics & Cold Chain','Retail','Buildings & Facilities','Energy','Smart Infrastructure'
];

const app = document.querySelector('#app');
app.innerHTML = `
  <div class="noise"></div>
  <header class="nav-wrap">
    <nav class="nav shell">
      <a class="brand" href="#top" aria-label="Loydtech home"><span class="brand-mark"></span><span>LOYDTECH</span></a>
      <div class="nav-links">
        <a href="#solutions">Solutions</a><a href="#platform">Sentinel 365</a><a href="#industries">Industries</a><a href="#security">Security</a>
      </div>
      <a class="button button-small" href="#contact">Book a demo <span>↗</span></a>
    </nav>
  </header>

  <main id="top">
    <section class="hero shell">
      <div class="hero-copy reveal">
        <div class="eyebrow"><span class="pulse"></span> Connected operations. Real-time intelligence.</div>
        <h1>Make the physical world <span class="gradient-text">visible.</span></h1>
        <p class="hero-lead">Loydtech connects assets, equipment and environments to a single intelligence layer — helping teams track, monitor and optimise what matters most.</p>
        <div class="hero-actions">
          <a class="button" href="#contact">Explore a solution <span>↗</span></a>
          <a class="text-link" href="#platform">Discover Sentinel 365 <span>→</span></a>
        </div>
        <div class="hero-meta">
          <div><strong>RTLS</strong><span>Live asset visibility</span></div>
          <div><strong>IoT</strong><span>Remote monitoring</span></div>
          <div><strong>AI</strong><span>Operational analytics</span></div>
        </div>
      </div>

      <div class="hero-visual reveal delay">
        <div class="orb orb-a"></div><div class="orb orb-b"></div>
        <div class="dashboard glass">
          <div class="dash-top"><div><span class="mini-label">SENTINEL 365</span><h3>Operations overview</h3></div><span class="live">● LIVE</span></div>
          <div class="metrics">
            <div class="metric"><span>Connected assets</span><strong>1,284</strong><small>↑ 4.8% this month</small></div>
            <div class="metric"><span>Active alerts</span><strong>08</strong><small>3 require attention</small></div>
          </div>
          <div class="chart-card">
            <div class="chart-head"><span>Environmental telemetry</span><small>24H</small></div>
            <svg viewBox="0 0 620 180" role="img" aria-label="Telemetry graph"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5fd7ff" stop-opacity=".42"/><stop offset="100%" stop-color="#5fd7ff" stop-opacity="0"/></linearGradient></defs><path class="area" d="M0,150 C60,120 85,130 125,105 S200,72 245,95 S310,120 350,80 S415,42 455,64 S530,84 620,28 L620,180 L0,180 Z"/><path class="line" d="M0,150 C60,120 85,130 125,105 S200,72 245,95 S310,120 350,80 S415,42 455,64 S530,84 620,28"/></svg>
          </div>
          <div class="asset-row"><span class="asset-icon">◫</span><div><strong>Cold Room A</strong><small>2.8°C · Cape Town Facility</small></div><span class="status-ok">Stable</span></div>
          <div class="asset-row"><span class="asset-icon">⌖</span><div><strong>Infusion Pump 042</strong><small>Level 2 · East Wing</small></div><span class="status-ok">Located</span></div>
        </div>
      </div>
    </section>

    <section class="trust-strip"><div class="shell trust-inner"><span>Built for connected environments across</span><div>HEALTHCARE</div><div>LABS</div><div>PHARMA</div><div>LOGISTICS</div><div>FACILITIES</div></div></section>

    <section id="solutions" class="section shell">
      <div class="section-heading reveal"><div><span class="kicker">01 / SOLUTIONS</span><h2>One connected layer for your <span class="muted">physical operations.</span></h2></div><p>From a single sensor to a multi-site deployment, Loydtech brings real-world data into a platform your team can act on.</p></div>
      <div class="solution-grid">${solutions.map(([n,t,d]) => `<article class="solution-card reveal"><span class="card-number">${n}</span><div class="card-icon">${n === '01' ? '⌖' : n === '02' ? '◉' : n === '03' ? '❄' : n === '04' ? '▦' : n === '05' ? 'ϟ' : '◇'}</div><h3>${t}</h3><p>${d}</p><a href="#contact">Learn more <span>↗</span></a></article>`).join('')}</div>
    </section>

    <section id="platform" class="platform-section">
      <div class="shell platform-grid">
        <div class="platform-copy reveal"><span class="kicker">02 / PLATFORM</span><div class="platform-badge">S365</div><h2>Sentinel 365</h2><h3>Your operational intelligence layer.</h3><p>Bring live asset location, sensor telemetry, alerts, floor plans, geofences and historical analytics into one interface.</p><ul><li>Live maps & indoor asset visibility</li><li>Device telemetry & condition monitoring</li><li>Rules, alerts & escalation workflows</li><li>Historical trends & operational reporting</li><li>API-ready integrations & automation</li><li>Multi-site, role-based visibility</li></ul><a class="button" href="#contact">See Sentinel 365 <span>↗</span></a></div>
        <div class="platform-ui reveal delay"><div class="ui-window glass"><div class="window-bar"><span></span><span></span><span></span><small>SENTINEL 365 / LIVE MAP</small></div><div class="map"><div class="map-grid"></div><div class="zone zone-a">LAB 01</div><div class="zone zone-b">COLD ROOM</div><div class="zone zone-c">STORES</div><div class="pin pin-a"><i></i><b>Asset 042</b></div><div class="pin pin-b"><i></i><b>Sensor 18</b></div><div class="pin pin-c"><i></i><b>Freezer 04</b></div></div><div class="ui-bottom"><div><span>Devices online</span><strong>98.7%</strong></div><div><span>Sites monitored</span><strong>12</strong></div><div><span>Events today</span><strong>2,481</strong></div></div></div></div>
      </div>
    </section>

    <section id="industries" class="section shell">
      <div class="section-heading reveal"><div><span class="kicker">03 / INDUSTRIES</span><h2>Designed for places where <span class="muted">visibility matters.</span></h2></div><p>Connected infrastructure becomes most valuable where assets, environments and service continuity directly affect operations.</p></div>
      <div class="industry-list">${industries.map((x,i)=>`<div class="industry reveal"><span>0${i+1}</span><strong>${x}</strong><i>↗</i></div>`).join('')}</div>
    </section>

    <section class="how section shell">
      <div class="section-heading reveal"><div><span class="kicker">04 / HOW IT WORKS</span><h2>From physical asset to <span class="muted">actionable insight.</span></h2></div></div>
      <div class="steps"><div class="step reveal"><span>01</span><div class="step-dot"></div><h3>Connect</h3><p>Sensors, tags, gateways and existing equipment feed operational data securely.</p></div><div class="step reveal"><span>02</span><div class="step-dot"></div><h3>Monitor</h3><p>Sentinel 365 brings device state, environment and location into one live view.</p></div><div class="step reveal"><span>03</span><div class="step-dot"></div><h3>Automate</h3><p>Rules trigger alerts, workflows and integrations when conditions change.</p></div><div class="step reveal"><span>04</span><div class="step-dot"></div><h3>Optimise</h3><p>Historical trends and analytics reveal opportunities to improve performance.</p></div></div>
    </section>

    <section id="security" class="security-section"><div class="shell security-grid"><div class="security-copy reveal"><span class="kicker">05 / TRUST</span><h2>Secure by design. <span class="muted">Ready for regulated environments.</span></h2><p>Loydtech designs connected operations with layered security, controlled access, auditability and integration in mind.</p></div><div class="security-cards"><div class="security-card reveal"><span>01</span><strong>Security monitoring</strong><p>Visibility across connected infrastructure and operational events.</p></div><div class="security-card reveal"><span>02</span><strong>Access & audit</strong><p>Role-aware visibility and auditable system activity.</p></div><div class="security-card reveal"><span>03</span><strong>Compliance-minded</strong><p>Architecture aligned to POPIA and common information-security controls.</p></div><div class="security-card reveal"><span>04</span><strong>Integration-ready</strong><p>Built to connect with automation, cloud and security platforms.</p></div></div></div></section>

    <section id="contact" class="cta shell reveal"><div><span class="kicker">LET'S BUILD VISIBILITY</span><h2>Connect what matters.<br><span class="gradient-text">See what changes.</span></h2></div><div><p>Tell us what you need to track, monitor or optimise. We’ll help shape the right connected solution.</p><a class="button button-light" href="mailto:info@loydtech.co.za">Start a conversation <span>↗</span></a></div></section>
  </main>

  <footer><div class="shell footer-grid"><a class="brand" href="#top"><span class="brand-mark"></span><span>LOYDTECH</span></a><p>IoT · RTLS · Remote Monitoring · Analytics</p><p>South Africa · Connected everywhere.</p></div></footer>
`;

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  document.querySelector('.nav-wrap')?.classList.toggle('scrolled', window.scrollY > 30);
});
