# Loydtech — connected operations redesign

An original Next.js redesign of Loydtech Digital Solutions, using Disrupt-X as an information-architecture reference. This branch is for review and does not replace or publish the existing Vite website on main.

## Run and verify

Use Node.js 22 or newer. Run `npm ci`, then `npm run dev -- --port 3002`. Run `npm run lint`, `npm run typecheck` and `npm run build` for checks. The static production export is written to `out/`.

Browser checks: install Google Chrome, run the local server on port 3002, then `npm run test:browser`. Tests cover every page and internal destination, platform preview modes, enquiry prefill/download, mobile keyboard navigation, and overflow at 320, 390, 768 and 1440 pixels.

## Pages

Home, Solutions, Sentinel 365 / Products, Industries / Use Cases, About, Resources, Contact, Privacy and a recovery page. Shared navigation and footer, native modal mobile menu, local fonts, restrained motion and reduced-motion support are included.

## Content and evidence

The existing GitHub source supplies the Loydtech name, Sentinel 365 positioning, solution areas and info@loydtech.co.za contact address. The mailbox has not been tested. No unsupported partner logos, testimonials, performance figures, security certifications or fictional addresses are displayed.

Solution pages describe project-scoping areas. Sentinel 365 interface data is explicitly illustrative; availability and integrations need business confirmation. CareGrid is described as a demo; HomeClinicStore links to its published storefront.

The contact form prepares an email or downloads a text file. It does not submit to a backend, claim delivery or confirm an appointment. No real enquiry was sent during testing.

## Visual assets

The connected-campus hero is AI-generated fictional architecture, not a customer deployment. Its optimised WebP is served locally. `docs/hero-reference.png` records the design reference used for composition. The logo JPG files retrieved from the existing repository have corrupt JPEG headers; they are retained under public/images for provenance but are not displayed. A text wordmark is used pending a valid source logo.

## Deployment

No workflow publishes this review branch. Review before replacing the existing Vite source. The Next.js static export can be hosted independently once approved. A subpath host such as GitHub Pages needs its base path configured before deployment.
