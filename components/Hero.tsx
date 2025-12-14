import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590486803833-1c5dc8ce2ac6?q=80&w=2000&auto=format&fit=crop" 
          alt="Construction Site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Build Stronger With <br />
            <span className="text-red-500">Premium Red Bricks</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 mb-8 max-w-2xl">
            Bijoy Traders BD supplies top-quality auto and manual bricks for your dream home. Wholesale prices, guaranteed quality, and on-time delivery across Bangladesh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href="#products" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-red-700 bg-white hover:bg-gray-50 md:text-lg transition-transform hover:scale-105"
            >
              View Prices
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-red-700 hover:bg-red-800 md:text-lg transition-transform hover:scale-105"
            >
              Order Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-red-500" /> <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-red-500" /> <span>Direct From Kiln</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-red-500" /> <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};