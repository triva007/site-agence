
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <header 
        className={`pointer-events-auto transition-all duration-500 ease-out ${
          scrolled 
            ? 'w-full max-w-5xl bg-white/80 backdrop-blur-xl shadow-xl shadow-slate-200/50 rounded-full py-3 px-6 border border-white/50' 
            : 'w-full max-w-7xl bg-transparent py-4 px-0'
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center transform rotate-3">
              <span className="text-white font-black text-lg">C</span>
            </div>
            <span className={`text-xl font-black tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Connect<span className="text-brand-blue">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="cursor-pointer px-5 py-2 rounded-full text-sm font-bold text-slate-600 hover:text-brand-blue hover:bg-white transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* CTA */}
          <div className="hidden md:block">
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
              className={`group relative px-6 py-2.5 rounded-full font-bold text-sm transition-all overflow-hidden ${
                scrolled ? 'bg-brand-dark text-white' : 'bg-brand-blue text-white'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Démarrer <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pointer-events-auto">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-900 bg-white rounded-full shadow-sm"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 transition-all duration-500 pointer-events-auto ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-3xl font-black text-slate-900 hover:text-brand-blue transition-colors tracking-tight cursor-pointer"
          >
            {item.label}
          </a>
        ))}
        <button 
          onClick={() => {
            setIsOpen(false);
            document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'});
          }}
          className="mt-8 bg-brand-blue text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl shadow-brand-blue/30 hover:bg-blue-700 transition-colors"
        >
            Lancer mon projet
        </button>
      </div>
    </div>
  );
};

export default Header;
