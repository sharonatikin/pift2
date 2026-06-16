'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Layers, 
  ShoppingBag, 
  Truck, 
  Award, 
  ChevronDown, 
  FileText,
  TrendingUp,
  Shirt,
  Sparkles,
  Dumbbell,
  Snowflake,
  Heart,
  Palette,
  Scissors,
  Factory,
  Users,
  Presentation,
  Quote
} from 'lucide-react';

export default function Page() {
  // Tracking open index state for smooth accordion drawer toggles
  const [openIndex, setOpenIndex] = useState(null);

  const snapshotItems = [
    { label: 'Duration', value: '3 Years' },
    { label: 'Eligibility', value: '10+2 Any Stream' },
    { label: 'Industry Exposure', value: 'Live Projects & Internships' },
    { label: 'Career Support', value: '100% Placement Assistance' },
  ];

  const innovationCards = [
    { title: 'Sportswear Design', icon: Shirt },
    { title: 'Luxury Knitwear', icon: Sparkles },
    { title: 'Activewear Development', icon: Dumbbell },
    { title: 'Winter Fashion', icon: Snowflake },
    { title: 'Lingerie & Intimate Wear', icon: Heart },
    { title: 'Fashion Merchandising', icon: ShoppingBag },
  ];

  const pipelineSteps = [
    { number: '01', title: 'Fashion Illustration & Design Basics', side: 'left', icon: Palette },
    { number: '02', title: 'Textile & Yarn Fundamentals', side: 'right', icon: Layers },
    { number: '03', title: 'Knit Structures & Techniques', side: 'left', icon: Sparkles },
    { number: '04', title: 'Garment Construction for Knits', side: 'right', icon: Scissors },
    { number: '05', title: 'Digital Knitwear Development', side: 'left', icon: Layers },
    { number: '06', title: 'Collection Design & Portfolio', side: 'right', icon: Award }
  ];

  const beyondClassroomCards = [
    { title: 'Factory Visits', icon: Factory },
    { title: 'Export Houses', icon: Truck },
    { title: 'Industry Mentorship', icon: Users },
    { title: 'Fashion Exhibitions', icon: Presentation }
  ];

  const skillsList = [
    'Trend Forecasting',
    'Technical Sketching',
    'Pattern Making',
    'Yarn Selection',
    'Fabric Development',
    'CAD Fashion Software',
    'Collection Planning',
    'Product Development'
  ];

  const mentors = [
    { title: 'Industry Exposure', desc: 'Work with leading fashion brands and industry professionals.' },
    { title: 'Practical Learning', desc: 'Hands-on projects and real-world business scenarios.' },
    { title: 'Business Development', desc: 'From startup planning to brand launch support.' }
  ];

  const targetProfiles = [
    { title: 'Aspiring Designers', desc: 'Looking to set up structural fundamentals correctly right out of the gate without years of trial and error.' },
    { title: 'Industry Pivoters', desc: 'Professionals coming from graphic or structural fields wanting execution frameworks for textiles.' },
    { title: 'Fashion Entrepreneurs', desc: 'Founders looking to launch their capsule lines who need to master technical syntax to direct manufacturing teams.' },
    { title: 'Advanced Stylists', desc: 'Creatives looking to complement styling vision with deeper technical pattern-making systems.' }
  ];

  const careerCards = [
    { title: 'Knitwear Designer', growth: '+35%' },
    { title: 'Fashion Designer', growth: '+28%' },
    { title: 'Product Developer', growth: '+42%' },
    { title: 'Fashion Stylist', growth: '+30%' },
    { title: 'Merchandiser', growth: '+25%' },
    { title: 'Creative Manager', growth: '+38%' },
    { title: 'Production Manager', growth: '+32%' },
    { title: 'Fashion Entrepreneur', growth: '+45%' },
  ];

  const alumniStories = [
    {
      quote: 'The knitwear design program transformed my understanding of fashion. The hands-on training and industry exposure helped me land my dream job at a luxury fashion house.',
      name: 'Priya Sharma',
      role: 'Senior Knitwear Designer at Luxury Brand'
    },
    {
      quote: 'From learning traditional techniques to mastering digital tools, this program gave me everything I needed to start my own knitwear label. The mentorship was invaluable.',
      name: 'Arjun Mehta',
      role: 'Founder, Contemporary Knitwear Brand'
    },
    {
      quote: 'The comprehensive curriculum covering yarn science, pattern engineering, and trend forecasting prepared me perfectly for the fast-paced fashion industry.',
      name: 'Ananya Singh',
      role: 'Product Developer at International Sportswear Company'
    }
  ];

  const faqs = [
    {
      question: 'What is Knitwear Design?',
      answer: 'Knitwear Design is a specialized branch of fashion engineering that merges raw yarn science and machinery configuration with contemporary silhouette structures. Unlike woven apparel, it allows creators to architect the actual textile substrate alongside the complete physical garment architecture concurrently.',
    },
    {
      question: 'Who can apply?',
      answer: 'This track welcome design undergraduates looking to narrow focus into luxury wools and specialized technical mesh, industry professionals transitioning from traditional pattern-making fields, and independent entrepreneurs building specialized activewear labels.',
    },
    {
      question: 'What careers can I pursue?',
      answer: 'Graduates exit into foundational tracks as specialized Industrial Knitwear Designers, Product Technical Engineers, Brand Category Leads, Yarn Development Specialists, Luxury Visual Merchandisers, or Independent Brand Founders.',
    },
    {
      question: 'Do I receive industry exposure?',
      answer: 'Yes. The curriculum includes direct machine workshop modules, partnerships with production facilities, active commercial studio simulations, and direct critiques from leading design houses.',
    },
    {
      question: 'Will I work on live projects?',
      answer: 'Yes, all parameters across the technical semesters mandate real-world enterprise briefs, factory-grade construction simulations, and complete collection blueprints ready for commercialized runway placement.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#050102] text-white font-sans antialiased selection:bg-[#e6001a]">
  

      {/* 3. COURSE SNAPSHOT */}
      <section className="bg-[#050102] py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {snapshotItems.map((item, idx) => (
              <div key={idx} className="bg-[#110d0e]/90 border border-white/[0.03] rounded-2xl p-6 min-h-[130px] flex flex-col justify-between transition duration-300 hover:border-white/10">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase block">{item.label}</span>
                <h3 className="font-serif text-lg sm:text-xl font-medium tracking-wide text-zinc-200 leading-snug mt-4">{item.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHERE CREATIVITY MEETS STRUCTURE */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-[#e6001a]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5 w-full flex justify-center md:justify-start">
            <div className="relative w-full max-w-[440px] aspect-[4/3] sm:aspect-[4/5] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80" 
                alt="Fashion studio workspace" 
                className="w-full h-full object-cover grayscale opacity-90 contrast-105"
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-6 md:space-y-8 text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight font-serif">
              Where Creativity<br /><span className="italic font-normal">Meets Structure</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-light">
              Knitwear Design combines creativity, technology and craftsmanship to create apparel for sportswear, 
              casualwear, luxury fashion, winterwear and performance garments. Students learn yarn science, 
              knit structures, garment construction and digital design techniques.
            </p>
            <div className="flex flex-wrap gap-3 max-w-2xl">
              {['Circular Knitting', 'Flat Knitting', 'Pattern Engineering', 'Yarn Development', 'Fashion Forecasting', 'Digital Knit Design'].map((tag, idx) => (
                <div key={idx} className="bg-[#110d0e]/90 border border-white/[0.04] rounded-full px-5 py-2.5 text-xs font-light text-zinc-300 tracking-wide">{tag}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE KNITWEAR INNOVATION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight font-serif">Explore Knitwear Innovation</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {innovationCards.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-[#110d0e]/90 border border-white/[0.03] hover:border-[#e6001a]/20 rounded-[24px] p-8 min-h-[180px] flex flex-col justify-between transition duration-300 group hover:bg-[#150f11]">
                  <div className="w-12 h-12 rounded-xl bg-[#e6001a]/10 border border-[#e6001a]/20 flex items-center justify-center text-[#e6001a]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium tracking-wide text-zinc-200 mt-6 group-hover:text-white transition duration-200">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. YOUR CREATIVE EVOLUTION (VERTICAL TIMELINE) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium font-serif tracking-tight">Your Creative Evolution</h2>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-[24px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[1px] bg-[#e6001a]/40" />
            <div className="space-y-12 md:space-y-0 relative w-full">
              {pipelineSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row relative items-start md:items-center w-full md:min-h-[140px]">
                  <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#e6001a] shadow-[0_0_12px_#e6001a] z-20" />
                  
                  <div className={`w-full md:w-1/2 pl-12 pr-0 md:pl-0 md:pr-12 flex justify-start md:justify-end ${step.side === 'left' ? 'md:opacity-100' : 'md:opacity-0 md:pointer-events-none'}`}>
                    {step.side === 'left' && (
                      <div className="bg-[#110d0e]/90 border border-white/[0.03] hover:border-[#e6001a]/20 rounded-2xl p-6 md:p-8 w-full max-w-[420px] transition duration-300 group hover:bg-[#150f11] flex flex-col text-left md:text-right">
                        <span className="font-serif text-lg font-medium tracking-wide text-[#e6001a] mb-2">{step.number}</span>
                        <h3 className="font-serif text-base md:text-lg font-medium text-zinc-200 group-hover:text-white transition duration-200">{step.title}</h3>
                      </div>
                    )}
                  </div>

                  <div className={`w-full md:w-1/2 pl-12 pr-0 md:pl-12 flex justify-start ${step.side === 'right' ? 'md:opacity-100' : 'md:opacity-0 md:pointer-events-none'}`}>
                    {step.side === 'right' && (
                      <div className="bg-[#110d0e]/90 border border-white/[0.03] hover:border-[#e6001a]/20 rounded-2xl p-6 md:p-8 w-full max-w-[420px] transition duration-300 group hover:bg-[#150f11] flex flex-col text-left">
                        <span className="font-serif text-lg font-medium tracking-wide text-[#e6001a] mb-2">{step.number}</span>
                        <h3 className="font-serif text-base md:text-lg font-medium text-zinc-200 group-hover:text-white transition duration-200">{step.title}</h3>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. LEARN BEYOND THE CLASSROOM */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#e6001a]/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full order-2 lg:order-1">
              {beyondClassroomCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div key={idx} className="bg-[#110d0e]/90 border border-white/[0.03] hover:border-[#e6001a]/20 rounded-[24px] p-8 flex flex-col justify-start min-h-[160px] transition duration-300 ease-out group hover:bg-[#150f11]">
                    <div className="w-12 h-12 rounded-xl bg-[#e6001a]/10 border border-[#e6001a]/20 flex items-center justify-center text-[#e6001a] transition duration-300 group-hover:bg-[#e6001a] group-hover:text-white group-hover:scale-105 shadow-[0_0_12px_rgba(230,0,0,0.15)] mb-6 flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-medium tracking-wide text-zinc-200 group-hover:text-white transition duration-200 leading-snug">{card.title}</h3>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-6 space-y-8 text-left order-1 lg:order-2 lg:pl-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] font-serif text-white">
                  Learn Beyond<br />The Classroom
                </h2>
              </div>
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80" 
                  alt="Technical drawing setup" 
                  className="w-full h-full object-cover grayscale opacity-90 contrast-105 transition duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. SKILLS THAT SHAPE CAREERS */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white font-serif">Skills That Shape Careers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {skillsList.map((skill, idx) => (
              <div key={idx} className="bg-[#110d0e]/90 border border-white/[0.03] hover:border-[#e6001a]/20 rounded-2xl p-8 min-h-[100px] flex items-center justify-center text-center transition duration-300 group hover:bg-[#150f11]">
                <h3 className="font-sans text-sm md:text-base font-medium text-zinc-300 group-hover:text-white transition duration-200">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DESIGNED BY MENTORS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-light font-serif">Designed By <span className="text-[#e6001a] italic">Atelier Masters</span> & Mentors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mentors.map((item, idx) => (
            <div key={idx} className="bg-[#110d0e]/90 border border-white/[0.03] p-8 rounded-2xl hover:border-zinc-800 transition">
              <h3 className="text-xl font-serif font-semibold mb-3 text-zinc-200">{item.title}</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. EXPLORE STUNNING STUDIO SPACE (MOSAIC GALLERY) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-light font-serif">Explore the <span className="text-[#e6001a]">Stunning</span> Studio Space</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px] md:h-[500px]">
          <div className="md:col-span-4 rounded-xl overflow-hidden bg-zinc-900 relative group h-full">
            <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80" alt="High fashion presentation model view" className="w-full h-full object-cover grayscale opacity-80 transition duration-500 group-hover:scale-102" />
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-6 h-full">
            <div className="rounded-xl overflow-hidden bg-zinc-900 relative group">
              <img src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=600&q=80" alt="Woven pattern details texture knit" className="w-full h-full object-cover grayscale opacity-75 transition duration-500 group-hover:scale-102" />
            </div>
            <div className="rounded-xl overflow-hidden bg-zinc-900 relative group">
              <img src="https://images.unsplash.com/photo-1615148739121-fd9e7efdb0df?auto=format&fit=crop&w=600&q=80" alt="Golden knit stitch details pattern layout" className="w-full h-full object-cover grayscale opacity-80 transition duration-500 group-hover:scale-102" />
            </div>
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-6 h-full">
            <div className="rounded-xl overflow-hidden bg-zinc-900 relative group">
              <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" alt="Technical drawing tools mapping setup" className="w-full h-full object-cover grayscale opacity-70 transition duration-500 group-hover:scale-102" />
            </div>
            <div className="rounded-xl overflow-hidden bg-zinc-900 relative group">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80" alt="Students executing collection design layouts" className="w-full h-full object-cover grayscale opacity-75 transition duration-500 group-hover:scale-102" />
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHO IS THIS PROGRAM FOR */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-light font-serif">Who Is This <span className="text-[#e6001a]">Program</span> For?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {targetProfiles.map((profile, index) => (
            <div key={index} className="bg-[#110d0e]/90 border border-white/[0.03] p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#e6001a]/40 group-hover:bg-[#e6001a] transition" />
              <h3 className="text-lg font-serif font-medium text-zinc-200 mb-2">{profile.title}</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">{profile.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. FUTURE CAREERS GRID MATRIX */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#e6001a]/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight font-serif">
              Future Careers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {careerCards.map((career, idx) => (
              <div key={idx} className="bg-[#110d0e]/90 border border-white/[0.03] hover:border-[#e6001a]/20 rounded-[24px] p-8 min-h-[160px] flex flex-col justify-between transition duration-300 ease-out group hover:bg-[#150f11]">
                <div className="flex items-start justify-between">
                  <h3 className="font-serif text-xl font-medium tracking-wide text-zinc-200 group-hover:text-white transition duration-200 leading-snug">{career.title}</h3>
                  <div className="w-8 h-8 rounded-lg bg-[#e6001a]/10 border border-[#e6001a]/20 flex items-center justify-center text-[#e6001a]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-zinc-500">
                  <span>Growth</span>
                  <span className="text-[#e6001a] font-semibold">{career.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. ALUMNI SUCCESS STORIES GRID */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#e6001a]/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight font-serif">
              Alumni Success Stories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {alumniStories.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#110d0e]/90 border border-white/[0.03] hover:border-[#e6001a]/20 rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[340px] transition duration-300 ease-out group hover:bg-[#150f11]"
              >
                <div className="space-y-6">
                  <div className="text-[#e6001a] opacity-80 group-hover:opacity-100 transition duration-200">
                    <Quote className="w-10 h-10 transform scale-x-[-1]" />
                  </div>
                  <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed tracking-wide">
                    {item.quote}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5 space-y-1">
                  <h3 className="font-serif text-lg font-medium tracking-wide text-zinc-100 group-hover:text-white transition duration-200">
                    {item.name}
                  </h3>
                  <p className="text-zinc-500 text-xs sm:text-sm font-light tracking-wide">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CERTIFICATION METRIC SHOWCASE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative">
        <div className="space-y-4 max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-light font-serif">Learn. Create. <span className="text-[#e6001a]">Get Certified.</span></h2>
          <p className="text-zinc-400 text-sm font-light">Every completed design track grants an official verification seal linked to your portfolio for global authenticity loops.</p>
        </div>
        <div className="max-w-md mx-auto bg-[#110d0e]/90 border border-white/5 p-4 rounded-xl shadow-2xl">
          <div className="aspect-[16/10] bg-zinc-900 rounded-lg overflow-hidden relative flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" alt="Credentials Certificate Verification Graphic" className="w-full h-full object-cover opacity-20 grayscale" />
            <div className="absolute p-6 text-center border border-white/10 bg-black/60 backdrop-blur-sm rounded-lg max-w-xs">
              <Award className="w-8 h-8 text-[#e6001a] mx-auto mb-2" />
              <h4 className="font-serif italic text-sm text-zinc-300">Official Verification Seal</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light font-serif">Frequently Asked <span className="italic text-[#e6001a]">Questions</span></h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="bg-[#110d0e]/90 border border-white/[0.03] hover:border-white/[0.07] rounded-[20px] overflow-hidden transition-all duration-300">
                  <button onClick={() => toggleFAQ(idx)} className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left group focus:outline-none">
                    <span className="text-sm md:text-base font-medium text-zinc-200 group-hover:text-white transition duration-200">{faq.question}</span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.01] border border-white/5 flex items-center justify-center text-[#e6001a]/70 group-hover:text-[#e6001a] transition duration-300">
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#e6001a]' : 'rotate-0'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 border-t border-white/[0.02]' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <div className="px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm text-zinc-400 font-light bg-black/[0.08]">{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 16. BOTTOM CALL TO ACTION TRANSFORMATION MATRIX BANNER */}
      <section className="bg-[#050102] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,0,26,0.08)_0%,transparent_65%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light font-serif leading-tight">
            Start Your <span className="italic text-[#e6001a]">Fashion</span><br />Journey Today.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-light">Transform raw craftsmanship parameters into high-performing commercial collections.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#e6001a] hover:bg-[#c90016] text-sm font-semibold tracking-wide rounded-full text-white transition duration-300 shadow-xl shadow-[#e6001a]/15 flex items-center justify-center gap-2 group">
              Apply For Admission
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/[0.01] hover:bg-white/[0.04] text-sm font-medium tracking-wide rounded-full text-zinc-300 border border-white/10 hover:border-white/20 transition duration-300 flex items-center justify-center gap-2">
              Download Prospectus
              <FileText className="w-4 h-4 opacity-40" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}