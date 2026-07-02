'use client';

import React from 'react';
import Image from 'next/image';

export default function VisualShowcase() {
  return (
    <section className="w-full bg-pageBg text-textMain px-6 py-20 md:px-12 lg:px-24 flex items-center justify-center min-h-screen transition-colors duration-300">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
        
        {/* Mixed Serif Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-textMain text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif tracking-tight leading-[1.2]">
            Explore The <br />
            <span className="text-accent italic font-serif font-medium tracking-wide block mt-1">World Of</span>
            Fashion Design
          </h2>
        </div>

        {/* Asymmetric Showcase Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full items-stretch">
          
          {/* Left Column: Major Portrait Showcase */}
          <div className="md:col-span-7 relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-full min-h-[400px] md:min-h-[500px] group border border-brandBorder shadow-lg">
            <Image 
              src="/images/short-explore1.png" 
              alt="Designer workstation" 
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-102"
            />
            
            {/* Context Title overlay positioned at the bottom left */}
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-xl sm:text-2xl font-normal font-serif tracking-wide bg-black/30 px-3 py-1 rounded-md">
                Designer Workstation
              </h3>
            </div>
          </div>

          {/* Right Column: Stacked Landscape Showcases */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Top Right Box: Digital Design */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group border border-brandBorder shadow-lg">
              <Image 
                src="/images/short-explore2.png" 
                alt="Digital fashion design" 
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute bottom-5 left-5">
                <h3 className="text-white text-lg sm:text-xl font-normal font-serif tracking-wide bg-black/30 px-3 py-1 rounded-md">
                  Digital Design
                </h3>
              </div>
            </div>

            {/* Bottom Right Box: Textile Experiments */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group border border-brandBorder shadow-lg">
              <Image 
                src="/images/short-explore3.png" 
                alt="Textile experimentation" 
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute bottom-5 left-5">
                <h3 className="text-white text-lg sm:text-xl font-normal font-serif tracking-wide bg-black/30 px-3 py-1 rounded-md">
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