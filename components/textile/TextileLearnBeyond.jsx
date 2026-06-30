'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const items = [
  { title: 'Textile Industry Visits', desc: 'Experience real textile production environments' },
  { title: 'Craft Research', desc: 'Document traditional textile techniques' },
  { title: 'Exhibitions', desc: 'Showcase your work at design exhibitions' },
  { title: 'Workshops', desc: 'Learn from industry textile experts' },
  { title: 'Industry Mentorship', desc: 'Guidance from professional textile designers' },
  { title: 'Live Projects', desc: 'Work on real commercial textile projects' }
];

export default function TextileLearnBeyond() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone theme styling tokens matching your system specifications
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textCardTitle: isDark ? 'text-neutral-200' : 'text-[#4A282A]',
    textCardDesc: isDark ? 'text-neutral-400' : 'text-[#4A282A]/80',
    textFootnote: isDark ? 'text-neutral-500' : 'text-neutral-600',
    
    // Custom light red/clay box styling for content blocks
    cardBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    cardHoverBg: isDark ? 'hover:bg-[#F0C9CB]/25' : 'hover:bg-[#EBB4B6]',
    cardHoverBorder: isDark ? 'hover:border-[#F0C9CB]/40' : 'hover:border-[#D69CA2]',
    
    // Core divider alignments
    dividerBorder: isDark ? 'border-zinc-900/40' : 'border-neutral-200',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium font-sans">
            Learn Beyond The Studio
          </h2>
        </div>
        
        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl p-8 flex flex-col justify-center text-left transition-all duration-300 min-h-[140px] cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}
            >
              {/* Pillar Category Title */}
              <h3 className={`text-base sm:text-lg font-semibold mb-2 font-sans transition-colors duration-300 ${theme.textCardTitle}`}>
                {item.title}
              </h3>
              
              {/* Short Core Description */}
              <p className={`text-xs sm:text-sm font-light leading-relaxed transition-colors duration-300 ${theme.textCardDesc}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Lower Footnote Context */}
        <div className={`text-center max-w-3xl mx-auto mt-16 pt-6 border-t transition-colors duration-300 ${theme.dividerBorder}`}>
          <p className={`text-xs sm:text-sm font-light leading-relaxed font-sans transition-colors duration-300 ${theme.textFootnote}`}>
            Industry visits, craft exposure and market-oriented learning are common elements of textile design education.
          </p>
        </div>

      </div>
    </section>
  );
}