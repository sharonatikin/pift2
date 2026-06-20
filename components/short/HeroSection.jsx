'use client';

import React from 'react';

export default function HeroSection() {
  return (
 <section className="relative min-h-[900px] w-full bg-[#0a0202] bg-gradient-to-br from-[#1c0505] via-[#0a0202] to-[#050101] px-6 py-16 md:px-12 lg:px-12 flex items-center overflow-hidden">
       {/* Radial ambient glow to mirror the soft red backdrop highlight */}
       <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[800px] bg-[#ff2a2a]/10 rounded-full blur-[120px] pointer-events-none select-none" />
 
       <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
         
         {/* Left Column: Typography & Call to Actions */}
         <div className="lg:col-span-6 space-y-6 md:space-y-12 text-left">
           <span className="block text-zinc-400 text-xs md:text-sm font-medium tracking-[0.25em] uppercase">
             Short Term Programs
           </span>
           
           <h1 className="text-white text-5xl md:text-6xl lg:text-[72px] font-normal tracking-tight leading-[2] font-serif">
             Learn <br />
             Faster. <br />
             <span className="text-[#ff2a2a] italic font-serif font-medium tracking-wide">Create</span> <br />
             Smarter.
           </h1>
           
           <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed max-w-md">
             Industry-focused short-term programs designed for students, professionals, entrepreneurs and fashion enthusiasts who want to gain specialized skills in a shorter duration.
           </p>
           
           <div className="flex flex-wrap gap-4 pt-2">
             <button className="bg-[#ff2a2a] hover:bg-[#e02222] text-white font-medium text-sm px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-[#ff2a2a]/10">
               Explore Courses
             </button>
             <button className="bg-transparent border border-zinc-800 hover:border-zinc-600 text-white font-medium text-sm px-8 py-3.5 rounded-lg transition-all duration-300">
               Download Brochure
             </button>
           </div>
         </div>
 
         {/* Right Column: High-Fidelity Layered Asymmetric Image Grid */}
         <div className="lg:col-span-6 relative w-full h-[450px] md:h-[550px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
           
           {/* Back/Top-Right Image: Creative Studio Environment */}
           <div className="absolute right-4 top-10 md:right-8 md:bottom-64  w-[240px] md:w-[320px] aspect-[7/10] rounded-2xl overflow-hidden shadow-2xl border border-white/5 transition-transform duration-500 hover:scale-[1.02] z-10">
             <img 
               src="/images/short-hero-img.png" 
               alt="Fashion Moodboard and Designers" 
               className="w-full h-full object-cover opacity-80 brightness-[0.85] contrast-[1.05]"
             />
             {/* Soft Warm Red Overlay Filter */}
             <div className="absolute inset-0 bg-[#2c0a0a]/20 mix-blend-color-burn pointer-events-none" />
           </div>
 
           {/* Front/Bottom-Left Image: Precision Technical Craft (Sewing) */}
           <div className="absolute  bottom-4 md:right-32 md:top-64 w-[240px] md:w-[320px] aspect-[7/10] rounded-2xl overflow-hidden shadow-2xl border border-white/5 transition-transform duration-500 hover:scale-[1.02] z-30">
             <img 
               src="/images/short-hero-img2.png" 
               alt="Fashion Student Crafting Apparel" 
               className="w-full h-full object-cover opacity-85 brightness-[0.8] contrast-[1.1]"
             />
             {/* Subtle Gradient to darken the frame base */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
           </div>
 
           {/* Foreground/Center Floating Image Accent: Editorial Lookbook */}
           <div className="absolute right-16 md:right-28 top-1/3 -translate-y-1/4 w-[160px] md:w-[210px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-transform duration-500 hover:scale-[1.05] z-40">
             <img 
               src="/images/short-hero-img3.png" 
               alt="Editorial Green Backdrop Fashion Model" 
               className="w-full h-full object-cover brightness-[0.9] contrast-[1.05]"
             />
             {/* Pop filter mask */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#ff2a2a]/5 via-transparent to-black/20 pointer-events-none" />
           </div>
 
         </div>
 
       </div>
     </section>
  );
}