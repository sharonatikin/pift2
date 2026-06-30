'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const timelineData = [
  {
    semester: 'Semester 1',
    tags: ['Design Fundamentals', 'Sketching', 'Color Theory', 'Design Principles'],
  },
  {
    semester: 'Semester 2',
    tags: ['Space Planning', 'Furniture Design', 'Materials & Finishes', 'Interior Concepts'],
  },
  {
    semester: 'Semester 3',
    tags: ['Residential Interiors', 'Lighting Design', 'CAD Introduction'],
  },
  {
    semester: 'Semester 4',
    tags: ['Commercial Interiors', 'Retail Spaces', '3D Visualization'],
  },
  {
    semester: 'Semester 5',
    tags: ['Advanced Interior Systems', 'Project Management', 'Professional Practice'],
  },
  {
    semester: 'Semester 6',
    tags: ['Final Design Project', 'Industry Internship', 'Portfolio Showcase'],
  },
];

export default function CreativeEvolutionTimeline() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Dynamic theme styling tokens evaluated entirely component-side
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    cardBg: isDark ? 'bg-[#090A0C]/60' : 'bg-white',
    cardBorder: isDark ? 'border-[#141619]' : 'border-neutral-200/80',
    cardHoverBg: isDark ? 'hover:bg-[#0D0E11]/80' : 'hover:bg-neutral-50',
    cardHoverBorder: isDark ? 'hover:border-neutral-400' : 'hover:border-neutral-300',
    tagBg: isDark ? 'bg-[#131518]' : 'bg-neutral-100',
    tagBorder: isDark ? 'border-[#1F2328]' : 'border-neutral-200',
    tagText: isDark ? 'text-neutral-300' : 'text-neutral-700',
    tagHoverText: isDark ? 'hover:text-white' : 'hover:text-black',
    tagHoverBorder: isDark ? 'hover:border-neutral-700' : 'hover:border-neutral-400',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-neutral-200/30',
    lineGradient: isDark 
      ? 'from-[#C5162E] to-[#C5162E]/10' 
      : 'from-[#C5162E] to-[#C5162E]/20',
    // Maintaining red accents across both modes per design image specifications
    accentText: 'text-[#C5162E]',
    badgeBg: 'bg-[#C5162E]'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-20 px-4 sm:py-28 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center transition-colors duration-300`}>
      <div className="max-w-4xl w-full mx-auto">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-center mb-20 font-sans">
          Your Creative Evolution
        </h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col">
          {timelineData.map((item, index) => {
            const isLast = index === timelineData.length - 1;

            return (
              <div key={index} className="flex gap-x-6 sm:gap-x-10 group relative">
                
                {/* Left Line & Number Indicator Column */}
                <div className="flex flex-col items-center shrink-0 relative">
                  {/* Vertical connecting line */}
                  {!isLast && (
                    <div className={`absolute top-12 bottom-0 w-[2px] bg-gradient-to-b ${theme.lineGradient}`} />
                  )}
                  
                  {/* Circular Badge Number */}
                  <div className={`w-11 h-11 rounded-full ${theme.badgeBg} flex items-center justify-center font-sans text-base font-medium text-white shadow-lg shadow-[#C5162E]/10 z-10`}>
                    {index + 1}
                  </div>
                </div>

                {/* Right Content Card Column */}
                <div className={`flex-1 border rounded-xl p-6 sm:p-8 mb-8 backdrop-blur-sm transition-all duration-300 ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}>
                  {/* Semester Label */}
                  <h3 className={`text-xl font-medium tracking-wide mb-5 font-sans ${theme.accentText}`}>
                    {item.semester}
                  </h3>
                  
                  {/* Course Tags List */}
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`inline-flex items-center rounded-full px-4 py-2 text-xs sm:text-sm font-light tracking-wide transition-colors duration-200 ${theme.tagBg} ${theme.tagBorder} ${theme.tagText} ${theme.tagHoverBorder} ${theme.tagHoverText}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}