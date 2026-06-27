import React from 'react'
import AdmissionHero from '../../../components/admission/Hero'
import WhyChooseSection from '../../../components/admission/WhyChooseSection'
import AdmissionProcessSection from '../../../components/admission/AdmissionProcessSection'

export default function page () {
  return (
    <div>
        <AdmissionHero />
        <WhyChooseSection />
        <AdmissionProcessSection />
    </div>
  )
}
