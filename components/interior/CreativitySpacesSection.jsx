'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Home, Briefcase, Users, PaintBucket, Sparkles, Lightbulb } from 'lucide-react';

const designCategories = [
  {
    icon: Home,
    title: 'Residential Design',
  },
  {
    icon: Briefcase,
    title: 'Commercial Design',
  },
  {
    icon: Users,
    title: 'Hospitality Design',
  },
  {
    icon: PaintBucket,
    title: 'Retail Environments',
  },
  {
    icon: Sparkles,
    title: 'Luxury Living Spaces',
  },
  {
    icon: Lightbulb,
    title: 'Sustainable Design',
  },
];

export default function CreativitySpacesSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Dynamic style tokens evaluated entirely inside the component template
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textCardTitle: isDark ? 'text-neutral-200' : 'text-neutral-900',
    cardBg: isDark ? 'bg-[#0D0D0D]' : 'bg-white',
    cardBorder: isDark ? 'border-[#1A1A1A]' : 'border-neutral-200/80',
    cardHoverBg: isDark ? 'hover:bg-[#121212]' : 'hover:bg-neutral-50',
    cardHoverBorder: isDark ? 'hover:border-neutral-800' : 'hover:border-neutral-300',
    shadow: isDark ? 'shadow-none' : 'shadow-sm shadow-neutral-200/40',
    // Kept red for both modes to accurately match the original image design specs
    iconColor: 'text-[#C5162E]' 
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-20 px-6 sm:py-24 md:py-32 lg:px-16 flex flex-col items-center justify-center transition-colors duration-300`}>
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-center mb-16 font-sans">
          Turn Creativity Into Functional Spaces
        </h2>

        {/* 3x2 Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {designCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`border rounded-xl p-8 md:p-10 flex flex-col items-start gap-y-6 transition-all duration-300 ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow} group`}
              >
                {/* Icon Wrapper */}
                <div className={`${theme.iconColor} flex items-center justify-center`}>
                  <IconComponent 
                    className="w-8 h-8 md:w-9 md:h-9 stroke-[1.5] transition-transform duration-300 group-hover:scale-105" 
                    aria-hidden="true"
                  />
                </div>
                
                {/* Category Title */}
                <h3 className={`text-base md:text-lg font-normal tracking-wide font-sans transition-colors duration-300 ${theme.textCardTitle}`}>
                  {category.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}