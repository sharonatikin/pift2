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
      description: 'High school and college students looking to explore fashion design and build foundational skills.' 
    },
    { 
      icon: Briefcase, 
      title: 'Working Professionals', 
      description: 'Professionals seeking to transition into the fashion industry or add new skills to their repertoire.' 
    },
    { 
      icon: Store, 
      title: 'Boutique Owners', 
      description: 'Entrepreneurs who want to understand design, production, and styling for their fashion businesses.' 
    },
    { 
      icon: Heart, 
      title: 'Fashion Enthusiasts', 
      description: 'Anyone passionate about fashion who wants to learn design skills and explore their creativity.' 
    },
  ];

  return (
    <section className="w-full bg-pageBg px-6 py-24 md:px-12 flex flex-col items-center justify-center transition-colors duration-300">
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
        
        {/* Mixed Typography Header Block */}
        <div className="text-center mb-16 max-w-xl">
          <h2 className="text-textMain text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif tracking-tight leading-[1.2]">
            Who Is This <br />
            <span className="text-accent italic font-serif font-medium tracking-wide block mt-1">Program</span>
            For?
          </h2>
        </div>

        {/* 2x2 Clean Balanced Symmetrical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {targets.map((target, index) => {
            const IconComponent = target.icon;
            return (
              <div
                key={index}
                className="group bg-pageBg border border-brandBorder rounded-3xl p-8 pt-10 pb-9 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg"
              >
                {/* Rounded Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-[#fff0f0] dark:bg-[#290a0a] flex items-center justify-center text-accent mb-8 border border-accent/20 transition-transform duration-300 group-hover:scale-105">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Typography Wrapper */}
                <div className="space-y-3 w-full">
                  <h3 className="text-textMain text-[19px] font-normal font-serif tracking-wide leading-snug">
                    {target.title}
                  </h3>
                  <p className="text-textMuted text-[13px] font-normal font-sans leading-relaxed tracking-wide max-w-[290px] mx-auto">
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