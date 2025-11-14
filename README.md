# Práctica 1: Introducción a Astro y estructura base de un proyecto

**Alumno:** Juan Carlos  
**Carrera:** Ingeniería en Sistemas Computacionales  
**Materia:** Programación Web  
**Fecha:** Octubre 2025

---

## 📋 Descripción de la práctica

En esta práctica desarrollé mi primer proyecto utilizando **Astro**, un framework moderno para el desarrollo de sitios web front end. El objetivo principal fue crear un portafolio web personal que me permita presentarme como estudiante y futuro desarrollador, aplicando los conceptos fundamentales de Astro.

### ¿Qué hice?

Desarrollé un **portafolio web profesional y responsive** que incluye:

- ✅ **Página de presentación personal** con nombre completo, carrera y fotografía
- ✅ **Sección "¿Por qué yo?"** con mis fortalezas y habilidades destacadas
- ✅ **Portafolio de proyectos** mostrando trabajos realizados con descripción y tecnologías utilizadas
- ✅ **Sección de lenguajes** con dominio de español e inglés
- ✅ **Navegación lateral fija** que permite moverse fácilmente entre secciones
- ✅ **Diseño totalmente responsive** que se adapta a dispositivos móviles, tablets y desktop
- ✅ **Estilos globales personalizados** con una paleta de colores moderna y profesional
- ✅ **Componentes modulares** organizados de forma clara (Hero, Sidebar, WhyMe)
- ✅ **Layout principal** que estructura todas las páginas del sitio

El sitio web incluye información sobre mis intereses en programación, los lenguajes que domino, proyectos realizados y enlaces a mis redes sociales (GitHub, LinkedIn).

---

## 🎯 ¿Qué aprendí durante el proceso?

### 1. **Estructura de un proyecto Astro**
Comprendí cómo se organiza un proyecto en Astro y el propósito de cada carpeta:
- **`pages/`**: Donde se crean las páginas del sitio (cada archivo `.astro` se convierte en una ruta)
- **`layouts/`**: Estructura común que se repite en todas las páginas (encabezado, pie de página)
- **`components/`**: Piezas reutilizables del sitio (tarjetas, botones, secciones)
- **`public/`**: Archivos estáticos como imágenes, iconos y recursos
- **`styles/`**: Estilos CSS globales que afectan a todo el sitio

### 2. **Ventajas de Astro sobre otros frameworks**
- **Renderizado estático**: Las páginas se generan en el servidor y se envían listas al navegador, lo que las hace extremadamente rápidas
- **Cero JavaScript por defecto**: Solo se envía JavaScript cuando es realmente necesario, reduciendo el peso de la página
- **Component Islands**: Permite combinar componentes de diferentes frameworks (React, Vue, etc.) si se necesita
- **Optimización automática**: Astro optimiza imágenes, CSS y JavaScript sin configuración adicional

### 3. **Uso de Layouts en Astro**
Aprendí a crear un **layout base** (`Layout.astro`) que define la estructura HTML común (head, body, metadatos) y permite reutilizarla en todas las páginas mediante el uso de `<slot />`. Esto evita duplicar código y facilita el mantenimiento.

### 4. **Componentización y modularidad**
Separé mi sitio en componentes independientes:
- **`Hero.astro`**: Sección principal con presentación, foto y botones de contacto
- **`Sidebar.astro`**: Navegación lateral con enlaces a las diferentes secciones
- **`WhyMe.astro`**: Sección con características destacadas y lenguajes

Esta separación hace el código más legible, mantenible y reutilizable.

### 5. **CSS Global y Variables CSS**
Implementé un sistema de estilos globales (`global.css`) utilizando **CSS Custom Properties (variables)** para mantener consistencia en colores, tipografía y espaciado:
```css
:root {
  --primary-dark: #1a1a2e;
  --secondary-dark: #16213e;
  --accent-blue: #0f3460;
  --light-blue: #e94560;
}
```
Esto facilita cambiar el tema completo del sitio modificando solo las variables.

### 6. **Diseño Responsive con Media Queries**
Aprendí a crear un diseño que se adapta a diferentes tamaños de pantalla:
- **Desktop**: Navegación lateral fija de 280px
- **Tablet**: Navegación reducida de 250px
- **Mobile**: Menú hamburguesa con overlay completo

### 7. **Sintaxis de Astro**
Comprendí la estructura de un archivo `.astro`:
```astro
---
// Código JavaScript/TypeScript (frontmatter)
const nombre = "Juan Carlos";
---
<!-- HTML con interpolación de variables -->
<h1>{nombre}</h1>
<style>
  /* CSS con scope local */
  h1 { color: white; }
</style>
```

### 8. **Deployment y configuración**
Configuré el proyecto para deployment en producción:
- Creé archivo `.nvmrc` para especificar la versión de Node.js (18.20.8)
- Agregué `engines` en `package.json` para garantizar compatibilidad
- Configuré `nixpacks.toml` para deployment en Dokploy con puerto 80
- Implementé script `fix-paths.js` para corregir rutas en producción

### 9. **Buenas prácticas de desarrollo**
- Uso de **Git** para control de versiones
- Commits descriptivos y organizados
- Estructura de carpetas clara y escalable
- Código limpio y bien comentado
- Separación de responsabilidades (HTML, CSS, JS)

---

## 🎨 Paleta de Colores Utilizada

- **Primary Dark**: `#1a1a2e` - Fondo principal oscuro
- **Secondary Dark**: `#16213e` - Fondo secundario para contraste
- **Accent Blue**: `#0f3460` - Color de acento para elementos destacados
- **Light Blue/Pink**: `#e94560` - Color vibrante para botones y enlaces
- **Text Light**: `#ffffff` - Texto principal claro
- **Text Muted**: `#b8bcc8` - Texto secundario atenuado

## 📁 Estructura del Proyecto

```text
/
├── public/
│   ├── favicon.svg          # Icono del sitio
│   ├── hero-person.jpg      # Foto de presentación
│   └── 404.html             # Página de error 404
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Hero.astro       # Sección principal con presentación
│   │   ├── Sidebar.astro    # Navegación lateral fija
│   │   └── WhyMe.astro      # Sección "¿Por qué yo?"
│   ├── layouts/
│   │   └── Layout.astro     # Layout base del sitio
│   ├── pages/
│   │   └── index.astro      # Página principal (home)
│   └── styles/
│       └── global.css       # Estilos globales del sitio
├── .nvmrc                   # Versión de Node.js requerida
├── astro.config.mjs         # Configuración de Astro
├── fix-paths.js             # Script para corregir rutas
├── nixpacks.toml            # Configuración de deployment
├── package.json             # Dependencias del proyecto
└── README.md                # Este archivo
```

---

## 🧞 Comandos Disponibles

Ejecuta los comandos desde la raíz del proyecto usando tu terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala todas las dependencias del proyecto     |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Previsualiza la build de producción localmente  |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro directamente     |
| `npm run fix-paths`       | Corrige las rutas de los archivos en producción |

---

## 🖼️ Captura de Pantalla del Proyecto

![Portafolio Web - Vista Desktop](public/screenshot-desktop.png)
*Vista desktop del portafolio con navegación lateral*

![Portafolio Web - Vista Mobile](public/screenshot-mobile.png)
*Vista mobile con diseño responsive*

---

## 🚀 Cómo Ejecutar el Proyecto

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/JuanCarlos0511/Portafolio.git
   cd Portafolio/Astro
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   - Ve a `http://localhost:4321`
   - El sitio se recargará automáticamente al hacer cambios

---

## 📦 Tecnologías y Herramientas Utilizadas

- **[Astro 5.13.3](https://astro.build)** - Framework principal
- **[React 19.1.1](https://react.dev)** - Para componentes interactivos (opcional)
- **Node.js 18.20.8** - Entorno de ejecución
- **CSS3** - Estilos y diseño responsive
- **Git & GitHub** - Control de versiones
- **Dokploy** - Plataforma de deployment
- **Nixpacks** - Sistema de build y deployment

---

## 🎓 Reflexiones y Conclusiones

Esta práctica me permitió comprender la filosofía de Astro y sus ventajas sobre otros frameworks. El enfoque en **generar sitios estáticos rápidos** y **enviar menos JavaScript al navegador** resulta ideal para portafolios, blogs y sitios de contenido.

La **componentización** me ayudó a organizar mejor mi código y a pensar en términos de piezas reutilizables. El uso de **layouts** evitó duplicación y facilitó mantener una estructura consistente.

Aprendí que un buen desarrollo web no solo se trata de escribir código, sino de **planificar la estructura**, **organizar los archivos** y **documentar el proceso** para que otros (o yo mismo en el futuro) puedan entender y modificar el proyecto fácilmente.

El diseño responsive fue un reto interesante que me enseñó la importancia de pensar en **mobile first** y usar **media queries** de forma estratégica.

---

## 🔜 Mejoras Futuras

- [ ] Agregar animaciones con Framer Motion o AOS
- [ ] Implementar modo oscuro/claro con toggle
- [ ] Crear sección de blog integrada
- [ ] Agregar formulario de contacto funcional
- [ ] Optimizar imágenes con Astro Image
- [ ] Implementar PWA (Progressive Web App)
- [ ] Agregar internacionalización (i18n)
- [ ] Integrar analytics con Google Analytics

---

## 💭 Preguntas de Reflexión

### 1. ¿Qué diferencia encuentras entre crear un sitio en Astro y hacerlo con HTML tradicional?

Con Astro, creas componentes reutilizables (como un `<nav>`) una sola vez. Con HTML, debes copiar y pegar ese `<nav>` manualmente en cada página.

### 2. ¿Qué beneficios tiene trabajar con un layout en lugar de repetir el mismo código en cada página?

Un layout te permite definir la estructura común (header/footer) en un solo archivo. Si cambias el layout, todas las páginas se actualizan automáticamente.

### 3. ¿Qué ventajas crees que ofrece Astro para proyectos educativos o personales?

Astro es excelente para esos proyectos porque crea sitios web muy rápidos (casi puro HTML) y es muy fácil de aprender, ya que se parece mucho a HTML.

---

## 📚 Referencias y Recursos

- [Documentación oficial de Astro](https://docs.astro.build)
- [Astro Tutorial](https://docs.astro.build/en/tutorial/0-introduction/)
- [Astro Components](https://docs.astro.build/en/core-concepts/astro-components/)
- [Guía de Deployment](https://docs.astro.build/en/guides/deploy/)

---

## 📧 Contacto

**Alumno:** Juan Carlos  
**GitHub:** [@JuanCarlos0511](https://github.com/JuanCarlos0511)
---

**Fecha de entrega:** Octubre 2025  


---

