import './styles.css';
import './redesign.css';
import './industry.css';

const root = import.meta.env.BASE_URL;
const sectors = {
  healthcare: {
    name: 'Healthcare & laboratories', label: 'CRITICAL ENVIRONMENTS', image: 'healthcare-sensors.webp', alt: 'Medical equipment and connected sensor concept',
    lead: 'Find the equipment your team needs and keep important conditions visible across wards, laboratories and support spaces.',
    challenge: 'Mobile equipment moves between rooms. Refrigeration, incubators and room conditions generate data in separate places. A useful view connects locations, readings and the people responsible for responding.',
    scenarios: [
      ['Equipment location', 'Tag selected pumps, wheelchairs or service equipment and show a last known zone on a site map. Use movement history to investigate transfers and availability.'],
      ['Environmental oversight', 'Bring temperature, humidity and equipment status from suitable sensors into trends and threshold alerts for labs and storage areas.'],
      ['Service response', 'Route an alert or missing-asset event to the relevant team, with a record of the condition, location and follow-up.'],
    ],
    rtls: 'Tag mobile equipment and define rooms, corridors or departments as meaningful location zones; confirm coverage and location accuracy on site.',
    sensing: 'Connect compatible temperature, humidity, power and equipment-state sensors, with thresholds matched to each environment.',
    analytics: 'Explore repeated excursions, asset movement and availability patterns for human review; avoid treating analytics as a clinical decision tool.',
    integration: 'Scope connections to asset registers, maintenance workflows and approved notification channels without exposing patient data.',
    platform: 'A ward or laboratory map, equipment list, sensor trends and incident timeline in Sentinel 365; mobile views can show assigned alerts and last known asset zones.',
    services: ['Walk through priority wards, labs and equipment classes', 'Pilot tags, gateways and sensors with validated coverage', 'Configure dashboards, thresholds and response ownership', 'Integrate approved service workflows and train users'],
    security: 'Define device inventory, network separation, role-based access and audit events with the hospital IT team. Keep patient-identifying information out of the initial tracking scope unless separately approved.',
  },
  logistics: {
    name: 'Logistics & cold chain', label: 'GOODS IN MOTION', image: 'logistics-sensors.webp', alt: 'Cold chain warehouse with connected sensor concept',
    lead: 'Track movable assets and monitor temperature-sensitive handling from storage through dispatch and handover.',
    challenge: 'A shipment can change custody and environment several times. Teams need a clear history of conditions, locations and exceptions to investigate issues quickly.',
    scenarios: [
      ['Cold-room visibility', 'Monitor selected fridges, freezers, cold rooms and loading areas with sensor trends and site-specific excursion thresholds.'],
      ['Asset and zone tracking', 'See tagged pallets, containers or reusable equipment at defined warehouse zones, with arrival and departure events.'],
      ['Exception handling', 'Notify the right person when a sensor reading breaches a threshold or an asset leaves an agreed zone; retain context for review.'],
    ],
    rtls: 'Use tags and gateways for indoor zones or suitable outdoor tracking options where connectivity and site conditions permit.',
    sensing: 'Connect calibrated or appropriate temperature and humidity sensors at agreed points; specify sampling, offline behavior and retention.',
    analytics: 'Compare recurring excursions, dwell time and handover patterns to identify operational questions worth investigating.',
    integration: 'Scope event exchange with warehouse, transport or quality systems using approved interfaces and ownership rules.',
    platform: 'Sentinel 365 can combine storage-zone maps, live and historical conditions, asset events and an exception queue; mobile views support on-site acknowledgement.',
    services: ['Map the storage-to-dispatch journey and critical control points', 'Test sensor placement, gateway coverage and connectivity', 'Set thresholds and escalation paths for each location', 'Connect selected operational systems and train responders'],
    security: 'Control access by site and role, protect device credentials and record alert acknowledgements. Agree data retention and incident responsibilities before rollout.',
  },
  buildings: {
    name: 'Buildings & facilities', label: 'CONNECTED SPACES', image: 'building-sensors.webp', alt: 'Connected building and environmental sensor concept',
    lead: 'Bring room conditions, utilities and equipment status into one operational picture for facilities teams.',
    challenge: 'Building data often sits across meters, controllers and service teams. Connecting the relevant points makes it easier to notice changes, assign work and compare sites.',
    scenarios: [
      ['Space conditions', 'Watch temperature, humidity, occupancy-related signals and selected indoor environmental data where appropriate.'],
      ['Equipment oversight', 'Surface status and fault events for suitable HVAC, pumps or other building equipment with a clear service handoff.'],
      ['Multi-site comparison', 'Compare selected utilities and recurring alerts across floors or properties without losing site context.'],
    ],
    rtls: 'Track selected movable maintenance assets or define presence and zone events only where they solve a specific facilities need.',
    sensing: 'Use compatible environmental, power and equipment-state inputs; agree sampling and alert priorities by room and system.',
    analytics: 'Review energy and environmental trends for unusual changes and recurring faults, with maintenance staff validating conclusions.',
    integration: 'Connect approved BMS, ticketing or meter data through a scoped interface; respect existing control-system boundaries.',
    platform: 'A building and floor view in Sentinel 365 can show sensor conditions, equipment status and open events; mobile views help technicians respond on site.',
    services: ['Survey priority rooms, plant and existing systems', 'Define connectivity and data points with facilities and IT', 'Pilot dashboards and alerts on a small set of assets', 'Integrate service workflows and plan staged expansion'],
    security: 'Keep monitoring connections separate from control networks where required, use least-privilege accounts and log data access and key events.',
  },
  pharmaceutical: {
    name: 'Pharmaceutical', label: 'CONTROLLED CONDITIONS', image: 'pharma-sensors.webp', alt: 'Pharmaceutical laboratory monitoring sensor concept',
    lead: 'Make selected environmental and storage conditions easier to observe, investigate and escalate.',
    challenge: 'Controlled spaces need dependable records and clear response ownership. A monitoring design must respect validated processes, sensor suitability and existing quality systems.',
    scenarios: [
      ['Storage conditions', 'Monitor agreed temperatures and humidity for refrigerators, rooms and storage areas with traceable event history.'],
      ['Excursion review', 'Bring threshold events, acknowledgement and follow-up context into one operational timeline for investigation.'],
      ['Equipment location', 'Locate tagged movable instruments or containers within defined zones where this supports an approved workflow.'],
    ],
    rtls: 'Define restricted-area and room-level tracking needs, then test tag suitability, coverage and zone behavior in the facility.',
    sensing: 'Scope sensor accuracy, calibration responsibility, sampling, retention and alarm behavior against the customer’s quality requirements.',
    analytics: 'Summarize trends and recurring environmental changes for review by responsible personnel; any regulated use requires separate validation.',
    integration: 'Plan interfaces with approved quality, maintenance or inventory systems under documented change control.',
    platform: 'Sentinel 365 can show condition trends, tagged equipment and an excursion queue; mobile views can notify assigned staff and record acknowledgements.',
    services: ['Document the rooms, conditions and quality workflow', 'Pilot appropriate sensors and network coverage', 'Configure alert routing, records and access roles', 'Support customer-led qualification and integration scope'],
    security: 'Apply controlled roles, audit logging, time synchronization and defined retention. Validation and regulatory suitability must be established in the project specification.',
  },
  retail: {
    name: 'Retail, energy & infrastructure', label: 'DISTRIBUTED OPERATIONS', image: 'retail-energy-sensors.webp', alt: 'Retail building with connected energy sensor concept',
    lead: 'Connect the signals that matter across stores, equipment, utilities and distributed locations.',
    challenge: 'Many sites create fragmented visibility. Facilities, operations and security teams need relevant exceptions and trends without checking every system independently.',
    scenarios: [
      ['Energy visibility', 'Compare meter or equipment consumption across sites and flag unusual changes for investigation.'],
      ['Store conditions', 'Track temperature, humidity or refrigeration status in selected rooms and storage points.'],
      ['Distributed assets', 'Locate tagged equipment and surface movement or availability events where an RTLS pilot makes sense.'],
    ],
    rtls: 'Define the assets and zones worth tracking, then confirm how tags and gateways work across different store layouts.',
    sensing: 'Connect suitable energy, environmental and equipment sensors with per-site thresholds and availability checks.',
    analytics: 'Compare usage profiles, repeated equipment alerts and outlier sites while keeping context for human interpretation.',
    integration: 'Scope links to service desks, energy dashboards or operational tools without assuming access to every legacy system.',
    platform: 'Sentinel 365 can offer portfolio and site views, consumption trends, asset locations and a prioritised event list; mobile views serve on-site teams.',
    services: ['Select pilot stores and high-value measurements', 'Assess meters, sensors, network and data access', 'Configure comparison dashboards and escalation routes', 'Roll out by site type with support and ownership defined'],
    security: 'Segment device traffic and limit cross-site access. Protect credentials, maintain inventory and agree alert ownership with operations and security teams.',
  },
  agriculture: {
    name: 'Agriculture IoT', label: 'FIELD CONDITIONS', image: 'agriculture-sensors.webp', alt: 'Agricultural field and connected sensor concept',
    lead: 'See field conditions, water use and the location of selected assets across a changing outdoor environment.',
    challenge: 'Fields are spread out and connectivity varies. The right deployment starts with the decisions a grower needs to make, then selects sensors, coverage and alert timing accordingly.',
    scenarios: [
      ['Soil and weather', 'Monitor soil moisture and selected environmental readings to support field observations and irrigation planning.'],
      ['Water and infrastructure', 'Watch tank levels, pump state or irrigation equipment and raise alerts for agreed events.'],
      ['Outdoor tracking', 'Track selected equipment or livestock where appropriate and define geofences for useful boundary notifications.'],
    ],
    rtls: 'Choose outdoor location approaches for the coverage, power and location frequency required; test boundary behavior in the field.',
    sensing: 'Select weather, soil, water and equipment sensors suited to placement, maintenance and connectivity realities.',
    analytics: 'Explore trends across seasons and zones to support decisions; compare sensor readings with on-the-ground observations.',
    integration: 'Connect selected irrigation, farm-management or notification workflows through available, approved interfaces.',
    platform: 'Sentinel 365 can show field maps, sensor trends and geofence events; mobile views provide concise status and alerts while teams are away from a desk.',
    services: ['Identify priority fields, assets and decisions', 'Survey connectivity, power and installation sites', 'Pilot sensors, geofences and dashboard views', 'Set maintenance, data and alert responsibilities'],
    security: 'Inventory field devices and gateways, manage credentials and updates, and limit access to farm maps and operational data by role.',
  },
};

const slug = document.body.dataset.industry;
const sector = sectors[slug];
const esc = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
if (sector) {
  const related = Object.entries(sectors).filter(([key]) => key !== slug).slice(0, 3);
  document.querySelector('#app').innerHTML = `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="sector-header"><div class="sector-shell sector-nav"><a href="${root}" aria-label="Loydtech home"><img src="${root}images/loydtech-logo-white-no-tagline.png" alt="Loydtech" width="166" height="62"></a><nav aria-label="Main navigation"><a href="${root}#industries">Industries</a><a href="${root}#technology">Technology</a><a href="${root}#apps">Sentinel 365</a><a class="sector-nav-cta" href="${root}#contact">Discuss a project ↗</a></nav></div></header>
    <main id="main"><section class="sector-hero"><div class="sector-shell"><div class="sector-breadcrumb"><a href="${root}#industries">Industries</a><span aria-hidden="true">/</span><span>${esc(sector.name)}</span></div><div class="sector-hero-grid"><div><p class="sector-kicker">${sector.label} / LOYDTECH</p><h1>${esc(sector.name)}<span class="sector-period">.</span></h1><p class="sector-lead">${esc(sector.lead)}</p><div class="sector-actions"><a class="sector-button" href="${root}#contact">Discuss your use case <span aria-hidden="true">↗</span></a><a class="sector-text-link" href="#use-cases">Explore use cases ↓</a></div></div><figure class="sector-visual"><img src="${root}images/${sector.image}" alt="${esc(sector.alt)}" width="1536" height="1024"><figcaption>${sector.label} · CONNECTED SENSING</figcaption></figure></div></div></section>
    <section class="sector-section sector-shell sector-intro"><p class="sector-kicker">THE OPERATIONAL CHALLENGE</p><h2>Useful data starts with a clear use case.</h2><p>${esc(sector.challenge)}</p></section>
    <section class="sector-section sector-band" id="use-cases"><div class="sector-shell"><p class="sector-kicker">WHERE IT APPLIES</p><h2>Practical use cases.</h2><div class="sector-card-grid">${sector.scenarios.map(([title, detail], i) => `<article class="sector-card"><span class="sector-index">0${i + 1}</span><h3>${esc(title)}</h3><p>${esc(detail)}</p></article>`).join('')}</div></div></section>
    <section class="sector-section sector-shell" id="technology"><div class="sector-section-head"><div><p class="sector-kicker">THE TECHNOLOGY</p><h2>One connected stack.<br>Applied to this environment.</h2></div><p>We scope each layer to the site, hardware, data and decisions involved.</p></div><div class="sector-tech-list">${[['RTLS & location', sector.rtls], ['Remote monitoring', sector.sensing], ['AI analytics', sector.analytics], ['Systems integration', sector.integration]].map(([title, detail], i) => `<article><span>0${i + 1}</span><h3>${esc(title)}</h3><p>${esc(detail)}</p></article>`).join('')}</div></section>
    <section class="sector-section sector-platform"><div class="sector-shell sector-platform-grid"><div><p class="sector-kicker">SENTINEL 365 / WEB + MOBILE</p><h2>From devices to decisions.</h2><p>${esc(sector.platform)}</p><a class="sector-text-link" href="${root}#apps">See the platform concept ↗</a></div><div class="sector-flow" aria-label="Technology workflow"><span>Sensors & tags</span><span>Secure connections</span><span>Sentinel 365</span><span>Web & mobile action</span></div></div></section>
    <section class="sector-section sector-shell sector-delivery"><div><p class="sector-kicker">LOYDTECH SERVICES</p><h2>How we take this into the field.</h2><ol>${sector.services.map((item) => `<li>${esc(item)}</li>`).join('')}</ol></div><aside><p class="sector-kicker">CYBERSECURITY THROUGHOUT</p><h3>Connected, with boundaries.</h3><p>${esc(sector.security)}</p><a href="${root}#security">Explore our security approach ↗</a></aside></section>
    <section class="sector-section sector-related sector-shell"><p class="sector-kicker">EXPLORE MORE</p><h2>Other environments.</h2><div>${related.map(([key, item]) => `<a href="${root}industries/${key}/">${esc(item.name)} <span aria-hidden="true">↗</span></a>`).join('')}</div></section>
    <section class="sector-final"><div class="sector-shell"><p class="sector-kicker">PLAN A PILOT</p><h2>What needs to be visible at your site?</h2><p>Tell us about the assets, conditions and systems involved. We can scope a practical starting point.</p><a class="sector-button" href="mailto:info@loydtech.co.za?subject=${encodeURIComponent(`Loydtech ${sector.name} enquiry`)}">Email Loydtech ↗</a><a class="sector-text-link" href="${root}#contact">See contact options →</a></div></section></main>
    <footer class="sector-footer"><div class="sector-shell"><a href="${root}">Loydtech Digital Solutions</a><span>© ${new Date().getFullYear()} Loydtech · South Africa</span><a href="${root}#industries">All industries ↑</a></div></footer>`;
}
