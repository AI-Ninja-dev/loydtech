import "./styles.css";

const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`;
const solutions = [
  {
    id: "tracking",
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
  ],
  [
    "Logistics & cold chain",
    "Goods in motion",
    "Track assets and temperature-sensitive storage.",
  ],
  [
    "Buildings & facilities",
    "Connected spaces",
    "Understand equipment, utilities and indoor conditions.",
  ],
  [
    "Pharmaceutical",
    "Controlled conditions",
    "Monitor environments and retain excursion records.",
  ],
  [
    "Retail, energy & infrastructure",
    "Operational visibility",
    "Connect distributed assets and identify changing usage.",
  ],
];
const brand = '<i aria-hidden="true"></i>LOYDTECH';
const nav =
  '<a href="#solutions">Solutions</a><a href="#platform">Sentinel 365</a><a href="#industries">Industries</a><a href="#security">Security</a>';

document.querySelector("#app").innerHTML = `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header"><div class="shell nav"><a class="brand" href="#top" aria-label="Loydtech home">${brand}</a><nav class="desktop-nav" aria-label="Main navigation">${nav}</nav><a class="button small nav-cta" href="#contact">Book a demo <span aria-hidden="true">↗</span></a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div><nav class="mobile-nav shell" id="mobile-nav" aria-label="Mobile navigation" hidden>${nav}<a href="#contact">Book a demo ↗</a></nav></header>
<main id="main">
  <section class="hero" id="top" aria-labelledby="hero-title"><div class="hero-grid" aria-hidden="true"><i></i><i></i><i></i><i></i></div><div class="shell hero-copy"><p class="eyebrow"><span class="brand-line"></span>Connected intelligence. Real-world impact.</p><h1 id="hero-title">Your operations. Connected.<br><span class="spectrum">Your possibilities. Expanded.</span></h1><p class="hero-description">Connect assets, environments and people with IoT intelligence built around the way your business works.</p><div class="actions"><a class="button" href="#contact">Book a demo <span aria-hidden="true">↗</span></a><a class="text-link" href="#platform">Explore Sentinel 365 <span aria-hidden="true">→</span></a></div></div><figure class="hero-visual shell"><img src="${asset("intelligent-campus.webp")}" srcset="${asset("intelligent-campus-800.webp")} 800w, ${asset("intelligent-campus.webp")} 1536w" sizes="(max-width: 800px) 100vw, 1000px" width="1536" height="1024" alt="Architectural concept of connected buildings with illuminated sensor and utility pathways" fetchpriority="high"><figcaption>One connected view of assets, buildings and environments.</figcaption></figure></section>
  <section class="solution-rail shell" aria-label="Explore solution areas">${solutions.map((s) => `<a href="#solutions" data-select="${s.id}"><span>${s.title}</span><span aria-hidden="true">↗</span></a>`).join("")}</section>
  <section class="section shell" id="platform"><div class="section-heading centered reveal"><p class="product-label">SENTINEL <strong>365</strong></p><h2>Connected assets.<br><span class="soft">A more complete picture.</span></h2><p>Bring location, sensor telemetry and operational events together. Sentinel 365 is Loydtech’s platform for turning physical activity into useful insight.</p></div><div class="platform-benefits reveal"><article><span class="feature-symbol" aria-hidden="true">↔</span><h3>Connect your environment</h3><p>Shape a device-to-cloud architecture around your assets, sensors and operating requirements.</p></article><article><span class="feature-symbol" aria-hidden="true">◎</span><h3>See what matters</h3><p>Bring readings, locations and events into a view that helps teams understand what is happening.</p></article><article><span class="feature-symbol" aria-hidden="true">↗</span><h3>Act with context</h3><p>Use thresholds, alerts and historical trends to support a more informed operational response.</p></article></div></section>
  <section class="section solutions-section" id="solutions"><div class="shell"><div class="section-heading reveal"><h2>Many moving parts.<br><span class="spectrum">One connected approach.</span></h2><p>Explore the building blocks of your next connected operation.</p></div><div class="solution-tabs" role="tablist" aria-label="Solution areas">${solutions.map((s, i) => `<button role="tab" id="tab-${s.id}" data-tab="${s.id}" aria-selected="${i === 0}" aria-controls="solution-panel" tabindex="${i === 0 ? 0 : -1}">${s.title}</button>`).join("")}</div><div class="solution-panel" id="solution-panel" role="tabpanel" aria-labelledby="tab-tracking" tabindex="0"></div></div></section>
  <section class="section shell building-section"><div class="building-copy reveal"><p class="eyebrow">From device to decision</p><h2>Make your physical world<br><span class="soft">work smarter.</span></h2><p>From a single sensor to a multi-site deployment, start with the operational problem. Connect the right devices, define useful signals and build a clear response.</p><a class="text-link" href="#contact">Book a demo <span aria-hidden="true">↗</span></a></div><figure class="campus-photo reveal"><img src="${asset("connected-campus.webp")}" srcset="${asset("connected-campus-800.webp")} 800w, ${asset("connected-campus.webp")} 1536w" sizes="(max-width: 800px) 100vw, 1000px" alt="Concept visualization of a connected commercial campus at dusk" width="1536" height="1024" loading="lazy"><figcaption>Connected-campus concept illustration.</figcaption></figure><div class="workflow reveal"><div><b>Connect</b><p>Sensors, tags and gateways.</p></div><span aria-hidden="true">→</span><div><b>Monitor</b><p>Conditions, location and state.</p></div><span aria-hidden="true">→</span><div><b>Respond</b><p>Alerts, context and action.</p></div><span aria-hidden="true">→</span><div><b>Improve</b><p>Trends that inform decisions.</p></div></div></section>
  <section class="section industry-section" id="industries"><div class="shell"><div class="section-heading centered reveal"><h2>Built around your environment.</h2><p>Different industries. Different priorities. A connected approach shaped by the work you do.</p></div><div class="industry-grid reveal">${industries.map((x, i) => `<button class="industry-card ${i === 0 ? "featured" : ""}" data-industry="${x[0]}">${i === 0 ? '<span class="industry-art" aria-hidden="true">+</span>' : ""}<span><small>${x[1]}</small><strong>${x[0]}</strong><span class="industry-description">${x[2]}</span></span><b aria-hidden="true">↗</b></button>`).join("")}</div></div></section>
  <section class="section shell" id="security"><div class="section-heading reveal"><p class="eyebrow">Designed with responsibility</p><h2>Intelligence needs<br><span class="soft">a trusted foundation.</span></h2><p>Plan security, access and integration from the start. Define the controls your connected operation needs before deployment.</p></div><div class="security-grid reveal"><article><h3>Controlled access</h3><p>Define who can view information and manage devices across your operation.</p></article><article><h3>Operational auditability</h3><p>Include event records and reporting needs in the solution design.</p></article><article><h3>Compliance-minded design</h3><p>Scope data handling and controls around POPIA and your applicable requirements.</p></article><article><h3>Integration-ready thinking</h3><p>Connect relevant information to your existing platforms and response workflows.</p></article></div></section>
  <section class="about-section shell reveal" id="about"><div><span class="brand compact">${brand}</span><h2>People. Technology.<br>A smarter tomorrow.</h2></div><div><p>Loydtech Digital Solutions connects physical operations to useful digital intelligence through field knowledge, connected devices, cloud platforms and automation.</p><p>We start with what you need to track, monitor or improve. Then we shape the architecture, integrations and deployment around that need.</p></div></section>
  <section class="contact-section shell reveal" id="contact"><div class="contact-grid" aria-hidden="true"></div><h2>Your next connection<br><span class="spectrum">starts here.</span></h2><p>Tell us what you need to track, monitor or optimise.<br>Let’s explore the right approach together.</p><button class="button" data-enquire>Book a demo <span aria-hidden="true">↗</span></button><a class="contact-email" href="mailto:info@loydtech.co.za">info@loydtech.co.za</a></section>
</main>
<footer class="shell"><div class="footer-top"><a class="brand" href="#top">${brand}</a><p>Connected intelligence.<br>A smarter tomorrow.</p><nav aria-label="Footer navigation"><a href="#platform">Sentinel 365</a><a href="#solutions">Solutions</a><a href="#about">About Loydtech</a><a href="mailto:info@loydtech.co.za">Contact</a></nav></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Loydtech Digital Solutions.</span><span>South Africa</span><button class="plain-button" data-privacy>Privacy</button></div></footer>
<dialog id="enquiry-dialog" aria-labelledby="enquiry-title"><div class="dialog-head"><span class="eyebrow">Let’s talk</span><button class="close-button" data-close aria-label="Close enquiry">×</button></div><h2 id="enquiry-title">Book a demo.</h2><p>Share a little about your operation. This form prepares an email for you to review and send.</p><form id="enquiry-form"><div class="form-row"><label>Your name<input name="name" autocomplete="name" required maxlength="100"></label><label>Work email<input name="email" type="email" autocomplete="email" required maxlength="200"></label></div><label>Company<input name="company" autocomplete="organization" maxlength="150"></label><label>Area of interest<select name="interest">${solutions.map((s) => `<option>${s.title}</option>`).join("")}<option>Other / let’s explore</option></select></label><label>What would you like to connect?<textarea name="message" rows="3" required maxlength="2500"></textarea></label><p class="form-note">Your details stay in this browser until you send the email. Please leave out sensitive or patient information.</p><div class="form-actions"><button class="button" type="submit">Prepare email ↗</button><button class="text-link" type="button" id="download-enquiry">Download enquiry</button></div><p class="form-status" role="status" id="form-status"></p></form></dialog>
<dialog id="privacy-dialog" aria-labelledby="privacy-title"><div class="dialog-head"><h2 id="privacy-title">Website privacy</h2><button class="close-button" data-close aria-label="Close privacy">×</button></div><p>This website does not use analytics or advertising cookies. The enquiry form prepares an email locally; it does not submit your details to a website server.</p><p>If you choose to send the prepared email, your email provider will deliver your name, email address, company and message to info@loydtech.co.za. Downloading an enquiry saves a text file to your device.</p><p>GitHub Pages hosts this website and may process technical request information under <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub’s privacy statement</a>. Contact <a href="mailto:info@loydtech.co.za">info@loydtech.co.za</a> with privacy questions.</p></dialog>`;

const tabs = [...document.querySelectorAll("[data-tab]")];
function selectSolution(id, focus = false) {
  const s = solutions.find((item) => item.id === id) || solutions[0];
  tabs.forEach((tab) => {
    const selected = tab.dataset.tab === s.id;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  });
  const panel = document.querySelector("#solution-panel");
  panel.setAttribute("aria-labelledby", `tab-${s.id}`);
  panel.innerHTML = `<div class="solution-image"><img src="${asset("intelligent-campus.webp")}" srcset="${asset("intelligent-campus-800.webp")} 800w, ${asset("intelligent-campus.webp")} 1536w" sizes="(max-width: 800px) 100vw, 1000px" width="1536" height="1024" alt="Connected-building concept for ${s.title.toLowerCase()}" loading="lazy"><div class="image-caption">${s.label}<span>Concept illustration</span></div></div><div class="solution-copy"><span class="solution-label">${s.label}</span><h3>${s.headline}</h3><p>${s.description}</p><ul>${s.points.map((point) => `<li><span aria-hidden="true">✓</span>${point}</li>`).join("")}</ul><button class="text-link" data-solution-enquire="${s.id}">Discuss this solution <span aria-hidden="true">↗</span></button><p class="scope-note">Capabilities, integrations and deployment requirements are agreed during project scoping.</p></div>`;
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectSolution(tab.dataset.tab));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectSolution(tabs[next].dataset.tab, true);
    }
  });
});
selectSolution("tracking");
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
matchMedia("(min-width: 801px)").addEventListener("change", (event) => {
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
  const link = event.target.closest("[data-select]");
  if (link) selectSolution(link.dataset.select);
  const trigger = event.target.closest(
    "[data-enquire],[data-solution-enquire],[data-industry]",
  );
  if (trigger) {
    const s = solutions.find(
      (item) => item.id === trigger.dataset.solutionEnquire,
    );
    const industry = trigger.dataset.industry;
    if (s) form.elements.interest.value = s.title;
    if (industry) {
      form.elements.interest.value = "Other / let’s explore";
      form.elements.message.value = `I would like to discuss a connected solution for ${industry.toLowerCase()}.`;
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
  return `Loydtech demo enquiry\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "Not provided"}\nInterest: ${data.get("interest")}\n\n${data.get("message")}`;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const subject = `Loydtech demo enquiry: ${form.elements.interest.value}`;
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
