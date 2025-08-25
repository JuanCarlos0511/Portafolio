# 🚀 Mi Portafolio Web - Astro

Un portafolio web moderno y responsive construido con Astro, inspirado en diseños elegantes con navegación lateral.

## ✨ Características

- **Navegación lateral fija** - Fácil navegación en una sola página
- **Diseño responsive** - Se adapta a dispositivos móviles y desktop
- **Arquitectura modular** - Componentes organizados y reutilizables
- **Estilos personalizados** - Colores y gradientes modernos
- **Optimizado** - Renderizado estático para máximo rendimiento

## 🎨 Paleta de Colores

- **Primary Dark**: `#1a1a2e`
- **Secondary Dark**: `#16213e`
- **Accent Blue**: `#0f3460`
- **Light Blue/Pink**: `#e94560`
- **Text Light**: `#ffffff`
- **Text Muted**: `#b8bcc8`

## 📁 Estructura del Proyecto

```text
/
├── public/
│   ├── favicon.svg
│   └── hero-person.jpg
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Sidebar.astro
│   │   └── WhyMe.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

## 🧞 Comandos

Ejecuta los comandos desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                        |
| `npm run dev`             | Inicia el servidor local en `localhost:4321`    |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Previsualiza la build localmente                |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                   |

## 🎯 Secciones del Portafolio

1. **Hero** - Presentación principal con imagen y CTA
2. **Why Me?** - Características y fortalezas
3. **Proyectos** - Muestra de trabajos realizados
4. **Skills** - Tecnologías y herramientas
5. **Contacto** - Información de contacto y redes sociales

## 📱 Responsive Design

- **Desktop**: Navegación lateral fija (280px)
- **Tablet**: Navegación lateral reducida (250px)
- **Mobile**: Menú hamburguesa con overlay completo

## 🛠️ Personalización

### Cambiar colores
Edita las variables CSS en `src/styles/global.css`:

```css
:root {
  --primary-dark: #1a1a2e;
  --secondary-dark: #16213e;
  --accent-blue: #0f3460;
  --light-blue: #e94560;
  /* ... más variables */
}
```

### Agregar nuevos componentes
Crea archivos `.astro` en `src/components/` y importa en `index.astro`.

### Modificar contenido
Edita directamente en `src/pages/index.astro` para cambiar textos, proyectos, skills, etc.

## 🚀 Despliegue

Este proyecto está optimizado para despliegue en:

- **Vercel** - `npm run build`
- **Netlify** - `npm run build`
- **GitHub Pages** - Con GitHub Actions
- **Cualquier hosting estático**

## 💡 Próximas mejoras

- [ ] Animaciones con Framer Motion
- [ ] Modo oscuro/claro
- [ ] Blog integrado
- [ ] Formulario de contacto funcional
- [ ] Optimización de imágenes
- [ ] PWA capabilities

## 📧 Contacto

¿Preguntas o sugerencias? ¡Contacta conmigo!

---

Construido con ❤️ usando [Astro](https://astro.build)
