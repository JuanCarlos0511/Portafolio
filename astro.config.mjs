// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://JuanCarlos0511.github.io',
  base: '/Portafolio',
  build: {
    // Asegúrate de que todas las rutas de assets sean consistentes
    assets: 'assets'
  },
  vite: {
    // Configuración de Vite para manejar rutas de assets
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 0,
    }
  }
});
