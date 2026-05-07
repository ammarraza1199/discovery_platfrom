import { Diamond } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/10 px-6 py-4 flex items-center shadow-sm">
      {/* Logo (Left - Fixed Width to help centering) */}
      <div className="flex-shrink-0 w-64">
        <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl font-heading hover:opacity-80 transition-opacity">
          <Diamond className="fill-primary w-6 h-6" />
          <span>Discovery Platform</span>
        </Link>
      </div>

      {/* Links (Centered in the remaining space) */}
      <div className="hidden lg:flex flex-grow items-center justify-center gap-8 text-[13px] font-medium text-text-secondary">
        <Link to="/" className={`transition-colors border-b-2 py-1 ${isActive('/') ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary/50'}`}>Platform</Link>
        <span className="text-text-secondary/50 cursor-not-allowed transition-colors border-b-2 py-1 border-transparent">PandaOmics</span>
        <Link to="/biologics-discovery" className={`transition-colors border-b-2 py-1 ${isActive('/biologics-discovery') ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary/50'}`}>Biologics Discovery</Link>
        <Link to="/chemistry-quantis" className={`transition-colors border-b-2 py-1 ${isActive('/chemistry-quantis') ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary/50'}`}>Chemistry Quantis</Link>
        <span className="text-text-secondary/50 cursor-not-allowed transition-colors border-b-2 py-1 border-transparent">inClinico</span>
        <span className="text-text-secondary/50 cursor-not-allowed transition-colors border-b-2 py-1 border-transparent">Science42 DONA</span>
        <Link to="/wallahgpt" className={`transition-colors border-b-2 py-1 ${isActive('/wallahgpt') ? 'text-primary border-primary' : 'border-transparent hover:text-primary hover:border-primary/50'}`}>WallahGPT</Link>
        <span className="text-text-secondary/50 cursor-not-allowed transition-colors border-b-2 py-1 border-transparent">Nac101</span>
      </div>

      {/* Right Spacer (Matches Logo width to ensure true center for links) */}
      <div className="flex-shrink-0 w-64 hidden lg:block" />
    </nav>
  );
};
