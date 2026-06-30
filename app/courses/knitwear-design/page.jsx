'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
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
  const [openIndex, setOpenIndex] = useState(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

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
    <div className="min-h-screen bg-pageBg text-textMain font-sans antialiased selection:bg-accent/30 transition-colors duration-300">

      {/* 3. COURSE SNAPSHOT */}
      <section className="bg-pageBg py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {snapshotItems.map((item, idx) => (
              <div key={idx} className="bg-cardBg border border-brandBorder rounded-2xl p-6 min-h-[130px] flex flex-col justify-between transition duration-300 hover:border-textMuted">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-textSubtle uppercase block">{item.label}</span>
                <h3 className="font-serif text-lg sm:text-xl font-medium tracking-wide text-textMain leading-snug mt-4">{item.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHERE CREATIVITY MEETS STRUCTURE */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5 w-full flex justify-center md:justify-start">
            <div className="relative w-full max-w-[440px] aspect-[4/3] sm:aspect-[4/5] rounded-[32px] overflow-hidden border border-brandBorder shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80" 
                alt="Fashion studio workspace" 
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className={`object-cover opacity-90 contrast-105 transition-all duration-700 ${mounted && isDark ? 'grayscale' : 'grayscale-0'}`}
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-6 md:space-y-8 text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight font-serif text-textMain">
              Where Creativity<br /><span className="italic font-normal text-accent">Meets Structure</span>
            </h2>
            <p className="text-textMuted text-sm sm:text-base leading-relaxed max-w-xl font-light">
              Knitwear Design combines creativity, technology and craftsmanship to create apparel for sportswear, 
              casualwear, luxury fashion, winterwear and performance garments. Students learn yarn science, 
              knit structures, garment construction and digital design techniques.
            </p>
            <div className="flex flex-wrap gap-3 max-w-2xl">
              {['Circular Knitting', 'Flat Knitting', 'Pattern Engineering', 'Yarn Development', 'Fashion Forecasting', 'Digital Knit Design'].map((tag, idx) => (
                <div key={idx} className="bg-cardBg border border-brandBorder rounded-full px-5 py-2.5 text-xs font-light text-textMuted tracking-wide">{tag}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE KNITWEAR INNOVATION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight font-serif text-textMain">Explore Knitwear Innovation</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {innovationCards.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-cardBg border border-brandBorder hover:border-accent/30 rounded-[24px] p-8 min-h-[180px] flex flex-col justify-between transition duration-300 group hover:bg-cardBgHover">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium tracking-wide text-textMain mt-6 transition duration-200">{item.title}</h3>
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium font-serif tracking-tight text-textMain">Your Creative Evolution</h2>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-[24px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[1px] bg-accent/40" />
            <div className="space-y-12 md:space-y-0 relative w-full">
              {pipelineSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row relative items-start md:items-center w-full md:min-h-[140px]">
                  <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_var(--accent-color)] z-20" />
                  
                  <div className={`w-full md:w-1/2 pl-12 pr-0 md:pl-0 md:pr-12 flex justify-start md:justify-end ${step.side === 'left' ? 'md:opacity-100' : 'md:opacity-0 md:pointer-events-none'}`}>
                    {step.side === 'left' && (
                      <div className="bg-cardBg border border-brandBorder hover:border-accent/30 rounded-2xl p-6 md:p-8 w-full max-w-[420px] transition duration-300 group hover:bg-cardBgHover flex flex-col text-left md:text-right">
                        <span className="font-serif text-lg font-medium tracking-wide text-accent mb-2">{step.number}</span>
                        <h3 className="font-serif text-base md:text-lg font-medium text-textMain transition duration-200">{step.title}</h3>
                      </div>
                    )}
                  </div>

                  <div className={`w-full md:w-1/2 pl-12 pr-0 md:pl-12 flex justify-start ${step.side === 'right' ? 'md:opacity-100' : 'md:opacity-0 md:pointer-events-none'}`}>
                    {step.side === 'right' && (
                      <div className="bg-cardBg border border-brandBorder hover:border-accent/30 rounded-2xl p-6 md:p-8 w-full max-w-[420px] transition duration-300 group hover:bg-cardBgHover flex flex-col text-left">
                        <span className="font-serif text-lg font-medium tracking-wide text-accent mb-2">{step.number}</span>
                        <h3 className="font-serif text-base md:text-lg font-medium text-textMain transition duration-200">{step.title}</h3>
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full order-2 lg:order-1">
              {beyondClassroomCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div key={idx} className="bg-cardBg border border-brandBorder hover:border-accent/30 rounded-[24px] p-8 flex flex-col justify-start min-h-[160px] transition duration-300 ease-out group hover:bg-cardBgHover">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent transition duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-105 shadow-[0_0_12px_rgba(230,0,0,0.15)] mb-6 flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-medium tracking-wide text-textMain transition duration-200 leading-snug">{card.title}</h3>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-6 space-y-8 text-left order-1 lg:order-2 lg:pl-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] font-serif text-textMain">
                  Learn Beyond<br />The Classroom
                </h2>
              </div>
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] rounded-[32px] overflow-hidden border border-brandBorder shadow-2xl group">
                <Image 
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80" 
                  alt="Technical drawing setup" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className={`object-cover opacity-90 contrast-105 transition duration-700 group-hover:scale-102 ${mounted && isDark ? 'grayscale' : 'grayscale-0'}`}
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-textMain font-serif">Skills That Shape Careers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {skillsList.map((skill, idx) => (
              <div key={idx} className="bg-cardBg border border-brandBorder hover:border-accent/30 rounded-2xl p-8 min-h-[100px] flex items-center justify-center text-center transition duration-300 group hover:bg-cardBgHover">
                <h3 className="font-sans text-sm md:text-base font-medium text-textMuted group-hover:text-textMain transition duration-200">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DESIGNED BY MENTORS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-light font-serif text-textMain">Designed By <span className="text-accent italic">Atelier Masters</span> & Mentors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mentors.map((item, idx) => (
            <div key={idx} className="bg-cardBg border border-brandBorder p-8 rounded-2xl hover:border-textMuted transition">
              <h3 className="text-xl font-serif font-semibold mb-3 text-textMain">{item.title}</h3>
              <p className="text-textMuted text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. EXPLORE STUNNING STUDIO SPACE (MOSAIC GALLERY) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-light font-serif text-textMain">Explore the <span className="text-accent">Stunning</span> Studio Space</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px] md:h-[500px]">
          <div className="relative md:col-span-4 rounded-xl overflow-hidden bg-cardBg border border-brandBorder group h-full">
            <Image 
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80" 
              alt="High fashion presentation model view" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={`object-cover opacity-80 transition duration-500 group-hover:scale-102 ${mounted && isDark ? 'grayscale' : 'grayscale-0'}`}
            />
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-6 h-full">
            <div className="relative rounded-xl overflow-hidden bg-cardBg border border-brandBorder group">
              <Image 
                src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=600&q=80" 
                alt="Woven pattern details texture knit" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`object-cover opacity-75 transition duration-500 group-hover:scale-102 ${mounted && isDark ? 'grayscale' : 'grayscale-0'}`}
              />
            </div>
            <div className="relative rounded-xl overflow-hidden bg-cardBg border border-brandBorder group">
              <Image 
                src="https://images.unsplash.com/photo-1615148739121-fd9e7efdb0df?auto=format&fit=crop&w=600&q=80" 
                alt="Golden knit stitch details pattern layout" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`object-cover opacity-80 transition duration-500 group-hover:scale-102 ${mounted && isDark ? 'grayscale' : 'grayscale-0'}`}
              />
            </div>
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-6 h-full">
            <div className="relative rounded-xl overflow-hidden bg-cardBg border border-brandBorder group">
              <Image 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" 
                alt="Technical drawing tools mapping setup" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`object-cover opacity-70 transition duration-500 group-hover:scale-102 ${mounted && isDark ? 'grayscale' : 'grayscale-0'}`}
              />
            </div>
            <div className="relative rounded-xl overflow-hidden bg-cardBg border border-brandBorder group">
              <Image 
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80" 
                alt="Students executing collection design layouts" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`object-cover opacity-75 transition duration-500 group-hover:scale-102 ${mounted && isDark ? 'grayscale' : 'grayscale-0'}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHO IS THIS PROGRAM FOR */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-light font-serif text-textMain">Who Is This <span className="text-accent">Program</span> For?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {targetProfiles.map((profile, index) => (
            <div key={index} className="bg-cardBg border border-brandBorder p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent/40 group-hover:bg-accent transition" />
              <h3 className="text-lg font-serif font-medium text-textMain mb-2">{profile.title}</h3>
              <p className="text-sm text-textMuted font-light leading-relaxed">{profile.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. FUTURE CAREERS GRID MATRIX */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-textMain tracking-tight font-serif">
              Future Careers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {careerCards.map((career, idx) => (
              <div key={idx} className="bg-cardBg border border-brandBorder hover:border-accent/30 rounded-[24px] p-8 min-h-[160px] flex flex-col justify-between transition duration-300 ease-out group hover:bg-cardBgHover">
                <div className="flex items-start justify-between">
                  <h3 className="font-serif text-xl font-medium tracking-wide text-textMain transition duration-200 leading-snug">{career.title}</h3>
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-textSubtle">
                  <span>Growth</span>
                  <span className="text-accent font-semibold">{career.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. ALUMNI SUCCESS STORIES GRID */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-textMain tracking-tight font-serif">
              Alumni Success Stories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {alumniStories.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-cardBg border border-brandBorder hover:border-accent/30 rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[340px] transition duration-300 ease-out group hover:bg-cardBgHover"
              >
                <div className="space-y-6">
                  <div className="text-accent opacity-80 group-hover:opacity-100 transition duration-200">
                    <Quote className="w-10 h-10 transform scale-x-[-1]" />
                  </div>
                  <p className="text-textMuted text-sm sm:text-base font-light leading-relaxed tracking-wide">
                    {item.quote}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-brandBorder space-y-1">
                  <h3 className="font-serif text-lg font-medium tracking-wide text-textMain transition duration-200">
                    {item.name}
                  </h3>
                  <p className="text-textSubtle text-xs sm:text-sm font-light tracking-wide">
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
          <h2 className="text-4xl font-light font-serif text-textMain">Learn. Create. <span className="text-accent">Get Certified.</span></h2>
          <p className="text-textMuted text-sm font-light">Every completed design track grants an official verification seal linked to your portfolio for global authenticity loops.</p>
        </div>
        <div className="max-w-md mx-auto bg-cardBg border border-brandBorder p-4 rounded-xl shadow-2xl">
          <div className="relative aspect-[16/10] bg-cardBgHover rounded-lg overflow-hidden flex items-center justify-center">
            <Image 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" 
              alt="Credentials Certificate Verification Graphic" 
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover opacity-20 grayscale" 
            />
            <div className="absolute p-6 text-center border border-brandBorder bg-pageBg/70 backdrop-blur-sm rounded-lg max-w-xs">
              <Award className="w-8 h-8 text-accent mx-auto mb-2" />
              <h4 className="font-serif italic text-sm text-textMuted">Official Verification Seal</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light font-serif text-textMain">Frequently Asked <span className="italic text-accent">Questions</span></h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="bg-cardBg border border-brandBorder hover:border-textMuted rounded-[20px] overflow-hidden transition-all duration-300">
                  <button onClick={() => toggleFAQ(idx)} className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left group focus:outline-none">
                    <span className="text-sm md:text-base font-medium text-textMain transition duration-200">{faq.question}</span>
                    <div className="w-8 h-8 rounded-full bg-cardBg border border-brandBorder flex items-center justify-center text-accent/70 group-hover:text-accent transition duration-300">
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'rotate-0'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 border-t border-brandBorder' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <div className="px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm text-textMuted font-light bg-cardBg/50">{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 16. BOTTOM CALL TO ACTION TRANSFORMATION MATRIX BANNER */}
      <section className="bg-pageBg py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent-color)_0%,transparent_65%)] opacity-[0.08] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light font-serif leading-tight text-textMain">
            Start Your <span className="italic text-accent">Fashion</span><br />Journey Today.
          </h2>
          <p className="text-textMuted text-sm sm:text-base max-w-xl mx-auto font-light">Transform raw craftsmanship parameters into high-performing commercial collections.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accentHover text-sm font-semibold tracking-wide rounded-full text-white transition duration-300 shadow-xl shadow-accent/15 flex items-center justify-center gap-2 group">
              Apply For Admission
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-cardBg hover:bg-cardBgHover text-sm font-medium tracking-wide rounded-full text-textMuted border border-brandBorder hover:border-textMuted transition duration-300 flex items-center justify-center gap-2">
              Download Prospectus
              <FileText className="w-4 h-4 opacity-40" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}