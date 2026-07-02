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
    { icon: Palette, title: 'Fashion Illustration', description: 'Hand sketching, rendering, fashion figures and concept development.' },
    { icon: Scissors, title: 'Pattern Making & Garment Construction', description: 'Professional garment development techniques.' },
    { icon: Shirt, title: 'Fashion Styling', description: 'Personal styling, editorial styling and fashion communication.' },
    { icon: Paintbrush, title: 'Textile & Surface Design', description: 'Prints, textures, fabrics and design experimentation.' },
    { icon: Laptop, title: 'Digital Fashion Design', description: 'Adobe Photoshop, Illustrator and digital portfolio creation.' },
    { icon: TrendingUp, title: 'Fashion Entrepreneurship', description: 'Building and launching successful fashion businesses.' },
  ];

  return (
    <section className="relative w-full bg-pageBg px-6 py-20 md:px-12 lg:px-24 flex items-center justify-center transition-colors duration-300">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center relative z-10">
        
        {/* Header Block Section */}
        <div className="text-center space-y-3 mb-16 max-w-2xl">
          <span className="block text-accent text-xs font-bold tracking-[0.3em] uppercase">
            Course Categories
          </span>
          <h2 className="text-textMain text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight leading-[1.15] font-serif">
            Choose Your <br />
            <span className="text-accent italic font-serif font-medium tracking-wide">Creative</span> Path
          </h2>
        </div>

        {/* Categories 3x2 Matrix Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-pageBg border border-brandBorder rounded-3xl p-8 flex flex-col items-start text-left transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon Box Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-[#fff0f0] dark:bg-[#290a0a] flex items-center justify-center text-accent mb-8 border border-accent/20 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Text Typography */}
                <div className="space-y-3 w-full">
                  <h3 className="text-textMain text-xl font-normal font-serif tracking-wide leading-snug">
                    {category.title}
                  </h3>
                  <p className="text-textMuted text-sm font-normal leading-relaxed tracking-wide">
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