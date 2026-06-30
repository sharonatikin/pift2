'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { 
  Presentation, 
  GraduationCap, 
  BookOpenCheck, 
  Briefcase,
  Trophy,
  Star,
  Download
} from 'lucide-react';
import Image from 'next/image';

export default function AdmissionHero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Central isolated theme styling token map mapping 1:1 against template properties
  const theme = {
    bgPage: isDark ? 'bg-gradient-to-b from-[#290205] via-[#190103] to-[#0a0001]' : 'bg-[#fbfbfb]',
    bgStrip: isDark ? 'bg-[#1F0205]' : 'bg-[#FAF5F6]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textMuted: isDark ? 'text-neutral-400' : 'text-neutral-600',
    
    // Feature badge containers configuration
    badgeBg: isDark ? 'bg-transparent' : 'bg-white shadow-sm border border-neutral-200/60 rounded-xl p-3',
    badgeText: isDark ? 'text-neutral-300' : 'text-neutral-700',
    
    // Media layout component variables
    imageWrapperBg: isDark ? 'bg-[#1E0104] border-white/10' : 'bg-white border-neutral-200/80 shadow-md',
    imageGrayscale: isDark ? 'grayscale opacity-90 contrast-115' : 'brightness-100 contrast-[1.01]',
    glowOpacity: isDark ? 'opacity-40' : 'opacity-10',

    // Interactive element definitions
    btnSecondary: isDark
      ? 'border-neutral-700 hover:border-neutral-400 text-white hover:bg-white/5'
      : 'border-neutral-200 hover:border-neutral-300 bg-white text-neutral-800 shadow-sm',
    dividerLine: isDark ? 'divide-neutral-800' : 'divide-neutral-200',
    borderTop: isDark ? 'border-white/5' : 'border-neutral-200',

    // Theme structural brand accents
    orangeAccent: 'text-[#F26419]',
    brandRed: 'text-[#D90429]',
    bgBrandRed: 'bg-[#D90429] hover:bg-[#b0021e]'
  };

  return (
    <div className={`w-full min-h-screen font-sans antialiased relative overflow-hidden flex flex-col justify-between transition-colors duration-300 ${theme.bgPage} ${theme.textMain}`}>
      
      {/* Abstract background design element replicating geometric glow shape */}
      <div className={`absolute top-1/3 lg:top-1/2 left-1/2 lg:left-3/4 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] bg-[#6A0DAD]/30 rounded-full blur-3xl pointer-events-none -z-10 transition-opacity duration-300 ${theme.glowOpacity}`} />

      {/* 2. Main Hero Split Grid Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Informational Content Layout */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          
          <div className="space-y-3">
            <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.3em] block ${theme.orangeAccent}`}>
              Admission Open 2026
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[54px] font-serif font-normal tracking-tight leading-[1.15]">
              Shape Your Future with <br />
              <span className={`italic font-normal tracking-wide pt-1 inline-block ${theme.brandRed}`}>
                Creative Education
              </span>
            </h1>
          </div>

          <p className={`text-sm sm:text-base max-w-xl leading-relaxed font-normal transition-colors duration-300 ${theme.textMuted}`}>
            Develop practical skills, gain confidence, and prepare for exciting career opportunities through hands-on learning and expert guidance.
          </p>

          {/* Feature Badges Lineup */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-2xl">
            <div className={`flex flex-col items-start space-y-2 ${theme.badgeBg}`}>
              <Presentation className={`w-5 h-5 ${theme.orangeAccent}`} />
              <span className={`text-[10px] font-bold tracking-wider uppercase leading-tight ${theme.badgeText}`}>
                Practical Training
              </span>
            </div>

            <div className={`flex flex-col items-start space-y-2 ${theme.badgeBg}`}>
              <GraduationCap className={`w-5 h-5 ${theme.orangeAccent}`} />
              <span className={`text-[10px] font-bold tracking-wider uppercase leading-tight ${theme.badgeText}`}>
                Experienced Faculty
              </span>
            </div>

            <div className={`flex flex-col items-start space-y-2 ${theme.badgeBg}`}>
              <BookOpenCheck className={`w-5 h-5 ${theme.orangeAccent}`} />
              <span className={`text-[10px] font-bold tracking-wider uppercase leading-tight ${theme.badgeText}`}>
                Industry-Relevant Curriculum
              </span>
            </div>

            <div className={`flex flex-col items-start space-y-2 ${theme.badgeBg}`}>
              <Briefcase className={`w-5 h-5 ${theme.orangeAccent}`} />
              <span className={`text-[10px] font-bold tracking-wider uppercase leading-tight ${theme.badgeText}`}>
                Career Support
              </span>
            </div>
          </div>

          {/* CTA Interactive Form Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 items-stretch sm:items-center">
            <button className={`text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-lg shadow-red-900/10 transition-all active:scale-[0.98] text-center ${theme.bgBrandRed}`}>
              Apply For Admission
            </button>
            <button className={`text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center flex items-center justify-center gap-2 border ${theme.btnSecondary}`}>
              <Download className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>Download Brochure</span>
            </button>
          </div>

        </div>

        {/* Right Feature Showcase Graphic with Segment Mask */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          
          {/* Custom asymmetrical capsule mask design */}
          <div className={`w-[310px] h-[430px] sm:w-[380px] sm:h-[490px] rounded-t-[190px] rounded-b-[190px] overflow-hidden relative border flex items-center justify-center transition-all duration-300 ${theme.imageWrapperBg}`}>
            
            {/* Embedded illustrative content */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5a189a]/40 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Creative Design Professional Showcase"
                fill
                sizes="(max-width: 1024px) 310px, 380px"
                className={`object-cover object-center z-0 scale-105 transition-all duration-300 ${theme.imageGrayscale}`}
                priority
              />
            </div>
          </div>
        </div>

      </main>

      {/* 3. Bottom Horizontal Stats Grid Strip */}
      <section className={`w-full border-t py-8 mt-auto z-20 transition-colors duration-300 ${theme.bgStrip} ${theme.borderTop}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:divide-x text-center lg:text-left ${theme.dividerLine}`}>
            
            {/* Stat Box 1 */}
            <div className="flex items-center justify-center space-x-4 px-4">
              <div className={theme.orangeAccent}>
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-black tracking-tight leading-none">1000+</span>
                <span className="text-[11px] font-bold uppercase tracking-wider pt-1 text-neutral-400 dark:text-neutral-400">Students Trained</span>
              </div>
            </div>

            {/* Stat Box 2 */}
            <div className="flex items-center justify-center space-x-4 px-4">
              <div className={theme.orangeAccent}>
                <BookOpenCheck className="w-8 h-8" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-black tracking-tight leading-none">20+</span>
                <span className="text-[11px] font-bold uppercase tracking-wider pt-1 text-neutral-400 dark:text-neutral-400">Courses Offered</span>
              </div>
            </div>

            {/* Stat Box 3 */}
            <div className="flex items-center justify-center space-x-4 px-4">
              <div className={theme.orangeAccent}>
                <Trophy className="w-8 h-8" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-black tracking-tight leading-none">10+</span>
                <span className="text-[11px] font-bold uppercase tracking-wider pt-1 text-neutral-400 dark:text-neutral-400">Years of Excellence</span>
              </div>
            </div>

            {/* Stat Box 4 */}
            <div className="flex items-center justify-center space-x-4 px-4">
              <div className={theme.orangeAccent}>
                <Star className="w-8 h-8 fill-current" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-black tracking-tight leading-none">95%</span>
                <span className="text-[11px] font-bold uppercase tracking-wider pt-1 text-neutral-400 dark:text-neutral-400">Student Satisfaction</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}