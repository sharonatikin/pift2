'use client';

import React from 'react';

export default function CertificationSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#050101] bg-gradient-to-b from-[#0a0202] via-[#050101] to-[#0d0404] px-6 py-24 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Soft atmospheric deep dark red radial background glow centered behind the typography */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff2a2a]/10 rounded-full blur-[140px] pointer-events-none select-none z-0" />

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center relative z-10 text-center">
        
        {/* Header Block Section with Editorial Serif Typography */}
        <div className="space-y-4 mb-6">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif tracking-tight leading-[1.2]">
            Learn. <br />
            <span className="text-[#ff2a2a] italic font-serif font-medium tracking-wide block my-1">Create.</span>
            Get Certified.
          </h2>
        </div>

        {/* Informative Subtitle Text Paragraph */}
        <p className="text-zinc-400 text-xs sm:text-[13px] font-normal font-sans leading-relaxed tracking-wide max-w-lg mx-auto mb-16">
          Successfully completing a short-term program provides practical industry knowledge, portfolio-building opportunities and certification that supports professional growth.
        </p>

        {/* High-Fidelity Certification Badge Frame Showcase */}
        <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-zinc-900/60 group">
          
          {/* Elegant Contextual Unsplash Placeholder Image (Muted Premium Texture / Envelope Seal Background) */}
          <img 
            src="/images/short-cert-sec.png" 
            alt="Professional minimalist certificate envelope and stamp texture" 
            className="w-full h-full object-cover brightness-[0.35] contrast-[1.05] sepia-[0.1] transition-transform duration-700 group-hover:scale-102"
          />
          
          {/* Luxury Warm Studio Lighting Shadows Mask Overlay */}
          <div className="absolute inset-0 bg-[#2b0c0c]/15 mix-blend-color-burn pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" />
          
          {/* Centered Certificate Badge Minimal Meta Details */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 space-y-2">
            
            <span className="text-zinc-500 text-[10px] font-medium font-sans tracking-[0.3em] uppercase">
              PIFT CERTIFICATION
            </span>
            
            <h3 className="text-white text-xl sm:text-2xl font-normal font-serif tracking-wide italic">
              Professional Certificate
            </h3>
            
            <span className="text-zinc-400 text-xs font-normal font-sans tracking-wide">
              In Fashion Design
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}