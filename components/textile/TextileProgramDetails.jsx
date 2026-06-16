export default function TextileProgramDetails() {
  const cards = [
    { title: 'Duration', text: '3 Year Program' }, { title: 'Eligibility', text: '10+2 or Equivalent' },
    { title: 'Studio Learning', text: 'Professional Studios' }, { title: 'Industry Projects', text: 'Real-World Experience' },
    { title: 'CAD Training', text: 'Digital Textile Tools' }, { title: 'Portfolio Development', text: 'Professional Portfolio' },
    { title: 'Internships', text: 'Industry Placements' }, { title: 'Placement Support', text: 'Career Guidance' }
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-5xl font-medium text-white">Program Details</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {cards.map((item, idx) => (
            <div key={idx} className="bg-[#111111]/30 border border-zinc-900 rounded-xl p-8 flex flex-col justify-center items-start text-left shadow-2xl min-h-[140px]">
              <h3 className="text-base sm:text-lg font-medium text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center max-w-3xl mx-auto mt-16 pt-6 border-t border-zinc-900/40"><p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">PIFT offers Textile Design programs in diploma, advanced diploma and degree pathways.</p></div>
      </div>
    </section>
  );
}
