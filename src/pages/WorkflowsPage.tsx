import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SnakePipeline, workflowData } from '../components/WorkflowPipeline';
import {
  Dna,
  FlaskConical,
  Cpu,
  Microscope,
} from 'lucide-react';



// ─── Page ─────────────────────────────────────────────────────────────────────

export const WorkflowsPage = () => {
  const [activeTab, setActiveTab] = useState(workflowData[0].id);

  const activeWorkflow = workflowData.find(w => w.id === activeTab)!;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <motion.h1
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Development <span className="text-primary">Workflows</span>
          </motion.h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Detailed operational pipelines for our core discovery platforms, from initial
            biological insight to clinical candidates.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {workflowData.map(w => (
            <button
              key={w.id}
              onClick={() => setActiveTab(w.id)}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center gap-3 ${
                activeTab === w.id
                  ? 'bg-white text-slate-900 shadow-xl border-2'
                  : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
              }`}
              style={activeTab === w.id ? { borderColor: w.color } : {}}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: activeTab === w.id ? `${w.color}22` : '#CBD5E1' }}
              >
                {w.id === 'biologics' && (
                  <Dna className="w-5 h-5" style={{ color: activeTab === w.id ? w.color : '#FFF' }} />
                )}
                {w.id === 'chemistry' && (
                  <FlaskConical className="w-5 h-5" style={{ color: activeTab === w.id ? w.color : '#FFF' }} />
                )}
                {w.id === 'wallah' && (
                  <Cpu className="w-5 h-5" style={{ color: activeTab === w.id ? w.color : '#FFF' }} />
                )}
                {w.id === 'pandaomics' && (
                  <Microscope className="w-5 h-5" style={{ color: activeTab === w.id ? w.color : '#FFF' }} />
                )}
              </div>
              {w.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Workflow title + description */}
            <div className="mb-16 text-center">
              <h2
                className="text-3xl font-black mb-4 inline-flex items-center gap-4"
                style={{ color: activeWorkflow.color }}
              >
                {activeWorkflow.name}
              </h2>
              <p className="text-slate-500 text-lg max-w-3xl mx-auto">
                {activeWorkflow.description}
              </p>
            </div>

            {/* ── Interactive Pipeline (snake layout) ────────────────────── */}
            <section className="mb-32">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-[2px] flex-grow bg-slate-200" />
                <h3 className="text-xl font-bold text-slate-400 uppercase tracking-[0.2em]">
                  Interactive Pipeline
                </h3>
                <div className="h-[2px] flex-grow bg-slate-200" />
              </div>

              <SnakePipeline workflow={activeWorkflow} />
            </section>

          </motion.div>
        </AnimatePresence>

        {/* Bottom summary section */}
        <motion.section
          className="mt-40 p-12 rounded-[40px] bg-slate-900 text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[100px] -z-0" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">
                Production Engine
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Biologics Discovery Platform provides the heavy lifting for multi-parameter
                optimization and regulatory-ready data packages.
              </p>
            </div>
            <div>
              <h4
                className="font-bold uppercase tracking-widest text-sm mb-6"
                style={{ color: '#00D1FF' }}
              >
                Design Engine
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Chemistry Quantis leverages expert chemical space navigation and synthesis
                planning to bridge the gap from concept to physical molecule.
              </p>
            </div>
            <div>
              <h4
                className="font-bold uppercase tracking-widest text-sm mb-6"
                style={{ color: '#7000FF' }}
              >
                Insight Engine
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                WallahGPT serves as the discovery launchpad, identifying high-value aging
                targets and generating large-scale synthetic datasets.
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />

      <style>{`
        .blueprint-grid {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  );
};