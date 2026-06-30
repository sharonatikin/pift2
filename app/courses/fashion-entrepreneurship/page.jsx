'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { 
  ArrowRight, 
  ArrowDownToLine, 
  ArrowUpRight,
  ChevronDown, 
  FileText 
} from 'lucide-react';

export default function FashionEntrepreneurshipPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone design system tokens
  const theme = {
    bgPage: isDark ? 'bg-[#050505]' : 'bg-[#fbfbfb]',
    bgSectionAlt: isDark ? 'bg-[#060203]' : 'bg-white',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textMuted: isDark ? 'text-gray-300' : 'text-neutral-600',
    textMutedSub: isDark ? 'text-zinc-400' : 'text-neutral-500',
    textCardTitle: isDark ? 'text-zinc-100' : 'text-[#4A282A]',
    textCardDesc: isDark ? 'text-zinc-400' : 'text-[#4A282A]/90',

    // Premium light clay/pink card systems
    cardBg: isDark ? 'bg-[#110d0e]' : 'bg-[#F0C9CB]',
    cardBgAlt: isDark ? 'bg-[#110d0e]/90' : 'bg-[#F0C9CB]/40',
    cardBorder: isDark ? 'border-white/[0.03]' : 'border-[#E3B2B4]',
    cardBorderHover: isDark ? 'hover:border-[#e6001a]/20' : 'hover:border-[#e6001a]/60',
    cardBgHover: isDark ? 'hover:bg-[#150f11]' : 'hover:bg-[#EBB4B6]',

    // Accordion configuration variables
    accordionAnswerBg: isDark ? 'bg-black/[0.08]' : 'bg-neutral-100/60',
    accordionLine: isDark ? 'border-white/[0.02]' : 'border-neutral-300/40',

    // Graphical layers & frames
    imageFrame: isDark ? 'border-white/5 bg-zinc-950' : 'border-neutral-200/80 bg-neutral-100',
    imageGrayscale: isDark ? 'grayscale opacity-90 contrast-105' : 'brightness-100 contrast-[1.01]',
    timelineAxis: isDark ? 'bg-[#e6001a]/60' : 'bg-[#e6001a]/50',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20',

    // Interaction triggers
    btnSecondary: isDark 
      ? 'border-white/10 hover:border-white/20 bg-white/[0.01] hover:bg-white/[0.04] text-gray-200' 
      : 'border-neutral-300 hover:border-neutral-400 bg-white hover:bg-neutral-50 text-neutral-800',

    accentText: 'text-[#e6001a]',
    accentHeroText: 'text-[#E5333B]',
    accentHeroBg: 'bg-[#E5333B] hover:bg-[#c92a31]',
    accentGlow: isDark ? 'bg-[#e6001a]/5' : 'bg-[#e6001a]/2'
  };

  const overviewCards = [
    {
      title: 'Industry Exposure',
      description: 'Work with leading fashion brands and industry professionals'
    },
    {
      title: 'Practical Learning',
      description: 'Hands-on projects and real-world business scenarios'
    },
    {
      title: 'Business Development',
      description: 'From startup planning to brand launch support'
    }
  ];

  const highlightsCards = [
    {
      title: 'Fashion Business Strategy',
      description: 'Learn strategic planning, market analysis, and business model development for fashion ventures'
    },
    {
      title: 'Brand Building',
      description: 'Create compelling brand identities and develop brand positioning strategies'
    },
    {
      title: 'Fashion Marketing',
      description: 'Master digital marketing, influencer collaboration, and campaign management'
    },
    {
      title: 'Retail Management',
      description: 'Understand retail operations, inventory management, and customer experience'
    },
    {
      title: 'Visual Merchandising',
      description: 'Design captivating displays and create immersive shopping experiences'
    },
    {
      title: 'E-Commerce Management',
      description: 'Build and optimize online fashion stores with modern e-commerce strategies'
    }
  ];

  const semesters = [
    {
      number: '1',
      title: 'Semester 1',
      courses: ['Introduction to Fashion Business', 'Consumer Behaviour', 'Marketing Fundamentals', 'Communication Skills'],
    },
    {
      number: '2',
      title: 'Semester 2',
      courses: ['Fashion Branding', 'Merchandising', 'Retail Operations', 'Digital Marketing'],
    },
    {
      number: '3',
      title: 'Semester 3',
      courses: ['Business Planning', 'Fashion Entrepreneurship', 'Financial Management', 'Industry Projects'],
    },
    {
      number: '4',
      title: 'Semester 4',
      courses: ['Startup Development', 'Brand Launch', 'Internship', 'Final Portfolio'],
    },
  ];

  const classroomCards = [
    {
      title: 'Industry Visits',
      description: 'Visit leading fashion houses, retail stores, and manufacturing units'
    },
    {
      title: 'Expert Workshops',
      description: 'Learn from successful entrepreneurs and industry veterans'
    },
    {
      title: 'Live Projects',
      description: 'Work on real brand challenges and business case studies'
    },
    {
      title: 'Brand Development Labs',
      description: 'Access dedicated spaces for prototyping and testing ideas'
    }
  ];

  const pathways = [
    { title: 'Fashion Entrepreneur' },
    { title: 'Brand Manager' },
    { title: 'Fashion Marketer' },
    { title: 'Retail Manager' },
    { title: 'Visual Merchandiser' },
    { title: 'Business Consultant' },
    { title: 'E-Commerce Manager' },
    { title: 'Fashion Buyer' }
  ];

  const stats = [
    { value: '120+', label: 'Industry Experts' },
    { value: '95%', label: 'Industry Exposure' },
    { value: '50+', label: 'Partner Brands' },
    { value: '12K+', label: 'Alumni Network' },
  ];

  const admissionSteps = [
    {
      number: '01',
      title: 'Apply Online',
      description: 'Submit your application through our portal'
    },
    {
      number: '02',
      title: 'Submit Documents',
      description: 'Provide required academic credentials'
    },
    {
      number: '03',
      title: 'Personal Interview',
      description: 'Meet with our admission committee'
    },
    {
      number: '04',
      title: 'Admission Confirmation',
      description: 'Receive your acceptance letter'
    }
  ];

  const testimonials = [
    {
      quote: '"The entrepreneurship program gave me the confidence and skills to launch my own sustainable fashion brand. The industry connections were invaluable."',
      name: 'Priya Sharma',
      role: 'Founder, Ethereal Fashion',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      quote: '"From brand strategy to retail operations, PIFT prepared me for every aspect of the fashion business. Now I manage a portfolio of premium brands."',
      name: 'Arjun Patel',
      role: 'Brand Manager, Luxe Retail',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      quote: '"The practical learning approach and live projects gave me real-world experience. I secured my dream role even before graduation."',
      name: 'Ananya Desai',
      role: 'E-Commerce Director, Style Avenue',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80'
    }
  ];

  const faqs = [
    {
      question: 'What is Fashion Entrepreneurship?',
      answer: 'Fashion Entrepreneurship is the business-focused mastery of launching, scaling, and managing commercial clothing lines, lifestyle houses, and direct-to-consumer apparel platforms. It blends raw creative design output with real-world financial frameworks, capital sourcing, and enterprise architecture.',
    },
    {
      question: 'Who can apply?',
      answer: 'This specialization is ideal for innovative designers looking to commercialize their personal capsule lines, business pivoters eager to navigate the luxury fashion landscape, and founders ready to master product lifecycle management and strategic brand assembly.',
    },
    {
      question: 'What careers can I pursue?',
      answer: 'Graduates go on to build independent labels or lead divisions within premier brands as Creative Directors, International Brand Managers, Fashion Marketers, Supply Chain Specialists, and Premium Retail Operations Strategists.',
    },
    {
      question: 'Do I receive industry exposure?',
      answer: 'Absolutely. The path features immersive residencies inside active commercial fashion ateliers, real-time supply chain vendor negotiations, and exclusive critique sessions hosted by verified fashion industry executives and runway pioneers.',
    },
    {
      question: 'Will I work on live projects?',
      answer: 'Yes. You will continuously develop actual brand challenges, model operational costing blueprints for launch-ready capsule collections, and engineer active marketing launch strategies directly connected to target retail demographics.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-[#e6001a] selection:text-white transition-colors duration-300 ${theme.bgPage} ${theme.textMain}`}>
      
      {/* 2. HERO HEADER BLOCK */}
      <div className={`min-h-screen relative overflow-hidden flex items-center transition-colors duration-300 ${theme.bgPage}`}>
        {isDark && <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_#2e080c_0%,_#050505_100%)] opacity-90 pointer-events-none" />}

        <main className="relative z-10 max-w-[1600px] mx-auto px-6 py-12 md:px-12 lg:py-20 grid lg:grid-cols-12 items-center gap-12 lg:gap-8 w-full">
          <div className="lg:col-span-6 space-y-8 lg:pr-6 text-left">
            <div className="space-y-4">
              <span className={`text-[12px] font-bold uppercase tracking-[0.25em] block ${theme.textMutedSub}`}>
                Course Program
              </span>
              <h1 className="font-serif text-[64px] md:text-[84px] lg:text-[88px] font-normal leading-[1.05] tracking-tight">
                <span className="block">Fashion</span>
                <span className={`italic font-medium tracking-wide block mt-1 ${theme.accentHeroText}`}>Entrepreneurship</span>
              </h1>
            </div>

            <p className={`text-base md:text-lg leading-relaxed max-w-xl font-normal transition-colors duration-300 ${theme.textMuted}`}>
              Fashion Entrepreneurship is designed for aspiring business leaders who wish to establish, manage and grow successful fashion brands. Students learn business strategy, fashion marketing, retail management, merchandising, branding and entrepreneurship within the fashion industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className={`text-white font-semibold rounded-full px-10 py-4.5 text-[15px] flex items-center justify-center gap-2 transition-colors duration-300 shadow-[0_4px_30px_rgba(229,51,59,0.2)] ${theme.accentHeroBg}`}>
                Apply For Admission
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className={`border backdrop-blur-sm font-semibold rounded-full px-10 py-4.5 text-[15px] flex items-center justify-center gap-2 transition-all duration-300 ${theme.btnSecondary}`}>
                Download Brochure
                <ArrowDownToLine className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex justify-center lg:justify-end w-full">
            <div className={`relative w-full max-w-[580px] aspect-[4/5] rounded-[32px] overflow-hidden border transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop"
                alt="Tailored premium suit jackets on display showcasing fashion business and craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 580px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Float Label Badge Layers */}
            <div className="absolute top-[8%] -left-[4%] sm:-left-[1%] bg-black/40 dark:bg-black/40 backdrop-blur-xl border border-white/[0.06] rounded-full px-5 py-2.5 text-[12px] sm:text-[14px] font-medium tracking-wide text-white shadow-lg">
              Business Strategy
            </div>
            <div className="absolute top-[48%] -left-[6%] sm:-left-[1%] bg-black/40 dark:bg-black/40 backdrop-blur-xl border border-white/[0.06] rounded-full px-5 py-2.5 text-[12px] sm:text-[14px] font-medium tracking-wide text-white shadow-lg">
              Retail Management
            </div>
            <div className="absolute top-[32%] -right-[2%] sm:-right-[4%] bg-black/40 dark:bg-black/40 backdrop-blur-xl border border-white/[0.06] rounded-full px-5 py-2.5 text-[12px] sm:text-[14px] font-medium tracking-wide text-white shadow-lg">
              Fashion Branding
            </div>
            <div className="absolute bottom-[16%] -right-[4%] sm:-right-[6%] bg-black/40 dark:bg-black/40 backdrop-blur-xl border border-white/[0.06] rounded-full px-5 py-2.5 text-[12px] sm:text-[14px] font-medium tracking-wide text-white shadow-lg">
              Fashion Marketing
            </div>
          </div>
        </main>
      </div>

      {/* 3. PROGRAM OVERVIEW SECTION */}
      <section className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 ${theme.bgSectionAlt}`}>
        <div className={`absolute bottom-1/3 right-1/4 w-[500px] h-[350px] blur-[120px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            <div className="md:col-span-5 w-full flex justify-center md:justify-start">
              <div className={`relative w-full max-w-[440px] aspect-[1/1] sm:aspect-[4/5] rounded-[32px] overflow-hidden border transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
                <Image 
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" 
                  alt="Creative strategists analyzing moodboards" 
                  fill
                  sizes="(max-width: 768px) 100vw, 440px"
                  className={`object-cover ${theme.imageGrayscale}`}
                />
              </div>
            </div>
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="space-y-3">
                <p className={`text-[11px] font-bold tracking-[0.25em] uppercase ${theme.textMutedSub}`}>Program Overview</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] max-w-2xl">
                  <span className="font-serif block font-medium">Turn Creative Ideas</span>
                  <span className="font-serif block font-medium mt-1">Into <span className={`italic font-normal font-serif ${theme.accentText}`}>Fashion</span></span>
                  <span className="font-serif block font-medium mt-1">Businesses</span>
                </h2>
              </div>
              <p className={`text-sm sm:text-base leading-relaxed max-w-xl font-light transition-colors duration-300 ${theme.textMuted}`}>
                Our comprehensive program covers fashion industry fundamentals, brand creation, retail operations, 
                merchandising, marketing strategy, and entrepreneurship development. You&apos;ll learn to build 
                sustainable fashion businesses from concept to launch.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
            {overviewCards.map((card, idx) => (
              <div key={idx} className={`border rounded-2xl p-8 flex flex-col justify-start min-h-[220px] transition duration-300 ease-out group ${theme.cardBg} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardBgHover} ${theme.shadow}`}>
                <div className="mb-6 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-[#e6001a] shadow-[0_0_12px_rgba(230,0,0,0.5)] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="space-y-3 flex-grow flex flex-col justify-start">
                  <h3 className={`font-serif text-lg font-bold tracking-wide transition duration-200 leading-snug ${theme.textCardTitle}`}>{card.title}</h3>
                  <p className={`text-xs sm:text-[13px] leading-relaxed font-light transition-colors duration-300 ${theme.textCardDesc}`}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CRAFT. BUILD. LEAD. (COURSE HIGHLIGHTS) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] blur-[140px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
              <span className="font-serif font-medium">Craft.</span>{' '}
              <span className={`italic font-serif font-normal ${theme.accentText}`}>Build.</span>
              <span className="font-serif block font-medium mt-1">Lead.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {highlightsCards.map((card, idx) => (
              <div key={idx} className={`border rounded-[24px] p-8 min-h-[300px] flex flex-col justify-between transition duration-300 group ${theme.cardBgAlt} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardBgHover} ${theme.shadow}`}>
                <div className="space-y-6">
                  <div className="w-10 h-10 rounded-full bg-[#e6001a]/10 border border-[#e6001a]/20 flex items-center justify-center text-[#e6001a] transition duration-300 group-hover:bg-[#e6001a] group-hover:text-white group-hover:scale-105">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <h3 className={`font-serif text-xl md:text-2xl font-bold tracking-wide transition duration-200 leading-snug ${theme.textCardTitle}`}>{card.title}</h3>
                </div>
                <div className="space-y-6 mt-6">
                  <p className={`text-xs sm:text-[13px] md:text-sm font-light leading-relaxed transition-colors duration-300 ${theme.textCardDesc}`}>{card.description}</p>
                  <div className="w-8 h-8 rounded-full border border-neutral-300 dark:border-white/10 group-hover:border-[#e6001a] flex items-center justify-center text-neutral-500 dark:text-zinc-500 group-hover:text-[#e6001a] transition duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU'LL MASTER (CURRICULUM) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute top-0 left-1/4 w-[750px] h-[400px] blur-[140px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-left max-w-2xl mb-16 md:mb-24 space-y-4">
            <p className={`text-[10px] font-bold tracking-[0.3em] uppercase ${theme.textMutedSub}`}>Curriculum</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
              <span className="font-serif block font-medium">What You&apos;ll</span>
              <span className={`italic font-serif block font-normal mt-2 ${theme.accentText}`}>Master</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
            {semesters.map((sem, index) => (
              <div key={index} className={`border rounded-[24px] p-8 md:p-10 transition duration-300 ease-out group ${theme.cardBg} ${theme.cardBorder} hover:border-neutral-400 dark:hover:border-white/[0.07] ${theme.cardBgHover} ${theme.shadow}`}>
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-9 h-9 rounded-full bg-[#e6001a]/10 border border-[#e6001a]/20 text-[#e6001a] font-sans text-sm font-bold flex items-center justify-center transition duration-300 group-hover:bg-[#e6001a] group-hover:text-white group-hover:scale-105 flex-shrink-0">
                    {sem.number}
                  </div>
                  <h3 className={`font-serif text-xl md:text-2xl font-bold tracking-wide transition duration-200 ${theme.textCardTitle}`}>
                    {sem.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {sem.courses.map((course, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e6001a] mt-[7px] flex-shrink-0 opacity-80 shadow-[0_0_6px_rgba(230,0,0,0.6)]" />
                      <span className={`text-sm md:text-base font-medium tracking-wide group-hover:text-black dark:group-hover:text-zinc-300 transition duration-200 ${theme.textCardDesc}`}>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEARN BEYOND THE CLASSROOM */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[140px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
              <span className="font-serif block font-medium">Learn <span className={`italic font-normal font-serif ${theme.accentText}`}>Beyond</span></span>
              <span className="font-serif block mt-1">the Classroom</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {classroomCards.map((card, idx) => (
              <div key={idx} className={`border rounded-[24px] p-8 flex flex-col justify-start min-h-[260px] transition duration-300 ease-out group ${theme.cardBg} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardBgHover} ${theme.shadow}`}>
                <div className="mb-8 relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#e6001a]/10 scale-125 group-hover:scale-150 group-hover:bg-[#e6001a]/15 transition-all duration-300 pointer-events-none" />
                  <div className="w-6 h-6 rounded-full bg-[#e6001a] shadow-[0_0_16px_rgba(230,0,0,0.6)] transition-transform duration-300 group-hover:scale-105 relative z-10" />
                </div>
                <div className="space-y-4">
                  <h3 className={`font-serif text-lg md:text-xl font-bold tracking-wide group-hover:text-black dark:group-hover:text-white transition duration-200 leading-snug ${theme.textCardTitle}`}>{card.title}</h3>
                  <p className={`text-xs sm:text-[13px] font-light leading-relaxed transition-colors duration-300 ${theme.textCardDesc}`}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CAREER PATHWAYS */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] blur-[140px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
              <span className="font-serif font-medium">Career</span>
              <span className={`italic font-serif block font-normal mt-2 ${theme.accentText}`}>Pathways</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pathways.map((item, idx) => (
              <div key={idx} className={`border rounded-[24px] p-8 min-h-[240px] flex flex-col items-center justify-center text-center transition duration-300 ease-out group ${theme.cardBg} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardBgHover} ${theme.shadow}`}>
                <div className="mb-6 w-12 h-12 rounded-full bg-[#e6001a]/10 border border-[#e6001a]/20 flex items-center justify-center text-[#e6001a] transition-all duration-300 group-hover:bg-[#e6001a] group-hover:text-white group-hover:scale-105 shadow-[0_0_12px_rgba(230,0,0,0.1)] group-hover:shadow-[0_0_20px_rgba(230,0,0,0.4)]">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
                <h3 className={`font-serif text-xl font-bold tracking-wide group-hover:text-black dark:group-hover:text-white transition duration-200 leading-snug max-w-[180px] ${theme.textCardTitle}`}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BUILD NETWORKS. CREATE OPPORTUNITIES. */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute top-1/4 right-0 w-[600px] h-[400px] blur-[130px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-[500px] sm:h-[600px] w-full max-w-[500px] mx-auto lg:mx-0">
              <div className="space-y-4 flex flex-col justify-center">
                <div className={`relative h-[48%] rounded-[24px] overflow-hidden border shadow-2xl group transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
                  <Image 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" 
                    alt="Fashion retail workspace" 
                    fill
                    sizes="(max-width: 768px) 50vw, 250px"
                    className={`object-cover transition duration-700 ease-out group-hover:scale-105 ${theme.imageGrayscale}`}
                  />
                </div>
                <div className={`relative h-[48%] rounded-[24px] overflow-hidden border shadow-2xl group transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
                  <Image 
                    src="https://images.unsplash.com/photo-1537874686475-54313545367c?auto=format&fit=crop&w=600&q=80" 
                    alt="Fashion designer draping" 
                    fill
                    sizes="(max-width: 768px) 50vw, 250px"
                    className={`object-cover transition duration-700 ease-out group-hover:scale-105 ${theme.imageGrayscale}`}
                  />
                </div>
              </div>
              <div className="space-y-4 flex flex-col justify-center pt-8 lg:pt-12">
                <div className={`relative h-[48%] rounded-[24px] overflow-hidden border shadow-2xl group transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
                  <Image 
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80" 
                    alt="Technical fashion sketch" 
                    fill
                    sizes="(max-width: 768px) 50vw, 250px"
                    className={`object-cover transition duration-700 ease-out group-hover:scale-105 ${theme.imageGrayscale}`}
                  />
                </div>
                <div className={`relative h-[48%] rounded-[24px] overflow-hidden border shadow-2xl group transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
                  <Image 
                    src="https://images.unsplash.com/photo-1441944969893-c534c0148ff0?auto=format&fit=crop&w=600&q=80" 
                    alt="Boutique interior architecture" 
                    fill
                    sizes="(max-width: 768px) 50vw, 250px"
                    className={`object-cover transition duration-700 ease-out group-hover:scale-105 ${theme.imageGrayscale}`}
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8 text-left lg:pl-4">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
                  <span className="font-serif block font-medium">Build <span className={`italic font-normal font-serif ${theme.accentText}`}>Networks.</span></span>
                  <span className="font-serif block font-medium mt-1">Create Opportunities.</span>
                </h2>
                <p className={`text-sm sm:text-base font-light leading-relaxed pt-2 max-w-xl transition-colors duration-300 ${theme.textMuted}`}>
                  Connect with industry mentors, gain business exposure through partnerships with leading fashion brands, and receive startup guidance from successful entrepreneurs. Our extensive network provides you with the connections needed to succeed.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-xl">
                {stats.map((stat, idx) => (
                  <div key={idx} className={`border rounded-2xl p-6 sm:p-8 flex flex-col justify-center min-h-[130px] transition duration-300 ease-out group ${theme.cardBgAlt} ${theme.cardBorder} hover:border-neutral-400 dark:hover:border-white/[0.07] ${theme.cardBgHover} ${theme.shadow}`}>
                    <span className={`text-3xl sm:text-4xl font-serif font-semibold tracking-tight block mb-2 group-hover:scale-102 transition-transform origin-left duration-300 ${theme.accentText}`}>{stat.value}</span>
                    <span className={`text-xs sm:text-sm font-semibold tracking-wide leading-snug transition-colors duration-300 ${theme.textMutedSub} group-hover:text-black dark:group-hover:text-zinc-400`}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. START YOUR JOURNEY (ADMISSIONS) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute top-1/3 left-0 w-[600px] h-[350px] blur-[130px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-4 mb-20 md:mb-28 text-left">
            <p className={`text-[10px] font-bold tracking-[0.3em] uppercase ${theme.accentText}`}>Admissions</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
              <span className="font-serif block font-medium">Start Your</span>
              <span className={`italic font-serif block font-normal mt-2 ${theme.accentText}`}>Journey</span>
            </h2>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className={`hidden lg:block absolute top-[56px] left-[6%] right-[6%] h-[1px] pointer-events-none z-0 ${theme.timelineAxis}`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-16 lg:gap-y-0 relative z-10">
              {admissionSteps.map((step, idx) => (
                <div key={idx} className="relative group flex flex-col pt-7">
                  {idx !== admissionSteps.length - 1 && <div className="lg:hidden absolute bottom-[-40px] left-[28px] w-[1px] h-10 bg-[#e6001a]/30" />}
                  <div className="absolute top-0 left-6 lg:left-8 -translate-y-1/2 w-11 h-11 rounded-full bg-[#e6001a] text-white flex items-center justify-center font-sans text-xs font-semibold tracking-wider shadow-[0_4px_16px_rgba(230,0,0,0.35)] group-hover:scale-105 transition-all duration-300 relative z-20 cursor-default select-none">
                    {step.number}
                  </div>
                  <div className={`border rounded-2xl p-6 lg:p-8 pt-10 lg:pt-12 min-h-[170px] flex flex-col justify-start transition duration-300 ease-out group-hover:border-neutral-400 dark:group-hover:border-white/[0.06] ${theme.cardBg} ${theme.cardBorder} ${theme.cardBgHover} ${theme.shadow}`}>
                    <h3 className={`font-serif text-lg md:text-xl font-bold tracking-wide transition duration-200 leading-snug mb-3 group-hover:text-black dark:group-hover:text-white ${theme.textCardTitle}`}>{step.title}</h3>
                    <p className={`text-xs sm:text-[13px] font-light leading-relaxed transition-colors duration-300 ${theme.textCardDesc}`}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. STUDENT SUCCESS STORIES */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[140px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
              <span className="font-serif font-medium">Student</span>
              <span className={`italic font-serif block font-normal mt-2 ${theme.accentText}`}>Success Stories</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((item, idx) => (
              <div key={idx} className={`border rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[380px] transition duration-300 ease-out group ${theme.cardBg} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.cardBgHover} ${theme.shadow}`}>
                <div className="mb-8 relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border border-[#e6001a]/40 scale-110 pointer-events-none group-hover:scale-115 transition-transform duration-300" />
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#e6001a] z-10">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill
                      sizes="64px"
                      className="object-cover grayscale opacity-90 transition duration-500 group-hover:scale-105 group-hover:grayscale-0" 
                    />
                  </div>
                </div>
                <div className="flex-grow flex items-start">
                  <p className={`text-sm sm:text-base font-light leading-relaxed tracking-wide italic transition-colors duration-300 ${theme.textCardDesc}`}>{item.quote}</p>
                </div>
                <div className="mt-8 space-y-1">
                  <h3 className={`font-serif text-lg md:text-xl font-bold tracking-wide transition duration-200 group-hover:text-black dark:group-hover:text-white ${theme.textCardTitle}`}>{item.name}</h3>
                  <p className={`text-xs md:text-sm font-semibold transition-colors duration-300 ${theme.textMutedSub}`}>{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[140px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
              <span className="font-serif block font-medium">Frequently Asked</span>
              <span className={`italic font-serif block font-normal mt-2 ${theme.accentText}`}>Questions</span>
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`border rounded-[20px] overflow-hidden transition-all duration-300 ease-out ${theme.cardBg} ${theme.cardBorder} hover:border-neutral-400 dark:hover:border-white/[0.07] ${theme.shadow}`}>
                  <button onClick={() => toggleFAQ(idx)} className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left group focus:outline-none">
                    <span className={`text-sm md:text-base font-semibold tracking-wide transition duration-200 group-hover:text-black dark:group-hover:text-white ${theme.textCardTitle}`}>{faq.question}</span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.01] dark:border-white/5 border-neutral-300/60 flex items-center justify-center text-[#e6001a]/70 group-hover:text-[#e6001a] group-hover:border-[#e6001a]/10 transition-all duration-300 flex-shrink-0 ml-4">
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180 text-[#e6001a]' : 'rotate-0'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 border-t' : 'max-h-0 opacity-0 pointer-events-none'} ${theme.accordionLine}`}>
                    <div className={`px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm font-medium leading-relaxed transition-colors duration-300 ${theme.textCardDesc} ${theme.accordionAnswerBg}`}>{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. FINAL CALL TO ACTION */}
      <section className={`py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center min-h-[500px] transition-colors duration-300 ${theme.bgPage}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,0,26,0.08)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent dark:via-white/[0.03]" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.15]">
              <span className="font-serif font-medium">Your</span>{' '}
              <span className={`italic font-serif font-normal ${theme.accentText}`}>Fashion</span>
              <span className="font-serif block font-medium mt-1">Business</span>
              <span className="font-serif block mt-1">Starts Here.</span>
            </h2>
          </div>
          <p className={`text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto tracking-wide transition-colors duration-300 ${theme.textMuted}`}>
            Transform creativity into opportunity through business, branding and innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#e6001a] hover:bg-[#c90016] text-sm font-semibold tracking-wide rounded-full text-white transition duration-300 shadow-xl shadow-[#e6001a]/15 flex items-center justify-center gap-2 group">
              Apply For Admission
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className={`w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-wide rounded-full border transition duration-300 flex items-center justify-center gap-2 ${theme.btnSecondary} ${theme.shadow}`}>
              Download Prospectus
              <FileText className="w-4 h-4 opacity-50" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}