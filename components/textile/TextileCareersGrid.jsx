export default function TextileCareersGrid() {
  const targets = ['Textile Designer', 'Print Designer', 'Surface Designer', 'Fabric Developer', 'Embroidery Designer', 'Textile Consultant', 'CAD Textile Designer', 'Home Furnishing Designer', 'Material Researcher', 'Textile Entrepreneur'];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">Careers In Textile Innovation</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
          {targets.map((title, idx) => (
            <div key={idx} className="bg-[#111111]/30 border border-zinc-900 rounded-xl p-6 flex items-center justify-center text-center shadow-lg min-h-[84px] sm:min-h-[100px]">
              <h3 className="text-sm sm:text-base font-light text-zinc-300 tracking-wide">{title}</h3>
            </div>
          ))}
        </div>
        <div className="text-center max-w-4xl mx-auto mt-16 pt-6 border-t border-zinc-900/40"><p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">Textile design graduates work across fashion, apparel, home furnishings, textile manufacturing and design industries.</p></div>
      </div>
    </section>
  );
}
