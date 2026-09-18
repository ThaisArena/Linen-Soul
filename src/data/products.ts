import { Product, SizeMeasurement } from '../types';
import { editorialImages } from './images';

export const COLORS = {
  areia: { id: 'areia', name: 'Areia Natural', hex: '#E5DFD7', bgClass: 'bg-[#E5DFD7]' },
  salvia: { id: 'salvia', name: 'Sálvia Suave', hex: '#A8B3A7', bgClass: 'bg-[#A8B3A7]' },
  cru: { id: 'cru', name: 'Linho Cru', hex: '#F0EBE1', bgClass: 'bg-[#F0EBE1]' },
  terracota: { id: 'terracota', name: 'Terracota Bruma', hex: '#C89F8B', bgClass: 'bg-[#C89F8B]' },
  noite: { id: 'noite', name: 'Noite Carvão', hex: '#343330', bgClass: 'bg-[#343330]' },
};

export const PRODUCTS: Product[] = [
  {
    id: 'conjunto-serenidade-linho',
    name: 'Conjunto Serenidade',
    tagline: 'Camisa alfaiataria fluida com calça reta e cós anatômico',
    category: 'Conjuntos',
    price: 689,
    installmentPrice: '6x de R$ 114,83 sem juros',
    description: 'Com corte inspirado na alfaiataria minimalista, não parece pijama: uma peça sofisticada para transitar do café ao jardim com conforto absoluto.',
    longDescription: 'O Conjunto Serenidade foi desenhado para a mulher que rejeita o formato infantilizado dos pijamas convencionais. Confeccionado em 100% linho puro pré-lavado, oferece caimento levemente solto ao corpo, gola cubana estruturada com acabamento limpo e botões em madrepérola natural colhida de forma sustentável. A calça traz cintura elástica traseira com cordão embutido, bolsos laterais invisíveis e barra larga alfaiatada.',
    fabric: {
      composition: '100% Linho Europeu Puro Certificado OEKO-TEX®',
      origin: 'Fibras colhidas de forma sustentável e tecidas no Brasil',
      benefits: [
        'Respirabilidade térmica natural: fresco no calor, acolhedor no clima ameno',
        'Propriedade hipoalergênica e antibacteriana natural',
        'Fica mais macio e sedoso a cada lavagem',
        'Costuras francesas internas sem atrito no corpo ao deitar'
      ]
    },
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [COLORS.areia, COLORS.salvia, COLORS.cru],
    primaryImage: editorialImages.hero,
    lifestyleImage: editorialImages.gardenRest,
    isBestseller: true,
    fitGuide: 'Modelagem fluida e despretensiosa. Escolha seu tamanho usual para caimento levemente solto ou um tamanho maior para caimento oversized.'
  },
  {
    id: 'conjunto-aurora-respiro',
    name: 'Conjunto Aurora Pima & Linho',
    tagline: 'Blusa fluida com decote sutil em V e short com cós nobre',
    category: 'Conjuntos',
    price: 540,
    installmentPrice: '6x de R$ 90,00 sem juros',
    description: 'Desenvolvido para as manhãs ensolaradas e noites quentes. Fibras ultrarrespiráveis com toque suave que não esquentam nem prendem os movimentos.',
    longDescription: 'Uma releitura moderna e descomplicada do descanso. A blusa apresenta linhas retas e decote V sutil com pespontos invisíveis, enquanto o short possui cós plano frontal com elástico anatômico traseiro e pequenas fendas laterais para amplitude total ao caminhar pelo quintal ou tomar um café preguiçoso.',
    fabric: {
      composition: '65% Linho Puro Lavado, 35% Algodão Pima Peruano de Fibras Longas',
      origin: 'Feito artesanalmente no Brasil',
      benefits: [
        'Toque aveludado na pele desde o primeiro uso',
        'Absorção de umidade superior a tecidos sintéticos',
        'Caimento impecável que não marca e não deforma',
        'Botões decorativos sutis em osso natural polido'
      ]
    },
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [COLORS.cru, COLORS.terracota, COLORS.salvia],
    primaryImage: editorialImages.coffeeRitual,
    lifestyleImage: editorialImages.gardenRest,
    isNew: true,
    fitGuide: 'Corte pensado para a silhueta brasileira do P ao GG, com gancho confortável e folga ideal de movimentos.'
  },
  {
    id: 'robe-alma-longo',
    name: 'Robe Alma em Linho Puro',
    tagline: 'Comprimento midi com transpassado nobre, faixa solta e bolsos laterais',
    category: 'Robes',
    price: 720,
    installmentPrice: '6x de R$ 120,00 sem juros',
    description: 'A terceira peça definitiva para acordar, tomar café na varanda ou receber amigos em casa com imponência e naturalidade.',
    longDescription: 'Inspirado nos quimonos minimalistas japoneses e adaptado ao clima brasileiro. Apresenta mangas amplas 7/8 para facilitar os movimentos na cozinha ou no jardim, passantes reforçados, faixa larga em linho duplo e bolsos embutidos nas costuras laterais. Perfeito para usar sobre os conjuntos ou solto como quimono leve.',
    fabric: {
      composition: '100% Linho Nobre Gramatura Média Pré-Encolhido',
      origin: 'Costura manual em Santa Catarina, Brasil',
      benefits: [
        'Estrutura com balanço elegante e fluido',
        'Gramatura perfeita que não fica transparente',
        'Protege do frescor da manhã com respiração ativa',
        'Acabamentos com viés de algodão puro nas orlas internas'
      ]
    },
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [COLORS.areia, COLORS.cru, COLORS.noite],
    primaryImage: editorialImages.gardenRest,
    lifestyleImage: editorialImages.hero,
    isBestseller: true,
    fitGuide: 'Caimento generoso e regulável através da faixa transpassada. Veste confortavelmente do P ao GG.'
  },
  {
    id: 'calca-pantalona-lounge',
    name: 'Pantalona Lounge Bruma',
    tagline: 'Corte amplo com caimento fluido, cós duplo e bolsos funcionais',
    category: 'Avulsos',
    price: 430,
    installmentPrice: '6x de R$ 71,66 sem juros',
    description: 'Uma calça que vai da cama ao lounge com elegância de alfaiataria. Toque sedoso e respirabilidade máxima.',
    longDescription: 'Com corte pantalona reto e generoso, a calça Lounge Bruma elimina qualquer sensação de aperto. Possui bolsos faca profundos, cós inteligente com frente lisa e elástico embutido nas costas para suporte sem marcar a cintura.',
    fabric: {
      composition: '100% Fibras Naturais de Linho Pré-Amaciado',
      origin: 'Feito no Brasil com mão de obra valorizada',
      benefits: [
        'Zero poliéster, zero microplásticos na sua pele',
        'Termorregulação contínua durante todo o ciclo de sono',
        'Lavagem stonewashed para textura macia ao toque',
        'Barra ampla com pesponto de 4cm'
      ]
    },
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [COLORS.salvia, COLORS.areia, COLORS.noite],
    primaryImage: editorialImages.fabricDetail,
    lifestyleImage: editorialImages.coffeeRitual,
    fitGuide: 'Comprimento ideal para usar descalça em casa ou com sandálias rasteiras.'
  }
];

export const SIZE_MEASUREMENTS: SizeMeasurement[] = [
  {
    size: 'P',
    brazilianSize: 'Veste 36 — 38',
    bust: '84 – 90 cm',
    waist: '66 – 72 cm',
    hip: '94 – 100 cm',
    description: 'Caimento confortável e leve com folga de vestibilidade pensada para a hora de dormir.'
  },
  {
    size: 'M',
    brazilianSize: 'Veste 40 — 42',
    bust: '91 – 98 cm',
    waist: '73 – 80 cm',
    hip: '101 – 108 cm',
    description: 'Proporção equilibrada entre ombros e quadril, mantendo o balanço natural do linho.'
  },
  {
    size: 'G',
    brazilianSize: 'Veste 44 — 46',
    bust: '99 – 106 cm',
    waist: '81 – 88 cm',
    hip: '109 – 116 cm',
    description: 'Cós com elástico anatômico que se acomoda sem prender, com manga espaçosa.'
  },
  {
    size: 'GG',
    brazilianSize: 'Veste 48 — 50',
    bust: '107 – 116 cm',
    waist: '89 – 98 cm',
    hip: '117 – 126 cm',
    description: 'Modelagem ampla e fluida desenvolvida com cuidado para máxima liberdade e elegância.'
  }
];

export const BRAND_VALUES = [
  {
    title: '100% Fibras Naturais',
    tagline: 'Respirabilidade Ativa',
    description: 'Apenas linho nobre europeu pré-lavado e algodão pima. Fibras vivas que mantêm sua temperatura estável durante a noite, sem o calor sufocante dos tecidos sintéticos.',
  },
  {
    title: 'Não Parece Pijama',
    tagline: 'Loungewear Contemporâneo',
    description: 'Cortes com inspiração na alfaiataria atemporal, golas estruturadas e caimento limpo. Você está impecável para abrir a porta, regar as plantas ou tomar um café.',
  },
  {
    title: 'Feito no Brasil',
    tagline: 'Produção Consciente & Ética',
    description: 'Cada peça é confeccionada por costureiras experientes em ateliês locais, com remuneração justa e costuras francesas que não pinicam ao deitar.',
  },
  {
    title: 'Grade Inclusiva P ao GG',
    tagline: 'Modelagem Anatômica Real',
    description: 'Desenvolvido pensando na ergonomia e diversidade dos corpos das mulheres brasileiras, sem elásticos apertados ou tecidos repuxando.',
  }
];

export const REVIEWS = [
  {
    author: 'Helena S. Guimarães',
    city: 'São Paulo, SP',
    verified: true,
    sizeBought: 'Tamanho M — Conjunto Serenidade',
    quote: 'Nunca mais compro pijama convencional. A sensação do linho puro na pele ao acordar no domingo é um luxo discreto. Passo a manhã inteira no quintal sem sentir que estou "de pijama".',
    rating: 5
  },
  {
    author: 'Camila Drummond',
    city: 'Belo Horizonte, MG',
    verified: true,
    sizeBought: 'Tamanho G — Robe Alma & Aurora',
    quote: 'O caimento no corpo é impecável, não esquenta nada no calor da noite e a costura francesa interna não incomoda nadinha. É visível o carinho e o acabamento feito no Brasil.',
    rating: 5
  },
  {
    author: 'Beatriz Vasconcellos',
    city: 'Rio de Janeiro, RJ',
    verified: true,
    sizeBought: 'Tamanho GG — Conjunto Serenidade',
    quote: 'Sou tamanho 48 e encontrar sleepwear elegante de verdade que não aperte o cós e tenha tecido nobre era impossível. O GG da Linen & Soul veste como um abraço sofisticado.',
    rating: 5
  }
];
