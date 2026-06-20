'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What are short-term courses?',
      answer: 'Our short-term courses are intensive, industry-focused programs designed to help you master specific fashion design and styling skills in a condensed timeframe.',
    },
    {
      question: 'Who can join?',
      answer: 'These programs are open to anyone passionate about fashion, including students, working professionals looking for a career transition, boutique owners, and enthusiasts.',
    },
    {
      question: 'Do I need prior experience?',
      answer: 'No prior design experience is required. Our courses are structured to guide you from foundational concepts up to advanced professional techniques.',
    },
    {
      question: 'Will I receive certification?',
      answer: 'Yes, upon successful completion of the course requirements and project portfolio, you will receive an industry-recognized professional certificate.',
    },
    {
      question: 'Can working professionals join?',
      answer: 'Absolutely. We offer flexible scheduling options, including weekend and evening blocks, specifically designed to accommodate busy professional routines.',
    },
    {
      question: 'How long are the courses?',
      answer: 'The duration varies depending on the specific track, typically ranging from 4 weeks to 3 months of deep, hands-on immersive learning.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#000000] text-white px-6 py-24 md:px-12 flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Editorial Mixed Serif Heading block */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif tracking-tight leading-[1.25]">
            Frequently Asked <br />
            <span className="text-[#ff2a2a] italic font-serif font-medium tracking-wide block mt-1">Questions</span>
          </h2>
        </div>

        {/* Clean Accordion Stack List */}
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="w-full bg-[#0d0d0d] border border-zinc-900/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-zinc-800/80"
              >
                {/* Trigger Row area */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <h3 className="text-zinc-200 text-base sm:text-[17px] font-normal font-serif tracking-wide transition-colors duration-200 group-hover:text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-[#ff2a2a]' : ''
                    }`}
                  />
                </button>

                {/* Smooth Expandable Content Body viewport */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 border-t border-zinc-950' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-4 text-zinc-400 text-xs sm:text-[13px] font-sans leading-relaxed tracking-wide">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}