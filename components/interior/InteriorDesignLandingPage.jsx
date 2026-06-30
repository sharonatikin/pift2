'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { GraduationCap, Wand2, BriefcaseBusiness, FolderKanban } from 'lucide-react';

const programHighlights = [
  {
    icon: GraduationCap,
    label: '3 Years Program',
  },
  {
    icon: Wand2,
    label: '100% Practical Learning',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Industry Projects',
  },
  {
    icon: FolderKanban,
    label: 'Professional Portfolio',
  },
];

export default function InteriorDesignLandingPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Dynamic Theme Colors evaluated entirely inside the component template runtime
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textMuted: isDark ? 'text-neutral-200' : 'text-neutral-700',
    textSubtle: isDark ? 'text-neutral-400' : 'text-neutral-500',
    accent: isDark ? 'text-[#C5162E]' : 'text-[#C5162E]',
    accentBg: isDark ? 'bg-[#C5162E] hover:bg-[#a31225]' : 'bg-[#C5162E] hover:bg-[#a31225]',
    cardBg: isDark ? 'bg-[#111111]/90' : 'bg-white/90',
    cardHover: isDark ? 'hover:bg-[#1a1a1a]' : 'hover:bg-neutral-50',
    border: isDark ? 'border-neutral-800' : 'border-neutral-200',
    btnSecondary: isDark 
      ? 'bg-black/30 border-neutral-700 hover:bg-neutral-800/60 text-white' 
      : 'bg-white/50 border-neutral-300 hover:bg-neutral-100/80 text-[#09090b]'
  };

  return (
    <main className={`min-h-screen ${theme.bgPage} ${theme.textMain} font-sans antialiased transition-colors duration-300`}>
      <div className="relative isolate overflow-hidden">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/interior-bg.png"
            alt="Luxurious hotel lobby interior with modern lighting and marble finishes"
            fill
            className={`object-cover object-center scale-105 transition-all duration-700 ${
              isDark ? 'brightness-[0.25] saturate-[0.8] grayscale' : 'brightness-[0.95] opacity-20'
            }`}
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${
            isDark ? 'from-black/20 via-black/10 to-black/80' : 'from-transparent via-transparent to-[#fbfbfb]'
          }`} />
        </div>

        {/* Content Section wrapper layout */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 md:py-40 lg:px-8">
          <div className="flex flex-col gap-y-16">
            
            {/* Hero Text Titles */}
            <header className="max-w-2xl lg:max-w-3xl">
              <p className={`text-sm font-semibold tracking-widest ${theme.accent} uppercase mb-5`}>
                INTERIOR DESIGN PROGRAM
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] md:leading-[1.15]">
                <span className="font-serif">Design Spaces.</span><br />
                <span className="font-serif">
                  Shape <span className={`italic font-serif font-medium ${theme.accent}`}>Experiences</span>.
                </span>
              </h1>
              <p className={`mt-8 text-base md:text-lg ${theme.textMuted} leading-relaxed max-w-2xl font-light`}>
                Learn space planning, interior styling, furniture design, materials,
                lighting concepts, CAD visualization and professional design
                execution through a studio-based learning environment.
              </p>
            </header>

            {/* Form & Navigation CTAs */}
            <div className="flex flex-wrap gap-x-4 gap-y-4 md:gap-x-6 items-center">
              <button className={`flex items-center justify-center rounded-none px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 min-w-[160px] ${theme.accentBg}`}>
                Apply Now
              </button>
              <button className={`flex items-center justify-center rounded-none px-8 py-3.5 text-base font-medium border backdrop-blur-sm transition-all duration-200 min-w-[210px] ${theme.btnSecondary}`}>
                Download Brochure
              </button>
              <button className={`flex items-center justify-center rounded-none px-8 py-3.5 text-base font-medium border backdrop-blur-sm transition-all duration-200 min-w-[210px] ${theme.btnSecondary}`}>
                Book Career Counseling
              </button>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl">
              {programHighlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className={`p-8 flex flex-col items-start gap-y-6 border backdrop-blur-sm transition-all duration-300 ${theme.cardBg} ${theme.border} ${theme.cardHover}`}
                >
                  <highlight.icon className={`w-8 h-8 md:w-10 md:h-10 stroke-[1.2] transition-colors duration-300 ${theme.accent}`} />
                  <p className={`text-base md:text-lg font-normal leading-snug ${theme.textMain}`}>
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
        
        {/* Decorative Baseline Gradient Layer */}
        <div className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none -z-1 bg-gradient-to-t ${
          isDark ? 'from-black to-transparent' : 'from-[#fbfbfb] to-transparent'
        }`} />
      </div>
    </main>
  );
}