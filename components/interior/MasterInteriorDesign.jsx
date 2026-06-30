'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const skills = [
  'Space Planning',
  'Furniture Design',
  'Lighting Design',
  'Material Selection',
  'Color Psychology',
  'CAD Drafting',
  'AutoCAD',
  '3D Max',
  'Visualization',
  'Client Presentation',
  'Project Execution',
  'Portfolio Development',
];

export default function MasterInteriorDesign() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-scoped standalone design tokens
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    
    // Custom matching hues for the image's specific card treatment
    cardBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    cardText: isDark ? 'text-[#F5D6D8]' : 'text-[#4A282A]',
    
    // Hover interpolation configurations
    cardHoverBg: isDark ? 'hover:bg-[#F0C9CB]/25' : 'hover:bg-[#EBB4B6]',
    cardHoverBorder: isDark ? 'hover:border-[#F0C9CB]/40' : 'hover:border-[#D69CA2]',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20',
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-20 px-6 sm:py-24 md:py-32 lg:px-16 flex flex-col items-center justify-center transition-colors duration-300`}>
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-center mb-16 font-sans">
          Master The Art Of Interior Design
        </h2>

        {/* 4-Column Grid for Desktop, fluid collapse for Tablet/Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`border rounded-xl px-6 py-6 md:py-7 flex items-center justify-center text-center transition-all duration-300 cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardText} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}
            >
              <span className="text-sm sm:text-base font-medium tracking-wide font-sans">
                {skill}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}