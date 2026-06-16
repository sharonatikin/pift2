export default function InteriorFinalCTA() {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#0A0A0A] flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.22]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80')` }} />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.15] max-w-5xl mb-6">Design The Spaces <br />People <span className="italic font-medium text-[#FF4141]">Remember.</span></h2>
        <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed tracking-wide max-w-xl mb-12">Transform your creativity into a professional career in interior design.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a href="#apply" className="w-full sm:w-auto bg-[#C8102E] text-white text-xs sm:text-sm font-bold tracking-widest px-8 py-4 rounded-xl text-center uppercase whitespace-nowrap">Apply Now</a>
          <a href="#brochure" className="w-full sm:w-auto border border-zinc-700/60 bg-black/40 backdrop-blur-md text-zinc-300 text-xs sm:text-sm font-medium tracking-widest px-7 py-4 rounded-xl text-center uppercase whitespace-nowrap">Download Brochure</a>
          <a href="#visit" className="w-full sm:w-auto border border-zinc-700/60 bg-black/40 backdrop-blur-md text-zinc-300 text-xs sm:text-sm font-medium tracking-widest px-8 py-4 rounded-xl text-center uppercase whitespace-nowrap">Book Campus Visit</a>
        </div>
      </div>
    </section>
  );
}
