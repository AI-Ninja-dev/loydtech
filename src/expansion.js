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
      <div class="sentinel-preview reveal" data-sentinel-preview>
        <div class="sentinel-preview__bar"><div class="sentinel-preview__tabs" role="tablist" aria-label="Sentinel 365 views"><button type="button" id="sentinel-web-tab" role="tab" aria-controls="sentinel-web-panel" aria-selected="true" tabindex="0" data-sentinel-tab="0">Desktop dashboard</button><button type="button" id="sentinel-mobile-tab" role="tab" aria-controls="sentinel-mobile-panel" aria-selected="false" tabindex="-1" data-sentinel-tab="1">Mobile app</button></div><button type="button" class="sentinel-preview__toggle" data-sentinel-toggle aria-label="Pause automatic preview">Pause preview</button></div>
        <div class="sentinel-preview__stage">
          <figure class="sentinel-panel" id="sentinel-web-panel" role="tabpanel" aria-labelledby="sentinel-web-tab" data-sentinel-panel="0"><a class="sentinel-panel__image" href="${asset("web-app.webp")}" target="_blank" rel="noopener noreferrer" aria-label="Open Sentinel 365 desktop dashboard concept full size">${image("web-app", "Sentinel 365 desktop dashboard concept showing a facility map, temperature trends and asset alerts")}</a><figcaption><span class="sentinel-panel__eyebrow">01 / CENTRAL VIEW</span><h3>Everything in view.</h3><p>A web dashboard concept for locations, sensor trends, alerts and operational events.</p><a class="sentinel-panel__link" href="${asset("web-app.webp")}" target="_blank" rel="noopener noreferrer">View full image <span aria-hidden="true">↗</span></a></figcaption></figure>
          <figure class="sentinel-panel" id="sentinel-mobile-panel" role="tabpanel" aria-labelledby="sentinel-mobile-tab" data-sentinel-panel="1" hidden><a class="sentinel-panel__image" href="${asset("mobile-app.webp")}" target="_blank" rel="noopener noreferrer" aria-label="Open Sentinel 365 mobile app concept full size">${image("mobile-app", "Two phones showing a Sentinel 365 mobile concept with monitoring alerts and a facility map", true)}</a><figcaption><span class="sentinel-panel__eyebrow">02 / MOBILE VIEW</span><h3>Stay in the loop.</h3><p>Focused mobile views for equipment status, conditions, locations and alerts on the move.</p><a class="sentinel-panel__link" href="${asset("mobile-app.webp")}" target="_blank" rel="noopener noreferrer">View full image <span aria-hidden="true">↗</span></a></figcaption></figure>
        </div>
        <div class="sentinel-preview__footer"><span data-sentinel-status>Manual preview</span><span class="sentinel-preview__progress" aria-hidden="true"><span></span></span></div>
      </div><p class="concept-note">Illustrative app concepts with sample data. Final interfaces and availability are confirmed during project scoping.</p>
    </section>`,
  );
  const preview = document.querySelector("[data-sentinel-preview]");
  const previewTabs = [...preview.querySelectorAll("[data-sentinel-tab]")];
  const previewPanels = [...preview.querySelectorAll("[data-sentinel-panel]")];
  const previewToggle = preview.querySelector("[data-sentinel-toggle]");
  const previewStatus = preview.querySelector("[data-sentinel-status]");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  let currentView = 0;
  let inView = false;
  let hovered = false;
  let focused = false;
  let manualPause = false;
  let forcePlay = false;
  let rotation = null;
  let playing = false;

  function showPreview(index) {
    currentView = index;
    previewTabs.forEach((tab, i) => {
      tab.setAttribute("aria-selected", String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      previewPanels[i].hidden = i !== index;
    });
  }

  function updatePreviewRotation() {
    clearInterval(rotation);
    rotation = null;
    playing = inView && !document.hidden && !reducedMotion.matches &&
      !manualPause && (forcePlay || (!hovered && !focused));
    preview.dataset.playing = String(playing);
    previewToggle.hidden = reducedMotion.matches;
    previewToggle.textContent = playing ? "Pause preview" : "Play preview";
    previewToggle.setAttribute("aria-label", playing ? "Pause automatic preview" : "Play automatic preview");
    previewStatus.textContent = reducedMotion.matches ? "Manual preview" : playing ? "Auto preview" : "Preview paused";
    if (playing) rotation = setInterval(() => showPreview((currentView + 1) % previewTabs.length), 7000);
  }

  function selectPreview(index) {
    manualPause = true;
    forcePlay = false;
    showPreview(index);
    updatePreviewRotation();
  }

  previewTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectPreview(index));
    tab.addEventListener("keydown", (event) => {
      const next = event.key === "ArrowRight" ? (index + 1) % previewTabs.length
        : event.key === "ArrowLeft" ? (index - 1 + previewTabs.length) % previewTabs.length
        : event.key === "Home" ? 0 : event.key === "End" ? previewTabs.length - 1 : null;
      if (next === null) return;
      event.preventDefault();
      selectPreview(next);
      previewTabs[next].focus();
    });
  });
  previewToggle.addEventListener("click", () => {
    manualPause = playing;
    forcePlay = !playing;
    updatePreviewRotation();
  });
  preview.addEventListener("mouseenter", () => { hovered = true; updatePreviewRotation(); });
  preview.addEventListener("mouseleave", () => { hovered = false; forcePlay = false; updatePreviewRotation(); });
  preview.addEventListener("focusin", () => { focused = true; updatePreviewRotation(); });
  preview.addEventListener("focusout", (event) => {
    if (!preview.contains(event.relatedTarget)) { focused = false; forcePlay = false; updatePreviewRotation(); }
  });
  document.addEventListener("visibilitychange", updatePreviewRotation);
  reducedMotion.addEventListener("change", updatePreviewRotation);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; updatePreviewRotation(); }, { threshold: .25 }).observe(preview);
  } else { inView = true; updatePreviewRotation(); }
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
