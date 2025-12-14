import React from 'react';
import { Product } from '../types';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { Button } from './Button';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, I am interested in buying ${product.name}. Please provide details.`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-56 bg-gray-200">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {product.inStock ? 'In Stock' : 'Stock Out'}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <p className="text-sm text-red-600 font-semibold mb-1">{product.category}</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
        </div>

        <div className="mt-auto">
          <div className="flex justify-between items-end mb-6 border-t border-gray-100 pt-4">
            <div>
              <p className="text-xs text-gray-500">Per Piece</p>
              <p className="text-xl font-bold text-gray-900">৳{product.pricePerPiece.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Per 1000</p>
              <p className="text-xl font-bold text-red-700">৳{product.pricePer1000.toLocaleString()}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
             >
               <MessageCircle size={18} />
               WhatsApp
             </a>
             <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-md font-medium transition-colors"
             >
               <Phone size={18} />
               Call
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};