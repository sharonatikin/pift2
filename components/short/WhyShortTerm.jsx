'use client';

import React from 'react';
import { 
  BookOpen, 
  Briefcase, 
  Users, 
  Target, 
  ShieldCheck, 
  Award 
} from 'lucide-react';

export default function WhyShortTerm() {
  const benefits = [
    {
      icon: BookOpen,
      text: 'Practical Learning',
    },
    {
      icon: Briefcase,
      text: 'Industry Exposure',
    },
    {
      icon: Users,
      text: 'Expert Mentorship',
    },
    {
      icon: Target,
      text: 'Portfolio Development',
    },
    {
      icon: ShieldCheck,
      text: 'Career Readiness',
    },
    {
      icon: Award,
      text: 'Certification',
    },
  ];

  return (
    <section className="w-full bg-[#050101] text-white px-6 py-16 md:px-12 lg:px-24 flex items-center justify-center min-h-[650px]">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Contextual Unsplash Image Showcase */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[440px] aspect-[7/10] rounded-2xl overflow-hidden shadow-2xl border border-zinc-900/40 group">
            <img 
              src="/images/short-sec3.png" 
              alt="Creative fashion student in design studio environment" 
              className="w-full h-full object-cover brightness-[0.72] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
            />
            {/* Ambient vignette shading matrix layers to mirror image profile tone */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute inset-0 bg-[#1a0505]/10 mix-blend-color-burn pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Typography Header & Minimalist Info Badges */}
        <div className="lg:col-span-6 space-y-8 flex flex-col justify-center">
          
          {/* Main Title Block */}
          <div className="space-y-1">
            <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-normal font-serif tracking-tight leading-[1.15]">
              Big Skills. <br />
              <span className="text-[#ff2a2a] italic font-medium tracking-wide">Shorter</span> <br />
              Duration.
            </h2>
          </div>

          {/* Benefits 2-Column Clean Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-[#110707]/60 border border-zinc-900/80 rounded-xl p-4 pl-5 flex items-center gap-6 transition-all duration-300 hover:bg-[#160a0a]/80 hover:border-zinc-800/80 group"
                >
                  {/* Square Minimalist Red Badge Box Icon Frame */}
                  <div className="w-10 h-10 rounded-lg bg-[#240a0a] border border-[#ff2a2a]/10 flex items-center justify-center text-[#ff2a2a] shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <IconComponent className="w-[18px] h-[18px] stroke-[1.75]" />
                  </div>
                  
                  {/* Label Text Utility Block */}
                  <span className="text-zinc-300 text-sm font-sans font-medium tracking-wide group-hover:text-zinc-100 transition-colors duration-200">
                    {benefit.text}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}