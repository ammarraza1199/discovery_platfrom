import { Globe, ArrowRight, Play, Dna, BarChart, Pill, Brain, Sparkles } from 'lucide-react';

export const WallahGPTSection = () => {
  return (
    <section id="wallahgpt" className="section py-24 border-b border-primary/5 overflow-hidden">
      <div className="bg-text-primary text-white py-20 px-6 md:px-12 lg:px-24 rounded-[40px] mb-24 relative overflow-hidden shadow-2xl">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-light-blue/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 relative z-10 py-10 lg:py-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 animate-fade-in">
              <Sparkles className="w-3 h-3" /> Latest Foundation Model
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              Wallah<br/><span className="text-primary drop-shadow-[0_0_20px_rgba(11,95,255,0.4)]">GPT</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-6 text-white/95 border-l-4 border-primary pl-6 py-2 bg-gradient-to-r from-primary/5 to-transparent">
              In-Silico Drug Discovery & Omics Platform
            </p>
            <p className="text-lg text-white/70 max-w-xl mb-12 leading-relaxed font-medium">
              Revolutionizing Aging Research, Disease Modelling, and Synthetic Data Generation. One Model to guide the future of pharmaceutical discovery.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-glow hover:scale-105 transition-transform flex items-center gap-2">
                Access Models <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                Whitepaper
              </button>
            </div>

            <div className="flex gap-6 text-white/50 font-bold text-sm">
              <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><Globe className="w-4 h-4"/> HuggingFace</span>
              <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><Globe className="w-4 h-4"/> Discord</span>
              <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><Globe className="w-4 h-4"/> bioRxiv</span>
            </div>
          </div>

          {/* Right: Ring Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-10 lg:py-0 scale-110 lg:scale-125">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Glowing Aura behind Brain */}
              <div className="absolute w-40 h-40 bg-primary/30 rounded-full blur-[40px] animate-pulse"></div>
              
              {/* Center Icon */}
              <div className="absolute z-20 w-36 h-36 bg-white/5 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_50px_rgba(11,95,255,0.3)] animate-float">
                <Brain className="w-16 h-16 text-white" />
              </div>
              
              {/* Outer Rings */}
              <div className="absolute inset-0 rounded-full border-[1px] border-white/10 animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border-[1px] border-white/5 animate-[spin_25s_linear_infinite_reverse]"></div>
              
              {/* Circular Text */}
              <svg className="absolute w-[110%] h-[110%] animate-[spin_25s_linear_infinite]" viewBox="0 0 100 100">
                <path id="circlePath" fill="none" d="M 50, 50 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
                <text fontSize="5" fontWeight="900" fill="#fff" className="uppercase tracking-[0.3em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] opacity-90">
                  <textPath href="#circlePath">
                    • One Model to guide them all • One Model to find them • One Model to guide them all 
                  </textPath>
                </text>
              </svg>

              {/* Decorative Particles */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-glow"
                  style={{
                    top: `${50 + 48 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                    left: `${50 + 48 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                    animationDelay: `${i * 0.4}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3 Model Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { title: "WallahGPT1", desc: "Biological Aging Clock: Predicts biological age from molecular data (DNA methylation, RNA-seq)", icon: <Dna className="w-10 h-10" /> },
          { title: "WallahGPT2", desc: "Synthetic Omics Generator: Generates statistically valid synthetic multi-omics datasets", icon: <BarChart className="w-10 h-10" /> },
          { title: "WallahGPT3", desc: "Digital Drug Discovery: Simulates drug perturbation experiments in-silico", icon: <Pill className="w-10 h-10" /> },
        ].map((model, i) => (
          <div key={i} className="card p-8 rounded-2xl border-t-4 border-t-primary text-center group">
            <div className="w-16 h-16 mx-auto bg-section-alt rounded-full flex items-center justify-center text-primary mb-6 shadow-sm border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all">{model.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
            <p className="text-text-secondary mb-8 h-12">{model.desc}</p>
            <button className="text-primary font-bold text-sm hover:underline flex items-center justify-center gap-1 mx-auto w-full">Read Paper <ArrowRight className="w-4 h-4" /></button>
          </div>
        ))}
      </div>

      {/* Video / Text Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-4xl font-bold mb-6">WallahGPT3 is our most recent and most advanced LLM</h2>
          <p className="text-text-secondary text-lg mb-6">
            The model acts as a unique bridge between omics data, compound structures, and text-based scientific knowledge. By combining advanced architectures with biological priors, Precious3GPT achieves state-of-the-art performance across multiple domains.
          </p>
          <p className="text-text-secondary text-lg">
            Through zero-shot compound screening capabilities, it directly outputs the biological effect of a molecule without requiring target-specific training.
          </p>
        </div>
        <div className="aspect-video bg-gradient rounded-3xl shadow-glow relative overflow-hidden group cursor-pointer flex items-center justify-center">
           <div className="absolute inset-0 bg-text-primary/20 group-hover:bg-transparent transition-colors"></div>
           <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
             <Play className="w-8 h-8 text-white fill-white ml-1" />
           </div>
           <div className="absolute bottom-4 left-0 w-full text-center text-white font-bold text-sm drop-shadow-md">Watch Demo: WallahGPT3 in Action</div>
        </div>
      </div>

      {/* Publications Grid */}
      <div className="bg-section-alt rounded-3xl p-12 mb-12">
        <h2 className="text-4xl font-bold mb-12 text-center">Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { tag: "Aging", title: "Artificial Intelligence for Aging Research: Generative Models within a Biological Context" },
            { tag: "Nature", title: "WallahGPT2: Multimodal Transformer for Omics Profile Synthesis and Data Generation" },
            { tag: "bioRxiv", title: "WallahGPT3: The Next Generation of Small Molecule Emulation and Zero-Shot Discovery" },
            { tag: "bioRxiv", title: "Predicting Clinical Outcomes via Multi-Tissue Representation Learning" },
          ].map((pub, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md mb-3 inline-block">{pub.tag}</span>
              <h4 className="font-bold text-lg leading-snug">{pub.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
