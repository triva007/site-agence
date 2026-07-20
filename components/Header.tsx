import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
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
    { label: 'Problème', href: '#problem' },
    { label: 'Méthode', href: '#method' },
    { label: 'Qui je suis', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <header 
        className={`pointer-events-auto transition-all duration-500 ease-out ${
          scrolled 
            ? 'w-full max-w-5xl bg-white shadow-sm rounded-full py-3 px-6 border border-slate-100' 
            : 'w-full max-w-7xl bg-transparent py-4 px-2'
        }`}
      >
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex flex-col justify-center">
              <span className={`text-xl font-display font-black tracking-tight leading-none text-brand-dark`}>
                Triva Media
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="cursor-pointer px-5 py-2 rounded-full text-sm font-medium text-slate-500 hover:text-brand-dark transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* CTA */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/33767056066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-dark text-white rounded-full font-medium text-sm hover:bg-slate-800 transition-colors"
            >
              M'écrire sur WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pointer-events-auto">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-brand-dark bg-white rounded-full shadow-sm border border-slate-100 active:scale-95 transition-transform"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 transition-all duration-300 pointer-events-auto ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 p-3 text-brand-dark rounded-full md:hidden"
          aria-label="Fermer le menu"
        >
          <X size={24} />
        </button>

        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-3xl font-display font-bold text-brand-dark hover:text-slate-500 transition-colors tracking-tight cursor-pointer"
          >
            {item.label}
          </a>
        ))}
        <a 
          href="https://wa.me/33767056066"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-brand-whatsapp text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
        >
            M'écrire sur WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Header;