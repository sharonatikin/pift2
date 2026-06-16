export default function TextileSpecializations() {
  const specs = [
    { title: 'Textile Innovation', desc: 'Push boundaries with experimental materials and techniques' },
    { title: 'Fashion Industry', desc: 'Create fabrics that define fashion collections' },
    { title: 'Home Furnishing Design', desc: 'Design textiles for interiors and lifestyle' },
    { title: 'Surface Design', desc: 'Master pattern, print and surface techniques' },
    { title: 'Sustainable Materials', desc: 'Innovate with eco-conscious textile solutions' },
    { title: 'Global Textile Careers', desc: 'Access opportunities worldwide in textile design' }
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">Create The Fabrics Behind Every Great Design</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {specs.map((spec, idx) => (
            <div key={idx} className="bg-[#111111]/30 border border-zinc-900 rounded-xl p-8 flex flex-col justify-start text-left min-h-[140px] shadow-2xl">
              <h3 className="text-base sm:text-lg font-medium text-zinc-200 mb-2">{spec.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">{spec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
