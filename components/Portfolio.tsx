import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Uchu51 - Delivery App",
    category: "FoodTech / Sistemas",
    desc: "Sistema integral para dark kitchens: pedidos automatizados, KDS en cocina y control de delivery en tiempo real.",
    tags: ["Restaurantes", "Automatización", "App"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    colSpan: "lg:col-span-2"
  },
  {
    title: "Olivia - CRM & Cotizador",
    category: "SaaS / Gestión",
    desc: "Olvídate del Excel. Cotiza, gestiona clientes y organiza tu día en segundos.",
    tags: ["CRM", "IA", "n8n"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    colSpan: ""
  },
  {
    title: "Crece Tribu",
    category: "Comunidad & Educación",
    desc: "Plataforma vibrante para conectar emprendedores y compartir conocimiento.",
    tags: ["Comunidad", "Landing Page", "Growth"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://crece-tribu.vercel.app/",
    colSpan: ""
  },
  {
    title: "MediCitas - Clínica",
    category: "Salud / Reservas",
    desc: "Agendamiento médico con recordatorios automáticos por WhatsApp.",
    tags: ["Salud", "Turnos", "WhatsApp API"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    colSpan: "lg:col-span-2"
  },
  {
    title: "E-Shop Pro",
    category: "E-commerce",
    desc: "Tienda online sincronizada con Odoo e inventario real.",
    tags: ["Odoo", "Ventas", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#",
    colSpan: ""
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-widest uppercase mb-4">
            🎨 Casos de Éxito
          </span>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Proyectos que <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-accent">cobran vida</span>
          </h3>
          <p className="text-slate-600 text-lg">
            Soluciones reales de alto impacto visual y funcional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
          {/* Bento Grid layout simulation */}
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`group relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 ${project.colSpan} transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]`}
            >
              {/* Overlay Gradient */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Background Image with Zoom */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-end mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <a 
                      href={project.link} 
                      className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-500 hover:text-white"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-slate-200 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-slate-200 font-medium px-2 py-1 rounded bg-black/20 backdrop-blur-sm border border-white/10">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Call to Action Card (Last item in grid) */}
          <div className="bg-brand-600 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-lg shadow-brand-600/30 relative overflow-hidden group">
             {/* Animated Circles BG */}
             <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

             <div className="relative z-10">
               <h4 className="text-2xl font-bold text-white mb-4">¿Tu proyecto aquí?</h4>
               <p className="text-brand-100 mb-8 text-sm leading-relaxed">
                 Ya sea una tienda online, un sistema de gestión o una landing page impactante.
               </p>
               <a 
                 href="https://wa.me/51975615244" 
                 className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
               >
                 Cotizar Idea <ArrowRight size={16} />
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};