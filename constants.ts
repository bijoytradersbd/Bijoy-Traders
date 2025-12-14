import { BusinessInfo, Product } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Bijoy Traders BD",
  phone: "+8801700000000", // Placeholder
  whatsapp: "8801700000000", // Placeholder for WA API
  email: "sales@bijoytraders.bd",
  address: "Dhaka-Chittagong Highway, Comilla, Bangladesh",
  deliveryAreas: ["Dhaka", "Comilla", "Chittagong", "Narayanganj", "Gazipur"]
};

// SIMULATED GOOGLE SHEET DATA
// In a real implementation, this would be fetched from a published Google Sheet CSV URL
export const MOCK_SHEET_DATA: Product[] = [
  {
    id: "p1",
    name: "Auto Bricks (1st Class)",
    category: "Machine Made",
    pricePerPiece: 12.50,
    pricePer1000: 12500,
    description: "High-strength automatic machine-made bricks. Perfect for high-rise buildings. Uniform shape and size.",
    imageUrl: "https://picsum.photos/id/234/800/600",
    inStock: true
  },
  {
    id: "p2",
    name: "Manual Bricks (1st Class)",
    category: "Traditional",
    pricePerPiece: 10.00,
    pricePer1000: 10000,
    description: "Traditional kiln-burnt bricks. Deep red color, excellent durability for residential homes.",
    imageUrl: "https://picsum.photos/id/235/800/600",
    inStock: true
  },
  {
    id: "p3",
    name: "Picket Bricks (Jhama)",
    category: "Engineering",
    pricePerPiece: 11.00,
    pricePer1000: 11000,
    description: "Over-burnt bricks used for road construction and foundation aggregate (khoa).",
    imageUrl: "https://picsum.photos/id/236/800/600",
    inStock: true
  },
  {
    id: "p4",
    name: "Hollow Blocks",
    category: "Modern",
    pricePerPiece: 35.00,
    pricePer1000: 35000,
    description: "Lightweight concrete hollow blocks. Reduces building weight and provides thermal insulation.",
    imageUrl: "https://picsum.photos/id/238/800/600",
    inStock: false
  }
];