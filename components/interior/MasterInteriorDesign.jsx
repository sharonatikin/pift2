'use client';

import React from 'react';

const skills = [
  'Space Planning',
  'Furniture Design',
  'Lighting Design',
  'Material Selection',
  'Color Psychology',
  'CAD Drafting',
  'AutoCAD',
  '3D Max',
  'Visualization',
  'Client Presentation',
  'Project Execution',
  'Portfolio Development',
];

export default function MasterInteriorDesign() {
  return (
    <section className="bg-black text-white py-20 px-6 sm:py-24 md:py-32 lg:px-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-center text-white mb-16 font-sans">
          Master The Art Of Interior Design
        </h2>

        {/* 4-Column Grid for Desktop, fluid collapse for Tablet/Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl px-6 py-6 md:py-7 flex items-center justify-center text-center transition-all duration-300 hover:border-neutral-700 hover:bg-[#141414] shadow-sm cursor-default"
            >
              <span className="text-sm sm:text-base font-normal tracking-wide text-neutral-200 font-sans">
                {skill}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}