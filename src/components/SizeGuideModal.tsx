import React, { useState } from 'react';
import { X, Ruler, Sparkles, Check, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { SIZE_MEASUREMENTS } from '../data/products';
import { GarmentSize } from '../types';

interface SizeGuideModalProps {
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ onClose }) => {
  const [userBust, setUserBust] = useState<string>('');
  const [recommendedSize, setRecommendedSize] = useState<GarmentSize | null>(null);

  const calculateRecommendation = (bustVal: number) => {
    if (bustVal <= 90) return 'P';
    if (bustVal <= 98) return 'M';
    if (bustVal <= 106) return 'G';
    return 'GG';
  };

  const handleBustChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserBust(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 60 && num < 140) {
      setRecommendedSize(calculateRecommendation(num));
    } else {
      setRecommendedSize(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#2C2926]/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        className="relative bg-[#FAF8F5] w-full max-w-2xl rounded-xs shadow-2xl border border-[#EAE3DC] p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#554F48] hover:text-[#2C2926] rounded-full transition-colors border border-[#EAE3DC]"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#7D7065] font-sans mb-1">
            <Ruler className="w-4 h-4" />
            <span>Guia de Medidas & Caimento</span>
          </div>
          <h2 className="font-serif text-3xl text-[#2C2926] font-normal leading-tight">
            Grade Brasileira do P ao GG
          </h2>
          <p className="text-xs sm:text-sm text-[#5C554D] font-sans mt-1 font-light">
            Nossa modelagem possui folga estratégica para acompanhar seus movimentos durante a noite e manter um caimento fluido e elegante durante o dia.
          </p>
        </div>

        {/* Interactive Size Finder */}
        <div className="bg-[#F4EFEB] p-5 rounded-xs border border-[#E8DFD5] mb-6">
          <h4 className="text-xs uppercase tracking-wider text-[#2C2926] font-sans font-medium mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#7A8B7B]" />
            Descubra Seu Tamanho Ideal
          </h4>
          <p className="text-xs text-[#6B645C] font-sans mb-3">
            Digite a circunferência aproximada do seu busto (em centímetros):
          </p>
          <div className="flex items-center gap-3">
            <input
              type="number"
              placeholder="Ex: 94"
              value={userBust}
              onChange={handleBustChange}
              className="bg-[#FAF8F5] border border-[#C5BCB0] px-3.5 py-2 rounded-xs text-sm text-[#2C2926] w-28 focus:outline-hidden focus:border-[#2C2926]"
            />
            <span className="text-xs text-[#7D7065] font-sans">cm</span>

            {recommendedSize && (
              <div className="flex items-center gap-2 bg-[#FAF8F5] px-3.5 py-1.5 rounded-xs border border-[#4B5E4F] text-xs font-sans text-[#2C2926]">
                <Check className="w-4 h-4 text-[#4B5E4F]" />
                <span>
                  Tamanho recomendado: <strong className="font-bold text-sm">{recommendedSize}</strong>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Size Table */}
        <div className="overflow-x-auto border border-[#EAE3DC] rounded-xs mb-6">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="bg-[#F4EFEB] text-[#2C2926] uppercase tracking-wider text-[11px] border-b border-[#EAE3DC]">
                <th className="py-3 px-3.5 font-medium">Tamanho</th>
                <th className="py-3 px-3.5 font-medium">Equivalência BR</th>
                <th className="py-3 px-3.5 font-medium">Busto</th>
                <th className="py-3 px-3.5 font-medium">Cintura</th>
                <th className="py-3 px-3.5 font-medium">Quadril</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE3DC] bg-[#FAF8F5]">
              {SIZE_MEASUREMENTS.map((item) => (
                <tr
                  key={item.size}
                  className={`transition-colors ${
                    recommendedSize === item.size ? 'bg-[#F2ECE4] font-medium' : 'hover:bg-[#F9F6F1]'
                  }`}
                >
                  <td className="py-3 px-3.5 font-serif text-sm text-[#2C2926] font-semibold">
                    {item.size}
                  </td>
                  <td className="py-3 px-3.5 text-[#554F48]">{item.brazilianSize}</td>
                  <td className="py-3 px-3.5 text-[#554F48]">{item.bust}</td>
                  <td className="py-3 px-3.5 text-[#554F48]">{item.waist}</td>
                  <td className="py-3 px-3.5 text-[#554F48]">{item.hip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How to choose */}
        <div className="text-xs text-[#554F48] space-y-2 bg-[#F7F3EE] p-4 rounded-xs border border-[#E8DFD5]">
          <p className="font-medium text-[#2C2926]">Dica de caimento Linen & Soul:</p>
          <p>
            • Nossas peças já possuem caimento fluido pensado para o bem-estar. Se você gosta de um visual mais amplo e despojado (estilo resort oversized), opte por um número acima.
          </p>
          <p>
            • Todas as calças possuem elástico anatômico na parte posterior e cordão embutido, adaptando-se confortavelmente ao corpo sem marcar.
          </p>
          <p>
            • Se a peça não vestir perfeitamente, a primeira troca é totalmente por nossa conta em até 30 dias.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-[#EAE3DC] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#2C2926] text-[#FAF8F5] text-xs font-sans tracking-widest uppercase rounded-xs hover:bg-[#433E39] transition-colors"
          >
            Entendido
          </button>
        </div>
      </motion.div>
    </div>
  );
};
