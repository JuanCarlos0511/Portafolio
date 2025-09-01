import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer el archivo HTML generado
const htmlPath = path.join(__dirname, 'dist', 'index.html');

// Verificar si el archivo existe
if (fs.existsSync(htmlPath)) {
  let htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  // Ya no necesitamos corregir rutas porque no usamos base path
  console.log('✅ No se requieren correcciones de rutas - configuración simplificada');
} else {
  console.log('ℹ️ Archivo dist/index.html no encontrado - probablemente no sea necesario');
}
