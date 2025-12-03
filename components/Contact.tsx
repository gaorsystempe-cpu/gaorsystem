import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, MessageCircle, Facebook, Linkedin, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', interest: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to API or create WhatsApp link
    const text = `Hola GaorSystem, soy ${formState.name}. Me interesa: ${formState.interest}. Mensaje: ${formState.message}`;
    const waLink = `https://wa.me/51975615244?text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank');
    setFormState({ name: '', email: '', interest: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.4] mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-200/50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="space-y-8 flex flex-col justify-between h-full">
            <div>
              <div className="mb-8">
                <h2 className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-2">📬 ¿Hablamos?</h2>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Empecemos algo increíble</h3>
                <p className="text-slate-600 font-secondary text-lg">
                  ¿Listos para optimizar su negocio? Escríbannos y analicemos cómo la tecnología puede ser su mejor inversión.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className="p-3 bg-white rounded-lg text-brand-600 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Email</h4>
                    <a href="mailto:contacto@gaorsystem.pe" className="text-slate-500 hover:text-brand-600 transition-colors">contacto@gaorsystem.pe</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className="p-3 bg-white rounded-lg text-brand-600 shadow-sm">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">WhatsApp</h4>
                    <a href="https://wa.me/51975615244" className="text-slate-500 hover:text-brand-600 transition-colors">+51 975 615 244</a>
                  </div>
                </div>
              </div>
              
              <div className="pt-8">
                 <h4 className="text-slate-900 font-bold mb-4">Síguenos en redes</h4>
                 <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-600 hover:text-white transition-all shadow-sm hover:shadow-lg border border-slate-200 hover:border-brand-500">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-600 hover:text-white transition-all shadow-sm hover:shadow-lg border border-slate-200 hover:border-brand-500">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-600 hover:text-white transition-all shadow-sm hover:shadow-lg border border-slate-200 hover:border-brand-500">
                      <Instagram size={20} />
                    </a>
                 </div>
              </div>
            </div>

            {/* Copyright Mini Footer */}
            <div className="mt-12 pt-8 border-t border-slate-100 text-sm text-slate-400">
               <p>&copy; {new Date().getFullYear()} GaorSystem Perú. Hecho con 💜 y código.</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-2xl shadow-slate-200/50 relative">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 relative">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-2">Tu Nombre</label>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-400 shadow-sm"
                  placeholder="Ej. Juan Pérez"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-2">Tu Correo</label>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-400 shadow-sm"
                  placeholder="hola@ejemplo.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-2">¿Qué te interesa?</label>
                <select 
                  value={formState.interest}
                  onChange={e => setFormState({...formState, interest: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all shadow-sm"
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="Implementación Odoo">Implementación Odoo</option>
                  <option value="Automatización n8n">Automatización n8n</option>
                  <option value="Desarrollo Web">Desarrollo Web / Landing Page</option>
                  <option value="Otro">Cuéntanos más</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-2">Cuéntanos más</label>
                <textarea 
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all resize-none placeholder:text-slate-400 shadow-sm"
                  placeholder="Detalles de tu proyecto..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Enviar Mensaje
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};