
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
              <h2 className="text-3xl font-bold mb-6 text-text-primary">Privacy Policy</h2>
              
              <div className="space-y-6 text-text-secondary text-sm leading-relaxed overflow-y-auto max-h-[400px] pr-4 custom-scrollbar">
                <section>
                  <h3 className="font-bold text-text-primary mb-2">1. Data Collection</h3>
                  <p>We collect information that you provide directly to us, including genomic data, chemical structures, and account information. We also automatically collect telemetry data related to your interaction with our AI models.</p>
                </section>
                
                <section>
                  <h3 className="font-bold text-text-primary mb-2">2. Data Usage</h3>
                  <p>Your data is used solely to provide and improve the Discovery Platform services. We utilize advanced encryption to ensure that biological insights remain isolated and secure within your enterprise environment.</p>
                </section>
                
                <section>
                  <h3 className="font-bold text-text-primary mb-2">3. Data Security</h3>
                  <p>We implement industry-standard AES-256 encryption for data at rest and TLS 1.3 for data in transit. Our infrastructure is designed to comply with SOC2 and HIPAA standards for healthcare data processing.</p>
                </section>
                
                <section>
                  <h3 className="font-bold text-text-primary mb-2">4. Your Rights</h3>
                  <p>In accordance with GDPR and CCPA, you have the right to access, rectify, or delete your personal and research data. You can export your simulation results and chemical property predictions at any time.</p>
                </section>
              </div>

              <div className="pt-8 mt-8 border-t border-primary/5">
                <p className="text-xs text-text-secondary font-medium">Last Updated: May 2026 </p>
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
              <h2 className="text-3xl font-bold mb-6 text-text-primary">Cookies Policy</h2>
              
              <div className="space-y-6 text-text-secondary text-sm leading-relaxed overflow-y-auto max-h-[400px] pr-4 custom-scrollbar">
                <section>
                  <h3 className="font-bold text-text-primary mb-2">1. What are Cookies?</h3>
                  <p>Cookies are small text files stored on your device to help us provide a seamless experience on the GenQuantis platform, remembering your session preferences and AI model configurations.</p>
                </section>
                
                <section>
                  <h3 className="font-bold text-text-primary mb-2">2. Essential Cookies</h3>
                  <p>These are necessary for the platform to function, including authentication, security, and the maintenance of your active drug discovery sessions.</p>
                </section>
                
                <section>
                  <h3 className="font-bold text-text-primary mb-2">3. Analytics Cookies</h3>
                  <p>We use performance cookies to understand how researchers navigate the platform. This data is anonymized and used to optimize the response times of our generative chemistry engines.</p>
                </section>
                
                <section>
                  <h3 className="font-bold text-text-primary mb-2">4. Managing Preferences</h3>
                  <p>You can adjust your cookie settings through your browser at any time. Note that disabling essential cookies may impact the stability of the molecular dynamics simulations.</p>
                </section>
              </div>

              <div className="pt-8 mt-8 border-t border-primary/5">
                <p className="text-xs text-text-secondary font-medium">Last Updated: May 2026 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
