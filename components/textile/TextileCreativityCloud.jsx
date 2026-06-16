export default function TextileCreativityCloud() {
  const nodes = [
    { title: 'Textile Illustration', top: '30%', left: '18%' }, { title: 'Print Design', top: '34%', left: '54%' },
    { title: 'Fabric Development', top: '42%', left: '40%' }, { title: 'Surface Ornamentation', top: '46%', left: '76%' },
    { title: 'Embroidery Design', top: '54%', left: '28%' }, { title: 'Knitting', top: '52%', left: '82%' },
    { title: 'Weaving', top: '58%', left: '62%' }, { title: 'Trend Forecasting', top: '68%', left: '22%' },
    { title: 'Dyeing Techniques', top: '64%', left: '48%' }, { title: 'Portfolio Building', top: '64%', left: '86%' },
    { title: 'Material Research', top: '69%', left: '68%' }, { title: 'CAD Textile Design', top: '74%', left: '52%' }
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative lg:min-h-[680px] flex flex-col justify-between">
      <div className="text-center mb-12"><h2 className="text-3xl sm:text-5xl font-medium text-white">Master Textile Creativity</h2></div>
      <div className="relative w-full flex flex-wrap justify-center gap-3 lg:block lg:h-[400px] max-w-7xl mx-auto px-4">
        {nodes.map((node, idx) => (
          <div key={idx} style={{ '--node-top': node.top, '--node-left': node.left }} className="lg:absolute lg:top-[var(--node-top)] lg:left-[var(--node-left)] lg:-translate-x-1/2 lg:-translate-y-1/2 z-10">
            <div className="bg-[#111111]/40 border border-zinc-800 px-5 py-3 rounded-full text-xs sm:text-sm font-light text-zinc-300 hover:text-white transition-all cursor-default shadow-md whitespace-nowrap">
              {node.title}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center max-w-2xl mx-auto mt-12 pt-4"><p className="text-xs sm:text-sm text-zinc-500 font-light">CAD-based textile design is also offered through specialized training at PIFT.</p></div>
    </section>
  );
}
