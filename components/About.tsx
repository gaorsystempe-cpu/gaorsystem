import React, { useEffect, useState, useRef } from 'react';
import { Heart, Clock, Layers, Users } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

export const About: React.FC = () => {
  const stats = [
    { value: 40, suffix: "%", label: "Menos Carga Operativa", prefix: "-" },
    { value: 24, suffix: "/7", label: "Ventas Activas", prefix: "" },
    { value: 2, suffix: "x", label: "Velocidad de Procesos", prefix: "" },
    { value: 100, suffix: "%", label: "Control del Negocio", prefix: "" },
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
          <div className="relative group">
            {/* Animated Glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-300 to-accent-glow rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-widest uppercase mb-6">
                Pasión Digital
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                👋 Hola, somos <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-500">GaorSystem Perú</span>
              </h3>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed font-light">
                <p>
                  Nos dedicamos a implementar sistemas, automatizar procesos y crear soluciones digitales que ayudan a emprendedores y empresas en Perú a trabajar felices, vender más y olvidarse del estrés operativo.
                </p>
                <p>
                  No solo entregamos código; entregamos <strong>tranquilidad y eficiencia</strong>. Nuestro objetivo es que la tecnología sea su mejor amiga.
                </p>
              </div>
              
              <div className="flex gap-8 mt-10 border-t border-slate-100 pt-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-slate-900 flex items-center">
                    +<AnimatedCounter end={5} duration={1500} />
                  </span>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wide mt-1">Años Creando</span>
                </div>
                <div className="w-px h-16 bg-slate-100"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-slate-900 flex items-center">
                    <AnimatedCounter end={100} duration={2000} suffix="%" />
                  </span>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wide mt-1">Compromiso</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-brand-100 transition-all duration-300 border border-slate-100 group cursor-default">
                <div className="mb-4 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border border-slate-100">
                  {item.icon}
                </div>
                <h4 className="text-slate-900 font-bold text-xl mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section with Gradient */}
        <div className="bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 rounded-[3rem] p-12 border border-white/10 relative overflow-hidden shadow-2xl">
           {/* Abstract patterns */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] -mr-20 -mt-20 animate-pulse-slow"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -ml-20 -mb-20 animate-pulse-slow"></div>
           
           <div className="relative z-10">
             <div className="text-center mb-12">
               <h3 className="text-3xl font-bold text-white mb-2">¡Resultados Reales!</h3>
               <p className="text-brand-200 font-light">El impacto medible en tu negocio</p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
               {stats.map((stat, i) => (
                 <div key={i} className="text-center group">
                   <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-brand-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                     {stat.prefix}
                     <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                   </div>
                   <div className="text-xs md:text-sm font-bold text-brand-200 uppercase tracking-widest opacity-80 group-hover:opacity-100">
                     {stat.label}
                   </div>
                 </div>
               ))}
             </div>
             
             <div className="text-center mt-16">
               <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full backdrop-blur-md transition-all border border-white/10 hover:border-white/30 font-bold hover:scale-105"
               >
                 <span>¡Yo quiero esto!</span> 🚀
               </a>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};