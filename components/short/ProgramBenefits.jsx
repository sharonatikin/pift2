'use client';

import React from 'react';
import { 
  Clock, 
  Hammer, 
  Building2, 
  UserCheck, 
  FolderHeart, 
  LineChart 
} from 'lucide-react';

export default function ProgramBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Study at your own pace with flexible schedules designed for busy professionals and students.',
    },
    {
      icon: Hammer,
      title: 'Hands-On Projects',
      description: 'Work on real-world fashion projects to build practical skills and experience.',
    },
    {
      icon: Building2,
      title: 'Industry-Oriented Training',
      description: 'Learn techniques and practices currently used in the fashion industry.',
    },
    {
      icon: UserCheck,
      title: 'Professional Mentorship',
      description: 'Get guidance from experienced fashion professionals and industry experts.',
    },
    {
      icon: FolderHeart,
      title: 'Portfolio Development',
      description: 'Create a professional portfolio that showcases your skills and creativity.',
    },
    {
      icon: LineChart,
      title: 'Career Enhancement',
      description: 'Gain skills that open doors to new opportunities in the fashion world.',
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#050101] bg-gradient-to-b from-[#090303] via-[#050101] to-[#030000] px-6 py-24 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden">
      {/* Dynamic dark red radial ambient backdrop glow to capture the precise look and feel of the center background vignette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ff2a2a]/10 rounded-full blur-[130px] pointer-events-none select-none z-0" />

      <div className="max-w-6xl w-full mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Typography Title Block Frame */}
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif tracking-tight leading-[1.2]">
            Designed For <br />
            <span className="text-[#ff2a2a] italic font-serif font-medium tracking-wide block mt-1">Modern Fashion</span>
            Careers
          </h2>
        </div>

        {/* Modular 3x2 Matrix Card Grid Layout Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#110707]/70 hover:bg-[#160a0a]/90 border border-zinc-900/60 hover:border-zinc-800/80 rounded-2xl p-8 pt-9 flex flex-col items-start text-left transition-all duration-300 shadow-xl backdrop-blur-xs"
              >
                {/* Microgradient highlight bounding line frame inside each element container */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a2a]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                {/* Squircle Dark Red Icon Frame Unit */}
                <div className="w-12 h-12 rounded-xl bg-[#210909] border border-[#ff2a2a]/10 flex items-center justify-center text-[#ff2a2a] mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#2c0d0d]">
                  <IconComponent className="w-[22px] h-[22px] stroke-[1.75]" />
                </div>

                {/* Typography Wrapper Group */}
                <div className="space-y-3 w-full">
                  <h3 className="text-zinc-100 text-lg md:text-[19px] font-normal font-serif tracking-wide leading-snug group-hover:text-white transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-500 text-xs md:text-[13px] font-normal font-sans leading-relaxed tracking-wide group-hover:text-zinc-400 transition-colors duration-200">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}