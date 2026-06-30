'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const specs = [
  { title: 'Textile Innovation', desc: 'Push boundaries with experimental materials and techniques' },
  { title: 'Fashion Industry', desc: 'Create fabrics that define fashion collections' },
  { title: 'Home Furnishing Design', desc: 'Design textiles for interiors and lifestyle' },
  { title: 'Surface Design', desc: 'Master pattern, print and surface techniques' },
  { title: 'Sustainable Materials', desc: 'Innovate with eco-conscious textile solutions' },
  { title: 'Global Textile Careers', desc: 'Access opportunities worldwide in textile design' }
];

export default function TextileSpecializations() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone theme styling tokens matching Section (46).png
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textCardTitle: isDark ? 'text-neutral-200' : 'text-[#4A282A]',
    textCardDesc: isDark ? 'text-neutral-400' : 'text-[#4A282A]/80',
    
    // Custom light red/clay box styling for grid blocks
    cardBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    cardHoverBg: isDark ? 'hover:bg-[#F0C9CB]/25' : 'hover:bg-[#EBB4B6]',
    cardHoverBorder: isDark ? 'hover:border-[#F0C9CB]/40' : 'hover:border-[#D69CA2]',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight font-sans">
            Create The Fabrics Behind Every Great Design
          </h2>
        </div>
        
        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {specs.map((spec, idx) => (
            <div 
              key={idx} 
              className={`border rounded-xl p-8 flex flex-col justify-start text-left min-h-[140px] transition-all duration-300 cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}
            >
              {/* Specialization Title */}
              <h3 className={`text-base sm:text-lg font-semibold mb-2 font-sans transition-colors duration-300 ${theme.textCardTitle}`}>
                {spec.title}
              </h3>
              
              {/* Description Paragraph Block */}
              <p className={`text-xs sm:text-sm font-light leading-relaxed transition-colors duration-300 ${theme.textCardDesc}`}>
                {spec.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}