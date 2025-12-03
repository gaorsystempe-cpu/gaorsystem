import React from 'react';
import { Database, Zap, Bot, Layout, Terminal, Receipt } from 'lucide-react';

const services = [
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Implementación Odoo',
    description: 'Tu negocio organizado. ERP completo para gestionar todo desde un solo lugar sin estrés.',
    features: ['Punto de venta (POS)', 'Control de Inventario', 'Facturación SUNAT', 'Contabilidad Fácil'],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Automatizaciones n8n',
    description: 'Deja que los robots trabajen por ti. Conecta tus apps y ahorra horas cada día.',
    features: ['Bots de WhatsApp', 'Pedidos Automáticos', 'Google Sheets + CRM', 'Notificaciones al instante'],
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'Asistente Virtual IA',
    description: 'Un empleado estrella que no duerme. Chatbots inteligentes que venden y atienden 24/7.',
    features: ['Atención Calidad Humana', 'Consultas de Stock', 'Cierre de Ventas', 'Siempre Amable'],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Landing Pages',
    description: 'Webs que enamoran y venden. Diseño moderno para captar clientes desde el primer clic.',
    features: ['Diseño "Wow"', 'Súper Rápidas', 'Optimizadas para Móvil', 'Listas para Vender'],
    color: 'bg-teal-100 text-teal-600'
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: 'Software a Medida',
    description: '¿Necesitas algo único? Desarrollamos herramientas específicas para tu forma de trabajar.',
    features: ['Sistemas de Turnos', 'Apps Internas', 'Paneles de Control', 'Soluciones Creativas'],
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: <Receipt className="w-8 h-8" />,
    title: 'Facturación Smart',
    description: 'Dile adiós al papeleo manual. Emisión automática y reportes al instante.',
    features: ['Sin Errores Humanos', 'PDFs Automáticos', 'Reportes al día', 'Tranquilidad Total'],
    color: 'bg-indigo-100 text-indigo-600'
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-2 bg-brand-50 inline-block px-4 py-1 rounded-full">🚀 Nuestros Superpoderes</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Todo lo que necesitas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-500">despegar</span>
          </h3>
          <p className="text-slate-600 text-lg font-secondary">
            Combinamos tecnología avanzada con un diseño amigable para que tú solo te preocupes por crecer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-brand-50"></div>
              
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 mb-3 font-sans">
                {service.title}
              </h4>
              
              <p className="text-slate-600 font-secondary leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="mt-auto space-y-2 border-t border-slate-100 pt-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="text-brand-500 font-bold">✓</span> {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};