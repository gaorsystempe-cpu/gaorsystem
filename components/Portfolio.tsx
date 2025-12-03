import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Uchu51 - Delivery App",
    category: "FoodTech / Sistemas",
    desc: "Sistema integral para dark kitchens: pedidos automatizados, KDS en cocina y control de delivery en tiempo real.",
    tags: ["Restaurantes", "Automatización", "App"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Olivia - CRM & Cotizador",
    category: "SaaS / Gestión",
    desc: "Olvídate del Excel. Cotiza, gestiona clientes y organiza tu día en segundos desde PC o celular.",
    tags: ["CRM", "Asistente Virtual", "n8n"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Crece Tribu",
    category: "Comunidad & Educación",
    desc: "Plataforma vibrante para conectar emprendedores, compartir conocimiento y crecer en comunidad.",
    tags: ["Comunidad", "Landing Page", "Growth"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://crece-tribu.vercel.app/"
  },
  {
    title: "MediCitas - Clínica",
    category: "Salud / Reservas",
    desc: "Sistema de agendamiento médico con recordatorios automáticos por WhatsApp y gestión de historias clínicas.",
    tags: ["Salud", "Turnos", "WhatsApp API"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "E-Shop Pro",
    category: "E-commerce",
    desc: "Tienda online sincronizada con Odoo. Inventario en tiempo real y facturación automática.",
    tags: ["Odoo", "Ventas", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-2">🎨 Casos de Éxito</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Proyectos que <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-accent">cobran vida</span>
          </h3>
          <p className="text-slate-600 text-lg">
            Soluciones reales de alto impacto visual y funcional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
          {/* Bento Grid layout simulation with Tailwind */}
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${
                idx === 0 || idx === 3 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 transition-opacity"></div>
              
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md border border-white/20">
                    {project.category}
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-slate-200 mb-4 line-clamp-2">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-white font-medium px-2 py-1 rounded bg-white/20 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-accent-glow font-bold hover:text-white transition-colors"
                  >
                    Ver en Vivo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
          
          {/* Call to Action Card */}
          <div className="bg-brand-600 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-lg shadow-brand-600/30">
             <h4 className="text-2xl font-bold text-white mb-4">¿Te gustaría un proyecto similar?</h4>
             <p className="text-brand-100 mb-6 text-sm">
               Ya sea una tienda online, un sistema de gestión o una landing page impactante. Cuéntanos tu idea.
             </p>
             <a 
               href="https://wa.me/51975615244" 
               className="px-6 py-3 bg-white text-brand-900 font-bold rounded-full hover:scale-105 transition-transform"
             >
               Cotizar por WhatsApp
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};