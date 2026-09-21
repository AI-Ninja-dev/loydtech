# Loydtech reference-led redesign

Reference: https://disrupt-x.io/ (reviewed 21 September 2026).

Redesign for business buyers: dark enterprise platform storytelling, centered headline, restrained cyan/green/blue/violet accents, rounded action buttons, visual solution sections. Retains Loydtech wordmark and diamond mark, content areas, navigation labels, mail destination and existing section anchors. No Disrupt-X copy, marks, proprietary product interfaces or customer claims are reused.

Design variance 4 / motion intensity 4 / visual density 4. The explicit Disrupt-X reference takes precedence over generic skill defaults against centered heroes, dark-only pages, background grids or multicolour headline accents. Existing Vite and vanilla CSS stack preserved. Reveal motion respects reduced-motion preferences; no perpetual motion.

Previous design: black/green, missing web fonts, simulated dashboard panels, mobile navigation absent. New design: self-hosted Geist, original visual assets, keyboard-accessible solution tabs, mobile menu, native enquiry and privacy dialogs. Radius system: pill buttons, 18px visual panels, 8px form controls.

## Assets

- `public/images/intelligent-campus.webp`: original built-in image_gen asset, optimized to WebP. Prompt: Create an original premium 3D architectural visualization for Loydtech, an enterprise IoT website. No text, letters, logos, interface or labels. Wide landscape 1536x1024. Isometric cutaway of a contemporary intelligent commercial building campus, three sculptural glass and charcoal towers connected by a low podium, landscaped small trees, laboratory wing and loading bay. Dark charcoal seamless ground, fine cyan and emerald light paths, tiny warm interior lights, smoked glass, controlled studio lighting. Centered complete model with negative space. No sci-fi or floating dashboards.
- `public/images/connected-campus.webp`: existing AI-generated concept from the prior Loydtech review branch, reused as supporting illustration.
- Building images are conceptual, not claimed customer deployments.
- Geist Latin WOFF2 sourced from the existing project's bundled Next.js font assets.

## Enquiries

The form validates locally and prepares a mailto draft, with a text-file download fallback. It does not send mail, store form data remotely or claim a completed booking. No analytics or third-party embeds are added.
