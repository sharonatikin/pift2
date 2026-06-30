'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { BookOpenText, Download } from 'lucide-react';

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted && resolvedTheme === 'dark';

  // Design system tokens matching the light-clay/white aesthetic
  const theme = {
    bgPage: isDark ? 'bg-[#050505]' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textMuted: isDark ? 'text-gray-400' : 'text-neutral-600',
    
    // Gradient and background effects
    ambientGlow: isDark 
      ? 'bg-[radial-gradient(circle_at_center,_#2a0a0d_0%,_#050505_100%)]' 
      : 'bg-[radial-gradient(circle_at_center,_#F0C9CB_0%,_#fbfbfb_100%)]',
    
    // Tag grid tokens
    tagBg: isDark ? 'bg-black/40 hover:bg-black/60 border-white/5' : 'bg-[#F0C9CB] hover:bg-[#EBB4B6] border-[#E3B2B4]',
    tagText: isDark ? 'text-gray-200' : 'text-[#4A282A]',
    
    // Buttons and Image frames
    btnPrimary: isDark ? 'bg-[#E5333B] hover:bg-[#c92a31] text-white' : 'bg-[#E5333B] text-white',
    btnSecondary: isDark 
      ? 'border-gray-600 hover:border-gray-500 text-white' 
      : 'border-neutral-300 hover:border-neutral-400 text-neutral-800 bg-white/50',
    
    imageFrame: isDark ? 'border-white/5 bg-zinc-950' : 'border-neutral-200 bg-neutral-100',
    accentText: 'text-[#E5333B]'
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${theme.bgPage} ${theme.textMain}`}>
      {/* Background Gradient */}
      <div className={`absolute inset-0 opacity-80 ${theme.ambientGlow}`} />

      {/* Main Content */}
      <main className="relative z-10 max-w-[1700px] mx-auto px-6 py-16 md:px-12 md:py-24 grid lg:grid-cols-2 items-center gap-16 lg:gap-20">
        
        {/* Left Column - Text Content */}
        <div className="space-y-10 lg:pr-10">
          <div className="space-y-2">
            <span className={`text-[13px] font-semibold uppercase tracking-widest block transition-colors duration-300 ${theme.textMuted}`}>
              Specialized Program
            </span>
            <h1 className="font-serif text-[72px] md:text-[88px] font-medium leading-[1.05] tracking-tight">
              <span className={`block transition-colors duration-300 ${theme.textMain}`}>Apparel</span>
              <span className={`block ${theme.accentText}`}>Merchandising</span>
            </h1>
          </div>

          <p className={`text-lg leading-relaxed max-w-2xl font-light transition-colors duration-300 ${theme.textMuted}`}>
            Develop expertise in sourcing, product planning, supply chain management, buying, retail operations, production coordination, vendor management and global fashion merchandising. Learn how products move from concept to consumer in today&apos;s fashion industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-2">
            <button className={`font-semibold rounded-full px-12 py-5 text-lg flex items-center justify-center gap-3 transition-colors ${theme.btnPrimary}`}>
              <BookOpenText className="w-6 h-6" />
              Apply For Admission
            </button>
            <button className={`border font-medium rounded-full px-12 py-5 text-lg flex items-center justify-center gap-3 transition-colors ${theme.btnSecondary}`}>
              <Download className="w-5 h-5" />
              Download Prospectus
            </button>
          </div>
        </div>

        {/* Right Column - Image & Tags */}
        <div className="relative group">
          <div className={`relative aspect-[4/5] rounded-[30px] overflow-hidden border-2 shadow-2xl transition-colors duration-300 ${theme.imageFrame}`}>
            <Image
              src="/images/apparel-hero.png"
              alt="Visual Merchandising display"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 850px"
              priority
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
          </div>

          {/* Tag Grid Overlay */}
          <div className="absolute left-6 bottom-6 right-6 grid grid-cols-2 gap-4">
            {['Global Sourcing', 'Fashion Buying', 'Retail Planning', 'Supply Chain'].map((label, index) => (
              <div
                key={index}
                className={`backdrop-blur-md border rounded-[12px] px-8 py-5 text-[15px] font-medium text-center flex items-center justify-center transition-all duration-300 group-hover:translate-y-[-5px] ${theme.tagBg} ${theme.tagText} ${theme.cardBorder}`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}