import React, { useRef, useState, useEffect } from 'react';
import { Package, Settings, FileText, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

const TiltCard = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15; // Sensitivity
    const y = (e.clientY - top - height / 2) / 15;
    setRotation({ x: -y, y: x });
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card transform transition-all duration-200 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.05 : 1})`,
      }}
    >
      {children}
    </div>
  );
};

export const OdooSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Implementación Completa",
      desc: "Desde la configuración inicial hasta el despliegue final.",
      items: ["Gestión de Farmacias (Lotes/Venc.)", "Punto de Venta (POS) Offline", "Contabilidad Peruana", "CRM & Pipelines"],
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Personalización a Medida",
      desc: "Adaptamos el sistema a tus reglas de negocio, no al revés.",
      items: ["Desarrollo de Módulos", "Reportes Personalizados", "Vistas Kanban/Listas", "Automatizaciones (Actions)"],
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Facturación SUNAT",
      desc: "Emisión electrónica sin intermediarios costosos.",
      items: ["Facturas y Boletas", "Guías de Remisión", "Notas de Crédito", "Validez OSE/SUNAT"],
      color: "text-orange-600 bg-orange-50"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Capacitación y Soporte",
      desc: "Tu equipo dominará el sistema en tiempo récord.",
      items: ["Entrenamiento por roles", "Soporte WhatsApp Directo", "Manuales en Video", "Garantía de funcionamiento"],
      color: "text-teal-600 bg-teal-50"
    }
  ];

  return (
    <section id="odoo" ref={sectionRef} className="py-32 relative bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-50/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl mix-blend-multiply opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Sticky Content */}
          <div className={`lg:col-span-5 lg:sticky lg:top-32 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-700 font-bold text-xs uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              Especialidad Core
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
              Expertos en <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">Odoo ERP</span>
            </h2>
            
            <p className="text-slate-600 text-xl leading-relaxed mb-10 border-l-4 border-brand-200 pl-6">
              Transformamos el caos operativo en sinfonía digital. Odoo no es solo un software, es el sistema operativo de tu empresa.
            </p>
            
            <div className="flex flex-col gap-4">
              <a 
                href="#contact" 
                className="group relative w-fit px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl overflow-hidden shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-slate-900/30 transition-all"
              >
                <div className="absolute inset-0 w-full h-full bg-brand-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
                <div className="relative flex items-center gap-3">
                  Solicitar Análisis Gratuito <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
              <p className="text-sm text-slate-400 font-medium ml-2">
                * Incluye diagnóstico de procesos actual
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`transition-all duration-700 delay-[${idx * 150}ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              >
                <TiltCard className="h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-brand-200 group relative overflow-hidden">
                  
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${feature.color.replace('text', 'bg')}`}></div>

                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 tilt-content`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors tilt-content">{feature.title}</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed tilt-content">{feature.desc}</p>
                  
                  <ul className="space-y-3 tilt-content">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};