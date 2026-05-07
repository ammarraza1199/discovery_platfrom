import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FeatureDetailModal } from '../components/FeatureDetailModal';
import { InteractiveHeroBackground } from '../components/InteractiveHeroBackground';
import { 
  Hourglass, BarChart, Brain, Shield, Lock, 
  Database, Zap, ChevronRight,
  MousePointer2, ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInWhenVisible } from '../components/FadeInWhenVisible';

export const WallahGPTPage = () => {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      id: 'wallah1',
      title: 'WallahGPT 1',
      subtitle: 'The Biological Aging Clock',
      icon: Hourglass,
      description: 'Predicting cellular age and disease risk signatures through 15-gene analysis.',
      fullExplanation: [
        "WallahGPT 1 provides a high-precision Biological Aging Clock that differentiates between chronological age and cellular health. By analyzing specific 15-gene molecular signatures, the system identifies the key drivers of senescence and biological decline.",
        "The platform calculates a proprietary 'Age Acceleration Score,' which allows researchers to rank candidates for anti-aging therapeutic interventions. This mechanistic insight helps identify novel targets for age-related diseases like Alzheimer's and cardiovascular decline."
      ],
      capabilities: [
        "Age Acceleration Scoring",
        "15-Gene Signature Analysis",
        "Cellular Senescence Mapping",
        "Disease Risk Probability",
        "Therapeutic Target Ranking"
      ]
    },
    {
      id: 'wallah2',
      title: 'WallahGPT 2',
      subtitle: 'Synthetic Omics Generator',
      icon: BarChart,
      description: 'HIPAA-compliant generation of biologically faithful research data.',
      fullExplanation: [
        "WallahGPT 2 is a state-of-the-art generative engine for synthetic biological data. It allows researchers to create high-fidelity transcriptome (RNA-Seq) and methylation matrices that are statistically indistinguishable from real patient data.",
        "This ensures full HIPAA and GDPR compliance by enabling massive-scale model training without the need for sensitive, identifying patient information. The synthetic data preserves all complex biological correlations, making it a perfect proxy for early-phase in-silico experimentation."
      ],
      capabilities: [
        "RNA-Seq Synthetic Generation",
        "Methylation Matrix Simulation",
        "HIPAA/GDPR Compliance",
        "Privacy-First Data Scaling",
        "Biological Correlation Fidelity"
      ]
    },
    {
      id: 'wallah3',
      title: 'WallahGPT 3',
      subtitle: 'Digital Discovery Engine',
      icon: Brain,
      description: 'High-throughput virtual screening and gene perturbation mapping.',
      fullExplanation: [
        "WallahGPT 3 performs virtual High-Throughput Screening (HTS) at unprecedented scales, capable of simulating the effects of 60,000+ compounds in a digital environment.",
        "The engine generates 'Gene Expression Perturbation Maps' that visualize how specific molecules affect biological pathways at a mechanistic level. This allows researchers to predict both primary efficacy and potential off-target effects before a single physical experiment is conducted."
      ],
      capabilities: [
        "60k+ Compound Virtual HTS",
        "Gene Perturbation Mapping",
        "Pathway Efficacy Prediction",
        "Mechanism-of-Action Insights",
        "Side-Effect Profiling"
      ]
    }
  ];

  const handleOpenModal = (feature: any) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <InteractiveHeroBackground />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
            >
              <MousePointer2 size={14} className="text-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">In-Silico Simulation Lab</span>
            </motion.div>

            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-7xl md:text-9xl font-extrabold mb-8 leading-[0.8] tracking-tighter text-text-primary"
            >
              Wallah<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">GPT</span>
            </motion.h1>

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-2xl text-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed"
            >
              Accelerate discovery through mechanistic simulation. <br />
              Run complex experiments on screen — instantly and securely.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex justify-center"
            >
              <button className="px-12 py-5 bg-text-primary text-white rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                Secure Enterprise Access <ArrowRight size={20} className="text-primary" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
          <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Scroll Down</span>
        </motion.div>
      </section>

      {/* Modules Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-bold mb-4">Core Modules</h2>
             <p className="text-text-secondary">Mechanistic biological simulation from aging clocks to high-throughput discovery.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 perspective-1000 relative z-10">
            {features.map((feature, i) => (
              <FadeInWhenVisible key={i}>
                <motion.div 
                  whileHover={{ 
                    y: -15,
                    rotateX: 2,
                    boxShadow: "0 25px 50px rgba(11, 95, 255, 0.15), 0 0 30px rgba(11, 95, 255, 0.25)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => handleOpenModal(feature)}
                  className="detail-card p-12 rounded-[40px] flex flex-col h-full bg-white text-center items-center group cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                    <feature.icon size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-text-primary">{feature.title}</h3>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-6">{feature.subtitle}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-10 flex-grow">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold border-t border-primary/5 pt-8 w-full justify-center">
                    Know More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section (Light Theme Refined) */}
      <section className="py-24 px-6 bg-section-alt border-y border-primary/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-16 rounded-[48px] border border-primary/10 text-center shadow-card relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient rounded-t-full" />
            <Lock className="w-16 h-16 text-primary mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6">Security & Data Sovereignty</h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-lg">
              WallahGPT is designed for secure, on-premises deployment. Proprietary compound structures 
              and patient data never leave your organization's firewall.
            </p>
            <div className="flex flex-wrap justify-center gap-12">
               <div className="flex flex-col items-center">
                  <Shield className="text-primary mb-2 w-8 h-8" />
                  <span className="text-sm font-bold uppercase tracking-widest">HIPAA Compliant</span>
               </div>
               <div className="flex flex-col items-center">
                  <Shield className="text-primary mb-2 w-8 h-8" />
                  <span className="text-sm font-bold uppercase tracking-widest">GDPR Ready</span>
               </div>
               <div className="flex flex-col items-center">
                  <Database className="text-primary mb-2 w-8 h-8" />
                  <span className="text-sm font-bold uppercase tracking-widest">On-Premises Option</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
             <h2 className="text-4xl font-bold mb-8">Integrated Research Workflow</h2>
             <div className="space-y-8">
               {[
                 { step: "01", title: "Target Identification", desc: "Identify mTOR dysregulation signatures and Alzheimer's risk factors using WallahGPT 1." },
                 { step: "02", title: "Synthetic Scaling", desc: "Generate 5,000 synthetic RNA-Seq profiles with WallahGPT 2 for privacy-safe model training." },
                 { step: "03", title: "Virtual HTS", desc: "Run a 60,000 compound screen in minutes to find lead candidates with high selectivity." }
               ].map((s, i) => (
                 <div key={i} className="flex gap-8 items-start">
                    <div className="text-5xl font-black text-primary/10 leading-none">{s.step}</div>
                    <div>
                      <h4 className="font-bold text-text-primary text-xl mb-2">{s.title}</h4>
                      <p className="text-text-secondary leading-relaxed">{s.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
          <div className="flex-1 bg-section-alt p-12 rounded-[40px] border border-primary/10">
              <h4 className="font-bold mb-8 flex items-center gap-2 text-primary text-sm uppercase tracking-widest">
                <Zap size={20} className="text-primary" /> The Business Impact
              </h4>
              <div className="space-y-6">
                 {[
                   { label: "Time to Results", value: "Seconds vs Months" },
                   { label: "Regulatory Friction", value: "Zero (Synthetic Data)" },
                   { label: "Infrastructure Cost", value: "Minimal Footprint" }
                 ].map((stat, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-primary/5 pb-4">
                     <span className="text-text-secondary font-medium">{stat.label}</span>
                     <span className="font-bold text-text-primary">{stat.value}</span>
                   </div>
                 ))}
              </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantage Section */}
      <section className="py-24 px-6 bg-section-alt border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight">The Strategic Advantage: <br /><span className="text-primary">Why WallahGPT?</span></h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                In a world of strict data regulations and high-stakes biological IP, **security is the first requirement**. WallahGPT is the only platform that combines high-fidelity simulation with absolute data sovereignty.
              </p>
              
              <div className="space-y-6">
                {[
                  { 
                    q: "Whom does it help?", 
                    a: "Data Scientists, Precision Medicine researchers, and organizations operating in jurisdictions with strict privacy mandates (HIPAA/GDPR) who need to scale their models without identifying patient data." 
                  },
                  { 
                    q: "Why should a client buy it?", 
                    a: "Because it removes the 'Data Bottleneck'. WallahGPT generates millions of synthetic data points that are statistically perfect, allowing for massive-scale training on-premises without regulatory friction." 
                  },
                  { 
                    q: "The Business Perspective", 
                    a: "It reduces the cost and risk of data acquisition. By simulating the 'Digital Discovery' lab, organizations can fail fast and pivot early, saving millions in physical assay costs and avoiding data breach liabilities." 
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5">
                    <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                      <Shield size={20} /> {item.q}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-text-primary p-12 rounded-[48px] shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                <h3 className="text-2xl font-bold mb-8 relative z-10">Data Sovereignty ROI</h3>
                <div className="space-y-10 relative z-10">
                   <div className="flex items-center gap-6">
                      <div className="text-4xl font-black text-primary">0%</div>
                      <div className="text-sm font-medium text-white/70">External Data Leakage Risk <br />(On-Premises Native)</div>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="text-4xl font-black text-primary">Zero</div>
                      <div className="text-sm font-medium text-white/70">Regulatory Friction <br />(Synthetic Data-Powered)</div>
                   </div>
                   <div className="pt-8 border-t border-white/10">
                      <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all">Secure Enterprise Access</button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        feature={selectedFeature} 
      />

      <Footer />
    </div>
  );
};
