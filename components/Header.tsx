import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navItems = [
    { label: 'Le Problème', href: '#problem' },
    { label: 'Notre Système', href: '#system' },
    { label: 'Simulateur ROI', href: '#simulator' },
    { label: 'Critères', href: '#qualification' },
    { label: 'Notre Offre', href: '#offer' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 px-4 pointer-events-none">
      <header 
        className={`pointer-events-auto transition-all duration-300 ease-out ${
          scrolled 
            ? 'w-full max-w-5xl bg-white/95 backdrop-blur-md shadow-md rounded-full py-2.5 px-6 border border-slate-200/80' 
            : 'w-full max-w-7xl bg-white/85 backdrop-blur-sm rounded-full py-3.5 px-6 border border-slate-200/60 shadow-sm'
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 rounded-xl bg-brand-blue flex items-center justify-center text-white font-black text-base shadow-sm group-hover:scale-105 transition-transform">
              T
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-display font-black tracking-tight leading-none text-brand-dark">
                Triva Media
              </span>
              <span className="text-[10px] font-bold text-slate-500 tracking-wide uppercase">
                Acquisition BTP
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="cursor-pointer px-3.5 py-2 rounded-full text-xs xl:text-sm font-semibold text-slate-600 hover:text-brand-blue hover:bg-brand-blueLight/50 transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Group */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a 
              href="https://wa.me/33767056066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-slate-700 hover:text-emerald-700 bg-slate-100 hover:bg-emerald-50 border border-slate-200/80 transition-colors"
            >
              <MessageCircle size={14} className="text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a 
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-blue text-white rounded-full font-bold text-xs tracking-wide hover:bg-brand-blueHover shadow-sm shadow-brand-blue/20 hover:shadow-md transition-all active:scale-98"
            >
              <Calendar size={14} />
              <span>Diagnostic de zone</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden pointer-events-auto">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-dark bg-slate-100 rounded-full border border-slate-200 active:scale-95 transition-transform"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-40 flex flex-col justify-center items-center px-6 space-y-6 transition-all duration-300 pointer-events-auto ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-3 text-brand-dark rounded-full bg-slate-100"
          aria-label="Fermer le menu"
        >
          <X size={22} />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center text-white font-black text-lg">
            T
          </div>
          <span className="text-2xl font-display font-black text-brand-dark">Triva Media</span>
        </div>

        <p className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blueLight px-3 py-1 rounded-full mb-4">
          Acquisition Meta Ads pour le BTP
        </p>

        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-lg font-display font-bold text-slate-800 hover:text-brand-blue transition-colors tracking-tight cursor-pointer"
          >
            {item.label}
          </a>
        ))}

        <div className="pt-4 flex flex-col gap-3 w-full max-w-xs">
          <a 
            href="#booking"
            onClick={(e) => handleNavClick(e, '#booking')}
            className="w-full bg-brand-blue text-white px-6 py-3.5 rounded-full font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-brand-blueHover transition-colors shadow-md shadow-brand-blue/20"
          >
            <Calendar size={16} />
            <span>Réserver un diagnostic de zone</span>
          </a>
          <a 
            href="https://wa.me/33767056066"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-slate-100 text-slate-800 border border-slate-200 px-6 py-3 rounded-full font-bold text-xs text-center flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
          >
            <MessageCircle size={15} className="text-emerald-600" />
            <span>Échanger sur WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
