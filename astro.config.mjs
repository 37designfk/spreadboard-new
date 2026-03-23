// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://37designfk.github.io',
  base: '/spreadboard-new',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
