'use client';

import React, { useState } from 'react';
import { 
  FileUp, 
  Users, 
  FileCheck, 
  UserCheck, 
  GraduationCap 
} from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: FileUp,
    title: 'Submit Your Application',
  },
  {
    id: 2,
    icon: Users,
    title: 'Attend Admission Counseling',
  },
  {
    id: 3,
    icon: FileCheck,
    title: 'Complete Document Verification',
  },
  {
    id: 4,
    icon: UserCheck,
    title: 'Confirm Enrollment',
  },
  {
    id: 5,
    icon: GraduationCap,
    title: 'Begin Your Learning Journey',
  },
];

export default function AdmissionProcessSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    selectCourse: '',
    city: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementation handle logic for form submission
    console.log('Submitting Form Data:', formData);
  };

  return (
    <div className="w-full bg-[#030303] text-white font-sans antialiased selection:bg-[#E11D48]/30">
      
      {/* Upper Process Steps Timeline Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal tracking-tight text-white">
            Admission Process
          </h2>
          <p className="text-[#EF4444] text-4xl sm:text-5xl md:text-[58px] font-serif italic font-normal tracking-wide leading-none">
            Getting Started is Easy
          </p>
        </div>

        {/* Step Items Stack & Horizontal Connector Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-2 items-start justify-center relative max-w-6xl mx-auto pt-4">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div key={step.id} className="flex flex-col items-center group relative">
                
                {/* Visual Step Component Metric Elements */}
                <div className="flex items-center w-full justify-center">
                  <div className="p-3 text-[#F97316] bg-[#171717] rounded-xl border border-neutral-800/60 group-hover:border-[#F97316]/50 transition-colors duration-300">
                    <StepIcon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  
                  {/* Step Connector Lines */}
                  {idx !== steps.length - 1 && (
                    <div className="hidden md:block absolute left-[60%] right-[-40%] top-6 h-[1px] bg-gradient-to-r from-neutral-700 to-neutral-800" />
                  )}
                </div>

                {/* Subheading Title Description */}
                <h3 className="mt-5 text-xs sm:text-[13px] font-bold tracking-wide text-neutral-200 uppercase leading-snug max-w-[160px] text-center">
                  {step.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Interactive Application Form Splat Banner Area */}
      <section className="w-full bg-[#EF4444] py-16 px-4 sm:px-6 lg:px-8 shadow-inner relative overflow-hidden">
        
        {/* Subtle Background Geometric Glow Ambient Modifier */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10 pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Headline Content Block Left */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
            <h2 className="text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight text-white leading-[1.08]">
              Ready to Start <br />
              Your Journey?
            </h2>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-lg">
              Take the first step toward building your future with practical, industry-focused education.
            </p>
          </div>

          {/* Registration Input Form Panel Right */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white rounded-[24px] shadow-2xl p-6 sm:p-10 w-full max-w-xl text-neutral-900">
              
              <h3 className="text-2xl sm:text-3xl font-black text-[#030303] tracking-tight mb-8">
                Apply For Admission
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Two-Column Matrix Input Node Stack Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4444] focus:border-transparent text-sm text-neutral-800 placeholder-neutral-400 bg-neutral-50/50 transition-all font-medium"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4444] focus:border-transparent text-sm text-neutral-800 placeholder-neutral-400 bg-neutral-50/50 transition-all font-medium"
                  />
                </div>

                {/* Sub-sequential Two-Column Dropdown Vector Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4444] focus:border-transparent text-sm text-neutral-800 placeholder-neutral-400 bg-neutral-50/50 transition-all font-medium"
                  />
                  <select
                    required
                    value={formData.selectCourse}
                    onChange={(e) => setFormData({ ...formData, selectCourse: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4444] focus:border-transparent text-sm text-neutral-500 bg-neutral-50/50 transition-all font-medium appearance-none"
                  >
                    <option value="" disabled>Select Course</option>
                    <option value="fashion-design">Fashion Design & Technology</option>
                    <option value="interior-design">Interior Architecture & Design</option>
                    <option value="textile-design">Textile & Apparel Management</option>
                    <option value="graphic-design">Visual Communications & Graphics</option>
                  </select>
                </div>

                {/* City Target Specification */}
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4444] focus:border-transparent text-sm text-neutral-800 placeholder-neutral-400 bg-neutral-50/50 transition-all font-medium"
                  />
                </div>

                {/* Message Context Description Block */}
                <div>
                  <textarea
                    rows={3}
                    placeholder="Message (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4444] focus:border-transparent text-sm text-neutral-800 placeholder-neutral-400 bg-neutral-50/50 transition-all font-medium resize-none"
                  />
                </div>

                {/* Form Action Dispatcher Engine */}
                <button
                  type="submit"
                  className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold text-xs sm:text-sm uppercase tracking-widest py-4 rounded-md transition-colors duration-200 shadow-md active:scale-[0.99] mt-2"
                >
                  Submit Application
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}