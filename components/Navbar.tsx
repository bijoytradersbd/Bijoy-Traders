import React, { useState } from 'react';
import { Menu, X, Phone, ShoppingCart, Home } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Estimate', href: '#calculator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Home className="h-8 w-8 text-red-700" />
              <span className="font-bold text-2xl text-gray-900">
                Bijoy<span className="text-red-700">Traders</span>
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-red-700 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-800 transition-colors"
            >
              <Phone size={18} />
              <span className="font-semibold">Call Now</span>
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
               href={`tel:${BUSINESS_INFO.phone}`}
               className="w-full mt-4 flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-3 rounded-md"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};