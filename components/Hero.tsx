import React from 'react';
import { ArrowRight, CheckCircle2, Phone, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-200/50 to-transparent rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left reveal">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm animate-fade-in-up mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Spécialiste Artisans & Commerçants</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Vos concurrents vous <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">volent des clients.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Aujourd'hui, si on ne vous trouve pas sur Google, vous n'existez pas. Triva-Media transforme votre entreprise locale en machine à attirer des clients, sans que vous ayez à gérer la technique.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto bg-brand-blue text-white hover:bg-blue-600 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-blue/30 hover:shadow-brand-blue/40 hover:-translate-y-1 active:scale-95">
                Je veux plus de clients <ArrowRight size={20} />
              </button>
              <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:border-slate-300 active:scale-95">
                Voir des exemples
              </button>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-slate-500 text-sm font-bold">
              <span className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-lg border border-slate-100"><CheckCircle2 size={16} className="text-brand-blue"/> Zéro jargon technique</span>
              <span className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-lg border border-slate-100"><CheckCircle2 size={16} className="text-brand-blue"/> Rentabilisé rapidement</span>
            </div>
          </div>

          {/* Visual Content - Simplified for Mobile */}
          <div className="lg:w-1/2 relative reveal stagger-2 mt-8 lg:mt-0 w-full max-w-[500px] lg:max-w-none mx-auto">
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              
              {/* Main Visual */}
              <div className="absolute inset-4 lg:inset-10 bg-white rounded-3xl shadow-2xl shadow-brand-blue/10 border border-slate-100 overflow-hidden z-20 animate-float-slow">
                <div className="h-full w-full bg-slate-50 relative flex flex-col">
                   {/* Browser Bar */}
                   <div className="h-12 border-b border-slate-100 bg-white flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 ml-4 h-6 bg-slate-100 rounded-md text-[10px] flex items-center px-2 text-slate-400 font-medium">votre-entreprise.com</div>
                   </div>
                   {/* Mock Content */}
                   <div className="flex-1 p-6 flex flex-col gap-4 relative overflow-hidden">
                      <div className="w-full h-32 bg-gradient-to-br from-brand-blue/10 to-blue-50 rounded-xl flex items-center justify-center border border-brand-blue/5">
                         <div className="text-center">
                            <div className="h-2 w-24 bg-brand-blue/20 rounded-full mx-auto mb-2"></div>
                            <div className="h-6 w-32 bg-brand-blue rounded-lg mx-auto shadow-lg shadow-brand-blue/20"></div>
                         </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                         <div className="h-24 bg-slate-100 rounded-xl"></div>
                         <div className="h-24 bg-slate-100 rounded-xl"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
                   </div>
                </div>
              </div>

              {/* Floating Elements (Hidden on very small screens to save space) */}
              <div className="absolute -top-4 -right-4 md:top-0 md:right-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-30 transform rotate-6 animate-float-slow animation-delay-1000 hidden sm:block">
                <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-lg text-green-600"><Phone size={20} className="-rotate-12"/></div>
                   <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Appels reçus</div>
                      <div className="text-xl font-black text-slate-900">+15 / sem</div>
                   </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-2 md:bottom-10 md:left-0 bg-brand-dark text-white p-4 rounded-2xl shadow-xl z-30 transform -rotate-3 animate-float-slow animation-delay-2000 hidden sm:block">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="p-1 bg-white/10 rounded-lg"><TrendingUp size={16} /></div>
                 </div>
                 <p className="text-sm font-bold">"Agenda complet !"</p>
              </div>
              
              {/* Decorative Blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            </div>
          </div>

        </div>
        
        {/* Marquee Logos */}
        <div className="mt-20 pt-10 border-t border-slate-200 reveal stagger-3">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Ils ont développé leur activité avec nous</p>
          <div className="relative flex overflow-x-hidden group mask-linear">
             <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-xl font-black text-slate-800">GARAGE <span className="text-brand-blue">VAUTHIER</span></span>
                <span className="text-xl font-serif italic text-slate-800">FleurDeCoton</span>
                <span className="text-xl font-bold tracking-tighter text-slate-800">BOUCHERIE<span className="font-light">DURAND</span></span>
                <span className="text-xl font-mono font-bold text-slate-800">PlomberieExpress</span>
                <span className="text-xl font-black text-slate-800">GARAGE <span className="text-brand-blue">VAUTHIER</span></span>
                <span className="text-xl font-serif italic text-slate-800">FleurDeCoton</span>
                <span className="text-xl font-bold tracking-tighter text-slate-800">BOUCHERIE<span className="font-light">DURAND</span></span>
                <span className="text-xl font-mono font-bold text-slate-800">PlomberieExpress</span>
             </div>
             <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 ml-16 md:ml-24">
                <span className="text-xl font-black text-slate-800">GARAGE <span className="text-brand-blue">VAUTHIER</span></span>
                <span className="text-xl font-serif italic text-slate-800">FleurDeCoton</span>
                <span className="text-xl font-bold tracking-tighter text-slate-800">BOUCHERIE<span className="font-light">DURAND</span></span>
                <span className="text-xl font-mono font-bold text-slate-800">PlomberieExpress</span>
                <span className="text-xl font-black text-slate-800">GARAGE <span className="text-brand-blue">VAUTHIER</span></span>
                <span className="text-xl font-serif italic text-slate-800">FleurDeCoton</span>
                <span className="text-xl font-bold tracking-tighter text-slate-800">BOUCHERIE<span className="font-light">DURAND</span></span>
                <span className="text-xl font-mono font-bold text-slate-800">PlomberieExpress</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;