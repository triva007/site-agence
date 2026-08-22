import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MarketReality from './components/MarketReality';
import AcquisitionSystem from './components/AcquisitionSystem';
import RoiCalculator from './components/RoiCalculator';
import ComparisonSection from './components/ComparisonSection';
import QualificationCheck from './components/QualificationCheck';
import Process from './components/Process';
import Offer from './components/Offer';
import AboutFounder from './components/AboutFounder';
import BookingSection from './components/BookingSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LegalNotice from './components/LegalNotice';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  if (currentPath === '/mentions-legales') {
    return <LegalNotice />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <MarketReality />
        <AcquisitionSystem />
        <RoiCalculator />
        <ComparisonSection />
        <QualificationCheck />
        <Process />
        <Offer />
        <AboutFounder />
        <BookingSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
