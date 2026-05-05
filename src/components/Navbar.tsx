import { Search, Globe, Diamond } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-primary/10 px-6 py-4 flex items-center justify-between shadow-sm">
      <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl font-heading hover:opacity-80 transition-opacity">
        <Diamond className="fill-primary w-6 h-6" />
        <span>Discovery Platform</span>
      </Link>
      <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-text-secondary">
        <Link to="/" className={`transition-colors border-b-2 ${isActive('/') ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary/50'}`}>Platform</Link>
        <span className="text-text-secondary/50 cursor-not-allowed transition-colors border-b-2 border-transparent">PandaOmics</span>
        <Link to="/biologics-discovery" className={`transition-colors border-b-2 ${isActive('/biologics-discovery') ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary/50'}`}>Biologics Discovery</Link>
        <Link to="/chemistry-quantis" className={`transition-colors border-b-2 ${isActive('/chemistry-quantis') ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary/50'}`}>Chemistry Quantis</Link>
        <span className="text-text-secondary/50 cursor-not-allowed transition-colors border-b-2 border-transparent">inClinico</span>
        <span className="text-text-secondary/50 cursor-not-allowed transition-colors border-b-2 border-transparent">Science42 DONA</span>
        <Link to="/wallahgpt" className={`transition-colors border-b-2 ${isActive('/wallahgpt') ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary/50'}`}>WallahGPT</Link>
        <span className="text-text-secondary/50 cursor-not-allowed transition-colors border-b-2 border-transparent">Nac101</span>
      </div>
      <div className="flex items-center gap-4 text-text-secondary">
        <button className="hover:text-primary"><Search className="w-5 h-5" /></button>
        <div className="flex items-center gap-1 hover:text-primary cursor-pointer text-sm font-medium">
          <Globe className="w-4 h-4" /> EN
        </div>
        <button className="text-sm font-medium hover:text-primary">Sign In</button>
      </div>
    </nav>
  );
};
