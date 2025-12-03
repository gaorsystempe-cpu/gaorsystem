import React, { useRef, useState } from 'react';
import { Database, Zap, Bot, Layout, Terminal, Receipt, ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className="spotlight-card group relative h-full bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
      style={{
        '--mouse-x': `${position.x}px`,
        '--mouse-y': `${position.y}px`,
      } as React.CSSProperties}
    >
      <div className="relative z-10 p-8 flex flex-col h-full">
        {/* Icon with floating animation on hover */}
        <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 shadow-sm transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300`}>
          {service.icon}
        </div>
        
        <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors flex items-center justify-between">
          {service.title}
          <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-brand-400" />
        </h4>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        <div className="space-y-2 border-t border-slate-100 pt-4 mt-auto">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-slate-700 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 group-hover:bg-brand-600 transition-colors"></span> 
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    icon: <Database className="w-7 h-7" />,
    title: 'Implementación Odoo',
    description: 'Tu negocio organizado. ERP completo para gestionar todo desde un solo lugar sin estrés.',
    features: ['Punto de venta (POS)', 'Control de Inventario', 'Facturación SUNAT'],
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'Automatizaciones n8n',
    description: 'Deja que los robots trabajen por ti. Conecta tus apps y ahorra horas cada día.',
    features: ['Bots de WhatsApp', 'Pedidos Automáticos', 'Google Sheets + CRM'],
    color: 'bg-pink-50 text-pink-600'
  },
  {
    icon: <Bot className="w-7 h-7" />,
    title: 'Asistente Virtual IA',
    description: 'Un empleado estrella que no duerme. Chatbots inteligentes que venden y atienden 24/7.',
    features: ['Atención Humana', 'Consultas de Stock', 'Cierre de Ventas'],
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: <Layout className="w-7 h-7" />,
    title: 'Landing Pages',
    description: 'Webs que enamoran y venden. Diseño moderno para captar clientes desde el primer clic.',
    features: ['Diseño "Wow"', 'Súper Rápidas', 'Optimizadas para Móvil'],
    color: 'bg-teal-50 text-teal-600'
  },
  {
    icon: <Terminal className="w-7 h-7" />,
    title: 'Software a Medida',
    description: '¿Necesitas algo único? Desarrollamos herramientas específicas para tu forma de trabajar.',
    features: ['Sistemas de Turnos', 'Apps Internas', 'Paneles de Control'],
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: <Receipt className="w-7 h-7" />,
    title: 'Facturación Smart',
    description: 'Dile adiós al papeleo manual. Emisión automática y reportes al instante.',
    features: ['Sin Errores Humanos', 'PDFs Automáticos', 'Reportes al día'],
    color: 'bg-indigo-50 text-indigo-600'
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-xs font-bold tracking-widest uppercase mb-4 animate-fade-in-up">
            🚀 Nuestros Superpoderes
          </span>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Todo lo que necesitas para <span className="relative inline-block">
              <span className="relative z-10 text-brand-600">despegar</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-brand-200/50 -rotate-2 z-0"></span>
            </span>
          </h3>
          <p className="text-slate-600 text-lg font-secondary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Combinamos tecnología avanzada con un diseño amigable para que tú solo te preocupes por crecer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.1 * (index + 3)}s` }}>
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};