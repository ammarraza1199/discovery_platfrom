
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Activity, Construction } from 'lucide-react';

export const GQMedicalPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[70vh] flex items-center justify-center">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-light-blue/10 rounded-full blur-[150px] -z-10 opacity-50"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-24 h-24 bg-gradient rounded-3xl mx-auto flex items-center justify-center shadow-glow mb-8"
          >
            <Activity className="w-12 h-12 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-text-primary"
          >
            GQ <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">Medical</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl font-bold mb-8 text-primary"
          >
            Digital Twin Application
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-section-alt/50 backdrop-blur-md border border-primary/10 p-8 md:p-12 rounded-[48px] shadow-card inline-block"
          >
            <div className="flex flex-col items-center gap-6">
              <Construction className="w-16 h-16 text-primary animate-bounce" />
              <div>
                <h3 className="text-3xl font-bold mb-2">Site Under Updation</h3>
                <p className="text-text-secondary text-lg max-w-md mx-auto">
                  We are currently integrating the lung tumor detection and surface mapping engine into the platform. This module will be available shortly.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <p className="text-sm font-medium text-text-secondary uppercase tracking-[0.2em]">Next-Generation Precision Medicine</p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
