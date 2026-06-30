'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const careers = [
  'Interior Designer', 
  'Space Planner', 
  'Furniture Designer', 
  'Retail Designer', 
  'Exhibition Designer', 
  'Lighting Consultant', 
  'Visual Merchandiser', 
  'Design Consultant', 
  '3D Visualizer', 
  'Project Coordinator'
];

export default function InteriorCareers() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated theme styling tokens matching Section (42).png
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    
    // Custom matching hues for the image's specific card treatment
    cardBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    cardText: isDark ? 'text-[#F5D6D8]' : 'text-[#4A282A]',
    
    // Hover configs
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
            Careers That Shape Environments
          </h2>
        </div>
        
        {/* 5-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 items-stretch">
          {careers.map((title, idx) => (
            <div 
              key={idx} 
              className={`border rounded-xl p-6 flex items-center justify-center text-center min-h-[84px] sm:min-h-[100px] transition-all duration-300 cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardText} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}
            >
              <h3 className="text-sm sm:text-base font-medium tracking-wide font-sans">
                {title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}