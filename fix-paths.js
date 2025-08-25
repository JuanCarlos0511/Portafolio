import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer el archivo HTML generado
const htmlPath = path.join(__dirname, 'dist', 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Corregir las rutas CSS cambiando de absolutas a relativas
htmlContent = htmlContent.replace(/href="\/Portafolio\//g, 'href="./');

// Corregir las rutas de script cambiando de absolutas a relativas
htmlContent = htmlContent.replace(/src="\/Portafolio\//g, 'src="./');

// Guardar el archivo corregido
fs.writeFileSync(htmlPath, htmlContent);

console.log('✅ Rutas corregidas en el archivo HTML');
