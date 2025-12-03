import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "CEO, TechFlow",
    text: "GaorSystem transformó completamente nuestra infraestructura digital. Su atención al detalle es impresionante.",
    img: 10
  },
  {
    name: "Ana Gutierrez",
    role: "Marketing Dir., EcoVida",
    text: "El equipo entendió perfectamente nuestra visión. La web que desarrollaron aumentó nuestras ventas un 40%.",
    img: 22
  },
  {
    name: "Jorge Salas",
    role: "Fundador, StartUp Peru",
    text: "Rápidos, eficientes y muy profesionales. La mejor inversión tecnológica que hemos hecho este año.",
    img: 33
  },
  {
    name: "Maria Fernandez",
    role: "CTO, FinGroup",
    text: "La calidad del código es excelente. Son verdaderos partners tecnológicos, no solo proveedores.",
    img: 44
  },
    {
    name: "Roberto Campos",
    role: "Gerente, LogísticaYA",
    text: "La app móvil es intuitiva y robusta. Nuestros operarios la adoptaron en tiempo récord.",
    img: 55
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-primary-950 overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-slate-400 text-lg font-secondary max-w-2xl mx-auto">
          La confianza de nuestros socios es nuestro mayor aval.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary-950 to-transparent z-10"></div>
        
        <div className="flex animate-marquee gap-6 w-max px-4">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="w-[350px] glass-card p-8 rounded-2xl border border-white/5 hover:border-accent/30 flex flex-col justify-between shrink-0 transition-all hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} size={16} className="text-yellow-400 fill-current" />)}
              </div>
              <p className="text-slate-300 italic font-secondary mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/100/100?random=${t.img}`} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-500"
                />
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-accent">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};