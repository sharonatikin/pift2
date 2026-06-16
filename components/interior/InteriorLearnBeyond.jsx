import Image from 'next/image';

export default function InteriorLearnBeyond() {
  const pillars = [
    { title: 'Industry Visits' }, { title: 'Architect Interactions' }, { title: 'Design Workshops' },
    { title: 'Material Exhibitions' }, { title: 'Site Visits' }, { title: 'Professional Reviews' }
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950">
              <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80" alt="Studio Life Workspace" fill className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col space-y-8 text-left">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">Learn Beyond The Studio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="bg-[#111111]/30 border border-zinc-900 rounded-xl px-6 py-5 flex items-center min-h-[64px] sm:min-h-[72px]">
                  <span className="text-sm sm:text-base font-light text-zinc-300 tracking-wide">{pillar.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
