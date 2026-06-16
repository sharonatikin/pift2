import Image from 'next/image';

export default function TextileHero() {
  const bottomTags = ['3 Years Program', 'Industry Projects', 'CAD Training', 'Portfolio Development'];
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between bg-[#0A0A0A] pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.25]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1800&q=80')` }} />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div><span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase inline-block border border-white/10 bg-white/[0.02] backdrop-blur-md px-4 py-2 rounded-full">Textile Design Program</span></div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.12]">Weave Ideas. <br />Create <span className="italic font-medium text-[#FF4141]">Materials.</span></h1>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light max-w-xl">Explore fabric innovation, weaving, printing, embroidery, textile development, surface ornamentation and digital textile technologies through a practical studio-based learning experience.</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a href="#apply" className="w-full sm:w-auto bg-[#C8102E] text-white text-xs sm:text-sm font-bold tracking-widest px-8 py-4 text-center uppercase">Apply Now</a>
              <a href="#brochure" className="w-full sm:w-auto border border-zinc-700/50 bg-black/40 backdrop-blur-md text-zinc-300 text-xs sm:text-sm font-medium tracking-widest px-8 py-4 text-center uppercase">Download Brochure</a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-950 shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80" alt="Crimson Brocade Pattern Asset" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 relative z-20">
        <div className="flex flex-wrap gap-3 justify-start">
          {bottomTags.map((tag, idx) => (
            <div key={idx} className="border border-white/[0.06] bg-white/[0.02] backdrop-blur-md px-5 py-2.5 rounded-xl"><span className="text-xs font-light text-zinc-400 tracking-wide">{tag}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
