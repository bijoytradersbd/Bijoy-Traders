import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { estimateConstructionMaterials } from '../services/geminiService';
import { CalculationStatus } from '../types';
import { Calculator as CalcIcon, Loader2, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [status, setStatus] = useState<CalculationStatus>(CalculationStatus.IDLE);

  const handleEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setStatus(CalculationStatus.LOADING);
    const response = await estimateConstructionMaterials(input);
    setResult(response);
    setStatus(CalculationStatus.SUCCESS);
  };

  return (
    <section id="calculator" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-red-700 rounded-full mb-4 shadow-lg shadow-red-900/50">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Smart Brick Estimator</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Not sure how many bricks you need? Ask our AI assistant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Input Side */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <form onSubmit={handleEstimate}>
              <label htmlFor="calculation-input" className="block text-sm font-medium text-gray-300 mb-2">
                Describe your project (e.g., "A 10ft high by 50ft long wall with 5 inch thickness")
              </label>
              <textarea
                id="calculation-input"
                rows={4}
                className="w-full rounded-md border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 p-4"
                placeholder="Enter dimensions..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="mt-6">
                <Button 
                  type="submit" 
                  fullWidth 
                  disabled={status === CalculationStatus.LOADING || !input.trim()}
                  className="disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-red-600 to-red-800"
                >
                  {status === CalculationStatus.LOADING ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                      Calculating...
                    </>
                  ) : (
                    <>
                      <CalcIcon className="-ml-1 mr-2 h-5 w-5" />
                      Get Estimate
                    </>
                  )}
                </Button>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                *Estimates are approximate. Always consult with your mason/engineer for final procurement.
              </p>
            </form>
          </div>

          {/* Output Side */}
          <div className="bg-gray-800 min-h-[300px] p-8 rounded-2xl shadow-xl border border-gray-700 flex flex-col justify-center">
            {status === CalculationStatus.IDLE && (
              <div className="text-center text-gray-500">
                <CalcIcon className="h-16 w-16 mx-auto mb-4 opacity-20" />
                <p>Enter your wall dimensions to see the breakdown here.</p>
              </div>
            )}
            
            {status === CalculationStatus.LOADING && (
              <div className="space-y-4 animate-pulse">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                <div className="h-32 bg-gray-700 rounded w-full"></div>
              </div>
            )}

            {status === CalculationStatus.SUCCESS && result && (
              <div className="prose prose-invert max-w-none prose-headings:text-red-400 prose-strong:text-white">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
            )}
            
             {status === CalculationStatus.ERROR && (
              <div className="text-red-400 text-center">
                Something went wrong. Please try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};