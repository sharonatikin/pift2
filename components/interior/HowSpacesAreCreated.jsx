'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ArrowRight } from 'lucide-react';

const processSteps = [
  { name: 'Research', hasArrow: true },
  { name: 'Concept Development', hasArrow: true },
  { name: 'Space Planning', hasArrow: true },
  { name: 'Material Selection', hasArrow: true },
  { name: 'Furniture Layout', hasArrow: true },
  { name: '3D Visualization', hasArrow: true },
  { name: 'Client Presentation', hasArrow: true },
  { name: 'Execution', hasArrow: true },
  { name: 'Final Experience', hasArrow: false },
];

export default function HowSpacesAreCreated() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone tokens
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textStepName: isDark ? 'text-neutral-300 group-hover:text-white' : 'text-neutral-700 group-hover:text-black',
    cardBg: isDark ? 'bg-[#0B0C0E]' : 'bg-white',
    cardBorder: isDark ? 'border-[#141619]' : 'border-neutral-200',
    cardHoverBg: isDark ? 'hover:bg-[#101216]' : 'hover:bg-neutral-50/60',
    cardHoverBorder: isDark ? 'hover:border-neutral-800' : 'hover:border-neutral-400',
    shadow: isDark ? 'shadow-none' : 'shadow-sm shadow-neutral-200/40',
    
    // Exact red identity styling extracted from the mockup screenshot
    accentIndicator: 'text-[#C5162E]',
    badgeBg: 'bg-[#C5162E]'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-20 px-4 sm:py-28 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center transition-colors duration-300`}>
      <div className="max-w-3xl w-full mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-center mb-20 font-sans">
          How Great Spaces Are Created
        </h2>

        {/* Vertical Stack List */}
        <div className="flex flex-col gap-y-5">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-x-5 sm:gap-x-8 group">
              
              {/* Circular Ordered Step Indicator */}
              <div className={`w-12 h-12 rounded-full ${theme.badgeBg} flex items-center justify-center font-sans text-base font-medium text-white shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0`}>
                {index + 1}
              </div>

              {/* Main Content Bar Row */}
              <div className={`flex-1 flex items-center justify-between border rounded-xl px-6 py-4 sm:py-5 transition-all duration-300 ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}>
                {/* Step Name */}
                <span className={`text-sm sm:text-base font-normal tracking-wide font-sans transition-colors duration-300 ${theme.textStepName}`}>
                  {step.name}
                </span>

                {/* Crimson Interactive Navigation Arrow */}
                {step.hasArrow ? (
                  <ArrowRight 
                    className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 stroke-[2] ${theme.accentIndicator}`} 
                    aria-hidden="true"
                  />
                ) : (
                  // Conditional padding element ensuring matching sizing layout boundaries
                  <div className="w-4 h-4 shrink-0" />
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}