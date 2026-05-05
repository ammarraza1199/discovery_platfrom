import { Fragment } from 'react';
import { Check, Dna, RefreshCw, Zap, Globe, Brain, Sparkles } from 'lucide-react';
import { FadeInWhenVisible } from './FadeInWhenVisible';

export const ChemistryQuantisSection = () => {
  return (
    <section id="chemistry42" className="section py-24 border-b border-primary/5">
      <FadeInWhenVisible>
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Chemistry<span className="text-primary"> Quantis</span></h1>
          <p className="text-2xl text-gradient font-bold mb-6 max-w-3xl mx-auto">Advanced AI-powered drug discovery and chemical analysis platform</p>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            A comprehensive workbench for computational chemistry integrating machine learning and powerful chemoinformatics libraries like RDKit and PyTorch.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-gradient text-white px-8 py-3 rounded-full font-semibold shadow-card hover:shadow-glow transition-all">Sign Up</button>
            <button className="border border-primary/20 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:border-primary transition-all">Log In</button>
          </div>
        </div>
      </FadeInWhenVisible>

      {/* Apps Grid */}
      <div className="mb-24">
        <h3 className="text-2xl font-bold mb-8 text-center">Apps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "MolSpace Explorer", desc: "High-dimensional projection and visualization of chemical spaces", icon: <Globe className="w-6 h-6" /> },
            { title: "PACE", desc: "Patent-Assisted Chemical Extraction from literature", icon: <Sparkles className="w-6 h-6" /> },
            { title: "Generative Chemistry", desc: "AI ensemble generation for novel molecules", icon: <Dna className="w-6 h-6" /> },
            { title: "Nacho01 Models", desc: "Fine-tuning workflows for GNNs & Transformers", icon: <Brain className="w-6 h-6" /> },
            { title: "Alchemistry", desc: "Fast molecular dynamics simulation pipeline", icon: <Zap className="w-6 h-6" /> },
            { title: "Retrosynthetic Planning", desc: "Deep tree-search reverse synthetic routes", icon: <RefreshCw className="w-6 h-6" /> },
          ].map((app, i) => (
            <FadeInWhenVisible key={i} delay={i*0.1}>
              <div className="card p-6 rounded-2xl flex items-start gap-4 group cursor-pointer h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">{app.icon}</div>
                <div>
                  <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{app.title}</h4>
                  <p className="text-sm text-text-secondary">{app.desc}</p>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>

      {/* Feature Matrix Table */}
      <div className="mb-24 overflow-x-auto">
        <h3 className="text-2xl font-bold mb-8">A Diverse Toolbox for Drug Discovery</h3>
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="border-b border-primary/20">
              <th className="py-4 px-6 text-left font-semibold text-text-secondary">Stage</th>
              {["Gen Chem", "Retrosynthesis", "ADMET", "Alchemistry", "MollSpace", "Model Train"].map((col) => (
                <th key={col} className="py-4 px-6 text-center font-semibold text-text-primary">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["Hit Identification", "Hit-to-Lead", "Lead Optimization"].map((row, i) => (
              <tr key={i} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                <td className="py-5 px-6 font-medium text-lg">{row}</td>
                {[1,2,3,4,5,6].map(cell => (
                  <td key={cell} className="py-5 px-6 text-center">
                     {Math.random() > 0.3 && <Check className="w-6 h-6 text-primary mx-auto" strokeWidth={3} />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Workflows Diagram */}
      <div className="mb-24">
        <h3 className="text-2xl font-bold mb-8 text-center">Workflows</h3>
        <div className="relative flex flex-wrap items-center justify-center gap-4 py-8">
          {["Hit ID", "R-group", "Scaffold", "Potency", "ADMET", "Modeling"].map((step, i) => (
            <Fragment key={step}>
              <div className="card px-6 py-4 rounded-xl font-bold text-primary flex-shrink-0 z-10 bg-white">
                {step}
              </div>
              {i < 5 && (
              <div className="relative w-12 h-1 bg-primary/20 hidden md:block rounded-full flow-line">
                <div className="flow-dot"></div>
              </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>

    </section>
  );
};
