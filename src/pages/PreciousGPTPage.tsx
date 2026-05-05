import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WallahGPTSection } from '../components/PreciousGPTSection';

export const WallahGPTPage = () => {
  return (
    <div className="min-h-screen font-sans text-text-primary bg-white">
      <Navbar />
      <div className="pt-8">
         <WallahGPTSection />
      </div>
      <Footer />
    </div>
  );
};
