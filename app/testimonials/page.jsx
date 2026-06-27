'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronDown, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Kanika Jain',
    role: 'Fashion Designer',
    quote: '"PIFT gave me confidence and exposure to chase my dreams in fashion."',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    stars: 5,
  },
  {
    id: 2,
    name: 'Sonia Gandhi',
    role: 'Fashion Entrepreneur',
    quote: '"The workshop and industry interactions at PIFT helped me understand the real world of fashion."',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    stars: 5,
  },
  {
    id: 3,
    name: 'Saloni',
    role: 'Stylist',
    quote: '"Great faculty, amazing infrastructure and a creative environment that nurtures talent at every step."',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <div className="w-full bg-black text-white font-sans antialiased selection:bg-[#E11D48]/30">
      

      {/* Main Content Layout Block */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Headings Block */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
          <div className="space-y-1">
            <span className="text-[#D90429] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] block">
              Voices That Inspire
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-white uppercase italic leading-none">
              Testimonials
            </h2>
          </div>
          
          <p className="text-neutral-400 text-sm sm:text-base font-normal max-w-sm leading-relaxed pt-2">
            Shaping The Career Of Budding Designer&apos;s Since 2001
          </p>
          
          <div className="w-12 h-[2px] bg-[#D90429] mt-4" />
        </div>

        {/* Right Side Cards Layout Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((card) => (
            <div 
              key={card.id} 
              className="bg-[#1C2024] rounded-2xl p-6 flex flex-col justify-between items-start border border-neutral-800/40 relative shadow-xl hover:bg-[#22272C] transition-colors duration-200"
            >
              <div className="space-y-4 w-full">
                {/* Profile Avatar Header */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#D90429]/40 bg-neutral-800">
                  <Image
                    src={card.avatar}
                    alt={card.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                {/* Testimonial Quote Statement */}
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed italic tracking-normal">
                  {card.quote}
                </p>
              </div>

              {/* Identity & Quality Metrics Section Footer */}
              <div className="pt-6 w-full space-y-2">
                {/* Visual Rating Array */}
                <div className="flex items-center space-x-0.5 text-[#D90429]">
                  {[...Array(card.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Meta Description Text */}
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white tracking-tight">{card.name}</span>
                  <span className="text-[11px] font-medium text-neutral-400 tracking-wide">{card.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </main>

    </div>
  );
}