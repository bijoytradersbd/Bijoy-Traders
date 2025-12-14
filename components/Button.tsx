import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-red-700 hover:bg-red-800 focus:ring-red-500 shadow-md",
    secondary: "border-transparent text-red-900 bg-red-100 hover:bg-red-200 focus:ring-red-500",
    whatsapp: "border-transparent text-white bg-green-600 hover:bg-green-700 focus:ring-green-500 shadow-md",
    outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-red-500"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};