
import { Check } from 'lucide-react';

export const BiologicsDiscoverySection = () => {
  return (
    <section id="biologics" className="bg-section-alt py-24">
       <div className="section pt-0 pb-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Biologics <span className="text-primary">Discovery</span></h1>
            <p className="text-2xl text-gradient font-bold mb-6">Advanced AI Drug Discovery Platform</p>
            <p className="text-text-secondary mb-8 text-lg">
              Accelerate your drug discovery pipeline from protein target identification to screening millions of compounds with machine learning and robotic validation.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            {/* SVG Abstract Protein Fold */}
            <div className="w-80 h-80 relative animate-float">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0B5FFF" />
                    <stop offset="100%" stopColor="#4DA3FF" />
                  </linearGradient>
                </defs>
                <path fill="url(#grad1)" d="M44.7,-76.4C58.3,-69.2,70.2,-58.3,79.5,-45.3C88.8,-32.3,95.5,-16.1,96.6,0.6C97.7,17.4,93.2,34.8,84,50.2C74.8,65.6,60.9,79,44.5,86.2C28.1,93.4,9.2,94.3,-8.2,90.4C-25.6,86.5,-41.5,77.7,-55.9,65.7C-70.3,53.7,-83.1,38.4,-88.7,20.8C-94.3,3.1,-92.7,-16.9,-84.4,-33.8C-76.1,-50.7,-61.2,-64.5,-45.3,-71.1C-29.4,-77.7,-14.7,-77.2,1.2,-79.3C17.1,-81.4,31.1,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                <path fill="none" stroke="white" strokeWidth="3" strokeDasharray="6 6" d="M30,-50 C60,-20 80,40 20,80 C-40,120 -80,40 -40,-20 C0,-80 0,-80 30,-50 Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
          {[
            "Target Identification", 
            "Virtual Hit Screening", 
            "Molecular Docking", 
            "Lead Optimization", 
            "ADMET Intelligence", 
            "Robotic Validation",
            "Preformulation Analysis",
            "Formulation Design",
            "Clinical Candidate Selection"
          ].map((cap) => (
            <div key={cap} className="card p-6 text-center rounded-2xl font-bold flex flex-col items-center justify-center gap-3">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-sm">{cap}</span>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold mb-12 text-center">Generate Novel Biologics</h3>
        <div className="flex flex-col md:flex-row items-stretch gap-6 h-full">
           {/* Left Panel */}
           <div className="card flex-1 p-6 rounded-2xl border-t-4 border-t-primary">
              <h4 className="font-bold text-lg mb-4 text-center">Experiment Setup</h4>
              <div className="space-y-4">
                <div className="bg-section-alt p-3 rounded-lg text-sm font-medium border border-primary/10 text-primary">Target-based</div>
                <div className="bg-section-alt p-3 rounded-lg text-sm font-medium border border-primary/10">Library / LIMS</div>
                <div className="bg-section-alt p-3 rounded-lg text-sm font-medium border border-primary/10">Diffusion Models</div>
              </div>
           </div>
           
           <div className="hidden md:flex items-center justify-center">
             <div className="w-12 h-1 bg-primary/10 rounded-full flow-line">
               <div className="flow-dot"></div>
             </div>
           </div>

           {/* Middle Panel */}
           <div className="card flex-[1.5] p-6 rounded-2xl bg-gradient text-white shadow-glow border-none">
              <h4 className="font-bold text-lg mb-6 text-center">Generative Algorithms</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                  <div className="font-bold mb-2">Properties Opt.</div>
                  <div className="text-xs opacity-90">Multi-objective</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                  <div className="font-bold mb-2">Comp. Biology</div>
                  <div className="text-xs opacity-90">Structure rules</div>
                </div>
              </div>
           </div>

           <div className="hidden md:flex items-center justify-center">
             <div className="w-12 h-1 bg-primary/10 rounded-full flow-line">
               <div className="flow-dot"></div>
             </div>
           </div>

           {/* Right Panel */}
           <div className="card flex-1 p-6 rounded-2xl border-t-4 border-t-light-blue">
              <h4 className="font-bold text-lg mb-4 text-center">Output</h4>
              <div className="space-y-3">
                {[1,2,3].map(i => (
                  <div key={i} className="flex items-center justify-between p-3 bg-section-alt rounded-lg border border-primary/10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{i}</div>
                      <span className="text-sm font-bold">Mol_Rank{i}</span>
                    </div>
                    <span className="text-xs text-text-secondary">Score: 9{9-i}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
       </div>
    </section>
  );
};
