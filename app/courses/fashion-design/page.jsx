'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { ArrowDown, Sparkles, Compass, Globe, Diamond, Briefcase, Globe2, Quote } from 'lucide-react';

export default function FashionDesignProgramPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSemester, setActiveSemester] = useState(1);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Component-isolated standalone design system tokens matching Course_Fashion_Design.jpg
  const theme = {
    bgPage: isDark ? 'bg-[#050505]' : 'bg-[#fbfbfb]',
    bgHero: isDark ? 'bg-[#070707]' : 'bg-white',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textMuted: isDark ? 'text-gray-400' : 'text-neutral-600',
    textFootnote: isDark ? 'text-zinc-500' : 'text-neutral-500',
    textCardTitle: isDark ? 'text-zinc-100' : 'text-[#4A282A]',
    textCardDesc: isDark ? 'text-zinc-500' : 'text-[#4A282A]/90',

    // Core bounding boxes and interactive grids
    cardBg: isDark ? 'bg-[#0D0D0D]' : 'bg-[#F0C9CB]',
    cardBgAlt: isDark ? 'bg-[#0A0A0A]/60' : 'bg-[#F0C9CB]/40',
    cardBgMuted: isDark ? 'bg-[#0E0E0E]' : 'bg-[#F0C9CB]/60',
    cardBorder: isDark ? 'border-zinc-900/80' : 'border-[#E3B2B4]',
    cardBorderMuted: isDark ? 'border-zinc-900/40' : 'border-[#E3B2B4]/60',
    cardBorderHover: isDark ? 'hover:border-zinc-800' : 'hover:border-[#e6001a]/40',
    cardBgHover: isDark ? 'hover:bg-[#150f11]' : 'hover:bg-[#EBB4B6]',

    // Structural elements and vector frameworks
    imageFrame: isDark ? 'border-gray-900 bg-[#0d0d0d]' : 'border-neutral-200 bg-neutral-50',
    imageGrayscale: isDark ? 'grayscale brightness-[0.7] contrast-[1.1]' : 'brightness-100 contrast-[1.01]',
    timelineTrack: isDark ? 'bg-zinc-900/60' : 'bg-neutral-200',
    dividerLine: isDark ? 'border-zinc-950' : 'border-neutral-200',
    borderMuted: isDark ? 'border-zinc-900/40' : 'border-neutral-200',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20',

    // Action controllers
    btnSecondary: isDark
      ? 'border-gray-800 hover:border-gray-600 text-white bg-transparent'
      : 'border-neutral-300 hover:border-neutral-400 text-neutral-800 bg-white',
    btnCtaSecondary: isDark
      ? 'border-zinc-900 hover:border-zinc-700 bg-transparent text-zinc-300 hover:text-white'
      : 'border-neutral-300 hover:border-neutral-400 bg-white text-neutral-800',

    // Primary crimson identity accents
    accentRed: 'text-[#E31C3D]',
    accentBorder: 'border-[#E31C3D]/40',
    accentBg: 'bg-[#E31C3D]',
    accentPillBg: isDark ? 'bg-[#0E0607]' : 'bg-[#E31C3D]/10'
  };

  const semesters = {
    1: { title: 'Semester 1', subtitle: 'Design Foundations', courses: [{ id: '01', title: 'Fashion Illustration' }, { id: '02', title: 'Color Theory' }, { id: '03', title: 'Fashion History' }] },
    2: { title: 'Semester 2', subtitle: 'Technical Skills', courses: [{ id: '01', title: 'Garment Construction' }, { id: '02', title: 'Pattern Making I' }, { id: '03', title: 'Textile Science' }] },
    3: { title: 'Semester 3', subtitle: 'Advanced Concepts', courses: [{ id: '01', title: 'Fashion Styling' }, { id: '02', title: 'Draping Techniques' }, { id: '03', title: 'Computer Aided Design' }] },
    4: { title: 'Semester 4', subtitle: 'Collection Development', courses: [{ id: '01', title: 'Apparel Production' }, { id: '02', title: 'Trend Forecasting' }, { id: '03', title: 'Pattern Making II' }] },
    5: { title: 'Semester 5', subtitle: 'Brand & Business', courses: [{ id: '01', title: 'Fashion Merchandising' }, { id: '02', title: 'Entrepreneurship' }, { id: '03', title: 'Portfolio Design' }] },
    6: { title: 'Semester 6', subtitle: 'Industry Graduation', courses: [{ id: '01', title: 'Final Graduation Show' }, { id: '02', title: 'Industry Internship' }, { id: '03', title: 'Professional Practice' }] },
  };

  const whyFashionCards = [
    { icon: Sparkles, title: 'Creative Expression', description: 'Channel your artistic vision into wearable art that communicates culture and individuality.' },
    { icon: Compass, title: 'Trend Forecasting', description: 'Learn to read cultural signals and predict the aesthetic movements that shape global markets.' },
    { icon: Globe, title: 'Global Fashion Industry', description: 'Enter a $1.7 trillion industry spanning design, retail, manufacturing and media across every continent.' },
    { icon: Diamond, title: 'Luxury Brand Opportunities', description: "Work with the world's most prestigious fashion houses and build a career in high-end design." },
    { icon: Briefcase, title: 'Entrepreneurship Potential', description: 'Build your own label, establish a brand identity, and create a business around your creative vision.' },
    { icon: Globe2, title: 'International Career Paths', description: 'Fashion careers span Milan, Paris, New York and beyond — your skills are globally transferable.' }
  ];

  const skillsMatrix = [
    { id: '01', title: 'Fashion Illustration' }, { id: '02', title: 'Pattern Making' }, { id: '03', title: 'Draping' }, { id: '04', title: 'Garment Construction' }, { id: '05', title: 'Fashion Styling' },
    { id: '06', title: 'Textile Development' }, { id: '07', title: 'CAD Design' }, { id: '08', title: 'Trend Forecasting' }, { id: '09', title: 'Fashion Marketing' }, { id: '10', title: 'Portfolio Creation' },
  ];

  const studioFacilities = [
    { title: 'Fashion Design Studio', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80', gridSpanClass: 'md:col-span-2 lg:col-span-8', aspectClass: 'aspect-[21/9] lg:aspect-auto lg:h-[320px]' },
    { title: 'Pattern Making Lab', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80', gridSpanClass: 'md:col-span-1 lg:col-span-4', aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-[320px]' },
    { title: 'Garment Construction Lab', image: 'https://images.unsplash.com/photo-1528851567897-50f53227a403?auto=format&fit=crop&w=600&q=80', gridSpanClass: 'md:col-span-1 lg:col-span-6', aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-[280px]' },
    { title: 'CAD Lab', image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80', gridSpanClass: 'md:col-span-1 lg:col-span-6', aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-[280px]' },
    { title: 'Textile Studio', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80', gridSpanClass: 'md:col-span-2 lg:col-span-8', aspectClass: 'aspect-[21/9] lg:aspect-auto lg:h-[340px]' }
  ];

  const exposureFeatures = [
    { title: 'Fashion Workshops', description: 'Hands-on sessions with industry practitioners and master designers.' },
    { title: 'Industry Visits', description: 'Curated tours of design studios, export houses and fashion labels.' },
    { title: 'Fashion Shows', description: 'Live runway productions showcasing student collections to industry.' },
    { title: 'Guest Lectures', description: 'Talks by working designers, stylists, buyers and brand directors.' },
    { title: 'Portfolio Reviews', description: 'Expert critique sessions preparing you for professional presentations.' },
    { title: 'Industry Internships', description: 'Structured placements with fashion brands, retailers and ateliers.' },
  ];

  const processSteps = [
    { id: '01', title: 'Research' }, { id: '02', title: 'Sketch' }, { id: '03', title: 'Fabric Selection' }, { id: '04', title: 'Pattern Making' },
    { id: '05', title: 'Sampling' }, { id: '06', title: 'Construction' }, { id: '07', title: 'Styling' }, { id: '08', title: 'Runway Presentation' },
  ];

  const portfolioCollections = [
    { tag: 'Evening', title: 'Luxury Wear', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80', aspectClass: 'aspect-[3/4] lg:h-[480px]' },
    { tag: 'Urban', title: 'Streetwear', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80', aspectClass: 'aspect-[1/1] lg:h-[380px] lg:mt-12' },
    { tag: 'Eco', title: 'Sustainable Fashion', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80', aspectClass: 'aspect-[3/4] lg:h-[480px]' },
    { tag: 'Heritage', title: 'Ethnic Wear', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80', aspectClass: 'aspect-[3/4] lg:h-[480px] lg:-mt-12' },
    { tag: 'Bridal', title: 'Bridal Collections', image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80', aspectClass: 'aspect-[1/1] lg:h-[380px] lg:mt-4' },
    { tag: 'Avant-Garde', title: 'Experimental Fashion', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80', aspectClass: 'aspect-[3/4] lg:h-[480px] lg:-mt-12' }
  ];

  const careerPaths = [
    { id: '01', category: 'Design', title: 'Fashion Designer', description: 'Create original clothing and accessories for fashion houses, retail brands and private labels.' },
    { id: '02', category: 'Styling', title: 'Fashion Stylist', description: 'Curate looks for editorial shoots, celebrity clients, campaigns and brand communications.' },
    { id: '03', category: 'Retail', title: 'Apparel Merchandiser', description: 'Bridge design and commerce — managing collections from concept to store floor.' },
    { id: '04', category: 'Advisory', title: 'Fashion Consultant', description: 'Guide brands, retailers and individuals on style, direction and market positioning.' },
    { id: '05', category: 'Media', title: 'Costume Designer', description: 'Design wardrobes for film, television, theatre and digital productions.' },
    { id: '06', category: 'Retail', title: 'Visual Merchandiser', description: 'Create compelling in-store environments that tell brand stories through space and product.' },
    { id: '07', category: 'Business', title: 'Fashion Entrepreneur', description: 'Launch your own label, studio or fashion-tech venture with creative and business acumen.' },
    { id: '08', category: 'Materials', title: 'Textile Designer', description: 'Develop surface patterns, fabric structures and material innovations for fashion and interiors.' },
    { id: '09', category: 'Research', title: 'Trend Forecaster', description: 'Analyze cultural shifts and predict aesthetic directions for global fashion brands.' },
  ];

  const corporatePartners = [
    { category: 'Retail', name: 'Reliance Trends' }, { category: 'Heritage', name: 'Fabindia' }, { category: 'Designer', name: 'Manyavar' }, { category: 'Textile', name: 'Arvind Mills' },
    { category: 'Textile', name: 'Raymonds' }, { category: 'Retail', name: 'Shoppers Stop' }, { category: 'Retail', name: 'Max Fashion' }, { category: 'Brand', name: 'W for Woman' },
    { category: 'Designer', name: 'Biba' }, { category: 'Retail', name: 'Pantaloons' }, { category: 'Retail', name: 'Lifestyle Stores' }, { category: 'Luxury', name: 'Titan Company' },
    { category: 'Digital', name: 'Nykaa Fashion' }, { category: 'Digital', name: 'Myntra Studios' }, { category: 'Retail', name: 'Westside' }, { category: 'Luxury', name: 'Forest Essentials' },
  ];

  const alumniReviews = [
    { initials: 'PN', quote: '"PIFT gave me the technical foundation and creative confidence to lead collections at a national brand. The studio training was unlike anything I experienced elsewhere — the faculty treated us as professionals from day one."', name: 'Priya Nair', degree: 'B.Sc Fashion Design', role: 'Senior Designer, Fabindia' },
    { initials: 'AR', quote: '"The industry exposure and direct access to master designers redefined my perspective on garment construction. The placement team helped me secure my dream role right after my final graduation show."', name: 'Arjun Rao', degree: 'B.Sc Fashion Design', role: 'Assistant Stylist, Manyavar' },
    { initials: 'SM', quote: '"Launching my own private label wouldn\'t have been possible without the entrepreneurial modules integrated into our curriculum. Learning trend forecasting gave me an invaluable head start."', name: 'Sanya Mehta', degree: 'B.Sc Fashion Design', role: 'Founder, Atelier Label' }
  ];

  const programSpecs = [
    { label: 'Duration', value: '3 Years', subtext: '6 Semesters' },
    { label: 'Eligibility', value: '10+2', subtext: 'Any Stream' },
    { label: 'Mode', value: 'Full-Time', subtext: 'On Campus' },
    { label: 'Practical Training', value: '60%', subtext: 'Studio Hours' },
    { label: 'Portfolio Development', value: 'Semester 5-6', subtext: 'Mentored Process' },
    { label: 'Industry Exposure', value: 'Every Year', subtext: 'Visits & Workshops' },
    { label: 'Placement Support', value: 'Dedicated Cell', subtext: 'Career Services' },
  ];

  const admissionSteps = [
    { id: '01', title: 'Submit Application', description: 'Complete the online application form with personal details, academic records and a brief creative statement.' },
    { id: '02', title: 'Counseling Session', description: 'Meet our admissions team for a personal counseling session to understand your aspirations and program fit.' },
    { id: '03', title: 'Document Verification', description: 'Submit academic certificates, identity proof and portfolio materials for formal verification.' },
    { id: '04', title: 'Admission Confirmation', description: 'Receive your official admission letter and complete the enrollment formalities and fee payment.' },
    { id: '05', title: 'Begin Learning', description: 'Start your fashion design journey with orientation, studio induction and your first semester.' },
  ];

  return (
    <div className={`w-full font-sans antialiased selection:bg-[#E31C3D] selection:text-white overflow-x-hidden transition-colors duration-300 ${theme.bgPage} ${theme.textMain}`}>
      
      {/* 1. HERO MAIN STACK SECTION */}
      <header className={`min-h-screen flex flex-col justify-between border-b transition-colors duration-300 ${theme.bgHero} ${theme.dividerLine}`}>
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 lg:px-16 pt-12 pb-24 min-h-screen flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
            <div className="lg:col-span-7 space-y-8 z-10 text-left">
              <div className={`inline-block border px-3 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase ${theme.accentBorder} ${theme.accentRed}`}>
                <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle ${theme.accentBg}`}></span>
                Fashion Design Program
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-normal leading-[1.08] tracking-tight">
                <span className={`block font-serif ${theme.textMain}`}>Design.</span>
                <span className={`block font-serif ${theme.textMain}`}>Create.</span>
                <span className={`block font-serif italic mt-1 ${theme.accentRed}`}>Influence</span>
                <span className={`block font-serif italic ${theme.accentRed}`}>Fashion.</span>
              </h1>
              <p className={`text-sm sm:text-base max-w-xl leading-relaxed font-light tracking-wide transition-colors duration-300 ${theme.textMuted}`}>
                Master fashion illustration, garment construction, pattern making, textile studies, fashion styling and digital fashion technologies through an industry-oriented learning experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 max-w-md sm:max-w-none">
                <button className={`text-white text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 transition-colors duration-300 ${theme.accentBg} hover:bg-[#c21430]`}>
                  Apply Now
                </button>
                <button className={`text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 border ${theme.btnSecondary}`}>
                  Download Brochure
                </button>
                <button className={`sm:hidden text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 border ${theme.btnSecondary}`}>
                  Book Career Counseling
                </button>
              </div>
              <div className="hidden sm:block pt-1">
                <button className={`text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 border ${theme.btnSecondary}`}>
                  Book Career Counseling
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end w-full pt-12 lg:pt-0">
              <div className={`absolute inset-0 border transform translate-x-4 translate-y-4 pointer-events-none hidden lg:block ${theme.borderMuted}`} />
              <div className={`relative w-full max-w-[420px] aspect-[3/4] border p-0.5 transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
                <Image 
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80" 
                  alt="Runway Model" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                  className={`object-cover ${theme.imageGrayscale}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute -bottom-8 -right-4 w-24 h-24 border border-[#E31C3D]/20 hidden sm:block pointer-events-none" />
              </div>
            </div>
          </div>
          <div className={`border-t pt-12 mt-12 lg:mt-0 ${theme.dividerLine}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:max-w-3xl text-left">
              <div className="space-y-1"><div className={`text-2xl sm:text-3xl font-serif font-semibold ${theme.accentRed}`}>3 Years</div><div className={`text-[11px] uppercase tracking-wider font-bold ${theme.textFootnote}`}>Degree Program</div></div>
              <div className="space-y-1"><div className={`text-2xl sm:text-3xl font-serif font-semibold ${theme.accentRed}`}>97%</div><div className={`text-[11px] uppercase tracking-wider font-bold ${theme.textFootnote}`}>Placement Success</div></div>
              <div className="space-y-1"><div className={`text-2xl sm:text-3xl font-serif font-semibold ${theme.accentRed}`}>500+</div><div className={`text-[11px] uppercase tracking-wider font-bold ${theme.textFootnote}`}>Industry Projects</div></div>
              <div className="space-y-1"><div className={`text-2xl sm:text-3xl font-serif font-semibold ${theme.accentRed}`}>25+</div><div className={`text-[11px] uppercase tracking-wider font-bold ${theme.textFootnote}`}>Years Legacy</div></div>
            </div>
            <div className="flex flex-col items-center justify-center pt-12 md:pt-4 animate-pulse">
              <span className={`text-[10px] uppercase tracking-[0.3em] mb-2 font-medium ${theme.textFootnote}`}>Scroll</span>
              <div className="h-8 w-[1px] bg-gradient-to-b from-neutral-400 dark:from-gray-600 to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. COURSE NARRATIVE OVERVIEW */}
      <section className={`py-24 px-6 sm:px-12 lg:px-20 border-b transition-colors duration-300 ${theme.bgPage} ${theme.dividerLine}`}>
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 h-full auto-rows-fr relative">
            <div className="absolute -left-4 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-[#E31C3D]/40 to-transparent hidden lg:block" />
            <div className={`relative overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[320px] rounded-xl border transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
              <Image 
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80" 
                alt="Sketches" 
                fill
                sizes="(max-width: 1024px) 50vw, 300px"
                className="object-cover" 
              />
            </div>
            <div className={`relative overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[280px] lg:mt-8 rounded-xl border transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
              <Image 
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80" 
                alt="Textiles" 
                fill
                sizes="(max-width: 1024px) 50vw, 300px"
                className="object-cover" 
              />
            </div>
            <div className={`relative overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[280px] lg:-mt-4 rounded-xl border transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
              <Image 
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80" 
                alt="Tools" 
                fill
                sizes="(max-width: 1024px) 50vw, 300px"
                className="object-cover" 
              />
            </div>
            <div className={`relative overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[320px] lg:-mt-14 rounded-xl border transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
              <Image 
                src="https://images.unsplash.com/photo-1528851567897-50f53227a403?auto=format&fit=crop&w=600&q=80" 
                alt="Threads" 
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover" 
              />
            </div>
          </div>
          <div className="lg:col-span-6 space-y-8 lg:pl-4 text-left">
            <div className={`text-[11px] font-semibold tracking-[0.25em] uppercase ${theme.accentRed}`}>Course Overview</div>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[1.1] tracking-tight">
              <span className="block font-serif">Fashion Is More</span>
              <span className="block font-serif">Than Clothing.</span>
              <span className={`block font-serif italic mt-1 ${theme.accentRed}`}>It&apos;s Identity.</span>
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed font-light tracking-wide max-w-xl transition-colors duration-300 ${theme.textDescription}`}>
              The Fashion Design program equips students with creative, technical and professional skills required to build successful careers in fashion design, styling, apparel production, merchandising and entrepreneurship. Students learn through practical studio experiences, design projects and industry interactions.
            </p>
            <div className="pt-6 space-y-6">
              <h3 className={`text-[11px] font-bold tracking-[0.2em] uppercase border-b pb-3 ${theme.borderMuted}`}>Course Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {['Fashion Illustration', 'Pattern Making', 'Garment Construction', 'Textile Science', 'Fashion Styling', 'Fashion CAD', 'Portfolio Development', 'Industry Internship'].map((hl, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm font-medium transition-colors duration-300">
                    <span className={`w-4 h-[1px] ${theme.accentBg}`} />
                    <span className={isDark ? 'text-[#e5e5e5]' : 'text-neutral-800'}>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE FASHION VALUES GRID */}
      <section className={`py-24 px-6 sm:px-12 lg:px-20 border-b transition-colors duration-300 ${theme.bgPage} ${theme.dividerLine}`}>
        <div className="max-w-7xl w-full mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className={`text-[10px] font-bold tracking-[0.3em] uppercase block ${theme.accentRed}`}>Why Choose Fashion Design</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight max-w-4xl mx-auto leading-tight">Create What The World Wears</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFashionCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div key={index} className={`border p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between min-h-[260px] cursor-default ${theme.cardBg} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.shadow}`}>
                  <div className="space-y-6 text-left">
                    <div className="text-neutral-500 dark:text-zinc-600 group-hover:text-[#E31C3D] transition-colors duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.25]" />
                    </div>
                    <h3 className={`text-lg sm:text-xl font-bold tracking-wide ${theme.textCardTitle}`}>{card.title}</h3>
                  </div>
                  <p className={`text-sm leading-relaxed tracking-wide font-light mt-4 transition-colors duration-300 ${theme.textCardDesc}`}>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TRANSFORMATION JOURNEY INTERACTIVE CURRICULUM */}
      <section className={`py-24 px-6 sm:px-12 lg:px-20 border-b transition-colors duration-300 ${theme.bgPage} ${theme.dividerLine}`}>
        <div className="max-w-7xl w-full mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className={`text-[10px] font-bold tracking-[0.35em] uppercase block ${theme.accentRed}`}>Curriculum</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight max-w-4xl mx-auto leading-tight">Your Transformation Journey</h2>
          </div>
          <div className="w-full">
            <div className={`overflow-x-auto no-scrollbar border-b ${theme.borderMuted}`}>
              <div className="flex space-x-2 md:space-x-0 md:grid md:grid-cols-6 min-w-[760px] md:min-w-full">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <button key={num} onClick={() => setActiveSemester(num)} className={`text-center py-5 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative ${activeSemester === num ? 'text-[#E31C3D]' : 'text-zinc-500 hover:text-zinc-300'}`}>
                    Semester {num}
                    {activeSemester === num && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E31C3D] z-10" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={`border p-8 sm:p-12 lg:p-16 relative transition-colors duration-300 rounded-2xl ${theme.cardBgAlt} ${theme.cardBorder} ${theme.shadow}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 space-y-4 text-left">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#E31C3D] block">Semester {activeSemester}</span>
                <h3 className={`text-3xl sm:text-4xl lg:text-[42px] font-serif font-semibold tracking-tight leading-tight max-w-sm ${theme.textCardTitle}`}>{semesters[activeSemester].subtitle}</h3>
                <div className="w-10 h-[2px] bg-[#E31C3D] pt-1" />
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {semesters[activeSemester].courses.map((course) => (
                  <div key={course.id} className={`border p-8 flex flex-col justify-between aspect-square transition-all duration-300 group rounded-xl ${theme.cardBgMuted} ${theme.cardBorderMuted} ${theme.cardBorderHover}`}>
                    <span className="font-mono text-xs text-[#E31C3D]/80 tracking-widest font-semibold">{course.id}</span>
                    <h4 className={`text-sm sm:text-[15px] font-semibold tracking-wide group-hover:text-black dark:group-hover:text-white transition-colors duration-200 leading-snug text-left ${theme.textCardTitle}`}>{course.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-4 hidden md:block">
            <div className={`w-full h-[2px] relative ${theme.timelineTrack}`}>
              <div className="absolute top-0 bottom-0 left-0 bg-[#E31C3D] transition-all duration-500 ease-out" style={{ width: `${(activeSemester / 6) * 100}%` }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SKILLS MASTERY GRID */}
      <section className={`py-24 px-6 sm:px-12 lg:px-20 border-b transition-colors duration-300 ${theme.bgPage} ${theme.dividerLine}`}>
        <div className="max-w-7xl w-full mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className={`text-[10px] font-bold tracking-[0.35em] uppercase block ${theme.accentRed}`}>Skills Mastery</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight max-w-4xl mx-auto leading-tight">Skills That Build Fashion Careers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillsMatrix.map((skill) => (
              <div key={skill.id} className={`border p-8 flex flex-col justify-center items-center text-center aspect-[4/3] sm:aspect-square relative group transition-all duration-300 rounded-xl ${theme.cardBgAlt} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.shadow}`}>
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#E31C3D]/40 group-hover:bg-[#E31C3D] transition-colors duration-300" />
                <div className="space-y-4">
                  <span className="block font-mono text-xs text-[#E31C3D] tracking-widest font-semibold">{skill.id}</span>
                  <h3 className={`text-sm sm:text-[15px] font-semibold tracking-wide transition-colors duration-200 leading-snug px-2 group-hover:text-black dark:group-hover:text-white ${theme.textCardTitle}`}>{skill.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STUDIO ENVIRONMENT INFRASTRUCTURE */}
      <section className={`py-24 px-6 sm:px-12 lg:px-20 border-b transition-colors duration-300 ${theme.bgPage} ${theme.dividerLine}`}>
        <div className="max-w-7xl w-full mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className={`text-[10px] font-bold tracking-[0.35em] uppercase block ${theme.accentRed}`}>Facilities</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight max-w-4xl mx-auto leading-tight">Learn Inside Professional Design Studios</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {['Live Projects', 'Industry Tools', 'Hands-On Learning', 'Creative Workshops'].map((tag, idx) => (
              <span key={idx} className={`border px-5 py-2.5 text-[10px] sm:text-xs font-semibold tracking-widest uppercase transition-colors duration-300 rounded-full ${theme.cardBorder} ${theme.accentPillBg} ${theme.accentRed}`}>{tag}</span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 pt-8">
            {studioFacilities.map((facility, index) => (
              <div key={index} className={`relative overflow-hidden group border rounded-2xl transition-all duration-300 ${facility.gridSpanClass} ${facility.aspectClass} ${theme.imageFrame} ${theme.shadow}`}>
                <Image 
                  src={facility.image} 
                  alt={facility.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 750px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-103 brightness-90 contrast-[1.01]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-left">
                  <h3 className="text-sm sm:text-base font-semibold tracking-wide text-white group-hover:text-neutral-100 transition-colors duration-200">{facility.title}</h3>
                </div>
              </div>
            ))}
            <div className="hidden lg:block lg:col-span-4" />
          </div>
        </div>
      </section>

      {/* 7. INDUSTRY EXPOSURE & PLACEMENT BADGE */}
      <section className={`py-24 px-6 sm:px-12 lg:px-20 border-b transition-colors duration-300 ${theme.bgPage} ${theme.dividerLine}`}>
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start w-full">
            <div className="absolute top-0 right-4 lg:right-12 w-20 h-20 border border-[#E31C3D]/20 hidden sm:block pointer-events-none" />
            <div className={`relative w-full max-w-[480px] aspect-[4/5] p-0.5 border rounded-[32px] overflow-hidden transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
              <Image 
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80" 
                alt="Runway" 
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover" 
              />
              <div className="absolute bottom-6 left-6 bg-[#E31C3D] text-white p-6 sm:p-8 md:p-10 max-w-[180px] sm:max-w-[220px] aspect-square flex flex-col justify-center rounded-2xl shadow-xl">
                <span className="block font-serif text-3xl sm:text-4xl md:text-[44px] font-normal leading-none tracking-tight">97%</span>
                <span className="block text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase text-white/90 mt-2 leading-tight">Placement Rate</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-10 text-left">
            <div className="space-y-3">
              <span className={`text-[10px] font-bold tracking-[0.3em] uppercase block ${theme.accentRed}`}>Industry Exposure</span>
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight leading-[1.1]">Learn Beyond <br className="hidden sm:inline" />The Classroom</h2>
              <p className={`text-sm font-light tracking-wide max-w-xl pt-2 transition-colors duration-300 ${theme.textMuted}`}>PIFT emphasizes industry exposure and practical training to prepare students for professional careers in fashion.</p>
            </div>
            <div className="space-y-4 max-w-2xl">
              {exposureFeatures.map((feature, idx) => (
                <div key={idx} className={`border p-5 sm:p-6 flex items-start space-x-4 transition-all duration-300 rounded-2xl group ${theme.cardBgAlt} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.shadow}`}>
                  <div className="w-[2px] h-8 bg-[#E31C3D] self-start mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-1">
                    <h3 className={`text-[15px] font-bold tracking-wide transition-colors duration-200 group-hover:text-black dark:group-hover:text-white ${theme.textCardTitle}`}>{feature.title}</h3>
                    <p className={`text-xs sm:text-sm font-light leading-relaxed tracking-wide transition-colors duration-300 ${theme.textCardDesc}`}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONCEPT TO RUNWAY STEP TIMELINE */}
      <section className={`py-24 px-6 sm:px-12 lg:px-16 border-b transition-colors duration-300 ${theme.bgPage} ${theme.dividerLine}`}>
        <div className="max-w-7xl w-full mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className={`text-[10px] font-bold tracking-[0.35em] uppercase block ${theme.accentRed}`}>Design Process</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight max-w-4xl mx-auto leading-tight">From Concept To Runway</h2>
          </div>
          <div className="w-full overflow-x-auto pb-6 no-scrollbar">
            <div className="flex items-start justify-between min-w-[1024px] lg:min-w-full px-4 relative">
              <div className="absolute top-[38px] left-[6%] right-[6%] h-[1px] bg-gradient-to-r from-[#E31C3D]/20 via-[#E31C3D]/60 to-[#E31C3D]/20 z-0 hidden sm:block" />
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group relative w-full">
                  <div className={`w-[54px] h-[54px] sm:w-[62px] sm:h-[62px] border flex items-center justify-center transition-colors duration-300 relative rounded-xl ${theme.cardBg} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.shadow}`}>
                    <span className="font-mono text-xs sm:text-[13px] text-[#E31C3D] tracking-widest font-bold relative z-10">{step.id}</span>
                  </div>
                  <div className="space-y-2 mt-4 max-w-[120px] mx-auto">
                    <h3 className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 ${theme.textCardTitle}`}>{step.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. PORTFOLIO SHOWCASE LOOKBOOK */}
      <section className={`py-24 px-6 sm:px-12 lg:px-20 border-b transition-colors duration-300 ${theme.bgPage} ${theme.dividerLine}`}>
        <div className="max-w-7xl w-full mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className={`text-[10px] font-bold tracking-[0.35em] uppercase block ${theme.accentRed}`}>Student Work</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight max-w-4xl mx-auto leading-tight">Student Creations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-6 items-start pt-4">
            {portfolioCollections.map((item, index) => (
              <div key={index} className={`relative overflow-hidden group w-full flex flex-col justify-end border rounded-2xl transition-all duration-300 ${item.aspectClass} ${theme.imageFrame} ${theme.shadow}`}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-103 brightness-[0.98]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                <div className="relative z-10 p-6 sm:p-8 space-y-2 mt-auto text-left">
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#E31C3D] block">
                    {item.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold tracking-wide text-white group-hover:text-neutral-100 transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CAREER OPPORTUNITIES PATHS */}
      <section className={`py-24 px-6 sm:px-12 lg:px-20 border-b transition-colors duration-300 ${theme.bgPage} ${theme.dividerLine}`}>
        <div className="max-w-7xl w-full mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className={`text-[10px] font-bold tracking-[0.35em] uppercase block ${theme.accentRed}`}>Career Paths</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight max-w-4xl mx-auto leading-tight">Where Fashion Takes You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((item) => (
              <div key={item.id} className={`border p-8 sm:p-10 flex flex-col justify-between min-h-[240px] transition-all duration-300 rounded-2xl ${theme.cardBgAlt} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.shadow}`}>
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31C3D]">{item.category}</span>
                    <span className="font-mono text-[11px] text-zinc-500 font-semibold tracking-widest">{item.id}</span>
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold tracking-wide transition-colors duration-200 ${theme.textCardTitle}`}>{item.title}</h3>
                </div>
                <p className={`text-sm leading-relaxed tracking-wide font-light mt-6 text-left transition-colors duration-300 ${theme.textCardDesc}`}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. RECRUITERS GRID LINK WALL */}
      <section className={`py-24 px-6 sm:px-12 lg:px-20 border-b transition-colors duration-300 ${theme.bgPage} ${theme.dividerLine}`}>
        <div className="max-w-7xl w-full mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className={`text-[10px] font-bold tracking-[0.35em] uppercase block ${theme.accentRed}`}>Industry Network</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight max-w-4xl mx-auto leading-tight">Industry Connections That Matter</h2>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden border rounded-2xl ${theme.borderMuted} ${theme.shadow}`}>
            {corporatePartners.map((partner, index) => {
              const isLastInRowLg = (index + 1) % 4 === 0;
              const isLastRowLg = index >= corporatePartners.length - 4;
              const isLastInRowSm = (index + 1) % 2 === 0;
              const isLastRowSm = index >= corporatePartners.length - 2;

              return (
                <div 
                  key={index} 
                  className={`px-8 py-14 flex flex-col justify-center items-center text-center transition-all duration-300 group relative border-b sm:border-b-0 sm:border-r ${
                    isDark ? 'bg-[#050505] hover:bg-[#0A0A0A]' : 'bg-white hover:bg-neutral-50/60'
                  } ${isLastInRowSm ? 'sm:border-r-0' : theme.dividerLine} ${!isLastRowSm ? 'sm:border-b ' + theme.dividerLine : ''} ${
                    isLastInRowLg ? 'lg:border-r-0' : theme.dividerLine
                  } ${!isLastRowLg ? 'lg:border-b ' + theme.dividerLine : 'lg:border-b-0'}`}
                >
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#E31C3D]/0 to-transparent group-hover:via-[#E31C3D]/40 transition-all duration-300" />
                  <div className="space-y-3">
                    <span className="block font-mono text-[10px] tracking-[0.25em] uppercase text-[#E31C3D] font-semibold">{partner.category}</span>
                    <h3 className={`text-[17px] sm:text-[18px] font-bold tracking-wide transition-colors duration-200 leading-snug ${theme.textCardTitle}`}>{partner.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. ALUMNI SUCCESS CAROUSEL */}
      <section className={`py-24 px-6 sm:px-12 lg:px-20 border-b transition-colors duration-300 ${theme.bgPage} ${theme.dividerLine}`}>
        <div className="max-w-6xl w-full mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className={`text-[10px] font-bold tracking-[0.35em] uppercase block ${theme.accentRed}`}>Alumni</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight max-w-4xl mx-auto leading-tight">From Student To Professional</h2>
          </div>
          <div className={`border p-8 sm:p-12 lg:p-16 relative max-w-5xl mx-auto min-h-[380px] flex items-center transition-all duration-300 rounded-2xl ${theme.cardBgAlt} ${theme.cardBorder} ${theme.shadow}`}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start w-full relative">
              <div className="md:col-span-3 flex flex-col items-center md:items-start relative group">
                <Quote className="absolute -top-6 -left-6 w-12 h-12 text-zinc-400/20 dark:text-zinc-900/40 transform -rotate-12 pointer-events-none stroke-[1]" />
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#E31C3D] flex items-center justify-center relative z-10 select-none rounded-xl shadow-md">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">{alumniReviews[activeTestimonial].initials}</span>
                </div>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#E31C3D] to-transparent ml-12 hidden md:block" />
              </div>
              <div className="md:col-span-9 space-y-8 flex flex-col justify-between h-full pt-2 md:pt-0 text-left">
                <p className={`font-serif italic font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-wide transition-colors duration-300 ${theme.textCardTitle}`}>
                  {alumniReviews[activeTestimonial].quote}
                </p>
                <div className={`space-y-1.5 pt-4 border-t max-w-xs ${theme.borderMuted}`}>
                  <h3 className={`text-base font-bold tracking-wide ${theme.textCardTitle}`}>{alumniReviews[activeTestimonial].name}</h3>
                  <span className="block font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[#E31C3D] font-semibold uppercase">{alumniReviews[activeTestimonial].degree}</span>
                  <span className={`block text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 ${theme.textFootnote}`}>{alumniReviews[activeTestimonial].role}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 pt-4">
            {alumniReviews.map((_, index) => (
              <button key={index} onClick={() => setActiveTestimonial(index)} className={`h-1.5 transition-all duration-300 ${activeTestimonial === index ? 'w-8 bg-[#E31C3D]' : 'w-2 bg-neutral-300 dark:bg-zinc-800 hover:bg-zinc-400'}`} aria-label={`Go to slide ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* 13. ASSYMETRIC PROGRAM DETAILS BOXES */}
      <section className={`py-24 px-6 sm:px-12 lg:px-20 border-b transition-colors duration-300 ${theme.bgPage} ${theme.dividerLine}`}>
        <div className="max-w-7xl w-full mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className={`text-[10px] font-bold tracking-[0.35em] uppercase block ${theme.accentRed}`}>Program Information</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight max-w-4xl mx-auto leading-tight">Program Details</h2>
            <div className="max-w-xl mx-auto space-y-1 pt-2">
              <p className={`text-sm font-medium tracking-wide leading-relaxed transition-colors duration-300 ${theme.textFootnote}`}>PIFT offers Fashion Design pathways from diploma to degree-level programs.</p>
              <p className={`text-sm font-medium tracking-wide leading-relaxed transition-colors duration-300 ${theme.textFootnote}`}>Eligibility is generally based on 10+2 qualifications across all streams.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
            {programSpecs.map((item, index) => (
              <div key={index} className={`border p-8 sm:p-10 flex flex-col justify-between aspect-[4/3] relative group transition-all duration-300 rounded-2xl ${theme.cardBgAlt} ${theme.cardBorder} hover:border-[#E31C3D]/60 ${theme.shadow}`}>
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#E31C3D]/30 group-hover:bg-[#E31C3D] transition-colors duration-300" />
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase text-left transition-colors duration-300 ${theme.textFootnote}`}>{item.label}</span>
                <div className="space-y-2 mt-auto text-left">
                  <h3 className={`text-2xl sm:text-3xl font-serif font-semibold tracking-wide transition-colors duration-200 group-hover:text-black dark:group-hover:text-white ${theme.textCardTitle}`}>{item.value}</h3>
                  <p className="text-[#E31C3D] font-mono text-[11px] tracking-wider font-semibold uppercase">{item.subtext}</p>
                </div>
              </div>
            ))}
            <div className="hidden lg:block lg:col-span-1" />
          </div>
        </div>
      </section>

      {/* 14. VERTICAL ADMISSIONS TIMELINE */}
      <section className={`py-24 px-6 sm:px-12 lg:px-20 border-b transition-colors duration-300 ${theme.bgPage} ${theme.dividerLine}`}>
        <div className="max-w-4xl w-full mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className={`text-[10px] font-bold tracking-[0.35em] uppercase block ${theme.accentRed}`}>Admissions</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight max-w-4xl mx-auto leading-tight">Start Your Journey</h2>
          </div>
          <div className="relative max-w-3xl mx-auto pl-4 sm:pl-8">
            <div className="absolute top-10 bottom-10 left-[43px] sm:left-[51px] w-[1px] bg-gradient-to-b from-[#E31C3D] via-[#E31C3D]/40 to-[#E31C3D]/10 z-0 hidden sm:block" />
            <div className="space-y-12 sm:space-y-10 relative z-10">
              {admissionSteps.map((step) => (
                <div key={step.id} className="flex flex-col sm:flex-row items-start sm:space-x-12 group text-left">
                  <div className={`w-[54px] h-[54px] sm:w-[62px] sm:h-[62px] border flex items-center justify-center transition-colors duration-300 shrink-0 mb-4 sm:mb-0 relative rounded-xl ${theme.cardBg} ${theme.cardBorder} ${theme.shadow}`}>
                    <div className="absolute inset-[1px] bg-[#0E0607]/20" />
                    <span className="font-mono text-xs sm:text-[13px] text-[#E31C3D] tracking-widest font-bold relative z-10">{step.id}</span>
                  </div>
                  <div className={`space-y-2 pt-0.5 sm:pt-2 max-w-2xl border-l pl-4 sm:pl-0 sm:border-l-0 ${theme.borderMuted}`}>
                    <h3 className={`text-lg sm:text-xl font-bold tracking-wide transition-colors duration-200 group-hover:text-black dark:group-hover:text-white ${theme.textCardTitle}`}>{step.title}</h3>
                    <p className={`text-sm font-light leading-relaxed tracking-wide transition-colors duration-300 ${theme.textDescription}`}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 15. CLOSING BRAND CALL TO ACTION WITH RADIAL AURA */}
      <section className={`min-h-screen flex flex-col justify-center items-center py-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden transition-colors duration-300 ${theme.bgHero}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-[#E31C3D]/80 to-transparent" />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[150px] sm:h-[200px] blur-[120px] rounded-full pointer-events-none ${theme.accentGlow}`} />
        <div className="max-w-4xl w-full text-center space-y-10 relative z-10">
          <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#E31C3D] block">Pinnacle Institute of Fashion Technology</span>
          <h2 className="text-5xl sm:text-6xl lg:text-[72px] font-normal leading-[1.05] tracking-tight">
            <span className={`block font-serif ${theme.textMain}`}>Your Fashion Journey</span>
            <span className="block font-serif italic text-[#E31C3D] mt-2">Starts Here.</span>
          </h2>
          <p className={`text-sm sm:text-base font-light tracking-wide max-w-xl mx-auto leading-relaxed transition-colors duration-300 ${theme.textDescription}`}>Join the next generation of designers, stylists and creative innovators.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 max-w-md sm:max-w-none mx-auto w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#E31C3D] hover:bg-[#c21430] text-white text-xs font-bold tracking-[0.18em] uppercase px-10 py-4.5 rounded-none h-[52px]">Apply Now</button>
            <button className={`w-full sm:w-auto border text-xs font-bold tracking-[0.18em] uppercase px-10 py-4.5 rounded-none h-[52px] transition-all duration-300 ${theme.btnCtaSecondary} ${theme.shadow}`}>Download Brochure</button>
            <button className={`w-full sm:w-auto border text-xs font-bold tracking-[0.18em] uppercase px-10 py-4.5 rounded-none h-[52px] transition-all duration-300 ${theme.btnCtaSecondary} ${theme.shadow}`}>Book Campus Visit</button>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-t from-[#E31C3D]/80 to-transparent" />
      </section>

    </div>
  );
}