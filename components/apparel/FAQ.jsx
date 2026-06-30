'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted && resolvedTheme === 'dark';

  const faqs = [
    {
      question: 'What is Apparel Merchandising?',
      answer: 'Apparel Merchandising is the strategic business management of the garment transformation lifecycle—bridging fashion design concept with retail market execution.',
    },
    {
      question: 'Who can enroll in this program?',
      answer: 'The track is intentionally built for aspiring fashion brand managers, designers seeking deeper supply-chain mechanics, and entrepreneurs.',
    },
    {
      question: 'What career opportunities are available?',
      answer: 'Graduates enter high-impact roles including Apparel Merchandisers, International Fashion Buyers, and Retail Asset Planners.',
    },
    {
      question: 'Do students receive industry exposure?',
      answer: 'Yes. The structure includes fully integrated manufacturing facility residencies and active commercial showroom forecasting labs.',
    },
    {
      question: 'Are internships included?',
      answer: 'The program closes with an intensive industry integration internship cycle alongside leading global fashion ateliers.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Design system tokens
  const theme = {
    bgPage: isDark ? 'bg-[#050102]' : 'bg-[#fbfbfb]',
    textMain: isDark ? 'text-white' : 'text-[#09090b]',
    textMuted: isDark ? 'text-zinc-400' : 'text-neutral-600',
    cardBg: isDark ? 'bg-[#110d0e]' : 'bg-[#F0C9CB]',
    cardBorder: isDark ? 'border-white/[0.03]' : 'border-[#E3B2B4]',
    cardBorderHover: isDark ? 'hover:border-white/[0.07]' : 'hover:border-[#e6001a]/40',
    cardText: isDark ? 'text-zinc-200' : 'text-[#4A282A]',
    accentRed: 'text-[#e6001a]',
    accordionAnswerBg: isDark ? 'bg-black/[0.08]' : 'bg-neutral-100/60',
    accordionLine: isDark ? 'border-white/[0.02]' : 'border-neutral-300/40'
  };

  return (
    <section className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 ${theme.bgPage}`}>
      {/* Decorative glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[140px] rounded-full pointer-events-none ${isDark ? 'bg-[#e6001a]/5' : 'bg-[#e6001a]/5'}`} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] ${theme.textMain}`}>
            <span className="font-serif block font-medium">Frequently Asked</span>
            <span className={`italic font-serif block font-normal mt-2 ${theme.accentRed}`}>Questions</span>
          </h2>
        </div>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-[20px] overflow-hidden transition-all duration-300 ease-out ${theme.cardBg} ${theme.cardBorder} ${theme.cardBorderHover}`}
              >
                <button 
                  onClick={() => toggleFAQ(idx)} 
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left group focus:outline-none"
                >
                  <span className={`text-sm md:text-base font-medium tracking-wide transition duration-200 ${theme.cardText}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/[0.01] border flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4 ${isDark ? 'border-white/5 text-zinc-400' : 'border-neutral-300 text-neutral-500'}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180 text-[#e6001a]' : 'rotate-0'}`} />
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 border-t' : 'max-h-0 opacity-0 pointer-events-none'} ${theme.accordionLine}`}>
                  <div className={`px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm font-light leading-relaxed ${theme.textMuted} ${theme.accordionAnswerBg}`}>
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