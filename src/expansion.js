import "./expansion.css";

export function expandWebsite(solutions, asset) {
  const image = (name, alt, portrait = false) =>
    `<img src="${asset(`${name}.webp`)}" srcset="${asset(`${name}-700.webp`)} 700w, ${asset(`${name}.webp`)} ${portrait ? 1024 : 1536}w" sizes="(max-width: 800px) 100vw, 700px" width="${portrait ? 1024 : 1536}" height="${portrait ? 1536 : 1024}" alt="${alt}" loading="lazy" decoding="async">`;
  const dropdown = (label, id, links) =>
    `<div class="nav-dropdown"><button class="dropdown-trigger" aria-expanded="false" aria-controls="${id}">${label}<span aria-hidden="true">⌄</span></button><div class="dropdown-panel" id="${id}" hidden>${links}</div></div>`;
  const solutionLinks = `<a href="#solutions">All solutions</a>${solutions.map((s) => `<a href="#solutions" data-select="${s.id}">${s.title}</a>`).join("")}<a href="#agriculture">Agriculture IoT</a><a href="#healthcare">Healthcare IoT</a>`;
  const industryLinks =
    '<a href="#industries">All industries</a><a href="#healthcare">Healthcare & laboratories</a><a href="#agriculture">Agriculture IoT</a>';
  for (const [selector, prefix] of [
    [".desktop-nav", "desktop"],
    [".mobile-nav", "mobile"],
  ]) {
    document.querySelector(selector).innerHTML =
      `${dropdown("Solutions", `${prefix}-solutions`, solutionLinks)}<a href="#platform">Sentinel 365</a>${dropdown("Industries", `${prefix}-industries`, industryLinks)}<a href="#apps">Web & mobile</a><a href="#pricing">Pricing</a><a href="#security">Security</a>`;
  }
  document.querySelector("#platform").insertAdjacentHTML(
    "afterend",
    `
    <section class="section shell app-showcase" id="apps">
      <div class="section-heading centered reveal"><h2>A wider view.<br><span class="spectrum">Wherever work takes you.</span></h2><p>Explore a visual concept for Sentinel 365 on the web and on mobile, from site-wide visibility to focused equipment alerts.</p></div>
      <div class="app-gallery reveal">
        <figure class="web-app-figure"><a href="${asset("web-app.webp")}" target="_blank" rel="noopener noreferrer" aria-label="View web app concept image in a new tab">${image("web-app", "Sentinel 365 web dashboard concept on a desktop display with sample facility and sensor data")}</a><figcaption><h3>Web app concept</h3><p>A central workspace for asset locations, environmental trends and operational events.</p><a class="text-link" href="${asset("web-app.webp")}" target="_blank" rel="noopener noreferrer">View image <span aria-hidden="true">↗</span></a></figcaption></figure>
        <figure class="mobile-app-figure"><a href="${asset("mobile-app.webp")}" target="_blank" rel="noopener noreferrer" aria-label="View mobile app concept image in a new tab">${image("mobile-app", "Two phones showing a Sentinel 365 mobile app concept with sample alerts and a facility map", true)}</a><figcaption><h3>Mobile app concept</h3><p>Focused views of equipment status, alerts and locations for teams on the move.</p><a class="text-link" href="${asset("mobile-app.webp")}" target="_blank" rel="noopener noreferrer">View image <span aria-hidden="true">↗</span></a></figcaption></figure>
      </div><p class="concept-note">Illustrative app concepts with sample data. Final interfaces and availability are confirmed during project scoping.</p>
    </section>`,
  );
  document.querySelector("#industries").insertAdjacentHTML(
    "beforebegin",
    `
    <section class="sector-showcase shell" aria-label="Agriculture and healthcare IoT examples">
      <article class="sector-feature reveal" id="agriculture"><figure>${image("agriculture-iot", "Agriculture IoT concept with soil sensor, weather station and tablet beside irrigated crop rows")}<figcaption>Illustrative connected-farm scene.</figcaption></figure><div class="sector-copy"><p class="solution-label">Agriculture IoT</p><h2>Stay closer<br>to every growing condition.</h2><p>Explore connected monitoring for soil, irrigation and farm environments. Bring field observations into a clearer operational picture.</p><ul><li>Soil moisture and environmental sensing</li><li>Water storage and irrigation monitoring</li><li>Weather conditions and threshold alerts</li></ul><button class="text-link" data-industry="Agriculture IoT">Discuss agriculture IoT <span aria-hidden="true">↗</span></button></div></article>
      <article class="sector-feature healthcare-feature reveal" id="healthcare"><figure>${image("healthcare-iot", "Healthcare IoT concept with nurse, tablet, tagged infusion pumps and a refrigerator temperature sensor")}<figcaption>Illustrative healthcare equipment environment.</figcaption></figure><div class="sector-copy"><p class="solution-label">Healthcare IoT</p><h2>More visibility.<br>Better-equipped teams.</h2><p>Connect equipment location and storage conditions across healthcare facilities and laboratories, helping teams find assets and respond to changes.</p><ul><li>Equipment tracking and room-level visibility</li><li>Refrigerator and cold-room monitoring</li><li>Environmental alerts and condition history</li></ul><button class="text-link" data-industry="Healthcare IoT">Discuss healthcare IoT <span aria-hidden="true">↗</span></button></div></article>
    </section>`,
  );
  document.querySelector("#contact").insertAdjacentHTML(
    "beforebegin",
    `
    <section class="section shell pricing-section" id="pricing"><div class="section-heading centered reveal"><h2>Pricing that fits<br><span class="soft">your operation.</span></h2><p>Start with a focused pilot or plan a wider rollout. Your quote reflects the devices, sites, connectivity and support you need.</p></div><div class="pricing-grid reveal">
      <article class="price-card"><p class="solution-label">Start with a defined use case</p><h3>IoT pilot</h3><p class="price-value">Request a quote</p><p>For teams exploring one site or a focused operational challenge.</p><ul><li>Use-case and site scoping</li><li>Device and connectivity planning</li><li>Monitoring and alert requirements</li><li>Pilot deployment proposal</li></ul><button class="button" data-enquire data-price="IoT pilot">Request pilot pricing <span aria-hidden="true">↗</span></button></article>
      <article class="price-card rollout"><p class="solution-label">Connect across your operation</p><h3>Connected rollout</h3><p class="price-value">Custom quote</p><p>For broader deployments across teams, assets or multiple sites.</p><ul><li>Multi-site solution architecture</li><li>Device quantities and installation scope</li><li>Integration and access requirements</li><li>Support and operating-cost options</li></ul><button class="button" data-enquire data-price="Connected rollout">Request rollout pricing <span aria-hidden="true">↗</span></button></article>
      </div><p class="pricing-note">Your proposal will itemise hardware, installation, connectivity, platform access, support and applicable taxes. Once-off and recurring costs are confirmed in the quote.</p></section>`,
  );
  document
    .querySelector("footer nav")
    .insertAdjacentHTML(
      "beforeend",
      '<a href="#apps">Web & mobile</a><a href="#agriculture">Agriculture IoT</a><a href="#healthcare">Healthcare IoT</a><a href="#pricing">Pricing</a>',
    );
  document
    .querySelector('select[name="interest"]')
    .insertAdjacentHTML(
      "beforeend",
      "<option>Agriculture IoT</option><option>Healthcare IoT</option><option>IoT pilot pricing</option><option>Connected rollout pricing</option>",
    );

  const groups = [...document.querySelectorAll(".nav-dropdown")];
  function closeDropdown(group, focus = false) {
    const trigger = group.querySelector(".dropdown-trigger");
    trigger.setAttribute("aria-expanded", "false");
    group.querySelector(".dropdown-panel").hidden = true;
    if (focus) trigger.focus();
  }
  groups.forEach((group) => {
    const trigger = group.querySelector(".dropdown-trigger");
    const panel = group.querySelector(".dropdown-panel");
    trigger.addEventListener("click", () => {
      const open = trigger.getAttribute("aria-expanded") !== "true";
      groups.forEach((other) => closeDropdown(other));
      trigger.setAttribute("aria-expanded", String(open));
      panel.hidden = !open;
    });
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        groups.forEach((other) => closeDropdown(other));
        panel.hidden = false;
        trigger.setAttribute("aria-expanded", "true");
        panel.querySelector("a").focus();
      }
    });
    group.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        closeDropdown(group, true);
      }
    });
    group.addEventListener("focusout", (event) => {
      if (!group.contains(event.relatedTarget)) closeDropdown(group);
    });
    panel
      .querySelectorAll("a")
      .forEach((link) =>
        link.addEventListener("click", () => closeDropdown(group)),
      );
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-dropdown"))
      groups.forEach((group) => closeDropdown(group));
  });
}
