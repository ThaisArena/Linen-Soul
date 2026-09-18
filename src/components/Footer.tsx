import React, { useState } from 'react';
import { ArrowRight, Check, Heart, Mail, ShieldCheck, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSizeGuide }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#2C2926] text-[#FAF8F5] pt-16 pb-12 font-sans border-t border-[#3E3A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Manifesto Banner */}
        <div className="pb-14 border-b border-[#3E3A36] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5B5A5] block mb-2">
              Cartas de Desaceleração
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug mb-2">
              Receba inspirações sobre descanso, tecidos puros e pequenos rituais.
            </h3>
            <p className="text-xs text-[#9E9388] font-light max-w-md">
              Além de acesso antecipado a pequenas tiragens artesanais e 10% de cortesia na sua primeira escolha com o cupom <span className="text-[#FAF8F5] font-mono font-medium">LINENSOUL10</span>.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 bg-[#38332E] border border-[#524A42] rounded-xs flex items-center gap-3 text-xs text-[#EAE3DC]">
                <Check className="w-5 h-5 text-[#88A88B]" />
                <span>Bem-vinda à comunidade Linen & Soul. Enviamos um carinho para a sua caixa de entrada.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="grow bg-[#38332E] border border-[#524A42] px-4 py-3 rounded-xs text-xs text-[#FAF8F5] placeholder-[#857B71] focus:outline-hidden focus:border-[#C5B5A5]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#FAF8F5] text-[#2C2926] text-xs font-sans font-medium uppercase tracking-widest rounded-xs hover:bg-[#EAE3DC] transition-colors shrink-0"
                >
                  Inscrever
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Columns */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-[#3E3A36]">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-2xl tracking-widest uppercase mb-3 text-[#FAF8F5]">
              Linen & Soul
            </h4>
            <p className="text-xs text-[#A89D91] leading-relaxed font-light mb-6 max-w-sm">
              Modern sleepwear & loungewear confeccionado no Brasil exclusivamente em fibras 100% naturais. Conforto térmico inigualável, toque sedoso e elegância despretensiosa para viver e dormir em paz.
            </p>
            <div className="text-[11px] text-[#C5B5A5] flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-[#C89F8B]" />
              <span>Confeccionado artesanalmente no Brasil</span>
            </div>
          </div>

          {/* Col 2: Coleção */}
          <div className="lg:col-span-3">
            <h5 className="text-xs uppercase tracking-[0.2em] text-[#C5B5A5] font-medium mb-4">
              A Coleção
            </h5>
            <ul className="space-y-2.5 text-xs text-[#9E9388]">
              <li><a href="#colecao" className="hover:text-[#FAF8F5] transition-colors">Conjunto Serenidade em Linho</a></li>
              <li><a href="#colecao" className="hover:text-[#FAF8F5] transition-colors">Conjunto Aurora Pima & Linho</a></li>
              <li><a href="#colecao" className="hover:text-[#FAF8F5] transition-colors">Robe Alma Longo Transpassado</a></li>
              <li><a href="#colecao" className="hover:text-[#FAF8F5] transition-colors">Pantalona Lounge Bruma</a></li>
              <li><a href="#colecao" className="hover:text-[#FAF8F5] transition-colors">Edições Limitadas de Cor</a></li>
            </ul>
          </div>

          {/* Col 3: Atendimento & Medidas */}
          <div className="lg:col-span-3">
            <h5 className="text-xs uppercase tracking-[0.2em] text-[#C5B5A5] font-medium mb-4">
              Guia & Atendimento
            </h5>
            <ul className="space-y-2.5 text-xs text-[#9E9388]">
              <li>
                <button onClick={onOpenSizeGuide} className="hover:text-[#FAF8F5] transition-colors text-left">
                  Tabela de Medidas (P ao GG)
                </button>
              </li>
              <li><a href="#tecidos-naturais" className="hover:text-[#FAF8F5] transition-colors">Como Cuidar do Seu Linho Puro</a></li>
              <li><a href="#feito-no-brasil" className="hover:text-[#FAF8F5] transition-colors">Nossa Produção Ética no Brasil</a></li>
              <li><span className="hover:text-[#FAF8F5] cursor-pointer">Primeira Troca Cortesia (30 Dias)</span></li>
              <li><span className="hover:text-[#FAF8F5] cursor-pointer">Envio Seguro para Todo o Brasil</span></li>
            </ul>
          </div>

          {/* Col 4: Contato Ateliê */}
          <div className="lg:col-span-2">
            <h5 className="text-xs uppercase tracking-[0.2em] text-[#C5B5A5] font-medium mb-4">
              Ateliê
            </h5>
            <div className="text-xs text-[#9E9388] space-y-2 font-light">
              <p>Segunda a Sexta, 9h às 18h</p>
              <p className="text-[#FAF8F5]">contato@linenandsoul.com.br</p>
              <p>WhatsApp Ateliê: (11) 98721-4309</p>
              <p className="pt-2 text-[10px] text-[#7A7167]">São Paulo • Florianópolis</p>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A7167]">
          <p>© {new Date().getFullYear()} Linen & Soul. Todos os direitos reservados. Feito no Brasil.</p>
          <div className="flex items-center gap-6">
            <span>Privacidade & Transparência</span>
            <span>•</span>
            <span>Termos de Uso</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#88A88B]" />
              Compra 100% Segura
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
