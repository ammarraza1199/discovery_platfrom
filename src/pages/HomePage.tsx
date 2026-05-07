import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BusinessModelsSection } from '../components/BusinessModelsSection';
import { Diamond, ArrowRight, Download, Dna, TestTube, Star, Hourglass, BarChart, Brain, FlaskConical, RefreshCw, Settings, Waves, Sparkles, Hospital, Microscope, Bot, Database } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FadeInWhenVisible } from '../components/FadeInWhenVisible';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [15, 9]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, -9]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div className="min-h-screen font-sans text-text-primary bg-white">
      <Navbar />
      
      {/* Combined Hero & Platform Section matching the image layout */}
      <section 
        onMouseMove={handleMouseMove}
        className="relative py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto overflow-hidden"
      >
        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-light-blue/10 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-16">
          {/* Left Column: Hero Text & 3D Grid */}
          <div className="flex flex-col">
            <FadeInWhenVisible>
              <motion.h1 
                className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Genesys <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">Quantis</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-text-secondary leading-relaxed mb-12 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Commercially-available end-to-end generative AI software and automation platform designed to improve the quality and productivity of pharmaceutical research.
              </motion.p>
            </FadeInWhenVisible>
            
            <div className="relative h-[400px] md:h-[600px] w-full perspective-[1000px] mt-8 overflow-hidden rounded-3xl">
              <motion.div 
                style={{ rotateX, rotateY, rotateZ: -12 }}
                className="absolute inset-0 flex items-center justify-center transform preserve-3d scale-75 md:scale-100 origin-left"
              >
                {[
                  { top: '10%', left: '10%', z: 0 },
                  { top: '30%', left: '30%', z: 20 },
                  { top: '50%', left: '50%', z: 40 },
                  { top: '40%', left: '10%', z: 60 },
                  { top: '60%', left: '30%', z: 80 },
                  { top: '80%', left: '50%', z: 100 },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-32 h-32 bg-gradient rounded-2xl shadow-glow opacity-80 border border-white/30 cursor-pointer`}
                    style={{
                      top: pos.top,
                      left: pos.left,
                      transform: `translateZ(${pos.z}px)`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotateX: 0,
                      rotateY: 0,
                      zIndex: 50,
                      boxShadow: '0 0 40px rgba(77,163,255,0.6)'
                    }}
                    transition={{
                      duration: 4 + i*0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm mix-blend-overlay flex items-center justify-center">
                       <Diamond className="w-10 h-10 text-white opacity-50" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column: Platform Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Col 1 */}
            <div className="flex flex-col gap-6">
              <div className="card p-4 rounded-3xl hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 bg-white/80 backdrop-blur-xl border border-primary/5">
                <h3 className="text-sm font-bold bg-primary text-white inline-block px-4 py-1.5 rounded-full mb-4 shadow-md">Biologics Discovery</h3>
                <div className="space-y-3">
                  <div className="group p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform"><Dna className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors">Target Identification</h4></div>
                    <p className="text-xs text-text-secondary pr-6">Neural-Bio Interface for gene resolution</p>
                  </div>
                  <Link to="/biologics-discovery" className="group block p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:-rotate-3 transition-transform"><TestTube className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors">Discovery Platform</h4></div>
                    <p className="text-xs text-text-secondary pr-6">In-silico simulation of biological experiments</p>
                  </Link>
                  <div className="group p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform"><Star className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors">Virtual Hit Screening</h4></div>
                    <p className="text-xs text-text-secondary pr-6">Predict binding affinities with XGBoost</p>
                  </div>
                </div>
              </div>

              <div className="card p-4 rounded-3xl hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 bg-white/80 backdrop-blur-xl border border-primary/5">
                <h3 className="text-sm font-bold bg-primary text-white inline-block px-4 py-1.5 rounded-full mb-4 shadow-md">WallahGPT (LLMs)</h3>
                <div className="space-y-3">
                  <div className="group p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform"><Hourglass className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors">WallahGPT1</h4></div>
                    <p className="text-xs text-text-secondary pr-6">Biological Aging Clock prediction</p>
                  </div>
                  <div className="group p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:-rotate-3 transition-transform"><BarChart className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors">WallahGPT2</h4></div>
                    <p className="text-xs text-text-secondary pr-6">Synthetic Omics Generator</p>
                  </div>
                  <Link to="/wallahgpt" className="group block p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform"><Brain className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors">WallahGPT3</h4></div>
                    <p className="text-xs text-text-secondary pr-6">Digital Drug Discovery simulation</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-6 z-10">
              <div className="card p-4 rounded-3xl hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 bg-white/80 backdrop-blur-xl border border-primary/5">
                <h3 className="text-sm font-bold bg-primary text-white inline-block px-4 py-1.5 rounded-full mb-4 shadow-md">Chemistry Quantis</h3>
                <div className="space-y-3">
                  <Link to="/chemistry-quantis" className="group block p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:-rotate-3 transition-transform"><FlaskConical className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors">MolSpace Explorer</h4></div>
                    <p className="text-xs text-text-secondary pr-6">High-dimensional projection of chemical spaces</p>
                  </Link>
                  <div className="group p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform"><RefreshCw className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors">Retrosynthetic Planning</h4></div>
                    <p className="text-xs text-text-secondary pr-6">Deep tree-search reverse synthetic routes</p>
                  </div>
                  <div className="group p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:-rotate-3 transition-transform"><Settings className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors">Generative Chemistry</h4></div>
                    <p className="text-xs text-text-secondary pr-6">AI ensemble generation for novel molecules</p>
                  </div>
                  <div className="group p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform"><Waves className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors">Alchemistry</h4></div>
                    <p className="text-xs text-text-secondary pr-6">Fast molecular dynamics simulation</p>
                  </div>
                  <div className="group p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform"><Sparkles className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors">Nacho01 Models</h4></div>
                    <p className="text-xs text-text-secondary pr-6">Fine-tuning workflows for GNNs & Transformers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-6 z-10">
              <div className="card p-4 rounded-3xl hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 bg-white/80 backdrop-blur-xl border border-primary/5">
                <h3 className="text-sm font-bold bg-primary text-white inline-block px-4 py-1.5 rounded-full mb-4 shadow-md">Medicine42</h3>
                <div className="space-y-3">
                  <div className="group p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:-rotate-6 transition-transform"><Hospital className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors flex items-center gap-2">inClinico <span className="text-[10px] bg-light-blue/20 text-primary px-2 py-0.5 rounded-full animate-pulse">Building...</span></h4></div>
                    <p className="text-xs text-text-secondary pr-6">Design and predict clinical trials</p>
                  </div>
                </div>
              </div>
              
              <div className="card p-4 rounded-3xl hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 bg-white/80 backdrop-blur-xl border border-primary/5">
                <h3 className="text-sm font-bold bg-primary text-white inline-block px-4 py-1.5 rounded-full mb-4 shadow-md">Science42</h3>
                <div className="space-y-3">
                  <div className="group p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform"><Microscope className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors flex items-center gap-2">DORA <span className="text-[10px] bg-light-blue/20 text-primary px-2 py-0.5 rounded-full animate-pulse">Building...</span></h4></div>
                    <p className="text-xs text-text-secondary pr-6">Multi-agent generative research assistant</p>
                  </div>
                </div>
              </div>

              <div className="card p-4 rounded-3xl hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 bg-white/80 backdrop-blur-xl border border-primary/5">
                <h3 className="text-sm font-bold bg-primary text-white inline-block px-4 py-1.5 rounded-full mb-4 shadow-md">LLM Assistants</h3>
                <div className="space-y-3">
                  <div className="group p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:-rotate-3 transition-transform"><Bot className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors flex items-center gap-2">Copilot <span className="text-[10px] bg-light-blue/20 text-primary px-2 py-0.5 rounded-full animate-pulse">Building...</span></h4></div>
                    <p className="text-xs text-text-secondary pr-6">Generative conversational agent</p>
                  </div>
                  <div className="group p-3 hover:bg-primary/5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div className="flex items-center gap-3 mb-1"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform"><Database className="w-6 h-6" /></div><h4 className="font-bold group-hover:text-primary transition-colors flex items-center gap-2">Data Warehouse <span className="text-[10px] bg-light-blue/20 text-primary px-2 py-0.5 rounded-full animate-pulse">Building...</span></h4></div>
                    <p className="text-xs text-text-secondary pr-6">Seamless enterprise-wide efficient data integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="mt-20 flex flex-col items-center justify-center gap-4 text-center">
           <div className="flex items-center gap-4">
              <span className="font-bold text-lg text-text-primary">Interested in learning more about Genesys Quantis?</span>
              <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-card hover:bg-primary/90 transition-colors">Contact Us</button>
           </div>
        </div>
      </section>

      {/* 2-page overview section */}
      <section className="bg-section-alt py-16 text-center border-y border-primary/10">
        <h2 className="text-2xl font-bold mb-8">Discovery Platform 2-page overview</h2>
        <div className="flex flex-col items-center gap-4">
          <ArrowRight className="w-6 h-6 text-primary rotate-90" />
          <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-card hover:bg-primary/90 transition-colors flex items-center gap-2">
            <Download className="w-5 h-5" /> Download
          </button>
        </div>
      </section>

      <BusinessModelsSection />
      <Footer />
    </div>
  );
};
