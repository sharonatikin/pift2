'use client';

import React from 'react';

export default function FinalCTA() {
  return (
    <section className="relative w-full min-h-[500px] bg-[#0c0202] bg-gradient-to-b from-[#180404] via-[#0c0202] to-[#050101] px-6 py-24 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Heavy centered dark red radial glow mirroring the exact background gradient of the UI */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#e02222]/15 rounded-full blur-[140px] pointer-events-none select-none z-0" />

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Main Mixed Editorial Serif Heading Block */}
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal font-serif tracking-tight leading-[1.15] mb-6 max-w-2xl">
          Start Your <span className="text-[#ff2a2a] italic font-serif font-medium tracking-wide">Fashion</span> <br className="sm:hidden" /> Journey Today.
        </h2>

        {/* Supporting Copy Description Text */}
        <p className="text-zinc-400 text-sm md:text-[15px] font-sans font-normal leading-relaxed tracking-wide max-w-md mx-auto mb-10 opacity-90">
          Gain industry-relevant skills through focused short-term learning programs.
        </p>

        {/* Double Call-to-Action Interactive Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-md">
          <button className="w-full sm:w-auto bg-[#e02222] hover:bg-[#ff2a2a] text-white font-sans font-medium text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-xl shadow-[#e02222]/10 active:scale-[0.98]">
            Apply Now
          </button>
          <button className="w-full sm:w-auto bg-[#0a0505]/80 border border-zinc-800 hover:border-zinc-700 hover:bg-[#110707] text-zinc-300 hover:text-white font-sans font-medium text-sm px-8 py-3.5 rounded-xl transition-all duration-300 active:scale-[0.98]">
            Download Prospectus
          </button>
        </div>

      </div>
    </section>
  );
}