import React from 'react';
import { ArrowRight, Sparkles, Feather, ShieldCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import { editorialImages } from '../data/images';

interface HeroProps {
  onExploreClick: () => void;
  onOpenSizeGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenSizeGuide }) => {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-10 pb-16 sm:pb-24 border-b border-[#EAE3DC]">
      {/* Subtle organic background aura */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#F2ECE4] rounded-full blur-3xl -z-10 opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Story & Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Delicate Tag */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#EFE9E0] text-[#5C554D] text-[11px] font-sans tracking-[0.2em] uppercase mb-6 border border-[#DFD6CA]">
              <Sparkles className="w-3.5 h-3.5 text-[#8C7E72]" />
              <span>Loungewear & Sleepwear Contemporâneo</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] text-[#2C2926] font-normal tracking-tight mb-6">
              A elegância de não precisar parecer com um pijama.
            </h1>

            {/* Sub-headline */}
            <p className="font-sans text-base sm:text-lg text-[#554F48] leading-relaxed max-w-xl mb-8 font-light">
              Desenhado para mulheres elegantes que valorizam o conforto absoluto em casa. 
              Peças modernas confeccionadas exclusivamente em <strong className="font-medium text-[#2C2926]">fibras 100% naturais</strong> — linho puro pré-lavado e algodão nobre —, garantindo <strong className="font-medium text-[#2C2926]">respirabilidade superior</strong> e caimento que transita com naturalidade do sono ao café na varanda.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                id="btn-hero-explore"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#2C2926] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-sans font-medium rounded-xs hover:bg-[#433E39] transition-colors shadow-xs"
              >
                <span>Explorar Coleção</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="btn-hero-size-guide"
                onClick={onOpenSizeGuide}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent text-[#2C2926] border border-[#C5BCB0] hover:border-[#2C2926] text-xs uppercase tracking-[0.18em] font-sans rounded-xs transition-colors"
              >
                <span>Tabela de Medidas (P ao GG)</span>
              </button>
            </div>

            {/* Craft Credentials / Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8DFD5] text-[#554F48]">
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#2C2926] leading-none mb-1">
                  100%
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#736B63] font-sans">
                  Fibras Naturais
                </span>
                <span className="text-[10px] text-[#8F867C]">Zero Poliéster</span>
              </div>

              <div className="flex flex-col border-l border-[#E8DFD5] pl-4">
                <span className="font-serif text-xl sm:text-2xl text-[#2C2926] leading-none mb-1">
                  P ao GG
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#736B63] font-sans">
                  Grade Brasileira
                </span>
                <span className="text-[10px] text-[#8F867C]">Caimento Fluido</span>
              </div>

              <div className="flex flex-col border-l border-[#E8DFD5] pl-4">
                <span className="font-serif text-xl sm:text-2xl text-[#2C2926] leading-none mb-1">
                  Brasil
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#736B63] font-sans">
                  Feito à Mão
                </span>
                <span className="text-[10px] text-[#8F867C]">Costura Francesa</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Editorial Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="relative rounded-sm overflow-hidden shadow-xl bg-[#EAE3DC] aspect-[3/4]">
                <img
                  src={editorialImages.hero}
                  alt="Modelo elegante vestindo sleepwear Linen & Soul em ambiente sereno"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Floating Editorial Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-md p-4 rounded-xs border border-[#FAF8F5] shadow-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#7D7065] font-sans font-medium">
                        Corte Alfaiataria & Loungewear
                      </p>
                      <h4 className="font-serif text-lg text-[#2C2926] font-normal leading-tight">
                        Conjunto Serenidade em Linho Puro
                      </h4>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-[#2C2926] font-serif border-b border-[#2C2926] pb-0.5">
                      Ver Peça
                    </span>
                  </div>
                </div>
              </div>

              {/* Side Accent Note */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-[#2C2926] text-[#FAF8F5] py-2.5 px-4 rounded-xs shadow-lg text-xs font-sans">
                <HeartHandshake className="w-4 h-4 text-[#D8C7B8]" />
                <span className="tracking-wide">Feito com carinho e respeito no Brasil</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
