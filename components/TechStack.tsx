import React from 'react';

const techs = [
  "Odoo", "n8n", "Evolution API", "OpenAI", "Gemini", 
  "React", "Tailwind", "Supabase", "PostgreSQL", "GitHub", "Vercel"
];

export const TechStack: React.FC = () => {
  return (
    <section className="py-10 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">Tecnologías Modernas & Potentes</p>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex animate-marquee gap-12 w-max px-4">
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <div key={index} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
               <span className="text-2xl md:text-3xl font-bold text-slate-400 hover:text-brand-600 font-sans transition-colors">
                 {tech}
               </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};