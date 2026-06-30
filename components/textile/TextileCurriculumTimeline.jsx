'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const timelineData = [
  { year: 'Year 1', title: 'Foundation of Design', modules: ['Textile Fundamentals', 'Color Studies', 'Fabric Exploration'] },
  { year: 'Year 2', title: 'Weaving', modules: ['Dyeing & Printing', 'Embroidery', 'Surface Design', 'Material Development'] },
  { year: 'Year 3', title: 'Textile Innovation', modules: ['CAD Textile Design', 'Collection Development', 'Industry Projects', 'Portfolio Presentation'] }
];

export default function TextileCurriculumTimeline() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone design tokens matching App (8).png specs
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textCardTitle: isDark ? 'text-white' : 'text-[#111111]',
    textCardDesc: isDark ? 'text-neutral-400' : 'text-neutral-800',
    
    // Accurate mockup card gray-clay replication profiles
    cardBg: isDark ? 'bg-[#111111]/30' : 'bg-[#D2D2D2]',
    cardBorder: isDark ? 'border-zinc-900' : 'border-neutral-300/40',
    shadow: isDark ? 'shadow-none' : 'shadow-xl shadow-neutral-300/20',
    
    // Core structural axis configurations
    centerLine: isDark ? 'bg-[#C5162E]/80' : 'bg-[#C5162E]/60',
    mobileLine: isDark ? 'bg-zinc-800' : 'bg-neutral-300',
    bulletDot: isDark ? 'bg-zinc-600' : 'bg-neutral-700',
    
    // Exact red year marker font colors
    yearAccent: isDark ? 'text-[#FF4141]' : 'text-[#C5162E]'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight font-sans">
            Your Textile Design Evolution
          </h2>
        </div>
        
        {/* Alternate Alternating Layout Timeline Frame Wrapper */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Central Vertical Desktop Axis */}
          <div className={`hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] ${theme.centerLine} transition-colors duration-300`} />
          {/* Left Vertical Mobile Rule */}
          <div className={`block lg:hidden absolute top-0 bottom-0 left-4 w-[1px] ${theme.mobileLine} transition-colors duration-300`} />
          
          <div className="space-y-12 lg:space-y-0 relative">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col lg:flex-row items-start w-full transition-all duration-500 ${
                    isEven ? 'lg:justify-end lg:text-left' : 'lg:justify-start lg:text-left'
                  } pl-10 lg:pl-0 lg:mb-8`}
                >
                  {/* Content block masonry container */}
                  <div className={`w-full lg:w-[45%] border rounded-2xl p-8 relative transition-all duration-300 ${theme.cardBg} ${theme.cardBorder} ${theme.shadow}`}>
                    {/* Absolute positioned year indicator tag */}
                    <span className={`text-xs font-semibold absolute top-6 right-8 font-sans ${theme.yearAccent}`}>
                      {item.year}
                    </span>
                    
                    {/* Stage Title Header */}
                    <h3 className={`text-xl font-medium mb-5 font-sans ${theme.textCardTitle}`}>
                      {item.title}
                    </h3>
                    
                    {/* Modules Checklist stack */}
                    <ul className="space-y-2.5">
                      {item.modules.map((mod, mIdx) => (
                        <li key={mIdx} className="flex items-center gap-3 text-left group/item">
                          <span className={`w-1.5 h-1.5 rounded-full block flex-shrink-0 transition-colors duration-300 ${theme.bulletDot}`} />
                          <span className={`text-sm font-light tracking-wide transition-colors duration-300 ${theme.textCardDesc}`}>
                            {mod}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}