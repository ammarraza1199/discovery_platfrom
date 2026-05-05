import { Diamond, Globe, Mail, ChevronUp } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-section-alt pt-20 pb-8 border-t border-primary/20">
      <div className="section pt-0 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1 */}
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-2xl font-heading mb-6">
            <Diamond className="fill-primary w-6 h-6" /> BioAI
          </div>
          <ul className="space-y-3 text-sm font-medium text-text-secondary">
            <li><a href="#" className="hover:text-primary">Main</a></li>
            <li><a href="#" className="hover:text-primary">Mission</a></li>
            <li><a href="#" className="hover:text-primary">Team</a></li>
            <li><a href="#" className="hover:text-primary">Sustainability</a></li>
            <li><a href="#" className="hover:text-primary">Careers</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        {/* Col 2 */}
        <div>
          <h4 className="font-bold text-lg mb-6">Pharma.ai</h4>
          <ul className="space-y-3 text-sm font-medium text-text-secondary">
            <li><a href="#" className="hover:text-primary">PandaOmics</a></li>
            <li><a href="#" className="hover:text-primary">Biologics Discovery</a></li>
            <li><a href="#" className="hover:text-primary">Chemistry Quantis</a></li>
            <li><a href="#" className="hover:text-primary">inClinico</a></li>
            <li><a href="#" className="hover:text-primary">Science42 DONA</a></li>
            <li><a href="#" className="hover:text-primary">WallahGPT</a></li>
            <li><a href="#" className="hover:text-primary">Nac101</a></li>
          </ul>
        </div>
        {/* Col 3 */}
        <div>
          <h4 className="font-bold text-lg mb-6">Press Relations</h4>
          <ul className="space-y-3 text-sm font-medium text-text-secondary">
            <li><a href="#" className="hover:text-primary">Press Room</a></li>
            <li><a href="#" className="hover:text-primary">Media Coverage</a></li>
            <li><a href="#" className="hover:text-primary">Blog</a></li>
            <li><a href="#" className="hover:text-primary">Media Kit</a></li>
            <li><a href="#" className="hover:text-primary">Design Kit</a></li>
          </ul>
        </div>
        {/* Col 4 */}
        <div>
          <h4 className="font-bold text-lg mb-6">Investor Relations</h4>
          <ul className="space-y-3 text-sm font-medium text-text-secondary">
            <li><a href="#" className="hover:text-primary">Corporate Governance</a></li>
            <li><a href="#" className="hover:text-primary">Listing Documents</a></li>
            <li><a href="#" className="hover:text-primary">Announcements</a></li>
            <li><a href="#" className="hover:text-primary">LSE</a></li>
            <li><a href="#" className="hover:text-primary">Contact IR</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary/10 max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-text-secondary">
        <div className="flex gap-4 items-center">
          <span>© 2026 BioAI Medicine</span>
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Cookies Policy</a>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-primary flex items-center gap-1">Back to Top <ChevronUp className="w-4 h-4" /></a>
          <div className="flex gap-3 text-primary">
            <Globe className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" />
            <Mail className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </footer>
  );
};
