'use client';

import React from 'react';
import Image from 'next/image';

const studioImages = [
  {
    src: 'https://images.unsplash.com/photo-1545204445-0245087771ed?q=80&w=1000&auto=format&fit=crop',
    alt: 'Designer working on a laptop inside a modern wood-paneled focus booth studio micro-office',
  },
  {
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
    alt: 'Bright minimal design studio featuring a wooden drafting table, plants, and technical monitors',
  },
  {
    src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1000&auto=format&fit=crop',
    alt: 'Collaborative creative environment with designers discussing layout options in front of a custom display shelf unit',
  },
];

const pillars = [
  { name: 'Live Projects' },
  { name: 'Industry Software' },
  { name: 'Studio Learning' },
  { name: 'Hands-On Training' },
];

export default function LearnInsideStudios() {
  return (
    <section className="bg-black text-white py-20 px-6 sm:py-24 md:py-32 lg:px-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-center text-white mb-16 font-sans">
          Learn Inside Professional Design Studios
        </h2>

        {/* 3-Column Image Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          {studioImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] sm:aspect-[16/11] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-950/40"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* 4-Column Bottom Pillars Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-[#0A0A0B] border border-[#141416] rounded-xl py-6 flex items-center justify-center text-center transition-all duration-300 hover:border-neutral-800 hover:bg-[#111113] cursor-default"
            >
              <span className="text-sm sm:text-base font-normal tracking-wide text-[#E53E3E] font-sans">
                {pillar.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}