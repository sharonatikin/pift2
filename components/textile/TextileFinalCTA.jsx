'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function TextileFinalCTA() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated design theme tokens matching Section.jpg
  const theme = {
    bgPage: isDark ? 'bg-[#0A0A0A]' : 'bg-[#1C0D08]',
    textMain: 'text-white',
    textDesc: isDark ? 'text-zinc-400' : 'text-zinc-300/80',
    
    // Textured background overlays mimicking the specific canvas weave aspect ratio
    imgOverlay: isDark 
      ? 'brightness-[0.22] opacity-100 mix-blend-normal' 
      : 'brightness-[0.45] contrast-[1.15] opacity-100 saturation-75',
      
    gradientLayer: isDark 
      ? 'from-[#0A0A0A] via-transparent to-[#0A0A0A]/60' 
      : 'from-[#1C0D08]/90 via-transparent to-[#1C0D08]/70',
      
    // Interactive buttons configuration
    btnPrimaryBg: 'bg-[#E30613] hover:bg-[#b8050f]',
    btnSecondary: isDark 
      ? 'border-zinc-700/60 bg-black/40 text-zinc-300 hover:bg-zinc-900/60' 
      : 'border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10',
      
    // High-impact text branding highlights  
    accentText: 'text-[#E30613]'
  };

  return (
    <section className={`relative w-full py-28 sm:py-36 lg:py-44 flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-500 ${theme.bgPage}`}>
      
      {/* Background Textured Focus Image */}
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-500 ${theme.imgOverlay}`} 
        style={{ backgroundImage: `url('/images/textile-img1.png')` }} 
      />
      
      {/* Structural Mask Layer */}
      <div className={`absolute inset-0 z-10 bg-gradient-to-b pointer-events-none transition-all duration-500 ${theme.gradientLayer}`} />
      
      {/* Core Typography Block Matrix — Tracking and leading parameters explicitly spaced */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20 flex flex-col items-center">
        <h2 className={`text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.2] sm:leading-[1.15] max-w-4xl mb-8 ${theme.textMain}`}>
          Create The Textiles <br className="hidden sm:inline" />
          That <span className={`font-semibold ${theme.accentText}`}>Shape Industries.</span>
        </h2>
        
        <p className={`text-xs sm:text-sm font-light leading-relaxed tracking-wide max-w-xl mb-14 transition-colors duration-300 ${theme.textDesc}`}>
          Transform your passion for fabrics, materials and surface design into a professional creative career.
        </p>
        
        {/* Buttons Control Deck */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a 
            href="#apply" 
            className={`w-full sm:w-auto text-white text-xs sm:text-sm font-bold tracking-widest px-9 py-4 rounded-md text-center uppercase whitespace-nowrap transition-all duration-200 ${theme.btnPrimaryBg}`}
          >
            Apply Now
          </a>
          <a 
            href="#brochure" 
            className={`w-full sm:w-auto border text-xs sm:text-sm font-medium tracking-widest px-8 py-4 rounded-md text-center uppercase whitespace-nowrap transition-all duration-200 ${theme.btnSecondary}`}
          >
            Download Brochure
          </a>
          <a 
            href="#visit" 
            className={`w-full sm:w-auto border text-xs sm:text-sm font-medium tracking-widest px-9 py-4 rounded-md text-center uppercase whitespace-nowrap transition-all duration-200 ${theme.btnSecondary}`}
          >
            Book Campus Visit
          </a>
        </div>
      </div>

    </section>
  );
}