import React from 'react';
import { Coffee, Sun, Sparkles, Wind, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { editorialImages } from '../data/images';

export const EditorialStory: React.FC = () => {
  return (
    <section id="rituais" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#EAE3DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#7D7065] block mb-3 font-medium">
            Vivências & Rituais de Descanso
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2926] font-normal leading-tight tracking-tight">
            Momentos que pedem calma e beleza despretensiosa.
          </h2>
          <div className="w-12 h-px bg-[#C8BEB3] mx-auto my-5" />
          <p className="font-sans text-sm sm:text-base text-[#5C554D] leading-relaxed font-light">
            Não é sobre se esconder sob panos velhos ou tecidos que sufocam a pele. É sobre acordar, circular pela casa e pelo quintal sentindo-se vestida, elegante e em sintonia com seu próprio ritmo.
          </p>
        </div>

        {/* Story 1: O Dia de Descanso no Quintal (Requested: "fotos de modelos no quintal de casa usando seu pijama no dia de descanso") */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="relative rounded-xs overflow-hidden shadow-lg aspect-[16/9] bg-[#EAE3DC] group">
              <img
                src={editorialImages.gardenRest}
                alt="Mulher elegante vestindo pijama de linho no quintal de casa durante dia de descanso"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-3 py-1.5 rounded-xs text-[10px] font-sans tracking-widest uppercase text-[#2C2926] border border-[#FAF8F5]">
                O Quintal em Dia de Descanso
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#7D7065] mb-3">
              <Sun className="w-4 h-4 text-[#C29B78]" />
              <span>O Domingo ao Sol</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2926] font-normal leading-snug mb-4">
              Pisar na grama descalça com a leveza do linho puro.
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#5C554D] leading-relaxed mb-6 font-light">
              Quantas vezes você teve que trocar de roupa só para abrir o portão, tomar um banho de sol no jardim ou ler um livro na varanda?
              O design da Linen & Soul elimina essa barreira: são peças com corte limpo e proporções refinadas que têm presença de roupa de dia, com a liberdade inegociável do melhor descanso.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A453F] font-sans">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#7A8B7B] shrink-0" />
                <span>Zero sensação de transparência desconfortável</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#7A8B7B] shrink-0" />
                <span>Linho pré-lavado que não pinica e fica mais macio ao vento</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#7A8B7B] shrink-0" />
                <span>Bolsos funcionais e cós com elástico anatômico sem marcas</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Story 2 & 3: O Café da Manhã + A Textura Natural (2-Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Story 2: Mulher preparando seu café (Requested: "fotos da mulher preparando seu café ao acordar utilizando o pijama") */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-[#F4EFEB] p-6 sm:p-8 rounded-xs border border-[#E8DFD5] flex flex-col justify-between"
          >
            <div>
              <div className="relative rounded-xs overflow-hidden shadow-md aspect-[4/3] bg-[#EAE3DC] mb-6 group">
                <img
                  src={editorialImages.coffeeRitual}
                  alt="Mulher preparando café ao acordar vestindo pijama sofisticado Linen & Soul"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-3 py-1.5 rounded-xs text-[10px] font-sans tracking-widest uppercase text-[#2C2926] border border-[#FAF8F5]">
                  O Café ao Amanhecer
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#7D7065] mb-2.5">
                <Coffee className="w-4 h-4 text-[#8C7662]" />
                <span>Ritual Matinal</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2926] font-normal leading-snug mb-3">
                A primeira xícara sem a pressa do mundo lá fora.
              </h3>
              <p className="font-sans text-sm text-[#5C554D] leading-relaxed font-light mb-4">
                Moer os grãos, sentir o aroma e ver a luz suave do sol entrar pela cozinha. Nossas mangas têm comprimento planejado para não atrapalhar o preparo do café e a gola estruturada traz um ar espontaneamente arrumado, mesmo nos primeiros minutos após despertar.
              </p>
            </div>

            <div className="pt-4 border-t border-[#DFD5C9] flex items-center justify-between text-xs text-[#736B63] font-sans">
              <span>Disponível em P, M, G e GG</span>
              <span className="font-serif italic text-sm text-[#2C2926]">"O sono continua como estado de espírito."</span>
            </div>
          </motion.div>

          {/* Story 3: Textura, Qualidade & Conforto (Requested: "fotos que trasmitem a qualidade, conforto e a estética sofisticada que o produto oferece") */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 bg-[#F4EFEB] p-6 sm:p-8 rounded-xs border border-[#E8DFD5] flex flex-col justify-between"
          >
            <div>
              <div className="relative rounded-xs overflow-hidden shadow-md aspect-[4/3] bg-[#EAE3DC] mb-6 group">
                <img
                  src={editorialImages.fabricDetail}
                  alt="Detalhe macro da trama do linho puro, botões de madrepérola e costura francesa Linen & Soul"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-3 py-1.5 rounded-xs text-[10px] font-sans tracking-widest uppercase text-[#2C2926] border border-[#FAF8F5]">
                  Artesania & Matéria-Prima Pura
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#7D7065] mb-2.5">
                <Wind className="w-4 h-4 text-[#7A8B7B]" />
                <span>Respirabilidade Superior</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2926] font-normal leading-snug mb-3">
                A carícia das fibras vivas na sua pele.
              </h3>
              <p className="font-sans text-sm text-[#5C554D] leading-relaxed font-light mb-4">
                Tecidos sintéticos agem como plástico na hora do sono: retêm suor, esquentam excessivamente e causam microdespertares. O linho natural é uma fibra ôca e viva que conduz calor e umidade para fora, mantendo o corpo na temperatura ideal para um sono revigorante e profundo.
              </p>
            </div>

            <div className="pt-4 border-t border-[#DFD5C9] flex items-center justify-between text-xs text-[#736B63] font-sans">
              <span>Botões em Madrepérola Natural</span>
              <span className="font-medium text-[#2C2926]">Costura Francesa Sem Atrito</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
