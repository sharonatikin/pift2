'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { 
  ArrowRight, 
  Compass, 
  Target, 
  Award, 
  BookOpen, 
  Layers, 
  Users, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Square, 
  Quote, 
  Download, 
  Calendar,
  ArrowUpRight 
} from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: '25+', label: 'YEARS OF LEGACY' },
  { value: '12K+', label: 'GRADUATES' },
  { value: '97%', label: 'PLACEMENT SUCCESS' },
  { value: '38+', label: 'INDUSTRY COLLABORATIONS' },
];

const timelineData = [
  { year: '2001', title: 'Foundation', description: 'PIFT established with a vision to bridge creativity and industry.' },
  { year: '2008', title: 'Expansion of Programs', description: 'Diversified into interior, textile and design disciplines.' },
  { year: '2015', title: 'Industry Recognition', description: 'Received national accreditation and industry partnerships.' },
  { year: '2020', title: 'Innovation & Digital Learning', description: 'Integrated technology-driven, digital-first pedagogy.' },
  { year: '2026', title: 'Global Design Vision', description: 'Expanding globally with world-class creative education.' },
];

const statsData = [
  { number: '12K+', label: 'ALUMNI NETWORK' },
  { number: '38+', label: 'INDUSTRY PARTNERS' },
  { number: '97%', label: 'PLACEMENT RATE' },
  { number: '25', label: 'YEARS LEGACY' },
  { number: '500+', label: 'INDUSTRY PROJECTS' },
  { number: '100+', label: 'WORKSHOPS ANNUALLY' },
];

const features = [
  { icon: BookOpen, title: 'Industry-Oriented Curriculum', description: 'Courses designed in collaboration with leading industry professionals.' },
  { icon: Layers, title: 'Practical Learning Environment', description: 'State-of-the-art studios, labs and workshops for hands-on experience.' },
  { icon: Users, title: 'Experienced Faculty', description: 'Learn from practitioners with decades of industry and academic expertise.' },
  { icon: Globe, title: 'Global Exposure', description: 'International workshops, collaborations and study tours.' },
  { icon: Briefcase, title: 'Professional Development', description: 'Portfolio building, soft skills and industry readiness programs.' },
  { icon: GraduationCap, title: 'Career Assistance', description: 'Dedicated placement cell with 97% success rate across top firms.' },
];

const ecosystemNodes = [
  { title: 'Fashion Design', top: '0%', left: '50%', x2: '50%', y2: '0%' },
  { title: 'Interior Design', top: '35%', left: '100%', x2: '100%', y2: '35%' },
  { title: 'Textile Design', top: '75%', left: '100%', x2: '100%', y2: '75%' },
  { title: 'Fashion Styling', top: '100%', left: '50%', x2: '50%', y2: '100%' },
  { title: 'Design Management', top: '75%', left: '0%', x2: '0%', y2: '75%' },
  { title: 'Visual Communication', top: '35%', left: '0%', x2: '0%', y2: '35%' },
];

const galleryItems = [
  { title: 'Fashion Studios', imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800', aspectClass: 'aspect-[4/3] md:aspect-square lg:aspect-[1.15/1]' },
  { title: 'CAD Labs', imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600', aspectClass: 'aspect-square' },
  { title: 'Textile Labs', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600', aspectClass: 'aspect-square' },
  { title: 'Seminar Halls', imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600', aspectClass: 'aspect-square' },
  { title: 'Design Workshops', imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600', aspectClass: 'aspect-square' },
];

const learningSteps = [
  { number: '01', title: 'Learn', description: 'Industry-focused curriculum designed with leading professionals.' },
  { number: '02', title: 'Practice', description: 'Hands-on studio experience with state-of-the-art facilities.' },
  { number: '03', title: 'Collaborate', description: 'Workshops, seminars & live industry projects.' },
  { number: '04', title: 'Launch', description: 'Career guidance & dedicated placement support.' },
];

const industryLinks = [
  { title: 'Fashion Brands' },
  { title: 'Architectural Firms' },
  { title: 'Retail Brands' },
  { title: 'Design Studios' },
  { title: 'Textile Companies' },
];

const journeySteps = [
  { stepNumber: 'STEP 01', title: 'Discover Your Passion', description: 'Explore design disciplines and find your creative calling.', align: 'left' },
  { stepNumber: 'STEP 02', title: 'Build Skills', description: 'Master craft through intensive studio-based learning.', align: 'right' },
  { stepNumber: 'STEP 03', title: 'Create Portfolio', description: 'Develop a professional body of work under expert mentorship.', align: 'left' },
  { stepNumber: 'STEP 04', title: 'Industry Exposure', description: 'Live projects, internships and industry interactions.', align: 'right' },
  { stepNumber: 'STEP 05', title: 'Graduate', description: 'Earn a degree recognized across the design industry.', align: 'left' },
  { stepNumber: 'STEP 06', title: 'Launch Career', description: 'Enter the profession with placement support and alumni networks.', align: 'right' },
];

const testimonials = [
  {
    quote: "PIFT didn't just teach me design — it gave me the confidence to think creatively and the tools to build a career I am proud of.",
    name: 'Priya Sharma', course: 'B.Des Fashion Design', role: 'Senior Designer at Fab India',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    quote: 'The live projects and industry exposure at PIFT prepared me for real challenges. I walked out career-ready from day one.',
    name: 'Aryan Kapoor', course: 'B.Des Interior Design', role: 'Principal Designer at Studio K',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    quote: 'The blend of tradition and innovation at PIFT is unmatched. My passion for textiles found its true expression here.',
    name: 'Meera Joshi', course: 'M.Des Textile Design', role: 'Textile Designer at Raymond',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

const corePillars = ['INNOVATION', 'TECHNOLOGY', 'SUSTAINABILITY', 'COLLABORATION'];

export default function UnifiedPIFTLandingPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Central isolated theme styling architecture mapping 1:1 against layout requirements
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-[#fbfbfb]',
    bgSectionAlt: isDark ? 'bg-[#060606]' : 'bg-white',
    bgPhilosophy: isDark ? 'bg-[#090506]' : 'bg-[#FAF5F6]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textMuted: isDark ? 'text-gray-400' : 'text-neutral-600',
    textDescription: isDark ? 'text-[#8e8e8e]' : 'text-neutral-600',
    textTimelineDesc: isDark ? 'text-[#737373]' : 'text-neutral-500',
    textCardTitle: isDark ? 'text-neutral-100' : 'text-[#4A282A]',
    
    // Custom light red/clay container profiles
    cardBg: isDark ? 'bg-[#110d0e]' : 'bg-[#F0C9CB]',
    cardBgAlt: isDark ? 'bg-[#0e0a0b]/60' : 'bg-[#F0C9CB]/40',
    cardBorder: isDark ? 'border-white/[0.03]' : 'border-[#E3B2B4]',
    cardBorderHover: isDark ? 'hover:border-[#e6001a]/30' : 'hover:border-[#e6001a]/50',
    cardBgHover: isDark ? 'hover:bg-[#150f11]' : 'hover:bg-[#EBB4B6]',
    
    // Core ecosystem vectors
    vectorMapBg: isDark ? 'bg-[#080808]/90' : 'bg-white',
    vectorMapBorder: isDark ? 'border-neutral-900' : 'border-neutral-300',
    vectorCentralHub: isDark ? 'border-[#991b1b]/60 bg-black' : 'border-[#991b1b]/50 bg-[#F0C9CB]',
    vectorMobileCard: isDark ? 'bg-[#0c0c0c]' : 'bg-[#F0C9CB]',
    
    // Graphic asset components
    imageFrame: isDark ? 'border-white/[0.04] bg-zinc-950' : 'border-neutral-200/80 bg-neutral-100',
    imageGrayscale: isDark ? 'grayscale opacity-90 contrast-105' : 'brightness-100 contrast-[1.01]',
    timelineRule: isDark ? 'bg-neutral-800' : 'bg-neutral-300',
    dividerLine: isDark ? 'border-neutral-900/60' : 'border-neutral-200',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#F0C9CB]/20',

    // Interactive secondary CTA anchors
    btnSecondary: isDark 
      ? 'border-white/20 bg-white/[0.01] hover:bg-white/[0.04] text-gray-300' 
      : 'border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50',
    btnCtaSecondary: isDark
      ? 'border-neutral-800 hover:border-neutral-400 bg-black/40 text-neutral-300'
      : 'border-neutral-300 hover:border-neutral-400 bg-white text-neutral-800',
      
    // Red system indicators
    brandRed: 'text-[#E5333B]',
    storyRed: 'text-[#e11d48]',
    accentRed: 'text-[#be123c]',
    accentDot: 'bg-[#e11d48]',
    accentDotAlt: 'bg-[#be123c]'
  };

  return (
    <div className={`antialiased min-h-screen overflow-x-hidden selection:bg-[#e11d48] selection:text-white transition-colors duration-300 ${theme.bgPage} ${theme.textMain}`}>
      
      {/* 1. HERO SECTION */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden selection:bg-[#E5333B]/20 transition-colors duration-300 ${theme.bgSectionAlt}`}>
        <div className="absolute inset-0 z-0 mix-blend-luminosity opacity-15 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1600&auto=format&fit=crop"
            alt="Fashion design background model portrait"
            fill
            className="object-cover"
            priority
          />
        </div>

        {isDark ? (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_transparent_0%,_#060606_85%)] z-0 pointer-events-none" />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_transparent_0%,_#fbfbfb_85%)] z-0 pointer-events-none" />
        )}

        <div className="relative z-10 max-w-[1650px] w-full mx-auto px-6 py-16 md:px-12 lg:py-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-8 xl:space-y-12 text-left">
            <div className="space-y-4">
              <span className={`text-[12px] font-bold tracking-[0.3em] uppercase block ${theme.brandRed}`}>
                About PIFT
              </span>
              <h1 className="font-serif text-[48px] sm:text-[68px] xl:text-[80px] font-normal leading-[1.1] tracking-tight">
                Designing <br />
                Futures. <br />
                Creating <span className={`italic font-medium tracking-wide ${theme.brandRed}`}>Creative</span> <br />
                <span className={theme.brandRed}>Leaders.</span>
              </h1>
            </div>

            <p className={`text-base md:text-lg max-w-xl leading-relaxed font-light tracking-wide transition-colors duration-300 ${theme.textMuted}`}>
              For decades, PIFT has nurtured aspiring designers, innovators and entrepreneurs through industry-driven education, practical learning and creative excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button className="w-full sm:w-auto bg-[#E5333B] hover:bg-[#c92a31] text-white font-semibold uppercase tracking-widest text-[12px] rounded-[2px] px-10 py-5 transition-colors duration-300 flex items-center justify-center gap-2">
                Explore Our Journey
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className={`w-full sm:w-auto border backdrop-blur-sm font-semibold uppercase tracking-widest text-[12px] rounded-[2px] px-10 py-5 transition-all duration-300 flex items-center justify-center gap-2 ${theme.btnSecondary}`}>
                Discover Programs
                <Compass className="w-4 h-4 opacity-70" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-end relative">
            <div className={`sm:col-span-12 relative aspect-[4/4] xl:aspect-[5/4] w-full rounded-[4px] overflow-hidden border transition-all duration-300 ${theme.imageFrame} ${theme.shadow}`}>
              <Image
                src="/images/aboutus-bg.png"
                alt="Editorial fashion models representation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlaid Data Metrics Grid */}
            <div className={`sm:absolute sm:bottom-0 gap-2 sm:left-0 sm:right-20 grid grid-cols-2 backdrop-blur-md rounded-[2px] border transition-all duration-300 bg-white/[0.05] ${theme.cardBorder}`}>
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-black/40 p-6 md:p-8 flex flex-col justify-center items-start transition-colors duration-300 hover:bg-black/60"
                >
                  <span className={`font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-2 ${theme.brandRed}`}>
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-[11px] font-bold text-gray-400 tracking-[0.15em] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>      

      {/* 2. OUR STORY SECTION */}
      <section className={`py-20 px-6 md:py-28 lg:px-16 w-full flex items-center justify-center transition-colors duration-300 ${theme.bgPage}`}>
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-6 relative w-full px-4 sm:px-6 lg:px-0">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#e11d48] pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#e11d48] pointer-events-none hidden sm:block" />

            <div className="grid grid-cols-2 gap-4">
              <div className={`col-span-2 relative aspect-[4/3] w-full overflow-hidden rounded-xl border ${theme.imageFrame} ${theme.shadow}`}>
                <Image
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000"
                  alt="Fashion sketches"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className={`object-cover ${theme.imageGrayscale}`}
                />
              </div>
              <div className={`relative aspect-square w-full overflow-hidden rounded-xl border ${theme.imageFrame} ${theme.shadow}`}>
                <Image
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=600"
                  alt="Moodboard swatches"
                  fill
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className={`object-cover ${theme.imageGrayscale}`}
                />
              </div>
              <div className={`relative aspect-square w-full overflow-hidden rounded-xl border ${theme.imageFrame} ${theme.shadow}`}>
                <Image
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600"
                  alt="Textile workshop"
                  fill
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className={`object-cover ${theme.imageGrayscale}`}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div>
              <span className={`text-xs uppercase tracking-[0.35em] font-bold block mb-4 ${theme.storyRed}`}>Our Story</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-light leading-tight tracking-wide mb-8">Our Journey of Excellence</h2>
              <p className={`text-sm sm:text-base leading-relaxed font-light tracking-wide max-w-2xl mb-12 transition-colors duration-300 ${theme.textDescription}`}>
                PIFT was established with a vision to bridge creativity and industry. Over the years, the institute has evolved into a hub for fashion, interior, textile and design education, empowering students with practical knowledge and professional exposure.
              </p>
            </div>

            <div className="relative pl-1">
              <div className={`absolute left-[5px] top-2 bottom-2 w-[1px] transition-colors duration-300 ${theme.timelineRule}`} />
              <div className="space-y-10">
                {timelineData.map((item, index) => (
                  <div key={index} className="relative pl-8 group">
                    <div className={`absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full border-2 border-white dark:border-black z-10 ${theme.accentDot}`} />
                    <div className="flex flex-col space-y-1">
                      <span className={`text-xs font-semibold tracking-wider ${theme.storyRed}`}>{item.year}</span>
                      <h4 className="text-lg font-serif tracking-wide text-neutral-800 dark:text-neutral-100">{item.title}</h4>
                      <p className={`text-sm font-light max-w-xl transition-colors duration-300 ${theme.textTimelineDesc}`}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY SECTION */}
      <section className={`py-20 px-6 md:py-28 lg:px-16 w-full flex flex-col justify-center items-center relative overflow-hidden transition-colors duration-300 ${theme.bgPhilosophy}`}>
        {isDark ? (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,10,12,0.45)_0%,transparent_70%)] pointer-events-none" />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,201,203,0.35)_0%,transparent_70%)] pointer-events-none" />
        )}
        
        <div className="max-w-7xl w-full mx-auto relative z-10 text-center mb-16 md:mb-20">
          <span className={`text-xs uppercase tracking-[0.4em] font-semibold block mb-4 ${theme.accentRed}`}>Our Philosophy</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide max-w-4xl mx-auto">Where Creativity Meets Purpose</h2>
        </div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {/* Card 1 */}
          <div className={`border p-8 sm:p-10 min-h-[380px] flex flex-col justify-between transition-all duration-300 ease-in-out group ${theme.cardBgAlt} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.shadow}`}>
            <div className="space-y-6 text-left">
              <div className="w-10 h-10 rounded-full border border-[#b91c1c]/30 flex items-center justify-center p-2 bg-[#b91c1c]/5 text-[#b91c1c]">
                <Compass className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c1c] font-bold block mb-2">Vision</span>
                <h3 className={`text-2xl font-serif tracking-wide ${theme.textCardTitle}`}>Vision</h3>
              </div>
              <p className={`text-sm font-light leading-relaxed transition-colors duration-300 ${theme.textCardDesc}`}>
                To inspire future designers and creative professionals through innovation, excellence and industry relevance.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className={`border p-8 sm:p-10 min-h-[380px] flex flex-col justify-between transition-all duration-300 ease-in-out group ${theme.cardBgAlt} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.shadow}`}>
            <div className="space-y-6 text-left">
              <div className="w-10 h-10 rounded-full border border-[#b91c1c]/30 flex items-center justify-center p-2 bg-[#b91c1c]/5 text-[#b91c1c]">
                <Target className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c1c] font-bold block mb-2">Mission</span>
                <h3 className={`text-2xl font-serif tracking-wide ${theme.textCardTitle}`}>Mission</h3>
              </div>
              <p className={`text-sm font-light leading-relaxed transition-colors duration-300 ${theme.textCardDesc}`}>
                To provide transformative design education that combines creativity, technology and practical learning.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className={`border p-8 sm:p-10 min-h-[380px] flex flex-col justify-between transition-all duration-300 ease-in-out group ${theme.cardBgAlt} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.shadow}`}>
            <div className="space-y-6 text-left">
              <div className="w-10 h-10 rounded-full border border-[#b91c1c]/30 flex items-center justify-center p-2 bg-[#b91c1c]/5 text-[#b91c1c]">
                <Award className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c1c] font-bold block mb-2">Values</span>
                <h3 className={`text-2xl font-serif tracking-wide ${theme.textCardTitle}`}>Values</h3>
              </div>
              <ul className={`space-y-3 pt-2 text-sm font-light tracking-wide transition-colors duration-300 ${theme.textCardDesc}`}>
                {['Innovation', 'Integrity', 'Creativity', 'Collaboration', 'Excellence'].map((val, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS IMPACT SECTION */}
      <section className={`py-20 px-6 md:py-32 lg:px-16 w-full flex flex-col justify-center items-center transition-colors duration-300 ${theme.bgPage}`}>
        <div className="max-w-7xl w-full mx-auto text-center mb-20 md:mb-28">
          <span className={`text-xs uppercase tracking-[0.45em] font-bold block mb-5 ${theme.accentRed}`}>IMPACT</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light max-w-3xl mx-auto text-neutral-800 dark:text-neutral-100">The Impact We Create</h2>
        </div>

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-y-24 gap-x-12 relative">
          <div className={`absolute top-0 bottom-0 left-1/3 w-[1px] hidden md:block ${theme.dividerLine}`} />
          <div className={`absolute top-0 bottom-0 left-2/3 w-[1px] hidden md:block ${theme.dividerLine}`} />

          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center justify-center group px-4">
              <span className={`text-5xl sm:text-6xl font-serif font-light block transition-transform duration-300 group-hover:scale-105 ${theme.accentRed}`}>{stat.number}</span>
              <span className={`text-[11px] sm:text-xs tracking-[0.25em] font-bold uppercase mt-4 block ${theme.textMutedSub}`}>{stat.label}</span>
              <div className="w-6 h-[2px] bg-[#be123c]/60 mt-5 mx-auto transition-all duration-300 group-hover:w-12 group-hover:bg-[#be123c]" />
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY PIFT SECTION */}
      <section className="py-20 px-6 md:py-28 lg:px-16 w-full flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-12 text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-[#991b1b] font-bold block mb-4">WHY PIFT</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide">Why Thousands Choose PIFT</h2>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-10 h-10 border border-[#991b1b]/30 bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center text-[#991b1b] transition-colors duration-300 group-hover:border-[#991b1b] group-hover:bg-[#991b1b]/5">
                      <IconComponent className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <div className="space-y-1 pt-0.5">
                      <h3 className="text-base font-serif text-neutral-800 dark:text-neutral-100 tracking-wide font-semibold">{feature.title}</h3>
                      <p className={`text-xs sm:text-sm font-light leading-relaxed max-w-md transition-colors duration-300 ${theme.textMuted}`}>{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6 relative w-full flex justify-center items-center px-4 sm:px-8 lg:px-4">
            <div className="w-full max-w-xl lg:max-w-none flex flex-col gap-4">
              <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl border ${theme.imageFrame} ${theme.shadow}`}>
                <Image
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000"
                  alt="High fashion presentation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border ${theme.imageFrame} ${theme.shadow}`}>
                  <Image
                    src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=600"
                    alt="Interior texturing samples"
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>
                <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border ${theme.imageFrame} ${theme.shadow}`}>
                  <Image
                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600"
                    alt="Architecture workspace setup"
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ECOSYSTEM HUB SECTION */}
      <section className="py-20 px-6 md:py-28 lg:px-16 w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="max-w-7xl w-full mx-auto text-center mb-16 md:mb-24 relative z-10">
          <span className="text-xs uppercase tracking-[0.45em] text-[#991b1b] font-bold block mb-4">CREATIVE ECOSYSTEM</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light max-w-4xl mx-auto">A Complete Creative Ecosystem</h2>
        </div>

        <div className="w-full max-w-4xl mx-auto flex items-center justify-center relative">
          <div className="hidden md:block relative w-[520px] h-[520px] lg:w-[600px] lg:h-[600px]">
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="none" stroke={isDark ? '#171717' : '#e5e5e7'} strokeWidth="0.5" />
              <circle cx="50" cy="50" r="26" fill="none" stroke="#991b1b" strokeWidth="0.35" strokeDasharray="1 2" className="opacity-60" />
              {ecosystemNodes.map((node, i) => (
                <line key={i} x1="50" y1="50" x2={node.x2} y2={node.y2} stroke="#991b1b" strokeWidth="0.4" strokeDasharray="2 2" className="opacity-40" />
              ))}
            </svg>

            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 flex flex-col items-center justify-center p-4 text-center z-20 shadow-xl rounded-md border ${theme.vectorCentralHub}`}>
              <span className="text-xs uppercase tracking-[0.3em] text-[#991b1b] font-bold block mb-1">PIFT</span>
              <span className="text-xs font-serif font-semibold text-neutral-800 dark:text-neutral-300">Creative Hub</span>
            </div>

            {ecosystemNodes.map((node, index) => {
              const xTranslate = node.left === '50%' ? '-50%' : node.left === '100%' ? '-100%' : '0%';
              const yTranslate = node.top === '50%' ? '-50%' : node.top === '100%' ? '-100%' : '0%';
              return (
                <div
                  key={index}
                  className="absolute z-30 transition-all duration-300 ease-in-out group"
                  style={{ top: node.top, left: node.left, transform: `translate(${xTranslate}, ${yTranslate})` }}
                >
                  <div className={`px-6 py-4 backdrop-blur-sm min-w-[170px] text-center border rounded-xl transition-all ${theme.vectorMapBg} ${theme.vectorMapBorder} ${theme.cardBorderHover} ${theme.shadow}`}>
                    <span className="text-xs sm:text-sm font-serif font-bold text-neutral-800 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white">{node.title}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex md:hidden flex-col items-center gap-4 w-full px-4 z-10">
            <div className={`w-full border p-6 text-center mb-4 rounded-xl ${theme.vectorCentralHub}`}>
              <span className="text-xs uppercase tracking-[0.3em] text-[#991b1b] font-bold block mb-1">PIFT</span>
              <span className="text-sm font-serif font-light">Creative Hub</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {ecosystemNodes.map((node, index) => (
                <div key={index} className={`border p-4 text-center rounded-xl ${theme.vectorMobileCard} ${theme.cardBorder}`}>
                  <span className="text-sm font-serif font-semibold text-neutral-800 dark:text-neutral-300">{node.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CAMPUS EXPERIENCE SECTION */}
      <section className="py-20 px-6 md:py-28 lg:px-16 w-full flex flex-col justify-center items-center">
        <div className="max-w-7xl w-full mx-auto text-center mb-16 md:mb-20">
          <span className={`text-xs uppercase tracking-[0.45em] font-bold block mb-4 ${theme.accentRed}`}>CAMPUS EXPERIENCE</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light max-w-4xl mx-auto">Experience Creativity Every Day</h2>
        </div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-5 w-full">
            <div className={`relative w-full rounded-2xl overflow-hidden group border ${galleryItems[0].aspectClass} ${theme.imageFrame} ${theme.shadow}`}>
              <Image 
                src={galleryItems[0].imageUrl} 
                alt={galleryItems[0].title} 
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover brightness-90 transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-2 text-left">
                <div className="w-6 h-[2px] bg-[#be123c]" />
                <h3 className="text-lg sm:text-xl font-serif font-light text-neutral-200">{galleryItems[0].title}</h3>
              </div>
            </div>

            <div className={`relative w-full aspect-[21/9] rounded-2xl overflow-hidden group border ${theme.imageFrame} ${theme.shadow}`}>
              <Image 
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Campus Architecture" 
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover brightness-[0.8] transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-2 text-left">
                <div className="w-6 h-[2px] bg-[#be123c]" />
                <h3 className="text-lg sm:text-xl font-serif font-light text-neutral-200">Modern Campus</h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:gap-5 w-full">
            {galleryItems.slice(1).map((item, index) => (
              <div key={index} className={`relative w-full rounded-2xl overflow-hidden group border ${item.aspectClass} ${theme.imageFrame} ${theme.shadow}`}>
                <Image 
                  src={item.imageUrl} 
                  alt={item.title} 
                  fill
                  sizes="(max-width: 1024px) 50vw, 280px"
                  className="object-cover brightness-[0.75] transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 z-10 flex flex-col gap-2 text-left">
                  <div className="w-5 h-[2px] bg-[#be123c]" />
                  <h3 className="text-sm sm:text-base font-serif font-light text-neutral-200">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LEARNING APPROACH SECTION */}
      <section className="py-20 px-6 md:py-32 lg:px-16 w-full flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className={`absolute bottom-0 left-0 right-0 h-[30vh] opacity-80 ${isDark ? 'bg-gradient-to-t from-[#060304] to-transparent' : 'bg-gradient-to-t from-neutral-200/40 to-transparent'}`} />
          <svg className={`absolute bottom-0 left-0 w-full h-[40vh] ${isDark ? 'text-[#0d0708]/40' : 'text-neutral-200/20'}`} viewBox="0 0 1440 400" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,400 L720,180 L1440,400 Z" />
          </svg>
        </div>

        <div className="max-w-7xl w-full mx-auto text-center mb-24 md:mb-32 relative z-10">
          <span className="text-xs uppercase tracking-[0.45em] text-[#991b1b] font-bold block mb-4">LEARNING APPROACH</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light max-w-4xl mx-auto">Learn Beyond The Classroom</h2>
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10">
          <div className="absolute top-7 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-[#991b1b]/40 to-transparent hidden md:block" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 lg:gap-x-12">
            {learningSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group relative">
                <div className={`w-14 h-14 border flex items-center justify-center text-[#991b1b] font-mono text-xs mb-8 transition-all duration-300 rounded-xl ${isDark ? 'border-[#991b1b]/30 bg-black' : 'border-[#E3B2B4] bg-[#F0C9CB] font-bold font-sans'}`}>
                  {step.number}
                </div>
                <div className="space-y-3 px-2">
                  <h3 className={`text-xl sm:text-2xl font-serif tracking-wide ${theme.textCardTitle}`}>{step.title}</h3>
                  <p className={`text-xs sm:text-sm font-light max-w-xs mx-auto transition-colors duration-300 ${theme.textMuted}`}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRY CONNECTIONS SECTION */}
      <section className="py-20 px-6 md:py-28 lg:px-16 w-full flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 pt-2 text-left">
            <div>
              <span className={`text-xs uppercase tracking-[0.4em] font-bold block mb-6 ${theme.accentRed}`}>INDUSTRY CONNECTIONS</span>
              <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-serif font-light leading-[1.15] tracking-tight max-w-xl">
                Built With Industry. <br />
                <span className={`italic font-normal ${theme.accentRed}`}>Designed For Industry.</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-10 text-left">
            <p className={`text-sm sm:text-base leading-relaxed font-light max-w-xl lg:pl-4 transition-colors duration-300 ${theme.textMuted}`}>
              Students gain exposure through workshops, seminars, industry interactions and professional experiences that align academic learning with real-world requirements.
            </p>
            <div className={`w-full border-t lg:pl-4 ${theme.dividerLine}`}>
              {industryLinks.map((item, index) => (
                <a key={index} href="#" className={`flex items-center justify-between py-5 sm:py-6 border-b group transition-colors duration-300 ${theme.dividerLine}`}>
                  <div className="flex items-center gap-4">
                    <Square className="w-3 h-3 text-[#be123c] stroke-[2] fill-none" />
                    <span className="text-base sm:text-lg font-serif text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 font-light">
                      {item.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 dark:text-neutral-600 group-hover:text-black dark:group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. LEADERSHIP MESSAGE SECTION */}
      <section className="py-20 px-6 md:py-28 lg:px-16 w-full flex flex-col justify-center items-center">
        <div className="max-w-7xl w-full mx-auto text-center mb-16 md:mb-24">
          <span className={`text-xs uppercase tracking-[0.45em] font-bold block mb-4 ${theme.accentRed}`}>LEADERSHIP</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light">Message From Leadership</h2>
        </div>

        <div className={`max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 border shadow-2xl overflow-hidden ${theme.cardBg} ${theme.cardBorder}`}>
          <div className={`md:col-span-6 relative aspect-[4/5] md:aspect-auto w-full h-full min-h-[400px] md:min-h-[550px] overflow-hidden ${theme.imageFrame}`}>
            <Image 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
              alt="Founder & Director" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover ${theme.imageGrayscale}`} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 opacity-60">
              <div className="w-4 h-[1px] bg-[#be123c]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-300">Director, PIFT</span>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative bg-[#060606] dark:bg-[#060606]">
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#be123c]/5 filter blur-[60px] pointer-events-none" />
            <div className="space-y-8 relative z-10 text-left">
              <div className="text-[#be123c]/80 flex items-center">
                <Quote className="w-8 h-8 fill-current transform scale-x-[-1]" />
              </div>
              <blockquote className="text-neutral-300 font-serif font-light text-base sm:text-lg lg:text-xl leading-relaxed italic">
                At PIFT, we believe design has the power to transform industries, communities and lives. Our commitment is to empower every student with the confidence, creativity and skills needed to shape the future.
              </blockquote>
              <div className="w-16 h-[1px] bg-neutral-800" />
              <div className="space-y-1">
                <h4 className="text-lg font-serif text-neutral-100">Dr. Arjun Mehta</h4>
                <span className="text-[10px] tracking-[0.25em] text-neutral-500 font-semibold uppercase block">FOUNDER & DIRECTOR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. STUDENT JOURNEY SECTION */}
      <section className="py-20 px-6 md:py-32 lg:px-16 w-full flex flex-col justify-center items-center">
        <div className="max-w-7xl w-full mx-auto text-center mb-24 md:mb-32">
          <span className={`text-xs uppercase tracking-[0.45em] font-bold block mb-4 ${theme.accentRed}`}>STUDENT JOURNEY</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light">Your Path to Creative Excellence</h2>
        </div>

        <div className="max-w-5xl w-full mx-auto relative px-4 sm:px-6">
          <div className={`absolute left-8 md:left-1/2 top-2 bottom-2 w-[1px] -translate-x-1/2 ${theme.timelineRule}`} />
          <div className="space-y-16 md:space-y-24">
            {journeySteps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row relative items-start md:items-center w-full ${step.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-8 md:left-1/2 top-1 md:top-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 z-10 bg-black flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-white dark:bg-black border border-[#be123c] outline outline-2 outline-[#be123c]/20" />
                </div>
                <div className="hidden md:block w-1/2" />
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${step.align === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16'} group text-left`}>
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#be123c] font-semibold block">{step.stepNumber}</span>
                    <h3 className={`text-xl sm:text-2xl font-serif tracking-wide ${theme.textCardTitle}`}>{step.title}</h3>
                    <p className={`text-xs sm:text-sm font-light leading-relaxed max-w-sm transition-colors duration-300 ${theme.textMuted} ${step.align === 'left' ? 'md:ml-auto' : ''}`}>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. TESTIMONIALS SECTION */}
      <section className={`py-20 px-6 md:py-32 lg:px-16 w-full flex flex-col justify-center items-center transition-colors duration-300 ${theme.bgSectionAlt}`}>
        <div className="max-w-7xl w-full mx-auto text-center mb-16 md:mb-24">
          <span className={`text-xs uppercase tracking-[0.45em] font-bold block mb-4 ${theme.accentRed}`}>VOICES OF PIFT</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light">Voices of PIFT</h2>
        </div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className={`border p-8 sm:p-10 flex flex-col justify-between min-h-[380px] transition-all duration-300 group relative ${theme.cardBgAlt} ${theme.cardBorder} hover:border-neutral-400 dark:hover:border-neutral-800/80 ${theme.shadow}`}>
              <div className="absolute inset-0 bg-gradient-to-b from-[#be123c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="space-y-6 relative z-10 text-left">
                <div className="text-[#be123c] flex items-center">
                  <Quote className="w-6 h-6 fill-current transform scale-x-[-1] opacity-80" />
                </div>
                <p className={`font-serif font-light text-base leading-relaxed italic transition-colors duration-300 ${theme.textCardDesc}`}>
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className={`flex items-center gap-4 pt-8 border-t relative z-10 mt-6 ${theme.dividerLine}`}>
                <div className={`relative w-12 h-12 overflow-hidden flex-shrink-0 border rounded-full transition-all duration-500 ${theme.imageFrame}`}>
                  <Image 
                    src={item.imageUrl} 
                    alt={item.name} 
                    fill
                    sizes="48px"
                    className="object-cover" 
                  />
                </div>
                <div className="flex flex-col space-y-0.5 text-left">
                  <h4 className={`text-sm font-serif font-bold ${theme.textCardTitle}`}>{item.name}</h4>
                  <span className="text-[11px] text-[#be123c] font-semibold block">{item.course}</span>
                  <span className={`text-[10px] font-medium block ${theme.textMutedSub}`}>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. FUTURE VISION SECTION */}
      <section className="relative min-h-screen w-full bg-[#030102] dark:bg-[#030102] overflow-hidden flex items-center justify-center px-6 py-20 md:py-28">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1920" 
            alt="Future Design Background" 
            fill
            priority
            className="object-cover filter grayscale contrast-125" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        <div className="absolute left-10 top-1/4 w-32 h-32 border border-[#991b1b]/10 transform rotate-[35deg] pointer-events-none hidden lg:block" />
        <div className="absolute right-16 bottom-1/4 w-64 h-64 border border-[#991b1b]/10 transform rotate-[15deg] pointer-events-none hidden lg:block" />
        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-[2px] h-32 bg-[#991b1b]/80 hidden xl:block" />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[2px] h-32 bg-[#991b1b]/80 hidden xl:block" />

        <div className="relative z-10 max-w-5xl w-full mx-auto text-center flex flex-col items-center justify-center">
          <span className="text-xs uppercase tracking-[0.45em] text-[#991b1b] font-bold block mb-8 sm:mb-10">FUTURE VISION</span>
          <div className="relative mb-8 sm:mb-10 max-w-4xl">
            <div className="absolute inset-0 flex items-center justify-center select-none z-0 transform -translate-y-4">
              <span className="text-[7rem] sm:text-[12rem] md:text-[15rem] font-serif font-black text-[#991b1b]/5 tracking-wider leading-none">2026</span>
            </div>
            <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-light leading-[1.15] text-white">
              Shaping The Future Of <span className="text-[#991b1b] italic font-normal block sm:inline">Creative</span> <br />
              <span className="text-[#991b1b] italic font-normal">Education</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light max-w-2xl mb-12 sm:mb-16 px-4">
            PIFT continues to evolve by integrating innovation, technology, sustainability and industry collaboration into every aspect of learning.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 max-w-3xl px-4">
            {corePillars.map((pillar, index) => (
              <div geometry_prop="anchor" key={index} className="flex items-center gap-3 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#991b1b]" />
                <span className="text-xs sm:text-sm tracking-[0.25em] text-neutral-400 font-semibold group-hover:text-white transition-colors duration-300">{pillar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA SECTION */}
      <section className={`py-24 px-6 md:py-36 lg:px-16 w-full flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${theme.bgPage}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#e11d48]/10 filter blur-[90px] pointer-events-none z-0" />
        
        <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-neutral-300 dark:border-neutral-900 pointer-events-none hidden sm:block" />
        <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-neutral-300 dark:border-neutral-900 pointer-events-none hidden sm:block" />
        <div className="absolute bottom-8 left-8 w-10 h-10 border-b border-l border-neutral-300 dark:border-neutral-900 pointer-events-none hidden sm:block" />
        <div className="absolute bottom-8 right-8 w-10 h-10 border-b border-r border-neutral-300 dark:border-neutral-900 pointer-events-none hidden sm:block" />

        <div className="relative z-10 max-w-5xl w-full mx-auto text-center flex flex-col items-center justify-center">
          <span className={`text-xs uppercase tracking-[0.4em] font-bold block mb-8 sm:mb-10 ${theme.storyRed}`}>BEGIN YOUR JOURNEY</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-serif font-light leading-[1.2] tracking-wide mb-6 max-w-4xl px-2">
            &ldquo;Your Creative Future <span className={`italic font-normal block sm:inline ${theme.storyRed}`}>Begins</span> <br />
            <span className={`italic font-normal ${theme.storyRed}`}>Here.&rdquo;</span>
          </h2>
          <p className={`text-sm sm:text-base font-light tracking-wide max-w-xl mb-12 sm:mb-16 transition-colors duration-300 ${theme.textTimelineDesc}`}>
            Join a community of innovators, designers and future industry leaders.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full max-w-3xl px-4">
            <button className="w-full sm:w-auto bg-[#e11d48] hover:bg-[#be123c] text-white text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 flex items-center justify-center gap-2 group shadow-lg shadow-red-900/10">
              Apply Now
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className={`w-full sm:w-auto text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 backdrop-blur-sm flex items-center justify-center gap-2 group border ${theme.btnCtaSecondary} ${theme.shadow}`}>
              Download Brochure
              <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
            <button className={`w-full sm:w-auto text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 backdrop-blur-sm flex items-center justify-center gap-2 group border ${theme.btnCtaSecondary} ${theme.shadow}`}>
              Book Campus Visit
              <Calendar className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-105" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}