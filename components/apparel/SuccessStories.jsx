'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Senior Buyer at Zara',
    quote: 'The merchandising program gave me hands-on experience with real retail projects. Today I manage buying for one of the world\'s biggest fashion brands.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop',
  },
  {
    name: 'Rahul Mehta',
    role: 'Supply Chain Manager',
    quote: 'From learning vendor coordination to managing global logistics, PIFT prepared me for every aspect of fashion supply chain management.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
  },
  {
    name: 'Anjali Patel',
    role: 'Retail Planner at H&M',
    quote: 'The industry exposure and practical training helped me land my dream role in retail planning at a leading international brand.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&auto=format&fit=crop',
  },
];

export default function SuccessStories() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted && resolvedTheme === 'dark';

  // Centralized design tokens
  const theme = {
    bgPage: isDark ? 'bg-[#050505]' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textQuote: isDark ? 'text-gray-400' : 'text-neutral-600',
    textRole: 'text-[#E5333B]',
    
    // Grid cards dynamic styling
    cardBg: isDark ? 'bg-[#140c0d]/60' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-white/[0.04]' : 'border-[#E3B2B4]',
    cardHover: isDark ? 'hover:bg-[#1c1213]/70 hover:border-white/[0.08]' : 'hover:bg-[#EBB4B6] hover:border-[#D69CA2]',
    
    // Backdrop gradients
    ambientGlow: isDark 
      ? 'bg-[radial-gradient(circle_at_center,_#24080b_0%,_#050505_70%)]' 
      : 'bg-[radial-gradient(circle_at_center,_#F0C9CB_0%,_#fbfbfb_70%)]'
  };

  return (
    <section className={`relative min-h-screen flex flex-col justify-center items-center px-6 py-20 md:py-32 transition-colors duration-300 ${theme.bgPage}`}>
      
      {/* Ambient background glow */}
      <div className={`absolute inset-0 opacity-70 pointer-events-none ${theme.ambientGlow}`} />

      <div className="relative z-10 max-w-[1200px] w-full mx-auto space-y-16 md:space-y-24">
        
        {/* Section Heading */}
        <div className="text-center space-y-1">
          <h2 className={`font-serif italic text-4xl md:text-[54px] font-medium tracking-wide leading-none ${theme.accentRed}`}>
            Success
          </h2>
          <p className={`font-serif text-5xl md:text-[64px] font-normal tracking-wide leading-none transition-colors duration-300 ${theme.textMain}`}>
            Stories
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`relative backdrop-blur-sm border rounded-[24px] p-8 md:p-10 flex flex-col items-start transition-all duration-300 group ${theme.cardBg} ${theme.cardBorder} ${theme.cardHover}`}
            >
              {/* Avatar */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-8 border border-white/10 transition-colors duration-300">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>

              {/* Identity */}
              <div className="space-y-1.5 mb-6">
                <h3 className={`font-serif text-xl font-medium tracking-wide transition-colors duration-300 ${theme.textMain}`}>
                  {item.name}
                </h3>
                <p className={`text-[13px] font-medium tracking-wide ${theme.textRole}`}>
                  {item.role}
                </p>
              </div>

              {/* Quote Text */}
              <p className={`text-[15px] leading-relaxed font-normal tracking-wide transition-colors duration-300 ${theme.textQuote}`}>
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}