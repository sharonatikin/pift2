'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ArrowUpRight, ArrowDownToLine } from 'lucide-react';

export default function CTASection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted && resolvedTheme === 'dark';

  // Design Tokens Mapping
  const theme = {
    bgPage: isDark ? 'bg-[#050505]' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textSubtitle: isDark ? 'text-gray-400' : 'text-neutral-600',
    accentRed: 'text-[#E5333B]',
    btnPrimary: 'bg-[#E5333B] hover:bg-[#c92a31] text-white',
    btnSecondary: isDark 
      ? 'border-white/10 hover:border-white/20 bg-white/[0.02] text-gray-200' 
      : 'border-neutral-300 hover:border-neutral-400 bg-white text-neutral-800',
    glow: isDark ? 'bg-[#E5333B]/5' : 'bg-[#E5333B]/10',
    border: isDark ? 'border-neutral-900' : 'border-neutral-200'
  };

  return (
    <section className={`relative min-h-[70vh] flex flex-col justify-center items-center px-6 py-24 overflow-hidden transition-colors duration-300 ${theme.bgPage}`}>
      
      {/* Background ambient lighting - Dynamic opacity for theme */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-80' : 'opacity-100'}`}>
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_${isDark ? '#200609' : '#F0C9CB'}_0%,_transparent_70%)] pointer-events-none`} />
      </div>
      
      <div className={`absolute top-0 left-0 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none ${theme.glow}`} />
      <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none ${theme.glow}`} />

      <div className="relative z-10 max-w-[1000px] w-full mx-auto text-center space-y-8 md:space-y-10">
        
        {/* Main Heading with Serif Font */}
        <h2 className={`font-serif text-[42px] md:text-[76px] lg:text-[84px] font-normal tracking-tight leading-[1.1] transition-colors duration-300 ${theme.textMain}`}>
          Shape The <span className={`${theme.accentRed} italic font-medium tracking-wide`}>Future</span>
          <br />
          Of Fashion Commerce.
        </h2>

        {/* Subdescription */}
        <p className={`text-base md:text-xl font-normal max-w-2xl mx-auto leading-relaxed tracking-wide transition-colors duration-300 ${theme.textSubtitle}`}>
          Build a successful career in merchandising, sourcing, buying and retail management.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className={`font-semibold rounded-full px-10 py-4.5 text-[16px] flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl ${theme.btnPrimary}`}>
            Apply For Admission
            <ArrowUpRight className="w-4 h-4" />
          </button>
          
          <button className={`border font-medium rounded-full px-10 py-4.5 text-[16px] flex items-center justify-center gap-2.5 transition-all duration-300 backdrop-blur-sm ${theme.btnSecondary}`}>
            Download Prospectus
            <ArrowDownToLine className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}