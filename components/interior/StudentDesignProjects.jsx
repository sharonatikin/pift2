'use client';

import React from 'react';
import Image from 'next/image';

const projectShowcase = [
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
    alt: 'Luxury open-plan apartment with curved sofa, kitchen island, and city skyline night view',
  },
  {
    src: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1000&auto=format&fit=crop',
    alt: 'Bright contemporary living setup with off-white modular armchair, floating media shelf, and framed artwork gallery',
  },
  {
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
    alt: 'Elegant modern living room featuring warm vertical wood slat lighting elements and dusty rose seating',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    alt: 'Minimal lounge wall mockup with modern dark wood fluted paneling and abstract geometric pendant lighting',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop',
    alt: 'Grand open conservatory layout featuring architectural steel trusses, central crystal chandelier, and symmetry seating options',
  },
  {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
    alt: 'Luxury hospitality lounge featuring coffered graphic tile ceiling details, retro wall design prints, and bar stools',
  },
];

export default function StudentDesignProjects() {
  return (
    <section className="bg-black text-white py-20 px-6 sm:py-24 md:py-32 lg:px-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-center text-white mb-16 font-sans">
          Student Design Projects
        </h2>

        {/* 3-Column Grid for Desktop & Tablet, Stacked for Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {projectShowcase.map((project, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-neutral-950/60 bg-[#0E0E10] group"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover object-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Subtle inner overlay boundary shadow */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}