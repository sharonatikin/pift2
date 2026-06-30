'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const bottomTags = ['3 Years Program', 'Industry Projects', 'CAD Training', 'Portfolio Development'];

export default function TextileHero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone design tokens matching Section (45).jpg
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textDesc: isDark ? 'text-neutral-300' : 'text-neutral-700',
    textTag: isDark ? 'text-[#F5D6D8]' : 'text-[#4A282A]',
    
    // Custom light red/clay box styling for tags and secondary buttons
    boxBg: isDark ? 'bg-[#F0C9CB]/15' : 'bg-[#F0C9CB]',
    boxBorder: isDark ? 'border-[#F0C9CB]/25' : 'border-[#E3B2B4]',
    boxHoverBg: isDark ? 'hover:bg-[#F0C9CB]/25' : 'hover:bg-[#EBB4B6]',
    boxHoverBorder: isDark ? 'hover:border-[#F0C9CB]/40' : 'hover:border-[#D69CA2]',
    
    // Core Action Elements
    btnPrimaryBg: isDark ? 'bg-[#C5162E] hover:bg-[#a31225]' : 'bg-[#C5162E] hover:bg-[#a31225]',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20',
    imageFilter: isDark ? 'grayscale brightness-90' : 'brightness-100',
    
    // Exact red text highlights
    accentText: 'text-[#C5162E]'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-20 px-6 sm:py-28 md:py-36 lg:px-16 flex flex-col items-center justify-center transition-colors duration-300`}>
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-y-12">
        
        {/* Main Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Side */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div>
              <span className={`text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase inline-block px-4 py-2 rounded-full border transition-all duration-300 ${theme.boxBg} ${theme.boxBorder} ${theme.textTag}`}>
                Textile Design Program
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight leading-[1.12]">
              Weave Ideas. <br />
              Create <span className={`${theme.accentText}`}>Materials.</span>
            </h1>
            
            <p className={`${theme.textDesc} text-sm sm:text-base leading-relaxed font-light transition-colors duration-300`}>
              Explore fabric innovation, weaving, printing, embroidery, textile development, 
              surface ornamentation and digital textile technologies through a practical studio-based learning experience. 
              Textile design combines artistic creativity with technical expertise to create fabrics for fashion, interiors and lifestyle industries.
            </p>
            
            {/* CTA Interaction Block */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <a 
                href="#apply" 
                className={`w-full sm:w-auto text-white text-xs sm:text-sm font-bold tracking-widest px-8 py-4 rounded-xl text-center uppercase transition-all duration-200 ${theme.btnPrimaryBg}`}
              >
                Apply Now
              </a>
              <a 
                href="#brochure" 
                className={`w-full sm:w-auto border rounded-xl text-xs sm:text-sm font-medium tracking-widest px-7 py-4 text-center uppercase transition-all duration-200 ${theme.boxBg} ${theme.boxBorder} ${theme.textTag} ${theme.boxHoverBg} ${theme.boxHoverBorder} ${theme.shadow}`}
              >
                Download Brochure
              </a>
              <a 
                href="#visit" 
                className={`w-full sm:w-auto border rounded-xl text-xs sm:text-sm font-medium tracking-widest px-8 py-4 text-center uppercase transition-all duration-200 ${theme.boxBg} ${theme.boxBorder} ${theme.textTag} ${theme.boxHoverBg} ${theme.boxHoverBorder} ${theme.shadow}`}
              >
                Book Counseling
              </a>
            </div>
          </div>
          
          {/* Right Product Image Side */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className={`relative w-full max-w-[460px] aspect-square rounded-2xl overflow-hidden ${theme.shadow} transition-shadow duration-300`}>
              <Image 
                src="/images/textile-heroimg.png" 
                alt="Crimson Brocade Pattern Asset" 
                fill 
                className={`object-cover object-center ${theme.imageFilter}`}
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

        </div>

        {/* Bottom Metadata Tags Bar */}
        <div className="w-full pt-4">
          <div className="flex flex-wrap gap-3 justify-start">
            {bottomTags.map((tag, idx) => (
              <div 
                key={idx} 
                className={`border rounded-xl px-5 py-2.5 transition-all duration-300 cursor-default ${theme.boxBg} ${theme.boxBorder} ${theme.textTag} ${theme.boxHoverBg} ${theme.boxHoverBorder} ${theme.shadow}`}
              >
                <span className="text-xs font-medium tracking-wide font-sans">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}