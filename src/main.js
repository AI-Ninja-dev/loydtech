import "./styles.css";
import { expandWebsite } from "./expansion.js";
import "./redesign.css";

const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`;
const solutions = [
  {
    id: "tracking",
    image: "healthcare-iot.webp",
    imageSmall: "healthcare-iot-700.webp",
    imageAlt: "Healthcare equipment tracking concept in a clinical setting",
    title: "Asset tracking",
    label: "RTLS & asset visibility",
    headline: "Know where it is. Know what comes next.",
    description:
      "Locate equipment, tools and mobile assets across rooms, buildings and sites. Give your team the context to find what they need.",
    points: [
      "Indoor location and movement history",
      "Zone-based alerts and geofences",
      "Asset availability and utilisation",
    ],
  },
  {
    id: "monitoring",
    image: "pharmaceutical-monitoring.webp",
    imageSmall: "pharmaceutical-monitoring-800.webp",
    imageAlt: "Pharmaceutical laboratory environmental monitoring concept",
    title: "Remote monitoring",
    label: "Environmental intelligence",
    headline: "See changing conditions. Respond sooner.",
    description:
      "Bring temperature, humidity, pressure, power and equipment state into one operational view. Set thresholds around what matters to your site.",
    points: [
      "Sensor readings and historical trends",
      "Threshold alerts and escalation",
      "Equipment and environmental visibility",
    ],
  },
  {
    id: "cold-chain",
    image: "logistics-cold-chain.webp",
    imageSmall: "logistics-cold-chain-800.webp",
    imageAlt: "Cold chain warehouse temperature monitoring concept",
    title: "Cold chain",
    label: "Temperature-sensitive operations",
    headline: "Keep a closer eye on every degree.",
    description:
      "Monitor temperature-sensitive environments from storage to handling. Help teams investigate excursions with alerts and a clear history of conditions.",
    points: [
      "Cold-room and refrigerator monitoring",
      "Temperature excursion records",
      "Trends for investigation and reporting",
    ],
  },
  {
    id: "facilities",
    image: "connected-campus.webp",
    imageSmall: "connected-campus-800.webp",
    imageAlt: "Connected commercial buildings concept",
    title: "Smart facilities",
    label: "Connected buildings",
    headline: "A clearer picture of your whole building.",
    description:
      "Connect rooms, equipment, utilities and environmental sensors. Surface the information facilities teams need to plan maintenance and coordinate a response.",
    points: [
      "Building and room-level visibility",
      "Connected equipment condition",
      "Multi-site operational context",
    ],
  },
  {
    id: "energy",
    image: "retail-energy.webp",
    imageSmall: "retail-energy-800.webp",
    imageAlt: "Retail energy monitoring concept",
    title: "Energy monitoring",
    label: "Utility intelligence",
    headline: "Understand the energy behind your operations.",
    description:
      "Track consumption patterns across equipment and locations. Identify unusual use and give your team evidence for better operational decisions.",
    points: [
      "Consumption and historical trends",
      "Unusual-usage investigation",
      "Equipment and location comparisons",
    ],
  },
  {
    id: "security",
    image: "healthcare-iot.webp",
    imageSmall: "healthcare-iot-700.webp",
    imageAlt: "Connected healthcare equipment and monitoring concept",
    title: "IoT security",
    label: "Security & compliance",
    headline: "Build visibility on a stronger foundation.",
    description:
      "Design connected operations with controlled access, monitoring and auditability. Integrate information into the processes your team already uses.",
    points: [
      "Role-aware access requirements",
      "Operational events and audit trails",
      "Integration with security workflows",
    ],
  },
];
const industries = [
  [
    "Healthcare & laboratories",
    "Critical environments",
    "Locate equipment and monitor the conditions that matter.",
    "healthcare-sensors.webp",
    "Healthcare equipment and laboratory monitoring concept",
    "healthcare-sensors.webp"
  ],
  [
    "Logistics & cold chain",
    "Goods in motion",
    "Track assets and temperature-sensitive storage.",
    "logistics-sensors.webp",
    "Refrigerated logistics warehouse with temperature monitoring",
    "logistics-sensors.webp"
  ],
  [
    "Buildings & facilities",
    "Connected spaces",
    "Understand equipment, utilities and indoor conditions.",
    "building-sensors.webp",
    "Connected commercial buildings concept",
    "building-sensors.webp"
  ],
  [
    "Pharmaceutical",
    "Controlled conditions",
    "Monitor environments and retain excursion records.",
    "pharma-sensors.webp",
    "Pharmaceutical laboratory environmental monitoring",
    "pharma-sensors.webp"
  ],
  [
    "Retail, energy & infrastructure",
    "Operational visibility",
    "Connect distributed assets and identify changing usage.",
    "retail-energy-sensors.webp",
    "Retail energy management and connected infrastructure",
    "retail-energy-sensors.webp"
  ],
  [
    "Agriculture IoT",
    "Field conditions",
    "Monitor soil, water and changing environmental conditions.",
    "agriculture-sensors.webp",
    "Agriculture sensors and irrigated crop rows",
    "agriculture-sensors.webp"
  ]
];
const brand = `<img class="brand-logo" src="${asset("loydtech-logo-white-no-tagline.png")}" alt="Loydtech" width="2048" height="768">`;
const nav =
  '<a href="#technology">Technology</a><a href="#platform">Platform & apps</a><a href="#industries">Sectors</a><a href="#security">Security</a><a href="#pricing">Pricing</a><a href="#about">About</a>';

document.querySelector("#app").innerHTML = `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header"><div class="shell nav"><a class="brand" href="#top" aria-label="Loydtech home">${brand}</a><nav class="desktop-nav" aria-label="Main navigation">${nav}</nav><a class="button small nav-cta" href="#contact">Book a demo <span aria-hidden="true">↗</span></a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div><nav class="mobile-nav shell" id="mobile-nav" aria-label="Mobile navigation" hidden>${nav}<a href="#contact">Book a demo ↗</a></nav></header>
<main id="main">
  <section class="hero" id="top" aria-labelledby="hero-title"><div class="hero-grid" aria-hidden="true"><i></i><i></i><i></i><i></i></div><div class="shell hero-copy"><p class="eyebrow">LOYDTECH / CONNECTED OPERATIONS</p><h1 id="hero-title">See everything.<br><span class="spectrum">Secure what matters.</span></h1><p class="hero-description">We connect physical operations through RTLS, remote monitoring, AI analytics and systems integration. One central platform and mobile apps bring the right information to the people who need it.</p><div class="actions"><a class="button" href="#contact">Discuss your project <span aria-hidden="true">↗</span></a><a class="text-link" href="#technology">Explore the technology <span aria-hidden="true">→</span></a></div><p class="hero-proof">Built around your use case · Security considered from design through deployment</p></div><figure class="hero-sensor shell"><img src="${asset("connected-sensors.webp")}" width="1536" height="1024" alt="Illustrative wireless sensor, RTLS equipment tag and gateway in a laboratory setting" fetchpriority="high"><figcaption>Sensor, RTLS tag and gateway concept · Hardware selected to suit each site</figcaption></figure></section>
  <section class="section shell technology-section" id="technology"><div class="section-heading reveal"><p class="eyebrow">FOUR CONNECTED CAPABILITIES</p><h2>One technology stack.<br><span class="soft">Built around your operation.</span></h2><p>Start with a business problem. Combine the capabilities you need and see them through Sentinel 365 and companion mobile views.</p></div><div class="capability-grid reveal"><article><span class="capability-number">01 / LOCATE</span><h3>RTLS & asset tracking</h3><p>Understand where tagged assets are, how they move and when they enter important zones.</p><ul><li>Indoor location and zone context</li><li>Movement history and availability</li><li>Alerts for defined events</li></ul><a href="#industries">Explore RTLS <span aria-hidden="true">↗</span></a></article><article><span class="capability-number">02 / SENSE</span><h3>Remote monitoring</h3><p>Bring equipment and environmental readings into a useful operational view across sites.</p><ul><li>Temperature, humidity and power</li><li>Thresholds and escalation workflows</li><li>Trends and excursion records</li></ul><a href="#industries">Explore monitoring <span aria-hidden="true">↗</span></a></article><article><span class="capability-number">03 / UNDERSTAND</span><h3>AI analytics</h3><p>Turn authorised location, sensor and event data into patterns teams can investigate and act on.</p><ul><li>Trend and anomaly exploration</li><li>Operational summaries</li><li>Human review of recommended actions</li></ul><a href="#contact">Discuss an analytics use case <span aria-hidden="true">↗</span></a></article><article><span class="capability-number">04 / CONNECT</span><h3>Systems integration</h3><p>Connect suitable devices, cloud services and existing workflows through a scoped architecture.</p><ul><li>Device-to-platform data flows</li><li>APIs and workflow integration</li><li>Access and data boundaries</li></ul><a href="#contact">Discuss an integration <span aria-hidden="true">↗</span></a></article></div><p class="capability-footnote">Capabilities and compatible hardware depend on site assessment, connectivity and integration scope.</p></section>
  <section class="section shell platform-section" id="platform"><div class="section-heading centered reveal"><p class="product-label">SENTINEL <strong>365</strong></p><h2>Your connected operation.<br><span class="soft">One central view.</span></h2><p>Sentinel 365 is Loydtech’s platform concept for bringing location, telemetry, alerts and operational events together. Web and mobile views put relevant information within reach of different teams.</p></div><div class="platform-benefits reveal"><article><span class="feature-symbol" aria-hidden="true">01</span><h3>Connect</h3><p>Bring selected tags, sensors, gateways and existing data sources into a scoped architecture.</p></article><article><span class="feature-symbol" aria-hidden="true">02</span><h3>Understand</h3><p>Explore asset locations, conditions, trends and events through role-appropriate dashboards.</p></article><article><span class="feature-symbol" aria-hidden="true">03</span><h3>Respond</h3><p>Define thresholds, notifications and escalation steps that fit the team’s workflow.</p></article></div><div class="platform-link"><a class="button secondary" href="#apps">See web & mobile concepts <span aria-hidden="true">↗</span></a></div></section>
  <section class="section specifications-section" id="specifications"><div class="shell"><div class="section-heading reveal"><p class="eyebrow">TECHNICAL SCOPE</p><h2>What we define<br><span class="soft">before deployment.</span></h2><p>These are specification areas, not universal product ratings. Hardware, accuracy, coverage, data handling and integrations are confirmed in the proposal.</p></div><div class="spec-table" role="table" aria-label="Technology specification areas"><div class="spec-row spec-head" role="row"><span role="columnheader">Layer</span><span role="columnheader">What is scoped</span><span role="columnheader">Customer outcome</span></div><div class="spec-row" role="row"><strong role="cell">RTLS</strong><span role="cell">Tags, anchors or gateways, indoor zones, coverage and location frequency</span><span role="cell">Asset visibility and movement context</span></div><div class="spec-row" role="row"><strong role="cell">Monitoring</strong><span role="cell">Sensor type, sampling, thresholds, connectivity and retention</span><span role="cell">Condition trends and actionable alerts</span></div><div class="spec-row" role="row"><strong role="cell">AI analytics</strong><span role="cell">Data sources, use cases, human review and output limits</span><span role="cell">Patterns to investigate and decisions to support</span></div><div class="spec-row" role="row"><strong role="cell">Integration</strong><span role="cell">APIs, formats, permissions and workflow ownership</span><span role="cell">Relevant data where teams already work</span></div><div class="spec-row" role="row"><strong role="cell">Cybersecurity</strong><span role="cell">Identity, segmentation, logs, updates and escalation roles</span><span role="cell">Defined controls across the connected estate</span></div></div><a class="text-link" href="#contact">Get a scoped specification <span aria-hidden="true">↗</span></a></div></section>
  <section class="section industry-section" id="industries"><div class="shell"><div class="section-heading centered reveal"><h2>Built around your environment.</h2><p>Explore connected sensing across six environments. Select a sector to tell us about your project.</p></div><div class="industry-grid reveal">${industries.map((x, i) => `<button id="${["healthcare", "logistics", "buildings", "pharmaceutical", "retail", "agriculture"][i]}" class="industry-card ${i === 0 ? "featured" : ""}" data-industry="${x[0]}"><img class="industry-card__image" src="${asset(x[3])}" sizes="(max-width: 760px) 100vw, 50vw" alt="${x[4]}" width="1536" height="1024" loading="lazy" decoding="async"><span class="industry-card__content"><small>${x[1]}</small><strong>${x[0]}</strong><span class="industry-description">${x[2]}</span></span><b aria-hidden="true">↗</b></button>`).join("")}</div></div></section>
  <section class="partners-section" aria-labelledby="partners-title"><div class="shell partners-heading"><p class="eyebrow">TECHNOLOGY ECOSYSTEM</p><h2 id="partners-title">Connected with established technology.</h2></div><div class="partner-marquee" aria-label="Technology partner names"><div class="partner-track"><div class="partner-group"><span class="partner-name">Milesight</span><span class="partner-name">HUAWEI</span><span class="partner-name">Cisco</span><span class="partner-name">Minew</span><span class="partner-name">MOKO SMART</span></div><div class="partner-group" aria-hidden="true"><span class="partner-name">Milesight</span><span class="partner-name">HUAWEI</span><span class="partner-name">Cisco</span><span class="partner-name">Minew</span><span class="partner-name">MOKO SMART</span></div></div></div></section>
  <section class="section shell security-section" id="security"><div class="section-heading reveal"><p class="eyebrow">CYBERSECURITY BY DESIGN</p><h2>Connected systems need<br><span class="soft">clear security boundaries.</span></h2><p>Cybersecurity is part of every IoT conversation: from choosing devices and connections to managing access, monitoring events and integrating with existing security operations.</p></div><div class="security-grid reveal"><article><span>01 / DISCOVER</span><h3>Asset & data visibility</h3><p>Identify the devices, data flows and access paths in the proposed deployment.</p></article><article><span>02 / PROTECT</span><h3>Controlled access</h3><p>Scope identity, roles, credentials and network separation with your IT team.</p></article><article><span>03 / DETECT</span><h3>Monitoring & audit trails</h3><p>Define device health, relevant events, logs and escalation responsibilities.</p></article><article><span>04 / RESPOND</span><h3>Integrated workflows</h3><p>Plan how alerts connect to existing operational and security processes.</p></article></div><div class="security-statement"><p>Security controls, POPIA considerations and any integrations with SIEM or security tools are specified during assessment. No certification or compliance outcome is implied by this website.</p><a class="text-link" href="#contact">Discuss a secure IoT project <span aria-hidden="true">↗</span></a></div></section>
  <section class="section process-section" id="process"><div class="shell"><div class="section-heading reveal"><p class="eyebrow">HOW WE WORK</p><h2>From your challenge<br><span class="soft">to a scoped solution.</span></h2></div><div class="process-grid reveal"><article><b>01</b><h3>Understand</h3><p>Tell us the site, assets, conditions and decisions you need to improve.</p></article><article><b>02</b><h3>Design</h3><p>We map RTLS, monitoring, analytics, integration and security requirements.</p></article><article><b>03</b><h3>Pilot</h3><p>Validate devices, connectivity, dashboards and alerts against an agreed use case.</p></article><article><b>04</b><h3>Expand</h3><p>Plan a wider rollout, team access, support and the operating model.</p></article></div><a class="button" href="#contact">Start with your use case <span aria-hidden="true">↗</span></a></div></section>
  <section class="about-section shell reveal" id="about"><div><p class="eyebrow">ABOUT LOYDTECH</p><h2>Physical operations.<br>Digital clarity.</h2><span class="about-line"></span></div><div><p>Loydtech Digital Solutions is a South African IoT company focused on asset visibility, remote monitoring, AI-assisted operational insight and systems integration. We connect field needs with the right devices, platform views and response workflows.</p><p>Our approach starts with the work you do: what needs to be located, measured, understood or secured. We then scope the architecture, mobile access, integrations and cybersecurity requirements around that need.</p><a class="text-link" href="#process">See how we work <span aria-hidden="true">↗</span></a></div></section>
  <section class="section shell faq-section" id="faq"><div class="section-heading reveal"><p class="eyebrow">COMMON QUESTIONS</p><h2>What happens next?</h2></div><div class="faq-list"><details><summary>Can Loydtech work with our existing systems?</summary><p>Potential integrations are reviewed during scoping. We assess available interfaces, access requirements, data formats and ownership before proposing a connection.</p></details><details><summary>What devices and connectivity do we need?</summary><p>That depends on your site, assets and use case. A proposal specifies suitable tags, sensors, gateways, network requirements and installation assumptions.</p></details><details><summary>How is cybersecurity handled?</summary><p>We define device and data boundaries, access roles, logging and escalation requirements with your team. Controls and responsibilities are documented for the agreed deployment.</p></details><details><summary>How are pilot and rollout costs calculated?</summary><p>Quotes reflect hardware, installation, connectivity, platform access, integration and support. We separate once-off and recurring items in the proposal.</p></details><details><summary>Is Sentinel 365 available as a mobile app?</summary><p>Web and mobile concepts show the intended experience. Final features, integrations and availability are confirmed for each project scope.</p></details></div></section>
  <section class="contact-section shell reveal" id="contact"><div class="contact-grid" aria-hidden="true"></div><p class="eyebrow">LET’S PLAN THE NEXT STEP</p><h2>What would you like<br><span class="spectrum">to see more clearly?</span></h2><p>Describe the site, assets or conditions involved. We’ll use that context to discuss a suitable pilot or deployment scope.</p><div class="contact-actions"><button class="button" data-enquire>Book a discovery call <span aria-hidden="true">↗</span></button><button class="button secondary" data-enquire data-price="Connected rollout">Request a quote <span aria-hidden="true">↗</span></button></div><a class="contact-email" href="mailto:info@loydtech.co.za">info@loydtech.co.za</a></section>
</main>
<footer class="shell"><div class="footer-top"><a class="brand" href="#top">${brand}</a><p>Connected intelligence.<br>A smarter tomorrow.</p><nav aria-label="Footer navigation"><a href="#platform">Sentinel 365</a><a href="#industries">Sectors</a><a href="#security">Cybersecurity</a><a href="#pricing">Pricing</a><a href="#about">About Loydtech</a><a href="mailto:info@loydtech.co.za">Contact</a></nav></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Loydtech Digital Solutions.</span><span>South Africa</span><button class="plain-button" data-privacy>Privacy</button></div></footer>
<dialog id="enquiry-dialog" aria-labelledby="enquiry-title"><div class="dialog-head"><span class="eyebrow">TELL US ABOUT YOUR PROJECT</span><button class="close-button" data-close aria-label="Close enquiry">×</button></div><h2 id="enquiry-title">Book a discovery call.</h2><p>Share the essentials. We’ll prepare an email you can review and send from your own app.</p><form id="enquiry-form"><div class="form-row"><label>Your name<input name="name" autocomplete="name" required maxlength="100"></label><label>Work email<input name="email" type="email" autocomplete="email" required maxlength="200"></label></div><div class="form-row"><label>Company<input name="company" autocomplete="organization" maxlength="150"></label><label>Sector<select name="sector"><option value="">Select a sector</option>${industries.map((x) => `<option>${x[0]}</option>`).join("")}<option>Other</option></select></label></div><label>Area of interest<select name="interest"><option value="">Help me choose</option><option>RTLS & asset tracking</option><option>Remote monitoring</option><option>AI analytics</option><option>Systems integration</option><option>IoT cybersecurity</option>${solutions.map((s) => `<option>${s.title}</option>`).join("")}<option>IoT pilot pricing</option><option>Connected rollout pricing</option></select></label><div class="form-row"><label>Sites or assets to include<input name="scale" maxlength="120" placeholder="e.g. 2 sites, 50 assets"></label><label>Preferred next step<select name="nextStep"><option>Discovery call</option><option>Demo</option><option>Quote</option></select></label></div><label>What do you need to track, monitor or secure?<textarea name="message" rows="3" required maxlength="2500"></textarea></label><p class="form-note">Please leave out sensitive or patient information. This form prepares an email locally; nothing is sent until you send it from your email app.</p><div class="form-actions"><button class="button" type="submit">Prepare email ↗</button><button class="text-link" type="button" id="download-enquiry">Download enquiry</button></div><p class="form-status" role="status" id="form-status"></p></form></dialog>
<dialog id="privacy-dialog" aria-labelledby="privacy-title"><div class="dialog-head"><h2 id="privacy-title">Website privacy</h2><button class="close-button" data-close aria-label="Close privacy">×</button></div><p>This website does not use analytics or advertising cookies. The enquiry form prepares an email locally; it does not submit your details to a website server.</p><p>If you choose to send the prepared email, your email provider will deliver your name, email address, company and message to info@loydtech.co.za. Downloading an enquiry saves a text file to your device.</p><p>GitHub Pages hosts this website and may process technical request information under <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub’s privacy statement</a>. Contact <a href="mailto:info@loydtech.co.za">info@loydtech.co.za</a> with privacy questions.</p></dialog>`;

expandWebsite(asset);

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
function closeMenu() {
  mobileNav.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  mobileNav.hidden = !open;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileNav.hidden) {
    closeMenu();
    menuToggle.focus();
  }
});
mobileNav
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
matchMedia("(min-width: 951px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});
const enquiry = document.querySelector("#enquiry-dialog");
const form = document.querySelector("#enquiry-form");
const status = document.querySelector("#form-status");
let dialogOpener;
function openDialog(dialog, opener) {
  dialogOpener = opener;
  dialog.showModal();
  document.body.classList.add("modal-open");
}
document.addEventListener("click", (event) => {
  const trigger = event.target.closest(
    "[data-enquire],[data-industry]",
  );
  if (trigger) {
    const pricing = trigger.dataset.price;
    document.querySelector("#enquiry-title").textContent = pricing
      ? "Request a quote."
      : "Book a discovery call.";
    const industry = trigger.dataset.industry;
    if (industry) {
      form.elements.sector.value = industry === "Healthcare IoT" ? "Healthcare & laboratories" : industry;
      form.elements.message.value = `I would like to discuss a connected solution for ${industry.toLowerCase()}.`;
    }
    if (pricing) {
      form.elements.interest.value = `${pricing} pricing`;
      form.elements.nextStep.value = "Quote";
      form.elements.message.value = `Please prepare a quote for ${pricing.toLowerCase()}. My project involves: `;
    }
    status.textContent = "";
    openDialog(enquiry, trigger);
  }
  const privacy = event.target.closest("[data-privacy]");
  if (privacy) openDialog(document.querySelector("#privacy-dialog"), privacy);
  const close = event.target.closest("[data-close]");
  if (close) close.closest("dialog").close();
});
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    dialogOpener?.focus();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        event.clientX < r.left ||
        event.clientX > r.right ||
        event.clientY < r.top ||
        event.clientY > r.bottom
      )
        dialog.close();
    }
  });
});
function enquiryText() {
  const data = new FormData(form);
  return `Loydtech project enquiry\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "Not provided"}\nSector: ${data.get("sector") || "Not specified"}\nInterest: ${data.get("interest") || "Help me choose"}\nScale: ${data.get("scale") || "Not specified"}\nNext step: ${data.get("nextStep")}\n\n${data.get("message")}`;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const subject = `Loydtech project enquiry: ${form.elements.interest.value || "New project"}`;
  window.location.href = `mailto:info@loydtech.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(enquiryText())}`;
  status.textContent =
    "Your email draft is ready. Send it in your email app to complete the enquiry. If no app opened, download the enquiry and email it to info@loydtech.co.za.";
});
document.querySelector("#download-enquiry").addEventListener("click", () => {
  if (!form.reportValidity()) return;
  const url = URL.createObjectURL(
    new Blob([enquiryText()], { type: "text/plain;charset=utf-8" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "loydtech-enquiry.txt";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  status.textContent =
    "Enquiry downloaded. Email the file to info@loydtech.co.za when you are ready. Nothing has been submitted.";
});
if (
  "IntersectionObserver" in window &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("will-reveal");
    observer.observe(element);
  });
}
