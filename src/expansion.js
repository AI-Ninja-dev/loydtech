import "./expansion.css";

export function expandWebsite(asset) {
  const image = (name, alt, portrait = false) =>
    `<img src="${asset(`${name}.webp`)}" srcset="${asset(`${name}-700.webp`)} 700w, ${asset(`${name}.webp`)} ${portrait ? 1024 : 1536}w" sizes="(max-width: 800px) 100vw, 700px" width="${portrait ? 1024 : 1536}" height="${portrait ? 1536 : 1024}" alt="${alt}" loading="lazy" decoding="async">`;
  const dropdown = (label, id, links) =>
    `<div class="nav-dropdown"><button class="dropdown-trigger" aria-expanded="false" aria-controls="${id}">${label}<span aria-hidden="true">⌄</span></button><div class="dropdown-panel" id="${id}" hidden>${links}</div></div>`;
  const solutionLinks = `<a href="#technology">Four core capabilities</a><a href="#specifications">Specifications</a><a href="#industries">Sectors & use cases</a>`;
  const industryLinks =
    '<a href="#industries">All industries</a><a href="#healthcare">Healthcare & laboratories</a><a href="#agriculture">Agriculture IoT</a>';
  for (const [selector, prefix] of [
    [".desktop-nav", "desktop"],
    [".mobile-nav", "mobile"],
  ]) {
    document.querySelector(selector).innerHTML =
      `${dropdown("Technology", `${prefix}-solutions`, solutionLinks)}<a href="#platform">Platform & apps</a>${dropdown("Sectors", `${prefix}-industries`, industryLinks)}<a href="#security">Cybersecurity</a><a href="#pricing">Pricing</a><a href="#about">About</a>`;
  }
  document.querySelector("#platform").insertAdjacentHTML(
    "afterend",
    `
    <section class="section shell app-showcase" id="apps">
      <div class="section-heading centered reveal"><h2>A wider view.<br><span class="spectrum">Wherever work takes you.</span></h2><p>Sentinel 365 brings selected RTLS, monitoring, analytics and integration data into central web views, with focused mobile views for teams on the move.</p></div>
      <div class="app-gallery reveal">
        <figure class="web-app-figure"><a href="${asset("web-app.webp")}" target="_blank" rel="noopener noreferrer" aria-label="View web app concept image in a new tab">${image("web-app", "Sentinel 365 web dashboard concept on a desktop display with sample facility and sensor data")}</a><figcaption><h3>Web app concept</h3><p>A central view for asset locations, environmental trends, alerts and operational events.</p><a class="text-link" href="${asset("web-app.webp")}" target="_blank" rel="noopener noreferrer">View image <span aria-hidden="true">↗</span></a></figcaption></figure>
        <figure class="mobile-app-figure"><a href="${asset("mobile-app.webp")}" target="_blank" rel="noopener noreferrer" aria-label="View mobile app concept image in a new tab">${image("mobile-app", "Two phones showing a Sentinel 365 mobile app concept with sample alerts and a facility map", true)}</a><figcaption><h3>Mobile app concept</h3><p>Role-appropriate access to locations, conditions and alerts for teams on the move.</p><a class="text-link" href="${asset("mobile-app.webp")}" target="_blank" rel="noopener noreferrer">View image <span aria-hidden="true">↗</span></a></figcaption></figure>
      </div><p class="concept-note">Illustrative app concepts with sample data. Final interfaces and availability are confirmed during project scoping.</p>
    </section>`,
  );
  document.querySelector("#contact").insertAdjacentHTML(
    "beforebegin",
    `
    <section class="section shell pricing-section" id="pricing"><div class="section-heading centered reveal"><p class="eyebrow">PLAN YOUR INVESTMENT</p><h2>Clear scope.<br><span class="soft">A quote built for your operation.</span></h2><p>Start with one defined use case or plan a connected rollout. We separate implementation items from ongoing operating costs so your team can compare options.</p></div><div class="pricing-grid reveal"><article class="price-card"><p class="solution-label">START SMALL</p><h3>Focused pilot</h3><p class="price-value">Request a quote</p><p>Validate one use case at a defined site before a wider deployment.</p><ul><li>Discovery and site requirements</li><li>Selected devices and connectivity plan</li><li>Dashboard and alert scope</li><li>Security and success criteria</li><li>Pilot proposal and review</li></ul><button class="button" data-enquire data-price="IoT pilot">Scope a pilot <span aria-hidden="true">↗</span></button></article><article class="price-card rollout"><p class="solution-label">SCALE WITH CONTEXT</p><h3>Connected rollout</h3><p class="price-value">Custom quote</p><p>Connect more sites, teams and systems with a documented architecture.</p><ul><li>Multi-site devices and installation</li><li>Sentinel 365 and mobile view scope</li><li>Integration and analytics requirements</li><li>Access, monitoring and response design</li><li>Support and operating model</li></ul><button class="button" data-enquire data-price="Connected rollout">Plan a rollout <span aria-hidden="true">↗</span></button></article></div><div class="cost-breakdown"><div><h3>Once-off items</h3><p>Site assessment, hardware, configuration, installation and integration work.</p></div><div><h3>Recurring items</h3><p>Connectivity, platform access, hosting and agreed support where applicable.</p></div><div><h3>Quote variables</h3><p>Sites, assets, sensor types, coverage, data retention, integration complexity and service levels.</p></div></div><p class="pricing-note">No fixed price is shown because requirements vary. Quotes itemise scope, assumptions, once-off and recurring costs, and applicable taxes.</p></section>`,
  );
  document
    .querySelector("footer nav")
    .insertAdjacentHTML(
      "beforeend",
      '<a href="#technology">Core technology</a><a href="#specifications">Specifications</a><a href="#apps">Web & mobile</a>',
    );
  document
    .querySelector('select[name="interest"]')
    .insertAdjacentHTML(
      "beforeend",
      "<option>Agriculture IoT</option><option>Healthcare IoT</option>",
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
