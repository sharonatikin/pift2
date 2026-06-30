'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function InteriorFinalCTA() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Standalone component-isolated design theme tokens
  const theme = {
    bgPage: isDark ? 'bg-[#0A0A0A]' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textDesc: isDark ? 'text-zinc-400' : 'text-neutral-600',
    imgOverlay: isDark ? 'brightness-[0.25] opacity-100' : 'brightness-[1.05] opacity-20 contrast-[1.02]',
    gradientLayer: isDark 
      ? 'from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]' 
      : 'from-[#fbfbfb] via-[#fbfbfb]/30 to-[#fbfbfb]',
      
    // Button treatment tokens
    btnPrimaryBg: isDark ? 'bg-[#C8102E] hover:bg-[#a31225]' : 'bg-[#C5162E] hover:bg-[#a31225]',
    btnSecondary: isDark 
      ? 'border-zinc-700/60 bg-black/40 text-zinc-300 hover:bg-zinc-900/60' 
      : 'border-neutral-300 bg-white/70 text-neutral-800 hover:bg-neutral-100/80',
      
    // Accent styling matching preceding project modules
    accentItalic: isDark ? 'text-[#FF4141]' : 'text-[#A31225]'
  };

  return (
    <section className={`relative w-full py-24 sm:py-32 lg:py-40 flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300 ${theme.bgPage}`}>
      
      {/* Dynamic Background Layout Image */}
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-500 ${theme.imgOverlay}`} 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80')` }} 
      />
      
      {/* Blend Layer Gradient */}
      <div className={`absolute inset-0 z-10 bg-gradient-to-t pointer-events-none transition-all duration-500 ${theme.gradientLayer}`} />
      
      {/* Core Typography & Button Stack Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center">
        <h2 className={`text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.15] max-w-5xl mb-6 transition-colors duration-300 ${theme.textMain}`}>
          Design The Spaces <br />People <span className={`italic font-medium transition-colors duration-300 ${theme.accentItalic}`}>Remember.</span>
        </h2>
        
        <p className={`text-xs sm:text-sm font-light leading-relaxed tracking-wide max-w-xl mb-12 transition-colors duration-300 ${theme.textDesc}`}>
          Transform your creativity into a professional career in interior design.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a 
            href="#apply" 
            className={`w-full sm:w-auto text-white text-xs sm:text-sm font-bold tracking-widest px-8 py-4 rounded-xl text-center uppercase whitespace-nowrap transition-all duration-200 shadow-md shadow-red-900/10 ${theme.btnPrimaryBg}`}
          >
            Apply Now
          </a>
          <a 
            href="#brochure" 
            className={`w-full sm:w-auto border backdrop-blur-md text-xs sm:text-sm font-medium tracking-widest px-7 py-4 rounded-xl text-center uppercase whitespace-nowrap transition-all duration-200 ${theme.btnSecondary}`}
          >
            Download Brochure
          </a>
          <a 
            href="#visit" 
            className={`w-full sm:w-auto border backdrop-blur-md text-xs sm:text-sm font-medium tracking-widest px-8 py-4 rounded-xl text-center uppercase whitespace-nowrap transition-all duration-200 ${theme.btnSecondary}`}
          >
            Book Campus Visit
          </a>
        </div>
      </div>

    </section>
  );
}