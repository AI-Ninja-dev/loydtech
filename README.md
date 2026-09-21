# Loydtech Digital Solutions

Vite website for Sentinel 365, RTLS, remote monitoring, cold chain, smart facilities and connected operations.

## Development

Use Node.js 22 or newer. Run `npm ci`, then `npm run dev`. Run `npm run build` for the production bundle and `npm run preview` to inspect it under `/loydtech/`.

## Deployment

Pushes to `main` run the GitHub Pages workflow. Dependencies are pinned in `package-lock.json` and installed with `npm ci`. The Vite base path is `/loydtech/`.

Live site: https://ai-ninja-dev.github.io/loydtech/

## Design and behaviour

The 2026 redesign follows Disrupt-X's dark enterprise visual direction with original Loydtech content and imagery. See `docs/design.md` for reference notes and asset provenance.

The six solution tabs support arrow keys, Home and End. Industry and solution actions prefill an accessible enquiry dialog. Enquiries prepare an email draft or download a text file; the site has no form-submission backend. No real enquiry was sent during testing.

All fonts and artwork are hosted locally. Geist is distributed under the SIL Open Font License included in `public/fonts/OFL.txt`. Building imagery is conceptual rather than a customer photograph.
