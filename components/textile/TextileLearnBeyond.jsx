export default function TextileLearnBeyond() {
  const items = [
    { title: 'Textile Industry Visits', desc: 'Experience real textile production environments' },
    { title: 'Craft Research', desc: 'Document traditional textile techniques' },
    { title: 'Exhibitions', desc: 'Showcase your work at design exhibitions' },
    { title: 'Workshops', desc: 'Learn from industry textile experts' },
    { title: 'Industry Mentorship', desc: 'Guidance from professional textile designers' },
    { title: 'Live Projects', desc: 'Work on real commercial textile projects' }
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-5xl font-medium text-white">Learn Beyond The Studio</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#111111]/30 border border-zinc-900 rounded-2xl p-8 flex flex-col justify-center text-left shadow-2xl min-h-[140px]">
              <h3 className="text-base sm:text-lg font-medium text-zinc-200 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center max-w-3xl mx-auto mt-16 pt-6 border-t border-zinc-900/40"><p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">Industry visits, craft exposure and market-oriented learning are common elements of textile design education.</p></div>
      </div>
    </section>
  );
}
