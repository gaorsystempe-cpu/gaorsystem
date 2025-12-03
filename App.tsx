import React, { useEffect, useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Services } from './components/Services';
import { OdooSection } from './components/OdooSection';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';

// Custom Cursor Component
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className={`custom-cursor ${isHovered ? 'hovered' : ''}`} 
    />
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-secondary bg-slate-50 text-slate-900 overflow-x-hidden relative">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        {/* Pasión Digital */}
        <About />
        {/* Mis Superpoderes */}
        <Services />
        {/* Especialidad Principal - Odoo */}
        <OdooSection />
        {/* Casos de Éxito */}
        <Portfolio />
        {/* Contacto */}
        <Contact />
      </main>
      <ChatWidget />
    </div>
  );
};

export default App;