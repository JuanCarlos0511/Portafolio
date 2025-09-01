// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://JuanCarlos0511.github.io',
  trailingSlash: 'always',
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      cssCodeSplit: false, // Esto puede ayudar a reducir los problemas de rutas
      assetsInlineLimit: 0,
      manifest: true,
    },
    ssr: {
      noExternal: ['*'],
    },
    server: {
      origin: 'http://localhost:4321', // Solo para desarrollo
    },
  }
});
