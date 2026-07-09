'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { CheckCircle2, Download, ArrowRight } from 'lucide-react';

export default function PaymentConfirmationStep() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const theme = {
    bgPage: isDark ? 'bg-black' : 'bg-white',
    textMain: isDark ? 'text-white' : 'text-neutral-900',
    textMuted: isDark ? 'text-neutral-400' : 'text-neutral-600',
    cardBg: isDark ? 'bg-[#1C2024]' : 'bg-white',
    cardBorder: isDark ? 'border-neutral-800' : 'border-neutral-200',
    successBg: isDark ? 'bg-emerald-900/20' : 'bg-emerald-50',
    successText: 'text-emerald-600',
    accentRed: 'bg-[#D90429]',
  };

  const details = [
    { label: 'Transaction ID', value: 'TXN1234567890' },
    { label: 'Payment Method', value: 'UPI (piftfees@upi)' },
    { label: 'Date & Time', value: '25th May 2025, 11:45 AM' },
    { label: 'Status', value: 'Successful', isBadge: true },
  ];

  return (
    <div className={`w-full py-16 px-4 ${theme.bgPage} ${theme.textMain}`}>
      <div className="max-w-2xl mx-auto border p-8 md:p-12 rounded-2xl shadow-sm transition-colors duration-300 ${theme.cardBg} ${theme.cardBorder}">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={80} className={theme.successText} />
        </div>
        
        <h2 className="text-3xl font-black text-center mb-2">Payment Successful!</h2>
        <p className={`text-center mb-8 ${theme.textMuted}`}>Your payment has been received successfully. Thank You!</p>

        {/* Amount Box */}
        <div className={`text-center py-6 rounded-xl mb-10 ${isDark ? 'bg-emerald-900/10' : 'bg-emerald-50'}`}>
          <p className={`text-sm font-semibold mb-1 ${theme.successText}`}>Amount Paid</p>
          <div className={`text-4xl font-black ${theme.successText}`}>$ 2,500.00</div>
        </div>

        {/* Details Grid */}
        <div className="space-y-4 mb-10">
          {details.map((item) => (
            <div key={item.label} className="flex justify-between border-b border-neutral-100/10 pb-4">
              <span className={theme.textMuted}>{item.label}</span>
              {item.isBadge ? (
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${isDark ? 'bg-emerald-900 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                  ● {item.value}
                </span>
              ) : (
                <span className="font-bold">{item.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Notification Box */}
        <div className={`p-4 rounded-lg text-center text-sm font-medium mb-8 ${isDark ? 'bg-emerald-900/10' : 'bg-emerald-50'} ${theme.successText}`}>
          Your payment is confirmed. A receipt has been sent to your registered email ID.
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className={`flex-1 flex items-center justify-center gap-2 py-3 border font-bold rounded-lg hover:opacity-90 ${theme.cardBorder}`}>
            <Download size={18} /> Download Receipt
          </button>
          <button className={`flex-1 flex items-center justify-center gap-2 py-3 text-white font-bold rounded-lg ${theme.accentRed} hover:bg-red-800`}>
            Go To Dashboard <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}