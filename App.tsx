
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Process from './components/Process';
import ForWho from './components/ForWho';
import HowToStart from './components/HowToStart';
import NoPromises from './components/NoPromises';
import CurrentTest from './components/CurrentTest';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Process />
        <ForWho />
        <HowToStart />
        <NoPromises />
        <CurrentTest />
        <About />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
