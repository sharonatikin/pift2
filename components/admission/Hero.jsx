'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ChevronDown, 
  Presentation, 
  GraduationCap, 
  BookOpenCheck, 
  Briefcase,
  Trophy,
  Star,
  Download
} from 'lucide-react';

export default function AdmissionHero() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#290205] via-[#190103] to-[#0a0001] text-white font-sans antialiased relative overflow-hidden flex flex-col justify-between">
      

      {/* 2. Main Hero Split Grid Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Informational Content Layout */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          
          <div className="space-y-3">
            <span className="text-[#F26419] text-xs sm:text-sm font-bold uppercase tracking-[0.3em] block">
              Admission Open 2026
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[54px] font-serif font-normal text-white tracking-tight leading-[1.15]">
              Shape Your Future with <br />
              <span className="text-[#D90429] italic font-normal tracking-wide pt-1 inline-block">
                Creative Education
              </span>
            </h1>
          </div>

          <p className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
            Develop practical skills, gain confidence, and prepare for exciting career opportunities through hands-on learning and expert guidance.
          </p>

          {/* Feature Badges Lineup */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-2xl">
            <div className="flex flex-col items-start space-y-2">
              <Presentation className="w-5 h-5 text-[#F26419]" />
              <span className="text-[10px] font-bold tracking-wider text-neutral-300 uppercase leading-tight">
                Practical Training
              </span>
            </div>

            <div className="flex flex-col items-start space-y-2">
              <GraduationCap className="w-5 h-5 text-[#F26419]" />
              <span className="text-[10px] font-bold tracking-wider text-neutral-300 uppercase leading-tight">
                Experienced Faculty
              </span>
            </div>

            <div className="flex flex-col items-start space-y-2">
              <BookOpenCheck className="w-5 h-5 text-[#F26419]" />
              <span className="text-[10px] font-bold tracking-wider text-neutral-300 uppercase leading-tight">
                Industry-Relevant Curriculum
              </span>
            </div>

            <div className="flex flex-col items-start space-y-2">
              <Briefcase className="w-5 h-5 text-[#F26419]" />
              <span className="text-[10px] font-bold tracking-wider text-neutral-300 uppercase leading-tight">
                Career Support
              </span>
            </div>
          </div>

          {/* CTA Interactive Form Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 items-stretch sm:items-center">
            <button className="bg-[#D90429] hover:bg-[#b0021e] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-lg shadow-[#D90429]/20 transition-all active:scale-[0.98] text-center">
              Apply For Admission
            </button>
            <button className="border border-neutral-700 hover:border-neutral-400 text-white hover:bg-white/5 text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center flex items-center justify-center gap-2">
              <Download className="w-4 h-4 text-neutral-400" />
              <span>Download Brochure</span>
            </button>
          </div>

        </div>

        {/* Right Feature Showcase Graphic with Segment Mask */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          
          {/* Abstract background design element replicating geometric glow shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] bg-[#6A0DAD]/30 rounded-full blur-3xl opacity-40 pointer-events-none -z-10" />
          
          {/* Custom asymmetrical capsule mask design */}
          <div className="w-[310px] h-[430px] sm:w-[380px] sm:h-[490px] rounded-t-[190px] rounded-b-[190px] overflow-hidden relative shadow-2xl bg-[#1E0104] border border-white/10 flex items-center justify-center">
            
            {/* Embedded illustrative content */}
            <div className="relative w-full h-full">
              {/* Colored layout vector abstraction background inside mask frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5a189a] via-transparent to-transparent opacity-60 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Creative Design Professional Showcase"
                fill
                sizes="(max-width: 1024px) 310px, 380px"
                className="object-cover object-center z-0 scale-105"
                priority
              />
            </div>
          </div>
        </div>

      </main>

      {/* 3. Bottom Horizontal Stats Grid Strip */}
      <section className="w-full bg-[#1F0205] border-t border-white/5 py-8 mt-auto z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:divide-x divide-neutral-800 text-center lg:text-left">
            
            {/* Stat Box 1 */}
            <div className="flex items-center justify-center space-x-4 px-4">
              <div className="text-[#F26419]">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">1000+</span>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider pt-1">Students Trained</span>
              </div>
            </div>

            {/* Stat Box 2 */}
            <div className="flex items-center justify-center space-x-4 px-4">
              <div className="text-[#F26419]">
                <BookOpenCheck className="w-8 h-8" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">20+</span>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider pt-1">Courses Offered</span>
              </div>
            </div>

            {/* Stat Box 3 */}
            <div className="flex items-center justify-center space-x-4 px-4">
              <div className="text-[#F26419]">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">10+</span>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider pt-1">Years of Excellence</span>
              </div>
            </div>

            {/* Stat Box 4 */}
            <div className="flex items-center justify-center space-x-4 px-4">
              <div className="text-[#F26419]">
                <Star className="w-8 h-8 fill-current" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">95%</span>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider pt-1">Student Satisfaction</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}