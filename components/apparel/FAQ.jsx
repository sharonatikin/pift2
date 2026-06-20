'use client'
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

export default function FAQ() {
      const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: 'What is Apparel Merchandising?',
      answer: 'Apparel Merchandising is the strategic business management of the garment transformation lifecycle—bridging fashion design concept with retail market execution. It directly coordinates trend intelligence, textile supply chains, costing dynamics, and inventory distribution vectors.',
    },
    {
      question: 'Who can enroll in this program?',
      answer: 'The track is intentionally built for aspiring fashion brand managers, designers seeking deeper supply-chain mechanics, corporate pivoters from architectural or graphic lines, and entrepreneurs looking to technicalize their commercial manufacturing capabilities.',
    },
    {
      question: 'What career opportunities are available?',
      answer: 'Graduates enter high-impact roles including Apparel Merchandisers, International Fashion Buyers, Retail Asset Planners, Production Sourcing Executives, Strategic Brand Managers, and Global Supply Chain Analysts.',
    },
    {
      question: 'Do students receive industry exposure?',
      answer: 'Yes. The structure includes fully integrated manufacturing facility residencies, active commercial showroom forecasting labs, real-world retail simulations, and collaborative vendor network development projects.',
    },
    {
      question: 'Are internships included?',
      answer: 'The program closes with an intensive industry integration internship cycle alongside leading global fashion ateliers and corporate retail chains, focusing on portfolio synthesis and permanent operational positioning.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#e6001a]/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
              <span className="font-serif block text-white font-medium">Frequently Asked</span>
              <span className="italic font-serif block text-[#e6001a] font-normal mt-2">Questions</span>
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="bg-[#110d0e] border border-white/[0.03] hover:border-white/[0.07] rounded-[20px] overflow-hidden transition-all duration-300 ease-out">
                  <button onClick={() => toggleFAQ(idx)} className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left group">
                    <span className="text-sm md:text-base font-medium tracking-wide text-zinc-200 group-hover:text-white transition duration-200">{faq.question}</span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.01] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-[#e6001a] group-hover:border-[#e6001a]/10 transition-all duration-300 flex-shrink-0 ml-4">
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180 text-[#e6001a]' : 'rotate-0'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 border-t border-white/[0.02]' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <div className="px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm text-zinc-400 font-light leading-relaxed bg-black/[0.08]">{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}
