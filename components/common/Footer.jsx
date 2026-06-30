'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube 
} from "react-icons/fa6";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
  };

  const isDark = mounted && resolvedTheme === 'dark';

  // Central isolated theme styling token map mapping 1:1 against footer layout elements
  const theme = {
    bgFooter: isDark ? 'bg-[#050505]' : 'bg-[#FAF5F6]',
    borderFooter: isDark ? 'border-neutral-900' : 'border-[#E3B2B4]/40',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textMuted: isDark ? 'text-neutral-400' : 'text-neutral-600',
    textLinks: isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black',
    textContact: isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-black',
    
    // Social / Frame profiles
    socialIconBorder: isDark ? 'border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900' : 'border-neutral-300 text-neutral-600 hover:text-black hover:border-neutral-400 hover:bg-white',
    
    // Newsletter box custom styling variations
    newsletterBg: isDark ? 'bg-[#0B0B0C]' : 'bg-[#E7BFC0]',
    newsletterBorder: isDark ? 'border-neutral-900' : 'border-[#E3B2B4]/60',
    inputBg: isDark ? 'bg-[#141416]' : 'bg-white',
    inputBorder: isDark ? 'border-neutral-800 focus:border-neutral-600 focus:ring-neutral-600' : 'border-neutral-300 focus:border-[#be123c] focus:ring-[#be123c]',
    inputPlaceholder: isDark ? 'placeholder-neutral-600' : 'placeholder-neutral-400',
    shadow: isDark ? 'shadow-none' : 'shadow-md shadow-[#E7BFC0]/30',

    // Core brand indicators
    brandRed: '#FF3333',
    bgBrandRed: 'bg-[#FF3333]',
    hoverBrandRed: 'hover:bg-[#E02424]'
  };

  return (
    <footer className={`font-sans pt-16 pb-8 px-6 md:px-12 lg:px-24 border-t transition-colors duration-300 ${theme.bgFooter} ${theme.borderFooter} ${theme.textMuted}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-y-6 text-left">
            <div className="flex items-center gap-x-3">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-white font-bold text-lg ${theme.bgBrandRed}`}>
                P
              </div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold tracking-widest text-lg leading-none ${theme.textMain}`}>PIFT</span>
                <span className="text-[9px] text-neutral-500 font-medium tracking-[0.2em] mt-0.5 uppercase">Fashion & Design</span>
              </div>
            </div>

            <p className="text-sm font-light leading-relaxed max-w-sm">
              India&apos;s most prestigious institute for Fashion Design, Interior Design, Textile Design and Creative Industries.
            </p>

            <div className={`flex flex-col gap-y-3.5 text-sm font-light transition-colors duration-300 ${theme.textContact}`}>
              <a href="tel:+919876543210" className="flex items-center gap-x-3 transition-colors duration-200">
                <Phone className="w-4 h-4 shrink-0" style={{ color: theme.brandRed }} />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:admissions@pift.edu.in" className="flex items-center gap-x-3 transition-colors duration-200">
                <Mail className="w-4 h-4 shrink-0" style={{ color: theme.brandRed }} />
                <span>admissions@pift.edu.in</span>
              </a>
              <div className="flex items-start gap-x-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: theme.brandRed }} />
                <span>Connaught Place, New Delhi 110001</span>
              </div>
            </div>

            {/* Social Icons Container */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: FaInstagram, href: '#' },
                { icon: FaFacebookF, href: '#' },
                { icon: FaXTwitter, href: '#' },
                { icon: FaLinkedinIn, href: '#' },
                { icon: FaYoutube, href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${theme.socialIconBorder}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns Mapping */}
          {[
            {
              title: 'Programs',
              links: [
                { label: 'Fashion Design', href: '#' },
                { label: 'Interior Design', href: '#' },
                { label: 'Textile Design', href: '#' },
                { label: 'Fashion Styling', href: '#' },
                { label: 'Design Management', href: '#' },
                { label: 'Visual Communication', href: '#' },
              ],
              colSpan: 'lg:col-span-2'
            },
            {
              title: 'Admissions',
              links: [
                { label: 'How to Apply', href: '#' },
                { label: 'Eligibility Criteria', href: '#' },
                { label: 'Scholarship Info', href: '#' },
                { label: 'Fee Structure', href: '#' },
                { label: 'Entrance Exam', href: '#' },
                { label: 'FAQs', href: '#' },
              ],
              colSpan: 'lg:col-span-2'
            },
            {
              title: 'Student Life',
              links: [
                { label: 'Campus Facilities', href: '#' },
                { label: 'Student Clubs', href: '#' },
                { label: 'Events Calendar', href: '#' },
                { label: 'Sports & Wellness', href: '#' },
                { label: 'Hostel', href: '#' },
                { label: 'Canteen', href: '#' },
              ],
              colSpan: 'lg:col-span-2'
            },
            {
              title: 'Quick Links',
              links: [
                { label: 'About PIFT', href: '#' },
                { label: 'Faculty', href: '#' },
                { label: 'Research', href: '#' },
                { label: 'Library', href: '#' },
                { label: 'Career Services', href: '#' },
                { label: 'Downloads', href: '#' },
              ],
              colSpan: 'lg:col-span-2'
            }
          ].map((column, columnIdx) => (
            <div key={columnIdx} className={`${column.colSpan} flex flex-col gap-y-5 md:pl-2 text-left`}>
              <h3 className={`text-[11px] font-bold uppercase tracking-[0.2em] ${theme.textMain}`}>
                {column.title}
              </h3>
              <ul className="flex flex-col gap-y-3 text-sm font-light">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href={link.href} className={`transition-colors duration-150 ${theme.textLinks}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Newsletter Box Section */}
        <div className={`border rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-12 transition-all duration-300 ${theme.newsletterBg} ${theme.newsletterBorder} ${theme.shadow}`}>
          <div className="flex flex-col gap-y-2 max-w-md text-left">
            <h4 className={`text-lg font-medium tracking-wide font-serif ${isDark ? theme.textMain : 'text-neutral-900'}`}>
              Stay in the Loop
            </h4>
            <p className={`text-sm font-light leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-800'}`}>
              Get the latest PIFT news, events, and admissions updates.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto lg:min-w-[450px]">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full text-sm font-light border rounded-xl px-5 py-3.5 focus:outline-none focus:ring-1 transition-all transition-colors duration-300 ${theme.inputBg} ${theme.inputBorder} ${theme.textMain} ${theme.inputPlaceholder}`}
            />
            <button
              type="submit"
              className={`w-full sm:w-auto text-white font-medium text-xs sm:text-sm tracking-widest uppercase px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-x-2 shrink-0 transition-colors duration-200 ${isDark ? 'bg-[#FF3333] hover:bg-[#E02424]' : 'bg-neutral-900 hover:bg-black'}`}
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </button>
          </form>
        </div>

        {/* Bottom Bar Section */}
        <div className={`border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-neutral-500 ${theme.borderFooter}`}>
          <p>© 2026 Pinnacle Institute of Fashion Technology. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors duration-150">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors duration-150">Terms of Use</Link>
            <Link href="#" className="hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors duration-150">Disclaimer</Link>
            <Link href="#" className="hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors duration-150">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}