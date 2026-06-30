'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { 
  Palette, 
  Ruler, 
  Eye, 
  PaintBucket, 
  Layers, 
  Monitor, 
  Briefcase 
} from 'lucide-react';

const portfolioItems = [
  { title: 'Concept Boards', icon: Palette },
  { title: 'Floor Plans', icon: Ruler },
  { title: '3D Renders', icon: Eye },
  { title: 'Material Boards', icon: PaintBucket },
  { title: 'Technical Drawings', icon: Layers },
  { title: 'Presentation Decks', icon: Monitor },
  { title: 'Professional Projects', icon: Briefcase },
];

export default function InteriorPortfolioPillars() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone theme styling tokens matching Section (43).png
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    
    // Custom matching hues for the cohesive clay/pink card style
    cardBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    cardText: isDark ? 'text-[#F5D6D8]' : 'text-[#4A282A]',
    
    // Hover and shadow presets
    cardHoverBg: isDark ? 'hover:bg-[#F0C9CB]/25' : 'hover:bg-[#EBB4B6]',
    cardHoverBorder: isDark ? 'hover:border-[#F0C9CB]/40' : 'hover:border-[#D69CA2]',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20',
    
    // Persistent crimson styling details matching the mock design specs
    iconColor: 'text-[#C5162E]'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight font-sans">
            Build A Portfolio That Opens Doors
          </h2>
        </div>
        
        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {portfolioItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className={`border rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[160px] gap-y-4 transition-all duration-300 cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardText} ${theme.cardHoverBg} ${theme.cardHoverBorder} ${theme.shadow} group`}
              >
                {/* Dynamic Vector Icon Block */}
                <div className={`${theme.iconColor} flex items-center justify-center`}>
                  <IconComponent 
                    className="w-8 h-8 md:w-9 md:h-9 stroke-[1.5] transition-transform duration-300 group-hover:scale-105"
                    aria-hidden="true"
                  />
                </div>
                
                {/* Pillar Title */}
                <h3 className="text-sm sm:text-base font-medium tracking-wide font-sans">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}