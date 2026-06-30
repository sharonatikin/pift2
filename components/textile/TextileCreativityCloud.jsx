'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const nodes = [
  { title: 'Textile Illustration', top: '30%', left: '18%' }, 
  { title: 'Print Design', top: '34%', left: '54%' },
  { title: 'Fabric Development', top: '32%', left: '40%' }, 
  { title: 'Surface Ornamentation', top: '16%', left: '76%' },
  { title: 'Embroidery Design', top: '54%', left: '28%' }, 
  { title: 'Knitting', top: '42%', left: '82%' },
  { title: 'Weaving', top: '48%', left: '62%' }, 
  { title: 'Trend Forecasting', top: '68%', left: '22%' },
  { title: 'Dyeing Techniques', top: '54%', left: '48%' }, 
  { title: 'Portfolio Building', top: '64%', left: '86%' },
  { title: 'Material Research', top: '69%', left: '68%' }, 
  { title: 'CAD Textile Design', top: '74%', left: '52%' }
];

export default function TextileCreativityCloud() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone design system tokens
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textFootnote: isDark ? 'text-neutral-500' : 'text-neutral-600',
    
    // Dynamic tag design matching the preceding section tokens
    tagBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    tagBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    tagText: isDark ? 'text-[#F5D6D8]' : 'text-[#4A282A]',
    
    // Interactive hover states
    tagHoverBg: isDark ? 'hover:bg-[#F0C9CB]/30' : 'hover:bg-[#EBB4B6]',
    tagHoverText: isDark ? 'hover:text-white' : 'hover:text-black',
    shadow: isDark ? 'shadow-none' : 'shadow-sm shadow-[#F0C9CB]/30',
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative lg:min-h-[680px] flex flex-col justify-between transition-colors duration-300`}>
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-medium font-sans">
          Master Textile Creativity
        </h2>
      </div>
      
      {/* Interactive Node Canvas */}
      <div className="relative w-full flex flex-wrap justify-center gap-3 lg:block lg:h-[400px] max-w-7xl mx-auto px-4">
        {nodes.map((node, idx) => (
          <div 
            key={idx} 
            style={{ 
              position: mounted && window.innerWidth >= 1024 ? 'absolute' : undefined,
              top: mounted && window.innerWidth >= 1024 ? node.top : undefined,
              left: mounted && window.innerWidth >= 1024 ? node.left : undefined,
              transform: mounted && window.innerWidth >= 1024 ? 'translate(-50%, -50%)' : undefined
            }} 
            className="z-10"
          >
            <div className={`border px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-default whitespace-nowrap ${theme.tagBg} ${theme.tagBorder} ${theme.tagText} ${theme.tagHoverBg} ${theme.tagHoverText} ${theme.shadow}`}>
              {node.title}
            </div>
          </div>
        ))}
      </div>
      
      {/* Lower Footnote Context */}
      <div className="text-center max-w-2xl mx-auto mt-12 pt-4 px-4">
        <p className={`text-xs sm:text-sm font-light transition-colors duration-300 ${theme.textFootnote}`}>
          CAD-based textile design is also offered through specialized training at PIFT.
        </p>
      </div>

    </section>
  );
}