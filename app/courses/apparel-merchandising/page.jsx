'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { 
  ShoppingBag, 
  Truck, 
  Award, 
  BarChart3, 
  Users, 
  Landmark, 
  Globe, 
  Briefcase, 
  UserCheck, 
  TrendingUp, 
  Compass, 
  Cpu, 
  ShieldAlert, 
  LineChart, 
  Layers 
} from 'lucide-react';

// Core component structural imports
import Hero from '../../../components/apparel/Hero.jsx';
import SuccessStories from '../../../components/apparel/SuccessStories.jsx';
import JourneySection from '../../../components/apparel/JourneySection.jsx';
import CTASection from '../../../components/apparel/CTASection.jsx';
import FAQ from '../../../components/apparel/FAQ.jsx';

export default function ApparelManagementPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone design system tokens
  const theme = {
    bgPage: isDark ? 'bg-[#050102]' : 'bg-[#fbfbfb]',
    bgSectionAlt: isDark ? 'bg-[#060203]' : 'bg-white',
    bgGradientSec: isDark 
      ? 'from-[#060203] via-[#0b0305] to-[#050102]' 
      : 'from-white via-neutral-50 to-[#fbfbfb]',
      
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textMuted: isDark ? 'text-zinc-400' : 'text-neutral-600',
    textCardTitle: isDark ? 'text-zinc-100' : 'text-neutral-900',
    
    // Grid box background & boundary borders
    cardBg: isDark ? 'bg-[#110c0e]' : 'bg-[#F0C9CB]',
    cardBgAlt: isDark ? 'bg-[#12090b]/60' : 'bg-[#F0C9CB]/40',
    cardBorder: isDark ? 'border-white/[0.04]' : 'border-[#E3B2B4]',
    cardBorderHover: isDark ? 'hover:border-[#e6001a]/30' : 'hover:border-[#e6001a]/50',
    cardBgHover: isDark ? 'hover:bg-[#161012]' : 'hover:bg-[#EBB4B6]',
    
    // Decorative lines and frame lines
    imageFrame: isDark ? 'border-white/5 bg-zinc-950' : 'border-neutral-200/80 bg-neutral-100',
    imageGrayscale: isDark ? 'grayscale opacity-90 contrast-105' : 'brightness-98 contrast-[1.02]',
    dividerLine: isDark ? 'bg-zinc-800' : 'bg-neutral-200',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20',
    
    // Brand signature values
    accentText: 'text-[#e6001a]',
    accentGlow: isDark ? 'bg-[#e6001a]/5' : 'bg-[#e6001a]/2',
    accentTimeline: isDark ? 'bg-[#e6001a]/40' : 'bg-[#e6001a]/50'
  };

  const highlights = [
    { title: 'Fashion Buying', icon: ShoppingBag },
    { title: 'Merchandising Management', icon: BarChart3 },
    { title: 'Vendor Coordination', icon: Users },
    { title: 'Retail Operations', icon: Landmark },
    { title: 'Supply Chain Planning', icon: Truck },
    { title: 'Global Sourcing', icon: Globe },
  ];

  const semesters = [
    {
      title: 'Semester 1',
      courses: ['Fashion Fundamentals', 'Textile Knowledge', 'Communication Skills', 'Fashion Industry Overview'],
    },
    {
      title: 'Semester 2',
      courses: ['Merchandising Concepts', 'Product Planning', 'Retail Management', 'Consumer Behaviour'],
    },
    {
      title: 'Semester 3',
      courses: ['Global Sourcing', 'Supply Chain Management', 'Vendor Development', 'Quality Assurance'],
    },
    {
      title: 'Semester 4',
      courses: ['Industry Internship', 'Retail Projects', 'Business Strategy', 'Portfolio Development'],
    },
  ];

  const steps = [
    { number: 1, label: 'Trend Forecasting' },
    { number: 2, label: 'Product Development' },
    { number: 3, label: 'Vendor Sourcing' },
    { number: 4, label: 'Production Planning' },
    { number: 5, label: 'Quality Control' },
    { number: 6, label: 'Retail Distribution' },
    { number: 7, label: 'Customer Purchase' },
  ];

  const stats = [
    { value: '100+', label: 'Industry Collaborations' },
    { value: '95%', label: 'Practical Exposure' },
    { value: '50+', label: 'Brand Partnerships' },
    { value: '12K+', label: 'Alumni Network' },
  ];

  const careers = [
    { title: 'Apparel Merchandiser', icon: Briefcase },
    { title: 'Fashion Buyer', icon: UserCheck },
    { title: 'Retail Planner', icon: TrendingUp },
    { title: 'Sourcing Executive', icon: Compass },
    { title: 'Product Coordinator', icon: Cpu },
    { title: 'Vendor Manager', icon: ShieldAlert },
    { title: 'Supply Chain Analyst', icon: LineChart },
    { title: 'Category Manager', icon: Layers },
  ];

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-[#e6001a] selection:text-white transition-colors duration-300 ${theme.bgPage} ${theme.textMain}`}>
      <Hero />

      {/* 3. PROGRAM OVERVIEW SECTION */}
      <section className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 ${theme.bgSectionAlt}`}>
        <div className={`absolute bottom-0 right-1/4 w-[500px] h-[300px] blur-[120px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5 w-full flex justify-center md:justify-start">
            <div className={`relative w-full max-w-[440px] aspect-[4/5] rounded-[32px] overflow-hidden border transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
              <Image 
                src="/images/apparel-sec2.png" 
                alt="Industrial tailoring" 
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className={`object-cover transition duration-500 hover:scale-102 ${theme.imageGrayscale}`}
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-6 md:space-y-8 text-left">
            <div className="space-y-3">
              <p className={`text-[11px] font-bold tracking-[0.25em] uppercase ${theme.accentText}`}>Program Overview</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] max-w-2xl">
                <span className="font-serif block font-medium">Master The <span className={`italic font-normal font-serif ${theme.accentText}`}>Business</span></span>
                <span className="font-serif block font-medium mt-1">Behind Fashion Success</span>
              </h2>
            </div>
            <p className={`text-sm sm:text-base leading-relaxed max-w-xl font-light ${theme.textMuted}`}>
              The Apparel Merchandising program equips students with practical knowledge of product development, 
              sourcing, production planning, retail merchandising, quality control and global supply chain management.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[{ title: 'Industry Exposure' }, { title: 'Live Retail Projects' }, { title: 'Global Merchandising Insights' }].map((badge, idx) => (
                <div key={idx} className={`border rounded-2xl p-6 flex flex-col justify-end min-h-[110px] transition duration-300 cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardBgHover} ${theme.shadow}`}>
                  <h3 className="text-sm font-semibold tracking-wide leading-snug text-neutral-800 dark:text-zinc-300">{badge.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE SECTION */}
      <section className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 bg-gradient-to-b ${theme.bgGradientSec}`}>
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] blur-[130px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
              <span className="font-serif block font-medium">Why Choose</span>
              <span className={`italic font-serif block font-normal mt-2 ${theme.accentText}`}>Apparel Merchandising?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              { title: 'Product Development', desc: 'Understand the journey from design concept to finished product.', icon: Layers },
              { title: 'Fashion Buying', desc: 'Learn forecasting, assortment planning and consumer demand analysis.', icon: ShoppingBag },
              { title: 'Supply Chain Management', desc: 'Master sourcing, logistics and vendor coordination.', icon: Truck },
              { title: 'Retail Excellence', desc: 'Gain practical understanding of modern retail operations.', icon: Award }
            ].map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div key={idx} className={`backdrop-blur-sm border rounded-2xl p-8 flex flex-col justify-between min-h-[240px] transition duration-300 ease-out group ${theme.cardBgAlt} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardBgHover} ${theme.shadow}`}>
                  <div className="space-y-4">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.02] dark:border-white/5 border-neutral-300/60 flex items-center justify-center text-neutral-500 dark:text-zinc-500 group-hover:text-[#e6001a] group-hover:border-[#e6001a]/20 transition duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className={`font-serif text-lg font-medium tracking-wide transition duration-300 ${theme.textCardTitle}`}>{card.title}</h3>
                  </div>
                  <p className={`text-xs sm:text-[13px] leading-relaxed font-light mt-4 ${theme.textMuted}`}>{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PROGRAM HIGHLIGHTS GRID */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] blur-[120px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-4 mb-12 md:mb-16">
            <p className={`text-[10px] font-bold tracking-[0.3em] uppercase ${theme.accentText}`}>Program Highlights</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-none">
              <span className={`italic font-serif font-normal ${theme.accentText}`}>Plan.</span>{' '}
              <span className="font-serif font-medium">Source.</span>{' '}
              <span className={`italic font-serif font-normal ${theme.accentText}`}>Deliver.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className={`border rounded-2xl p-8 min-h-[140px] flex flex-col justify-between transition duration-300 ease-out group ${theme.cardBg} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardBgHover} ${theme.shadow}`}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl font-medium tracking-wide text-neutral-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition duration-200 leading-snug">{item.title}</h3>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.01] dark:border-white/5 border-neutral-300/40 flex items-center justify-center text-neutral-500 dark:text-zinc-600 group-hover:text-[#e6001a] group-hover:border-[#e6001a]/10 transition duration-300 flex-shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="w-6 h-0.5 bg-neutral-400 dark:bg-zinc-800 group-hover:w-12 group-hover:bg-[#e6001a] transition-all duration-300 mt-6" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. WHAT YOU'LL LEARN SEMESTERS CARD MATRIX */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] blur-[140px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
              <span className="font-serif block font-medium">What You&apos;ll</span>
              <span className={`italic font-serif block font-normal mt-2 ${theme.accentText}`}>Learn</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {semesters.map((sem, index) => (
              <div key={index} className={`border rounded-[24px] p-8 md:p-10 transition duration-300 ease-out ${theme.cardBg} ${theme.cardBorder} hover:border-neutral-400 dark:hover:border-white/[0.07] ${theme.cardBgHover} group ${theme.shadow}`}>
                <h3 className={`font-serif text-2xl font-medium tracking-wide mb-6 md:mb-8 transition-transform duration-300 group-hover:translate-x-1 ${theme.accentText}`}>{sem.title}</h3>
                <ul className="space-y-4">
                  {sem.courses.map((course, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e6001a] mt-[7px] flex-shrink-0 opacity-90 shadow-[0_0_6px_#e6001a]" />
                      <span className="text-sm md:text-base font-medium text-neutral-800 dark:text-zinc-300 tracking-wide group-hover:text-black dark:group-hover:text-zinc-200 transition duration-200">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONCEPT TO CONSUMER TIMELINE ROADMAP */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[140px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
              <span className="font-serif font-medium">From</span>{' '}
              <span className={`italic font-serif font-normal ${theme.accentText}`}>Concept</span>
              <span className="font-serif block font-medium mt-1">to</span>
              <span className="font-serif block font-medium mt-1">Consumer</span>
            </h2>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className={`hidden lg:block absolute top-7 left-[5%] right-[5%] h-[2px] pointer-events-none z-0 ${theme.accentTimeline}`} />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center w-full max-w-[150px] group relative">
                  {idx !== steps.length - 1 && <div className="lg:hidden absolute bottom-[-30px] w-[2px] h-6 bg-[#e6001a]/20" />}
                  <div className="w-14 h-14 rounded-full bg-[#e6001a] text-white flex items-center justify-center font-sans text-sm font-semibold tracking-wide shadow-[0_0_24px_rgba(230,0,0,0.45)] group-hover:shadow-[0_0_32px_rgba(230,0,0,0.65)] group-hover:scale-105 transition-all duration-300 relative z-10 cursor-default">
                    {step.number}
                  </div>
                  {idx !== steps.length - 1 && <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-24px)] h-[2px] bg-[#e6001a]/40 z-0 pointer-events-none group-hover:bg-[#e6001a]/60 transition-colors duration-300" />}
                  <h3 className={`mt-5 transition-colors duration-300 text-xs md:text-sm font-semibold tracking-wide leading-snug ${theme.textMuted} group-hover:text-black dark:group-hover:text-zinc-200`}>{step.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. LEARN THROUGH REAL INDUSTRY EXPERIENCE SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute bottom-0 left-1/3 w-[600px] h-[350px] blur-[130px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 flex gap-4 h-[450px] sm:h-[550px] w-full max-w-[500px] mx-auto lg:mx-0">
              <div className={`w-1/2 h-full rounded-[28px] overflow-hidden border shadow-2xl relative group transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
                <Image 
                  src="/images/apparel-exp1.png" 
                  alt="Garment assembly floor" 
                  fill
                  sizes="(max-width: 1024px) 50vw, 250px"
                  className={`object-cover transition duration-700 ease-out group-hover:scale-105 ${theme.imageGrayscale}`}
                />
              </div>
              <div className={`w-1/2 h-full rounded-[28px] overflow-hidden border shadow-2xl relative group transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
                <Image 
                  src="/images/apparel-exp2.png" 
                  alt="Industrial textile facility" 
                  fill
                  sizes="(max-width: 1024px) 50vw, 250px"
                  className={`object-cover transition duration-700 ease-out group-hover:scale-105 ${theme.imageGrayscale}`}
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
                  <span className="font-serif block font-medium">Learn Through</span>
                  <span className={`italic font-serif block font-normal mt-1 ${theme.accentText}`}>Real Industry</span>
                  <span className="font-serif block font-medium mt-1">Experience</span>
                </h2>
                <p className={`text-sm sm:text-base font-light leading-relaxed pt-2 max-w-xl ${theme.textMuted}`}>
                  Students participate in factory visits, sourcing projects, buying simulations, vendor interactions and retail exposure programs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-xl">
                {stats.map((stat, idx) => (
                  <div key={idx} className={`border rounded-2xl p-6 sm:p-8 flex flex-col justify-center min-h-[130px] transition duration-300 ease-out group ${theme.cardBg} ${theme.cardBorder} hover:border-neutral-400 dark:hover:border-white/[0.07] ${theme.cardBgHover} ${theme.shadow}`}>
                    <span className={`text-3xl sm:text-4xl font-serif font-medium tracking-tight block mb-2 group-hover:scale-102 transition-transform origin-left duration-300 ${theme.accentText}`}>{stat.value}</span>
                    <span className={`text-xs sm:text-sm font-semibold tracking-wide leading-snug ${theme.textMuted} group-hover:text-black dark:group-hover:text-zinc-400`}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CAREER PATHWAYS SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute top-1/4 left-1/3 w-[600px] h-[350px] blur-[130px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-4 mb-16 md:mb-24 text-left">
            <p className={`text-[10px] font-bold tracking-[0.3em] uppercase ${theme.accentText}`}>Career Pathways</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
              <span className="font-serif block font-medium">Where Your <span className={`italic font-normal font-serif ${theme.accentText}`}>Career</span></span>
              <span className="font-serif block font-medium mt-1">Can Lead</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {careers.map((career, idx) => {
              const IconComponent = career.icon;
              return (
                <div key={idx} className={`border rounded-2xl p-8 min-h-[130px] flex flex-col justify-between transition duration-300 ease-out group ${theme.cardBg} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardBgHover} ${theme.shadow}`}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-sans text-base font-semibold tracking-wide text-neutral-800 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition duration-200 leading-snug">{career.title}</h3>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.01] dark:border-white/5 border-neutral-300/40 flex items-center justify-center text-neutral-500 dark:text-zinc-600 group-hover:text-[#e6001a] group-hover:border-[#e6001a]/10 transition duration-300 flex-shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="w-6 h-px bg-neutral-400 dark:bg-zinc-800 group-hover:w-10 group-hover:bg-[#e6001a] transition-all duration-300 mt-6" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SuccessStories />
      <JourneySection />
      <FAQ />
      <CTASection />
      
    </div>
  );
}