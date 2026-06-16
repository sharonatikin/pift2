'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  MapPin, 
  PhoneCall, 
  Mail, 
  User, 
  MessageSquare, 
  FacebookIcon, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin 
} from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
export default function Page () {
  // Navigation State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interests: [] ,
  });

  const navItems = [
    { name: 'Home', href: '#', active: false },
    { name: 'About', href: '#', active: false },
    { name: 'Courses', href: '#', active: false },
    { name: 'Portfolio', href: '#', active: false },
    { name: 'Team', href: '#', active: false },
    { name: 'Pages', href: '#', active: false },
    { name: 'Contact', href: '#', active: true }, // Set true since this is the combined Contact page
  ];

  const infoCards = [
    {
      icon: MapPin,
      title: 'PIFT INSITUTE',
      content: (
        <p className="text-zinc-400 text-sm sm:text-base font-medium leading-relaxed max-w-[210px] mx-auto">
          119, Mall Road, Jawala Temple Street, Fountain Chowk, Ludhiana, Punjab – India
        </p>
      ),
    },
    {
      icon: PhoneCall,
      title: 'Mobile Number',
      content: (
        <div className="flex flex-col space-y-1 text-sm sm:text-base font-semibold tracking-wide">
          <a href="tel:+919779115198" className="text-zinc-300 hover:text-[#ff2a2a] underline decoration-zinc-600 hover:decoration-[#ff2a2a] transition-colors duration-200">
            +91-9779115198
          </a>
          <a href="tel:+918847089593" className="text-zinc-300 hover:text-[#ff2a2a] underline decoration-zinc-600 hover:decoration-[#ff2a2a] transition-colors duration-200">
            +91-8847089593
          </a>
        </div>
      ),
    },
    {
      icon: MapPin,
      title: 'Have Quires ?',
      content: (
        <p className="text-zinc-300 text-sm sm:text-base font-medium tracking-wide">
          Riverbend Parkway (Route)
        </p>
      ),
    },
    {
      icon: Mail,
      title: 'Need Support ?',
      content: (
        <a href="mailto:contact@piftdesign.in" className="text-zinc-300 text-sm sm:text-base font-semibold tracking-wide underline decoration-zinc-600 hover:text-[#ff2a2a] hover:decoration-[#ff2a2a] transition-colors duration-200 break-all px-2 block">
          contact@piftdesign.in
        </a>
      ),
    },
  ];

  const handleCheckboxChange = (interest) => {
    setFormData((prev) => {
      const updatedInterests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: updatedInterests };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Contact Data:', formData);
  };

  return (
    <div className="w-full bg-[#0d0d0d] text-white font-sans antialiased selection:bg-[#ff2a2a] selection:text-white">
    

      {/* ========================================================================= */}
      {/* 2. COMPONENT: CONTACT HERO HERO BANNER & TEXT BACKDROP LAYER              */}
      {/* ========================================================================= */}
      <section className="relative w-full flex flex-col items-center justify-center text-center px-4 pt-24 pb-20 border-b border-zinc-900 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] select-none pointer-events-none whitespace-nowrap z-0">
          <span 
            className="text-7xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight text-transparent opacity-[0.06]"
            style={{ WebkitTextStroke: '2px #ffffff' }}
          >
            Contact Us
          </span>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#ff2a2a] mb-4">
            Contact Us
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide max-w-xl mx-auto mb-6">
            More than 24 years of Excellence in Design Education
          </p>

          <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide">
            <a href="#" className="text-zinc-200 hover:text-white transition-colors duration-200">
              Home
            </a>
            <span className="flex items-center text-[#ff2a2a]/60">
              <ChevronRight className="w-3 h-3 stroke-[3]" />
              <ChevronRight className="w-3 h-3 stroke-[3] -ml-1.5" />
            </span>
            <span className="text-zinc-500 select-none">
              Contact Us
            </span>
          </nav>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. COMPONENT: SUB-HEADER INTRODUCTORY LINE LAYER                          */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#ff2a2a]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#ff2a2a] uppercase">
                Contact Our Experts
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] max-w-2xl">
              Connect with Us for Immediate Assistance
            </h3>
          </div>

          <div className="lg:col-span-5 flex items-stretch pl-0 lg:pl-12 mt-4 lg:mt-0">
            <div className="w-[3px] bg-[#ff2a2a] rounded-full shrink-0" />
            <div className="flex items-center pl-6">
              <p className="text-sm sm:text-base text-zinc-400 font-medium tracking-wide leading-relaxed">
                Connect with us now
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. COMPONENT: MATRIX LOCATION LABELS & ADDRESS BLOCKS GRID               */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#ff2a2a]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#ff2a2a] uppercase">
              Address
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            PIFT Institute Location
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {infoCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={index} 
                className="bg-[#141414] border border-zinc-900 rounded-sm px-6 py-12 flex flex-col items-center text-center space-y-6 hover:border-zinc-800 hover:bg-[#181818] transition-all duration-300 shadow-xl"
              >
                <div className="w-14 h-14 rounded-full bg-[#ff2a2a] flex items-center justify-center text-white shadow-lg shadow-[#ff2a2a]/20">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="space-y-3 w-full">
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                    {card.title}
                  </h4>
                  <div className="pt-1">
                    {card.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. COMPONENT: FULL DUAL-CARD INTEGRATED SIGN UP / INTERACTIVE FORM       */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-28">
        <div className="w-full bg-[#111111] border border-zinc-900 shadow-2xl rounded-sm p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Form Left Container Wrap */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="bg-white rounded-sm p-6 sm:p-8 space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-2">
                    Contact Form
                  </h3>
                  
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs font-bold text-zinc-700 tracking-wide">
                      <User className="w-3.5 h-3.5 text-zinc-600" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-zinc-200 text-zinc-900 text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs font-bold text-zinc-700 tracking-wide">
                      <Mail className="w-3.5 h-3.5 text-zinc-600" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-zinc-200 text-zinc-900 text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all"
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs font-bold text-zinc-700 tracking-wide">
                      <MessageSquare className="w-3.5 h-3.5 text-zinc-600" />
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-zinc-200 text-zinc-900 text-sm rounded-sm px-4 py-3 resize-none focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Checklist Layout Options */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">
                    How Can We Help?
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-zinc-300">
                    {['Course', 'Location', 'Fee Structure'].map((interest) => (
                      <label key={interest} className="flex items-center gap-2 cursor-pointer group select-none">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleCheckboxChange(interest)}
                          className="w-4 h-4 rounded-sm border-zinc-700 bg-transparent text-[#ff2a2a] focus:ring-0 focus:ring-offset-0 checked:bg-[#ff2a2a] checked:border-[#ff2a2a] transition-all"
                        />
                        <span className="group-hover:text-white transition-colors">
                          {interest}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submitting Interface Trigger */}
                <button
                  type="submit"
                  className="w-full bg-[#ff2a2a] hover:bg-[#e02222] text-white font-bold text-xs sm:text-sm tracking-wider uppercase py-4 rounded-sm transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111] focus:ring-[#ff2a2a]"
                >
                  Send Your Message
                </button>
              </form>
            </div>

            {/* Support Static Visual Data Right Container Wrap */}
            <div className="lg:col-span-5 bg-[#1a1a1a] border border-zinc-900/40 rounded-sm p-6 sm:p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Say Hello!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed tracking-wide">
                  Thank you for your interest in PIFT! Whether you're curious about transitioning your career in design courses we feed your curiosity.
                </p>
              </div>

              {/* Placeholder Content Frame */}
              <div className="w-full aspect-video sm:aspect-[4/3] lg:aspect-square bg-zinc-800 rounded-sm overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
                  alt="Campus Location Visual"
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
              </div>

              {/* Dynamic Footer Socials Segment */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                  Follow Us
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
                  Contact us today via the form below social Share and let's take the first step.
                </p>
                
                <div className="flex items-center gap-3 pt-2">
                  {[
                    { icon: FaFacebookF, href: '#' },
                    { icon: FaInstagram, href: '#' },
                    { icon: FaXTwitter, href: '#' },
                    { icon: FaLinkedinIn, href: '#' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-[#ff2a2a] hover:border-[#ff2a2a] hover:bg-white/5 transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}