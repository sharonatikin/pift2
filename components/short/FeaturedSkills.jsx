'use client';

import React from 'react';
import { 
  PenTool, 
  Ruler, 
  Layers, 
  Sparkles, 
  Image as ImageIcon, 
  Zap, 
  ShoppingBag, 
  FolderOpen 
} from 'lucide-react';

export default function FeaturedSkills() {
  const skills = [
    { icon: PenTool, title: 'Fashion Sketching' },
    { icon: Ruler, title: 'Pattern Development' },
    { icon: Layers, title: 'Fabric Knowledge' },
    { icon: Sparkles, title: 'Fashion Styling' },
    { icon: ImageIcon, title: 'Adobe Illustrator' },
    { icon: Zap, title: 'Adobe Photoshop' },
    { icon: ShoppingBag, title: 'Brand Building' },
    { icon: FolderOpen, title: 'Portfolio Creation' },
  ];

  return (
    <section className="w-full bg-pageBg text-textMain px-6 py-20 md:px-12 lg:px-24 flex items-center justify-center transition-colors duration-300">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-textMain text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif tracking-tight leading-[1.2]">
            Skills You&apos;ll <br />
            <span className="text-accent italic font-serif font-medium tracking-wide block mt-1">Develop</span>
          </h2>
        </div>

        {/* Grid Array */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="group bg-pageBg border border-brandBorder rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg"
              >
                {/* Accent Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-[#fff0f0] dark:bg-[#290a0a] flex items-center justify-center text-accent mb-6 border border-accent/20 transition-transform duration-300 group-hover:scale-105">
                  <IconComponent className="w-7 h-7 stroke-[1.5]" />
                </div>

                {/* Skill Title */}
                <h3 className="text-textMain text-sm md:text-[15px] font-medium tracking-wide leading-snug font-sans max-w-[140px]">
                  {skill.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}