import React from 'react';
import { Sparkles, Coffee, Moon, SunMedium, Compass } from 'lucide-react';
import { editorialImages } from '../data/images';

export const ConceptSection: React.FC = () => {
  return (
    <section id="conceito" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#EAE3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#7D7065] block mb-2 font-medium">
            A Filosofia Linen & Soul
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2926] font-normal leading-tight">
            A fronteira sutil entre dormir e viver com elegância.
          </h2>
          <div className="w-12 h-px bg-[#C8BEB3] mx-auto my-5" />
          <p className="font-sans text-sm sm:text-base text-[#5C554D] leading-relaxed font-light">
            Durante décadas, o mercado da moda tratou as roupas de dormir como algo menor: estampas infantis, tecidos sintéticos que pinicam e formatos sem estrutura. Acreditamos que a forma como você se veste em casa reflete o respeito que você tem pelo seu próprio tempo.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border-t border-[#DCD3C7] pt-6 flex flex-col">
            <span className="font-serif text-xs text-[#7D7065] tracking-widest uppercase mb-2">
              01 / Alfaiataria Fluida
            </span>
            <h3 className="font-serif text-xl text-[#2C2926] font-normal mb-2">
              Corte Limpo & Sem Cara de Pijama
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#5C554D] leading-relaxed font-light">
              Golas limpas, mangas com proporção arquitetônica e calças de corte reto que você pode vestir tranquilamente em uma viagem ou para receber visitas.
            </p>
          </div>

          <div className="border-t border-[#DCD3C7] pt-6 flex flex-col">
            <span className="font-serif text-xs text-[#7D7065] tracking-widest uppercase mb-2">
              02 / Respiração Ativa
            </span>
            <h3 className="font-serif text-xl text-[#2C2926] font-normal mb-2">
              Regulação Térmica Contínua
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#5C554D] leading-relaxed font-light">
              As fibras de linho puro e algodão pima adaptam-se ao microclima do seu corpo, evitando o calor sufocante e garantindo um sono sem interrupções.
            </p>
          </div>

          <div className="border-t border-[#DCD3C7] pt-6 flex flex-col">
            <span className="font-serif text-xs text-[#7D7065] tracking-widest uppercase mb-2">
              03 / Ergonomia & Liberdade
            </span>
            <h3 className="font-serif text-xl text-[#2C2926] font-normal mb-2">
              Do P ao GG com Conforto Real
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#5C554D] leading-relaxed font-light">
              Costas com folga anatômica, cós inteligente com elástico macio e tecidos que não repuxam quando você muda de posição durante a noite.
            </p>
          </div>

          <div className="border-t border-[#DCD3C7] pt-6 flex flex-col">
            <span className="font-serif text-xs text-[#7D7065] tracking-widest uppercase mb-2">
              04 / Consciência & Longevidade
            </span>
            <h3 className="font-serif text-xl text-[#2C2926] font-normal mb-2">
              Feito no Brasil para Durar Anos
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#5C554D] leading-relaxed font-light">
              Peças atemporais que não sofrem com modismos efêmeros. O linho nobre ganha maciez e caimento ainda mais sedoso com o passar do tempo.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
