import { Diamond, Globe, Mail, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-section-alt pt-20 pb-8 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1 */}
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-2xl font-heading mb-6">
            <Diamond className="fill-primary w-6 h-6" /> GenQuantis
          </div>
          <ul className="space-y-3 text-sm font-medium text-text-secondary">
            <li><a href="#" className="hover:text-primary transition-colors">Main</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Mission</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Team</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        {/* Col 2 */}
        <div>
          <h4 className="font-bold text-lg mb-6">GenQuantis</h4>
          <ul className="space-y-3 text-sm font-medium text-text-secondary">
            <li><a href="#" className="hover:text-primary transition-colors opacity-40 cursor-not-allowed">PandaOmics (GQ Discovery)</a></li>
            <li><Link to="/biologics-discovery" className="hover:text-primary transition-colors">GQ Discovery</Link></li>
            <li><Link to="/chemistry-quantis" className="hover:text-primary transition-colors">GQ Chemistry</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors opacity-40 cursor-not-allowed">inClinico</a></li>
            <li><a href="#" className="hover:text-primary transition-colors opacity-40 cursor-not-allowed">Science42 DONA</a></li>
            <li><Link to="/wallahgpt" className="hover:text-primary transition-colors">GQ GPT</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors opacity-40 cursor-not-allowed">Nac101</a></li>
          </ul>
        </div>
        {/* Col 3 */}
        <div>
          <h4 className="font-bold text-lg mb-6">Press Relations</h4>
          <ul className="space-y-3 text-sm font-medium text-text-secondary">
            <li><a href="#" className="hover:text-primary transition-colors">Press Room</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Media Coverage</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Media Kit</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Design Kit</a></li>
          </ul>
        </div>
        {/* Col 4 */}
        <div>
          <h4 className="font-bold text-lg mb-6">Investor Relations</h4>
          <ul className="space-y-3 text-sm font-medium text-text-secondary">
            <li><a href="#" className="hover:text-primary transition-colors">Corporate Governance</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Listing Documents</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Announcements</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">LSE</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact IR</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary/10 max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-text-secondary">
        <div className="flex gap-4 items-center">
          <span>© 2026 GenQuantis</span>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Cookies Policy</a>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">Back to Top <ChevronUp className="w-4 h-4" /></a>
          <div className="flex gap-3 text-primary">
            <Globe className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" />
            <Mail className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </footer>
  );
};
