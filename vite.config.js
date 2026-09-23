import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const sectors = ['healthcare', 'logistics', 'buildings', 'pharmaceutical', 'retail', 'agriculture'];

export default defineConfig({
  base: '/loydtech/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        ...Object.fromEntries(sectors.map((slug) => [slug, resolve(import.meta.dirname, `industries/${slug}/index.html`)])),
      },
    },
  },
});
