'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const images = [
  'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1605722243979-fe0be8158232?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1576016770956-debb63d900ef?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=80'
];

export default function TextileCollectionsList() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone theme styling tokens
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    cardContainerBg: isDark ? 'bg-zinc-950' : 'bg-neutral-100',
    cardRing: isDark ? 'border-zinc-900' : 'border-neutral-200/80',
    shadow: isDark ? 'shadow-2xl shadow-neutral-950/60' : 'shadow-lg shadow-neutral-200/40',
    imageFilter: isDark 
      ? 'grayscale group-hover:grayscale-0 brightness-[0.85]' 
      : 'brightness-[0.98] group-hover:brightness-100'
  };

  return (
    <section className={`${theme.bgPage} ${theme.textMain} py-16 sm:py-24 relative z-20 transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium font-sans">
            Student Textile Collections
          </h2>
        </div>
        
        {/* Vertical Stack Layout */}
        <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
          {images.map((url, idx) => (
            <div 
              key={idx} 
              className={`relative aspect-[3.5/1] w-full overflow-hidden rounded-2xl border transition-all duration-300 group ${theme.cardContainerBg} ${theme.cardRing} ${theme.shadow}`}
            >
              <Image 
                src={url} 
                alt="Student Collection Showcase Slide" 
                fill 
                className={`object-cover transition-all duration-700 ease-out group-hover:scale-[1.015] ${theme.imageFilter}`}
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}