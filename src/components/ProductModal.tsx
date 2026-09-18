import React, { useState } from 'react';
import { Product, GarmentSize, GarmentColor } from '../types';
import { X, ShoppingBag, Check, Sparkles, Shield, HeartHandshake, Ruler } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, size: GarmentSize, color: GarmentColor) => void;
  onOpenSizeGuide: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizeGuide,
}) => {
  const [selectedSize, setSelectedSize] = useState<GarmentSize>('M');
  const [selectedColor, setSelectedColor] = useState<GarmentColor>(product.colors[0]);
  const [activeImage, setActiveImage] = useState<string>(product.primaryImage);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
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

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative bg-[#FAF8F5] w-full max-w-4xl rounded-xs shadow-2xl border border-[#EAE3DC] overflow-hidden z-10 max-h-[92vh] flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] text-[#2C2926] rounded-full transition-colors border border-[#EAE3DC]"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Column */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between bg-[#F4EFEB] border-r border-[#EAE3DC]">
          <div className="relative aspect-[4/5] rounded-xs overflow-hidden bg-[#EAE3DC] mb-4">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#2C2926] text-[#FAF8F5] text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-xs font-sans">
              100% Fibra Natural
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            <button
              onClick={() => setActiveImage(product.primaryImage)}
              className={`w-16 h-20 rounded-xs overflow-hidden border-2 transition-all ${
                activeImage === product.primaryImage
                  ? 'border-[#2C2926] opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={product.primaryImage}
                alt="Foto principal"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
            <button
              onClick={() => setActiveImage(product.lifestyleImage)}
              className={`w-16 h-20 rounded-xs overflow-hidden border-2 transition-all ${
                activeImage === product.lifestyleImage
                  ? 'border-[#2C2926] opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={product.lifestyleImage}
                alt="Foto no quintal/ritual"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>
        </div>

        {/* Info Column */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[80vh] md:max-h-[92vh] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#7D7065] font-sans mb-1.5">
              <span>{product.category}</span>
              <span>•</span>
              <span className="text-[#3F6647] font-medium">Feito no Brasil</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2926] font-normal leading-tight mb-2">
              {product.name}
            </h2>

            <div className="mb-4">
              <span className="font-serif text-2xl text-[#2C2926] font-medium">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-xs text-[#7D7065] font-sans block mt-0.5">
                ou {product.installmentPrice}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#554F48] leading-relaxed font-light mb-5">
              {product.longDescription}
            </p>

            {/* Colors */}
            <div className="mb-5 pb-5 border-b border-[#EAE3DC]">
              <label className="text-xs uppercase tracking-wider text-[#7D7065] font-sans block mb-2">
                Cor Selecionada: <strong className="text-[#2C2926]">{selectedColor.name}</strong>
              </label>
              <div className="flex items-center gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`w-7 h-7 rounded-full border transition-all flex items-center justify-center ${
                      selectedColor.id === color.id
                        ? 'border-[#2C2926] ring-2 ring-[#2C2926] ring-offset-2'
                        : 'border-[#C8BEB3] hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor.id === color.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2C2926]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes (P, M, G, GG) */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-wider text-[#7D7065] font-sans">
                  Tamanho:
                </label>
                <button
                  onClick={onOpenSizeGuide}
                  className="text-xs text-[#4A453F] hover:text-[#2C2926] flex items-center gap-1 underline underline-offset-2"
                >
                  <Ruler className="w-3 h-3" />
                  <span>Guia de Medidas (P ao GG)</span>
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-xs font-sans tracking-wider border rounded-xs transition-all ${
                      selectedSize === size
                        ? 'bg-[#2C2926] text-[#FAF8F5] border-[#2C2926] font-medium'
                        : 'bg-transparent text-[#4A453F] border-[#D8CECE] hover:border-[#2C2926]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[#7D7065] mt-2 font-sans italic">
                {product.fitGuide}
              </p>
            </div>

            {/* Fabric Benefits */}
            <div className="bg-[#F4EFEB] p-4 rounded-xs border border-[#EAE3DC] mb-6">
              <div className="flex items-center gap-1.5 text-xs font-medium text-[#2C2926] mb-2 font-sans">
                <Sparkles className="w-3.5 h-3.5 text-[#7A8B7B]" />
                <span>{product.fabric.composition}</span>
              </div>
              <ul className="space-y-1.5 text-[11px] text-[#554F48] font-sans">
                {product.fabric.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#7A8B7B]">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action */}
          <div className="pt-4 border-t border-[#EAE3DC]">
            <button
              onClick={handleAdd}
              className={`w-full py-3.5 px-6 rounded-xs text-xs font-sans font-medium uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all ${
                added
                  ? 'bg-[#4B5E4F] text-[#FAF8F5]'
                  : 'bg-[#2C2926] hover:bg-[#433E39] text-[#FAF8F5]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Item Adicionado à Sacola</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Adicionar à Sacola • {selectedSize}</span>
                </>
              )}
            </button>
            <p className="text-center text-[10px] text-[#8C8379] font-sans mt-2">
              Primeira troca grátis em até 30 dias • Embalagem em algodão cru reutilizável
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
