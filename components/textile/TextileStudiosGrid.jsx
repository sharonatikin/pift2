'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const badges = ['Hands-On Learning', 'Industry Tools', 'Creative Research', 'Live Projects'];

const media = [
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1605722243979-fe0be8158232?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=80'
];

export default function TextileStudiosGrid() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone theme styling tokens
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textBadge: isDark ? 'text-[#F5D6D8]' : 'text-[#4A282A]',
    
    // Grid box assets
    imageFrameBorder: isDark ? 'border-zinc-900 bg-zinc-950' : 'border-neutral-200/80 bg-neutral-100',
    imageGrayscale: isDark ? 'grayscale hover:grayscale-0' : 'brightness-95 contrast-[1.01]',
    
    // Custom light red/clay box styling for bottom pillars
    badgeBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    badgeBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    badgeHoverBg: isDark ? 'hover:bg-[#F0C9CB]/25' : 'hover:bg-[#EBB4B6]',
    badgeHoverBorder: isDark ? 'hover:border-[#F0C9CB]/40' : 'hover:border-[#D69CA2]',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20',
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium font-sans leading-tight">
            Learn Inside Professional <br />Textile Studios
          </h2>
        </div>
        
        {/* 3-Column Studio Image Masonry Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
          {media.map((url, idx) => (
            <div 
              key={idx} 
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl border transition-all duration-300 ${theme.imageFrameBorder} ${theme.shadow} group`}
            >
              <Image 
                src={url} 
                alt="Studio Work Space Asset" 
                fill 
                className={`object-cover transition-all duration-500 group-hover:scale-103 ${theme.imageGrayscale}`} 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        
        {/* 4-Column Footer Pillar Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto items-stretch">
          {badges.map((badge, idx) => (
            <div 
              key={idx} 
              className={`border p-5 flex flex-col items-center justify-center rounded-xl text-center transition-all duration-300 cursor-default ${theme.badgeBg} ${theme.badgeBorder} ${theme.badgeHoverBg} ${theme.badgeHoverBorder} ${theme.shadow}`}
            >
              <span className={`text-sm font-semibold tracking-wide font-sans transition-colors duration-300 ${theme.textBadge}`}>
                {badge}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}