'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // Imported Next.js Image component
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Globe, 
  FlaskConical, 
  Compass, 
  UserPlus, 
  BookOpen, 
  Palette, 
  GraduationCap, 
  Star, 
  Calendar, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Download 
} from 'lucide-react';

// ==========================================
// DATA STRUCTURES & CONFIGURATIONS
// ==========================================

const accreditations = [
  { acronym: 'ASSOCHAM', fullName: 'Assoc. Chambers Commerce' },
  { acronym: 'UGC', fullName: 'University Grants Commission' },
  { acronym: 'AICTE', fullName: 'All India Council' },
  { acronym: 'NSDC', fullName: 'Nat. Skill Dev. Corp.' },
  { acronym: 'Skill India', fullName: 'Govt. of India' },
];

const achievements = [
  { metric: '12K+', title: 'Successful Alumni', description: 'Across 45+ countries worldwide' },
  { metric: '38+', title: 'Industry Collaborations', description: 'Leading global fashion houses' },
  { metric: '97%', title: 'Placement Success', description: 'Consistent year over year' },
  { metric: '25+', title: 'Years Legacy', description: "Shaping India's design landscape" },
];

const coreFeatures = [
  'Industry-Oriented Curriculum',
  'Expert Faculty',
  'Global Exposure',
  'Practical Learning',
  'Modern Infrastructure',
];

const programs = [
  {
    title: 'Fashion Design',
    duration: '3 YEARS',
    description: 'Master the art of couture and ready-to-wear. From concept to collection, build a portfolio that speaks to global fashion houses.',
    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Interior Design',
    duration: '3 YEARS',
    description: 'Transform spaces into experiences. Learn spatial planning, materials, and the language of luxury environments.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Textile Design',
    duration: '2 YEARS',
    description: 'Explore the world of fibers, weaves, prints, and sustainability in fashion. Create fabrics that tell a story.',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Fashion Styling',
    duration: '1 YEAR',
    description: 'Develop your visual storytelling through editorial, commercial, and runway styling. The eye that curates the look.',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Design Management',
    duration: '2 YEARS',
    description: 'Lead creative businesses. Combine design thinking with strategic management for the fashion and design industry.',
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Visual Communication',
    duration: '2 YEARS',
    description: 'Brand, type, motion — command the complete visual language of contemporary creative communication.',
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=600',
  },
];

const advantages = [
  { icon: <Users className="w-5 h-5 stroke-[2]" />, title: 'Industry Mentorship', description: "Direct access to India's leading fashion designers, creative directors, and brand strategists." },
  { icon: <Briefcase className="w-5 h-5 stroke-[2]" />, title: 'Live Projects', description: 'Work on real briefs from real brands. Your portfolio is built on actual industry deliverables.' },
  { icon: <TrendingUp className="w-5 h-5 stroke-[2]" />, title: 'Placement Assistance', description: 'Dedicated placement cell with 500+ recruiters across fashion, retail, and design sectors.' },
  { icon: <Globe className="w-5 h-5 stroke-[2]" />, title: 'Global Exposure', description: 'Study tours, international workshops, and exchange programs with partner institutions.' },
  { icon: <FlaskConical className="w-5 h-5 stroke-[2]" />, title: 'Innovation Labs', description: 'State-of-the-art labs for draping, textiles, digital fashion, and sustainable design research.' },
  { icon: <Compass className="w-5 h-5 stroke-[2]" />, title: 'Career Guidance', description: 'One-on-one counseling, portfolio reviews, and personalized career roadmaps from Day 1.' },
];

const infraItems = [
  { title: 'Modern Labs', imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600', gridClasses: 'md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto md:h-[560px]' },
  { title: 'Fashion Studios', imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000', gridClasses: 'md:col-span-8 aspect-[21/9] md:h-[268px]' },
  { title: 'Design Workshops', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600', gridClasses: 'md:col-span-4 aspect-square md:aspect-auto md:h-[268px]' },
  { title: 'Library', imageUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=600', gridClasses: 'md:col-span-4 aspect-square md:aspect-auto md:h-[268px]' },
];

const journeySteps = [
  { number: '01', label: 'Step 01', title: 'Enroll', description: 'Begin your creative journey with our streamlined admissions process.', icon: <UserPlus className="w-6 h-6 stroke-[1.5]" /> },
  { number: '02', label: 'Step 02', title: 'Learn', description: 'Immersive, hands-on curriculum taught by industry veterans.', icon: <BookOpen className="w-6 h-6 stroke-[1.5]" /> },
  { number: '03', label: 'Step 03', title: 'Create', description: 'Build a portfolio that reflects your unique design voice.', icon: <Palette className="w-6 h-6 stroke-[1.5]" /> },
  { number: '04', label: 'Step 04', title: 'Intern', description: 'Real experience with leading fashion and design brands.', icon: <Briefcase className="w-6 h-6 stroke-[1.5]" /> },
  { number: '05', label: 'Step 05', title: 'Graduate', description: 'Graduate with credentials recognized across the industry.', icon: <GraduationCap className="w-6 h-6 stroke-[1.5]" /> },
  { number: '06', label: 'Step 06', title: 'Get Placed', description: 'Launch your career with our 97% placement support.', icon: <Star className="w-6 h-6 stroke-[1.5]" /> },
];

const newsStories = [
  { category: 'FASHION TRENDS', title: 'PIFT Graduates Dominate India Couture Week 2026', description: 'Six PIFT alumni showcased their debut collections at India\'s most prestigious runway event, earning critical acclaim.', date: 'May 28, 2026', imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600' },
  { category: 'STUDENT ACHIEVEMENT', title: 'Priya Sharma Wins International Textile Design Award', description: 'Second-year student Priya Sharma brings home gold from the Geneva International Design Competition.', date: 'May 14, 2026', imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600' },
  { category: 'INDUSTRY COLLABORATION', title: 'PIFT Partners with Reliance Brands for Exclusive Internship Program', description: 'New MOU signed to place 200 students annually across Reliance\'s portfolio of luxury retail brands.', date: 'April 30, 2026', imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600' },
  { category: 'EVENTS', title: 'Annual Design Extravaganza 2026 — A Night to Remember', description: 'Over 3000 guests attended PIFT\'s signature showcase, featuring 120 student collections.', date: 'April 15, 2026', imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600' },
  { category: 'PLACEMENT STORY', title: 'From Campus to Prada: Arjun Mehta\'s Journey', description: 'PIFT alumnus Arjun Mehta shares how his education prepared him for a role at one of fashion\'s most iconic houses.', date: 'March 22, 2026', imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=600' },
  { category: 'COMPETITION', title: 'Team PIFT Wins National Design Challenge for Third Year Running', description: 'Our students swept all three top positions at the National Institute Design Challenge held in New Delhi.', date: 'March 5, 2026', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600' },
];

const eventsCalendar = [
  { day: '15', month: 'JUN', category: 'SIGNATURE EVENT', title: 'Annual Fashion Show 2026', location: 'PIFT Grand Auditorium', description: 'The most anticipated fashion showcase of the year — 200+ student collections on the runway.' },
  { day: '22', month: 'JUN', category: 'WORKSHOP', title: 'Industry Workshop: Sustainable Fashion', location: 'Design Studio Block A', description: 'Led by Creative Director Anita Dongre — a masterclass in responsible design practices.' },
  { day: '5', month: 'JUL', category: 'ACADEMIC', title: 'Portfolio Review Day', location: 'Gallery & Exhibition Hall', description: "Final portfolio evaluations with panels from India's top design studios and fashion houses." },
  { day: '18', month: 'JUL', category: 'COMPETITION', title: 'Inter-College Design Competition', location: 'Innovation Center', description: '15 institutions compete across fashion, interior, textile, and visual communication tracks.' },
  { day: '30', month: 'JUL', category: 'LECTURE SERIES', title: 'Guest Lecture: FDCI & International Partners', location: 'Seminar Hall', description: 'Global fashion industry leaders share insights on the future of luxury and design innovation.' },
];

const industryPartnersRow1 = [{ name: 'Biba' }, { name: 'Reliance Brands' }, { name: 'FabIndia' }, { name: 'Manyavar' }, { name: 'LVMH India' }];
const industryPartnersRow2 = [{ name: 'Westside' }, { name: 'Pantaloons' }, { name: 'Vero Moda' }, { name: 'Only' }, { name: 'Zara India' }, { name: 'H&M India' }];

const testimonials = [
  {
    quote: "PIFT didn't just teach me fashion — it gave me a philosophy. The mentorship, the real-world projects, the relentless pursuit of excellence. I credit every creative instinct I have to my years at PIFT.",
    name: "Priya Malhotra", role: "Creative Director", company: "Sabyasachi Couture", classYear: "Class of 2018",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "The exposure to international design paradigms and hands-on structural engineering at the labs redefined my creative limits. It bridged the huge gap between student ideas and scalable luxury products.",
    name: "Rohan Verma", role: "Senior Accessories Designer", company: "Vero Moda Global", classYear: "Class of 2016",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "Working on complex corporate live briefs directly under elite creative directors while on campus completely stripped away my real-world anxiety. I landed my global dream placement instantly.",
    name: "Ananya Sen", role: "Lead Brand Strategist", company: "Reliance Brands Luxury", classYear: "Class of 2021",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const placementMetrics = [
  { icon: <TrendingUp className="w-5 h-5" />, value: '97%', label: 'Placement Success Rate' },
  { icon: <Users className="w-5 h-5" />, value: '500+', label: 'Active Recruiters' },
  { icon: <Briefcase className="w-5 h-5" />, value: '1000+', label: 'Internship Opportunities' },
];

const topRecruiters = ['Sabyasachi', 'Manish Malhotra', 'Ritu Kumar', 'Rohit Bal', 'Tarun Tahiliani', 'Fabindia', 'Manyavar', 'Biba'];
const bottomRecruiters = ['W for Woman', 'Westside', 'Myntra', 'Nykaa Fashion', 'Aditya Birla Fashion', 'Reliance Retail', 'Shoppers Stop'];

const galleryItems = [
  { title: 'Annual Show 2026', imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800' },
  { title: 'Runway Showcase', imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800' },
  { title: 'Design Studio', imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
  { title: 'Student Workshop', imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200' },
  { title: 'Campus Life', imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800' },
  { title: 'Interior Projects', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
];

// ==========================================
// CENTRAL NEXT.JS COMPONENT ASSEMBLY
// ==========================================

export default function PiftInstitutionalPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="w-full bg-[#09090b] text-white selection:bg-[#ff4646]/30 selection:text-white antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO SECTION */}
      <header className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20 relative">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 md:space-y-8 z-10">
            <div className="flex items-center space-x-3">
              <div className="h-[2px] w-8 bg-[#e11d48]" />
              <span className="text-[#e11d48] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold font-sans">
                India's Premier Fashion & Design Institute
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-[1.1] text-stone-100">
              Pinnacle Institute <br />
              of <span className="text-[#e11d48] italic font-serif font-medium pr-1">Fashion</span> <br />
              Technology
            </h1>
            <p className="text-stone-400 font-sans text-sm md:text-base max-w-xl leading-relaxed font-light">
              Where creativity meets innovation. Build your future in Fashion Design, Interior Design, Textile Design and Creative Industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="flex items-center justify-center space-x-2 bg-[#ff4646] hover:bg-[#e13535] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#ff4646]/20 text-sm tracking-wide">
                <span>APPLY FOR ADMISSION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center bg-transparent border border-stone-800 hover:border-stone-600 hover:bg-stone-900/50 text-stone-200 font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wide">
                EXPLORE PROGRAMS
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-6 border-t border-stone-900/60 max-w-lg">
              <div className="flex items-center space-x-2.5 text-stone-400 text-sm font-sans"><CheckCircle2 className="w-4 h-4 text-[#e11d48] shrink-0" /><span>University Recognized</span></div>
              <div className="flex items-center space-x-2.5 text-stone-400 text-sm font-sans"><CheckCircle2 className="w-4 h-4 text-[#e11d48] shrink-0" /><span>Industry Aligned Curriculum</span></div>
              <div className="flex items-center space-x-2.5 text-stone-400 text-sm font-sans"><CheckCircle2 className="w-4 h-4 text-[#e11d48] shrink-0" /><span>Placement Assistance</span></div>
              <div className="flex items-center space-x-2.5 text-stone-400 text-sm font-sans"><CheckCircle2 className="w-4 h-4 text-[#e11d48] shrink-0" /><span>International Exposure</span></div>
            </div>
          </div>
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-[540px] aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800" 
                alt="Runway Backstage Model" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                priority
                className="w-full h-full object-cover grayscale brightness-95 contrast-105 scale-105 transition-transform duration-700 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 mix-blend-multiply" />
              <div className="absolute top-[8%] left-[4%] backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-4 min-w-[130px]"><div className="text-xl md:text-2xl font-bold font-sans text-[#e11d48]">12K+</div><div className="text-[10px] md:text-xs text-stone-400 tracking-wider font-light">Alumni Worldwide</div></div>
              <div className="absolute top-[38%] right-[4%] backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-4 min-w-[130px]"><div className="text-xl md:text-2xl font-bold font-sans text-[#e11d48]">97%</div><div className="text-[10px] md:text-xs text-stone-400 tracking-wider font-light">Placement Rate</div></div>
              <div className="absolute bottom-[35%] left-[4%] backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-4 min-w-[130px]"><div className="text-xl md:text-2xl font-bold font-sans text-[#e11d48]">38+</div><div className="text-[10px] md:text-xs text-stone-400 tracking-wider font-light">Industry Partners</div></div>
              <div className="absolute bottom-[8%] right-[4%] backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-4 min-w-[140px]"><div className="text-xl md:text-2xl font-bold font-sans text-[#e11d48]">25+</div><div className="text-[10px] md:text-xs text-stone-400 tracking-wider font-light">Years of Excellence</div></div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2: ACCREDITATION BAR */}
      <div className="w-full py-12 px-6 md:px-12 border-t border-b border-stone-900/60">
        <div className="max-w-7xl mx-auto flex flex-col space-y-8">
          <div className="flex items-center space-x-3">
            <div className="h-[1.5px] w-6 bg-[#ff4646]" />
            <h2 className="text-[#ff4646] uppercase tracking-[0.25em] text-xs font-semibold font-sans">RECOGNIZED & ACCREDITED BY</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8 items-center justify-between pt-2">
            {accreditations.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1 opacity-85 hover:opacity-100 transition-opacity duration-300 group">
                <span className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-stone-200 tracking-wide transition-colors duration-300 group-hover:text-white">{item.acronym}</span>
                <span className="text-[11px] md:text-xs text-stone-500 tracking-wider font-sans font-light">{item.fullName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3: ACHIEVEMENTS SECTION */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 mb-8 w-full max-w-[200px]">
            <div className="h-[1px] flex-1 bg-stone-800" /><div className="w-1.5 h-1.5 rounded-full bg-[#ff4646]" /><div className="h-[1px] flex-1 bg-stone-800" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-center leading-[1.2] mb-16 max-w-3xl">
            <span className="text-stone-100 block md:inline">Creating Designers.</span>{' '}
            <span className="text-[#ff4646] italic block md:inline font-medium">Building Futures.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {achievements.map((item, idx) => (
              <div key={idx} className="bg-[#111111]/40 backdrop-blur-sm border border-stone-900 rounded-[2rem] p-8 flex flex-col items-center text-center justify-center min-h-[260px] transition-all duration-300 hover:border-stone-800 hover:bg-[#111111]/70 group">
                <div className="text-4xl md:text-5xl font-serif text-[#ff4646] tracking-tight mb-4 group-hover:scale-105 transition-transform duration-300">{item.metric}</div>
                <h3 className="text-white font-sans text-base md:text-lg font-medium tracking-wide mb-2">{item.title}</h3>
                <p className="text-stone-500 font-sans text-xs md:text-sm tracking-wide leading-relaxed max-w-[200px] font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ABOUT SECTION */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 h-full w-full max-w-[580px] mx-auto lg:mx-0">
            <div className="sm:col-span-6 relative aspect-[4/6] sm:aspect-auto sm:h-[460px] rounded-[2rem] overflow-hidden group shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600" 
                alt="Tall Studio Render" 
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="sm:col-span-6 flex flex-col gap-4 h-full justify-between">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600" 
                  alt="Interior Segment" 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="w-full h-full object-cover brightness-95 transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600" 
                  alt="Living Architecture" 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="w-full h-full object-cover brightness-90 transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8">
            <div className="flex items-center space-x-3">
              <div className="h-[1.5px] w-6 bg-[#ff4646]" />
              <span className="text-[#ff4646] uppercase tracking-[0.25em] text-xs font-semibold font-sans">ABOUT PIFT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-[1.2]">
              <span className="text-stone-100 block">Crafting Vision.</span>
              <span className="text-[#ff4646] italic font-medium font-serif mt-1 block">Creating Legacy.</span>
            </h2>
            <p className="text-stone-400 font-sans text-sm md:text-base leading-relaxed font-light max-w-xl">
              PIFT has empowered thousands of students through industry-driven education, innovative learning experiences and professional mentorship. We bridge the gap between creative vision and professional execution.
            </p>
            <div className="flex flex-col space-y-3.5 max-w-md pt-2">
              {coreFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-stone-300 font-sans text-sm md:text-base">
                  <CheckCircle2 className="w-[18px] h-[18px] text-[#ff4646] shrink-0 stroke-[2.5]" />
                  <span className="tracking-wide font-light">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center space-x-2 bg-[#ff4646] hover:bg-[#e13535] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#ff4646]/10 text-sm tracking-wide">
                <span>DISCOVER PIFT</span><ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center bg-transparent border border-stone-800 hover:border-stone-600 hover:bg-stone-900/50 text-stone-200 font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wide">CAMPUS TOUR</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ACADEMIC PROGRAMS SECTION */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-[1px] w-6 bg-[#ff4646]" /><span className="text-[#ff4646] uppercase tracking-[0.25em] text-xs font-semibold font-sans">ACADEMIC PROGRAMS</span><div className="h-[1px] w-6 bg-[#ff4646]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-center leading-[1.2] mb-4">
            Shape Your <span className="text-[#ff4646] italic font-medium font-serif">Future</span>
          </h2>
          <p className="text-stone-400 font-sans text-sm md:text-base text-center max-w-2xl font-light leading-relaxed mb-16">
            Explore industry-leading programs designed for tomorrow's creative professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-[#111111]/40 backdrop-blur-sm border border-stone-900 rounded-[2rem] p-5 flex flex-col justify-between group transition-all duration-300 hover:border-stone-800/80 hover:bg-[#111111]/70">
                <div>
                  <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-5">
                    <Image 
                      src={program.imageUrl} 
                      alt={program.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                      className="w-full h-full object-cover grayscale brightness-[0.85] contrast-[1.05] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-95" 
                    />
                  </div>
                  <div className="flex items-center space-x-1.5 text-[#ff4646] text-[11px] font-semibold tracking-wider mb-2.5 font-sans">
                    <Clock className="w-3.5 h-3.5 stroke-[2.5]" /><span>{program.duration}</span>
                  </div>
                  <h3 className="text-xl font-serif text-stone-100 tracking-wide mb-3 transition-colors duration-300 group-hover:text-white">{program.title}</h3>
                  <p className="text-stone-500 font-sans text-xs md:text-sm tracking-wide leading-relaxed font-light mb-6 line-clamp-3">{program.description}</p>
                </div>
                <div className="flex items-center space-x-3 pt-2">
                  <button className="flex-1 flex items-center justify-center space-x-1 bg-[#ff4646] hover:bg-[#e13535] text-white font-medium py-3 rounded-full transition-all duration-300 text-xs tracking-wider">
                    <span>APPLY NOW</span><ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button className="flex-1 flex items-center justify-center bg-transparent border border-stone-800 hover:border-stone-600 hover:bg-stone-900/40 text-stone-400 hover:text-stone-200 font-medium py-3 rounded-full transition-all duration-300 text-xs tracking-wider">LEARN MORE</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY STUDENTS CHOOSE PIFT */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-start px-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-[1.5px] w-6 bg-[#ff4646]" /><span className="text-[#ff4646] uppercase tracking-[0.25em] text-xs font-semibold font-sans">THE PIFT ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-[1.2] mb-16">
            Why Students <span className="text-[#ff4646] italic font-medium font-serif">Choose</span> PIFT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-[#111111]/40 backdrop-blur-sm border border-stone-900/80 rounded-[2rem] p-8 flex flex-col items-start transition-all duration-300 hover:border-stone-800/80 hover:bg-[#111111]/70 group">
                <div className="bg-[#ff4646]/10 p-3.5 rounded-2xl text-[#ff4646] mb-6 group-hover:scale-105 transition-transform duration-300">{adv.icon}</div>
                <h3 className="text-xl font-serif text-stone-100 tracking-wide mb-3 transition-colors duration-300 group-hover:text-white">{adv.title}</h3>
                <p className="text-stone-500 font-sans text-xs md:text-sm tracking-wide leading-relaxed font-light">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CAMPUS EXPERIENCE (INFRASTRUCTURE BENTO) */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start lg:items-end mb-16 px-2">
            <div className="lg:col-span-6 flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="h-[1.5px] w-6 bg-[#ff4646]" /><span className="text-[#ff4646] uppercase tracking-[0.25em] text-xs font-semibold font-sans">CAMPUS LIFE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-[1.2]">
                World-Class <br /><span className="text-[#ff4646] italic font-medium font-serif mt-1 block">Infrastructure</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pl-8 pb-1">
              <p className="text-stone-400 font-sans text-sm md:text-base leading-relaxed font-light max-w-xl">
                Our campus is designed to inspire creativity at every turn — from cutting-edge studios to quiet contemplation spaces.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-6xl mx-auto">
            {infraItems.map((item, idx) => (
              <div key={idx} className={`relative rounded-[2rem] overflow-hidden border border-stone-900/40 bg-[#111111]/20 group shadow-xl transition-all duration-300 hover:border-stone-800/80 ${item.gridClasses}`}>
                <Image 
                  src={item.imageUrl} 
                  alt={item.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 760px"
                  className="w-full h-full object-cover grayscale brightness-[0.80] contrast-[1.05] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:from-black/90" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block bg-[#161616]/70 backdrop-blur-md border border-white/5 text-stone-300 group-hover:text-white font-sans text-xs md:text-sm font-medium tracking-wide py-2.5 px-5 rounded-full transition-colors duration-300 shadow-lg">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: STUDENT SUCCESS JOURNEY */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-[1px] w-6 bg-[#ff4646]" /><span className="text-[#ff4646] uppercase tracking-[0.25em] text-xs font-semibold font-sans">YOUR PATH FORWARD</span><div className="h-[1px] w-6 bg-[#ff4646]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-center leading-[1.2] mb-24">
            Student <span className="text-[#ff4646] italic font-medium font-serif">Success</span> Journey
          </h2>
          <div className="relative w-full max-w-6xl mt-4">
            <div className="absolute top-[48px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-[#ff4646]/20 via-[#ff4646]/80 to-[#ff4646]/20 hidden lg:block z-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-6 relative z-10">
              {journeySteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <span className="absolute -top-1.5 -right-1.5 bg-[#ff4646] text-white font-sans font-bold text-[10px] w-5 h-5 flex items-center justify-center rounded-full border border-[#09090b] shadow-md">{step.number}</span>
                    <div className="w-[96px] h-[96px] rounded-full bg-[#111111]/60 border border-stone-900 flex items-center justify-center text-stone-400 group-hover:text-[#ff4646] group-hover:border-[#ff4646]/40 transition-all duration-300 shadow-xl relative overflow-hidden group-hover:before:opacity-100 before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#ff4646]/0 before:to-[#ff4646]/10 before:opacity-0 before:transition-opacity">
                      <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">{step.icon}</div>
                    </div>
                  </div>
                  <span className="text-[#ff4646] uppercase tracking-[0.2em] text-[10px] font-semibold font-sans mb-1.5">{step.label}</span>
                  <h3 className="text-lg font-serif text-stone-100 tracking-wide mb-2 transition-colors duration-300 group-hover:text-white">{step.title}</h3>
                  <p className="text-stone-500 font-sans text-xs tracking-wide leading-relaxed font-light max-w-[160px] sm:max-w-none px-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: LATEST NEWS & STORIES */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-[1.5px] w-6 bg-[#ff4646]" /><span className="text-[#ff4646] uppercase tracking-[0.25em] text-xs font-semibold font-sans">NEWS & STORIES</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-[1.2]">
              Latest News & <span className="text-[#ff4646] italic font-medium font-serif">Stories</span>
            </h2>
            <a href="#" className="flex items-center space-x-2 text-[#ff4646] hover:text-[#e13535] font-sans text-sm font-medium tracking-wide transition-colors duration-300 group pt-1">
              <span>View All Stories</span><ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            {newsStories.map((story, idx) => (
              <div key={idx} className="bg-[#111111]/40 backdrop-blur-sm border border-stone-900 rounded-[2rem] p-5 flex flex-col justify-between group transition-all duration-300 hover:border-stone-800/80 hover:bg-[#111111]/70 shadow-xl">
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-5">
                    <Image 
                      src={story.imageUrl} 
                      alt={story.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                      className="w-full h-full object-cover grayscale brightness-[0.85] contrast-[1.02] transition-transform duration-700 group-hover:scale-103 group-hover:grayscale-0 group-hover:brightness-95" 
                    />
                  </div>
                  <div className="mb-4"><span className="inline-block bg-[#ff4646]/10 text-[#ff4646] text-[10px] font-semibold tracking-wider px-3 py-1.5 rounded-full font-sans">{story.category}</span></div>
                  <h3 className="text-lg md:text-xl font-serif text-stone-100 tracking-wide mb-3 leading-snug group-hover:text-white line-clamp-2 transition-colors duration-300">{story.title}</h3>
                  <p className="text-stone-500 font-sans text-xs md:text-sm tracking-wide leading-relaxed font-light mb-6 line-clamp-3">{story.description}</p>
                </div>
                <div className="flex items-center space-x-2 text-stone-600 font-sans text-xs border-t border-stone-900/60 pt-4 mt-auto">
                  <Calendar className="w-3.5 h-3.5 stroke-[1.8]" /><span className="font-light tracking-wide">{story.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: UPCOMING EVENTS CALENDAR */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-12 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-[1.5px] w-6 bg-[#ff4646]" /><span className="text-[#ff4646] uppercase tracking-[0.25em] text-xs font-semibold font-sans">CALENDAR</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif tracking-tight leading-[1.15]">Upcoming <span className="text-[#ff4646] italic font-medium font-serif">Events</span></h2>
            <p className="text-stone-400 font-sans text-sm md:text-base leading-relaxed font-light max-w-sm pt-2">From runway showcases to industry workshops — life at PIFT is never ordinary. Stay connected with our vibrant calendar.</p>
            <div className="pt-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#ff4646] hover:bg-[#e13535] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wide group shadow-lg">
                <span>VIEW FULL CALENDAR</span><ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col space-y-5 w-full">
            {eventsCalendar.map((event, idx) => (
              <div key={idx} className="bg-[#111111]/30 backdrop-blur-sm border border-stone-900 rounded-[1.8rem] p-6 md:p-8 flex flex-col sm:flex-row items-start gap-6 transition-all duration-300 hover:border-stone-800/80 hover:bg-[#111111]/60 group shadow-lg">
                <div className="bg-[#ff4646]/5 border border-[#ff4646]/15 rounded-2xl w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center shrink-0 group-hover:bg-[#ff4646]/10 group-hover:border-[#ff4646]/25 transition-all duration-300">
                  <span className="text-2xl md:text-3xl font-serif font-bold text-[#ff4646] tracking-tighter leading-none">{event.day}</span>
                  <span className="text-[10px] md:text-xs font-sans font-medium text-stone-400 tracking-widest mt-1">{event.month}</span>
                </div>
                <div className="flex-1 flex flex-col space-y-2">
                  <div className="text-[10px] md:text-xs font-semibold tracking-wider text-[#ff4646] font-sans">{event.category}</div>
                  <h3 className="text-lg md:text-xl font-serif text-stone-100 tracking-wide group-hover:text-white transition-colors duration-300">{event.title}</h3>
                  <div className="flex items-center space-x-1.5 text-stone-500 font-sans text-xs font-light">
                    <MapPin className="w-3.5 h-3.5 text-stone-600 shrink-0" /><span>{event.location}</span>
                  </div>
                  <p className="text-stone-500 font-sans text-xs md:text-sm tracking-wide leading-relaxed font-light pt-1.5">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: INDUSTRY PARTNERS ROW */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-[1px] w-6 bg-[#ff4646]" /><span className="text-[#ff4646] uppercase tracking-[0.25em] text-xs font-semibold font-sans">INDUSTRY NETWORK</span><div className="h-[1px] w-6 bg-[#ff4646]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-[1.2] mb-16">
            Trusted By <span className="text-[#ff4646] italic font-medium font-serif">Industry Leaders</span>
          </h2>
          <div className="w-full flex flex-col space-y-4 max-w-5xl items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              {industryPartnersRow1.map((partner, idx) => (
                <div key={idx} className="bg-[#111111]/30 backdrop-blur-sm border border-stone-900/80 rounded-2xl px-8 py-4 flex items-center justify-center min-w-[140px] md:min-w-[170px] hover:border-stone-800 hover:bg-[#111111]/60 transition-all duration-300 group shadow-md">
                  <span className="text-stone-400 font-sans text-sm md:text-base font-medium tracking-wide group-hover:text-stone-200 transition-colors duration-300">{partner.name}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              {industryPartnersRow2.map((partner, idx) => (
                <div key={idx} className="bg-[#111111]/30 backdrop-blur-sm border border-stone-900/80 rounded-2xl px-8 py-4 flex items-center justify-center min-w-[140px] md:min-w-[170px] hover:border-stone-800 hover:bg-[#111111]/60 transition-all duration-300 group shadow-md">
                  <span className="text-stone-400 font-sans text-sm md:text-base font-medium tracking-wide group-hover:text-stone-200 transition-colors duration-300">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: ALUMNI SUCCESS */}
      <section className="w-full py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-[1px] w-6 bg-[#ff4646]" /><span className="text-[#ff4646] uppercase tracking-[0.25em] text-xs font-semibold font-sans">ALUMNI SUCCESS</span><div className="h-[1px] w-6 bg-[#ff4646]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-center leading-[1.2] mb-16">
            Alumni <span className="text-[#ff4646] italic font-medium font-serif">Speak</span>
          </h2>
          <div className="w-full max-w-5xl bg-[#111111]/30 backdrop-blur-sm border border-stone-900/80 rounded-[2.5rem] p-8 md:p-16 relative flex flex-col justify-between shadow-2xl min-h-[400px]">
            <div className="absolute top-8 left-8 pointer-events-none text-[#ff4646]/5"><Quote className="w-16 h-16 md:w-24 md:h-24 stroke-[1.2] rotate-180" /></div>
            <div className="relative z-10 flex-1 flex flex-col justify-center">
              <p className="text-stone-200 font-serif text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] italic font-light tracking-wide leading-relaxed md:leading-[1.6] max-w-4xl transition-all duration-500">
                {testimonials[activeTestimonial].quote}
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 mt-12 pt-8 border-t border-stone-900/50">
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-stone-800 shrink-0">
                  <Image 
                    src={testimonials[activeTestimonial].avatarUrl} 
                    alt={testimonials[activeTestimonial].name} 
                    fill
                    sizes="48px"
                    className="w-full h-full object-cover grayscale" 
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-stone-100 text-sm md:text-base font-sans font-semibold tracking-wide">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-xs md:text-sm font-sans text-stone-500 font-light mt-0.5">
                    <span className="text-[#ff4646] font-medium">{testimonials[activeTestimonial].role}</span><span className="mx-1.5 text-stone-700">|</span>{testimonials[activeTestimonial].company}
                  </p>
                  <span className="text-[10px] md:text-xs text-stone-600 tracking-wider font-sans font-light mt-0.5">{testimonials[activeTestimonial].classYear}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 self-end sm:self-auto">
                <button onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))} className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-600 transition-colors duration-300"><ChevronLeft className="w-5 h-5" /></button>
                <div className="flex items-center space-x-2 px-1">
                  {testimonials.map((_, dotIdx) => (
                    <button key={dotIdx} onClick={() => setActiveTestimonial(dotIdx)} className={`h-1.5 rounded-full transition-all duration-300 ${dotIdx === activeTestimonial ? 'bg-[#ff4646] w-6' : 'bg-stone-800 w-1.5'}`} />
                  ))}
                </div>
                <button onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))} className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-600 transition-colors duration-300"><ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: PLACEMENT SHOWCASE */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-[1px] w-6 bg-[#ff4646]" /><span className="text-[#ff4646] uppercase tracking-[0.25em] text-xs font-semibold font-sans">PLACEMENTS</span><div className="h-[1px] w-6 bg-[#ff4646]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-center leading-[1.2] mb-4">
            Launching <span className="text-[#ff4646] italic font-medium font-serif">Creative Careers</span>
          </h2>
          <p className="text-stone-400 font-sans text-sm md:text-base text-center max-w-2xl font-light leading-relaxed mb-16">
            Our graduates lead in India's most prestigious fashion houses, studios, and retail empires.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-20">
            {placementMetrics.map((metric, idx) => (
              <div key={idx} className="bg-[#111111]/30 backdrop-blur-sm border border-stone-900/80 rounded-[2rem] p-8 flex flex-col items-center text-center justify-center min-h-[220px] hover:border-stone-800 transition-all duration-300 group shadow-lg">
                <div className="bg-[#ff4646]/10 p-3 rounded-xl text-[#ff4646] mb-5 group-hover:scale-105 transition-transform duration-300">{metric.icon}</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#ff4646] mb-2">{metric.value}</div>
                <p className="text-stone-400 font-sans text-xs md:text-sm tracking-wide font-light max-w-[200px]">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col items-center">
            <span className="text-stone-600 uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold font-sans mb-8">TOP RECRUITERS</span>
            <div className="w-full flex flex-col space-y-4 max-w-5xl items-center justify-center">
              <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                {topRecruiters.map((recruiter, idx) => (
                  <div key={idx} className="bg-[#111111]/20 border border-stone-900/60 rounded-full px-5 py-2.5 hover:border-stone-800 hover:bg-[#111111]/50 group transition-all duration-300">
                    <span className="text-stone-500 text-xs md:text-sm font-sans tracking-wide transition-colors duration-300 group-hover:text-stone-300">{recruiter}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                {bottomRecruiters.map((recruiter, idx) => (
                  <div key={idx} className="bg-[#111111]/20 border border-stone-900/60 rounded-full px-5 py-2.5 hover:border-stone-800 hover:bg-[#111111]/50 group transition-all duration-300">
                    <span className="text-stone-500 text-xs md:text-sm font-sans tracking-wide transition-colors duration-300 group-hover:text-stone-300">{recruiter}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: ASYMMETRIC MASONRY GALLERY */}
      <section className="w-full bg-[#09090b] text-white py-20 px-4 md:px-8 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        <div className="flex flex-col space-y-3 mb-4">
          <div className="flex items-center space-x-3">
            <div className="h-[1.5px] w-6 bg-[#ff4646]" />
            <span className="text-[#ff4646] uppercase tracking-[0.25em] text-xs font-semibold font-sans">
              GALLERY
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-[1.2]">
            Life at <span className="text-[#ff4646] italic font-medium font-serif">PIFT</span>
          </h2>
          <a 
            href="#" 
            className="flex items-center space-x-2 text-stone-400 hover:text-[#ff4646] font-sans text-sm font-medium tracking-wide transition-colors duration-300 group pt-1"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 w-full max-w-6xl mx-auto items-stretch">
          
          {/* Row Segment 1: Upper Blocks */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="relative rounded-[1.8rem] overflow-hidden border border-stone-900/60 bg-[#111111]/20 group shadow-lg w-full h-full min-h-[300px]">
              <Image
                src={galleryItems[0].imageUrl}
                alt={galleryItems[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-full object-cover grayscale brightness-[0.80] contrast-[1.05] transition-transform duration-700 group-hover:scale-103 group-hover:grayscale-0 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-6">
                <span className="text-stone-300 font-sans text-xs md:text-sm tracking-wide font-light">
                  {galleryItems[0].title}
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-8 gap-5">
            <div className="md:col-span-4 relative rounded-[1.8rem] overflow-hidden border border-stone-900/60 bg-[#111111]/20 group shadow-lg aspect-[21/9] md:h-[76px]">
              <Image
                src={galleryItems[1].imageUrl}
                alt={galleryItems[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-full object-cover grayscale brightness-[0.85] contrast-[1.02] transition-transform duration-700 group-hover:scale-103 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-3 left-5">
                <span className="text-stone-300 font-sans text-xs tracking-wide font-light">
                  {galleryItems[1].title}
                </span>
              </div>
            </div>

            <div className="md:col-span-4 relative rounded-[1.8rem] overflow-hidden border border-stone-900/60 bg-[#111111]/20 group shadow-lg aspect-[21/9] md:h-[76px]">
              <Image
                src={galleryItems[2].imageUrl}
                alt={galleryItems[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-full object-cover grayscale brightness-[0.85] contrast-[1.02] transition-transform duration-700 group-hover:scale-103 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-3 left-5">
                <span className="text-stone-300 font-sans text-xs tracking-wide font-light">
                  {galleryItems[2].title}
                </span>
              </div>
            </div>

            <div className="md:col-span-8 relative rounded-[1.8rem] overflow-hidden border border-stone-900/60 bg-[#111111]/20 group shadow-lg aspect-[32/9] md:h-[88px]">
              <Image
                src={galleryItems[3].imageUrl}
                alt={galleryItems[3].title}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="w-full h-full object-cover grayscale brightness-[0.80] contrast-[1.05] transition-transform duration-700 group-hover:scale-102 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-stone-300 font-sans text-xs md:text-sm tracking-wide font-light">
                  {galleryItems[3].title}
                </span>
              </div>
            </div>
          </div>

          {/* Row Segment 2: Large Vertical Blocks */}
          <div className="md:col-span-6 relative rounded-[1.8rem] overflow-hidden border border-stone-900/60 bg-[#111111]/20 group shadow-lg aspect-[3/4] md:h-[460px]">
            <Image
              src={galleryItems[4].imageUrl}
              alt={galleryItems[4].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-cover grayscale brightness-[0.85] contrast-[1.05] transition-transform duration-700 group-hover:scale-103 group-hover:grayscale-0 group-hover:brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-stone-300 font-sans text-xs md:text-sm tracking-wide font-light">
                {galleryItems[4].title}
              </span>
            </div>
          </div>

          <div className="md:col-span-6 relative rounded-[1.8rem] overflow-hidden border border-stone-900/60 bg-[#111111]/20 group shadow-lg aspect-[3/4] md:h-[460px]">
            <Image
              src={galleryItems[5].imageUrl}
              alt={galleryItems[5].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-cover grayscale brightness-[0.80] contrast-[1.02] transition-transform duration-700 group-hover:scale-103 group-hover:grayscale-0 group-hover:brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-stone-300 font-sans text-xs md:text-sm tracking-wide font-light">
                {galleryItems[5].title}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>

      {/* SECTION 15: ADMISSIONS CLOSING CTA COMPONENT */}
      <section className="w-full py-24 px-4 md:px-8 relative overflow-hidden flex items-center justify-center border-t border-stone-900/50">
        <div className="absolute w-[500px] h-[300px] rounded-full bg-[#ff4646]/5 blur-[120px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-10 w-full max-w-[180px]">
            <div className="h-[1px] flex-1 bg-stone-800" /><div className="w-1.5 h-1.5 rounded-full bg-[#ff4646]" /><div className="h-[1px] flex-1 bg-stone-800" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-[1.15] mb-6 text-stone-100">
            Your <span className="text-[#ff4646] italic font-serif pr-1">Runway</span> <br className="sm:hidden" />Starts Here.
          </h2>
          <p className="text-stone-400 font-sans text-sm md:text-base tracking-wide font-light max-w-2xl leading-relaxed mb-12 px-4">
            Applications for <span className="text-[#ff4646] font-medium">2026 Admissions</span> are now open. Limited seats available across all programs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-3xl px-2">
            <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#ff4646] hover:bg-[#e13535] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#ff4646]/10 text-sm tracking-wide group">
              <span>APPLY NOW</span><ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent border border-stone-900 hover:border-stone-700 hover:bg-stone-900/30 text-stone-300 hover:text-stone-100 font-medium px-6 py-4 rounded-full transition-all duration-300 text-xs tracking-wider">
              <Download className="w-4 h-4 text-stone-500 shrink-0" /><span>DOWNLOAD BROCHURE</span>
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent border border-stone-900 hover:border-stone-700 hover:bg-stone-900/30 text-stone-300 hover:text-stone-100 font-medium px-6 py-4 rounded-full transition-all duration-300 text-xs tracking-wider">
              <MapPin className="w-4 h-4 text-stone-500 shrink-0" /><span>BOOK CAMPUS VISIT</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}