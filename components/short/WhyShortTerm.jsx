'use client';

import React from 'react';
import Image from 'next/image';
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
    { icon: BookOpen, text: 'Practical Learning' },
    { icon: Briefcase, text: 'Industry Exposure' },
    { icon: Users, text: 'Expert Mentorship' },
    { icon: Target, text: 'Portfolio Development' },
    { icon: ShieldCheck, text: 'Career Readiness' },
    { icon: Award, text: 'Certification' },
  ];

  return (
    <section className="w-full bg-pageBg text-textMain px-6 py-16 md:px-12 lg:px-24 flex items-center justify-center min-h-[650px] transition-colors duration-300">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Image */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[440px] aspect-[7/10] rounded-2xl overflow-hidden shadow-xl border border-brandBorder">
            <Image 
              src="/images/short-sec3.png" 
              alt="Creative fashion student in design studio environment" 
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column: Typography & Badges */}
        <div className="lg:col-span-6 space-y-8 flex flex-col justify-center">
          
          <div className="space-y-1">
            <h2 className="text-textMain text-4xl md:text-5xl lg:text-[56px] font-normal font-serif tracking-tight leading-[1.15]">
              Big Skills. <br />
              <span className="text-accent italic font-medium tracking-wide">Shorter</span> <br />
              Duration.
            </h2>
          </div>

          {/* Benefits 2-Column Clean Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-pageBg border border-brandBorder rounded-2xl p-4 pl-5 flex items-center gap-4 transition-all duration-300 hover:shadow-md"
                >
                  {/* Minimalist Red Icon Badge */}
                  <div className="w-10 h-10 rounded-xl bg-[#fff0f0] dark:bg-[#290a0a] flex items-center justify-center text-accent shrink-0 border border-accent/20">
                    <IconComponent className="w-[18px] h-[18px] stroke-[1.5]" />
                  </div>
                  
                  <span className="text-textMain text-sm font-sans font-medium tracking-wide">
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