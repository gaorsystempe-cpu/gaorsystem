import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Services } from './components/Services';
import { OdooSection } from './components/OdooSection';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-secondary bg-slate-50 text-slate-900 overflow-x-hidden">
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