import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BiologicsDiscoverySection } from '../components/GenerativeBiologicsSection';

export const BiologicsDiscoveryPage = () => {
  return (
    <div className="min-h-screen font-sans text-text-primary bg-white">
      <Navbar />
      <div className="pt-8">
         <BiologicsDiscoverySection />
      </div>
      <Footer />
    </div>
  );
};
