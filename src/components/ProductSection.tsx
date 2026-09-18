import React, { useState } from 'react';
import { Product, GarmentSize, GarmentColor } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Sparkles } from 'lucide-react';

interface ProductSectionProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: GarmentSize, color: GarmentColor) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  onQuickView,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Conjuntos', 'Robes', 'Avulsos'];

  const filteredProducts =
    activeCategory === 'Todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="colecao" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#EAE3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#7D7065] block mb-2 font-medium">
              A Coleção Essencial
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2926] font-normal leading-tight">
              Peças modernas para o descanso e a vida em casa.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#2C2926] text-[#FAF8F5]'
                    : 'bg-[#F4EFEB] text-[#554F48] hover:bg-[#EAE3DC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 p-6 sm:p-8 bg-[#F4EFEB] rounded-xs border border-[#E8DFD5] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] flex items-center justify-center shrink-0 border border-[#DFD5C9]">
              <Sparkles className="w-5 h-5 text-[#8C7662]" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#2C2926] font-normal">
                Tamanhos desenhados para acolher do P ao GG
              </h4>
              <p className="text-xs text-[#6B645C] font-sans mt-0.5">
                Não sabe qual escolher? Consulte nossa tabela com centímetros exatos ou solicite auxílio individual.
              </p>
            </div>
          </div>
          <div className="text-xs uppercase tracking-widest text-[#2C2926] font-sans font-medium px-4 py-2 border border-[#C5BCB0] rounded-xs bg-[#FAF8F5]">
            Troca Simples & Sem Custo
          </div>
        </div>

      </div>
    </section>
  );
};
