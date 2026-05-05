import { Mail, Calendar, Globe } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="section py-24 border-b border-primary/10">
      <h2 className="text-5xl font-bold mb-16 text-center">Contact us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="card p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:bg-primary/5 transition-colors cursor-pointer">
          <Globe className="w-8 h-8 text-primary" />
          <span className="font-bold">Connect on Social</span>
        </div>
        <div className="card p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:bg-primary/5 transition-colors cursor-pointer">
          <Mail className="w-8 h-8 text-primary" />
          <span className="font-bold">pharma.ai@bioai.com</span>
        </div>
        <div className="card p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 bg-gradient text-white border-none shadow-glow cursor-pointer hover:scale-105 transition-transform">
          <Calendar className="w-8 h-8" />
          <span className="font-bold">Schedule a Demo</span>
        </div>
      </div>
    </section>
  );
};
