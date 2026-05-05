import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ChemistryQuantisSection } from '../components/Chemistry42Section';

export const ChemistryQuantisPage = () => {
  return (
    <div className="min-h-screen font-sans text-text-primary bg-white">
      <Navbar />
      <div className="pt-8">
         <ChemistryQuantisSection />
      </div>
      <Footer />
    </div>
  );
};
