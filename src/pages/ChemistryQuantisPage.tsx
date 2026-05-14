import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FeatureDetailModal } from '../components/FeatureDetailModal';
import { InteractiveHeroBackground } from '../components/InteractiveHeroBackground';
import { 
  FlaskConical, Layers, Brain, Waves as WavesIcon, 
  GitBranch, FileSearch, Sparkles, ChevronRight,
  MousePointer2, ArrowRight, Database, Cpu, Activity, Search, Network, FileText, Shield, ShieldCheck, Zap, RefreshCw, CheckCircle



} from 'lucide-react';




import { motion } from 'framer-motion';
import { FadeInWhenVisible } from '../components/FadeInWhenVisible';
import { SnakePipeline, workflowData } from '../components/WorkflowPipeline';
import { ThreeStepProcess } from '../components/ThreeStepProcess';
import { MoleculeIcon } from '../components/ScientificIcons';







export const ChemistryQuantisPage = () => {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMethodologyIndex, setActiveMethodologyIndex] = useState(0);

  const Target = ({ className, size }: { className?: string, size?: number }) => (
    <Search className={className} size={size} />
  );


  const features = [
    {
      id: 'pace',
      title: 'PACE Intelligence',
      subtitle: 'Patent Extraction AI',
      icon: FileSearch,
      description: 'Advanced NLP extraction of SMILES and SAR data from chemical patents.',
      fullExplanation: [
        "PACE (Patent-Assisted Chemical Extraction) uses a sophisticated ensemble of OCR and Natural Language Processing (NLP) models to 'read' pharmaceutical patents. It identifies chemical structures, assay results, and SAR (Structure-Activity Relationship) tables embedded within unstructured text.",
        "The engine automatically converts these extractions into standard SMILES strings and machine-readable data frames. This allows researchers to perform competitive intelligence and build proprietary databases from publicly available literature in seconds rather than months."
      ],
      capabilities: [
        "Automated OCR for Chemical PDFS",
        "NLP-based SAR Table Extraction",
        "Direct SMILES String Conversion",
        "Competitive Intelligence Hub",
        "Literature-to-Data Pipeline"
      ],
      processData: {
        input: {
          title: "Literature Ingestion",
          items: [
            { label: "Patent PDFs", icon: FileText, description: "Unstructured chemical patent literature." },
            { label: "Scientific Papers", icon: Search, description: "Peer-reviewed journals and documentation." },
            { label: "SAR Context", icon: Layers, description: "Historical structure-activity relationship metadata." }
          ]

        },
        processing: {
          title: "PACE AI Engine",
          groups: [
            {
              title: "Extraction",
              items: [
                { label: "OCR Ensemble", icon: Cpu },
                { label: "NLP Structure ID", icon: Brain },
                { label: "Diagram Parsing", icon: Layers },
                { label: "Job Registration", icon: Zap }
              ]
            },
            {
              title: "Conversion",
              items: [
                { label: "SMILES Generation", icon: Activity },
                { label: "SAR Mapping", icon: Database },
                { label: "Potency Extraction", icon: Target },
                { label: "IP Classification", icon: Shield }
              ]
            }
          ]
        },

        output: {
          title: "Intelligence Hub",
          items: [
            { label: "Potency Tables", icon: Database, description: "Machine-readable SAR datasets." },
            { label: "Chemical IP Map", icon: Network, description: "Competitive landscape visualization." },
            { label: "Priority Leads", icon: CheckCircle, description: "Identified high-interest candidates for screening." }
          ]

        }
      }
    },

    {
      id: 'molspace',
      title: 'MolSpace Explorer',
      subtitle: 'Chemical Space Visualization',
      icon: Layers,
      description: 'UMAP-based navigation of high-dimensional molecular libraries.',
      fullExplanation: [
        "MolSpace Explorer provides a bird's-eye view of vast chemical libraries. By utilizing UMAP (Uniform Manifold Approximation and Projection) dimensionality reduction, the platform projects 2048-bit Morgan Fingerprints into a navigable 2D or 3D space.",
        "Researchers can identify novel 'neighborhoods' of molecules that are structurally distinct from known hits, ensuring maximum diversity in the screening funnel. The interactive interface allows for real-time clustering and subset selection of multi-million compound libraries."
      ],
      capabilities: [
        "UMAP Dimensionality Reduction",
        "2048-bit Morgan Fingerprinting",
        "Library Diversity Clustering",
        "Interactive Space Navigation",
        "Neighborhood-based Search"
      ],
      processData: {
        input: {
          title: "Library Upload",
          items: [
            { label: "Molecular Libraries", icon: Database, description: "Vast collections of SMILES or SDF files." },
            { label: "Query Molecules", icon: Search, description: "Lead structures for neighborhood search." },
            { label: "Design Constraints", icon: Target, description: "Specific physicochemical property filters." }
          ]

        },
        processing: {
          title: "MolSpace Analysis",
          groups: [
            {
              title: "Fingerprinting",
              items: [
                { label: "2048-bit Morgan", icon: Cpu },
                { label: "Vector Encoding", icon: MoleculeIcon },
                { label: "Canonicalization", icon: RefreshCw },
                { label: "RDKit Validation", icon: ShieldCheck }
              ]
            },
            {
              title: "Projection",
              items: [
                { label: "UMAP Projection", icon: MoleculeIcon },
                { label: "Jaccard Distance", icon: Brain },
                { label: "Manifold Mapping", icon: Layers },
                { label: "Cluster ID", icon: Network }
              ]
            }
          ]
        },


        output: {
          title: "Navigable Space",
          items: [
            { label: "3D Molecular Maps", icon: Layers, description: "Interactive high-dimensional projections." },
            { label: "Diversity Report", icon: Activity, description: "Statistical analysis of library coverage." }
          ]
        }
      }
    },

    {
      id: 'generative',
      title: 'Generative Chemistry',
      subtitle: 'AI Ensemble Engine',
      icon: Sparkles,
      description: 'Multi-architecture molecular design with a 9-step physics reward engine.',
      fullExplanation: [
        "Our Generative Chemistry engine is an ensemble of LSTMs, Variational Autoencoders (VAEs), and Transformers. It doesn't just generate random molecules; it designs them with specific pharmacological intent.",
        "Every generated structure is passed through a rigorous 9-step reward engine. This engine evaluates the molecule against physics-based constraints, synthetic accessibility, and target-specific pharmacokinetic requirements (e.g., LogP, polar surface area) before presenting it to the chemist."
      ],
      capabilities: [
        "Transformer-based De Novo Design",
        "9-step Physics Reward Engine",
        "Pharmacokinetic Constraint Logic",
        "Scaffold Morphing & Decoration",
        "Targeted Diversity Generation"
      ],
      processData: {
        input: {
          title: "Design Constraints",
          items: [
            { label: "Target Profiles", icon: Target, description: "Desired pharmacokinetic properties (LogP, PSA)." },
            { label: "Active Scaffolds", icon: Sparkles, description: "Seed molecules for generative design." }
          ]
        },
        processing: {
          title: "Generative Engine",
          groups: [
            {
              title: "AI Ensemble",
              items: [
                { label: "LSTM Sequence", icon: Cpu },
                { label: "VAE Latent Space", icon: Layers },
                { label: "Transformer Logic", icon: Brain },
                { label: "Architecture Pool", icon: Zap }
              ]
            },
            {
              title: "Reward Engine",
              items: [
                { label: "9-Step Physics", icon: Sparkles },
                { label: "Lipinski Filter", icon: ShieldCheck },
                { label: "ADMET Prediction", icon: Activity },
                { label: "Synthesis Check", icon: Target }
              ]
            }
          ]
        },

        output: {
          title: "Optimized Leads",
          items: [
            { label: "Novel Scaffolds", icon: MoleculeIcon, description: "Synthetically accessible lead candidates." },
            { label: "PK radar maps", icon: Activity, description: "Property-matched candidate profiles." }
          ]
        }
      }
    },

    {
      id: 'gnn_transformers',
      title: 'GNN and Transformers',
      subtitle: 'Transfer Learning Hub',
      icon: Brain,
      description: 'Fine-tuning pre-trained GNNs and Transformers on project-specific data.',
      fullExplanation: [
        "GNN and Transformers represents our foundation model hub for chemistry. It contains pre-trained Graph Neural Network (GNN) and Message Passing Neural Network (MPNN) architectures that have already learned the basic 'language' of chemical properties.",
        "Researchers can take these foundation models and perform 'transfer learning' using project-specific small data. This allows for high-accuracy property prediction even when only a few dozen experimental data points are available, a common bottleneck in early-phase discovery."
      ],
      capabilities: [
        "Pre-trained GNN Architectures",
        "Message Passing (MPNN) Models",
        "Project-specific Fine-tuning",
        "Small Data Property Prediction",
        "Model Confidence Scoring"
      ],
      processData: {
        input: {
          title: "Foundation Input",
          items: [
            { label: "Pre-trained Models", icon: Brain, description: "GNNs and Transformers trained on base chemistry." },
            { label: "Project Small Data", icon: Database, description: "Minimal experimental points for fine-tuning." }
          ]
        },
        processing: {
          title: "Transfer Learning",
          groups: [
            {
              title: "Fine-tuning",
              items: [
                { label: "Project Calibration", icon: Activity },
                { label: "Weight Adjustment", icon: Cpu }
              ]
            },
            {
              title: "Inference",
              items: [
                { label: "Property Prediction", icon: Search },
                { label: "Confidence Triage", icon: Shield }
              ]
            }
          ]
        },
        output: {
          title: "Project Model",
          items: [
            { label: "Calibrated Engine", icon: Sparkles, description: "High-accuracy model for specific targets." },
            { label: "Prediction Dossier", icon: FileText, description: "Results with uncertainty quantification." }
          ]
        }
      }
    },

    {
      id: 'alchemistry',
      title: 'GQ AI Chemistry',
      subtitle: 'Molecular Dynamics',
      icon: WavesIcon,
      description: 'GPU-accelerated Delta-G binding energy calculations via OpenMM.',
      fullExplanation: [
        "Alchemistry brings high-performance Molecular Dynamics (MD) to the workbench. Utilizing the OpenMM engine and the AMBER14 force field, it simulates the thermodynamic movement of molecules at physiological body temperatures.",
        "The system is specifically optimized for calculating Delta-G binding free energy with GPU acceleration (CUDA and OpenCL). This provides chemists with an 'In-Silico Assay' that predicts how strongly a molecule will actually bind in a real-world biological environment."
      ],
      capabilities: [
        "OpenMM GPU Acceleration",
        "AMBER14 Force Field Logic",
        "Delta-G Binding Energy (FEP)",
        "Physiological Temp Simulation",
        "Solvent-Aware Dynamic Mapping"
      ],
      processData: {
        input: {
          title: "Simulation Prep",
          items: [
            { label: "Lead Candidate", icon: MoleculeIcon, description: "3D structure of the potential drug." },
            { label: "Target Environment", icon: WavesIcon, description: "Solvent and physiological parameters." }
          ]
        },
        processing: {
          title: "Physics Pipeline",
          groups: [
            {
              title: "Force Field",
              items: [
                { label: "AMBER14 Params", icon: Layers },
                { label: "TIP3P Solvent", icon: WavesIcon },
                { label: "Langevin Dynamics", icon: Activity },
                { label: "300K Simulation", icon: Zap }
              ]
            },
            {
              title: "Thermodynamics",
              items: [
                { label: "NES Free Energy", icon: Sparkles },
                { label: "Delta-G Calculation", icon: Target },
                { label: "RMSD Tracking", icon: Network },
                { label: "Equilibrium Check", icon: ShieldCheck }
              ]
            }
          ]
        },

        output: {
          title: "Dynamic Profile",
          items: [
            { label: "Binding Free Energy", icon: Activity, description: "Quantitative thermodynamic stability." },
            { label: "Movement Maps", icon: WavesIcon, description: "Visual trajectory of binding event." }
          ]
        }
      }
    },


    {
      id: 'retrosynthesis',
      title: 'Retrosynthesis',
      subtitle: 'Synthetic Route Planning',
      icon: GitBranch,
      description: 'Deep tree-search route generation using Nobel-Prize winning disconnections.',
      fullExplanation: [
        "The Retrosynthetic Planning module answers the critical question: 'Can we build this?' By utilizing deep tree-search algorithms and Nobel Prize-winning chemical disconnection methodologies, it maps out step-by-step synthetic routes.",
        "The system automatically checks proposed routes against databases of commercially available building blocks and standard reaction templates. It provides multiple synthetic paths ranked by difficulty, cost, and number of steps, allowing chemists to choose the most efficient path to the lab."
      ],
      capabilities: [
        "Deep Tree-Search Planning",
        "Disconnection Site Analysis",
        "Building Block Availability Check",
        "Multi-path Synthetic Options",
        "Reaction Template Matching"
      ],
      processData: {
        input: {
          title: "Target Molecule",
          items: [
            { label: "Lead Candidate", icon: MoleculeIcon, description: "The molecule to be synthesized." },
            { label: "Commercial Blocks", icon: Database, description: "Catalog of available starting materials." }
          ]
        },
        processing: {
          title: "Synthetic Planning",
          groups: [
            {
              title: "Logic",
              items: [
                { label: "Deep Tree Search", icon: GitBranch },
                { label: "Disconnection AI", icon: Brain }
              ]
            },
            {
              title: "Verification",
              items: [
                { label: "Reaction Templating", icon: Activity },
                { label: "Cost Analysis", icon: Database }
              ]
            }
          ]
        },
        output: {
          title: "Synthetic Routes",
          items: [
            { label: "Ranked Routes", icon: GitBranch, description: "Step-by-step assembly instructions." },
            { label: "Availability Map", icon: Database, description: "Logistics for reagent procurement." }
          ]
        }
      }
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
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <InteractiveHeroBackground />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
              >
                <MousePointer2 size={14} className="text-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Advanced Workbench 1.0</span>
              </motion.div>

              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-6xl md:text-8xl font-extrabold mb-8 leading-[0.9] tracking-tighter text-text-primary"
              >
                GQ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">Chemistry</span>
              </motion.h1>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-xl text-text-secondary mb-12 leading-relaxed max-w-lg"
              >
                The unified computational workspace for the modern medicinal chemist. 
                Literature extraction, MolSpace navigation, and fast MD simulation.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className="flex flex-wrap gap-4"
              >
                <button className="px-10 py-5 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-all flex items-center gap-3">
                  Launch Platform <ArrowRight size={20} />
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block -z-10"
            >
              <div className="aspect-square w-[600px] bg-white/60 backdrop-blur-xl rounded-[100px] shadow-card border border-primary/10 flex items-center justify-center p-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <FlaskConical className="w-48 h-48 text-primary animate-float" />
                
                {/* Floating decorative tags */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-20 right-20 bg-white px-6 py-3 rounded-2xl shadow-lg border border-primary/5 text-[12px] font-bold text-primary"
                >
                  SMILES EXTRACTION
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute bottom-32 left-10 bg-white px-6 py-3 rounded-2xl shadow-lg border border-primary/5 text-[12px] font-bold text-primary"
                >
                  OPENMM ACCELERATION
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-10 flex items-center gap-4"
        >
          <div className="w-12 h-px bg-primary/20" />
          <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest rotate-90 origin-left">Scroll</span>
        </motion.div>
      </section>

      {/* Modules Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Scientific Modules</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Deep-tech tools for molecular design and synthesis planning.</p>
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
                  <p className="text-text-secondary text-sm leading-relaxed mb-10 flex-grow break-words">
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

      {/* Methodology Section - The 3 Step Process requested by USER */}
      <section className="py-24 bg-white border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Operational Methodology</h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-12">
              Explore the technical workflows behind GQ Chemistry. From automated patent extraction to deep retrosynthetic planning.
            </p>

            {/* Feature Selector for Methodology */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {features.filter(f => f.processData).map((feature, idx) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveMethodologyIndex(idx)}
                  className={`px-6 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 border ${
                    activeMethodologyIndex === idx 
                    ? 'bg-primary text-white border-primary shadow-glow scale-105' 
                    : 'bg-white text-text-secondary border-primary/10 hover:border-primary/30'
                  }`}
                >
                  <feature.icon size={20} />
                  {feature.title}
                </button>
              ))}
            </div>
          </div>
          
          <motion.div
            key={activeMethodologyIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ThreeStepProcess 
              title={features.filter(f => f.processData)[activeMethodologyIndex].title + " Pipeline"}
              subtitle={features.filter(f => f.processData)[activeMethodologyIndex].subtitle}
              context={activeMethodologyIndex === 1 || activeMethodologyIndex === 0 ? 'compute' : 'biology'}
              variant="loop"


              input={features.filter(f => f.processData)[activeMethodologyIndex].processData!.input}
              processing={features.filter(f => f.processData)[activeMethodologyIndex].processData!.processing}
              output={features.filter(f => f.processData)[activeMethodologyIndex].processData!.output}
            />


          </motion.div>

        </div>
      </section>

      {/* Process Visualization (Interactive Snake Pipeline) */}

      <section className="py-24 bg-slate-50 border-y border-primary/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Quantis Pipeline</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Expert-level chemical space navigation and generative design engine.
            </p>
          </div>
          
          <SnakePipeline workflow={workflowData.find(w => w.id === 'chemistry')!} />
        </div>
      </section>

      <section className="py-24 px-6 bg-section-alt border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative">
               <div className="bg-white p-10 rounded-[48px] shadow-card border border-primary/10 sticky top-32">
                  <h3 className="text-2xl font-bold mb-8">Synthesis Velocity</h3>
                  <div className="space-y-6">
                     <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/5">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm"><FileSearch className="text-primary" /></div>
                        <div>
                           <div className="text-xs font-black uppercase tracking-tighter text-primary">Patent Triage</div>
                           <div className="text-sm font-bold">Minutes vs Weeks</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/5">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm"><GitBranch className="text-primary" /></div>
                        <div>
                           <div className="text-xs font-black uppercase tracking-tighter text-primary">Route Planning</div>
                           <div className="text-sm font-bold">Real-time Generation</div>
                        </div>
                     </div>
                     <div className="mt-8 p-6 bg-text-primary text-white rounded-3xl">
                        <p className="text-xs font-medium leading-relaxed">
                          "Quantis 1.0 provides the medicinal chemist with an unfair advantage. It identifies the gaps in IP landscapes and the fastest routes to fill them."
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-4xl font-bold leading-tight">The Competitive Edge: <br /><span className="text-primary">Why Quantis 1.0?</span></h2>
              
              <div className="space-y-8">
                {[
                  { 
                    q: "Whom does it help?", 
                    a: "Medicinal Chemists and Competitive Intelligence teams who need to navigate the high-stakes world of small-molecule discovery with speed and IP precision." 
                  },
                  { 
                    q: "Why should a client buy it?", 
                    a: "Because AI-driven chemistry is no longer optional. Quantis automates the most labor-intensive parts of the workbench—literature extraction and retrosynthetic planning." 
                  },
                  { 
                    q: "The Business Perspective", 
                    a: "It maximizes Intellectual Property (IP) value by identifying novel chemical scaffolds (via MolSpace) that avoid competitor patents and ensure high clinical potential." 
                  }
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-text-primary text-xl mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" /> {item.q}
                    </h4>
                    <p className="text-text-secondary leading-relaxed pl-4 border-l-2 border-primary/10">{item.a}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                  <a href="https://genquantis.com/contact##" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-glow hover:bg-primary/90 transition-all inline-block">Request Demo</a>
                 <button className="px-8 py-3 bg-white text-primary border border-primary/20 rounded-full font-bold hover:bg-section-alt transition-all">Scientific PDF</button>
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
