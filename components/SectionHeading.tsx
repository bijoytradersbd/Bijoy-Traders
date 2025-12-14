import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<Props> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
        {subtitle}
      </p>
    )}
    <div className="mt-4 mx-auto w-24 h-1 bg-red-600 rounded-full"></div>
  </div>
);