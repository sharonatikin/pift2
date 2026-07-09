'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { QrCode, Copy, ArrowLeft, AlertCircle } from 'lucide-react';

export default function FeesPaymentStep() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  // Dynamic theme mapping 1:1 with your project's architecture
  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-white',
    textMain: isDark ? 'text-white' : 'text-neutral-900',
    textMuted: isDark ? 'text-neutral-400' : 'text-neutral-600',
    cardBg: isDark ? 'bg-[#1C2024]' : 'bg-white',
    cardBorder: isDark ? 'border-neutral-800' : 'border-neutral-200',
    accentRed: 'text-[#D90429]',
    bgAccentRed: 'bg-[#D90429]',
  };

  return (
    <div className={`w-full py-16 px-4 ${theme.bgPage} ${theme.textMain}`}>
      {/* Header & Steps (Matching previous implementation) */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-black mb-4">Fees Payment</h1>
        <p className={theme.textMuted}>Complete Your Payment Securely</p>
      </div>

      {/* Main Payment Card */}
      <div className={`max-w-2xl mx-auto border p-8 md:p-12 rounded-2xl ${theme.cardBg} ${theme.cardBorder}`}>
        <div className={`flex justify-center mb-6 ${theme.accentRed}`}><QrCode size={48} /></div>
        
        <h2 className="text-3xl font-black mb-2">Scan & Pay</h2>
        <p className={`mb-8 ${theme.textMuted}`}>Scan the QR Code below using any UPI App to complete your Payment</p>
        
        <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold mb-6 ${isDark ? 'bg-red-900/30 text-red-400' : 'bg-red-50 text-red-600'}`}>
          Amount To Pay
        </div>
        <div className={`text-4xl font-black mb-10 ${theme.accentRed}`}>$ 2,500.00</div>

        <div className="flex justify-center mb-8">
            <div className="bg-white p-4 rounded-xl border border-neutral-200">
                <img src="/images/feesqr.png" alt="QR" className="w-48 h-48" />
            </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-10 font-mono text-sm">
            <span>UPI ID: <strong className={theme.textMain}>piftfees@upi</strong></span>
            <Copy size={16} className="cursor-pointer hover:text-red-500" />
        </div>

        <button className="flex items-center gap-2 mx-auto font-bold hover:underline">
            <ArrowLeft size={18} /> Change Payment Method
        </button>
      </div>

      {/* Timer Alert */}
      <div className={`max-w-2xl mx-auto mt-8 p-6 rounded-xl flex items-center justify-between ${isDark ? 'bg-neutral-900' : 'bg-red-50'}`}>
        <div className="flex items-center gap-3">
            <AlertCircle className="text-red-500" />
            <div>
                <h4 className="font-bold">Important</h4>
                <p className={`text-sm ${theme.textMuted}`}>Complete the Payment within 10:00 minutes.</p>
            </div>
        </div>
        <div className="text-2xl font-black">09:45</div>
      </div>
    </div>
  );
}