'use client';

import React from 'react';
import { Monitor } from 'lucide-react';

const industryTools = [
  { name: 'AutoCAD' },
  { name: '3Ds Max' },
  { name: 'SketchUp' },
  { name: 'Photoshop' },
  { name: 'V-Ray' },
  { name: 'Rendering Tools' },
];

export default function DesignIndustryTools() {
  return (
    <section className="bg-black text-white py-20 px-6 sm:py-24 md:py-32 lg:px-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-center text-white mb-16 font-sans">
          Design With Industry Tools
        </h2>

        {/* 6-Column Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 w-full">
          {industryTools.map((tool, index) => (
            <div
              key={index}
              className="relative bg-[#050505] border border-[#1A0505] rounded-xl p-6 md:p-8 flex flex-col items-center justify-center text-center gap-y-5 transition-all duration-300 hover:border-[#4A0B0B] hover:bg-[#0A0303] group shadow-[0_0_15px_rgba(255,0,0,0.02)]"
            >
              {/* Subtle Red Radial Inner Gradient for Card Depth */}
              <div className="absolute inset-0 rounded-xl bg-radial-gradient from-[#1F0505]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Monitor Icon Wrapper with glowing hover transition */}
              <div className="text-[#FF0000] flex items-center justify-center z-10">
                <Monitor 
                  className="w-8 h-8 md:w-9 md:h-9 stroke-[1.5] transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.3)]" 
                  aria-hidden="true"
                />
              </div>
              
              {/* Tool Label */}
              <h3 className="text-sm sm:text-base font-normal text-neutral-300 tracking-wide font-sans z-10 transition-colors duration-300 group-hover:text-white">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}