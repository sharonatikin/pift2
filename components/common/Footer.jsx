'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed:', email);
  };

  return (
    <footer className="bg-[#050505] text-neutral-400 font-sans pt-16 pb-8 px-6 md:px-12 lg:px-24 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-y-6">
            <div className="flex items-center gap-x-3">
              <div className="w-9 h-9 rounded-full bg-[#FF3333] flex items-center justify-center font-serif text-white font-bold text-lg">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-white font-bold tracking-widest text-lg leading-none">PIFT</span>
                <span className="text-[9px] text-neutral-500 font-medium tracking-[0.2em] mt-0.5 uppercase">Fashion & Design</span>
              </div>
            </div>

            <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-sm">
              India&apos;s most prestigious institute for Fashion Design, Interior Design, Textile Design and Creative Industries.
            </p>

            <div className="flex flex-col gap-y-3.5 text-sm font-light text-neutral-300">
              <a href="tel:+919876543210" className="flex items-center gap-x-3 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4 text-[#FF3333] shrink-0" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:admissions@pift.edu.in" className="flex items-center gap-x-3 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4 text-[#FF3333] shrink-0" />
                <span>admissions@pift.edu.in</span>
              </a>
              <div className="flex items-start gap-x-3">
                <MapPin className="w-4 h-4 text-[#FF3333] shrink-0 mt-0.5" />
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
                { icon: FaYoutube , href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4 stroke-[1.5]" />
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
          ].map((column, colIdx) => (
            <div key={colIdx} className={`${column.colSpan} flex flex-col gap-y-5 md:pl-2`}>
              <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-y-3 text-sm font-light">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors duration-150">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Newsletter Box Section */}
        <div className="bg-[#0B0B0C] border border-neutral-900 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-12">
          <div className="flex flex-col gap-y-2 max-w-md">
            <h4 className="text-lg font-medium text-white tracking-wide font-serif">
              Stay in the Loop
            </h4>
            <p className="text-sm font-light text-neutral-400">
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
              className="w-full bg-[#141416] border border-neutral-800 text-sm font-light text-white rounded-xl px-5 py-3.5 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all placeholder-neutral-600"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#FF3333] hover:bg-[#E02424] text-white font-medium text-xs sm:text-sm tracking-widest uppercase px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-x-2 shrink-0 transition-colors duration-200"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </button>
          </form>
        </div>

        {/* Bottom Bar Section */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-neutral-500">
          <p>© 2026 Pinnacle Institute of Fashion Technology. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-neutral-300 transition-colors duration-150">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-300 transition-colors duration-150">Terms of Use</Link>
            <Link href="#" className="hover:text-neutral-300 transition-colors duration-150">Disclaimer</Link>
            <Link href="#" className="hover:text-neutral-300 transition-colors duration-150">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}