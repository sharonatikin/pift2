export default function KnitwearEvolutionTimeline() {
  const steps = [
    { id: '01', title: 'Fashion Illustration & Design Basics', side: 'left' },
    { id: '02', title: 'Textile & Yarn Fundamentals', side: 'right' },
    { id: '03', title: 'Knit Structures & Techniques', side: 'left' },
    { id: '04', title: 'Garment Construction for Knits', side: 'right' },
    { id: '05', title: 'Digital Knitwear Development', side: 'left' },
    { id: '06', title: 'Collection Design & Portfolio', side: 'right' }
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white">Your Creative Evolution</h2>
        </div>
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#FF4141]/80" />
          <div className="block lg:hidden absolute top-0 bottom-0 left-4 w-[1px] bg-zinc-800" />
          <div className="space-y-12 lg:space-y-0 relative">
            {steps.map((step, idx) => {
              const isLeft = step.side === 'left';
              return (
                <div key={idx} className={`flex flex-col lg:flex-row items-center w-full relative ${isLeft ? 'lg:justify-start' : 'lg:justify-end'} pl-12 lg:pl-0`}>
                  <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF4141] rounded-full z-20 items-center justify-center shadow-[0_0_12px_#FF4141]">
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </div>
                  <div className="flex lg:hidden absolute top-1/2 left-4 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-700 rounded-full z-20" />
                  <div className="w-full lg:w-[44%] bg-[#111111]/30 border border-zinc-900 rounded-xl p-8 flex flex-col justify-center relative min-h-[108px] hover:border-zinc-800 hover:bg-[#111111]/50 transition-all shadow-xl">
                    <span className="text-xs font-semibold text-[#FF4141] absolute top-6 right-8">{step.id}</span>
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-white text-left tracking-wide pr-12">{step.title}</h3>
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
