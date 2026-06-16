'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const processSteps = [
  { name: 'Research', hasArrow: true },
  { name: 'Concept Development', hasArrow: true },
  { name: 'Space Planning', hasArrow: true },
  { name: 'Material Selection', hasArrow: true },
  { name: 'Furniture Layout', hasArrow: true },
  { name: '3D Visualization', hasArrow: true },
  { name: 'Client Presentation', hasArrow: true },
  { name: 'Execution', hasArrow: true },
  { name: 'Final Experience', hasArrow: false },
];

export default function HowSpacesAreCreated() {
  return (
    <section className="bg-black text-white py-20 px-4 sm:py-28 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-center text-white mb-20 font-sans">
          How Great Spaces Are Created
        </h2>

        {/* Vertical Stack List */}
        <div className="flex flex-col gap-y-5">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-x-5 sm:gap-x-8 group">
              
              {/* Circular Ordered Step Indicator */}
              <div className="w-12 h-12 rounded-full bg-[#B21212] flex items-center justify-center font-sans text-base font-medium text-white shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0">
                {index + 1}
              </div>

              {/* Main Content Bar Row */}
              <div className="flex-1 flex items-center justify-between bg-[#0B0C0E] border border-[#141619] rounded-xl px-6 py-4 sm:py-5 transition-all duration-300 group-hover:border-neutral-800 group-hover:bg-[#101216]">
                {/* Step Name */}
                <span className="text-sm sm:text-base font-normal tracking-wide text-neutral-300 font-sans transition-colors duration-300 group-hover:text-white">
                  {step.name}
                </span>

                {/* Optional Custom Red Action Indicator Arrow */}
                {step.hasArrow ? (
                  <ArrowRight 
                    className="w-4 h-4 text-[#FF0000] transition-transform duration-300 group-hover:translate-x-1.5 stroke-[2]" 
                    aria-hidden="true"
                  />
                ) : (
                  <div className="w-4 h-4" /> // Empty layout balance node for identical card tracking
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}