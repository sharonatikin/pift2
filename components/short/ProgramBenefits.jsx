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
    { icon: Clock, title: 'Flexible Learning', description: 'Study at your own pace with flexible schedules designed for busy professionals and students.' },
    { icon: Hammer, title: 'Hands-On Projects', description: 'Work on real-world fashion projects to build practical skills and experience.' },
    { icon: Building2, title: 'Industry-Oriented Training', description: 'Learn techniques and practices currently used in the fashion industry.' },
    { icon: UserCheck, title: 'Professional Mentorship', description: 'Get guidance from experienced fashion professionals and industry experts.' },
    { icon: FolderHeart, title: 'Portfolio Development', description: 'Create a professional portfolio that showcases your skills and creativity.' },
    { icon: LineChart, title: 'Career Enhancement', description: 'Gain skills that open doors to new opportunities in the fashion world.' },
  ];

  return (
    <section className="w-full bg-pageBg px-6 py-24 md:px-12 lg:px-24 flex items-center justify-center transition-colors duration-300">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-textMain text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif tracking-tight leading-[1.2]">
            Designed For <br />
            <span className="text-accent italic font-serif font-medium tracking-wide block mt-1">Modern Fashion</span>
            Careers
          </h2>
        </div>

        {/* Modular Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-pageBg border border-brandBorder rounded-3xl p-8 flex flex-col items-start text-left transition-all duration-300 hover:shadow-lg"
              >
                {/* Red Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-[#fff0f0] dark:bg-[#290a0a] flex items-center justify-center text-accent mb-8 border border-accent/20 transition-transform duration-300 group-hover:scale-105">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Text Content */}
                <div className="space-y-3 w-full">
                  <h3 className="text-textMain text-lg md:text-[19px] font-normal font-serif tracking-wide leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-textMuted text-xs md:text-[13px] font-normal font-sans leading-relaxed tracking-wide">
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