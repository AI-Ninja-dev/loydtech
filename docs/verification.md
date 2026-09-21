# Verification - 21 September 2026

- Clean `npm ci` and production `npm run build` succeeded (Vite 7.3.6).
- Browser verification used the production preview at `/loydtech/`.
- Desktop design and mobile design visually inspected.
- No horizontal overflow at 320, 390, 768 and 1440 pixels.
- Internal anchors all resolve to existing IDs.
- Local font and all three displayed image instances loaded.
- Cold-chain tab updates content and enquiry selection.
- Arrow-key tab navigation updates selection and focus.
- Mobile menu opens and closes after selecting a destination.
- Native dialog Escape closes and returns focus to the initiating control.
- Required fields reject an empty enquiry; valid test input downloads an enquiry file and displays accurate status.
- Industry enquiry prefills the selected industry.
- No browser console errors observed.
- Reduced-motion CSS disables entry, reveal and smooth-scroll animation.
- No email was sent and no backend delivery is claimed.

Lighthouse mobile audit on the production preview: performance 94, accessibility 100, best practices 100, SEO 100. The report completed; Chrome cleanup encountered a Windows temporary-file permission error afterward. Responsive 800px image variants were added after this audit.

## App, industry and pricing verification

- Production build and JavaScript syntax checks passed.
- Desktop dropdown opens, ArrowDown focuses its first link, Escape dismisses it.
- Mobile Industries dropdown opens; Agriculture IoT navigates and closes both menus.
- Pricing buttons open the quote dialog with the correct pricing interest and message.
- New images loaded, app gallery visually inspected, agriculture mobile layout visually inspected.
- All internal anchors resolve. No console errors or horizontal overflow at 320, 390, 768, 950, 1024 and 1440 pixels.
