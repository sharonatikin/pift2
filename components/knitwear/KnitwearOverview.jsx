import Image from 'next/image';

export default function KnitwearOverview() {
  const tags = ['Circular Knitting', 'Flat Knitting', 'Pattern Engineering', 'Yarn Development', 'Fashion Forecasting', 'Digital Knit Design'];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square rounded-[2rem] overflow-hidden border border-zinc-900 bg-zinc-950 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=700&q=80"
                alt="Studio moodboard sketches"
                fill
                className="object-cover brightness-[0.88]"
              />
            </div>
          </div>
          <div className="lg:col-span-6 text-left space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight leading-tight">
              Where Creativity <br /><span className="font-sans">Meets Structure</span>
            </h2>
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
              Knitwear Design combines creativity, technology and craftsmanship to create apparel for sportswear, casualwear, luxury fashion, winterwear and performance garments. Students learn yarn science, knit structures, garment construction and digital design techniques.
            </p>
            <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-900/60 w-full">
              {tags.map((tag, idx) => (
                <div key={idx} className="bg-[#111111]/40 border border-zinc-800/60 px-5 py-2.5 rounded-full text-xs sm:text-sm font-light text-zinc-400 hover:text-white transition-all cursor-default">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
