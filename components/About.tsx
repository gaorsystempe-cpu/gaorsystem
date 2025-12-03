import React from 'react';
import { Heart, Clock, Layers, Users } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { value: "-40%", label: "Carga Operativa" },
    { value: "24/7", label: "Ventas Activas" },
    { value: "x2", label: "Velocidad" },
    { value: "100%", label: "Control" },
  ];

  const benefits = [
    {
      icon: <Users className="text-brand-600" size={24} />,
      title: "Experiencia Real",
      desc: "Hemos estado en la cancha implementando Odoo en retail, servicios y manufactura."
    },
    {
      icon: <Clock className="text-brand-600" size={24} />,
      title: "Ahorro de Tiempo",
      desc: "Nuestras automatizaciones te devuelven horas de vida cada semana."
    },
    {
      icon: <Layers className="text-brand-600" size={24} />,
      title: "Soluciones Integrales",
      desc: "No somos solo código. Somos estrategia, diseño y funcionalidad en uno."
    },
    {
      icon: <Heart className="text-brand-600" size={24} />,
      title: "Siempre Acompañado",
      desc: "Soporte cercano y humano. Nunca te dejaremos en 'visto'."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-200 to-accent/30 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <h2 className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4">Pasión Digital</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                👋 Hola, bienvenidos. <br/>
                Somos <span className="text-brand-600">GaorSystem Perú</span>
              </h3>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Nos dedicamos a implementar sistemas, automatizar procesos y crear soluciones digitales que ayudan a emprendedores y empresas en Perú a trabajar felices, vender más y olvidarse del estrés operativo.
                </p>
                <p>
                  No solo entregamos código; entregamos tranquilidad y eficiencia. Nuestro objetivo es que la tecnología sea su mejor amiga, no un dolor de cabeza.
                </p>
              </div>
              
              <div className="flex gap-6 mt-8 border-t border-slate-100 pt-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-slate-900">+5 Años</span>
                  <span className="text-sm text-slate-500">Creando Soluciones</span>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-slate-900">100%</span>
                  <span className="text-sm text-slate-500">Compromiso Total</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-slate-100 group">
                <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-slate-900 font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-brand-900 rounded-3xl p-8 border border-white/10 relative overflow-hidden">
           {/* Abstract patterns for visual interest */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
           
           <div className="relative z-10">
             <div className="text-center mb-10">
               <h3 className="text-2xl font-bold text-white mb-2">¡Resultados Reales!</h3>
               <p className="text-brand-200">El impacto en tu negocio</p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {stats.map((stat, i) => (
                 <div key={i} className="text-center relative">
                   <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-brand-200 mb-2">
                     {stat.value}
                   </div>
                   <div className="text-sm font-bold text-brand-200 uppercase tracking-wide">
                     {stat.label}
                   </div>
                   {i !== stats.length - 1 && (
                     <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>
                   )}
                 </div>
               ))}
             </div>
             <div className="text-center mt-10">
               <a href="#contact" className="inline-flex items-center text-accent-glow font-bold hover:text-white transition-colors bg-white/10 px-6 py-3 rounded-full hover:bg-white/20">
                 ¡Yo quiero esto! 🚀
               </a>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};