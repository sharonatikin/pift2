'use client';

import React from 'react';
import Image from 'next/image';

export default function CertificationSection() {
  return (
    <section className="w-full bg-pageBg px-6 py-24 md:px-12 flex flex-col items-center justify-center transition-colors duration-300">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Header Block Section */}
        <div className="space-y-4 mb-6">
          <h2 className="text-textMain text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif tracking-tight leading-[1.2]">
            Learn. <br />
            <span className="text-accent italic font-serif font-medium tracking-wide block my-1">Create.</span>
            Get Certified.
          </h2>
        </div>

        {/* Informative Subtitle */}
        <p className="text-textMuted text-xs sm:text-[13px] font-normal font-sans leading-relaxed tracking-wide max-w-lg mx-auto mb-16">
          Successfully completing a short-term program provides practical industry knowledge, portfolio-building opportunities and certification that supports professional growth.
        </p>

        {/* Certification Badge Showcase */}
        <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-3xl overflow-hidden border border-brandBorder shadow-lg">
          <Image 
            src="/images/short-cert-sec.png" 
            alt="Professional certificate" 
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 space-y-2 bg-black/40">
            <span className="text-white/70 text-[10px] font-medium font-sans tracking-[0.3em] uppercase">
              PIFT CERTIFICATION
            </span>
            <h3 className="text-white text-xl sm:text-2xl font-normal font-serif tracking-wide italic">
              Professional Certificate
            </h3>
            <span className="text-white/90 text-xs font-normal font-sans tracking-wide">
              In Fashion Design
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}