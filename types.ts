export interface Product {
  id: string;
  name: string;
  category: string;
  pricePerPiece: number;
  pricePer1000: number;
  description: string;
  imageUrl: string;
  inStock: boolean;
}

export interface BusinessInfo {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  deliveryAreas: string[];
}

export enum CalculationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}