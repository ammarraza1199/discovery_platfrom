import React from 'react';
import { motion } from 'framer-motion';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType; // Using ElementType instead of LucideIcon
  details?: string[];
}

interface PremiumWorkflowProps {
  steps: WorkflowStep[];
  color?: string;
}

export const PremiumWorkflow: React.FC<PremiumWorkflowProps> = ({ 
  steps, 
  color = "#0B5FFF" 
}) => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

      <div className="flex flex-wrap justify-center gap-8 px-6">
        {steps.map((step, index) => (
          <div key={step.id} className="relative group">
            {/* Connection Line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] z-0 overflow-hidden">
                <motion.div 
                  className="w-full h-full"
                  style={{ backgroundColor: color }}
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: index * 0.5
                  }}
                />
              </div>
            )}

            {/* Step Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card glass-card-hover w-72 p-6 rounded-2xl relative z-10"
            >
              <div 
                className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: `${color}20`, color: color }}
              >
                <step.icon size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                {step.description}
              </p>
              
              {step.details && (
                <ul className="space-y-1.5 border-t border-white/5 pt-4">
                  {step.details.map((detail, i) => (
                    <li key={i} className="text-[11px] text-text-secondary/70 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary/40" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {/* Pulsing Glow on Hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>

            {/* Step Number Badge */}
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full glass-card flex items-center justify-center text-[10px] font-bold text-primary/60 border-primary/20">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Animated SVG Path for global flow */}
      <div className="absolute top-1/2 left-0 w-full pointer-events-none -z-20 opacity-20">
        <svg width="100%" height="100" viewBox="0 0 1400 100" fill="none">
          <motion.path
            d="M0 50 Q 350 0, 700 50 T 1400 50"
            stroke={color}
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    </div>
  );
};
