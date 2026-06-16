export default function FutureCareersMatrix() {
  const careers = [
    { title: 'Knitwear Designer', growth: '+35%' },
    { title: 'Fashion Designer', growth: '+28%' },
    { title: 'Product Developer', growth: '+42%' },
    { title: 'Fashion Stylist', growth: '+30%' },
    { title: 'Merchandiser', growth: '+25%' },
    { title: 'Creative Manager', growth: '+38%' },
    { title: 'Production Manager', growth: '+32%' },
    { title: 'Fashion Entrepreneur', growth: '+45%' }
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white">Future Careers</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {careers.map((item, idx) => (
            <div key={idx} className="bg-[#111111]/30 border border-zinc-900 rounded-2xl p-8 sm:p-10 flex flex-col justify-between items-start text-left group hover:border-zinc-800 hover:bg-[#111111]/50 transition-all min-h-[190px] shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#2A080C]/50 border border-[#FF4141]/10 flex items-center justify-center mb-6 group-hover:border-[#FF4141]/30 transition-all">
                <svg className="w-4 h-4 text-[#FF4141]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div className="flex flex-col space-y-3 w-full mt-auto">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white leading-snug tracking-wide">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-light">Growth <span className="text-[#FF4141] font-medium ml-1">{item.growth}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
