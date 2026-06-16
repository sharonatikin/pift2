'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'PROGRAM', href: '/program' },
    { name: 'CURRICULUM', href: '/curriculum' },
    { name: 'STUDIO', href: '/studio' },
    { name: 'CAREERS', href: '/careers' },
    { name: 'ADMISSIONS', href: '/admissions' },
  ];

  return (
    <nav className="bg-black text-white border-b border-zinc-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* 1. Logo / Brand Section */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Red 'P' Box */}
            <div className="bg-[#C5162E] w-12 h-12 flex items-center justify-center font-serif text-2xl font-bold transition-transform group-hover:scale-105">
              P
            </div>
            {/* Text Identity */}
            <div className="flex flex-col">
              <span className="font-bold tracking-widest text-lg leading-tight">PIFT</span>
              <span className="text-[10px] text-zinc-400 tracking-[0.2em] font-medium uppercase">
                Pinnacle Institute
              </span>
            </div>
          </Link>

          {/* 2. Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-[0.15em] text-zinc-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. Desktop Call To Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/apply"
              className="bg-[#C5162E] hover:bg-[#a31225] text-white font-bold tracking-widest text-sm px-8 py-3.5 transition-colors uppercase"
            >
              Apply Now
            </Link>
          </div>

          {/* 4. Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Close Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Dropdown Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-zinc-950 border-t border-zinc-900`} id="mobile-menu">
        <div className="px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium tracking-widest text-zinc-300 hover:text-white py-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-zinc-900">
            <Link
              href="/apply"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#C5162E] hover:bg-[#a31225] text-white font-bold tracking-widest text-sm py-3 transition-colors uppercase"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}