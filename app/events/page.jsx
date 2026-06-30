'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ArrowRight, MapPin } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    date: '15',
    month: 'JUN',
    category: 'SIGNATURE EVENT',
    title: 'Annual Fashion Show 2026',
    location: 'PIFT Grand Auditorium',
    description: 'The most anticipated fashion showcase of the year — 200+ student collections on the runway.'
  },
  {
    id: 2,
    date: '22',
    month: 'JUN',
    category: 'WORKSHOP',
    title: 'Industry Workshop: Sustainable Fashion',
    location: 'Design Studio Block A',
    description: 'Led by Creative Director Anita Dongre — a masterclass in responsible design practices.'
  },
  {
    id: 3,
    date: '5',
    month: 'JUL',
    category: 'ACADEMIC',
    title: 'Portfolio Review Day',
    location: 'Gallery & Exhibition Hall',
    description: "Final portfolio evaluations with panels from India's top design studios and fashion houses."
  },
  {
    id: 4,
    date: '18',
    month: 'JUL',
    category: 'COMPETITION',
    title: 'Inter-College Design Competition',
    location: 'Innovation Center',
    description: '15 institutions compete across fashion, interior, textile, and visual communication tracks.'
  },
  {
    id: 5,
    date: '30',
    month: 'JUL',
    category: 'LECTURE SERIES',
    title: 'Guest Lecture: FDCI & International Partners',
    location: 'Seminar Hall',
    description: 'Global fashion industry leaders share insights on the future of luxury and design innovation.'
  }
];

export default function UpcomingEvents() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  // Central isolated theme styling token map mapping 1:1 against template properties
  const theme = {
    bgPage: isDark ? 'bg-[#0a0a0a]' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textMuted: isDark ? 'text-[#a3a3a3]' : 'text-neutral-600',
    textDescription: isDark ? 'text-[#8a8a8a]' : 'text-neutral-500',
    
    // Container and dynamic card states
    cardBg: isDark ? 'bg-[#111111]/60' : 'bg-white',
    cardBorder: isDark ? 'border-[#222222]' : 'border-neutral-200',
    cardBorderHover: isDark ? 'hover:border-[#333333]' : 'hover:border-neutral-400',
    shadow: isDark ? 'shadow-none' : 'shadow-sm shadow-neutral-100/60',
    
    // Custom calendar dynamic box accent profiles 
    dateBoxBg: isDark ? 'bg-[#221212]' : 'bg-[#FAF5F6]',
    dateBoxBorder: isDark ? 'border-[#3d1a1a]' : 'border-[#E3B2B4]/60',
    
    // Core structural lines
    brandRed: 'text-[#ff3333]',
    indicatorRed: 'bg-[#e11d48] text-[#e11d48]',
    accentRed: 'bg-[#ff3b3b] hover:bg-[#e62e2e]'
  };

  return (
    <div className={`min-h-screen font-sans antialiased flex items-center justify-center p-4 sm:p-8 lg:p-16 transition-colors duration-300 ${theme.bgPage} ${theme.textMuted}`}>
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Header Content */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8 text-left">
          <div className="flex items-center gap-x-3">
            <span className={`w-6 h-[1px] ${isDark ? 'bg-[#e11d48]' : 'bg-[#e11d48]'}`} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#e11d48]">
              Calendar
            </span>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight ${theme.textMain}`}>
            Upcoming <span className={`font-serif italic ${theme.brandRed}`}>Events</span>
          </h1>
          
          <p className={`text-base sm:text-lg max-w-md leading-relaxed font-light transition-colors duration-300 ${theme.textDescription}`}>
            From runway showcases to industry workshops — life at PIFT is never ordinary. 
            Stay connected with our vibrant calendar.
          </p>
          
          <div className="pt-4">
            <button className={`inline-flex items-center justify-center gap-2 transition-colors duration-300 text-white font-medium px-6 py-3.5 rounded-full text-sm tracking-wide shadow-lg shadow-red-900/10 group ${theme.accentRed}`}>
              VIEW FULL CALENDAR
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Column: Events List */}
        <div className="lg:col-span-7 space-y-4 w-full">
          {eventsData.map((event) => (
            <div 
              key={event.id}
              className={`border p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start transition-all duration-300 rounded-2xl ${theme.cardBg} ${theme.cardBorder} ${theme.cardBorderHover} ${theme.shadow}`}
            >
              {/* Date Box */}
              <div className={`flex flex-col items-center justify-center rounded-xl w-14 h-14 sm:w-16 sm:h-16 shrink-0 border transition-colors duration-300 ${theme.dateBoxBg} ${theme.dateBoxBorder}`}>
                <span className={`text-xl sm:text-2xl font-bold leading-none ${theme.brandRed}`}>
                  {event.date}
                </span>
                <span className="text-[10px] font-bold tracking-wider mt-0.5 text-[#ff3333]/90">
                  {event.month}
                </span>
              </div>

              {/* Event Details */}
              <div className="space-y-2 flex-1 text-left">
                <div className="inline-block">
                  <span className={`text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-md uppercase border ${theme.dateBoxBg} ${theme.dateBoxBorder} ${theme.brandRed}`}>
                    {event.category}
                  </span>
                </div>
                
                <h3 className={`text-lg sm:text-xl font-bold tracking-wide transition-colors duration-300 ${theme.textMain}`}>
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 dark:text-[#888888]" />
                  <span className="font-light text-neutral-500 dark:text-[#888888]">{event.location}</span>
                </div>
                
                <p className={`text-sm font-light leading-relaxed pt-1 transition-colors duration-300 ${theme.textDescription}`}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}