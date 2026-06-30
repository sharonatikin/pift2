'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const nodes = [
  { title: 'Fabric Research' }, { title: 'Craft Documentation' }, 
  { title: 'Textile Innovation' }, { title: 'Material Experimentation' }, 
  { title: 'Surface Techniques' }, { title: 'Sustainable Design' }
];

export default function TextileTraditionSplit() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone design tokens matching Section (47).jpg
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textPillar: isDark ? 'text-zinc-300' : 'text-neutral-800',
    textFootnote: isDark ? 'text-neutral-500' : 'text-neutral-600',
    
    // Grid pillar styling elements responding dynamically to state
    cardBg: isDark ? 'bg-[#111111]/30' : 'bg-white',
    cardBorder: isDark ? 'border-zinc-900' : 'border-neutral-300',
    cardHoverBg: isDark ? 'hover:bg-[#111111]/50' : 'hover:bg-neutral-50/80',
    cardHoverBorder: isDark ? 'hover:border-zinc-700' : 'hover:border-neutral-400',
    
    // Framework border lines
    dividerBorder: isDark ? 'border-zinc-900/60' : 'border-neutral-200',
    imageFrameBorder: isDark ? 'border-zinc-900 bg-zinc-950' : 'border-neutral-200 bg-neutral-100',
    shadow: isDark ? 'shadow-none' : 'shadow-sm shadow-neutral-200/40'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Dynamic Photo Grid Container */}
          <div className="lg:col-span-6 flex flex-col gap-4 w-full max-w-[540px] mx-auto">
            <div className="flex flex-row gap-4">
              <div className={`w-1/2 aspect-square relative overflow-hidden rounded-2xl border transition-all duration-300 ${theme.imageFrameBorder} ${theme.shadow}`}>
                <Image src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=500&q=80" alt="Loom Stack" fill className="object-cover" />
              </div>
              <div className={`w-1/2 aspect-square relative overflow-hidden rounded-2xl border transition-all duration-300 ${theme.imageFrameBorder} ${theme.shadow}`}>
                <Image src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80" alt="Yarn Stack" fill className="object-cover" />
              </div>
            </div>
            <div className={`w-full aspect-[1.8/1] relative overflow-hidden rounded-2xl border transition-all duration-300 ${theme.imageFrameBorder} ${theme.shadow}`}>
              <Image src="https://images.unsplash.com/photo-1576016770956-debb63d900ef?auto=format&fit=crop&w=800&q=80" alt="Loom Detail Wide" fill className="object-cover" />
            </div>
          </div>
          
          {/* Right Side: Typography & Matrix Blocks */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15] font-sans">
              Where Tradition <br />Meets Innovation
            </h2>
            
            {/* Matrix Elements Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl w-full">
              {nodes.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-xl px-6 py-4 flex items-center min-h-[56px] transition-all duration-300 cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow}`}
                >
                  <span className={`text-xs sm:text-sm font-medium tracking-wide font-sans transition-colors duration-300 ${theme.textPillar}`}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Bottom Footnote Sub-Text */}
            <div className={`pt-4 border-t max-w-xl transition-colors duration-300 ${theme.dividerBorder}`}>
              <p className={`text-xs sm:text-sm font-light leading-relaxed transition-colors duration-300 ${theme.textFootnote}`}>
                Textile education often blends traditional textile practices with modern technologies and innovation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}