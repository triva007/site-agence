import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">L'équipe à votre service</h2>
          <p className="text-slate-600">Des experts passionnés, basés juste à côté de chez vous.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {TEAM.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative mb-4 inline-block">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <h3 className="font-bold text-slate-900">{member.name}</h3>
              <p className="text-sm text-brand-blue font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;