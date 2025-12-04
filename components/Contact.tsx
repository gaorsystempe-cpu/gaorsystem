import React, { useState } from 'react';
import { Send, Mail, MessageCircle, Facebook, Instagram, Youtube, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

// Custom X Logo
const XLogo = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const interests = [
  { id: 'odoo', label: 'Implementación Odoo', icon: '📦', color: 'border-blue-500 bg-blue-50 text-blue-700' },
  { id: 'n8n', label: 'Automatización n8n', icon: '🤖', color: 'border-pink-500 bg-pink-50 text-pink-700' },
  { id: 'web', label: 'Desarrollo Web / Landing', icon: '🚀', color: 'border-teal-500 bg-teal-50 text-teal-700' },
  { id: 'other', label: 'Consultoría / Otro', icon: '💡', color: 'border-purple-500 bg-purple-50 text-purple-700' },
];

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', interest: '', message: '' });
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola GaorSystem, soy ${formState.name}. Me interesa: ${formState.interest}. Mensaje: ${formState.message}`;
    const waLink = `https://wa.me/51975615244?text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank');
    setFormState({ name: '', email: '', interest: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
            <Sparkles size={14} className="text-yellow-400" />
            ¿Hablamos?
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Empecemos algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-dark">Increíble</span>
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            Cuéntanos tu idea y nosotros ponemos la tecnología.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Direct Action & Socials */}
          <div className="lg:col-span-5 space-y-8 flex flex-col">
            
            {/* WHATSAPP SUPER BUTTON */}
            <a 
              href="https://wa.me/51975615244" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full p-6 bg-[#25D366] rounded-3xl shadow-[0_20px_50px_-12px_rgba(37,211,102,0.5)] hover:shadow-[0_20px_60px_-12px_rgba(37,211,102,0.7)] transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex items-center justify-between"
            >
               {/* Pulse Effect */}
               <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl -mr-10 -mt-10 animate-pulse"></div>
               
               <div className="relative z-10 flex items-center gap-4">
                 <div className="bg-white p-3 rounded-2xl shadow-sm">
                   <MessageCircle size={32} className="text-[#25D366] fill-current" />
                 </div>
                 <div className="text-left">
                   <p className="text-[#075e54] text-xs font-bold uppercase tracking-wider mb-0.5">Respuesta Rápida</p>
                   <p className="text-white text-2xl font-bold tracking-tight">Chat WhatsApp</p>
                 </div>
               </div>
               <div className="bg-white/20 p-2 rounded-full transform group-hover:rotate-45 transition-transform duration-500">
                 <ArrowRight className="text-white" size={24} />
               </div>
            </a>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-center gap-5 group hover:border-brand-200 transition-colors">
              <div className="p-4 bg-white rounded-2xl text-slate-900 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Correo Electrónico</p>
                <a href="mailto:gaorsystem@gmail.com" className="text-xl font-bold text-slate-900 hover:text-brand-600 transition-colors">
                  gaorsystem@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-slate-200"></span> 
                Síguenos en redes 
                <span className="w-full h-px bg-slate-200"></span>
              </h4>
              <div className="flex justify-between gap-4">
                 <a href="https://www.facebook.com/gaorsystemperu" target="_blank" className="flex-1 py-4 bg-white border border-slate-200 rounded-2xl flex justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all shadow-sm hover:shadow-lg hover:-translate-y-1 group">
                    <Facebook className="group-hover:scale-110 transition-transform" />
                 </a>
                 <a href="https://www.instagram.com/gaorsystemperu/" target="_blank" className="flex-1 py-4 bg-white border border-slate-200 rounded-2xl flex justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all shadow-sm hover:shadow-lg hover:-translate-y-1 group">
                    <Instagram className="group-hover:scale-110 transition-transform" />
                 </a>
                 <a href="https://www.youtube.com/channel/UC6J5yqaMivLRImV7aCFnQWQ/videos" target="_blank" className="flex-1 py-4 bg-white border border-slate-200 rounded-2xl flex justify-center text-slate-400 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all shadow-sm hover:shadow-lg hover:-translate-y-1 group">
                    <Youtube className="group-hover:scale-110 transition-transform" />
                 </a>
                 <a href="https://x.com/gaorsystem" target="_blank" className="flex-1 py-4 bg-white border border-slate-200 rounded-2xl flex justify-center text-slate-400 hover:text-white hover:bg-black hover:border-black transition-all shadow-sm hover:shadow-lg hover:-translate-y-1 group">
                    <XLogo className="group-hover:scale-110 transition-transform" />
                 </a>
              </div>
              <p className="mt-8 text-center text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} GaorSystem Perú.
              </p>
            </div>
          </div>

          {/* Right Column: Gamified Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
               {/* Form Background Blob */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -mr-20 -mt-20"></div>

               <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Envíanos un mensaje</h3>
               
               <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                 
                 {/* Name & Email Group */}
                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 ml-1">Tu Nombre</label>
                     <input 
                        type="text"
                        placeholder="Ej. Juan Pérez"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        onFocus={() => setFocusedInput('name')}
                        onBlur={() => setFocusedInput(null)}
                        className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl outline-none transition-all duration-300 font-medium ${focusedInput === 'name' ? 'border-brand-500 bg-white ring-4 ring-brand-500/10 scale-[1.02]' : 'border-transparent hover:border-slate-200'}`}
                        required
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 ml-1">Tu Correo</label>
                     <input 
                        type="email"
                        placeholder="hola@ejemplo.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        onFocus={() => setFocusedInput('email')}
                        onBlur={() => setFocusedInput(null)}
                        className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl outline-none transition-all duration-300 font-medium ${focusedInput === 'email' ? 'border-brand-500 bg-white ring-4 ring-brand-500/10 scale-[1.02]' : 'border-transparent hover:border-slate-200'}`}
                        required
                     />
                   </div>
                 </div>

                 {/* Interest Chips (Gamified Selection) */}
                 <div className="space-y-3">
                   <label className="text-sm font-bold text-slate-700 ml-1">¿Qué te interesa?</label>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     {interests.map((item) => (
                       <button
                         key={item.id}
                         type="button"
                         onClick={() => setFormState({...formState, interest: item.label})}
                         className={`relative p-4 rounded-2xl border-2 text-left transition-all duration-300 flex items-center gap-3 ${
                           formState.interest === item.label 
                             ? `${item.color} shadow-lg scale-[1.02]` 
                             : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                         }`}
                       >
                         <span className="text-2xl">{item.icon}</span>
                         <span className="font-bold text-sm">{item.label}</span>
                         {formState.interest === item.label && (
                           <CheckCircle className="absolute top-4 right-4 w-5 h-5 animate-scale-in" />
                         )}
                       </button>
                     ))}
                   </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Detalles del Proyecto</label>
                    <textarea 
                      rows={4}
                      placeholder="Cuéntanos un poco sobre lo que quieres lograr..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      onFocus={() => setFocusedInput('message')}
                      onBlur={() => setFocusedInput(null)}
                      className={`w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl outline-none transition-all duration-300 font-medium resize-none ${focusedInput === 'message' ? 'border-brand-500 bg-white ring-4 ring-brand-500/10 scale-[1.02]' : 'border-transparent hover:border-slate-200'}`}
                      required
                    ></textarea>
                 </div>

                 <button 
                   type="submit"
                   className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group"
                 >
                   <span className="text-lg">Enviar Mensaje</span>
                   <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>

               </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
