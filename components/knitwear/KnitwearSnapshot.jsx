export default function KnitwearSnapshot() {
  const snapshots = [
    { label: 'Duration', value: '3 Years' },
    { label: 'Eligibility', value: '10+2 Any Stream' },
    { label: 'Industry Exposure', value: 'Live Projects & Internships' },
    { label: 'Career Support', value: '100% Placement Assistance' }
  ];
  return (
    <section className="bg-[#0A0A0A] py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {snapshots.map((item, idx) => (
            <div key={idx} className="bg-[#111111]/40 border border-zinc-900 rounded-2xl p-8 flex flex-col justify-between items-start min-h-[150px] shadow-xl hover:border-zinc-800 transition-all">
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.18em] text-zinc-500 uppercase">{item.label}</span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white leading-snug tracking-wide mt-4">{item.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
