import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F4EFEB] border-b border-[#EAE3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#7D7065] block mb-2 font-medium">
            Experiências Reais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2926] font-normal leading-tight">
            Mulheres que transformaram suas manhãs e noites.
          </h2>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="bg-[#FAF8F5] p-6 sm:p-8 rounded-xs border border-[#E8DFD5] flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#8C7662] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="font-serif text-lg text-[#2C2926] font-normal italic leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE3DC]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-sans text-xs font-semibold text-[#2C2926]">
                      {rev.author}
                    </h4>
                    <p className="text-[11px] text-[#7D7065] font-sans">{rev.city}</p>
                  </div>
                  <span className="text-[10px] text-[#4B5E4F] font-sans font-medium flex items-center gap-1 bg-[#EAEFEA] px-2 py-0.5 rounded-xs">
                    <ShieldCheck className="w-3 h-3" />
                    Compra Verificada
                  </span>
                </div>
                <p className="text-[11px] text-[#8C8379] font-sans mt-2">
                  {rev.sizeBought}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
