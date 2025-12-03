import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Custom Rocket Icon (Updated colors for light theme)
const RocketLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M12 2.5C12 2.5 17.5 7 17.5 13.5C17.5 19 14 21.5 12 21.5C10 21.5 6.5 19 6.5 13.5C6.5 7 12 2.5 12 2.5Z" 
      fill="#10b981" 
      stroke="#7c3aed" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle cx="12" cy="11" r="3" fill="#7c3aed" />
    <path d="M6.5 13.5C4.5 14.5 2.5 18 2.5 21" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 13.5C19.5 14.5 21.5 18 21.5 21" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21.5V23.5" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 21.5V23.5" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 21.5V23.5" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Odoo', href: '#odoo' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Nosotros', href: '#about' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 border border-slate-200 shadow-sm">
              <RocketLogo className="w-7 h-7" />
            </div>
            <span className="font-bold text-xl md:text-2xl tracking-tighter text-slate-900">
              Gaor<span className="text-brand-600">System</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-slate-600 hover:text-brand-600 transition-colors text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-brand-500/20 bg-brand-600 text-white text-sm"
            >
              Hablemos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-brand-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 animate-fade-in-up shadow-xl">
          <div className="px-4 pt-2 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-semibold text-slate-600 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-5 py-4 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 shadow-lg shadow-brand-500/30"
            >
              Iniciar Proyecto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};