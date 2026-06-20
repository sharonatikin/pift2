'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // Imported Next.js Image component
import { 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Hexagon, 
  Disc, 
  Diamond, 
  Flower2 
} from 'lucide-react';

export default function CombinedPiftPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const destinations = [
    { title: 'Fashion Design', icon: Sparkles, href: '#' },
    { title: 'Interior Design', icon: Layers, href: '#' },
    { title: 'Textile Design', icon: Hexagon, href: '#' },
    { title: 'Admissions', icon: Disc, href: '#' },
    { title: 'About PIFT', icon: Diamond, href: '#' },
    { title: 'Student Life', icon: Flower2, href: '#' },
  ];

  const programs = [
    {
      title: 'Fashion Design',
      description: 'Master the language of fabric, form, and silhouette. Cultivate your creative identity through rigorous craft.',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600&h=400',
      href: '#',
    },
    {
      title: 'Interior Design',
      description: 'Transform spatial experiences with precision and vision. Design environments that resonate with luxury.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600&h=400',
      href: '#',
    },
    {
      title: 'Textile Design',
      description: 'Explore surface, texture, and material storytelling at the intersection of art and industry.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600&h=400',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-serif selection:bg-[#a91d22] selection:text-white flex flex-col justify-between overflow-x-hidden relative">
      
      {/* ========================================================================= */}
      {/* 1. HEADER NAVBAR (From Page 10)                                           */}
      {/* ========================================================================= */}
      

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 bg-[#050505] z-40 flex flex-col justify-center items-center space-y-8 font-sans text-sm tracking-[0.2em] uppercase transition-all duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#a91d22] transition-colors">Program</a>
        <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#a91d22] transition-colors">Curriculum</a>
        <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#a91d22] transition-colors">Studio</a>
        <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#a91d22] transition-colors">Careers</a>
        <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#a91d22] transition-colors">Admissions</a>
        <a 
          href="#" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-[#a91d22] text-white px-8 py-3 font-semibold tracking-[0.2em]"
        >
          Apply Now
        </a>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO / 404 SECTION (From Page 10)                                    */}
      {/* ========================================================================= */}
      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch relative border-b border-white/5">
        <div className="flex flex-col justify-center px-6 sm:px-12 py-12 md:py-20 lg:pr-16 z-10 max-w-xl md:max-w-none mx-auto md:mx-0">
          <h1 className="font-sans font-black text-[110px] sm:text-[140px] md:text-[160px] lg:text-[180px] leading-none text-[#a91d22] tracking-tighter mb-4 select-none">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.15] mb-6 tracking-wide">
            Oops — This <span className="italic text-[#a91d22] font-serif">Design</span> Doesn't Exist.
          </h2>
          <div className="w-10 h-[2px] bg-[#a91d22] mb-8"></div>
          <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed tracking-wide font-light mb-10 max-w-md">
            The page you're looking for may have been moved, redesigned, or is no longer available. 
            Explore our programs, discover our creative community, or return to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4 font-sans text-xs tracking-[0.15em] uppercase font-medium">
            <a href="#" className="bg-[#a91d22] hover:bg-[#c22228] text-white px-8 py-4 text-center transition-all duration-300">
              Apply Now
            </a>
            <a href="#" className="border border-zinc-800 hover:border-zinc-500 hover:bg-white/5 text-zinc-300 px-8 py-4 text-center transition-all duration-300">
              Back To Home
            </a>
          </div>
          <div className="font-sans text-xs tracking-[0.15em] uppercase font-medium max-w-xs">
            <a href="#" className="border border-zinc-800 hover:border-zinc-500 hover:bg-white/5 text-zinc-300 px-8 py-4 text-center block transition-all duration-300">
              Explore Courses
            </a>
          </div>
        </div>

        <div className="relative min-h-[450px] md:min-h-0 w-full overflow-hidden flex items-stretch">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10 hidden md:block w-32"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 md:hidden h-24"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050505] to-transparent z-10 md:hidden h-24"></div>
          
          <Image 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1200" 
            alt="Editorial high-fashion portrait" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="w-full h-full object-cover grayscale brightness-[0.35] contrast-[1.15] transition-transform duration-700 hover:scale-105"
          />
          
          <div className="absolute bottom-6 right-6 z-20 border border-white/10 px-4 py-2 bg-black/40 backdrop-blur-sm">
            <span className="font-sans text-[10px] tracking-[0.25em] text-zinc-400 uppercase">
              PIFT — Collection 2026
            </span>
          </div>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* 3. DISCOVER YOUR CREATIVE FUTURE / PROGRAMS (From Page 12)                 */}
      {/* ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12 border-b border-white/5 select-none">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="block font-sans text-[10px] md:text-xs tracking-[0.4em] text-[#a91d22] uppercase font-semibold mb-5">
            Programs
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide mb-6">
            Discover Your Creative Future
          </h2>
          <p className="font-sans text-xs sm:text-sm tracking-widest text-zinc-500 uppercase font-light">
            While you're here, explore what awaits you at PIFT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-[#0b0b0b] border border-white/[0.03] flex flex-col justify-between transition-all duration-500 hover:border-white/[0.12] hover:bg-[#0f0f0f] group"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-zinc-900">
                <Image 
                  src={program.image} 
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover opacity-75 contrast-[1.1] brightness-[0.7] group-hover:scale-105 group-hover:opacity-90 transition-all duration-700 ease-out"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between items-start">
                <div>
                  <div className="w-6 h-[1.5px] bg-[#a91d22] mb-5"></div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide mb-4">
                    {program.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed tracking-wide font-light mb-8 max-w-sm">
                    {program.description}
                  </p>
                </div>
                <a 
                  href={program.href}
                  className="inline-flex items-center space-x-2 border border-zinc-800/80 px-5 py-3 font-sans text-[10px] tracking-[0.2em] uppercase font-medium text-zinc-400 group-hover:text-white group-hover:border-zinc-500 group-hover:bg-white/[0.02] transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. POPULAR DESTINATIONS / NAVIGATE (From Page 11)                         */}
      {/* ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12 select-none">
        <span className="block font-sans text-[10px] md:text-xs tracking-[0.4em] text-[#a91d22] uppercase font-semibold mb-4">
          Navigate
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide mb-12">
          Popular Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="group flex items-center justify-between p-6 bg-white/[0.02] border border-white/[0.04] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.12] hover:translate-x-1"
              >
                <div className="flex items-center space-x-4">
                  <IconComponent className="w-4 h-4 text-[#a91d22] transition-transform duration-500 group-hover:rotate-12" />
                  <span className="font-sans text-xs tracking-[0.25em] text-zinc-300 uppercase font-medium group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 transition-all duration-300 transform group-hover:text-white group-hover:translate-x-1" />
              </a>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FOOTER (From Page 10)                                                  */}
      {/* ========================================================================= */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-white/5 z-10">
        <div className="max-w-xl">
          <div className="w-6 h-[1px] bg-[#a91d22] mb-3"></div>
          <p className="text-zinc-500 text-sm sm:text-base italic tracking-wide font-light leading-relaxed">
            "Every great designer gets lost before discovering something extraordinary."
          </p>
        </div>
      </footer>

    </div>
  );
}