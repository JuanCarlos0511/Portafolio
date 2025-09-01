import { useEffect, useState } from 'react';

const SidebarInteractive = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'trayectoria', 'tools', 'certificados'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <style jsx>{`
      .nav-menu li a[data-section="${activeSection}"] {
        color: var(--text-light) !important;
        background: rgba(100, 200, 255, 0.15) !important;
        border-left: 3px solid var(--accent-blue) !important;
        transform: translateX(8px) !important;
      }
      
      .nav-menu li a[data-section="${activeSection}"] .nav-icon {
        transform: scale(1.2) !important;
        filter: drop-shadow(0 0 8px rgba(100, 200, 255, 0.5));
      }
    `}</style>
  );
};

export default SidebarInteractive;
