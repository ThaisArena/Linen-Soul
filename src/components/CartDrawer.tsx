import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onOpenSizeGuide: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onOpenSizeGuide,
}) => {
  const [coupon, setCoupon] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 450;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const discountAmount = subtotal * appliedDiscount;
  const total = subtotal - discountAmount;
  const installmentValue = total / 6;

  const handleApplyCoupon = () => {
    setCouponError('');
    setCouponSuccess('');
    if (coupon.trim().toUpperCase() === 'LINENSOUL10' || coupon.trim().toUpperCase() === 'PRIMEIRACOMPRA') {
      setAppliedDiscount(0.1);
      setCouponSuccess('Cupom de 10% de boas-vindas aplicado com sucesso!');
    } else {
      setCouponError('Cupom inválido. Experimente LINENSOUL10');
    }
  };

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#2C2926]/50 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#EAE3DC] shadow-2xl flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-5 border-b border-[#EAE3DC] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#2C2926]" />
              <h3 className="font-serif text-xl text-[#2C2926] font-normal">
                Sua Sacola de Descanso
              </h3>
              <span className="text-xs text-[#7D7065] font-sans">
                ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#554F48] hover:text-[#2C2926] rounded-full"
              aria-label="Fechar sacola"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-[#F4EFEB] px-5 py-3 border-b border-[#EAE3DC]">
            <div className="flex items-center justify-between text-xs font-sans mb-1.5">
              {remainingForFreeShipping === 0 ? (
                <span className="text-[#3F6647] font-medium flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Parabéns! Você garantiu Frete Cortesia para todo o Brasil.
                </span>
              ) : (
                <span className="text-[#554F48]">
                  Adicione mais{' '}
                  <strong className="text-[#2C2926]">
                    R$ {remainingForFreeShipping.toFixed(2).replace('.', ',')}
                  </strong>{' '}
                  para ganhar frete cortesia.
                </span>
              )}
            </div>
            <div className="w-full bg-[#E5DFD7] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#2C2926] h-full transition-all duration-500 rounded-full"
                style={{ width: `${shippingPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="grow overflow-y-auto p-5 space-y-4">
            {checkoutComplete ? (
              <div className="text-center py-12 px-4">
                <div className="w-14 h-14 rounded-full bg-[#EAF0EB] text-[#3F6647] flex items-center justify-center mx-auto mb-4 border border-[#CADBCB]">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl text-[#2C2926] mb-2 font-normal">
                  Pedido Recebido com Calma!
                </h4>
                <p className="text-xs sm:text-sm text-[#5C554D] leading-relaxed mb-6 font-light">
                  Seu pedido entrará em nosso ateliê de costura e será embalado em saquinhos de algodão cru. Enviamos os detalhes e o código de rastreio para o seu e-mail.
                </p>
                <button
                  onClick={() => {
                    setCheckoutComplete(false);
                    onClose();
                  }}
                  className="px-6 py-3 bg-[#2C2926] text-[#FAF8F5] text-xs uppercase tracking-widest font-sans rounded-xs"
                >
                  Continuar Descobrindo
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 px-4">
                <p className="font-serif text-xl text-[#2C2926] mb-2">Sua sacola está vazia</p>
                <p className="text-xs text-[#7D7065] font-sans mb-6">
                  Descubra o toque das fibras naturais para transformar suas manhãs e noites.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 border border-[#2C2926] text-[#2C2926] text-xs uppercase tracking-widest font-sans hover:bg-[#2C2926] hover:text-[#FAF8F5] transition-colors"
                >
                  Ver a Coleção
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 bg-[#FAF8F5] border border-[#EAE3DC] rounded-xs"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded-xs bg-[#EAE3DC] shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col justify-between grow">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-base text-[#2C2926] leading-tight">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#9E958C] hover:text-[#2C2926] transition-colors p-1"
                          title="Remover peça"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1 text-[11px] text-[#6E665D] font-sans">
                        <span>Tam: <strong className="text-[#2C2926]">{item.size}</strong></span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-[#C5BCB0]"
                            style={{ backgroundColor: item.color.hex }}
                          />
                          <span>{item.color.name}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#F2ECE4]">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-[#D8CECE] rounded-xs bg-[#FAF8F5]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-[#554F48] hover:text-[#2C2926]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-sans text-[#2C2926]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-[#554F48] hover:text-[#2C2926]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif text-base text-[#2C2926]">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Checkout */}
          {items.length > 0 && !checkoutComplete && (
            <div className="p-5 bg-[#F4EFEB] border-t border-[#EAE3DC] space-y-3.5">
              {/* Coupon Row */}
              <div className="space-y-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Cupom de desconto (ex: LINENSOUL10)"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="grow bg-[#FAF8F5] border border-[#D8CECE] px-3 py-1.5 text-xs text-[#2C2926] uppercase rounded-xs focus:outline-hidden focus:border-[#2C2926]"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="px-3 py-1.5 bg-[#2C2926] text-[#FAF8F5] text-xs font-sans tracking-wider uppercase rounded-xs"
                  >
                    Aplicar
                  </button>
                </div>
                {couponSuccess && (
                  <p className="text-[11px] text-[#3F6647] font-sans flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    {couponSuccess}
                  </p>
                )}
                {couponError && (
                  <p className="text-[11px] text-[#B34040] font-sans">{couponError}</p>
                )}
              </div>

              {/* Subtotal & Discounts */}
              <div className="space-y-1.5 text-xs font-sans text-[#554F48] pt-2 border-t border-[#E8DFD5]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-[#3F6647]">
                    <span>Desconto (10%)</span>
                    <span>- R$ {discountAmount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Frete Brasil</span>
                  <span>{remainingForFreeShipping === 0 ? 'Cortesia' : 'R$ 29,90'}</span>
                </div>
                <div className="flex justify-between font-serif text-lg text-[#2C2926] font-medium pt-2 border-t border-[#E2D9CE]">
                  <span>Total</span>
                  <span>
                    R${' '}
                    {(total + (remainingForFreeShipping === 0 ? 0 : 29.9))
                      .toFixed(2)
                      .replace('.', ',')}
                  </span>
                </div>
                <p className="text-[11px] text-[#7D7065] text-right">
                  ou em até 6x de R$ {(total / 6).toFixed(2).replace('.', ',')} sem juros
                </p>
              </div>

              {/* Action */}
              <button
                onClick={handleSimulateCheckout}
                disabled={isCheckingOut}
                className="w-full py-4 bg-[#2C2926] hover:bg-[#433E39] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-sans font-medium rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                {isCheckingOut ? (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 animate-spin" />
                    Processando com Segurança...
                  </span>
                ) : (
                  <>
                    <span>Finalizar Pedido</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] text-[#7D7065] font-sans pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4B5E4F]" />
                  Ambiente Seguro & Criptografado
                </span>
                <span>•</span>
                <span>PIX ou Cartão em até 6x</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
