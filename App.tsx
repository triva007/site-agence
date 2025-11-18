import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-brand-dark font-sans selection:bg-brand-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Process />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Comparison />
        <FAQ />
        {/* Note: Contact form is removed in favor of footer CTAs as per 'Stam' design vibe */}
      </main>
      <Footer />
    </div>
  );
};

export default App;