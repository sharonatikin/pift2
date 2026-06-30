'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const highlights = [
  { title: 'Textile Science' }, { title: 'Fabric Development' }, 
  { title: 'Weaving Techniques' }, { title: 'Dyeing & Printing' }, 
  { title: 'Embroidery Design' }, { title: 'Surface Ornamentation' }, 
  { title: 'Textile CAD' }, { title: 'Portfolio Development' }
];

export default function TextileOverview() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone theme styling tokens matching App (7).jpg
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textDesc: isDark ? 'text-neutral-400' : 'text-neutral-700',
    textHighlight: isDark ? 'text-[#F5D6D8]' : 'text-[#4A282A]',
    
    // Grid block properties matching the screenshot specs
    cardBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    cardHoverBg: isDark ? 'hover:bg-[#F0C9CB]/25' : 'hover:bg-[#EBB4B6]',
    cardHoverBorder: isDark ? 'hover:border-[#F0C9CB]/40' : 'hover:border-[#D69CA2]',
    
    // Framework border lines
    dividerBorder: isDark ? 'border-zinc-900/60' : 'border-neutral-200',
    imageFrameBorder: isDark ? 'border-zinc-900 bg-zinc-950' : 'border-neutral-200/80 bg-neutral-100',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Photo Grid Masonry Stacking */}
          <div className="lg:col-span-6 flex flex-col gap-4 w-full max-w-[540px] mx-auto">
            <div className="flex flex-row gap-4">
              <div className={`w-1/2 aspect-square relative overflow-hidden rounded-2xl border transition-all duration-300 ${theme.imageFrameBorder} ${theme.shadow}`}>
                <Image src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80" alt="Palettes" fill className="object-cover grayscale" />
              </div>
              <div className={`w-1/2 aspect-square relative overflow-hidden rounded-2xl border transition-all duration-300 ${theme.imageFrameBorder} ${theme.shadow}`}>
                <Image src="https://images.unsplash.com/photo-1605722243979-fe0be8158232?auto=format&fit=crop&w=500&q=80" alt="Embroidery" fill className="object-cover" />
              </div>
            </div>
            <div className={`w-full aspect-[2.1/1] relative overflow-hidden rounded-2xl border transition-all duration-300 ${theme.imageFrameBorder} ${theme.shadow}`}>
              <Image src="https://images.unsplash.com/photo-1576016770956-debb63d900ef?auto=format&fit=crop&w=800&q=80" alt="Prints" fill className="object-cover" />
            </div>
            <div className="flex flex-row gap-4">
              <div className={`w-1/2 aspect-square relative overflow-hidden rounded-2xl border transition-all duration-300 ${theme.imageFrameBorder} ${theme.shadow}`}>
                <Image src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=500&q=80" alt="Loom" fill className="object-cover" />
              </div>
              <div className={`w-1/2 aspect-square relative overflow-hidden rounded-2xl border transition-all duration-300 ${theme.imageFrameBorder} ${theme.shadow}`}>
                <Image src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=500&q=80" alt="Dyes" fill className="object-cover grayscale" />
              </div>
            </div>
          </div>
          
          {/* Right Side: Header Typography & Pillars Grid */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight leading-tight font-sans">
              Every Fabric Begins <br />With An Idea.
            </h2>
            <p className={`${theme.textDesc} text-sm sm:text-base font-light leading-relaxed transition-colors duration-300`}>
              The Textile Design program develops creative and technical expertise in textile materials, surface design, 
              fabric development, dyeing, printing, embroidery and digital textile applications. Students explore both 
              traditional craftsmanship and contemporary innovation while building professional design portfolios.
            </p>
            
            {/* Highlights Interactive Block Matrix */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t w-full transition-colors duration-300 ${theme.dividerBorder}`}>
              {highlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-xl px-6 py-4 flex items-center min-h-[56px] transition-all duration-300 cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}
                >
                  <span className={`text-xs sm:text-sm font-semibold tracking-wide font-sans transition-colors duration-300 ${theme.textHighlight}`}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}