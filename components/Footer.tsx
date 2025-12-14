import React from 'react';
import { Home } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <Home className="h-6 w-6 text-red-500" />
               <span className="font-bold text-xl">Bijoy<span className="text-red-500">Traders</span></span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for high-quality construction materials. 
              We ensure strength, durability, and on-time delivery for every project.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-red-500 transition-colors">All Products</a></li>
              <li><a href="#calculator" className="hover:text-red-500 transition-colors">Brick Calculator</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-semibold mb-4">Contact</h3>
             <ul className="space-y-2 text-sm text-gray-400">
               <li>{BUSINESS_INFO.address}</li>
               <li>Phone: {BUSINESS_INFO.phone}</li>
               <li>Email: {BUSINESS_INFO.email}</li>
             </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};