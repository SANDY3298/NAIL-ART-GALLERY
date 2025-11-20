
import React from 'react';
import { NailArt } from '../types';

interface NailArtCardProps {
  nailArt: NailArt;
  onViewDetails: (nailArt: NailArt) => void;
  icon: React.ReactNode;
}

const NailArtCard: React.FC<NailArtCardProps> = ({ nailArt, onViewDetails, icon }) => {
  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200 cursor-pointer overflow-hidden h-full flex flex-col"
      onClick={() => onViewDetails(nailArt)}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header: Icon & Category */}
        <div className="flex justify-between items-start mb-5">
          <div className="p-3 bg-rose-50 text-rose-500 rounded-xl group-hover:bg-rose-100 group-hover:text-rose-600 transition-colors shadow-sm">
             {icon}
          </div>
          <span className="px-3 py-1 bg-gray-50 text-gray-500 border border-gray-100 text-[10px] font-bold uppercase tracking-widest rounded-full group-hover:border-rose-100 transition-colors">
             {nailArt.category}
           </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors leading-tight">
          {nailArt.name.split('(')[0]}
        </h3>
        
        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow font-light">
          {nailArt.description}
        </p>
        
        {/* Footer Action */}
        <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
           <span className="text-lg font-serif font-bold text-rose-500 group-hover:text-rose-600 transition-colors">
             NT$ {nailArt.price}
           </span>
           <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-rose-500 group-hover:text-white transition-all transform group-hover:translate-x-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
           </div>
        </div>
      </div>
    </div>
  );
};

export default NailArtCard;
