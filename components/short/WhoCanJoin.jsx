'use client';

import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Store, 
  Heart 
} from 'lucide-react';

export default function WhoCanJoin() {
  const targets = [
    {
      icon: GraduationCap,
      title: 'Students',
      description: 'High school and college students looking to explore fashion design and build foundational skills.',
    },
    {
      icon: Briefcase,
      title: 'Working Professionals',
      description: 'Professionals seeking to transition into the fashion industry or add new skills to their repertoire.',
    },
    {
      icon: Store,
      title: 'Boutique Owners',
      description: 'Entrepreneurs who want to understand design, production, and styling for their fashion businesses.',
    },
    {
      icon: Heart,
      title: 'Fashion Enthusiasts',
      description: 'Anyone passionate about fashion who wants to learn design skills and explore their creativity.',
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#050101] bg-gradient-to-b from-[#080202] via-[#050101] to-[#030000] px-6 py-24 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Precision ambient soft red background glow behind the grid layout */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-[#ff2a2a]/10 rounded-full blur-[140px] pointer-events-none select-none z-0" />

      <div className="max-w-4xl w-full mx-auto flex flex-col items-center relative z-10">
        
        {/* Mixed Typography Header Block */}
        <div className="text-center mb-16 max-w-xl">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif tracking-tight leading-[1.2]">
            Who Is This <br />
            <span className="text-[#ff2a2a] italic font-serif font-medium tracking-wide block mt-1">Program</span>
            For?
          </h2>
        </div>

        {/* 2x2 Clean Balanced Symmetrical Grid Grid Array */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {targets.map((target, index) => {
            const IconComponent = target.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#110707]/60 border border-zinc-900/50 hover:bg-[#160a0a]/80 hover:border-zinc-800/80 rounded-2xl p-8 pt-10 pb-9 flex flex-col items-center text-center transition-all duration-300 shadow-xl backdrop-blur-xs"
              >
                {/* Subtle internal radial light response on hover block */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a2a]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                {/* Rounded Icon Squircle Frame Container */}
                <div className="w-12 h-12 rounded-xl bg-[#240a0a] border border-[#ff2a2a]/10 flex items-center justify-center text-[#ff2a2a] mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#2c0d0d]">
                  <IconComponent className="w-[22px] h-[22px] stroke-[1.75]" />
                </div>

                {/* Typography Wrapper Items */}
                <div className="space-y-3 w-full">
                  <h3 className="text-zinc-100 text-[19px] font-normal font-serif tracking-wide leading-snug group-hover:text-white transition-colors duration-200">
                    {target.title}
                  </h3>
                  <p className="text-zinc-500 text-[13px] font-normal font-sans leading-relaxed tracking-wide max-w-[290px] mx-auto group-hover:text-zinc-400 transition-colors duration-200">
                    {target.description}
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