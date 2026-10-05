import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TheProblem from './components/TheProblem';
import HowItWorks from './components/HowItWorks';
import OfferGuarantee from './components/OfferGuarantee';
import FounderAaron from './components/FounderAaron';
import BookingSection from './components/BookingSection';
import FAQSection from './components/FAQSection';
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
        {/* Structure courte : 7 sections, une idée chacune */}
        <Hero />            {/* 1. promesse + vidéo */}
        <TheProblem />      {/* 2. le constat */}
        <HowItWorks />      {/* 3. comment une demande arrive (la demande se construit au défilement) */}
        <OfferGuarantee />  {/* 4. le mois test : facturation, garantie, ce qu'on ne promet pas */}
        <FounderAaron />    {/* 5. un seul interlocuteur + pour qui c'est fait */}
        <FAQSection />      {/* 6. les questions, dont la différence avec les plateformes */}
        <BookingSection />  {/* 7. réservation : votre secteur est-il libre ? */}
        {/* Section Témoignages masquée en attente de vrais retours clients */}
        <TestimonialsHidden />
      </main>

      {/* 15. Pied de page (fond #071D29) */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
};

export default App;
