export default function InteriorDesignJourney() {
  const steps = [
    { label: 'Step 1', title: 'Apply' }, { label: 'Step 2', title: 'Counseling' },
    { label: 'Step 3', title: 'Portfolio\nDiscussion' }, { label: 'Step 4', title: 'Admission' },
    { label: 'Step 5', title: 'Start Creating' }
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-5xl font-medium text-white">Begin Your Design Journey</h2></div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-12 lg:gap-y-0 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
              <div className="w-32 h-32 sm:w-36 sm:h-36 bg-[#C8102E] border border-[#FF4141]/30 flex flex-col items-center justify-center rounded-full shadow-xl">
                <span className="text-[10px] sm:text-xs font-light text-zinc-300 uppercase tracking-wider mb-1">{step.label}</span>
                <h3 className="text-sm sm:text-base font-medium text-white text-center tracking-wide whitespace-pre-line px-4">{step.title}</h3>
              </div>
              {idx !== steps.length - 1 && (
                <div className="flex items-center justify-center py-4 lg:py-0 lg:px-6 text-[#FF4141]">
                  <svg className="w-5 h-5 transform rotate-90 lg:rotate-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
