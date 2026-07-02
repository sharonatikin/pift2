'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[900px] w-full bg-pageBg px-6 py-16 md:px-12 lg:px-12 flex items-center overflow-hidden transition-colors duration-300">
      {/* Radial ambient glow - adjusts opacity based on theme */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Typography & Call to Actions */}
        <div className="lg:col-span-6 space-y-6 md:space-y-12 text-left">
          <span className="block text-textMuted text-xs md:text-sm font-medium tracking-[0.25em] uppercase">
            Short Term Programs
          </span>
          
          <h1 className="text-textMain text-5xl md:text-6xl lg:text-[72px] font-normal tracking-tight leading-[1.1] font-serif">
            Learn <br />
            Faster. <br />
            <span className="text-accent italic font-serif font-medium tracking-wide">Create</span> <br />
            Smarter.
          </h1>
          
          <p className="text-textSubtle text-sm md:text-base font-normal leading-relaxed max-w-md">
            Industry-focused short-term programs designed for students, professionals, entrepreneurs and fashion enthusiasts who want to gain specialized skills in a shorter duration.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-accent hover:bg-accentHover text-white font-medium text-sm px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-accent/20">
              Explore Courses
            </button>
            <button className="bg-transparent border border-brandBorder hover:border-textMuted text-textMain font-medium text-sm px-8 py-3.5 rounded-lg transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Right Column: Image Grid */}
        <div className="lg:col-span-6 relative w-full h-[450px] md:h-[550px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          
          {/* Images with theme-aware borders */}
          <div className="absolute right-4 top-10 md:right-8 md:bottom-64 w-[240px] md:w-[320px] aspect-[7/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 dark:border-white/5 transition-transform duration-500 hover:scale-[1.02] z-10">
            <Image 
              src="/images/short-hero-img.png" 
              alt="Fashion Moodboard" 
              fill
              sizes="320px"
              priority
              className="object-cover brightness-[0.85]"
            />
          </div>

          <div className="absolute bottom-4 md:right-32 md:top-64 w-[240px] md:w-[320px] aspect-[7/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 dark:border-white/5 transition-transform duration-500 hover:scale-[1.02] z-30">
            <Image 
              src="/images/short-hero-img2.png" 
              alt="Fashion Student" 
              fill
              sizes="320px"
              priority
              className="object-cover brightness-[0.85]"
            />
          </div>

          <div className="absolute right-16 md:right-28 top-1/3 -translate-y-1/4 w-[160px] md:w-[210px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 dark:border-white/5 transition-transform duration-500 hover:scale-[1.05] z-40">
            <Image 
              src="/images/short-hero-img3.png" 
              alt="Fashion Model" 
              fill
              sizes="210px"
              priority
              className="object-cover brightness-[0.95]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}