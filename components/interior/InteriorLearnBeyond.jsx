'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const pillars = [
  { title: 'Industry Visits' }, 
  { title: 'Architect Interactions' }, 
  { title: 'Design Workshops' },
  { title: 'Material Exhibitions' }, 
  { title: 'Site Visits' }, 
  { title: 'Professional Reviews' }
];

export default function InteriorLearnBeyond() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Standalone component-side theme design tokens
  const theme = {
    bgPage: isDark ? 'bg-[#0A0A0A]' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textPillar: isDark ? 'text-zinc-300' : 'text-neutral-700',
    imageFrameBorder: isDark ? 'border-zinc-900 bg-zinc-950' : 'border-neutral-200 bg-neutral-100',
    cardBg: isDark ? 'bg-[#111111]/30' : 'bg-white',
    cardBorder: isDark ? 'border-zinc-900' : 'border-neutral-200',
    shadow: isDark ? 'shadow-none' : 'shadow-sm shadow-neutral-200/40'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Layout Column: Image Focus Frame */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className={`relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden border ${theme.imageFrameBorder} ${theme.shadow} transition-all duration-300`}>
              <Image 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80" 
                alt="Studio Life Workspace" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
          
          {/* Right Layout Column: Heading & Pillars Stack */}
          <div className="lg:col-span-6 flex flex-col space-y-8 text-left">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight leading-tight">
              Learn Beyond The Studio
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-xl px-6 py-5 flex items-center min-h-[64px] sm:min-h-[72px] transition-all duration-300 ${theme.cardBg} ${theme.cardBorder} ${theme.shadow}`}
                >
                  <span className={`text-sm sm:text-base font-light tracking-wide transition-colors duration-300 ${theme.textPillar}`}>
                    {pillar.title}
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