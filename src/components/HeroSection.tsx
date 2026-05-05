
import { Diamond, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInWhenVisible } from './FadeInWhenVisible';

export const HeroSection = () => {
  return (
    <section className="section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
      <FadeInWhenVisible>
        <div className="flex flex-col gap-6 items-start">
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
            <Diamond className="w-4 h-4 fill-primary" /> AI Drug Discovery Platform
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            AI-Powered Drug Discovery & <span className="text-gradient">Biological Intelligence</span> Platform
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            Accelerate research, design novel molecules, and unlock next-generation therapeutics using AI-driven models and simulation systems.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <button className="bg-gradient text-white px-8 py-3.5 rounded-full font-semibold shadow-card hover:shadow-glow transition-all flex items-center gap-2">
              Get Demo <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-primary/20 text-primary hover:border-primary px-8 py-3.5 rounded-full font-semibold transition-all">
              Explore Platform
            </button>
          </div>
          <div className="pt-8 border-t border-primary/10 w-full mt-4 flex gap-6 items-center opacity-70 grayscale">
            <span className="font-bold text-xl">NATURE</span>
            <span className="font-bold text-xl">FDA</span>
            <span className="font-bold text-xl">CELL</span>
            <span className="font-bold text-xl">SCIENCE</span>
          </div>
        </div>
      </FadeInWhenVisible>
      
      <div className="relative h-[500px] w-full hidden lg:block perspective-[1000px]">
        <div className="absolute inset-0 flex items-center justify-center transform rotate-x-12 rotate-z-[-12deg] preserve-3d">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-32 h-32 bg-gradient rounded-2xl shadow-glow opacity-80 border border-white/20`}
              style={{
                top: `${10 + (i%2)*30}%`,
                left: `${20 + i*15}%`,
                transform: `translateZ(${i*20}px)`,
              }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4 + i*0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            >
              <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm mix-blend-overlay"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
