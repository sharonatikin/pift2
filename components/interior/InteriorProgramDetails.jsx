'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const programData = [
  { title: 'Duration', text: '3 Years Full-time Program' }, 
  { title: 'Eligibility', text: '10+2 or Equivalent' },
  { title: 'Studio Training', text: 'Hands-on Learning Environment' }, 
  { title: 'Industry Projects', text: 'Real-world Experience' },
  { title: 'Software Learning', text: 'Industry-standard Tools' }, 
  { title: 'Internships', text: 'Professional Placement' },
  { title: 'Portfolio Development', text: 'Career-ready Work' }, 
  { title: 'Placement Support', text: 'Career Guidance' }
];

export default function InteriorProgramDetails() {
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
    textCardDesc: isDark ? 'text-neutral-300' : 'text-neutral-800',
    
    // Custom matching hues for the integrated design card style
    cardBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    
    // Hover and shadow presets
    cardHoverBg: isDark ? 'hover:bg-[#F0C9CB]/25' : 'hover:bg-[#EBB4B6]',
    cardHoverBorder: isDark ? 'hover:border-[#F0C9CB]/40' : 'hover:border-[#D69CA2]',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20',
    
    // Red color alignment across themes
    titleAccent: isDark ? 'text-[#FF4141]' : 'text-[#A31225]'
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
        
        {/* Grid Stack Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {programData.map((item, idx) => (
            <div 
              key={idx} 
              className={`border rounded-xl p-8 flex flex-col justify-center items-start text-left min-h-[140px] transition-all duration-300 cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}
            >
              {/* Dynamic Accent Step Title */}
              <h3 className={`text-base sm:text-lg font-semibold mb-3 font-sans transition-colors duration-300 ${theme.titleAccent}`}>
                {item.title}
              </h3>
              
              {/* Detail Paragraph Block */}
              <p className={`text-xs sm:text-sm font-light leading-relaxed transition-colors duration-300 ${theme.textCardDesc}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}