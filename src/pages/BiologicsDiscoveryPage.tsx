import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FeatureDetailModal } from '../components/FeatureDetailModal';
import { InteractiveHeroBackground } from '../components/InteractiveHeroBackground';
import { 
  Dna, Search, Zap, FlaskConical, ShieldCheck, 
  Bot, ArrowRight, Shield, CheckCircle, ChevronRight,
  MousePointer2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInWhenVisible } from '../components/FadeInWhenVisible';
import { SnakePipeline, workflowData } from '../components/WorkflowPipeline';

export const BiologicsDiscoveryPage = () => {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      id: 'target-id',
      title: 'Target Identification',
      subtitle: 'Neural-Bio Interface',
      icon: Dna,
      description: 'Mapping gene symbols to UniProt dossiers with AlphaFold fallback logic.',
      fullExplanation: [
        "The Target Identification module uses a specialized Neural-Bio Interface to resolve genomic symbols into detailed biochemical dossiers. By integrating UniProtKB and RCSB PDB databases, the system builds a comprehensive map of the biological target.",
        "In cases where experimental 3D structures are missing, the platform automatically triggers an AlphaFold-powered fallback mechanism to predict high-accuracy protein folding. The algorithm then utilizes geometric deep learning to identify potential binding pockets and calculate quantitative druggability scores based on steric and electrostatic complementarity."
      ],
      capabilities: [
        "UniProtKB & PDB Integration",
        "AlphaFold Protein Folding",
        "Geometric Pocket Discovery",
        "Druggability Probability Scoring",
        "Functional Domain Mapping"
      ]
    },
    {
      id: 'hit-screening',
      title: 'Virtual Hit Screening',
      subtitle: 'XGBoost Triage',
      icon: Search,
      description: '2,400D mathematical fingerprinting for high-accuracy binding prediction.',
      fullExplanation: [
        "Our Virtual Hit Screening engine performs compound triage at astronomical scales. By representing molecules using 2,400-dimensional mathematical fingerprints, the system captures subtle chemical nuances that traditional methods miss.",
        "The core logic is powered by XGBoost models trained on a proprietary dataset of over 100 million assay results. This allows the system to predict binding affinities with sub-nanomolar accuracy, significantly reducing the pool of candidates for physical screening."
      ],
      capabilities: [
        "2,400D Vector Fingerprinting",
        "XGBoost Affinity Prediction",
        "Real-time Streaming Triage",
        "Fragment-based Library Search",
        "Scaffold Diversity Enforcement"
      ]
    },
    {
      id: 'docking',
      title: 'Molecular Docking',
      subtitle: 'Physics-Based Simulation',
      icon: FlaskConical,
      description: 'Thermodynamic binding simulation using AutoDock Vina & Monte Carlo search.',
      fullExplanation: [
        "The Molecular Docking engine simulates the physical reality of ligand-receptor interactions. Utilizing the AutoDock Vina engine, the system performs a Monte Carlo search across the target's conformational space to identify the most stable binding poses.",
        "Each pose is evaluated using a physics-based scoring function that calculates Delta-G free energy, accounting for hydrogen bonding, van der Waals forces, and electrostatic interactions. The results are visualized in a high-performance GL-rendered 3D viewport."
      ],
      capabilities: [
        "AutoDock Vina Engine",
        "Monte Carlo Conformational Search",
        "Free Energy (Delta-G) Calculation",
        "3D Binding Visualization",
        "Binding Affinity Ranking"
      ]
    },
    {
      id: 'lead-opt',
      title: 'Lead Optimization',
      subtitle: 'Generative Evolutionary AI',
      icon: Zap,
      description: 'AI-driven molecular evolution with strict Synthetic Accessibility (SA) enforcement.',
      fullExplanation: [
        "Lead Optimization transforms hits into clinical candidates through a generative evolutionary process. Our Genetic Algorithm mutates molecules through crossover and point-mutations to optimize for multiple parameters simultaneously.",
        "Crucially, the system strictly enforces Synthetic Accessibility (SA) scores at every generation. This ensures that the AI-designed molecules aren't just theoretically effective, but can be reliably synthesized in a standard wet-lab environment."
      ],
      capabilities: [
        "Genetic Algorithm Evolution",
        "Multi-Parameter Optimization (MPO)",
        "SA Score Enforcement",
        "SAR Trend Tracking",
        "Bioisosteric Replacements"
      ]
    },
    {
      id: 'admet',
      title: 'ADMET Intelligence',
      subtitle: 'GNN Property Prediction',
      icon: ShieldCheck,
      description: 'Automated pharmacology & toxicity profiling via Graph Neural Networks.',
      fullExplanation: [
        "The ADMET module provides early-phase safety profiling using state-of-the-art Graph Neural Networks (GNNs). By treating molecules as dynamic graphs, the system identifies structural motifs responsible for toxicity or poor bioavailability.",
        "The models predict critical metrics such as Blood-Brain Barrier (BBB) penetration, hERG channel inhibition (cardiotoxicity), and CYP450 metabolic profiles. This 'Safety-First' approach ensures that developers identify potential failures before they reach expensive clinical trials."
      ],
      capabilities: [
        "GNN Toxicity Detection",
        "BBB Penetration Prediction",
        "hERG Inhibition Risk",
        "CYP450 Metabolism Profiling",
        "Pharmacokinetic Radar Maps"
      ]
    },
    {
      id: 'robotic',
      title: 'Robotic Validation',
      subtitle: 'Opentrons OT-2 Sync',
      icon: Bot,
      description: 'Direct bridge from in-silico prediction to automated wet-lab validation.',
      fullExplanation: [
        "Robotic Validation closes the loop between the digital and physical laboratories. The system natively integrates with Opentrons OT-2 liquid handlers by automatically generating executable Python protocols based on the platform's predictions.",
        "This seamless transition eliminates human transcription errors and enables high-throughput blinded assays for hit confirmation. The platform tracks the results of these experiments, feeding the physical data back into the AI models for continuous learning."
      ],
      capabilities: [
        "OT-2 Native Integration",
        "Auto-Protocol Compilation",
        "High-Throughput Assay Sync",
        "Error-Free Lab Transition",
        "Continuous Learning Loop"
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
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
            >
              <MousePointer2 size={14} className="text-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Interactive Platform Demo</span>
            </motion.div>

            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-6xl md:text-8xl font-extrabold mb-8 leading-[0.9] tracking-tighter text-text-primary"
            >
              GQ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">Discovery 2.0</span>
            </motion.h1>

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-xl text-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed"
            >
              The enterprise operating system for drug discovery. <br />
              Bridging the gap from genomic hypothesis to validated lab protocols.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="flex flex-wrap justify-center gap-6"
            >
              <button className="px-10 py-5 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-all flex items-center gap-3">
                Download Technical Brochure <ArrowRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/40 to-transparent" />
        </motion.div>
      </section>

      {/* Detailed Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Core Capability Modules</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Click on any module to explore its scientific methodology, technical documentation, and demo videos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000 relative z-10">
            {features.map((feature, i) => (
              <FadeInWhenVisible key={i}>
                <motion.div 
                  whileHover={{ 
                    y: -12,
                    rotateX: 2,
                    boxShadow: "0 20px 40px rgba(11, 95, 255, 0.12), 0 0 20px rgba(11, 95, 255, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => handleOpenModal(feature)}
                  className="detail-card p-10 rounded-[40px] flex flex-col h-full bg-white group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-text-primary">{feature.title}</h3>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-6">{feature.subtitle}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-10 flex-grow">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold border-t border-primary/5 pt-6 w-full">
                    Know More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Visualization (Interactive Snake Pipeline) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Operational Pipeline</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From target identification to clinical candidate selection — an unbroken digital chain.
            </p>
          </div>
          
          <SnakePipeline workflow={workflowData.find(w => w.id === 'biologics')!} />
        </div>
      </section>

      {/* Strategic Value */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-white border border-primary/10 rounded-[40px] p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Strategic Business <br /> Outcomes</h2>
              <div className="space-y-8">
                {[
                  { title: "Timeline Compression", value: "85%", desc: "Reduction in target-to-hit discovery cycles via AI parallelization." },
                  { title: "Cost Efficiency", value: "100X", desc: "Reduction in marginal screening costs compared to physical HTS." },
                  { title: "Risk Mitigation", value: "60%", desc: "Improvement in clinical candidate quality via early ADMET profiling." }
                ].map((stat, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <div className="text-4xl font-black text-primary leading-none min-w-[100px]">{stat.value}</div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-1">{stat.title}</h4>
                      <p className="text-text-secondary text-sm">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full flex items-center">
              <div className="bg-section-alt p-10 rounded-[40px] border border-primary/10 w-full">
                <h4 className="text-primary font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                  <Shield size={20} /> Regulatory Compliance
                </h4>
                <p className="text-text-secondary text-lg leading-relaxed mb-8 italic">
                  "The platform successfully bridges the gap from genomic hypothesis to a validated, lab-ready protocol. The integration of SA scores is a masterclass in realistic drug design."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/10" />
                  <div>
                    <div className="text-sm font-bold">Independent Scientific Auditor</div>
                    <div className="text-xs text-text-secondary">Global Pharma Standards Council</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Mandate Section */}
      <section className="py-24 px-6 bg-section-alt border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight">The Strategic Mandate: <br /><span className="text-primary">Why GenQuantis?</span></h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Modern drug discovery is no longer limited by scientific hypothesis, but by operational velocity. GenQuantis is designed as an enterprise infrastructure to solve the three core challenges of modern pharma.
              </p>
              
              <div className="space-y-6">
                {[
                  { 
                    q: "Whom does it help?", 
                    a: "Project Leads, CTOs, and R&D Directors who need to transition from fragmented ad-hoc tools to a unified, scalable 'Drug Operating System'." 
                  },
                  { 
                    q: "Why should a client buy it?", 
                    a: "To eliminate the data silos between Target ID and Validation. BDP 2.0 provides an unbroken digital chain that compresses discovery timelines by 85%." 
                  },
                  { 
                    q: "The Business Perspective", 
                    a: "It turns R&D from a high-risk cost center into a predictable, AI-driven discovery engine with a 60% improvement in clinical candidate quality." 
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5">
                    <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                      <CheckCircle size={18} /> {item.q}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-12 rounded-[48px] shadow-card border border-primary/10">
                <h3 className="text-2xl font-bold mb-6">The ROI of Digitalization</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-sm">Pipeline Velocity</span>
                      <span className="text-primary font-bold">8.5x Faster</span>
                    </div>
                    <div className="w-full h-2 bg-section-alt rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-sm">Marginal Screening Cost</span>
                      <span className="text-primary font-bold">100x Lower</span>
                    </div>
                    <div className="w-full h-2 bg-section-alt rounded-full overflow-hidden">
                      <div className="w-[99%] h-full bg-primary" />
                    </div>
                  </div>
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 mt-8">
                     <p className="text-sm text-text-secondary italic">
                       "BDP 2.0 isn't just a suite of tools; it is a competitive necessity for any organization aiming to lead in the age of generative biology."
                     </p>
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
