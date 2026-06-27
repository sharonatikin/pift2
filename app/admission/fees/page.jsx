'use client';

import React from 'react';
import { ChevronDown, QrCode, CreditCard } from 'lucide-react';

export default function FeesPaymentSection() {
  return (
    <div className="w-full  bg-[#1E1E1E] flex flex-col font-sans antialiased">
      
      {/* Container holding both Left Accent Sidebar and Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-stretch">
        
        {/* Left Branding Sidebar Panel */}
        <div className="w-full lg:w-[400px] bg-[#C1121F] text-white p-8 sm:p-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative overflow-hidden shrink-0">
          {/* Subtle Decorative Circle Overlay matching the dynamic lines in original logo motif */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-16 -translate-y-16 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center lg:items-start space-y-6">
            {/* Institution Badge Placeholder Graphic */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center font-serif text-2xl font-black bg-black/10">
                PI
              </div>
              <div className="w-16 h-16 flex items-center justify-center font-bold text-3xl tracking-tighter opacity-80 border-l border-white/20 pl-4">
                25+
              </div>
            </div>

            {/* Typography Section */}
            <div className="space-y-4 pt-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight uppercase font-sans">
                Pinnacle Institute Of <br />
                <span className="text-neutral-100">Fashion Technology</span>
              </h1>
              
              <p className="text-xs sm:text-sm text-white/90 font-medium tracking-wide">
                Regd Under MSME & NSDC, Govt Of India
              </p>
            </div>

            <div className="w-16 h-[2px] bg-white/40 my-2" />

            <p className="text-sm text-white/80 font-light leading-relaxed max-w-sm">
              25+ yrs of Design Experience, <br />
              ISO Certified Campus
            </p>
          </div>
        </div>

        {/* Right Dashboard Gateway Panel */}
        <div className="flex-1 bg-black text-white flex flex-col">
          
          

          {/* Interactive Portal Form Segment */}
          <div className="flex-1 w-full mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16 flex flex-col justify-center">
            
            <div className="max-w-4xl space-y-2 mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
                Fees Payment
              </h2>
              <div className="w-20 h-1 bg-[#C1121F] mb-6" />
              <p className="text-neutral-400 text-sm sm:text-base font-medium tracking-wide">
                Select a payment option to continue.
              </p>
            </div>

            {/* Selection Gateways Cards Wrapper split layout */}
            <div className="flex flex-col md:flex-row items-center justify-start gap-24 relative max-w-4xl">
              
              {/* Option Card One - Scan QR */}
              <div className="w-full md:w-1/2 bg-white rounded-lg p-6 sm:p-8 text-neutral-900 shadow-2xl flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start md:items-center lg:items-start gap-5 border border-neutral-100 transition-transform duration-200 hover:-translate-y-1">
                <div className="p-4 bg-[#FDF2F4] rounded-full text-[#C1121F] shrink-0">
                  <QrCode className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div className="flex-1 text-center sm:text-left md:text-center lg:text-left space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-extrabold tracking-tight text-black">Scan QR Code (UPI)</h3>
                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                      Open any UPI app and scan the QR code to pay.
                    </p>
                  </div>
                  <button className="bg-[#C1121F] hover:bg-[#9e0e18] text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded transition-colors duration-150 shadow-md">
                    Pay Now
                  </button>
                </div>
              </div>

              {/* "OR" Intermediary Separator Split node */}
              <div className="z-10 bg-white border border-neutral-200 text-[#C1121F] w-10 h-10 rounded-full flex items-center justify-center font-serif italic font-black text-xs shadow-md md:absolute md:left-1/2 md:-translate-x-1/2 shrink-0 select-none">
                OR
              </div>

              {/* Option Card Two - Payment Gateway */}
              <div className="w-full md:w-1/2 bg-white rounded-lg p-6 sm:p-8 text-neutral-900 shadow-2xl flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start md:items-center lg:items-start gap-5 border border-neutral-100 transition-transform duration-200 hover:-translate-y-1">
                <div className="p-4 bg-[#FDF2F4] rounded-full text-[#C1121F] shrink-0">
                  <CreditCard className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div className="flex-1 text-center sm:text-left md:text-center lg:text-left space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-extrabold tracking-tight text-black">Payment Gateway</h3>
                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                      Pay using Card, Net Banking or UPI Securely.
                    </p>
                  </div>
                  <button className="bg-[#C1121F] hover:bg-[#9e0e18] text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded transition-colors duration-150 shadow-md">
                    Pay Now
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}