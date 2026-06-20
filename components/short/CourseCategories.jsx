'use client';

import React from 'react';
import { 
  Palette, 
  Scissors, 
  Shirt, 
  Paintbrush, 
  Laptop, 
  TrendingUp 
} from 'lucide-react';

export default function CourseCategories() {
  const categories = [
    {
      icon: Palette,
      title: 'Fashion Illustration',
      description: 'Hand sketching, rendering, fashion figures and concept development.',
    },
    {
      icon: Scissors,
      title: 'Pattern Making & Garment Construction',
      description: 'Professional garment development techniques.',
    },
    {
      icon: Shirt,
      title: 'Fashion Styling',
      description: 'Personal styling, editorial styling and fashion communication.',
    },
    {
      icon: Paintbrush,
      title: 'Textile & Surface Design',
      description: 'Prints, textures, fabrics and design experimentation.',
    },
    {
      icon: Laptop,
      title: 'Digital Fashion Design',
      description: 'Adobe Photoshop, Illustrator and digital portfolio creation.',
    },
    {
      icon: TrendingUp,
      title: 'Fashion Entrepreneurship',
      description: 'Building and launching successful fashion businesses.',
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#070202] bg-gradient-to-b from-[#0d0404] via-[#070202] to-[#040101] px-6 py-20 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden">
      {/* Deep atmospheric dark red ambient glow mirroring the top/center lighting from the image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff2a2a]/10 rounded-full blur-[130px] pointer-events-none select-none" />

      <div className="max-w-6xl w-full mx-auto flex flex-col items-center relative z-10">
        
        {/* Header Block Section */}
        <div className="text-center space-y-3 mb-16 max-w-2xl">
          <span className="block text-[#ff2a2a] text-xs font-bold tracking-[0.3em] uppercase">
            Course Categories
          </span>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight leading-[1.15] font-serif">
            Choose Your <br />
            <span className="text-[#ff2a2a] italic font-serif font-medium tracking-wide">Creative</span> Path
          </h2>
        </div>

        {/* Categories 3x2 Matrix Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#110707]/60 hover:bg-[#160a0a]/80 border border-zinc-900/60 hover:border-zinc-800/80 rounded-2xl p-8 flex flex-col items-start text-left transition-all duration-300 shadow-xl backdrop-blur-sm"
              >
                {/* Visual red back-shadow overlay subtle accentuation on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a2a]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                {/* Styled Red Container Box Wrapper for Icons */}
                <div className="w-12 h-12 rounded-xl bg-[#290a0a] flex items-center justify-center text-[#ff2a2a] mb-6 border border-[#ff2a2a]/10 group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Text Typography Wrapper Frame */}
                <div className="space-y-3 w-full">
                  <h3 className="text-zinc-100 text-lg sm:text-[19px] font-normal font-serif tracking-wide leading-snug group-hover:text-white transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-zinc-500 text-xs sm:text-[13px] font-normal leading-relaxed tracking-wide transition-colors duration-200 group-hover:text-zinc-400">
                    {category.description}
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