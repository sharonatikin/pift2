'use client';

import React from 'react';

export default function FinalCTA() {
  return (
    <section className="w-full min-h-[500px] bg-pageBg px-6 py-24 md:px-12 flex flex-col items-center justify-center text-center transition-colors duration-300">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Main Editorial Heading */}
        <h2 className="text-textMain text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal font-serif tracking-tight leading-[1.15] mb-6 max-w-2xl">
          Start Your <span className="text-accent italic font-serif font-medium tracking-wide">Fashion</span> <br className="sm:hidden" /> Journey Today.
        </h2>

        {/* Supporting Copy */}
        <p className="text-textMuted text-sm md:text-[15px] font-sans font-normal leading-relaxed tracking-wide max-w-md mx-auto mb-10">
          Gain industry-relevant skills through focused short-term learning programs.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-md">
          <button className="w-full sm:w-auto bg-accent hover:bg-accentHover text-white font-sans font-medium text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-accent/20 active:scale-[0.98]">
            Apply Now
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-brandBorder hover:border-textMuted text-textMain font-sans font-medium text-sm px-8 py-3.5 rounded-xl transition-all duration-300 active:scale-[0.98]">
            Download Prospectus
          </button>
        </div>

      </div>
    </section>
  );
}