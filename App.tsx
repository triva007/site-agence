import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TheProblem from './components/TheProblem';
import HowItWorks from './components/HowItWorks';
import HonestTalk from './components/HonestTalk';
import ComparisonTable from './components/ComparisonTable';
import OfferGuarantee from './components/OfferGuarantee';
import QualifiedLead from './components/QualifiedLead';
import AudienceFit from './components/AudienceFit';
import FounderAaron from './components/FounderAaron';
import StepByStep from './components/StepByStep';
import BookingSection from './components/BookingSection';
import FAQSection from './components/FAQSection';
import FinalCall from './components/FinalCall';
import Footer from './components/Footer';
import TestimonialsHidden from './components/TestimonialsHidden';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';

export const App: React.FC = () => {
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

  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const normalizedPath = currentPath.replace(/\/$/, '') || '/';

  if (
    normalizedPath === '/politique-de-confidentialite' || 
    normalizedPath === '/privacy' || 
    normalizedPath === '/confidentialite'
  ) {
    return <PrivacyPolicy />;
  }

  if (normalizedPath === '/mentions-legales') {
    return <LegalNotice />;
  }

  return (
    <div className="min-h-screen bg-encre text-texteSombre font-sans selection:bg-citron selection:text-encre">
      {/* 0. En-tête collant */}
      <Header />

      <main>
        <Hero />
        <TheProblem />
        <HowItWorks />
        <OfferGuarantee />
        <QualifiedLead />
        <HonestTalk />
        <ComparisonTable />
        <AudienceFit />
        <FounderAaron />
        <FAQSection />
        <StepByStep />
        <BookingSection />
        <FinalCall />
        {/* Section Témoignages masquée en attente de vrais retours clients */}
        <TestimonialsHidden />
      </main>

      {/* 15. Pied de page (fond #071D29) */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
};

export default App;
