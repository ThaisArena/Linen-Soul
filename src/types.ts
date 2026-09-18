export type GarmentSize = 'P' | 'M' | 'G' | 'GG';

export interface GarmentColor {
  id: string;
  name: string;
  hex: string;
  bgClass: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Conjuntos' | 'Robes' | 'Avulsos' | 'Edição Especial';
  price: number;
  installmentPrice: string;
  description: string;
  longDescription: string;
  fabric: {
    composition: string;
    origin: string;
    benefits: string[];
  };
  sizes: GarmentSize[];
  colors: GarmentColor[];
  primaryImage: string;
  lifestyleImage: string;
  isNew?: boolean;
  isBestseller?: boolean;
  fitGuide: string;
}

export interface CartItem {
  id: string; // unique item uuid (product + size + color)
  productId: string;
  name: string;
  price: number;
  size: GarmentSize;
  color: GarmentColor;
  quantity: number;
  image: string;
}

export interface SizeMeasurement {
  size: GarmentSize;
  brazilianSize: string;
  bust: string;
  waist: string;
  hip: string;
  description: string;
}
