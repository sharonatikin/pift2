'use client';

import React from 'react';
import Image from 'next/image';

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
  return (
    <section className="bg-black text-white py-20 px-6 sm:py-28 md:py-36 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Images Grid/Offset Layout */}
        <div className="col-span-1 lg:col-span-6 flex flex-row items-center gap-4 sm:gap-6 w-full h-full min-h-[350px] sm:min-h-[480px]">
          {/* First Image - Higher positioning */}
          <div className="relative w-1/2 aspect-[3/4] rounded-2xl overflow-hidden self-start shadow-2xl shadow-neutral-950/50">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop"
              alt="Minimalist grey living room setup with modular sofa"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          {/* Second Image - Shifted downwards slightly */}
          <div className="relative w-1/2 aspect-[3/4] rounded-2xl overflow-hidden self-end lg:translate-y-8 shadow-2xl shadow-neutral-950/50">
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
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight leading-[1.15] mb-8 text-neutral-50 font-sans">
            Spaces Influence How <br />We Live.
          </h2>
          
          <p className="text-neutral-400 font-light leading-relaxed text-base sm:text-lg mb-10 max-w-xl">
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
                className={`flex items-center gap-x-3 text-sm sm:text-base text-neutral-300 font-light ${
                  skill.fullWidth ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Red bullet indicator */}
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF0000] shrink-0" aria-hidden="true" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}