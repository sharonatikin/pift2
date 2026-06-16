import Image from 'next/image';

export default function KnitwearHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0A0A0A] pt-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF4141]/10 blur-[130px] pointer-events-none rounded-full z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-semibold tracking-widest text-[#FF4141] uppercase">Specialized Design Program</span>
            <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-normal text-white leading-[1.08] tracking-tight">
              <span className="font-serif block">Master The Art</span>
              Of <span className="text-[#FF4141]">Knitwear Design</span>
            </h1>
            <p className="text-zinc-400 font-light text-sm sm:text-base max-w-xl leading-relaxed">
              Transform yarn, texture and innovation into fashion-forward collections. Learn knit construction, pattern engineering, garment development and trend forecasting from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#apply" className="bg-[#FF2B2B] text-white text-xs sm:text-sm font-semibold tracking-wider px-8 py-4 text-center rounded-xl transition-all shadow-lg shadow-[#FF2B2B]/10">Apply Now</a>
              <a href="#curriculum" className="border border-zinc-800 bg-[#111111]/40 backdrop-blur-md text-zinc-200 text-xs sm:text-sm font-medium tracking-wide px-8 py-4 text-center rounded-xl transition-all">Download Curriculum</a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/[0.04] bg-zinc-950 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80"
                alt="Editorial runway knitwear look"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
