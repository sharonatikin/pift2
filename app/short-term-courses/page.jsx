import React from 'react';
import { 
  Sparkles, BookOpen, GraduationCap, Target, Award, 
  ChevronDown, ArrowRight, CheckCircle2, User, Play 
} from 'lucide-react';
import FinalCTA from './../../components/short/FinalCTA.jsx'
import FAQ from './../../components/short/FAQ.jsx'
import CertificationSection from './../../components/short/CertificationSection.jsx'
import WhoCanJoin from './../../components/short/WhoCanJoin.jsx'
import CourseCategories from './../../components/short/CourseCategories.jsx'
import ProgramBenefits from './../../components/short/ProgramBenefits.jsx'
import LearningJourney from './../../components/short/LearningJourney.jsx'
import WhyShortTerm from './../../components/short/WhyShortTerm.jsx'
import FeaturedSkills from './../../components/short/FeaturedSkills.jsx'
import HeroSection from './../../components/short/HeroSection.jsx'
import VisualShowcase from './../../components/short/VisualShowcase.jsx'

export default function FashionLanding() {
  return (
    <div className="bg-black text-white font-sans antialiased selection:bg-red-600 selection:text-white">
  
      <HeroSection />
      <CourseCategories />
      <WhyShortTerm />
      <LearningJourney />
      <FeaturedSkills />
      <ProgramBenefits />
      <VisualShowcase />
      <WhoCanJoin />
      <CertificationSection />
      <FAQ />
      <FinalCTA />

      {/* 11. BOTTOM CALL TO ACTION BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-red-950 via-red-900 to-zinc-950 border border-red-900/40 p-8 sm:p-12 lg:p-16 text-center space-y-6">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10">
            Start Your <span className="italic font-serif font-light text-red-300">Fashion Journey</span> Today.
          </h2>
          <p className="text-neutral-300 max-w-xl mx-auto text-sm sm:text-base relative z-10">
            Secure your cohort slot today. Immediate acceleration modules open for booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 relative z-10">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-neutral-200 font-semibold rounded-md transition duration-200">
              Enroll Now
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white font-medium rounded-md transition duration-200">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}