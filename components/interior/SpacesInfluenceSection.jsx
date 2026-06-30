'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const curriculumSkills = [
  { name: 'Space Planning' },
  { name: 'Furniture Design' },
  { name: 'Lighting Design' },
  { name: 'Material Studies' },
  { name: 'Interior Styling' },
  { name: 'CAD Drafting' },
  { name: '3D Visualization' },
  { name: 'Project Management' },
  { name: 'Portfolio Development', fullWidth: true },
];

export default function SpacesInfluenceSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Standalone inline design tokens mapped component-side
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textMuted: isDark ? 'text-neutral-400' : 'text-neutral-600',
    textItem: isDark ? 'text-neutral-300' : 'text-neutral-800',
    bulletColor: isDark ? 'bg-[#C5162E]' : 'bg-[#C5162E]',
    shadowColor: isDark ? 'shadow-neutral-950/60' : 'shadow-neutral-300/40'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-20 px-6 sm:py-28 md:py-36 lg:px-16 overflow-hidden transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Images Grid/Offset Layout */}
        <div className="col-span-1 lg:col-span-6 flex flex-row items-center gap-4 sm:gap-6 w-full h-full min-h-[350px] sm:min-h-[480px]">
          {/* First Image - Higher positioning */}
          <div className={`relative w-1/2 aspect-[3/4] rounded-2xl overflow-hidden self-start shadow-2xl ${theme.shadowColor} transition-shadow duration-300`}>
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop"
              alt="Minimalist grey living room setup with modular sofa"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          {/* Second Image - Shifted downwards slightly */}
          <div className={`relative w-1/2 aspect-[3/4] rounded-2xl overflow-hidden self-end lg:translate-y-8 shadow-2xl ${theme.shadowColor} transition-shadow duration-300`}>
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
              alt="Modern aesthetic living room with organic coffee table and fine art wall canvas"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>

        {/* Right Side: Text & Features List */}
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-center lg:pl-4 mt-8 lg:mt-0">
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight leading-[1.15] mb-8 font-sans">
            Spaces Influence How <br />We Live.
          </h2>
          
          <p className={`${theme.textMuted} font-light leading-relaxed text-base sm:text-lg mb-10 max-w-xl transition-colors duration-300`}>
            Interior Design combines creativity, functionality and technical
            expertise to create meaningful environments. Students learn
            residential, commercial, retail and hospitality design through practical
            studio learning and real-world project development.
          </p>

          {/* Curriculum Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-xl">
            {curriculumSkills.map((skill, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-x-3 text-sm sm:text-base ${theme.textItem} font-light transition-colors duration-300 ${
                  skill.fullWidth ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Dynamic theme-specific bullet indicator */}
                <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${theme.bulletColor} transition-colors duration-300`} aria-hidden="true" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}