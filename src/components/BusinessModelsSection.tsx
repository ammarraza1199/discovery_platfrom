
import { Diamond, ArrowRight } from 'lucide-react';

export const BusinessModelsSection = () => {
  return (
    <section className="section py-24 bg-section-alt">
      <h2 className="text-4xl font-bold mb-16 text-center text-text-primary">Flexible Business Models</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { title: "Platform Access", desc: "Use our tools via subscription", cta: "Get Started" },
           { title: "AI Collaboration", desc: "Partner with us for drug discovery", cta: "Partner With Us" },
           { title: "Custom AI Solutions", desc: "Tailored enterprise solutions", cta: "Contact Sales" },
         ].map((model, i) => (
           <div key={i} className="card p-8 rounded-3xl text-center flex flex-col justify-between h-64">
             <div>
               <div className="w-12 h-12 bg-gradient text-white rounded-xl mx-auto flex items-center justify-center mb-6 shadow-glow"><Diamond className="w-6 h-6" /></div>
               <h3 className="text-xl font-bold mb-2 text-text-primary">{model.title}</h3>
               <p className="text-text-secondary text-sm">{model.desc}</p>
             </div>
             <button className="text-primary font-bold flex items-center justify-center gap-2 hover:underline w-full">{model.cta} <ArrowRight className="w-4 h-4"/></button>
           </div>
         ))}
      </div>
    </section>
  );
};
