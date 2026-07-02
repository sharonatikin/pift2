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
    <section className="w-full bg-pageBg px-6 py-24 md:px-12 flex flex-col items-center justify-center transition-colors duration-300">
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        
        {/* Main Serif Header */}
        <div className="text-center mb-16">
          <h2 className="text-textMain text-4xl sm:text-5xl lg:text-[52px] font-normal font-serif tracking-tight leading-tight">
            Your <span className="text-accent italic font-serif font-medium tracking-wide">Learning</span> <br />
            Journey
          </h2>
        </div>

        {/* Stepper Timeline Stack */}
        <div className="w-full flex flex-col items-center">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <React.Fragment key={step.id}>
                {/* Horizontal Flow Item */}
                <div className="w-full max-w-[340px] flex items-center gap-6">
                  
                  {/* Numeric Pill Unit */}
                  <div className="w-12 h-10 rounded-lg bg-[#fff0f0] dark:bg-[#290a0a] flex items-center justify-center shrink-0 border border-accent/20">
                    <span className="text-accent text-sm font-sans font-bold tracking-wider">
                      {step.id}
                    </span>
                  </div>

                  {/* Serif Label */}
                  <div className="flex-1">
                    <h3 className="text-textMain text-base sm:text-[17px] font-normal font-serif tracking-wide">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Flow Direction Connector Line */}
                {!isLast && (
                  <div className="my-4 flex flex-col items-center text-accent">
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