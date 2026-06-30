'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const programCards = [
  { title: 'Duration', text: '3 Year Program' }, { title: 'Eligibility', text: '10+2 or Equivalent' },
  { title: 'Studio Learning', text: 'Professional Studios' }, { title: 'Industry Projects', text: 'Real-World Experience' },
  { title: 'CAD Training', text: 'Digital Textile Tools' }, { title: 'Portfolio Development', text: 'Professional Portfolio' },
  { title: 'Internships', text: 'Industry Placements' }, { title: 'Placement Support', text: 'Career Guidance' }
];

export default function TextileProgramDetails() {
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
    textCardTitle: isDark ? 'text-white' : 'text-[#4A282A]',
    textCardDesc: isDark ? 'text-neutral-400' : 'text-[#4A282A]/80',
    textFootnote: isDark ? 'text-neutral-500' : 'text-neutral-600',
    
    // Light red/clay box styling matching preceding modules
    cardBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    cardHoverBg: isDark ? 'hover:bg-[#F0C9CB]/25' : 'hover:bg-[#EBB4B6]',
    cardHoverBorder: isDark ? 'hover:border-[#F0C9CB]/40' : 'hover:border-[#D69CA2]',
    
    // Core structural separators
    dividerBorder: isDark ? 'border-zinc-900/40' : 'border-neutral-200',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium font-sans">
            Program Details
          </h2>
        </div>
        
        {/* Grid Presentation Deck */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {programCards.map((item, idx) => (
            <div 
              key={idx} 
              className={`border rounded-xl p-8 flex flex-col justify-center items-start text-left min-h-[140px] transition-all duration-300 cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}
            >
              {/* Card Feature Header */}
              <h3 className={`text-base sm:text-lg font-semibold mb-2 font-sans transition-colors duration-300 ${theme.textCardTitle}`}>
                {item.title}
              </h3>
              
              {/* Short Core Sub-Text description */}
              <p className={`text-xs sm:text-sm font-light leading-relaxed transition-colors duration-300 ${theme.textCardDesc}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        
        {/* Lower Footnote Context */}
        <div className={`text-center max-w-3xl mx-auto mt-16 pt-6 border-t transition-colors duration-300 ${theme.dividerBorder}`}>
          <p className={`text-xs sm:text-sm font-light leading-relaxed font-sans transition-colors duration-300 ${theme.textFootnote}`}>
            PIFT offers Textile Design programs in diploma, advanced diploma and degree pathways.
          </p>
        </div>

      </div>
    </section>
  );
}