// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mohammedbie.github.io',
  base: '/rasol-alkhair',
  vite: {
    plugins: [tailwindcss()]
  }
});
