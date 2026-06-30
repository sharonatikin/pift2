'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const pipelineSteps = ['Apply', 'Counseling', 'Admission', 'Studio Learning', 'Portfolio Development', 'Career Launch'];

export default function TextileJourneyPipeline() {
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
    
    // Light red/clay box styling matching preceding modules
    cardBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    cardHoverBg: isDark ? 'hover:bg-[#F0C9CB]/25' : 'hover:bg-[#EBB4B6]',
    cardHoverBorder: isDark ? 'hover:border-[#F0C9CB]/40' : 'hover:border-[#D69CA2]',
    
    // Directional transition arrow weights
    arrowAccent: isDark ? 'text-[#FF4141]' : 'text-[#A31225]',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight font-sans">
            Start Your Textile Design Journey
          </h2>
        </div>
        
        {/* Responsive Flex Flow Container */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 max-w-5xl mx-auto w-full">
          {pipelineSteps.map((title, idx) => (
            <div key={idx} className="flex items-center gap-x-2">
              
              {/* Sequential Action Node */}
              <div className={`border rounded-xl px-6 py-4 flex items-center justify-center text-center transition-all duration-300 min-h-[52px] min-w-[140px] cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}>
                <span className={`text-xs sm:text-sm font-semibold tracking-wide font-sans ${theme.textPill}`}>
                  {title}
                </span>
              </div>
              
              {/* Transitional Vector Arrow */}
              {idx !== pipelineSteps.length - 1 && (
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

      </div>
    </section>
  );
}