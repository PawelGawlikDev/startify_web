// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://PawelGawlikDev.github.io/startify_web",
  base: "startify_web",
  integrations: [tailwind(), react(), icon()]
});