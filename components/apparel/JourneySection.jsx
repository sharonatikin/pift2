'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ArrowRight } from 'lucide-react';

const steps = [
  { number: '01', title: 'Submit Application', description: 'Fill out the online application form' },
  { number: '02', title: 'Document Verification', description: 'Submit required documents' },
  { number: '03', title: 'Personal Interview', description: 'Meet with our admission team' },
  { number: '04', title: 'Admission Confirmation', description: 'Receive your acceptance letter' },
];

export default function JourneySection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted && resolvedTheme === 'dark';

  // Centralized design system tokens for seamless theme switching
  const theme = {
    bgPage: isDark ? 'bg-[#050505]' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textCardTitle: isDark ? 'text-white' : 'text-[#4A282A]',
    textCardDesc: isDark ? 'text-gray-400' : 'text-[#4A282A]/80',
    
    // Ambient glow adjustment
    ambientGlow: isDark 
      ? 'bg-[radial-gradient(circle_at_center,_#1a0608_0%,_#050505_75%)]' 
      : 'bg-[radial-gradient(circle_at_center,_#F0C9CB_0%,_#fbfbfb_75%)]',
    
    // Card styling
    cardBg: isDark ? 'bg-[#110e0f]/90' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-white/[0.03]' : 'border-[#E3B2B4]',
    cardBorderHover: isDark ? 'hover:border-white/[0.08]' : 'hover:border-[#D69CA2]',
    cardBgHover: isDark ? 'hover:bg-[#181415]/90' : 'hover:bg-[#EBB4B6]',
    
    // Dynamic indicators
    arrowAccent: isDark ? 'text-[#E5333B]' : 'text-[#A31225]',
    stepNum: isDark ? 'text-[#E5333B]/90' : 'text-[#A31225]'
  };

  return (
    <section className={`relative min-h-screen flex flex-col justify-center items-center px-6 py-20 md:py-32 overflow-hidden transition-colors duration-300 ${theme.bgPage}`}>
      {/* Background ambient lighting */}
      <div className={`absolute inset-0 opacity-80 pointer-events-none ${theme.ambientGlow}`} />

      <div className="relative z-10 max-w-[1300px] w-full mx-auto space-y-16 md:space-y-24">
        {/* Title Group */}
        <div className="text-center space-y-1">
          <h2 className={`font-serif text-4xl md:text-[56px] font-normal tracking-wide leading-tight transition-colors duration-300 ${theme.textMain}`}>
            Start Your
          </h2>
          <p className={`font-serif italic text-5xl md:text-[68px] font-medium tracking-wide leading-none ${theme.accentRed}`}>
            Journey
          </p>
        </div>

        {/* Steps Flow Container */}
        <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-6 xl:gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Card */}
              <div className={`w-full max-w-[280px] backdrop-blur-sm border rounded-[24px] p-8 min-h-[280px] flex flex-col justify-between transition-all duration-300 group ${theme.cardBg} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardBgHover}`}>
                <div>
                  <span className={`block font-serif text-[38px] font-bold tracking-wide mb-6 group-hover:scale-105 transition-transform duration-300 origin-left ${theme.stepNum}`}>
                    {step.number}
                  </span>
                  <h3 className={`font-sans text-xl font-bold tracking-wide leading-snug mb-3 transition-colors duration-300 ${theme.textCardTitle}`}>
                    {step.title}
                  </h3>
                </div>
                <p className={`text-[15px] leading-relaxed font-normal tracking-wide transition-colors duration-300 ${theme.textCardDesc}`}>
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow */}
              {index < steps.length - 1 && (
                <div className={`flex items-center justify-center my-2 xl:my-0 xl:mx-2 transition-colors duration-300 ${theme.arrowAccent}`}>
                  <ArrowRight className="w-5 h-5 transform rotate-90 xl:rotate-0 opacity-80" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}