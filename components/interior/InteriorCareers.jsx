export default function InteriorCareers() {
  const careers = ['Interior Designer', 'Space Planner', 'Furniture Designer', 'Retail Designer', 'Exhibition Designer', 'Lighting Consultant', 'Visual Merchandiser', 'Design Consultant', '3D Visualizer', 'Project Coordinator'];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">Careers That Shape Environments</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 items-stretch">
          {careers.map((title, idx) => (
            <div key={idx} className="bg-[#111111]/30 border border-zinc-900 rounded-xl p-6 flex items-center justify-center text-center min-h-[84px] sm:min-h-[100px]">
              <h3 className="text-sm sm:text-base font-light text-zinc-300 tracking-wide">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
