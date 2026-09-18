/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Product, GarmentSize, GarmentColor, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialStory } from './components/EditorialStory';
import { ConceptSection } from './components/ConceptSection';
import { ProductSection } from './components/ProductSection';
import { NaturalFabricsSection } from './components/NaturalFabricsSection';
import { MadeInBrazilSection } from './components/MadeInBrazilSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CartDrawer } from './components/CartDrawer';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Add to cart handler
  const handleAddToCart = (product: Product, size: GarmentSize, color: GarmentColor) => {
    const itemId = `${product.id}-${size}-${color.id}`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          productId: product.id,
          name: product.name,
          price: product.price,
          size,
          color,
          quantity: 1,
          image: product.primaryImage,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleScrollToCollection = () => {
    const el = document.getElementById('colecao');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2926] flex flex-col font-sans selection:bg-[#EAE3DC] selection:text-[#2C2926]">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      <main className="grow">
        {/* Hero Section */}
        <Hero
          onExploreClick={handleScrollToCollection}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        />

        {/* Concept Section: "Não parece pijama, mas roupa moderna de dormir" */}
        <ConceptSection />

        {/* Editorial Story: Garden rest day, morning coffee ritual, pure fabric macro */}
        <EditorialStory />

        {/* Product Collection: P to GG, natural fabrics, refined tailoring */}
        <ProductSection
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
        />

        {/* Natural Fabrics & Breathability: Linho, Algodão Pima, Thermoregulation */}
        <NaturalFabricsSection />

        {/* Made in Brazil: Ateliê artesanal, costura francesa, responsabilidade */}
        <MadeInBrazilSection />

        {/* Verified Reviews from Women wearing P to GG */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer onOpenSizeGuide={() => setIsSizeGuideOpen(true)} />

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <ProductModal
            product={quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
            onAddToCart={handleAddToCart}
            onOpenSizeGuide={() => {
              setQuickViewProduct(null);
              setIsSizeGuideOpen(true);
            }}
          />
        )}
      </AnimatePresence>

      {/* Size Guide Modal (P ao GG) */}
      <AnimatePresence>
        {isSizeGuideOpen && (
          <SizeGuideModal onClose={() => setIsSizeGuideOpen(false)} />
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />
    </div>
  );
}
