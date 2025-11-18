import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section id="results" className="py-20 bg-brand-blue text-white relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
          {STATS.map((stat, index) => (
            <div key={index} className="reveal stagger-1 px-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 tracking-tight text-white">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-medium text-blue-200 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
