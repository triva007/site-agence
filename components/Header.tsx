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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      // Petite astuce pour attendre la fermeture du menu avant de scroller sur mobile
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <header 
        className={`pointer-events-auto transition-all duration-500 ease-out ${
          scrolled 
            ? 'w-full max-w-5xl bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 rounded-full py-3 px-6 border border-white/50' 
            : 'w-full max-w-7xl bg-transparent py-4 px-2'
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg shadow-brand-blue/20 group-hover:rotate-6 transition-transform">
              <span className="text-white font-black text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                Triva<span className="text-brand-blue">-</span>Media
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/50 p-1.5 rounded-full border border-white/60 backdrop-blur-sm shadow-sm">
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
              onClick={(e) => handleNavClick(e, '#pricing')}
              className={`group relative px-6 py-2.5 rounded-full font-bold text-sm transition-all overflow-hidden shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 ${
                scrolled ? 'bg-brand-dark text-white' : 'bg-brand-blue text-white'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Démarrer <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pointer-events-auto">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-slate-900 bg-white rounded-full shadow-md active:scale-95 transition-transform"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center space-y-8 transition-all duration-500 pointer-events-auto ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
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
          onClick={(e) => handleNavClick(e, '#pricing')}
          className="mt-8 bg-brand-blue text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl shadow-brand-blue/30 hover:bg-blue-700 transition-colors w-3/4 max-w-xs"
        >
            Lancer mon projet
        </button>
      </div>
    </div>
  );
};

export default Header;