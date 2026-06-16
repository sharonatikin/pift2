'use client';

import React from 'react';
import { Home, Briefcase, Users, PaintBucket, Sparkles, Lightbulb } from 'lucide-react';

const designCategories = [
  {
    icon: Home,
    title: 'Residential Design',
  },
  {
    icon: Briefcase,
    title: 'Commercial Design',
  },
  {
    icon: Users,
    title: 'Hospitality Design',
  },
  {
    icon: PaintBucket,
    title: 'Retail Environments',
  },
  {
    icon: Sparkles,
    title: 'Luxury Living Spaces',
  },
  {
    icon: Lightbulb,
    title: 'Sustainable Design',
  },
];
console.log( Users, PaintBucket, Sparkles, )
export default function CreativitySpacesSection() {
  return (
    <section className="bg-black text-white py-20 px-6 sm:py-24 md:py-32 lg:px-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-center text-white mb-16 font-sans">
          Turn Creativity Into Functional Spaces
        </h2>

        {/* 3x2 Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {designCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-8 md:p-10 flex flex-col items-start gap-y-6 transition-all duration-300 hover:border-neutral-800 hover:bg-[#121212] group"
              >
                {/* Icon Wrapper */}
                <div className="text-[#FF0000] flex items-center justify-center">
                  <IconComponent 
                    className="w-8 h-8 md:w-9 md:h-9 stroke-[1.5] transition-transform duration-300 group-hover:scale-105" 
                    aria-hidden="true"
                  />
                </div>
                
                {/* Category Title */}
                <h3 className="text-base md:text-lg font-normal text-neutral-200 tracking-wide font-sans">
                  {category.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}