'use client';

import React from 'react';
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
  Calendar 
} from 'lucide-react';



// ==========================================
// CENTRALIZED DATA COMPONENT DRIVERS
// ==========================================
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
  { number: '25+', label: 'YEARS LEGACY' },
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
    quote: 'PIFT didn\'t just teach me design — it gave me the confidence to think creatively and the tools to build a career I am proud of.',
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


// ==========================================
// COMBINED NEXT.JS LANDING PAGE MAIN COMPONENT
// ==========================================
export default function UnifiedPIFTLandingPage() {
  return (
    <div className="bg-black text-white antialiased min-h-screen overflow-x-hidden select-none selection:bg-[#e11d48] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&q=80&w=1920"
            alt="Design Studio Background"
            className="w-full h-full object-cover filter grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-16 md:py-24 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#e11d48] font-semibold block mb-6">About PIFT</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif leading-[1.1] font-light tracking-tight max-w-2xl">
                Designing <br className="hidden sm:inline" />
                Futures. <br />
                Creating <span className="text-[#e11d48] italic font-normal">Creative</span> <br />
                <span className="text-[#e11d48] italic font-normal">Leaders.</span>
              </h1>
            </div>
            <p className="text-[#9ca3af] text-sm sm:text-base max-w-md font-light leading-relaxed tracking-wide">
              For decades, PIFT has nurtured aspiring designers, innovators and entrepreneurs through industry-driven education, practical learning and creative excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#e11d48] hover:bg-[#be123c] text-white text-xs tracking-widest font-semibold uppercase px-8 py-4 transition-colors duration-300 ease-in-out flex items-center justify-center gap-2 group">
                Explore Our Journey
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="border border-[#374151] hover:border-white text-white text-xs tracking-widest font-semibold uppercase px-8 py-4 transition-colors duration-300 ease-in-out bg-black/20 backdrop-blur-sm">
                Discover Programs
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] bg-[#171717] overflow-hidden shadow-2xl group border border-neutral-800/50">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000"
                alt="High Fashion Design Showcase"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-px bg-neutral-800/60 border border-neutral-800/60 w-full max-w-md lg:max-w-none mt-6 sm:mt-0 sm:absolute sm:-bottom-12 sm:-left-12 lg:-left-16 sm:w-[calc(100%+3rem)] lg:w-[110%] backdrop-blur-md shadow-2xl z-20">
              <div className="bg-[#0c0c0c]/90 p-6 sm:p-8 flex flex-col justify-center min-h-[110px] sm:min-h-[130px]">
                <span className="text-2xl sm:text-3xl font-serif text-[#e11d48] block mb-1">25+</span>
                <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-medium">Years of Legacy</span>
              </div>
              <div className="bg-[#0c0c0c]/90 p-6 sm:p-8 flex flex-col justify-center min-h-[110px] sm:min-h-[130px]">
                <span className="text-2xl sm:text-3xl font-serif text-[#e11d48] block mb-1">12K+</span>
                <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-medium">Graduates</span>
              </div>
              <div className="bg-[#0c0c0c]/90 p-6 sm:p-8 flex flex-col justify-center min-h-[110px] sm:min-h-[130px]">
                <span className="text-2xl sm:text-3xl font-serif text-[#e11d48] block mb-1">97%</span>
                <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-medium">Placement Success</span>
              </div>
              <div className="bg-[#0c0c0c]/90 p-6 sm:p-8 flex flex-col justify-center min-h-[110px] sm:min-h-[130px]">
                <span className="text-2xl sm:text-3xl font-serif text-[#e11d48] block mb-1">38+</span>
                <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-medium">Industry Collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="bg-black py-20 px-6 md:py-28 lg:px-16 w-full flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-6 relative w-full px-4 sm:px-6 lg:px-0">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#e11d48] pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#e11d48] pointer-events-none hidden sm:block" />

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[4/3] w-full bg-neutral-900 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000"
                  alt="Fashion sketches"
                  className="w-full h-full object-cover filter grayscale-[20%]"
                />
              </div>
              <div className="aspect-square w-full bg-neutral-900 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=600"
                  alt="Moodboard swatches"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square w-full bg-neutral-900 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600"
                  alt="Textile workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-[#e11d48] font-bold block mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-light leading-tight tracking-wide mb-8">Our Journey of Excellence</h2>
              <p className="text-[#8e8e8e] text-sm sm:text-base leading-relaxed font-light tracking-wide max-w-2xl mb-12">
                PIFT was established with a vision to bridge creativity and industry. Over the years, the institute has evolved into a hub for fashion, interior, textile and design education, empowering students with practical knowledge and professional exposure.
              </p>
            </div>

            <div className="relative pl-1">
              <div className="absolute left-[5px] top-2 bottom-2 w-[1px] bg-neutral-800" />
              <div className="space-y-10">
                {timelineData.map((item, index) => (
                  <div key={index} className="relative pl-8 group">
                    <div className="absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full bg-[#e11d48] border-2 border-black z-10" />
                    <div className="flex flex-col space-y-1">
                      <span className="text-xs font-semibold tracking-wider text-[#e11d48]">{item.year}</span>
                      <h4 className="text-lg font-serif text-neutral-100 tracking-wide">{item.title}</h4>
                      <p className="text-sm text-[#737373] font-light max-w-xl">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY SECTION */}
      <section className="bg-[#090506] py-20 px-6 md:py-28 lg:px-16 w-full flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,10,12,0.45)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl w-full mx-auto relative z-10 text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-[#b91c1c] font-semibold block mb-4">Our Philosophy</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide max-w-4xl mx-auto">Where Creativity Meets Purpose</h2>
        </div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {/* Card 1 */}
          <div className="bg-[#0e0a0b]/60 border border-neutral-900/80 hover:border-[#b91c1c]/40 backdrop-blur-md p-8 sm:p-10 min-h-[380px] flex flex-col justify-between transition-all duration-300 ease-in-out group">
            <div className="space-y-6">
              <div className="w-10 h-10 rounded-full border border-[#b91c1c]/30 flex items-center justify-center p-2 bg-[#b91c1c]/5 text-[#b91c1c]">
                <Compass className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c1c] font-bold block mb-2">Vision</span>
                <h3 className="text-2xl font-serif text-neutral-100 tracking-wide">Vision</h3>
              </div>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                To inspire future designers and creative professionals through innovation, excellence and industry relevance.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#0e0a0b]/60 border border-neutral-900/80 hover:border-[#b91c1c]/40 backdrop-blur-md p-8 sm:p-10 min-h-[380px] flex flex-col justify-between transition-all duration-300 ease-in-out group">
            <div className="space-y-6">
              <div className="w-10 h-10 rounded-full border border-[#b91c1c]/30 flex items-center justify-center p-2 bg-[#b91c1c]/5 text-[#b91c1c]">
                <Target className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c1c] font-bold block mb-2">Mission</span>
                <h3 className="text-2xl font-serif text-neutral-100 tracking-wide">Mission</h3>
              </div>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                To provide transformative design education that combines creativity, technology and practical learning.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#0e0a0b]/60 border border-neutral-900/80 hover:border-[#b91c1c]/40 backdrop-blur-md p-8 sm:p-10 min-h-[380px] flex flex-col justify-between transition-all duration-300 ease-in-out group">
            <div className="space-y-6">
              <div className="w-10 h-10 rounded-full border border-[#b91c1c]/30 flex items-center justify-center p-2 bg-[#b91c1c]/5 text-[#b91c1c]">
                <Award className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#b91c1c] font-bold block mb-2">Values</span>
                <h3 className="text-2xl font-serif text-neutral-100 tracking-wide">Values</h3>
              </div>
              <ul className="space-y-3 pt-2 text-neutral-400 text-sm font-light tracking-wide">
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
      <section className="bg-black py-20 px-6 md:py-32 lg:px-16 w-full flex flex-col justify-center items-center">
        <div className="max-w-7xl w-full mx-auto text-center mb-20 md:mb-28">
          <span className="text-xs uppercase tracking-[0.45em] text-[#be123c] font-bold block mb-5">IMPACT</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light max-w-3xl mx-auto text-neutral-100">The Impact We Create</h2>
        </div>

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-y-24 gap-x-12 relative">
          <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-neutral-900/50 hidden md:block" />
          <div className="absolute top-0 bottom-0 left-2/3 w-[1px] bg-neutral-900/50 hidden md:block" />

          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center justify-center group px-4">
              <span className="text-5xl sm:text-6xl font-serif font-light text-[#be123c] block transition-transform duration-300 group-hover:scale-105">{stat.number}</span>
              <span className="text-[11px] sm:text-xs tracking-[0.25em] text-neutral-400 font-medium uppercase mt-4 block">{stat.label}</span>
              <div className="w-6 h-[2px] bg-[#be123c]/60 mt-5 mx-auto transition-all duration-300 group-hover:w-12 group-hover:bg-[#be123c]" />
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY PIFT SECTION */}
      <section className="bg-black py-20 px-6 md:py-28 lg:px-16 w-full flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-12">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-[#991b1b] font-bold block mb-4">WHY PIFT</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide">Why Thousands Choose PIFT</h2>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-10 h-10 border border-[#991b1b]/30 bg-neutral-950 flex items-center justify-center text-[#991b1b] transition-colors duration-300 group-hover:border-[#991b1b] group-hover:bg-[#991b1b]/5">
                      <IconComponent className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <div className="space-y-1 pt-0.5">
                      <h3 className="text-base font-serif text-neutral-100 tracking-wide">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed max-w-md">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6 relative w-full flex justify-center items-center px-4 sm:px-8 lg:px-4">
            <div className="w-full max-w-xl lg:max-w-none flex flex-col gap-4">
              <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden shadow-xl border border-neutral-900/40">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000"
                  alt="High fashion presentation"
                  className="w-full h-full object-cover filter brightness-90"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] w-full bg-neutral-900 overflow-hidden shadow-xl border border-neutral-900/40">
                  <img
                    src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=600"
                    alt="Interior texturing samples"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] w-full bg-neutral-900 overflow-hidden shadow-xl border border-neutral-900/40">
                  <img
                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600"
                    alt="Architecture workspace setup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ECOSYSTEM HUB SECTION */}
      <section className="bg-black py-20 px-6 md:py-28 lg:px-16 w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="max-w-7xl w-full mx-auto text-center mb-16 md:mb-24 relative z-10">
          <span className="text-xs uppercase tracking-[0.45em] text-[#991b1b] font-bold block mb-4">CREATIVE ECOSYSTEM</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light max-w-4xl mx-auto text-neutral-100">A Complete Creative Ecosystem</h2>
        </div>

        <div className="w-full max-w-4xl mx-auto flex items-center justify-center relative">
          <div className="hidden md:block relative w-[520px] h-[520px] lg:w-[600px] lg:h-[600px]">
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="none" stroke="#171717" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="26" fill="none" stroke="#991b1b" strokeWidth="0.35" strokeDasharray="1 2" className="opacity-60" />
              {ecosystemNodes.map((node, i) => (
                <line key={i} x1="50" y1="50" x2={node.x2} y2={node.y2} stroke="#991b1b" strokeWidth="0.4" strokeDasharray="2 2" className="opacity-40" />
              ))}
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-black border border-[#991b1b]/60 flex flex-col items-center justify-center p-4 text-center z-20 shadow-[0_0_50px_rgba(153,27,27,0.15)]">
              <span className="text-xs uppercase tracking-[0.3em] text-[#991b1b] font-bold block mb-1">PIFT</span>
              <span className="text-xs text-neutral-300 font-serif font-light">Creative Hub</span>
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
                  <div className="bg-[#080808]/90 border border-neutral-900 px-6 py-4 backdrop-blur-sm min-w-[170px] text-center group-hover:border-[#991b1b]/50">
                    <span className="text-xs sm:text-sm font-serif text-neutral-300 group-hover:text-white">{node.title}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex md:hidden flex-col items-center gap-4 w-full px-4 z-10">
            <div className="w-full bg-[#080808] border border-[#991b1b] p-6 text-center mb-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#991b1b] font-bold block mb-1">PIFT</span>
              <span className="text-sm text-neutral-200 font-serif font-light">Creative Hub</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {ecosystemNodes.map((node, index) => (
                <div key={index} className="bg-[#0c0c0c] border border-neutral-900 p-4 text-center">
                  <span className="text-sm font-serif text-neutral-300">{node.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CAMPUS EXPERIENCE SECTION */}
      <section className="bg-black py-20 px-6 md:py-28 lg:px-16 w-full flex flex-col justify-center items-center">
        <div className="max-w-7xl w-full mx-auto text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.45em] text-[#be123c] font-bold block mb-4">CAMPUS EXPERIENCE</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light max-w-4xl mx-auto text-neutral-100">Experience Creativity Every Day</h2>
        </div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-5 w-full">
            <div className={`relative w-full ${galleryItems[0].aspectClass} bg-neutral-900 overflow-hidden group border border-neutral-900/40`}>
              <img src={galleryItems[0].imageUrl} alt={galleryItems[0].title} className="w-full h-full object-cover brightness-90 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-2">
                <div className="w-6 h-[2px] bg-[#be123c]" />
                <h3 className="text-lg sm:text-xl font-serif font-light text-neutral-200">{galleryItems[0].title}</h3>
              </div>
            </div>

            <div className="relative w-full aspect-[21/9] bg-neutral-900 overflow-hidden group border border-neutral-900/40">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000" alt="Modern Campus Architecture" className="w-full h-full object-cover brightness-[0.8] transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-2">
                <div className="w-6 h-[2px] bg-[#be123c]" />
                <h3 className="text-lg sm:text-xl font-serif font-light text-neutral-200">Modern Campus</h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:gap-5 w-full">
            {galleryItems.slice(1).map((item, index) => (
              <div key={index} className={`relative w-full ${item.aspectClass} bg-neutral-900 overflow-hidden group border border-neutral-900/40`}>
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover brightness-[0.75] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 z-10 flex flex-col gap-2">
                  <div className="w-5 h-[2px] bg-[#be123c]" />
                  <h3 className="text-sm sm:text-base font-serif font-light text-neutral-200">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LEARNING APPROACH SECTION */}
      <section className="bg-black py-20 px-6 md:py-32 lg:px-16 w-full flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#060304] to-transparent opacity-80" />
          <svg className="absolute bottom-0 left-0 w-full h-[40vh] text-[#0d0708]/40" viewBox="0 0 1440 400" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,400 L720,180 L1440,400 Z" />
          </svg>
        </div>

        <div className="max-w-7xl w-full mx-auto text-center mb-24 md:mb-32 relative z-10">
          <span className="text-xs uppercase tracking-[0.45em] text-[#991b1b] font-bold block mb-4">LEARNING APPROACH</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light max-w-4xl mx-auto text-neutral-100">Learn Beyond The Classroom</h2>
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10">
          <div className="absolute top-7 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-[#991b1b]/40 to-transparent hidden md:block" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 lg:gap-x-12">
            {learningSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group relative">
                <div className="w-14 h-14 border border-[#991b1b]/30 bg-black flex items-center justify-center text-[#991b1b] font-mono text-xs mb-8 transition-all duration-300 group-hover:border-[#991b1b]">
                  {step.number}
                </div>
                <div className="space-y-3 px-2">
                  <h3 className="text-xl sm:text-2xl font-serif font-light text-neutral-100">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-light max-w-xs mx-auto">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRY CONNECTIONS SECTION */}
      <section className="bg-black py-20 px-6 md:py-28 lg:px-16 w-full flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 pt-2">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-[#be123c] font-bold block mb-6">INDUSTRY CONNECTIONS</span>
              <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-serif font-light leading-[1.15] tracking-tight text-neutral-100 max-w-xl">
                Built With Industry. <br />
                <span className="text-[#be123c] italic font-normal">Designed For Industry.</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-10">
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-light max-w-xl lg:pl-4">
              Students gain exposure through workshops, seminars, industry interactions and professional experiences that align academic learning with real-world requirements.
            </p>
            <div className="w-full border-t border-neutral-900/60 lg:pl-4">
              {industryLinks.map((item, index) => (
                <a key={index} href="#" className="flex items-center justify-between py-5 sm:py-6 border-b border-neutral-900/60 group">
                  <div className="flex items-center gap-4">
                    <Square className="w-3 h-3 text-[#be123c] stroke-[2] fill-none" />
                    <span className="text-base sm:text-lg font-serif text-neutral-400 group-hover:text-white transition-colors duration-300 font-light">
                      {item.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. LEADERSHIP MESSAGE SECTION */}
      <section className="bg-black py-20 px-6 md:py-28 lg:px-16 w-full flex flex-col justify-center items-center">
        <div className="max-w-7xl w-full mx-auto text-center mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.45em] text-[#be123c] font-bold block mb-4">LEADERSHIP</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-neutral-100">Message From Leadership</h2>
        </div>

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 bg-[#080808] border border-neutral-900/60 shadow-2xl overflow-hidden">
          <div className="md:col-span-6 relative aspect-[4/5] md:aspect-auto w-full h-full min-h-[400px] md:min-h-[550px] bg-neutral-900 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" alt="Founder & Director" className="w-full h-full object-cover filter grayscale contrast-115 brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 opacity-60">
              <div className="w-4 h-[1px] bg-[#be123c]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-300">Director, PIFT</span>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative bg-[#060606]">
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#be123c]/5 filter blur-[60px] pointer-events-none" />
            <div className="space-y-8 relative z-10">
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
      <section className="bg-black py-20 px-6 md:py-32 lg:px-16 w-full flex flex-col justify-center items-center">
        <div className="max-w-7xl w-full mx-auto text-center mb-24 md:mb-32">
          <span className="text-xs uppercase tracking-[0.45em] text-[#be123c] font-bold block mb-4">STUDENT JOURNEY</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-neutral-100">Your Path to Creative Excellence</h2>
        </div>

        <div className="max-w-5xl w-full mx-auto relative px-4 sm:px-6">
          <div className="absolute left-8 md:left-1/2 top-2 bottom-2 w-[1px] bg-neutral-900 -translate-x-1/2" />
          <div className="space-y-16 md:space-y-24">
            {journeySteps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row relative items-start md:items-center w-full ${step.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-8 md:left-1/2 top-1 md:top-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 z-10 bg-black flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-black border border-[#be123c] outline outline-2 outline-[#be123c]/20" />
                </div>
                <div className="hidden md:block w-1/2" />
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${step.align === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16'} group`}>
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#be123c] font-semibold block">{step.stepNumber}</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-light text-neutral-100">{step.title}</h3>
                    <p className={`text-xs sm:text-sm text-neutral-500 font-light leading-relaxed max-w-sm ${step.align === 'left' ? 'md:ml-auto' : ''}`}>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. TESTIMONIALS SECTION */}
      <section className="bg-[#050505] py-20 px-6 md:py-32 lg:px-16 w-full flex flex-col justify-center items-center">
        <div className="max-w-7xl w-full mx-auto text-center mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.45em] text-[#be123c] font-bold block mb-4">VOICES OF PIFT</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-neutral-100">Voices of PIFT</h2>
        </div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-[#0a0a0a]/70 border border-neutral-900/60 hover:border-neutral-800/80 p-8 sm:p-10 flex flex-col justify-between min-h-[380px] transition-all duration-300 group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#be123c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="space-y-6 relative z-10">
                <div className="text-[#be123c] flex items-center">
                  <Quote className="w-6 h-6 fill-current transform scale-x-[-1] opacity-80" />
                </div>
                <p className="text-neutral-400 font-serif font-light text-base leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-neutral-900/60 relative z-10 mt-6">
                <div className="w-12 h-12 bg-neutral-900 overflow-hidden flex-shrink-0 border border-neutral-800 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col space-y-0.5">
                  <h4 className="text-sm font-serif text-neutral-200">{item.name}</h4>
                  <span className="text-[11px] text-[#be123c] font-medium block">{item.course}</span>
                  <span className="text-[10px] text-neutral-500 font-light block">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. FUTURE VISION SECTION */}
      <section className="relative min-h-screen w-full bg-[#030102] overflow-hidden flex items-center justify-center px-6 py-20 md:py-28">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1920" alt="Future Design Background" className="w-full h-full object-cover filter grayscale contrast-125" />
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
            <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-light leading-[1.15] text-neutral-100">
              Shaping The Future Of <span className="text-[#991b1b] italic font-normal block sm:inline">Creative</span> <br />
              <span className="text-[#991b1b] italic font-normal">Education</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light max-w-2xl mb-12 sm:mb-16 px-4">
            PIFT continues to evolve by integrating innovation, technology, sustainability and industry collaboration into every aspect of learning.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 max-w-3xl px-4">
            {corePillars.map((pillar, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#991b1b]" />
                <span className="text-xs sm:text-sm tracking-[0.25em] text-neutral-400 font-medium group-hover:text-white transition-colors duration-300">{pillar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA SECTION */}
      <section className="bg-black py-24 px-6 md:py-36 lg:px-16 w-full flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#e11d48]/10 filter blur-[90px] pointer-events-none z-0" />
        
        <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-neutral-900 pointer-events-none hidden sm:block" />
        <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-neutral-900 pointer-events-none hidden sm:block" />
        <div className="absolute bottom-8 left-8 w-10 h-10 border-b border-l border-neutral-900 pointer-events-none hidden sm:block" />
        <div className="absolute bottom-8 right-8 w-10 h-10 border-b border-r border-neutral-900 pointer-events-none hidden sm:block" />

        <div className="relative z-10 max-w-5xl w-full mx-auto text-center flex flex-col items-center justify-center">
          <span className="text-xs uppercase tracking-[0.4em] text-[#e11d48] font-bold block mb-8 sm:mb-10">BEGIN YOUR JOURNEY</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-serif font-light leading-[1.2] tracking-wide text-neutral-100 mb-6 max-w-4xl px-2">
            &ldquo;Your Creative Future <span className="text-[#e11d48] italic font-normal block sm:inline">Begins</span> <br />
            <span className="text-[#e11d48] italic font-normal">Here.&rdquo;</span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base font-light tracking-wide max-w-xl mb-12 sm:mb-16">
            Join a community of innovators, designers and future industry leaders.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full max-w-3xl px-4">
            <button className="w-full sm:w-auto bg-[#e11d48] hover:bg-[#be123c] text-white text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 flex items-center justify-center gap-2 group shadow-lg shadow-[#e11d48]/10">
              Apply Now
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="w-full sm:w-auto border border-neutral-800 hover:border-neutral-400 text-neutral-300 hover:text-white text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-2 group">
              Download Brochure
              <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
            <button className="w-full sm:w-auto border border-neutral-800 hover:border-neutral-400 text-neutral-300 hover:text-white text-xs tracking-[0.2em] font-semibold uppercase px-8 py-4 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-2 group">
              Book Campus Visit
              <Calendar className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-105" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}