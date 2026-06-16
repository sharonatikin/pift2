export default function TextileJourneyPipeline() {
  const pipeline = ['Apply', 'Counseling', 'Admission', 'Studio Learning', 'Portfolio Development', 'Career Launch'];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-5xl font-medium text-white">Start Your Textile Design Journey</h2></div>
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-center gap-y-4 md:gap-y-6 lg:gap-y-0 w-full max-w-5xl mx-auto">
          {pipeline.map((title, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <div className="bg-[#111111]/30 border border-zinc-900 rounded-xl px-6 py-4 flex items-center justify-center text-center shadow-md min-h-[52px] w-48 md:w-auto min-w-[120px]">
                <span className="text-xs sm:text-sm font-light text-zinc-300 tracking-wide">{title}</span>
              </div>
              {idx !== pipeline.length - 1 && (
                <div className="flex items-center justify-center py-2 md:py-0 md:px-4 text-[#FF4141]">
                  <svg className="w-4 h-4 transform rotate-90 md:rotate-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
