// @ts-check
import { defineConfig } from 'astro/config';

// Deployment auf GitHub Pages:
//   https://waltermelcher.github.io/Landesblasorchester-GlowUp/
export default defineConfig({
  site: 'https://waltermelcher.github.io',
  base: '/Landesblasorchester-GlowUp',
  trailingSlash: 'ignore',
});
