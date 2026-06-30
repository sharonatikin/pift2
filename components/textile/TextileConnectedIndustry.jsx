'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const tracks = ['Fashion Brands', 'Textile Mills', 'Export Houses', 'Home Furnishing', 'Design Studios', 'Fabric Manufacturers'];

export default function TextileConnectedIndustry() {
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
    textTrack: isDark ? 'text-[#F5D6D8]' : 'text-[#4A282A]',
    
    // Custom light red/clay box styling for industry network track pills
    cardBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    cardHoverBg: isDark ? 'hover:bg-[#F0C9CB]/25' : 'hover:bg-[#EBB4B6]',
    cardHoverBorder: isDark ? 'hover:border-[#F0C9CB]/40' : 'hover:border-[#D69CA2]',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-20 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-medium font-sans">
            Connected To Industry
          </h2>
        </div>
        
        {/* 6-Column Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
          {tracks.map((title, idx) => (
            <div 
              key={idx} 
              className={`border rounded-xl p-6 flex items-center justify-center text-center min-h-[90px] sm:min-h-[110px] transition-all duration-300 cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}
            >
              <h3 className={`text-xs sm:text-sm font-semibold tracking-widest uppercase leading-snug font-sans transition-colors duration-300 ${theme.textTrack}`}>
                {title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}