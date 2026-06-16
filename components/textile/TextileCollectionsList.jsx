import Image from 'next/image';

export default function TextileCollectionsList() {
  const images = [
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1605722243979-fe0be8158232?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1576016770956-debb63d900ef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=80'
  ];
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-5xl font-medium text-white">Student Textile Collections</h2></div>
        <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
          {images.map((url, idx) => (
            <div key={idx} className="relative aspect-[3.5/1] w-full overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 shadow-2xl group">
              <Image src={url} alt="Student Collection Showcase Slide" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-[0.85] group-hover:scale-[1.015]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
