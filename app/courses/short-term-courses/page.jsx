import React from 'react';
import { 
  Sparkles, BookOpen, GraduationCap, Target, Award, 
  ChevronDown, ArrowRight, CheckCircle2, User, Play 
} from 'lucide-react';
import FinalCTA from '../../../components/short/FinalCTA.jsx'
import FAQ from '../../../components/short/FAQ.jsx'
import CertificationSection from '../../../components/short/CertificationSection.jsx'
import WhoCanJoin from '../../../components/short/WhoCanJoin.jsx'
import CourseCategories from '../../../components/short/CourseCategories.jsx'
import ProgramBenefits from '../../../components/short/ProgramBenefits.jsx'
import LearningJourney from '../../../components/short/LearningJourney.jsx'
import WhyShortTerm from '../../../components/short/WhyShortTerm.jsx'
import FeaturedSkills from '../../../components/short/FeaturedSkills.jsx'
import HeroSection from '../../../components/short/HeroSection.jsx'
import VisualShowcase from '../../../components/short/VisualShowcase.jsx'

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

    </div>
  );
}