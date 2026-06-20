'use client';

import React from 'react';
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
  return (
    <section className="relative min-h-screen bg-[#050505] text-white flex flex-col justify-center items-center px-6 py-20 md:py-32 selection:bg-[#E5333B]/20 overflow-hidden">
      {/* Ambient background glow to match the exact vignetted/gradient feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#24080b_0%,_#050505_70%)] opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] w-full mx-auto space-y-16 md:space-y-24">
        {/* Section Heading */}
        <div className="text-center space-y-1">
          <h2 className="font-serif italic text-[#E5333B] text-4xl md:text-[54px] font-medium tracking-wide leading-none">
            Success
          </h2>
          <p className="font-serif text-white text-5xl md:text-[64px] font-normal tracking-wide leading-none">
            Stories
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#140c0d]/60 backdrop-blur-sm border border-white/[0.04] rounded-[24px] p-8 md:p-10 flex flex-col items-start transition-all duration-300 hover:border-white/[0.08] hover:bg-[#1c1213]/70 group"
            >
              {/* Avatar Circle Container */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-8 border border-white/10 group-hover:border-[#E5333B]/40 transition-colors duration-300">
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
                <h3 className="font-serif text-xl font-medium tracking-wide text-white">
                  {item.name}
                </h3>
                <p className="text-[#E5333B] text-[13px] font-medium tracking-wide">
                  {item.role}
                </p>
              </div>

              {/* Quote Text */}
              <p className="text-gray-400 text-[15px] leading-relaxed font-normal tracking-wide">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}