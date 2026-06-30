'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const steps = [
  'Fiber', 'Yarn', 'Fabric', 'Dyeing', 'Printing', 
  'Surface Development', 'Sampling', 'Collection Creation', 'Market Launch'
];

export default function TextileCreationPipeline() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone theme styling tokens
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textPill: isDark ? 'text-[#F5D6D8]' : 'text-[#4A282A]',
    textFootnote: isDark ? 'text-neutral-500' : 'text-neutral-600',
    
    // Custom light red/clay box styling for pipeline chips
    cardBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    cardHoverBg: isDark ? 'hover:bg-[#F0C9CB]/25' : 'hover:bg-[#EBB4B6]',
    cardHoverBorder: isDark ? 'hover:border-[#F0C9CB]/40' : 'hover:border-[#D69CA2]',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20',
    
    // Layout lines & indicators
    dividerBorder: isDark ? 'border-zinc-900/40' : 'border-neutral-200',
    arrowAccent: isDark ? 'text-[#FF4141]' : 'text-[#A31225]'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight font-sans">
            The Textile Creation Process
          </h2>
        </div>
        
        {/* Optimized Pipeline Flow Container */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 max-w-6xl mx-auto w-full">
          {steps.map((title, idx) => (
            <div key={idx} className="flex items-center gap-x-2">
              
              {/* Process Node Chip */}
              <div className={`border rounded-xl px-5 py-3 flex items-center justify-center text-center transition-all duration-300 min-h-[44px] cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}>
                <span className={`text-xs sm:text-sm font-semibold tracking-wide font-sans ${theme.textPill}`}>
                  {title}
                </span>
              </div>
              
              {/* Dynamic Connection Indicator */}
              {idx !== steps.length - 1 && (
                <div className={`flex items-center justify-center px-1 transition-colors duration-300 ${theme.arrowAccent}`}>
                  <svg 
                    className="w-4 h-4 transform rotate-0" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              )}
              
            </div>
          ))}
        </div>
        
        {/* Lower Footnote Context */}
        <div className={`text-center max-w-3xl mx-auto mt-16 pt-6 border-t transition-colors duration-300 ${theme.dividerBorder}`}>
          <p className={`text-xs sm:text-sm font-light leading-relaxed font-sans ${theme.textFootnote}`}>
            Textile design education covers fibers, yarns, fabrics, dyeing, printing and fabric development processes.
          </p>
        </div>

      </div>
    </section>
  );
}