export default function KnitwearSkills() {
  const skills = ['Trend Forecasting', 'Technical Sketching', 'Pattern Making', 'Yarn Selection', 'Fabric Development', 'CAD Fashion Software', 'Collection Planning', 'Product Development'];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white">Skills That Shape Careers</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-[#111111]/30 border border-zinc-900 rounded-xl p-6 sm:p-8 flex items-center justify-center text-center group hover:border-zinc-800 hover:bg-[#111111]/50 transition-all shadow-xl min-h-[84px] sm:min-h-[100px]">
              <h3 className="text-sm sm:text-base font-light text-zinc-300 group-hover:text-white transition-colors tracking-wide">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
