import { defineConfig } from 'vite';

export default defineConfig({
  // Para despliegue en GitHub Pages con el base path /Portafolio/
  base: '',
  build: {
    // Coloca todos los assets en la carpeta 'assets'
    assetsDir: 'assets'
  }
});
