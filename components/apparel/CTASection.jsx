'use client';

import React from 'react';
import { ArrowUpRight, ArrowDownToLine } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative min-h-[70vh] bg-[#050505] text-white flex flex-col justify-center items-center px-6 py-24 selection:bg-[#E5333B]/20 overflow-hidden">
      {/* Background ambient lighting vignettes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#200609_0%,_#050505_70%)] opacity-80 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E5333B]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E5333B]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] w-full mx-auto text-center space-y-8 md:space-y-10">
        {/* Main Heading */}
        <h2 className="font-serif text-[42px] md:text-[76px] lg:text-[84px] font-normal tracking-tight leading-[1.1] text-white">
          Shape The <span className="text-[#E5333B] italic font-medium tracking-wide">Future</span>
          <br />
          Of Fashion Commerce.
        </h2>

        {/* Subdescription */}
        <p className="text-gray-400 text-base md:text-xl font-normal max-w-2xl mx-auto leading-relaxed tracking-wide">
          Build a successful career in merchandising, sourcing, buying and retail management.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="w-full sm:w-auto bg-[#E5333B] hover:bg-[#c92a31] text-white font-semibold rounded-full px-10 py-4.5 text-[16px] flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_0_40px_rgba(229,51,59,0.25)] hover:shadow-[0_0_50px_rgba(229,51,59,0.4)] transform hover:-translate-y-0.5">
            Apply For Admission
            <ArrowUpRight className="w-4 h-4" />
          </button>
          
          <button className="w-full sm:w-auto border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-gray-200 hover:text-white font-medium rounded-full px-10 py-4.5 text-[16px] flex items-center justify-center gap-2.5 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-0.5">
            Download Prospectus
            <ArrowDownToLine className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
}