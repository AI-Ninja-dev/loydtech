# Loydtech Website

Modern website for Loydtech — connected operations, RTLS, remote monitoring, IoT analytics and Sentinel 365.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The first release is intentionally lightweight and framework-minimal, using Vite with vanilla JavaScript and CSS for fast deployment and easy future migration into a larger application stack.

## Current integrated build

This repository's `main` branch contains the consolidated Loydtech website implementation, including the premium black/white/signal-green visual system, responsive navigation and interactions, Sentinel 365 presentation, RTLS and remote-monitoring solutions, industry sections, security and technology ecosystem content, company/about content, contact experience, Loydtech brand assets, Vite production configuration, and GitHub Pages deployment workflow.

Production verification: `npm run build` completes successfully in GitHub Actions and generates the `dist` bundle. GitHub Pages publishing is handled separately by the repository Pages configuration and deployment workflow.

Last consolidated recommit: 2026-09-18.
