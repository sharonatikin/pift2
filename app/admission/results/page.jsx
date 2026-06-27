'use client';

import React, { useState } from 'react';
import { ChevronDown, ClipboardList } from 'lucide-react';

export default function ResultsVerification() {
  const [rollNumber, setRollNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle result check logic here
    console.log('Checking result for roll number:', rollNumber);
  };

  return (
    <div className="w-full min-h-screen bg-[#0D0203] text-white font-sans antialiased relative overflow-hidden flex flex-col justify-between">
      
      

      {/* 2. Banner and Verification Module Container */}
      <div className="flex-1 w-full flex flex-col items-center justify-start relative">
        
        {/* Angled Polygon Hero Background Banner */}
        <div className="w-full bg-[#D91429] pt-12 pb-24 md:pt-16 md:pb-36 px-4 text-center relative shadow-inner">
          {/* Precise clip path accents mirroring the original geometric wing structure */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase drop-shadow-sm select-none">
              Results
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-white/90 mt-2 tracking-wide font-medium">
              Your hardwork, our pride!
            </p>
          </div>
          
          {/* Geometric bottom frame corner overrides */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#0D0203] clip-banner-bottom hidden md:block"></div>
        </div>

        {/* 3. Verification Form Card Module */}
        <div className="w-full max-w-3xl px-4 -mt-12 md:-mt-20 relative z-30 mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 md:p-12 text-neutral-900 border border-neutral-100 flex flex-col items-center">
            
            {/* Context Icon */}
            <div className="mb-4 text-[#D91429] bg-[#FDF2F4] p-3 rounded-xl border border-[#FBCFE8]/20">
              <ClipboardList className="w-8 h-8 stroke-[1.75]" />
            </div>

            {/* Section Prompt */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D0203] tracking-tight mb-8 sm:mb-10 text-center">
              Check Your Results
            </h2>

            {/* Input Submission Engine */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row gap-4 items-stretch justify-center max-w-2xl">
              <div className="flex-1 relative">
                <input
                  type="text"
                  id="rollNumber"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  placeholder="Enter Roll NO"
                  className="w-full px-4 py-3.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D91429] focus:border-transparent text-sm text-neutral-800 placeholder-neutral-400 bg-neutral-50 transition-all font-medium"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="bg-[#D91429] hover:bg-[#B50E20] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-md transition-all duration-200 shadow-md active:scale-[0.99] whitespace-nowrap"
              >
                View Result
              </button>
            </form>

            {/* Auxiliary Guidelines label */}
            <p className="w-full max-w-2xl text-left text-xs text-neutral-500 font-medium mt-3 px-1">
              Please enter a valid Roll Number to view your Results.
            </p>

          </div>
        </div>

      </div>

      {/* Styled JSX layer injecting responsive structural layout framing rules */}
      <style jsx global>{`
        @media (min-width: 768px) {
          .clip-banner-bottom {
            clip-path: polygon(0 100%, 3% 0, 97% 0, 100% 100%);
          }
        }
      `}</style>
    </div>
  );
}