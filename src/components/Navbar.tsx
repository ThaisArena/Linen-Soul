import React, { useState, useEffect } from 'react';
import { ShoppingBag, Ruler, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSizeGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenSizeGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Coleção', href: '#colecao' },
    { label: 'O Conceito', href: '#conceito' },
    { label: 'O Ritual', href: '#rituais' },
    { label: 'Tecidos Naturais', href: '#tecidos-naturais' },
    { label: 'Feito no Brasil', href: '#feito-no-brasil' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#2C2926] text-[#F4EFEB] text-xs py-2 px-4 text-center tracking-widest uppercase font-sans border-b border-[#3E3A36]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4C3B3]" />
            Feito no Brasil com Fibras 100% Naturais
          </span>
          <span className="hidden sm:inline text-[#7D7065]">•</span>
          <span className="hidden sm:inline">Tamanhos do P ao GG</span>
          <span className="hidden md:inline text-[#7D7065]">•</span>
          <span className="hidden md:inline">Frete cortesia a partir de R$ 450</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EAE3DC] py-3.5'
            : 'bg-[#FAF8F5] border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Menu Trigger */}
          <button
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#2C2926] hover:text-[#7D7065] transition-colors"
            aria-label="Abrir menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop Navigation Left */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-sans font-medium text-[#4A453F]">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#2C2926] transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#2C2926] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Brand Logo */}
          <a
            href="#"
            className="flex flex-col items-center group text-center focus:outline-hidden"
          >
            <span className="font-serif text-2xl sm:text-3xl lg:text-3xl tracking-[0.18em] text-[#2C2926] font-normal uppercase leading-tight group-hover:opacity-90 transition-opacity">
              Linen & Soul
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#7D7065] font-sans -mt-0.5">
              Modern Sleepwear • Brasil
            </span>
          </a>

          {/* Desktop Navigation Right & Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-sans font-medium text-[#4A453F] mr-2">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#2C2926] transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#2C2926] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Size Guide Trigger */}
            <button
              id="btn-nav-size-guide"
              onClick={onOpenSizeGuide}
              className="hidden sm:flex items-center gap-1.5 text-xs text-[#5C554D] hover:text-[#2C2926] py-1.5 px-2.5 rounded-full border border-[#DCD3C7] hover:border-[#2C2926] transition-all"
              title="Ver Guia de Medidas do P ao GG"
            >
              <Ruler className="w-3.5 h-3.5" />
              <span className="tracking-wider uppercase text-[10px]">Guia P-GG</span>
            </button>

            {/* Cart Button */}
            <button
              id="btn-open-cart"
              onClick={onOpenCart}
              className="relative p-2 text-[#2C2926] hover:text-[#7D7065] transition-colors flex items-center gap-2"
              aria-label="Ver sacola de compras"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#2C2926] text-[#FAF8F5] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-semibold">
                  {cartCount}
                </span>
              )}
              <span className="hidden md:inline text-xs uppercase tracking-wider font-sans text-[#4A453F]">
                Sacola ({cartCount})
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#2C2926]/40 backdrop-blur-xs z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 bottom-0 left-0 w-4/5 max-w-sm bg-[#FAF8F5] z-50 shadow-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#EAE3DC]">
                  <div>
                    <span className="font-serif text-2xl tracking-widest text-[#2C2926] block">
                      Linen & Soul
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#7D7065]">
                      Modern Sleepwear Brasil
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-[#4A453F] hover:text-[#2C2926]"
                    aria-label="Fechar menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-8 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-serif text-[#2C2926] hover:text-[#7D7065] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenSizeGuide();
                    }}
                    className="flex items-center gap-2 text-left text-sm text-[#4A453F] hover:text-[#2C2926] pt-4 border-t border-[#EAE3DC]"
                  >
                    <Ruler className="w-4 h-4 text-[#7D7065]" />
                    <span>Guia de Medidas & Tamanhos (P ao GG)</span>
                  </button>
                </nav>
              </div>

              <div className="pt-6 border-t border-[#EAE3DC] text-xs text-[#7D7065] space-y-2">
                <p>• 100% Linho e Fibras Naturais</p>
                <p>• Produção Artesanal e Ética no Brasil</p>
                <p>• Atendimento: contato@linenandsoul.com.br</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
