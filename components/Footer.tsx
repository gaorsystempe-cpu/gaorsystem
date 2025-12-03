import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

// Custom Rocket Icon (Mini Version - Updated for dark footer)
const RocketLogoMini = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2.5C12 2.5 17.5 7 17.5 13.5C17.5 19 14 21.5 12 21.5C10 21.5 6.5 19 6.5 13.5C6.5 7 12 2.5 12 2.5Z" fill="#10b981" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-800 border border-slate-700">
                 <RocketLogoMini className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl">Gaor<span className="text-brand-400">System</span></span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6">
              Implementamos Odoo, creamos automatizaciones con n8n y desarrollamos landing pages que inspiran confianza.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all border border-slate-700">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Servicios</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Implementación Odoo</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Automatizaciones</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Asistente Virtual</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Desarrollo Web</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Enlaces</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-brand-400 transition-colors">Nosotros</a></li>
              <li><a href="#portfolio" className="hover:text-brand-400 transition-colors">Portafolio</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} GaorSystem Perú. Hecho con 💜 y código.</p>
        </div>
      </div>
    </footer>
  );
};