'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const studioImages = [
  {
    src: '/images/inetirior-img1.png',
    alt: 'Designer working on a laptop inside a modern wood-paneled focus booth studio micro-office',
  },
  {
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
    alt: 'Bright minimal design studio featuring a wooden drafting table, plants, and technical monitors',
  },
  {
    src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1000&auto=format&fit=crop',
    alt: 'Collaborative creative environment with designers discussing layout options in front of a custom display shelf unit',
  },
];

const pillars = [
  { name: 'Live Projects' },
  { name: 'Industry Software' },
  { name: 'Studio Learning' },
  { name: 'Hands-On Training' },
];

export default function LearnInsideStudios() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Standalone inline design tokens mapped component-side
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    cardBg: isDark ? 'bg-[#0A0A0B]' : 'bg-white',
    cardBorder: isDark ? 'border-[#141416]' : 'border-neutral-200/80',
    cardHoverBg: isDark ? 'hover:bg-[#111113]' : 'hover:bg-neutral-50',
    cardHoverBorder: isDark ? 'hover:border-neutral-800' : 'hover:border-neutral-300',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-neutral-200/30',
    // Retaining exact red coloring values specified inside your layout graphic
    accentText: 'text-[#C5162E]'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-20 px-6 sm:py-24 md:py-32 lg:px-16 flex flex-col items-center justify-center transition-colors duration-300`}>
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-center mb-16 font-sans">
          Learn Inside Professional Design Studios
        </h2>

        {/* 3-Column Image Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          {studioImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] sm:aspect-[16/11] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-950/40"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* 4-Column Bottom Pillars Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`border rounded-xl py-6 flex items-center justify-center text-center transition-all duration-300 cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}
            >
              <span className={`text-sm sm:text-base font-medium tracking-wide font-sans ${theme.accentText}`}>
                {pillar.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}