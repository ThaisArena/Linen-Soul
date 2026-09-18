import React from 'react';
import { Heart, Scissors, Sparkles, MapPin, Leaf, Check } from 'lucide-react';

export const MadeInBrazilSection: React.FC = () => {
  return (
    <section id="feito-no-brasil" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#EAE3DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Manifesto & Details */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#7D7065] mb-3">
              <MapPin className="w-4 h-4 text-[#4B5E4F]" />
              <span>Orgulho Nacional & Cadeia Ética</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2926] font-normal leading-tight mb-6">
              Feito no Brasil com alma, mãos artesanais e calma.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#554F48] leading-relaxed font-light mb-6">
              Acreditamos que uma boa noite de descanso começa na energia com que a peça foi concebida. Cada conjunto Linen & Soul é cortado e costurado no Brasil em ateliês locais dedicados à alta alfaiataria, onde tempo e precisão valem mais do que pressa industrial.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#F4EFEB] flex items-center justify-center shrink-0 text-[#2C2926] border border-[#EAE3DC] mt-0.5">
                  <Scissors className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#2C2926] font-medium">
                    Costura Francesa Sem Atrito
                  </h4>
                  <p className="text-xs text-[#6B645C] font-sans leading-relaxed">
                    Todas as costuras internas são embutidas e dobradas à mão. Não usamos fios de nylon ásperos de overloque, garantindo zero atrito na pele ao deitar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#F4EFEB] flex items-center justify-center shrink-0 text-[#2C2926] border border-[#EAE3DC] mt-0.5">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#2C2926] font-medium">
                    Valorização das Costureiras
                  </h4>
                  <p className="text-xs text-[#6B645C] font-sans leading-relaxed">
                    Remuneração justa, ambiente iluminado e orgulho em cada etiqueta assinada pelo nosso ateliê no Brasil.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#F4EFEB] flex items-center justify-center shrink-0 text-[#2C2926] border border-[#EAE3DC] mt-0.5">
                  <Leaf className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#2C2926] font-medium">
                    Embalagem 100% Biodegradável
                  </h4>
                  <p className="text-xs text-[#6B645C] font-sans leading-relaxed">
                    Seu pedido chega envolto em um saquinho de algodão cru reutilizável e papel seda perfumado com aroma botânico calmante.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F4EFEB] rounded-xs border border-[#E8DFD5] flex items-center justify-between">
              <span className="text-xs text-[#554F48] font-sans">
                Apoie a manufatura nacional consciente
              </span>
              <span className="text-xs font-serif italic text-[#2C2926]">
                #SlowFashionBrasil
              </span>
            </div>
          </div>

          {/* Right Column: Visual Composition / Quote Box */}
          <div className="lg:col-span-6">
            <div className="bg-[#2C2926] text-[#FAF8F5] p-8 sm:p-12 rounded-xs relative overflow-hidden shadow-xl">
              {/* Background watermark */}
              <div className="absolute -bottom-10 -right-10 text-[#3C3833] font-serif text-[130px] select-none pointer-events-none opacity-40 leading-none">
                L&S
              </div>

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5B5A5] font-sans block mb-6">
                O Manifesto Linen & Soul
              </span>

              <blockquote className="font-serif text-2xl sm:text-3xl font-light leading-snug mb-8 text-[#FAF8F5]">
                "A verdadeira elegância de uma mulher começa quando ela está só consigo mesma, no silêncio da sua casa, vestindo o que há de mais puro e respeitoso para com o seu corpo."
              </blockquote>

              <div className="pt-6 border-t border-[#433E39] flex items-center justify-between">
                <div>
                  <p className="text-sm font-serif text-[#FAF8F5]">Design & Confecção</p>
                  <p className="text-xs text-[#9E9388] font-sans">Florianópolis & São Paulo • Brasil</p>
                </div>
                <span className="text-xs tracking-widest uppercase font-sans text-[#D8C7B8] px-3 py-1.5 border border-[#524B45] rounded-xs">
                  Selo Brasil Feito à Mão
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
