import React, { useState } from 'react';
import { Product, GarmentSize, GarmentColor } from '../types';
import { ShoppingBag, Eye, Sparkles, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: GarmentSize, color: GarmentColor) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<GarmentSize>('M');
  const [selectedColor, setSelectedColor] = useState<GarmentColor>(product.colors[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1600);
  };

  return (
    <div
      className="group flex flex-col bg-[#FAF8F5] border border-[#EAE3DC] rounded-xs overflow-hidden transition-all duration-300 hover:border-[#C5BCB0] hover:shadow-xs"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Hover Swap */}
      <div className="relative aspect-[4/5] bg-[#EAE3DC] overflow-hidden">
        <img
          src={isHovered ? product.lifestyleImage : product.primaryImage}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-103"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {product.isBestseller && (
            <span className="bg-[#2C2926] text-[#FAF8F5] text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-xs font-sans font-medium">
              Destaque
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#FAF8F5]/95 text-[#2C2926] text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-xs font-sans border border-[#D8CECE]">
              Novo
            </span>
          )}
        </div>

        {/* Quick View Button */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute top-3 right-3 p-2 bg-[#FAF8F5]/85 hover:bg-[#FAF8F5] text-[#2C2926] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-xs"
          title="Ver detalhes da peça"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Fabric Pill */}
        <div className="absolute bottom-3 left-3 right-3 bg-[#FAF8F5]/90 backdrop-blur-xs py-1.5 px-3 rounded-xs text-[10px] font-sans text-[#4A453F] border border-[#FAF8F5] flex items-center justify-between pointer-events-none">
          <span className="truncate">{product.fabric.composition.split(',')[0]}</span>
          <span className="text-[#7D7065] text-[9px] uppercase tracking-wider shrink-0 ml-2">100% Natural</span>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-5 flex flex-col grow justify-between">
        <div>
          {/* Colors Selection */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase tracking-widest text-[#7D7065] font-sans">
              Cor:
            </span>
            <div className="flex items-center gap-1.5">
              {product.colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color)}
                  className={`w-4 h-4 rounded-full border transition-all ${
                    selectedColor.id === color.id
                      ? 'border-[#2C2926] ring-1 ring-[#2C2926] ring-offset-1'
                      : 'border-[#C8BEB3] hover:scale-110'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={color.name}
                />
              ))}
            </div>
            <span className="text-[11px] text-[#554F48] font-sans ml-1">
              {selectedColor.name}
            </span>
          </div>

          {/* Title & Tagline */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-xl text-[#2C2926] hover:text-[#7D7065] transition-colors cursor-pointer leading-tight mb-1"
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#736B63] font-sans line-clamp-1 mb-3">
            {product.tagline}
          </p>

          {/* Price & Installments */}
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl text-[#2C2926] font-medium">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <span className="text-[11px] text-[#7D7065] font-sans block">
              ou {product.installmentPrice}
            </span>
          </div>

          {/* Sizes Selector (P, M, G, GG) */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-[11px] font-sans mb-1.5">
              <span className="text-[#7D7065] uppercase tracking-wider">Tamanho:</span>
              <span className="text-[#4A453F] font-medium">{selectedSize} (Veste confortavelmente)</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-1.5 text-xs font-sans tracking-wider border rounded-xs transition-all ${
                    selectedSize === size
                      ? 'bg-[#2C2926] text-[#FAF8F5] border-[#2C2926]'
                      : 'bg-transparent text-[#4A453F] border-[#D8CECE] hover:border-[#2C2926]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleAdd}
          className={`w-full py-3 px-4 rounded-xs text-xs font-sans font-medium uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-all ${
            addedAnimation
              ? 'bg-[#4B5E4F] text-[#FAF8F5]'
              : 'bg-[#2C2926] hover:bg-[#433E39] text-[#FAF8F5]'
          }`}
        >
          {addedAnimation ? (
            <>
              <Check className="w-4 h-4" />
              <span>Adicionado à Sacola</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Adicionar • Tam. {selectedSize}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
