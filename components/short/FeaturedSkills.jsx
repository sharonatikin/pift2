'use client';

import React from 'react';
import { 
  PenTool, 
  Ruler, 
  Layers, 
  Sparkles, 
  Image, 
  Zap, 
  ShoppingBag, 
  FolderOpen 
} from 'lucide-react';

export default function FeaturedSkills() {
  const skills = [
    {
      icon: PenTool,
      title: 'Fashion Sketching',
    },
    {
      icon: Ruler,
      title: 'Pattern Development',
    },
    {
      icon: Layers,
      title: 'Fabric Knowledge',
    },
    {
      icon: Sparkles,
      title: 'Fashion Styling',
    },
    {
      icon: Image,
      title: 'Adobe Illustrator',
    },
    {
      icon: Zap,
      title: 'Adobe Photoshop',
    },
    {
      icon: ShoppingBag,
      title: 'Brand Building',
    },
    {
      icon: FolderOpen,
      title: 'Portfolio Creation',
    },
  ];

  return (
    <section className="w-full bg-[#000000] text-white px-6 py-20 md:px-12 lg:px-24 flex items-center justify-center min-h-[750px]">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        
        {/* Section Heading with Mixed Serif Typography */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif tracking-tight leading-[1.2]">
            Skills You'll <br />
            <span className="text-[#ff2a2a] italic font-serif font-medium tracking-wide block mt-1">Develop</span>
          </h2>
        </div>

        {/* Balanced 4-Column Grid Grid Array */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-5xl">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="group bg-[#111111] border border-zinc-900/50 rounded-2xl p-6 pt-9 pb-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#151515] hover:border-zinc-800 shadow-xl"
              >
                {/* Red Circular/Squircle Accent Container Frame for Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#1e0808] border border-[#ff2a2a]/10 flex items-center justify-center text-[#ff2a2a] mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#280a0a]">
                  <IconComponent className="w-5 h-5 stroke-[1.75]" />
                </div>

                {/* Skill Item Title Typography */}
                <h3 className="text-zinc-300 text-sm md:text-[15px] font-medium tracking-wide leading-snug font-sans max-w-[140px] group-hover:text-white transition-colors duration-200">
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