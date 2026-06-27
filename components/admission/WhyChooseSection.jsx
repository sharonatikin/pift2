'use client';

import React from 'react';

const coreFeatures = [
  {
    id: 1,
    title: 'Practical Learning',
    description: 'Gain hands-on experience through assignments, projects, and workshops.',
  },
  {
    id: 2,
    title: 'Expert Trainers',
    description: 'Learn from professionals with extensive industry experience.',
  },
  {
    id: 3,
    title: 'Career-Oriented Programs',
    description: 'Develop skills that match current industry requirements.',
  },
  {
    id: 4,
    title: 'Supportive Environment',
    description: 'Receive personal guidance throughout your learning journey.',
  },
  {
    id: 5,
    title: 'Certification',
    description: 'Earn recognized certificates upon successful completion.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-[#0B0A0A] text-white py-20 px-4 sm:px-6 lg:px-8 font-sans antialiased flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto text-center">
        
        {/* Header Titles */}
        <div className="space-y-2 mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-serif font-normal text-white tracking-tight leading-tight">
            Why Choose
          </h2>
          <p className="text-[#D90429] text-4xl sm:text-5xl md:text-[62px] font-serif italic font-normal tracking-wide leading-none">
            What Makes Us Different?
          </p>
        </div>

        {/* Responsive Features Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-3.5 items-stretch justify-center">
          {coreFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#141313] border border-neutral-900 rounded-2xl p-6 md:p-7 text-left flex flex-col justify-start transition-all duration-300 hover:border-neutral-800 hover:bg-[#1a1919] group"
            >
              {/* Feature Title */}
              <h3 className="text-lg md:text-xl font-serif font-normal text-white tracking-tight leading-snug mb-4 group-hover:text-[#D90429] transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Feature Description */}
              <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed tracking-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}