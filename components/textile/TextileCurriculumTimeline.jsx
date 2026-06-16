export default function TextileCurriculumTimeline() {
  const timelineData = [
    { year: 'Year 1', title: 'Foundation of Design', modules: ['Textile Fundamentals', 'Color Studies', 'Fabric Exploration'] },
    { year: 'Year 2', title: 'Weaving', modules: ['Dyeing & Printing', 'Embroidery', 'Surface Design', 'Material Development'] },
    { year: 'Year 3', title: 'Textile Innovation', modules: ['CAD Textile Design', 'Collection Development', 'Industry Projects', 'Portfolio Presentation'] }
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20"><h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">Your Textile Design Evolution</h2></div>
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#FF4141]/80" />
          <div className="block lg:hidden absolute top-0 bottom-0 left-4 w-[1px] bg-zinc-800" />
          <div className="space-y-12 lg:space-y-0 relative">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div key={idx} className={`flex flex-col lg:flex-row items-start w-full ${isEven ? 'lg:justify-end' : 'lg:justify-start'} pl-10 lg:pl-0`}>
                  <div className="w-full lg:w-[45%] bg-[#111111]/30 border border-zinc-900 rounded-2xl p-8 relative shadow-2xl">
                    <span className="text-xs font-semibold text-[#FF4141] absolute top-6 right-8">{item.year}</span>
                    <h3 className="text-xl font-medium text-white mb-5">{item.title}</h3>
                    <ul className="space-y-2.5">
                      {item.modules.map((mod, mIdx) => (
                        <li key={mIdx} className="flex items-center gap-3 text-left">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 block flex-shrink-0" />
                          <span className="text-sm font-light text-zinc-400 tracking-wide">{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
