'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Download, BookOpenText } from 'lucide-react';

// Using arbitrary values for precise color matching based on the image
const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#E5333B]/20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2a0a0d_0%,_#050505_100%)] opacity-80" />

    

      {/* Main Content */}
      <main className="relative z-10 max-w-[1700px] mx-auto px-6 py-16 md:px-12 md:py-24 grid lg:grid-cols-2 items-center gap-16 lg:gap-20">
        
        {/* Left Column - Text Content */}
        <div className="space-y-10 lg:pr-10">
          <div className="space-y-2">
            <span className="text-[13px] font-semibold text-gray-400 uppercase tracking-widest block">
              Specialized Program
            </span>
            {/* Using arbitrary font size and custom font (will use default serif for demo) */}
            <h1 className="font-serif text-[72px] md:text-[88px] font-medium leading-[1.05] tracking-tight">
              <span className="text-white">Apparel</span>
              <br />
              <span className="text-[#E5333B]">Merchandising</span>
            </h1>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Develop expertise in sourcing, product planning, supply chain management, buying, retail operations, production coordination, vendor management and global fashion merchandising. Learn how products move from concept to consumer in today's fashion industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-2">
            <button className="flex-1 sm:flex-initial bg-[#E5333B] hover:bg-[#c92a31] text-white font-semibold rounded-full px-12 py-5 text-lg flex items-center justify-center gap-3 transition-colors">
                <BookOpenText className="w-6 h-6" />
                Apply For Admission
            </button>
            <button className="flex-1 sm:flex-initial border border-gray-600 hover:border-gray-500 text-white font-medium rounded-full px-12 py-5 text-lg flex items-center justify-center gap-3 transition-colors">
                <Download className="w-5 h-5 text-gray-300" />
                Download Prospectus
            </button>
          </div>
        </div>

        {/* Right Column - Image & Tags */}
        <div className="relative group">
          <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden border-2 border-white/5 shadow-2xl">
            <Image
              src="/images/apparel-hero.png"
              alt="Visual Merchandising display in a fashion retail store"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 850px"
              priority
            />
            {/* Subtle Overlay to match the overall tone */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
          </div>

          {/* Tag Grid Overlay */}
          <div className="absolute left-6 bottom-6 right-6 grid grid-cols-2 gap-4">
            {[
              { label: 'Global Sourcing', url: '#' },
              { label: 'Fashion Buying', url: '#' },
              { label: 'Retail Planning', url: '#' },
              { label: 'Supply Chain', url: '#' },
            ].map((tag, index) => (
              <a
                key={index}
                href={tag.url}
                className="bg-black/40 backdrop-blur-md border border-white/5 rounded-[12px] px-8 py-5 text-[15px] font-medium text-gray-200 text-center flex items-center justify-center hover:bg-black/60 hover:border-white/10 hover:text-white transition-all duration-300 group-hover:translate-y-[-5px]"
              >
                {tag.label}
              </a>
            ))}
          </div>
        </div>

      </main>

      {/* Footer / Decorative Line */}
      <div className="h-20" />
    </div>
  );
};

export default App;