'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Application',
    description: 'Fill out the online application form',
  },
  {
    number: '02',
    title: 'Document Verification',
    description: 'Submit required documents',
  },
  {
    number: '03',
    title: 'Personal Interview',
    description: 'Meet with our admission team',
  },
  {
    number: '04',
    title: 'Admission Confirmation',
    description: 'Receive your acceptance letter',
  },
];

export default function JourneySection() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white flex flex-col justify-center items-center px-6 py-20 md:py-32 selection:bg-[#E5333B]/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a0608_0%,_#050505_75%)] opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] w-full mx-auto space-y-16 md:space-y-24">
        {/* Title Group */}
        <div className="text-center space-y-1">
          <h2 className="font-serif text-white text-4xl md:text-[56px] font-normal tracking-wide leading-tight">
            Start Your
          </h2>
          <p className="font-serif italic text-[#E5333B] text-5xl md:text-[68px] font-medium tracking-wide leading-none">
            Journey
          </p>
        </div>

        {/* Steps Flow Container */}
        <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-6 xl:gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Card */}
              <div className="w-full max-w-[280px] bg-[#110e0f]/90 backdrop-blur-sm border border-white/[0.03] rounded-[24px] p-8 min-h-[280px] flex flex-col justify-between transition-all duration-300 hover:border-white/[0.08] hover:bg-[#181415]/90 group">
                <div>
                  {/* Step Number */}
                  <span className="block font-serif text-[38px] font-bold text-[#E5333B]/90 tracking-wide mb-6 group-hover:scale-105 transition-transform duration-300 origin-left">
                    {step.number}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-sans text-xl font-bold text-white tracking-wide leading-snug mb-3">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-[15px] leading-relaxed font-normal tracking-wide">
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow (Hidden on last item, rotates on smaller viewports) */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center text-[#E5333B] my-2 xl:my-0 xl:mx-2">
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