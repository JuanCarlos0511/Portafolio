import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Asegura que los assets usen rutas relativas
    assetsDir: '_assets',
    // Usar rutas relativas en lugar de absolutas
    cssCodeSplit: true,
    // Configuración de base para las rutas
    base: './',
  }
});
