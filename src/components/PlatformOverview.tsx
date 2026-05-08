
import { Diamond, Dna, FlaskConical, Brain, Bot, Star } from 'lucide-react';
import { FadeInWhenVisible } from './FadeInWhenVisible';

export const PlatformOverview = () => {
  return (
    <section id="platform" className="bg-section-alt py-24">
      <div className="section pt-0 pb-0">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our AI Drug Discovery Ecosystem</h2>
          <p className="text-text-secondary text-lg">End-to-end AI platform combining generative biology, chemistry modeling, and multimodal life models.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left 3D Visual Mock */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px]">
             <div className="relative w-64 h-64 bg-gradient rounded-full shadow-glow animate-float flex items-center justify-center">
               <div className="w-48 h-48 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <Diamond className="w-20 h-20 text-white opacity-80" />
               </div>
             </div>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeInWhenVisible delay={0.1}>
              <div className="card p-8 rounded-2xl border-l-4 border-l-primary h-full">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-primary"><Dna className="w-6 h-6" /> Biology AI</h3>
                <ul className="space-y-3 font-medium text-text-secondary">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> GQ Discovery</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Protein Design</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Virtual Hit Screening</li>
                </ul>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <div className="card p-8 rounded-2xl border-l-4 border-l-primary h-full">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-primary"><FlaskConical className="w-6 h-6" /> Chemistry AI</h3>
                <ul className="space-y-3 font-medium text-text-secondary">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> GQ Chemistry</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Retrosynthetic Planning</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> MolSpace Explorer</li>
                </ul>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <div className="card p-8 rounded-2xl border-l-4 border-l-primary h-full">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-primary"><Brain className="w-6 h-6" /> Foundation Models</h3>
                <ul className="space-y-3 font-medium text-text-secondary">
                  <li className="flex items-center gap-2 text-primary font-bold"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> GQ GPT <Star className="w-3 h-3 fill-primary" /></li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Synthetic Omics</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Digital Drug Discovery</li>
                </ul>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
              <div className="card p-8 rounded-2xl border-l-4 border-l-primary h-full">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-primary"><Bot className="w-6 h-6" /> AI Assistants</h3>
                <ul className="space-y-3 font-medium text-text-secondary">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Research Copilot</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Data Integration Engine</li>
                </ul>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
};
