import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Reemplazar example.com por el dominio público definitivo antes del despliegue.
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
});
