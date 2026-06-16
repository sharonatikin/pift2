import Image from 'next/image';

export default function TextileStudiosGrid() {
  const badges = ['Hands-On Learning', 'Industry Tools', 'Creative Research', 'Live Projects'];
  const media = [
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1605722243979-fe0be8158232?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=80'
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-5xl font-medium text-white">Learn Inside Professional <br />Textile Studios</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
          {media.map((url, idx) => (
            <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 shadow-xl">
              <Image src={url} alt="Studio Work Space Asset" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto items-stretch">
          {badges.map((badge, idx) => (
            <div key={idx} className="border border-white/[0.04] bg-white/[0.02] p-5 flex flex-col items-center justify-center rounded-xl text-center shadow-lg">
              <span className="text-xs sm:text-sm font-light text-zinc-400 tracking-wide">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
