'use client';

import React from 'react';
import { ArrowRight, Calendar, MapPin, Award, BookOpen, GraduationCap, Laptop } from 'lucide-react';



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
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#a3a3a3] font-sans antialiased flex items-center justify-center p-4 sm:p-8 lg:p-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Header Content */}
        <div className="lg:col-span-5 space-y-6 sticky top-8">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#e11d48]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#e11d48] uppercase">
              Calendar
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
            Upcoming <span className="font-serif italic text-[#ff3333]">Events</span>
          </h1>
          
          <p className="text-base sm:text-lg text-[#8a8a8a] max-w-md leading-relaxed font-light">
            From runway showcases to industry workshops — life at PIFT is never ordinary. 
            Stay connected with our vibrant calendar.
          </p>
          
          <div className="pt-4">
            <button className="inline-flex items-center justify-center gap-2 bg-[#ff3b3b] hover:bg-[#e62e2e] transition-colors duration-300 text-white font-medium px-6 py-3.5 rounded-full text-sm tracking-wide shadow-lg shadow-[#ff3b3b]/10 group">
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
              className="bg-[#111111]/60 border border-[#222222] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start hover:border-[#333333] transition-all duration-300"
            >
              {/* Date Box */}
              <div className="flex flex-col items-center justify-center bg-[#221212] border border-[#3d1a1a] rounded-xl w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                <span className="text-xl sm:text-2xl font-bold text-[#ff3333] leading-none">
                  {event.date}
                </span>
                <span className="text-[10px] font-semibold text-[#ff3333]/80 tracking-wider mt-0.5">
                  {event.month}
                </span>
              </div>

              {/* Event Details */}
              <div className="space-y-2 flex-1">
                <div className="inline-block">
                  <span className="text-[10px] font-bold tracking-widest text-[#ff3333] bg-[#221212] px-2.5 py-1 rounded-md uppercase border border-[#3d1a1a]/40">
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-medium text-white tracking-wide">
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs text-[#666666]">
                  <MapPin className="w-3.5 h-3.5 text-[#888888]" />
                  <span className="text-[#888888] font-light">{event.location}</span>
                </div>
                
                <p className="text-sm text-[#8a8a8a] font-light leading-relaxed pt-1">
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