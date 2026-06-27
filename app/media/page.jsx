'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';

// Mock data reflecting the original UI content
const mediaCards = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    title: 'PIFT Annual Convocation 2024',
    date: '12 May, 2024',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
    title: 'PIFT Fashion Show Featured in TOI',
    date: '29 April, 2024',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80',
    title: 'Students Shine in National Competition',
    date: '05 March, 2024',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80',
    title: 'Workshop on Trends & Forecasting',
    date: '28 Jan, 2024',
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    title: 'Industry Experts Visit PIFT',
    date: '15 Jan, 2024',
  },
];

export default function MediaCoverageSection() {
  return (
    <div className="w-full bg-[#F5C5C9] font-sans antialiased text-[#1A1A1A]">
      {/* Navigation Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center font-bold text-xs tracking-tighter border border-black/10">
            PIFT
          </div>
          <div className="border-l border-neutral-400 pl-3 h-10 flex items-center">
            <span className="text-xl font-extrabold tracking-wider text-[#A81C2B]">25</span>
          </div>
        </div>

        {/* Navigation Links & CTA */}
        <div className="flex items-center space-x-8">

        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Action Column */}
        <div className="lg:col-span-3 flex flex-col justify-center pt-8 lg:pt-16">
          <span className="text-[#E11D48] text-xs font-bold uppercase tracking-widest mb-4 block">
            Media Coverage
          </span>
          <div className="w-12 h-[2px] bg-[#E11D48] mb-12"></div>
          
          <button className="bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm flex items-center justify-between w-full sm:w-64 lg:w-full transition-all group shadow-md">
            <span>Browse All Coverage</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Cards Carousel / Grid Grid */}
        <div className="lg:col-span-9 w-full overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex space-x-4 pb-4 lg:pb-0 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5 lg:space-x-0 lg:gap-3">
            {mediaCards.map((card) => (
              <div 
                key={card.id} 
                className="w-[220px] sm:w-[240px] lg:w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                {/* Image Wrap */}
                <div className="relative h-44 w-full bg-neutral-100 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 240px, 200px"
                    className="object-cover"
                  />
                </div>
                
                {/* Text Content */}
                <div className="p-4 flex-1 flex flex-col justify-between items-center text-center">
                  <h3 className="text-xs font-bold text-black tracking-tight leading-snug uppercase mb-3 line-clamp-3">
                    {card.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-[#E11D48] whitespace-nowrap">
                    {card.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Persistent custom scrollbar suppression utility for horizontal overflow layout */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}