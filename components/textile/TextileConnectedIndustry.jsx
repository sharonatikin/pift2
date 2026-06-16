export default function TextileConnectedIndustry() {
  const tracks = ['Fashion Brands', 'Textile Mills', 'Export Houses', 'Home Furnishing', 'Design Studios', 'Fabric Manufacturers'];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12"><h2 className="text-2xl sm:text-4xl font-medium text-white">Connected To Industry</h2></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
          {tracks.map((title, idx) => (
            <div key={idx} className="bg-[#111111]/30 border border-zinc-900 rounded-xl p-6 flex items-center justify-center text-center min-h-[90px] sm:min-h-[110px]">
              <h3 className="text-xs sm:text-sm font-normal text-zinc-400 tracking-widest uppercase leading-snug">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
