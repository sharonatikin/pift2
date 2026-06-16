export default function KnitwearSpecializations() {
  const specs = [
    { title: 'Sportswear Design', iconPath: "M20.37 4.65a2.22 2.22 0 0 0-1.64-.65H5.27a2.22 2.22 0 0 0-1.64.65A2.43 2.43 0 0 0 3 6.39v1.22c0 1.58 1 2.92 2.41 3.4L7 20h10l1.59-9c1.4-.48 2.41-1.82 2.41-3.4V6.39a2.43 2.43 0 0 0-.63-1.74z" },
    { title: 'Luxury Knitwear', iconPath: "M12 3v18M3 12h18M12 3l4 4M12 21l-4-4" },
    { title: 'Activewear Development', iconPath: "M4 10h16a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2z" },
    { title: 'Winter Fashion', iconPath: "M12 2v20M17 5L7 19M7 5l10 19M2 12h20" },
    { title: 'Lingerie & Intimate Wear', iconPath: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" },
    { title: 'Fashion Merchandising', iconPath: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white">Explore Knitwear Innovation</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {specs.map((item, idx) => (
            <div key={idx} className="bg-[#111111]/30 border border-zinc-900 rounded-2xl p-8 sm:p-10 flex flex-col justify-between items-start text-left group hover:border-zinc-800 hover:bg-[#111111]/50 transition-all min-h-[170px] shadow-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#2A080C]/50 border border-[#FF4141]/10 flex items-center justify-center mb-6 group-hover:border-[#FF4141]/30 transition-all">
                <svg className="w-5 h-5 text-[#FF4141]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.iconPath} />
                </svg>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white leading-snug tracking-wide">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
