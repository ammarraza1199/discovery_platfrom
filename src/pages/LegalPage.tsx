
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Shield, Cookie, Construction } from 'lucide-react';

export const LegalPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[70vh]">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-light-blue/10 rounded-full blur-[150px] -z-10 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-text-primary"
            >
              Legal & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">Policies</span>
            </motion.h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Transparency and data security are the foundation of GenQuantis. Learn more about how we handle your information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Privacy Policy Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card p-12 rounded-[48px] border border-primary/10 bg-white shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Shield className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
              <div className="flex items-center gap-3 text-amber-600 bg-amber-50 px-4 py-2 rounded-full inline-flex mb-6">
                <Construction size={18} />
                <span className="text-sm font-bold">Under Updation</span>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Our comprehensive privacy policy is currently being updated to reflect the latest data protection standards and our new Generative AI platform capabilities. We ensure that your biological and chemical data remains strictly confidential and secure.
              </p>
              <div className="pt-6 border-t border-primary/5">
                <p className="text-xs text-text-secondary font-medium">Last Updated: May 2026</p>
              </div>
            </motion.div>

            {/* Cookies Policy Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="card p-12 rounded-[48px] border border-primary/10 bg-white shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Cookie className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Cookies Policy</h2>
              <div className="flex items-center gap-3 text-amber-600 bg-amber-50 px-4 py-2 rounded-full inline-flex mb-6">
                <Construction size={18} />
                <span className="text-sm font-bold">Under Updation</span>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                We use cookies to enhance your experience on our platform and analyze site traffic. Our updated cookies policy will provide granular control over your preferences and detailed information on how we utilize telemetry to improve our AI models.
              </p>
              <div className="pt-6 border-t border-primary/5">
                <p className="text-xs text-text-secondary font-medium">Last Updated: May 2026</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
