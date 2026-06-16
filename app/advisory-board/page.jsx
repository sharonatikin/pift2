'use client';

import React from 'react';
import { 
  BookOpen, 
  Building2, 
  Lightbulb, 
  Users, 
  Globe, 
  TrendingUp,
  Star, 
  Briefcase, 
  FolderKanban, 
  Network, 
  Award, 
  GraduationCap 
} from 'lucide-react';

// Data Sets
const members = [
  {
    id: 1,
    name: 'Arjun Mehta',
    role: 'Creative Director',
    company: 'Luxe Design Studio, Mumbai',
    description: "Award-winning creative director with 20+ years shaping India's luxury fashion landscape.",
    tag: 'FASHION INDUSTRY',
    imageUrl: 'https://images.unsplash.com/photo-1618015358954-115ef1ed6515?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    name: 'Dr. Leena Kapoor',
    role: 'Professor & Design Theorist',
    company: 'National Institute of Design',
    description: 'Pioneering researcher bridging academic theory and practical design innovation.',
    tag: 'EDUCATION STRATEGIST',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    name: 'Rahul Singhvi',
    role: 'CEO & Brand Consultant',
    company: 'Singhvi Luxury Group',
    description: 'Veteran retail leader who has built and scaled luxury brand ecosystems across 12 countries.',
    tag: 'RETAIL & LUXURY',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    name: 'Ananya Roy',
    role: 'Head of Textile Innovation',
    company: 'FabricForward International',
    description: 'Visionary textile innovator pioneering sustainable material solutions for global fashion brands.',
    tag: 'TEXTILE SPECIALIST',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 5,
    name: 'Vikram Chandra',
    role: 'Principal Architect',
    company: 'Chandra & Associates',
    description: 'RIBA-award-winning principal architect renowned for luxury hospitality and retail interior environments.',
    tag: 'INTERIOR DESIGN LEADER',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 6,
    name: 'Meera Desai',
    role: 'Founder & Entrepreneur',
    company: 'StudioMeera',
    description: 'Serial entrepreneur who launched five award-winning design studios transforming creative commerce.',
    tag: 'CREATIVE ENTREPRENEUR',
    imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600',
  },
];

const expertiseNodes = [
  { title: 'Fashion Design', x: 0, y: -160, textAlign: 'center' },
  { title: 'Interior Design', x: 120, y: -115, textAlign: 'left' },
  { title: 'Textile Innovation', x: 190, y: -10, textAlign: 'left' },
  { title: 'Retail & Luxury', x: 140, y: 105, textAlign: 'left' },
  { title: 'Brand Strategy', x: 75, y: 185, textAlign: 'left' },
  { title: 'Sustainability', x: 0, y: 220, textAlign: 'center' },
  { title: 'Technology', x: -75, y: 185, textAlign: 'right' },
  { title: 'Entrepreneurship', x: -140, y: 105, textAlign: 'right' },
  { title: 'Design Management', x: -190, y: -10, textAlign: 'right' },
  { title: 'Creative Leadership', x: -120, y: -115, textAlign: 'right' },
];

const contributions = [
  {
    id: 1,
    icon: BookOpen,
    title: 'Academic Excellence',
    subtitle: 'CURRICULUM DEVELOPMENT',
    description: 'Shaping rigorous, industry-aligned academic programmes that foster design thinking and creative mastery.',
  },
  {
    id: 2,
    icon: Building2,
    title: 'Industry Integration',
    subtitle: 'INDUSTRY-RELEVANT LEARNING',
    description: 'Embedding real-world industry practices, case studies and live projects into the learning ecosystem.',
  },
  {
    id: 3,
    icon: Lightbulb,
    title: 'Innovation',
    subtitle: 'FUTURE-ORIENTED EDUCATION',
    description: 'Championing emerging technologies, materials and methodologies to keep PIFT at the design frontier.',
  },
  {
    id: 4,
    icon: Users,
    title: 'Mentorship',
    subtitle: 'STUDENT DEVELOPMENT',
    description: 'Providing direct mentorship, portfolio guidance and career counsel to nurture creative professionals.',
  },
  {
    id: 5,
    icon: Globe,
    title: 'Global Exposure',
    subtitle: 'INTERNATIONAL PERSPECTIVES',
    description: 'Opening pathways to global design communities, exchanges and international industry immersions.',
  },
  {
    id: 6,
    icon: TrendingUp,
    title: 'Strategic Growth',
    subtitle: 'INSTITUTIONAL ADVANCEMENT',
    description: "Guiding PIFT's long-term strategic vision to grow as a premier design institution of global repute.",
  },
];

const insights = [
  {
    id: '01',
    title: 'Industry Trends',
    stat: '87%',
    statLabel: 'of employers prioritise design thinking skills',
    description: 'Our advisory board tracks macro industry shifts and integrates emerging trend intelligence into the PIFT curriculum, ensuring graduates lead rather than follow.',
  },
  {
    id: '02',
    title: 'Emerging Technologies',
    stat: '3X',
    statLabel: 'faster career growth with tech-integrated design skills',
    description: 'From AI-assisted design to virtual fabric simulation, our board ensures students master the technologies reshaping creative industries globally.',
  },
  {
    id: '03',
    title: 'Design Innovation',
    stat: '60%',
    statLabel: 'of design briefs now require cross-disciplinary thinking',
    description: 'Boundary-breaking design innovation is the new standard. Our advisors champion interdisciplinary methodologies that prepare students for complex creative challenges.',
  },
  {
    id: '04',
    title: 'Professional Expectations',
    stat: '2X',
    statLabel: 'salary premium for portfolio-ready graduates',
    description: 'Industry hiring expectations have risen dramatically. Our board ensures PIFT graduates enter the workforce exceeding professional standards from day one.',
  },
  {
    id: '05',
    title: 'Global Opportunities',
    stat: '40+',
    statLabel: 'countries where PIFT alumni are creating impact',
    description: 'International design markets are actively recruiting creative talent. Our advisors open doors to global collaborations, internships and placement opportunities.',
  },
  {
    id: '06',
    title: 'Modern Creative Careers',
    stat: '500+',
    statLabel: 'industry collaborations facilitated by the board',
    description: 'The definition of a design career has transformed. Our board prepares students for entrepreneurship, creative direction, brand consulting and beyond.',
  },
];

const timelineEvents = [
  {
    year: '2000',
    title: 'Foundation Years',
    description: "Advisory Board established with founding industry leaders to guide PIFT's academic vision and early curriculum design.",
    alignment: 'left',
  },
  {
    year: '2005',
    title: 'Academic Expansion',
    description: 'Board facilitated the launch of three new design programmes and partnerships with leading national design institutions.',
    alignment: 'right',
  },
  {
    year: '2010',
    title: 'Industry Collaborations',
    description: 'Landmark collaborations forged with 15 fashion houses, textile companies and retail groups to create live industry experiences.',
    alignment: 'left',
  },
  {
    year: '2015',
    title: 'Innovation Initiatives',
    description: "Board championed the creation of PIFT's Design Innovation Lab, embedding research and experimental practice into the curriculum.",
    alignment: 'right',
  },
  {
    year: '2019',
    title: 'Digital Transformation',
    description: 'Advisory leadership guided PIFT through its digital transformation, integrating CAD, virtual design and digital marketing into all programmes.',
    alignment: 'left',
  },
  {
    year: '2024',
    title: 'Global Outlook',
    description: 'International advisory partnerships established with institutions across Europe, the UK and Southeast Asia, opening global pathways for students.',
    alignment: 'right',
  },
];

const perspectives = [
  {
    id: 1,
    category: 'FASHION INDUSTRY',
    quote: 'Fashion is not just what you wear — it is the language through which culture speaks, evolves and endures.',
    author: 'Arjun Mehta',
    role: 'Creative Director, Luxe Design Studio',
  },
  {
    id: 2,
    category: 'DESIGN INNOVATION',
    quote: 'Design innovation begins the moment you stop solving for what exists today and start creating for what is needed tomorrow.',
    author: 'Dr. Leena Kapoor',
    role: 'Professor & Design Theorist',
  },
  {
    id: 3,
    category: 'FUTURE CAREERS',
    quote: 'The most sought-after creative professionals of the future will be those who combine aesthetic mastery with entrepreneurial vision.',
    author: 'Meera Desai',
    role: 'Founder, StudioMeera',
  },
  {
    id: 4,
    category: 'SUSTAINABILITY',
    quote: 'Sustainability is no longer a choice — it is the foundational ethos of every responsible design decision.',
    author: 'Ananya Roy',
    role: 'Head of Textile Innovation',
  },
];

const partners = [
  { id: 1, name: 'LVMH', category: 'LUXURY FASHION' },
  { id: 2, name: 'Fabindia', category: 'RETAIL' },
  { id: 3, name: 'Raymond', category: 'TEXTILE' },
  { id: 4, name: 'Nifty Studio', category: 'DESIGN STUDIO' },
  { id: 5, name: 'Godrej Design Lab', category: 'ARCHITECTURE' },
  { id: 6, name: 'Aditya Birla Fashion', category: 'FASHION BRAND' },
  { id: 7, name: 'Arvind Mills', category: 'TEXTILE' },
  { id: 8, name: 'Manyavar', category: 'RETAIL' },
  { id: 9, name: 'The House of Anita Dongre', category: 'LUXURY FASHION' },
  { id: 10, name: 'Morphogenesis', category: 'ARCHITECTURE' },
  { id: 11, name: 'Titan Design Studio', category: 'CREATIVE AGENCY' },
  { id: 12, name: 'Woodland', category: 'FASHION BRAND' },
];

const benefits = [
  {
    id: 1,
    icon: Star,
    title: 'Industry Mentorship',
    description: 'One-on-one access to seasoned professionals guiding your creative journey.',
  },
  {
    id: 2,
    icon: Briefcase,
    title: 'Career Guidance',
    description: 'Strategic career counselling from leaders who have built industry-defining careers.',
  },
  {
    id: 3,
    icon: FolderKanban,
    title: 'Portfolio Development',
    description: 'Expert critique and refinement of your design portfolio to industry standards.',
  },
  {
    id: 4,
    icon: Network,
    title: 'Professional Networking',
    description: 'Direct connections to an exclusive network of design professionals and studios.',
  },
  {
    id: 5,
    icon: Award,
    title: 'Alternative Opportunities',
    description: "Priority internship placements with PIFT's prestigious industry partners.",
  },
  {
    id: 6,
    icon: Globe,
    title: 'Industry Exposure',
    description: 'Live projects, industry visits and workshops facilitated by advisory members.',
  },
  {
    id: 7,
    icon: GraduationCap,
    title: 'Placement Readiness',
    description: 'Comprehensive preparation ensuring graduates meet and exceed hiring expectations.',
  },
];

// ==========================================
// CORE NEXT.JS PAGE COMPONENT
// ==========================================

export default function AdvisoryBoardPage() {
  return (
    <main className="w-full bg-[#030101] overflow-x-hidden selection:bg-[#e31e24] selection:text-white">
      
      {/* SECTION 1: HERO CONTAINER */}
      <section className="relative min-h-screen w-full bg-[#0b0706] text-white flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 md:space-y-8">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-[0.25em] text-[#e31e24] border border-[#e31e24]/30 px-3 py-1.5 font-medium bg-[#e31e24]/5">
                Our Advisory Board
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-normal leading-[1.15] tracking-tight">
              Guiding <br className="hidden md:inline" />
              Vision. <br />
              Shaping <br />
              <span className="text-[#e31e24] font-medium">Excellence.</span>
            </h1>
            <p className="text-[#999491] text-sm md:text-base leading-relaxed max-w-md font-sans">
              PIFT's Advisory Board brings together distinguished leaders, creative visionaries, 
              educators, entrepreneurs and industry experts who help shape the future of design 
              education and industry relevance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-[#e31e24] hover:bg-[#b81419] text-white text-xs md:text-sm font-semibold tracking-widest uppercase px-8 py-4 transition-colors duration-300 ease-in-out text-center">
                Meet the Advisors
              </button>
              <button className="border border-[#3a3532] hover:border-white text-white text-xs md:text-sm font-semibold tracking-widest uppercase px-8 py-4 bg-transparent transition-colors duration-300 ease-in-out text-center">
                Industry Partnerships
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4 h-full relative">
            <div className="sm:col-span-7 relative h-[350px] sm:h-[580px] w-full overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
                alt="Advisory board visionary leader"
                className="w-full h-full object-cover filter grayscale contrast-115 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0706]/40 via-transparent to-transparent" />
            </div>

            <div className="sm:col-span-5 flex flex-col gap-4 relative justify-between">
              <div className="relative h-[200px] sm:h-[272px] w-full overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                  alt="Creative design director layout style"
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="relative h-[250px] sm:h-[292px] w-full overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" 
                  alt="Fashion expert profile alignment"
                  className="w-full h-full object-cover filter grayscale contrast-110 brightness-75 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0706]/30 via-transparent to-transparent" />
              </div>
            </div>

            <div className="col-span-1 sm:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-0 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:translate-y-4 z-20 px-2 sm:px-4">
              <div className="grid grid-cols-2 gap-4 sm:col-span-1">
                <div className="bg-[#120c0a]/80 backdrop-blur-md border border-[#261c18] p-4 flex flex-col justify-between min-h-[95px] hover:border-[#e31e24]/40 transition-colors duration-300">
                  <span className="text-[#e31e24] text-lg font-serif font-semibold">25+</span>
                  <span className="text-[10px] tracking-widest text-[#999491] uppercase font-medium mt-1">Years Legacy</span>
                </div>
                <div className="bg-[#120c0a]/80 backdrop-blur-md border border-[#261c18] p-4 flex flex-col justify-between min-h-[95px] hover:border-[#e31e24]/40 transition-colors duration-300">
                  <span className="text-[#e31e24] text-lg font-serif font-semibold">38+</span>
                  <span className="text-[10px] tracking-widest text-[#999491] uppercase font-medium mt-1">Industry Partners</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:col-span-1">
                <div className="bg-[#120c0a]/80 backdrop-blur-md border border-[#261c18] p-4 flex flex-col justify-between min-h-[95px] hover:border-[#e31e24]/40 transition-colors duration-300">
                  <span className="text-[#e31e24] text-lg font-serif font-semibold">500+</span>
                  <span className="text-[10px] tracking-widest text-[#999491] uppercase font-medium mt-1">Collaborations</span>
                </div>
                <div className="bg-[#120c0a]/80 backdrop-blur-md border border-[#261c18] p-4 flex flex-col justify-between min-h-[95px] hover:border-[#e31e24]/40 transition-colors duration-300">
                  <span className="text-[#e31e24] text-lg font-serif font-semibold">12K+</span>
                  <span className="text-[10px] tracking-widest text-[#999491] uppercase font-medium mt-1">Alumni Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e31e24]/60 to-transparent" />
      </section>

      {/* SECTION 2: STRATEGIC LEADERSHIP INTRO */}
      <section className="relative w-full bg-[#030101] text-white py-24 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-[#e31e24]/40 to-transparent" />
        <div className="max-w-4xl w-full text-center flex flex-col items-center space-y-6 md:space-y-8 relative z-10">
          <span className="text-xs uppercase tracking-[0.35em] text-[#e31e24] font-medium font-sans">
            Strategic Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-serif font-normal leading-[1.2] tracking-wide text-white max-w-3xl">
            A Council Of Experience &amp; Innovation
          </h2>
          <div className="w-16 h-[2px] bg-[#e31e24] my-2" />
          <p className="text-[#888380] font-serif font-light text-base md:text-lg lg:text-[19px] leading-relaxed max-w-3xl px-2 md:px-6">
            The Advisory Board plays a strategic role in guiding academic excellence, industry 
            alignment, innovation initiatives and future-ready learning experiences. Their 
            expertise helps bridge education and industry, ensuring students graduate with 
            skills that meet evolving creative demands.
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-t from-[#e31e24]/40 to-transparent" />
      </section>

      {/* SECTION 3: CHAIRPERSON BIOGRAPHY */}
      <section className="relative w-full bg-[#030101] text-white py-16 md:py-24 px-4 md:px-8 lg:px-16 overflow-hidden flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex justify-center items-center relative px-4 sm:px-6">
            <div className="relative w-full max-w-[500px] aspect-[4/5]">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#e31e24]" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#e31e24]" />
              <div className="w-full h-full border border-[#e31e24]/40 p-2 sm:p-3 bg-transparent">
                <div className="w-full h-full relative overflow-hidden group bg-[#120c0a]">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                    alt="Ms. Priya Sharma Portrait"
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030101]/50 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 md:space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.4em] text-[#e31e24] font-medium font-sans block">
                Board Chairperson
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal leading-tight text-white tracking-wide">
                Ms. Priya Sharma
              </h2>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#888380] font-sans block font-semibold pt-1">
                Creative Director &amp; Fashion Visionary
              </span>
            </div>
            <p className="text-[#888380] font-serif font-light text-sm sm:text-base leading-relaxed max-w-xl">
              With over three decades of transformative leadership across global fashion houses and 
              design institutions, Ms. Sharma has pioneered a philosophy that fuses creative mastery 
              with strategic business acumen, setting a new standard for design education in South Asia.
            </p>
            <div className="relative pl-6 border-l-2 border-[#e31e24] max-w-xl py-1">
              <p className="text-[#d4ceca] font-serif italic text-base sm:text-lg leading-relaxed">
                "Design education must empower students to become creators, innovators and leaders capable of transforming industries."
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl pt-2">
              {['Industry Leadership', 'Academic Contributions', 'Global Exposure', 'Strategic Vision'].map((title, i) => (
                <div key={i} className="flex items-center space-x-3 bg-[#0c0807] border border-[#1f1917] p-4 hover:border-[#e31e24]/30 transition-all duration-300 group">
                  <span className="w-1.5 h-1.5 bg-[#e31e24] inline-block shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-xs sm:text-sm font-sans tracking-wide text-[#bfb9b5] group-hover:text-white transition-colors duration-300">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DISTINGUISHED EXPERTS MEMBERS ROW */}
      <section className="relative w-full bg-[#030101] text-white py-24 px-4 md:px-8 lg:px-16 overflow-hidden flex flex-col items-center">
        <div className="max-w-7xl w-full text-center flex flex-col items-center space-y-3 mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-[#e31e24] font-medium font-sans">
            DISTINGUISHED EXPERTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-wide text-white">
            Meet Our <span className="text-[#e31e24] italic font-normal ml-1">Visionaries</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#e31e24]/60 pt-2" />
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {members.map((member) => (
            <div key={member.id} className="flex flex-col bg-[#090605] border border-[#140e0c] transition-all duration-300 hover:border-[#e31e24]/30 group">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#120c0a]">
                <img 
                  src={member.imageUrl} 
                  alt={`${member.name}`}
                  className="w-full h-full object-cover filter grayscale contrast-115 brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-[#e31e24] px-3 py-1.5 z-10">
                  <span className="text-[9px] font-sans font-semibold tracking-widest text-white block">
                    {member.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#090605] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between min-h-[220px]">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-normal text-white tracking-wide">
                    {member.name}
                  </h3>
                  <div className="flex flex-col space-y-0.5">
                    <span className="text-xs font-sans font-medium text-[#e31e24] tracking-wide">
                      {member.role}
                    </span>
                    <span className="text-[11px] font-sans font-normal text-[#66605d] tracking-wide">
                      {member.company}
                    </span>
                  </div>
                </div>
                <p className="text-xs md:text-[13px] font-serif font-light text-[#7a7471] leading-relaxed mt-6">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: DOMAIN EXPERTISE DIAL MAP */}
      <section className="relative w-full bg-[#030101] text-white py-24 px-4 md:px-8 lg:px-16 overflow-hidden flex flex-col items-center justify-center min-h-[850px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e31e24]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-3xl w-full text-center flex flex-col items-center space-y-3 mb-20 md:mb-28 z-10">
          <span className="text-xs uppercase tracking-[0.45em] text-[#e31e24] font-medium font-sans">
            DOMAIN EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-wide text-white">
            Collective <span className="text-[#e31e24] italic font-normal ml-1">Expertise</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#e31e24]/40 pt-1" />
        </div>

        <div className="hidden md:flex relative w-[700px] h-[550px] items-center justify-center z-10">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 550">
            {expertiseNodes.map((node, index) => {
              const targetX = 350 + node.x;
              const targetY = 275 + node.y;
              return (
                <g key={index}>
                  <line x1="350" y1="275" x2={targetX} y2={targetY} stroke="#e31e24" strokeWidth="0.75" className="opacity-40" />
                  <circle cx={targetX} cy={targetY} r="4" fill="#e31e24" />
                </g>
              );
            })}
          </svg>

          <div className="absolute w-[90px] h-[90px] bg-[#030101] border border-[#e31e24]/60 flex items-center justify-center shadow-[0_0_30px_rgba(227,30,36,0.15)] z-20">
            <span className="font-serif text-[15px] font-normal tracking-[0.25em] text-white translate-x-[0.1em]">PIFT</span>
            <div className="absolute inset-[3px] border border-[#e31e24]/20 pointer-events-none" />
          </div>

          {expertiseNodes.map((node, index) => {
            const alignClass = node.textAlign === 'left' ? 'text-left justify-start' : node.textAlign === 'right' ? 'text-right justify-end' : 'text-center justify-center';
            const offsetX = node.textAlign === 'left' ? 15 : node.textAlign === 'right' ? -15 : 0;
            const offsetY = node.y < -130 ? -24 : node.y > 160 ? 16 : -10;
            return (
              <div
                key={index}
                className={`absolute flex flex-col ${alignClass} group cursor-default`}
                style={{
                  transform: `translate(calc(-50% + ${node.x + offsetX}px), calc(-50% + ${node.y + offsetY}px))`,
                  left: '50%', top: '50%', width: '180px'
                }}
              >
                <span className="text-[13px] font-sans font-light tracking-wide text-[#a39e9a] transition-colors duration-300 group-hover:text-white">
                  {node.title}
                </span>
              </div>
            );
          })}
        </div>

        <div className="md:hidden w-full max-w-sm flex flex-col items-center space-y-4 px-4 relative z-10">
          <div className="w-[80px] h-[80px] bg-[#030101] border border-[#e31e24]/80 flex items-center justify-center mb-8">
            <span className="font-serif text-sm tracking-widest text-white">PIFT</span>
          </div>
          <div className="w-full flex flex-col space-y-2 border-l border-dashed border-[#e31e24]/30 pl-6 ml-2">
            {expertiseNodes.map((node, index) => (
              <div key={index} className="flex items-center space-x-3 py-2 group">
                <span className="w-2 h-2 rounded-full bg-[#e31e24] inline-block shrink-0" />
                <span className="text-sm font-sans tracking-wide text-[#b8b2ae] group-hover:text-white transition-colors duration-300">
                  {node.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: DRIVING MEANINGFUL IMPACT CARDS */}
      <section className="relative w-full bg-[#030101] text-white py-24 px-4 md:px-8 lg:px-16 overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-950/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-4xl w-full text-center flex flex-col items-center space-y-3 mb-16 md:mb-24 z-10">
          <span className="text-xs uppercase tracking-[0.45em] text-[#e31e24] font-medium font-sans">
            BOARD CONTRIBUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-wide text-white">
            Driving Meaningful <span className="text-[#e31e24] italic font-normal ml-1">Impact</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#e31e24]/40 pt-1" />
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="bg-[#090605] border border-[#140e0c] p-8 md:p-10 flex flex-col space-y-5 transition-all duration-300 hover:border-[#e31e24]/20 hover:bg-[#0c0807] group">
                <div className="text-[#e31e24]/90 group-hover:text-[#e31e24] transition-colors duration-300">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl font-serif font-normal text-white tracking-wide">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-sans font-semibold tracking-widest text-[#e31e24] block">
                    {item.subtitle}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] font-serif font-light text-[#635d5a] leading-relaxed group-hover:text-[#807975] transition-colors duration-300 pt-1">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 7: BRIDGING EDUCATION INDUSTRY INSIGHTS */}
      <section className="relative w-full bg-[#030101] text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden flex flex-col items-center justify-center">
        <div className="max-w-7xl w-full text-left flex flex-col space-y-4 mb-20 md:mb-28 z-10 self-start">
          <span className="text-xs uppercase tracking-[0.4em] text-[#e31e24] font-medium font-sans">
            INDUSTRY INTELLIGENCE
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-wide text-white max-w-4xl leading-[1.15]">
            Bridging Education <br />
            &amp; <span className="text-[#e31e24] italic font-normal">Industry</span>
          </h2>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 border-t border-b border-[#140e0c]">
          <div className="absolute inset-y-0 left-1/3 hidden lg:block w-[1px] bg-[#140e0c]" />
          <div className="absolute inset-y-0 left-2/3 hidden lg:block w-[1px] bg-[#140e0c]" />
          <div className="absolute inset-y-0 left-1/2 hidden md:block lg:hidden w-[1px] bg-[#140e0c]" />
          
          {insights.map((item, index) => {
            const borderClasses = `
              border-b border-[#140e0c] last:border-b-0 
              md:[&:nth-child(odd)]:border-r md:[&:nth-child(even)]:border-r-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(odd)]:border-r lg:[&:nth-child(2)]:border-r
              ${index >= 4 ? 'md:border-b-0' : ''} 
              ${index >= 3 ? 'lg:border-b-0' : 'lg:border-b border-[#140e0c]'}
            `;
            return (
              <div key={item.id} className={`p-8 md:p-12 lg:p-14 flex flex-col space-y-6 transition-all duration-300 hover:bg-[#090605]/50 group ${borderClasses}`}>
                <span className="text-2xl sm:text-3xl font-serif font-normal text-[#1a1210] group-hover:text-[#e31e24]/10 transition-colors duration-300 block">
                  {item.id}
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-normal text-white tracking-wide">
                  {item.title}
                </h3>
                <div className="flex flex-col space-y-1 pt-2">
                  <span className="text-3xl md:text-4xl font-serif font-normal text-[#e31e24]">{item.stat}</span>
                  <span className="text-[11px] sm:text-xs font-sans font-normal text-[#595350] tracking-wide max-w-[220px]">{item.statLabel}</span>
                </div>
                <p className="text-[13px] md:text-14px font-serif font-light text-[#706a66] leading-relaxed pt-3 group-hover:text-[#8a837f] transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 8: ADVISORY LEGACY TIMELINE */}
      <section className="relative w-full bg-[#030101] text-white py-24 px-4 md:px-8 lg:px-16 overflow-hidden flex flex-col items-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#e31e24]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl w-full text-center flex flex-col items-center space-y-3 mb-24 md:mb-32 z-10">
          <span className="text-xs uppercase tracking-[0.45em] text-[#e31e24] font-medium font-sans">
            ADVISORY LEGACY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-wide text-white leading-tight">
            Guiding Progress Through The <span className="text-[#e31e24] italic font-normal ml-1">Years</span>
          </h2>
        </div>

        <div className="max-w-5xl w-full relative z-10 flex flex-col pb-12">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#e31e24]/50 via-[#e31e24]/30 to-transparent -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#e31e24]/50 via-[#e31e24]/30 to-transparent md:hidden" />

          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative w-full mb-16 md:mb-20 flex flex-col md:flex-row items-stretch ${event.alignment === 'left' ? 'md:flex-row-reverse' : ''}`}>
              <div className="absolute left-1/2 top-1.5 -translate-x-1/2 hidden md:flex items-center justify-center z-20">
                <div className="w-3.5 h-3.5 rotate-45 border-2 border-[#e31e24] bg-[#030101] box-content" />
              </div>
              <div className="absolute left-4 top-1.5 -translate-x-1/2 flex md:hidden items-center justify-center z-20">
                <div className="w-3 h-3 rotate-45 border-2 border-[#e31e24] bg-[#030101]" />
              </div>

              <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${event.alignment === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                <div className="flex flex-col space-y-2 group">
                  <span className="text-xl md:text-2xl font-serif font-normal text-[#e31e24] tracking-wide">{event.year}</span>
                  <h3 className="text-lg md:text-xl font-serif font-normal text-white tracking-wide group-hover:text-[#e31e24]/90 transition-colors">{event.title}</h3>
                  <p className={`text-xs md:text-[13px] font-serif font-light text-[#595350] leading-relaxed pt-1 max-w-sm ${event.alignment === 'left' ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    {event.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/2 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: PERSPECTIVES FROM THOUGHT LEADERS */}
      <section className="relative w-full bg-[#030101] text-white py-24 px-4 md:px-8 lg:px-16 overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-red-950/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl w-full text-center flex flex-col items-center space-y-3 mb-20 md:mb-24 z-10">
          <span className="text-xs uppercase tracking-[0.45em] text-[#e31e24] font-medium font-sans">
            INDUSTRY PERSPECTIVES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-wide text-white leading-tight">
            Perspectives From <span className="text-[#e31e24] italic font-normal ml-1">Industry Leaders</span>
          </h2>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
          {perspectives.map((item) => (
            <div key={item.id} className="bg-[#090605] border border-[#140e0c] p-8 md:p-12 lg:p-14 flex flex-col justify-between min-h-[380px] sm:min-h-[340px] transition-all duration-300 hover:border-[#e31e24]/20 hover:bg-[#0c0807] group">
              <div className="space-y-6">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#e31e24] font-medium font-sans block">{item.category}</span>
                <div className="text-[#3a1314] font-serif text-5xl md:text-6xl h-4 leading-none select-none group-hover:text-[#5c1c1e] transition-colors">&ldquo;</div>
                <p className="text-lg md:text-xl font-serif font-light text-[#a39e9a] leading-relaxed tracking-wide pt-2 group-hover:text-white transition-colors">
                  {item.quote}
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-10">
                <div className="w-6 h-[1px] bg-[#e31e24] shrink-0" />
                <div className="flex flex-col space-y-0.5">
                  <span className="text-sm md:text-base font-serif font-normal text-white tracking-wide">{item.author}</span>
                  <span className="text-[11px] font-sans font-normal text-[#595350] tracking-wide">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: PARTNERS SHOWCASE MATRIX */}
      <section className="relative w-full bg-[#030101] text-white py-24 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-red-950/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl w-full text-center flex flex-col items-center space-y-4 mb-20 md:mb-24 z-10">
          <span className="text-xs uppercase tracking-[0.45em] text-[#e31e24] font-medium font-sans">
            INDUSTRY NETWORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-wide text-white leading-tight">
            Strengthening Industry <span className="text-[#e31e24] italic font-normal ml-1">Connections</span>
          </h2>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 border-t border-b border-[#0f0a09]">
          <div className="absolute inset-y-0 left-1/4 hidden lg:block w-[1px] bg-[#0f0a09]" />
          <div className="absolute inset-y-0 left-1/2 hidden lg:block w-[1px] bg-[#0f0a09]" />
          <div className="absolute inset-y-0 left-3/4 hidden lg:block w-[1px] bg-[#0f0a09]" />
          <div className="absolute inset-y-0 left-1/2 hidden sm:block lg:hidden w-[1px] bg-[#0f0a09]" />
          
          {partners.map((partner, index) => {
            const responsiveBorderClass = `
              p-8 md:p-12 lg:p-14 flex flex-col items-center justify-center text-center bg-transparent transition-all duration-300 min-h-[160px] md:min-h-[190px] hover:bg-[#090605]/60 group cursor-default border-b border-[#0f0a09]
              ${index % 2 !== 0 ? 'sm:border-l sm:border-[#0f0a09]' : ''}
              ${index % 4 !== 0 ? 'lg:border-l lg:border-[#0f0a09]' : 'lg:border-l-0'}
              ${index >= 10 ? 'sm:border-b-0' : ''}
              ${index >= 8 ? 'lg:border-b-0' : 'lg:border-b lg:border-[#0f0a09]'}
            `;
            return (
              <div key={partner.id} className={responsiveBorderClass}>
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg md:text-xl font-serif font-normal text-[#e4deda] tracking-wide group-hover:text-white transition-colors">{partner.name}</h3>
                  <span className="text-[9px] sm:text-[10px] font-sans font-semibold tracking-widest text-[#a31519] block group-hover:text-[#e31e24] transition-colors">{partner.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 11: HOW STUDENTS BENEFIT STREAM */}
      <section className="relative w-full bg-[#030101] text-white py-20 md:py-28 px-4 md:px-8 lg:px-16 overflow-hidden flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1 px-4 sm:px-6">
            <div className="relative w-full max-w-[480px] aspect-[4/5]">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#e31e24]/80" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#e31e24]/80" />
              <div className="w-full h-full border border-[#e31e24]/20 p-2 sm:p-3 bg-transparent">
                <div className="w-full h-full relative overflow-hidden group bg-[#090605]">
                  <img 
                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" 
                    alt="Students collaborating"
                    className="w-full h-full object-cover filter grayscale contrast-115 brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 bg-[#090605]/80 backdrop-blur-md border border-[#211a18] p-5 min-w-[160px] shadow-2xl">
                    <span className="text-2xl md:text-3xl font-serif font-semibold text-[#e31e24] block leading-none">94%</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#8c8682] font-sans font-semibold block mt-1.5">Placement Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-10 order-1 lg:order-2 lg:pl-12">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.45em] text-[#e31e24] font-medium font-sans block">STUDENT ADVANTAGE</span>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal leading-tight tracking-wide text-white">
                How Students <span className="text-[#e31e24] italic font-normal ml-1">Benefit</span>
              </h2>
            </div>
            <div className="flex flex-col space-y-8 max-w-xl">
              {benefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={benefit.id} className="flex items-start space-x-5 group">
                    <div className="text-[#e31e24]/80 pt-0.5 shrink-0 group-hover:text-[#e31e24] transition-colors"><IconComponent className="w-[18px] h-[18px] stroke-[1.75]" /></div>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-serif font-normal text-white tracking-wide group-hover:text-[#e31e24] transition-colors">{benefit.title}</h3>
                      <p className="text-xs sm:text-[13px] font-sans font-light text-[#6e6865] leading-relaxed transition-colors group-hover:text-[#8f8884]">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMITMENT STATEMENT TEXT BLOCK */}
      <section className="relative w-full bg-[#030101] text-white py-24 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-[#e31e24]/50 to-transparent" />
        <div className="max-w-4xl w-full text-center flex flex-col items-center space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-[0.45em] text-[#e31e24] font-medium font-sans">OUR COMMITMENT</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-normal leading-[1.2] tracking-wide text-white max-w-3xl">
            Creating Future-Ready <span className="text-[#e31e24] italic font-normal ml-1">Designers</span>
          </h2>
          <div className="w-14 h-[1.5px] bg-[#e31e24] my-2" />
          <p className="text-[#7d7774] font-serif font-light text-base md:text-18px leading-relaxed max-w-3xl px-4 sm:px-8 md:px-12">
            The collective expertise of our Advisory Board strengthens our commitment to delivering 
            education that blends creativity, innovation and industry relevance. Together, we empower 
            students to shape meaningful careers and contribute to the future of design.
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-t from-[#e31e24]/50 to-transparent" />
      </section>

      {/* SECTION 13: FUTURE VISION HORIZON */}
      <section className="relative w-full bg-[#030101] text-white py-28 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-red-950/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl w-full text-center flex flex-col items-center space-y-6 md:space-y-8 relative z-10">
          <span className="text-xs uppercase tracking-[0.5em] text-[#e31e24] font-medium font-sans">Vision 2030</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-serif font-normal leading-[1.15] tracking-wide text-white max-w-4xl">
            Designing The <span className="text-[#e31e24] italic font-normal">Future.</span> <br /> Together.
          </h2>
          <div className="w-16 h-[1.5px] bg-[#e31e24] my-2" />
          <p className="text-[#696360] font-serif font-light text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl px-4">
            As industries evolve, PIFT continues to collaborate with thought leaders and 
            innovators to ensure students remain prepared for tomorrow's opportunities.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#010000] to-transparent pointer-events-none" />
      </section>

      {/* SECTION 14: CALL TO ACTION FOOT SECTION */}
      <section className="relative w-full bg-[#030101] text-white py-28 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-white/5 pointer-events-none" />
        <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-white/5 pointer-events-none" />
        <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-[#e31e24]/20 pointer-events-none" />
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-[#e31e24]/20 pointer-events-none" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-950/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl w-full text-center flex flex-col items-center relative z-10 space-y-8">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-[#e31e24] font-medium font-sans">Begin Your Journey</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-normal leading-[1.2] tracking-wide text-white max-w-3xl">
            Join A Community Guided By <br />
            <span className="text-[#e31e24] italic font-normal">Industry Leaders</span>
          </h2>
          <p className="text-[#595350] font-serif font-light text-sm sm:text-base max-w-2xl px-4 leading-relaxed pt-1">
            Learn from experienced professionals, industry mentors and visionary leaders shaping the future of design.
          </p>
          <div className="flex flex-col items-center space-y-4 pt-6 w-full max-w-md sm:max-w-xl">
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button className="w-full sm:w-auto min-w-[200px] bg-[#e31e24] hover:bg-[#b81419] text-white text-xs md:text-sm font-sans font-semibold tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-300">Apply Now</button>
              <button className="w-full sm:w-auto min-w-[240px] border border-[#211a18] hover:border-[#635d5a] text-white text-xs md:text-sm font-sans font-semibold tracking-[0.2em] uppercase px-8 py-4 bg-transparent transition-colors duration-300">Download Brochure</button>
            </div>
            <button className="w-full sm:w-auto min-w-[456px] border border-[#211a18] hover:border-white text-white text-xs md:text-sm font-sans font-semibold tracking-[0.2em] uppercase px-8 py-4 bg-transparent transition-colors duration-300 max-w-full">Book Counseling Session</button>
          </div>
        </div>
      </section>

    </main>
  );
}
