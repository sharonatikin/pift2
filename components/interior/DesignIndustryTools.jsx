'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Monitor } from 'lucide-react';

const industryTools = [
  { name: 'AutoCAD' },
  { name: '3Ds Max' },
  { name: 'SketchUp' },
  { name: 'Photoshop' },
  { name: 'V-Ray' },
  { name: 'Rendering Tools' },
];

export default function DesignIndustryTools() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated theme styling configurations
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textToolName: isDark ? 'text-neutral-300 group-hover:text-white' : 'text-neutral-800 group-hover:text-black',
    
    // Exact structural representation of the gradient cards from the screenshot
    cardGradient: isDark 
      ? 'from-[#1A080A] via-[#0A0A0A] to-black border-[#260F11]' 
      : 'from-[#FBEAEA] via-white/40 to-white border-[#EBBBBF]',
      
    cardHoverBorder: isDark ? 'hover:border-[#4A1215]' : 'hover:border-[#C5162E]',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-neutral-200/40',
    
    // Persistent crimson styling details matching the mock design specs
    iconColor: 'text-[#C5162E]'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-20 px-6 sm:py-24 md:py-32 lg:px-16 flex flex-col items-center justify-center transition-colors duration-300`}>
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-center mb-16 font-sans">
          Design With Industry Tools
        </h2>

        {/* 6-Column Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 w-full">
          {industryTools.map((tool, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br border rounded-xl p-6 md:p-8 flex flex-col items-center justify-center text-center gap-y-5 transition-all duration-300 ${theme.cardGradient} ${theme.cardHoverBorder} ${theme.shadow} group`}
            >
              {/* Core interactive radial light overlay inside the container block */}
              <div className={`absolute inset-0 rounded-xl bg-radial-gradient to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                isDark ? 'from-[#3A0F12]/20' : 'from-[#C5162E]/10'
              }`} />

              {/* Monitor Icon Wrapper */}
              <div className={`${theme.iconColor} flex items-center justify-center z-10`}>
                <Monitor 
                  className="w-8 h-8 md:w-9 md:h-9 stroke-[1.5] transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_4px_rgba(197,22,46,0.15)]" 
                  aria-hidden="true"
                />
              </div>
              
              {/* Tool Label */}
              <h3 className={`text-sm sm:text-base font-normal tracking-wide font-sans z-10 transition-colors duration-300 ${theme.textToolName}`}>
                {tool.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}