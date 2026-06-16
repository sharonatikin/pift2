export default function InteriorProgramDetails() {
  const data = [
    { title: 'Duration', text: '3 Years Full-time Program' }, { title: 'Eligibility', text: '10+2 or Equivalent' },
    { title: 'Studio Training', text: 'Hands-on Learning Environment' }, { title: 'Industry Projects', text: 'Real-world Experience' },
    { title: 'Software Learning', text: 'Industry-standard Tools' }, { title: 'Internships', text: 'Professional Placement' },
    { title: 'Portfolio Development', text: 'Career-ready Work' }, { title: 'Placement Support', text: 'Career Guidance' }
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-5xl font-medium text-white">Program Details</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {data.map((item, idx) => (
            <div key={idx} className="bg-[#111111]/30 border border-zinc-900 rounded-xl p-8 flex flex-col justify-center items-start text-left min-h-[140px]">
              <h3 className="text-base sm:text-lg font-medium text-[#FF4141] mb-3">{item.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
