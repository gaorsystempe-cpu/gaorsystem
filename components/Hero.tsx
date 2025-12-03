import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden min-h-screen flex items-center bg-slate-50">
      {/* Background Gradients (Pastel/Light Mode) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-accent/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-pink-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-slate-600 text-sm font-bold tracking-wide uppercase">GaorSystem Workspace</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight max-w-5xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Implementamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Odoo</span>, creamos automatizaciones con <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">n8n</span> y desarrollamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-dark to-accent">landing pages</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl font-secondary leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
            que no solo funcionan, sino que inspiran confianza.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="https://wa.me/51975615244" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-slate-900 text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20 overflow-hidden flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              <span>Hablemos por WhatsApp</span>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-semibold rounded-xl transition-all hover:bg-slate-50 hover:border-slate-300 shadow-sm flex items-center justify-center gap-2"
            >
              Solicitar Demo <ArrowRight size={18} className="text-brand-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};