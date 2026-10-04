import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TheProblem from './components/TheProblem';
import HowItWorks from './components/HowItWorks';
import RoleDistribution from './components/RoleDistribution';
import HonestTalk from './components/HonestTalk';
import ComparisonTable from './components/ComparisonTable';
import RoiSimulator from './components/RoiSimulator';
import OfferGuarantee from './components/OfferGuarantee';
import AudienceFit from './components/AudienceFit';
import FounderAaron from './components/FounderAaron';
import StepByStep from './components/StepByStep';
import BookingSection from './components/BookingSection';
import FAQSection from './components/FAQSection';
import FinalCall from './components/FinalCall';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import TestimonialsHidden from './components/TestimonialsHidden';
import LegalNotice from './components/LegalNotice';
import VideoBand from './components/VideoBand';
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
        {/* 1. Hero (fond encre) */}
        <Hero />

        {/* 2. Le Constat (fond papier) */}
        <TheProblem />

        {/* Bandeau vidéo d'ambiance */}
        <VideoBand video="/media/secteur.mp4" eyebrow="Votre secteur">
          Vos futurs clients habitent déjà autour de chez vous.{' '}
          <span className="font-serif italic font-normal text-citron">Ils ne vous connaissent pas encore.</span>
        </VideoBand>

        {/* 3. Comment ça marche (fond encre) */}
        <HowItWorks />

        {/* 4. Chacun son métier (fond papier) */}
        <RoleDistribution />

        {/* 5. Ce qu'on vous dit dès le départ (fond encre) */}
        <HonestTalk />

        {/* 6. Le Comparatif (fond papier) */}
        <ComparisonTable />

        {/* 7. Simulateur : Combien de bassins pour rentabiliser ? (fond encre) */}
        <RoiSimulator />

        {/* 8. L'offre et la garantie (fond papier) */}
        <VideoBand video="/media/bassin.mp4" eyebrow="Vos réalisations" align="center">
          Ils rêvent de leur piscine.{' '}
          <span className="font-serif italic font-normal text-citron">Montrez-leur ce que vous savez faire.</span>
        </VideoBand>

        <OfferGuarantee />

        {/* 9. Pour qui (fond encre) */}
        <AudienceFit />

        {/* 10. Le fondateur (fond papier) */}
        <FounderAaron />

        {/* 11. Le déroulé (fond encre) */}
        <StepByStep />

        {/* 12. Prise de rendez-vous (fond papier, ancre #diagnostic) */}
        <BookingSection />

        {/* 13. Questions fréquentes (fond encre, accordéon) */}
        <FAQSection />

        {/* 14. Appel final (fond encre, grand) */}
        <FinalCall />

        {/* Section Témoignages masquée/commentée en attente de vrais retours clients */}
        <TestimonialsHidden />
      </main>

      {/* 15. Pied de page (fond #071D29) */}
      <Footer onNavigate={handleNavigate} />

      {/* Barre collante en bas de l'écran sur mobile */}
      <MobileStickyBar />
    </div>
  );
};

export default App;
