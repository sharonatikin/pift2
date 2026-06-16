import Image from 'next/image';

export default function TextileTraditionSplit() {
  const nodes = [
    { title: 'Fabric Research' }, { title: 'Craft Documentation' }, { title: 'Textile Innovation' },
    { title: 'Material Experimentation' }, { title: 'Surface Techniques' }, { title: 'Sustainable Design' }
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-4 w-full max-w-[540px] mx-auto">
            <div className="flex flex-row gap-4">
              <div className="w-1/2 aspect-square relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950"><Image src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=500&q=80" alt="Loom Stack" fill className="object-cover" /></div>
              <div className="w-1/2 aspect-square relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950"><Image src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80" alt="Yarn Stack" fill className="object-cover" /></div>
            </div>
            <div className="w-full aspect-[1.8/1] relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950"><Image src="https://images.unsplash.com/photo-1576016770956-debb63d900ef?auto=format&fit=crop&w=800&q=80" alt="Loom Detail Wide" fill className="object-cover" /></div>
          </div>
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white leading-[1.15]">Where Tradition <br />Meets Innovation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl w-full">
              {nodes.map((item, idx) => (
                <div key={idx} className="bg-[#111111]/30 border border-zinc-900 rounded-xl px-6 py-4 flex items-center min-h-[56px]"><span className="text-xs sm:text-sm font-light text-zinc-300 tracking-wide">{item.title}</span></div>
              ))}
            </div>
            <div className="pt-4 border-t border-zinc-900/60 max-w-xl"><p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">Textile education often blends traditional textile practices with modern technologies and innovation.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
