'use client';

import React from 'react';

const timelineData = [
  {
    semester: 'Semester 1',
    tags: ['Design Fundamentals', 'Sketching', 'Color Theory', 'Design Principles'],
  },
  {
    semester: 'Semester 2',
    tags: ['Space Planning', 'Furniture Design', 'Materials & Finishes', 'Interior Concepts'],
  },
  {
    semester: 'Semester 3',
    tags: ['Residential Interiors', 'Lighting Design', 'CAD Introduction'],
  },
  {
    semester: 'Semester 4',
    tags: ['Commercial Interiors', 'Retail Spaces', '3D Visualization'],
  },
  {
    semester: 'Semester 5',
    tags: ['Advanced Interior Systems', 'Project Management', 'Professional Practice'],
  },
  {
    semester: 'Semester 6',
    tags: ['Final Design Project', 'Industry Internship', 'Portfolio Showcase'],
  },
];

export default function CreativeEvolutionTimeline() {
  return (
    <section className="bg-black text-white py-20 px-4 sm:py-28 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-center text-white mb-20 font-sans">
          Your Creative Evolution
        </h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col">
          {timelineData.map((item, index) => {
            const isLast = index === timelineData.length - 1;

            return (
              <div key={index} className="flex gap-x-6 sm:gap-x-10 group relative">
                
                {/* Left Line & Number Indicator Column */}
                <div className="flex flex-col items-center shrink-0 relative">
                  {/* Vertical connecting line */}
                  {!isLast && (
                    <div className="absolute top-12 bottom-0 w-[2px] bg-gradient-to-b from-[#FF0000] to-[#FF0000]/20" />
                  )}
                  
                  {/* Circular Badge Number */}
                  <div className="w-11 h-11 rounded-full bg-[#CC0000] flex items-center justify-center font-sans text-base font-medium text-white shadow-lg shadow-[#FF0000]/10 z-10">
                    {index + 1}
                  </div>
                </div>

                {/* Right Content Card Column */}
                <div className="flex-1 bg-[#090A0C]/60 border border-[#141619] rounded-xl p-6 sm:p-8 mb-8 backdrop-blur-sm transition-all duration-300 hover:border-neutral-800 hover:bg-[#0D0E11]/80">
                  {/* Semester Label */}
                  <h3 className="text-xl font-medium tracking-wide text-[#FF0000] mb-5 font-sans">
                    {item.semester}
                  </h3>
                  
                  {/* Course Tags List */}
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-flex items-center rounded-full bg-[#131518] border border-[#1F2328] px-4 py-2 text-xs sm:text-sm font-light text-neutral-300 tracking-wide transition-colors duration-200 hover:border-neutral-700 hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}