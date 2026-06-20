'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function LearningJourney() {
  const steps = [
    { id: '01', title: 'Choose Course' },
    { id: '02', title: 'Learn From Experts' },
    { id: '03', title: 'Work On Projects' },
    { id: '04', title: 'Build Portfolio' },
    { id: '05', title: 'Industry Exposure' },
    { id: '06', title: 'Earn Certificate' },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#050101] bg-gradient-to-b from-[#0a0202] via-[#050101] to-[#0d0404] px-6 py-24 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Soft dark red radial ambient vignette mimicking the glowing lower matrix backdrop */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#ff2a2a]/10 rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="w-full max-w-xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Main Serif Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[52px] font-normal font-serif tracking-tight leading-tight">
            Your <span className="text-[#ff2a2a] italic font-serif font-medium tracking-wide">Learning</span> <br />
            Journey
          </h2>
        </div>

        {/* Stepper Timeline Stack */}
        <div className="w-full flex flex-col items-center">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <React.Fragment key={step.id}>
                {/* Horizontal Flow Card Container */}
                <div className="group w-full max-w-[340px] sm:max-w-[380px] bg-[#110707]/70 border border-zinc-950 rounded-xl p-4 flex items-center gap-6 transition-all duration-300 hover:bg-[#160a0a]/90 hover:border-zinc-900 shadow-xl">
                  
                  {/* Rounded Numeric Pill Unit */}
                  <div className="w-11 h-10 rounded-lg bg-[#240a0a] border border-[#ff2a2a]/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <span className="text-[#ff2a2a] text-sm font-sans font-bold tracking-wider">
                      {step.id}
                    </span>
                  </div>

                  {/* Serif Description Label */}
                  <div className="flex-1">
                    <h3 className="text-zinc-200 group-hover:text-white transition-colors duration-200 text-base sm:text-[17px] font-normal font-serif tracking-wide">
                      {step.title}
                    </h3>
                  </div>

                </div>

                {/* Tailored Flow Direction Connector Line */}
                {!isLast && (
                  <div className="my-4 flex flex-col items-center text-[#ff2a2a]/50 animated-pulse">
                    <ArrowDown className="w-4 h-4 stroke-[2]" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}