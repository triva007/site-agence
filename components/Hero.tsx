
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-slate-50">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-200/50 to-transparent rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left reveal">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Disponible pour nouveaux projets</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Votre vitrine digitale, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">version pro.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Nous concevons des sites web haute performance pour les artisans et commerçants qui veulent dépasser la concurrence locale.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto bg-brand-blue text-white hover:bg-blue-600 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-1">
                Voir nos offres <ArrowRight size={20} />
              </button>
              <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:border-slate-300">
                Nos réalisations
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-slate-500 text-sm font-semibold">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-blue"/> 100% Sur mesure</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-blue"/> Support local</span>
            </div>
          </div>

          {/* Visual Content - Abstract Floating Elements */}
          <div className="lg:w-1/2 relative reveal stagger-2">
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              
              {/* Main Card */}
              <div className="absolute top-10 left-10 right-10 bottom-10 bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden z-20 animate-float-slow">
                <div className="h-full w-full bg-slate-50 relative">
                   <div className="absolute top-0 left-0 right-0 h-16 border-b border-slate-100 bg-white flex items-center px-6 justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                      </div>
                      <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
                   </div>
                   <div className="p-8 mt-16 space-y-6">
                      <div className="h-8 w-3/4 bg-slate-200 rounded-lg animate-pulse"></div>
                      <div className="space-y-3">
                        <div className="h-4 w-full bg-slate-100 rounded animate-pulse delay-75"></div>
                        <div className="h-4 w-5/6 bg-slate-100 rounded animate-pulse delay-100"></div>
                        <div className="h-4 w-4/6 bg-slate-100 rounded animate-pulse delay-150"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                         <div className="h-32 bg-blue-50 rounded-xl border border-blue-100"></div>
                         <div className="h-32 bg-slate-100 rounded-xl"></div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute top-0 right-0 bg-brand-dark text-white p-6 rounded-2xl shadow-xl z-30 w-48 transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105">
                <div className="text-xs text-slate-400 font-bold uppercase mb-1">Visiteurs</div>
                <div className="text-3xl font-black text-brand-blue">+124%</div>
                <div className="text-xs text-slate-400 mt-1">depuis le lancement</div>
              </div>

              {/* Floating Review Card */}
              <div className="absolute bottom-0 left-0 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-30 w-56 transform -rotate-2 hover:rotate-0 transition-transform duration-500 hover:scale-105">
                 <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">★★★★★</div>
                 </div>
                 <p className="text-xs font-bold text-slate-800">"Design incroyable et super rapide."</p>
              </div>
              
              {/* Decorative Blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>
          </div>

        </div>
        
        {/* Marquee Logos */}
        <div className="mt-24 pt-10 border-t border-slate-200 reveal stagger-3">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Ils nous font confiance</p>
          <div className="relative flex overflow-x-hidden group">
             <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-2xl font-black">BISTROT <span className="text-brand-blue">12</span></span>
                <span className="text-2xl font-serif italic">Atelier.Co</span>
                <span className="text-2xl font-bold tracking-tighter">URBAN<span className="font-light">GARDEN</span></span>
                <span className="text-2xl font-mono font-bold">TechFix</span>
                <span className="text-2xl font-black">BISTROT <span className="text-brand-blue">12</span></span>
                <span className="text-2xl font-serif italic">Atelier.Co</span>
                <span className="text-2xl font-bold tracking-tighter">URBAN<span className="font-light">GARDEN</span></span>
                <span className="text-2xl font-mono font-bold">TechFix</span>
             </div>
             <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 ml-16 md:ml-24">
                <span className="text-2xl font-black">BISTROT <span className="text-brand-blue">12</span></span>
                <span className="text-2xl font-serif italic">Atelier.Co</span>
                <span className="text-2xl font-bold tracking-tighter">URBAN<span className="font-light">GARDEN</span></span>
                <span className="text-2xl font-mono font-bold">TechFix</span>
                <span className="text-2xl font-black">BISTROT <span className="text-brand-blue">12</span></span>
                <span className="text-2xl font-serif italic">Atelier.Co</span>
                <span className="text-2xl font-bold tracking-tighter">URBAN<span className="font-light">GARDEN</span></span>
                <span className="text-2xl font-mono font-bold">TechFix</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
