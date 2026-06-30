'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const coreFeatures = [
  {
    id: 1,
    title: 'Practical Learning',
    description: 'Gain hands-on experience through assignments, projects, and workshops.',
  },
  {
    id: 2,
    title: 'Expert Trainers',
    description: 'Learn from professionals with extensive industry experience.',
  },
  {
    id: 3,
    title: 'Career-Oriented Programs',
    description: 'Develop skills that match current industry requirements.',
  },
  {
    id: 4,
    title: 'Supportive Environment',
    description: 'Receive personal guidance throughout your learning journey.',
  },
  {
    id: 5,
    title: 'Certification',
    description: 'Earn recognized certificates upon successful completion.',
  },
];

export default function WhyChooseSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Central isolated theme styling token map mapping 1:1 against template properties
  const theme = {
    bgPage: isDark ? 'bg-[#0B0A0A]' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textMuted: isDark ? 'text-neutral-400' : 'text-neutral-600',
    
    // Feature card design tokens
    cardBg: isDark ? 'bg-[#141313]' : 'bg-white',
    cardBorder: isDark ? 'border-neutral-900' : 'border-neutral-200/80',
    cardBorderHover: isDark ? 'hover:border-neutral-800' : 'hover:border-neutral-300',
    cardBgHover: isDark ? 'hover:bg-[#1a1919]' : 'hover:bg-neutral-50/40',
    shadow: isDark ? 'shadow-none' : 'shadow-sm shadow-neutral-100/70',

    // Theme branding colors
    brandRed: 'text-[#D90429]'
  };

  return (
    <section className={`w-full py-20 px-4 sm:px-6 lg:px-8 font-sans antialiased flex flex-col items-center justify-center transition-colors duration-300 ${theme.bgPage} ${theme.textMain}`}>
      <div className="max-w-7xl w-full mx-auto text-center">
        
        {/* Header Titles */}
        <div className="space-y-2 mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-serif font-normal tracking-tight leading-tight">
            Why Choose
          </h2>
          <p className={`text-4xl sm:text-5xl md:text-[62px] font-serif italic font-normal tracking-wide leading-none ${theme.brandRed}`}>
            What Makes Us Different?
          </p>
        </div>

        {/* Responsive Features Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-3.5 items-stretch justify-center">
          {coreFeatures.map((feature) => (
            <div
              key={feature.id}
              className={`border p-6 md:p-7 text-left flex flex-col justify-start transition-all duration-300 rounded-2xl group-hover:text-[#D90429] ${theme.cardBg} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardBgHover} ${theme.shadow} group`}
            >
              {/* Feature Title */}
              <h3 className="text-lg md:text-xl font-serif font-normal tracking-tight leading-snug mb-4 group-hover:text-[#D90429] transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Feature Description */}
              <p className={`text-xs sm:text-sm font-light leading-relaxed tracking-normal transition-colors duration-300 ${theme.textMuted}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}