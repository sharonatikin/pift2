'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Star } from 'lucide-react';
import Image from 'next/image';

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
const { resolvedTheme } = useTheme();

const [mounted, setMounted] = React.useState(false);

React.useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) {
  return null; // prevents hydration mismatch
}

const isDark = resolvedTheme === "dark";

  // Dynamic theme styling architecture mapping 1:1 against layout requirements
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textMuted: isDark ? 'text-gray-400' : 'text-neutral-600',
    textCardTitle: isDark ? 'text-neutral-100' : 'text-[#4A282A]',
    textCardDesc: isDark ? 'text-neutral-400' : 'text-neutral-600',
    
    // Testimonial specific card layout bindings
    cardBgAlt: isDark ? 'bg-[#1C2024]' : 'bg-white',
    cardBgHover: isDark ? 'hover:bg-[#22272C]' : 'hover:bg-neutral-50/60',
    cardBorder: isDark ? 'border-neutral-800/40' : 'border-neutral-200',
    imageFrame: isDark ? 'border-[#D90429]/40 bg-neutral-800' : 'border-neutral-200 bg-neutral-100',
    shadow: isDark ? 'shadow-xl' : 'shadow-sm shadow-neutral-100',
    
    // Color configurations
    accentRed: 'text-[#D90429]',
    bgAccentRed: 'bg-[#D90429]',
  };

  return (
    <div className={`w-full font-sans antialiased selection:bg-[#E11D48]/30 transition-colors duration-300 ${theme.bgPage} ${theme.textMain}`}>
      
      {/* Main Content Layout Block */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Headings Block */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-4 text-left">
          <div className="space-y-1">
            <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] block ${theme.accentRed}`}>
              Voices That Inspire
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight uppercase italic leading-none">
              Testimonials
            </h2>
          </div>
          
          <p className={`text-sm sm:text-base font-normal max-w-sm leading-relaxed pt-2 transition-colors duration-300 ${theme.textMuted}`}>
            Shaping The Career Of Budding Designer&apos;s Since 2001
          </p>
          
          <div className={`w-12 h-[2px] mt-4 ${theme.bgAccentRed}`} />
        </div>

        {/* Right Side Cards Layout Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((card) => (
            <div 
              key={card.id} 
              className={`rounded-2xl p-6 flex flex-col justify-between items-start border relative transition-all duration-300 ${theme.cardBgAlt} ${theme.cardBgHover} ${theme.cardBorder} ${theme.shadow}`}
            >
              <div className="space-y-4 w-full text-left">
                {/* Profile Avatar Header */}
                <div className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-colors duration-300 ${theme.imageFrame}`}>
                  <Image
                    src={card.avatar}
                    alt={card.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                {/* Testimonial Quote Statement */}
                <p className={`text-xs sm:text-sm font-light leading-relaxed italic tracking-normal transition-colors duration-300 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {card.quote}
                </p>
              </div>

              {/* Identity & Quality Metrics Section Footer */}
              <div className="pt-6 w-full space-y-2 text-left">
                {/* Visual Rating Array */}
                <div className={`flex items-center space-x-0.5 ${theme.accentRed}`}>
                  {[...Array(card.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Meta Description Text */}
                <div className="flex flex-col">
                  <span className={`text-sm font-bold tracking-tight ${theme.textCardTitle}`}>{card.name}</span>
                  <span className={`text-[11px] font-medium tracking-wide transition-colors duration-300 ${theme.textCardDesc}`}>{card.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </main>

    </div>
  );
}