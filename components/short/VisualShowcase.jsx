'use client';

import React from 'react';

export default function VisualShowcase() {
  return (
    <section className="w-full bg-[#000000] text-white px-6 py-20 md:px-12 lg:px-24 flex items-center justify-center min-h-screen">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
        
        {/* Mixed Serif Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif tracking-tight leading-[1.2]">
            Explore The <br />
            <span className="text-[#ff2a2a] italic font-serif font-medium tracking-wide block mt-1">World Of</span>
            Fashion Design
          </h2>
        </div>

        {/* Asymmetric Showcase Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full items-stretch">
          
          {/* Left Column: Major Portrait Showcase (Designer Workstation) */}
          <div className="md:col-span-7 relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-full min-h-[400px] md:min-h-[500px] group border border-zinc-900/40 shadow-2xl">
            <img 
              src="/images/short-explore1.png" 
              alt="Designer workstation with moodboards and sketches" 
              className="w-full h-full object-cover brightness-[0.75] sepia-[0.15] contrast-[1.05] transition-transform duration-700 group-hover:scale-102"
            />
            {/* Color Overlay to capture the warm, muted studio lighting */}
            <div className="absolute inset-0 bg-[#3a1a1a]/10 mix-blend-color-burn pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
            
            {/* Context Title overlay positioned at the bottom left */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-xl sm:text-2xl font-normal font-serif tracking-wide">
                Designer Workstation
              </h3>
            </div>
          </div>

          {/* Right Column: Stacked Landscape Showcases */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Top Right Box: Digital Design */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-zinc-900/40 shadow-2xl">
              <img 
                src="/images/short-explore2.png" 
                alt="Digital fashion design interface and color swatches" 
                className="w-full h-full object-cover brightness-[0.7] contrast-[1.05] transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-[#240a0a]/10 mix-blend-color-burn pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-white text-lg sm:text-xl font-normal font-serif tracking-wide">
                  Digital Design
                </h3>
              </div>
            </div>

            {/* Bottom Right Box: Textile Experiments */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-zinc-900/40 shadow-2xl">
              <img 
                src="/images/short-explore3.png" 
                alt="Detailed fabric texture and textile experimentation" 
                className="w-full h-full object-cover brightness-[0.7] contrast-[1.1] transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-[#1a0505]/10 mix-blend-color-burn pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-white text-lg sm:text-xl font-normal font-serif tracking-wide">
                  Textile Experiments
                </h3>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}