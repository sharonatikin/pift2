'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const steps = [
  { label: 'Step 1', title: 'Apply' }, 
  { label: 'Step 2', title: 'Counseling' },
  { label: 'Step 3', title: 'Portfolio\nDiscussion' }, 
  { label: 'Step 4', title: 'Admission' },
  { label: 'Step 5', title: 'Start Creating' }
];

export default function InteriorDesignJourney() {
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
    textLabel: isDark ? 'text-zinc-300' : 'text-[#4A282A]/70',
    textTitle: isDark ? 'text-white' : 'text-[#4A282A]',
    
    // Circular structural parameters matching your portfolio grids
    badgeBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    badgeBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20',
    
    // Asymmetric process line vector color alignment
    arrowAccent: isDark ? 'text-[#FF4141]' : 'text-[#A31225]'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium font-sans">
            Begin Your Design Journey
          </h2>
        </div>
        
        {/* Flow Stack Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-12 lg:gap-y-0 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
              
              {/* Circular Workflow Unit Node */}
              <div className={`w-32 h-32 sm:w-36 sm:h-36 border flex flex-col items-center justify-center rounded-full transition-all duration-300 cursor-default ${theme.badgeBg} ${theme.badgeBorder} ${theme.shadow}`}>
                <span className={`text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-1 font-sans ${theme.textLabel}`}>
                  {step.label}
                </span>
                <h3 className={`text-sm sm:text-base font-semibold text-center tracking-wide whitespace-pre-line px-4 font-sans ${theme.textTitle}`}>
                  {step.title}
                </h3>
              </div>
              
              {/* Transitional Navigation Arrow */}
              {idx !== steps.length - 1 && (
                <div className={`flex items-center justify-center py-4 lg:py-0 lg:px-6 transition-colors duration-300 ${theme.arrowAccent}`}>
                  <svg 
                    className="w-5 h-5 transform rotate-90 lg:rotate-0" 
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