// 'use client'

// import React, { useState } from 'react';
// import { ChevronDown, QrCode, CreditCard, X } from 'lucide-react';
// import Link from 'next/link';

// export default function FeesPaymentSection() {
//   const [isQrOpen, setIsQrOpen] = useState(false); 
//   const handleClick = ()=>{
//     setIsQrOpen(true);
//   }
//   return (
//     <div className="w-full  bg-[#1E1E1E] flex flex-col font-sans antialiased">
      
//       {/* Container holding both Left Accent Sidebar and Main Content */}
//       <div className="flex-1 flex flex-col lg:flex-row items-stretch">
//               {/* --- QR Modal Overlay --- */}
//       {isQrOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
//           <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full relative flex flex-col items-center">
//             <button 
//               onClick={() => setIsQrOpen(false)}
//               className="absolute top-4 right-4 text-neutral-500 hover:text-black"
//             >
//               <X className="w-6 h-6" />
//             </button>
//             <h3 className="text-xl font-black mb-4 text-black">Scan to Pay</h3>
//             {/* Replace this div with your actual image tag */}
//             <div className="w-64 h-64 bg-neutral-200 border-4 border-neutral-100 flex items-center justify-center mb-4">
//               <img src="/images/feesqr.png" alt="QR Code" className="w-full h-full object-contain" />
//             </div>
//             <p className="text-sm text-neutral-600">Scan using any UPI App</p>
//           </div>
//         </div>
//       )}
//         {/* Left Branding Sidebar Panel */}
//         <div className="w-full lg:w-[400px] bg-[#C1121F] text-white p-8 sm:p-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative overflow-hidden shrink-0">
//           {/* Subtle Decorative Circle Overlay matching the dynamic lines in original logo motif */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-16 -translate-y-16 pointer-events-none" />
          
//           <div className="relative z-10 flex flex-col items-center lg:items-start space-y-6">
//             {/* Institution Badge Placeholder Graphic */}
//             <div className="flex items-center space-x-4">
//               <div className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center font-serif text-2xl font-black bg-black/10">
//                 PI
//               </div>
//               <div className="w-16 h-16 flex items-center justify-center font-bold text-3xl tracking-tighter opacity-80 border-l border-white/20 pl-4">
//                 25+
//               </div>
//             </div>

//             {/* Typography Section */}
//             <div className="space-y-4 pt-4">
//               <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight uppercase font-sans">
//                 Pinnacle Institute Of <br />
//                 <span className="text-neutral-100">Fashion Technology</span>
//               </h1>
              
//               <p className="text-xs sm:text-sm text-white/90 font-medium tracking-wide">
//                 Regd Under MSME & NSDC, Govt Of India
//               </p>
//             </div>

//             <div className="w-16 h-[2px] bg-white/40 my-2" />

//             <p className="text-sm text-white/80 font-light leading-relaxed max-w-sm">
//               25+ yrs of Design Experience, <br />
//               ISO Certified Campus
//             </p>
//           </div>
//         </div>

//         {/* Right Dashboard Gateway Panel */}
//         <div className="flex-1 bg-black text-white flex flex-col">
          
          

//           {/* Interactive Portal Form Segment */}
//           <div className="flex-1 w-full mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16 flex flex-col justify-center">
            
//             <div className="max-w-4xl space-y-2 mb-12">
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
//                 Fees Payment
//               </h2>
//               <div className="w-20 h-1 bg-[#C1121F] mb-6" />
//               <p className="text-neutral-400 text-sm sm:text-base font-medium tracking-wide">
//                 Select a payment option to continue.
//               </p>
//             </div>

//             {/* Selection Gateways Cards Wrapper split layout */}
//             <div className="flex flex-col md:flex-row items-center justify-start gap-24 relative max-w-4xl">
              
//               {/* Option Card One - Scan QR */}
//               <div className="w-full md:w-1/2 bg-white rounded-lg p-6 sm:p-8 text-neutral-900 shadow-2xl flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start md:items-center lg:items-start gap-5 border border-neutral-100 transition-transform duration-200 hover:-translate-y-1">
//                 <div className="p-4 bg-[#FDF2F4] rounded-full text-[#C1121F] shrink-0">
//                   <QrCode className="w-10 h-10 stroke-[1.5]" />
//                 </div>
//                 <div className="flex-1 text-center sm:text-left md:text-center lg:text-left space-y-4">
//                   <div className="space-y-1">
//                     <h3 className="text-lg font-extrabold tracking-tight text-black">Scan QR Code (UPI)</h3>
//                     <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
//                       Open any UPI app and scan the QR code to pay.
//                     </p>
//                   </div>
//                   <button onClick={handleClick} className="bg-[#C1121F] hover:bg-[#9e0e18] text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded transition-colors duration-150 shadow-md">
//                     Pay Now
//                   </button>
//                 </div>
//               </div>

//               {/* "OR" Intermediary Separator Split node */}
//               <div className="z-10 bg-white border border-neutral-200 text-[#C1121F] w-10 h-10 rounded-full flex items-center justify-center font-serif italic font-black text-xs shadow-md md:absolute md:left-1/2 md:-translate-x-1/2 shrink-0 select-none">
//                 OR
//               </div>

//               {/* Option Card Two - Payment Gateway */}
//               <div className="w-full md:w-1/2 bg-white rounded-lg p-6 sm:p-8 text-neutral-900 shadow-2xl flex flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start md:items-center lg:items-start gap-5 border border-neutral-100 transition-transform duration-200 hover:-translate-y-1">
//                 <div className="p-4 bg-[#FDF2F4] rounded-full text-[#C1121F] shrink-0">
//                   <CreditCard className="w-10 h-10 stroke-[1.5]" />
//                 </div>
//                 <div className="flex-1 text-center sm:text-left md:text-center lg:text-left space-y-4">
//                   <div className="space-y-1">
//                     <h3 className="text-lg font-extrabold tracking-tight text-black">Payment Gateway</h3>
//                     <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
//                       Pay using Card, Net Banking or UPI Securely.
//                     </p>
//                   </div>
//                   <Link href={'https://www.iobnet.co.in/iobpay/entry.do?dirlinkmerid=PIFLUD&dirlinkcatcd=EDU'} className="bg-[#C1121F] hover:bg-[#9e0e18] text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded transition-colors duration-150 shadow-md">
//                     Pay Now
//                   </Link>
//                 </div>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { QrCode, CreditCard, X, Lock, CheckCircle, Headphones } from 'lucide-react';
import Link from 'next/link';

export default function FeesPaymentSection() {
  const [isQrOpen, setIsQrOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  // Dynamic theme mapping 1:1 with TestimonialSection architecture
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-white',
    textMain: isDark ? 'text-white' : 'text-neutral-900',
    textMuted: isDark ? 'text-neutral-400' : 'text-neutral-600',
    cardBg: isDark ? 'bg-[#1C2024]' : 'bg-white',
    cardBorder: isDark ? 'border-neutral-800/40' : 'border-neutral-200',
    stepActive: isDark ? 'bg-[#D90429] text-white' : 'bg-[#C1121F] text-white',
    stepInactive: isDark ? 'border-neutral-700 text-neutral-500' : 'border-neutral-300 text-neutral-400',
    accentRed: 'text-[#D90429]',
    bgAccentRed: 'bg-[#D90429]',
    hoverRed: 'hover:bg-red-800'
  };

  return (
    <div className={`w-full py-16 px-4 font-sans transition-colors duration-300 ${theme.bgPage} ${theme.textMain}`}>
      {/* 1. Header & Progress Steps */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Fees Payment</h1>
        <p className={`mb-12 ${theme.textMuted}`}>Complete Your Payment Securely</p>
        
        <div className="flex items-center justify-center gap-4 text-sm font-semibold">
          <div className={`flex items-center gap-2 ${theme.accentRed}`}>
            <span className={`w-8 h-8 flex items-center justify-center rounded-full ${theme.stepActive}`}>1</span>
            Select Payment Option
          </div>
          <div className={`w-24 h-px ${isDark ? 'bg-neutral-800' : 'bg-neutral-300'}`} />
          <div className={`flex items-center gap-2 ${theme.stepInactive}`}>
            <span className="w-8 h-8 flex items-center justify-center rounded-full border">2</span>
            Make Payment
          </div>
          <div className={`w-24 h-px ${isDark ? 'bg-neutral-800' : 'bg-neutral-300'}`} />
          <div className={`flex items-center gap-2 ${theme.stepInactive}`}>
            <span className="w-8 h-8 flex items-center justify-center rounded-full border">3</span>
            Confirmation
          </div>
        </div>
      </div>

      {/* 2. Main Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4">Choose how you want to Pay</h2>
        <p className={`text-lg italic ${theme.textMuted}`}>Select the payment option below</p>
      </div>

      {/* 3. Cards Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
        {/* QR Card */}
        <div className={`w-full md:w-[45%] border p-8 rounded-lg text-center transition-colors duration-300 ${theme.cardBg} ${theme.cardBorder}`}>
          <div className={`flex justify-center mb-6 ${theme.accentRed}`}><QrCode size={48} strokeWidth={1.5} /></div>
          <h3 className="text-2xl font-black mb-3">Pay with QR Code</h3>
          <p className={`mb-8 ${theme.textMuted}`}>Scan any UPI QR Code using your preferred UPI app to pay</p>
          <button onClick={() => setIsQrOpen(true)} className={`w-full ${theme.bgAccentRed} text-white py-4 font-bold rounded-sm ${theme.hoverRed} transition`}>
            Continue with QR Code →
          </button>
        </div>

        <div className={`w-12 h-12 rounded-full border flex items-center justify-center font-bold z-10 ${theme.cardBorder} ${theme.textMuted}`}>OR</div>

        {/* Gateway Card */}
        <div className={`w-full md:w-[45%] border p-8 rounded-lg text-center transition-colors duration-300 ${theme.cardBg} ${theme.cardBorder}`}>
          <div className={`flex justify-center mb-6 ${theme.accentRed}`}><CreditCard size={48} strokeWidth={1.5} /></div>
          <h3 className="text-2xl font-black mb-3">Pay with Payment Gateway</h3>
          <p className={`mb-8 ${theme.textMuted}`}>Pay securely using your Debit Card, Credit Card, Net Banking or UPI.</p>
          <Link href="https://www.iobnet.co.in/iobpay/entry.do?dirlinkmerid=PIFLUD&dirlinkcatcd=EDU" className={`block w-full ${theme.bgAccentRed} text-white py-4 font-bold rounded-sm ${theme.hoverRed} transition`}>
            Continue with Payment Gateway →
          </Link>
        </div>
      </div>

      {/* 4. Footer Badges */}
      <div className={`max-w-5xl mx-auto mt-20 pt-8 border-t flex flex-wrap justify-around gap-8 ${isDark ? 'border-neutral-800' : 'border-neutral-100'} ${theme.textMuted}`}>
        <div className="flex items-center gap-2"><Lock size={20} /> Secure Payment</div>
        <div className="flex items-center gap-2"><CheckCircle size={20} /> Trusted By 10,000+ Students</div>
        <div className="flex items-center gap-2"><Headphones size={20} /> Need Help?</div>
      </div>

      {/* QR Modal */}
      {isQrOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className={`${isDark ? 'bg-[#1C2024]' : 'bg-white'} p-6 rounded-2xl shadow-2xl max-w-sm w-full relative flex flex-col items-center`}>
            <button onClick={() => setIsQrOpen(false)} className={`absolute top-4 right-4 ${theme.textMuted} hover:text-red-500`}>
              <X className="w-6 h-6" />
            </button>
            <h3 className={`text-xl font-black mb-4 ${theme.textMain}`}>Scan to Pay</h3>
            <div className="w-64 h-64 bg-neutral-200 border-4 border-neutral-100 flex items-center justify-center mb-4">
              <img src="/images/feesqr.png" alt="QR Code" className="w-full h-full object-contain" />
            </div>
            <p className={theme.textMuted}>Scan using any UPI App</p>
          </div>
        </div>
      )}
    </div>
  );
}