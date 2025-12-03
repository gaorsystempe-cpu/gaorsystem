import React, { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle, Code2, Database, Globe, Smartphone } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-slate-50 perspective-1000">
      
      {/* Floating Animated Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Blobs */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-200/30 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-accent/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-[20%] left-[10%] text-brand-300 animate-float opacity-40">
           <Code2 size={48} />
        </div>
        <div className="absolute top-[30%] right-[15%] text-accent-glow animate-float animation-delay-2000 opacity-40">
           <Database size={56} />
        </div>
        <div className="absolute bottom-[20%] left-[15%] text-pink-300 animate-float animation-delay-4000 opacity-40">
           <Globe size={64} />
        </div>
        <div className="absolute bottom-[30%] right-[25%] text-purple-300 animate-float opacity-30">
           <Smartphone size={40} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          
          {/* Badge */}
          <div className={`transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-default">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-slate-600 text-xs font-bold tracking-widest uppercase">GaorSystem Workspace</span>
            </div>
          </div>
          
          {/* Main Title - Word by Word Reveal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight max-w-6xl">
             <span className="block mb-2">
                Implementamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 inline-block hover:scale-105 transition-transform cursor-default">Odoo</span>,
             </span>
             <span className="block mb-2">
                automatizamos con <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 inline-block hover:scale-105 transition-transform cursor-default">n8n</span>
             </span>
             <span className="block">
                y creamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-dark to-accent inline-block hover:scale-105 transition-transform cursor-default">webs increíbles</span>.
             </span>
          </h1>
          
          {/* Description */}
          <p className={`text-lg md:text-2xl text-slate-600 max-w-3xl font-secondary leading-relaxed font-light transform transition-all duration-700 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Soluciones que no solo funcionan, sino que inspiran confianza y escalan contigo.
          </p>
          
          {/* Interactive Buttons */}
          <div className={`flex flex-col sm:flex-row gap-5 w-full sm:w-auto transform transition-all duration-700 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a 
              href="https://wa.me/51975615244" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-brand-900/20 overflow-hidden flex items-center justify-center gap-3"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-600 to-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle size={20} className="relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Hablemos por WhatsApp</span>
            </a>
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-white border-2 border-slate-100 text-slate-900 font-bold rounded-2xl transition-all hover:border-brand-200 hover:text-brand-600 hover:shadow-lg flex items-center justify-center gap-2"
            >
              Solicitar Demo 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};