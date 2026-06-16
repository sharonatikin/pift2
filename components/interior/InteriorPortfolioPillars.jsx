export default function InteriorPortfolioPillars() {
  const items = ['Concept Boards', 'Floor Plans', '3D Renders', 'Material Boards', 'Technical Drawings', 'Presentation Decks', 'Professional Projects'];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">Build A Portfolio That Opens Doors</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {items.map((title, idx) => (
            <div key={idx} className="bg-[#111111]/30 border border-zinc-900 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-xl min-h-[160px]">
              <div className="w-8 h-8 rounded-full bg-[#2A080C] mb-4 flex items-center justify-center text-xs text-[#FF4141] font-bold">✓</div>
              <h3 className="text-sm sm:text-base font-medium text-zinc-300 tracking-wide">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
