import React, { useState } from 'react';
import { Wind, Droplets, ShieldCheck, Sparkles, Check, X } from 'lucide-react';
import { editorialImages } from '../data/images';

export const NaturalFabricsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'linho' | 'pima' | 'termo'>('linho');

  return (
    <section id="tecidos-naturais" className="py-20 sm:py-28 bg-[#F4EFEB] border-b border-[#EAE3DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#7D7065] block mb-2 font-medium">
            Biologia do Descanso & Matéria-Prima Pura
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2926] font-normal leading-tight">
            Por que apenas fibras 100% naturais tocam sua pele?
          </h2>
          <div className="w-12 h-px bg-[#C8BEB3] mx-auto my-5" />
          <p className="font-sans text-sm sm:text-base text-[#5C554D] leading-relaxed font-light">
            Durante o sono, nosso corpo passa por variações de temperatura cruciais para a regeneração celular. Tecidos sintéticos aprisionam calor e umidade; nossas fibras naturais respiram ativamente com você.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <div className="bg-[#FAF8F5] p-8 rounded-xs border border-[#E8DFD5] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#EFE8DF] flex items-center justify-center text-[#736456] mb-5">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#2C2926] font-normal mb-2.5">
                Linho Puro Pré-Amaciado
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5C554D] leading-relaxed font-light">
                Com estrutura tubular natural, a fibra de linho permite a circulação livre do ar. Passa por lavagens enzimáticas para chegar até você com toque fluido, sem rigidez.
              </p>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#7A8B7B] font-sans font-medium mt-6 block">
              • Regulação Térmica Ativa
            </span>
          </div>

          <div className="bg-[#FAF8F5] p-8 rounded-xs border border-[#E8DFD5] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#EFE8DF] flex items-center justify-center text-[#736456] mb-5">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#2C2926] font-normal mb-2.5">
                Algodão Pima Nobre
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5C554D] leading-relaxed font-light">
                As fibras extra-longas do Pima criam um fio resistente e sedoso. Não forma bolinhas (anti-pilling) e absorve a umidade noturna sem deixar a sensação de umidade na pele.
              </p>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#7A8B7B] font-sans font-medium mt-6 block">
              • Toque Aveludado & Sedoso
            </span>
          </div>

          <div className="bg-[#FAF8F5] p-8 rounded-xs border border-[#E8DFD5] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#EFE8DF] flex items-center justify-center text-[#736456] mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#2C2926] font-normal mb-2.5">
                Zero Plástico na Sua Pele
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5C554D] leading-relaxed font-light">
                Banimos completamente o poliéster e o elastano industrial. Você dorme em contato com a pureza da natureza, livre de estática e microplásticos liberados na pele.
              </p>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#7A8B7B] font-sans font-medium mt-6 block">
              • Hipoalergênico & Puro
            </span>
          </div>
        </div>

        {/* Comparison Table: Natural vs Sintético */}
        <div className="bg-[#FAF8F5] p-6 sm:p-10 rounded-xs border border-[#E8DFD5]">
          <h3 className="font-serif text-2xl text-[#2C2926] font-normal mb-6 text-center">
            A Diferença no Seu Descanso Noturno
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-sans">
              <thead>
                <tr className="border-b border-[#EAE3DC] text-[#7D7065] uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 font-medium">Característica</th>
                  <th className="py-3 px-4 font-medium text-[#2C2926] bg-[#F2ECE4] rounded-t-xs">
                    Linen & Soul (Fibras Naturais)
                  </th>
                  <th className="py-3 px-4 font-medium text-[#7D7065]">Pijamas Convencionais (Poliéster/Sintéticos)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE3DC]">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#2C2926]">Respirabilidade</td>
                  <td className="py-3.5 px-4 text-[#2C2926] bg-[#F2ECE4]/60 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#4B5E4F]" />
                    <span>Máxima e contínua durante todo o sono</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#7D7065]">
                    Retém o calor corporal e bloqueia a transpiração
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#2C2926]">Estética ao acordar</td>
                  <td className="py-3.5 px-4 text-[#2C2926] bg-[#F2ECE4]/60 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#4B5E4F]" />
                    <span>Alfaiataria moderna e elegante para usar em casa</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#7D7065]">
                    Aspecto infantilizado ou desleixado
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#2C2926]">Sensação térmica noturna</td>
                  <td className="py-3.5 px-4 text-[#2C2926] bg-[#F2ECE4]/60 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#4B5E4F]" />
                    <span>Equilíbrio perfeito: não esquenta nem gela</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#7D7065]">
                    Picos de suor seguidos de resfriamento repentino
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#2C2926]">Evolução com as lavagens</td>
                  <td className="py-3.5 px-4 text-[#2C2926] bg-[#F2ECE4]/60 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#4B5E4F]" />
                    <span>Fica cada vez mais macio e confortável</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#7D7065]">
                    Cria bolinhas (pilling) e deforma rapidamente
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
