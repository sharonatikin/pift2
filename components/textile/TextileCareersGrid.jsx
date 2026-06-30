'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const targets = [
  'Textile Designer', 'Print Designer', 'Surface Designer', 'Fabric Developer', 
  'Embroidery Designer', 'Textile Consultant', 'CAD Textile Designer', 
  'Home Furnishing Designer', 'Material Researcher', 'Textile Entrepreneur'
];

export default function TextileCareersGrid() {
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
    textCareer: isDark ? 'text-[#F5D6D8]' : 'text-[#4A282A]',
    textFootnote: isDark ? 'text-neutral-500' : 'text-neutral-600',
    
    // Custom light red/clay box styling for grid blocks
    cardBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    cardHoverBg: isDark ? 'hover:bg-[#F0C9CB]/25' : 'hover:bg-[#EBB4B6]',
    cardHoverBorder: isDark ? 'hover:border-[#F0C9CB]/40' : 'hover:border-[#D69CA2]',
    
    // Core divider lines
    dividerBorder: isDark ? 'border-zinc-900/40' : 'border-neutral-200',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight font-sans">
            Careers In Textile Innovation
          </h2>
        </div>
        
        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
          {targets.map((title, idx) => (
            <div 
              key={idx} 
              className={`border rounded-xl p-6 flex items-center justify-center text-center transition-all duration-300 cursor-default min-h-[84px] sm:min-h-[100px] ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}
            >
              <h3 className={`text-sm sm:text-base font-semibold tracking-wide font-sans transition-colors duration-300 ${theme.textCareer}`}>
                {title}
              </h3>
            </div>
          ))}
        </div>
        
        {/* Lower Footnote Context */}
        <div className={`text-center max-w-4xl mx-auto mt-16 pt-6 border-t transition-colors duration-300 ${theme.dividerBorder}`}>
          <p className={`text-xs sm:text-sm font-light leading-relaxed font-sans transition-colors duration-300 ${theme.textFootnote}`}>
            Textile design graduates work across fashion, apparel, home furnishings, textile manufacturing and design industries.
          </p>
        </div>

      </div>
    </section>
  );
}