'use client';

import React from 'react';
import Image from 'next/image';
import { GraduationCap, Wand2, BriefcaseBusiness, FolderKanban } from 'lucide-react';

const programHighlights = [
  {
    icon: GraduationCap,
    label: '3 Years Program',
  },
  {
    icon: Wand2,
    label: '100% Practical Learning',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Industry Projects',
  },
  {
    icon: FolderKanban,
    label: 'Professional Portfolio',
  },
];

export default function InteriorDesignLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans antialiased">
      <div className="relative isolate overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/interior-bg.png"
            alt="Luxurious hotel lobby interior with modern lighting and marble finishes"
            fill
            className="object-cover object-center brightness-[0.25] saturate-[0.8]"
            priority
          />
          {/* Fallback/Gradient Overlay for extra depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80" />
        </div>

        {/* Content Container */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 md:py-40 lg:px-8">
          <div className="flex flex-col gap-y-16">
            
            {/* Hero Text Section */}
            <header className="max-w-2xl lg:max-w-3xl">
              <p className="text-sm font-medium tracking-widest text-neutral-300 uppercase mb-5">
                INTERIOR DESIGN PROGRAM
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.1] md:leading-[1.15]">
                <span className="font-serif">Design Spaces.</span><br />
                <span className="font-serif">Shape <span className="text-[#FF0000] italic font-serif">Experiences</span>.</span>
              </h1>
              <p className="mt-8 text-base md:text-lg text-neutral-200 leading-relaxed max-w-2xl font-light">
                Learn space planning, interior styling, furniture design, materials,
                lighting concepts, CAD visualization and professional design
                execution through a studio-based learning environment.
              </p>
            </header>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-x-4 gap-y-4 md:gap-x-6 items-center">
              <button className="flex items-center justify-center rounded-none bg-[#FF0000] px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-[#D90000] transition-colors duration-200 min-w-[160px]">
                Apply Now
              </button>
              <button className="flex items-center justify-center rounded-none bg-black/30 px-8 py-3.5 text-base font-medium text-white border border-neutral-700 backdrop-blur-sm hover:bg-neutral-800/60 transition-colors duration-200 min-w-[210px]">
                Download Brochure
              </button>
              <button className="flex items-center justify-center rounded-none bg-black/30 px-8 py-3.5 text-base font-medium text-white border border-neutral-700 backdrop-blur-sm hover:bg-neutral-800/60 transition-colors duration-200 min-w-[210px]">
                Book Career Counseling
              </button>
            </div>

            {/* Program Highlight Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl">
              {programHighlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="bg-[#111111]/90 p-8 flex flex-col items-start gap-y-6 border border-neutral-800 backdrop-blur-sm"
                >
                  <highlight.icon className="w-8 h-8 md:w-10 md:h-10 text-[#FF0000] stroke-[1.2]" />
                  <p className="text-base md:text-lg font-normal text-white leading-snug">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
        
        {/* Subtle Bottom Glow/Transition to black page */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent -z-1" />
      </div>

    </main>
  );
}