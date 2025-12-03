import React from 'react';
import { Package, Settings, FileText, GraduationCap, ArrowRight } from 'lucide-react';

export const OdooSection: React.FC = () => {
  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Implementación Completa",
      items: ["Configuración integral", "Ventas, Compras e Inventario", "Punto de Venta (POS)", "Contabilidad y CRM"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Personalización a Medida",
      items: ["Adaptamos Odoo a tu flujo", "Reglas de inventario", "Modificaciones visuales POS", "Módulos desde cero"]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Facturación SUNAT",
      items: ["Cumplimiento fiscal 100%", "Facturas y Boletas Electrónicas", "Envío en tiempo real", "Integración RUC"]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Capacitación y Soporte",
      items: ["Enseñanza paso a paso", "Acompañamiento post-venta", "Resolución rápida", "Manuales y guías"]
    }
  ];

  return (
    <section id="odoo" className="py-24 relative bg-white overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute right-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Header Column */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-brand-600 font-bold tracking-widest uppercase text-sm">Especialidad Principal</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Implementación <span className="text-purple-600">Odoo</span> para Empresas
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Transformamos la complejidad operativa en un sistema fluido, permitiéndote escalar sin perder el control. Centraliza operaciones, controla inventarios y cumple con SUNAT.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
            >
              Solicitar Análisis Gratis <ArrowRight size={20} />
            </a>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-brand-600 mb-4 border border-slate-100">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};