import React from 'react';
import { 
  Sparkles, BookOpen, GraduationCap, Target, Award, 
  ChevronDown, ArrowRight, CheckCircle2, User, Play 
} from 'lucide-react';

export default function FashionLanding() {
  return (
    <div className="bg-black text-white font-sans antialiased selection:bg-red-600 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <header className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 pb-12">
        {/* Red Glow Background Ambient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <p className="text-red-500 uppercase tracking-widest text-sm font-semibold">Elevate Your Craft</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none">
              Learn <span className="text-neutral-400 font-light">Faster.</span><br />
              <span className="text-red-600">Create</span><br />
              Smarter.
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Unlock industry-level secrets, master modern design frameworks, and build a world-class portfolio with mentored execution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 font-medium rounded-md transition duration-300 shadow-lg shadow-red-600/20">
                Explore Courses
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 font-medium rounded-md transition duration-300">
                Watch Trailer
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-[450px] sm:h-[550px]">
            <div className="space-y-4 pt-12">
              <div className="bg-zinc-900 rounded-lg overflow-hidden h-[65%] relative group">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80" alt="Fashion Concept" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition duration-500" />
              </div>
              <div className="bg-zinc-900 rounded-lg overflow-hidden h-[30%] relative group">
                <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80" alt="Texture Moodboard" className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition duration-500" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-zinc-900 rounded-lg overflow-hidden h-[40%] relative group">
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80" alt="Design Execution" className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 transition duration-500" />
              </div>
              <div className="bg-zinc-900 rounded-lg overflow-hidden h-[55%] relative group">
                <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80" alt="Final Showcase" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition duration-500" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. CHOOSE YOUR CREATIVE PATH (3x2 Grid on Desktop) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Choose Your <span className="text-red-600 italic font-serif">Creative</span> Path
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-zinc-950 border border-zinc-900 p-8 rounded-xl relative overflow-hidden group hover:border-red-900/50 transition duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/5 blur-xl group-hover:bg-red-900/10 transition" />
              <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 border border-zinc-800 text-red-500">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Specialization Track 0{item}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Deep dive into foundational modeling workflows, digital draping aesthetics, and commercial production dynamics.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BIG SKILLS, SHORT DURATION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-950/40 rounded-3xl border border-zinc-900/60 my-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 h-[400px] sm:h-[500px] rounded-2xl overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80" alt="Stitch Work" className="w-full h-full object-cover grayscale opacity-75 group-hover:scale-102 transition" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Big Skills. <br /><span className="text-red-600">Short</span> Duration.
              </h2>
              <p className="text-neutral-400 max-w-xl">
                We respect your timeline. Our programs are optimized into intensive modules built to deliver immediate visual and structural capability upgrades.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {['Tailoring', 'Pattern Making', 'Draping', 'Digital Illustration', 'Textile Design', 'Brand Strategy'].map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-zinc-950 border border-zinc-900 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                  <span className="text-sm font-medium text-neutral-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. YOUR LEARNING JOURNEY (Vertical Timeline Step Layout) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-44 bottom-20 w-px bg-zinc-800" />
        
        <div className="mb-16 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Your <span className="text-red-600">Learning</span> Journey
          </h2>
        </div>

        <div className="space-y-12 relative z-10">
          {[
            'Foundation Analytics',
            'Material & Architecture Exploration',
            'Advanced Prototyping Workshop',
            'Brand Infrastructure Setup',
            'Portfolio Synthesis',
            'Industry Integration Launch'
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-zinc-800 text-red-500 font-bold flex items-center justify-center mb-4 group-hover:border-red-600 transition duration-300 shadow-xl bg-black">
                {idx + 1}
              </div>
              <div className="bg-zinc-950 border border-zinc-900 px-6 py-4 rounded-lg w-full max-w-md transition duration-300 group-hover:border-zinc-800">
                <h3 className="font-semibold text-neutral-200 text-base">{step}</h3>
                <p className="text-xs text-neutral-500 mt-1">Milestone Execution & Review Track</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SKILLS YOU'LL DEVELOP (4x2 Grid Matrix) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Skills You'll <span className="text-red-600">Develop</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'Concept Ideation', 'Textile Strategy', 'Silhouette Mapping', 'Garment Anatomy',
            'Line Architecture', 'Collection Assembly', 'Costing Ecosystems', 'Runway Integration'
          ].map((skill, index) => (
            <div key={index} className="bg-zinc-950 border border-zinc-900 p-6 rounded-lg text-center hover:bg-zinc-900/40 transition duration-200">
              <CheckCircle2 className="w-5 h-5 mx-auto mb-3 text-red-600 opacity-80" />
              <span className="text-sm font-medium text-neutral-300">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. DESIGNED BY INDUSTRY EXPERTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Designed By <span className="text-red-600 font-serif italic">Atelier Masters</span> & Mentors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((mentor) => (
            <div key={mentor} className="bg-zinc-950 border border-zinc-900 p-6 rounded-xl flex gap-4 items-start">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex-shrink-0 flex items-center justify-center text-neutral-400">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-200 text-base">Master Instructor 0{mentor}</h3>
                <p className="text-xs text-red-500 mb-2 font-medium tracking-wide uppercase">Creative Director</p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Over 14+ years managing major runway collections across Milan and Paris houses.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. EXPLORE THE STUNNING FASHION BOUTIQUE (Image Gallery Showcase) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Explore the <span className="text-red-600">Stunning</span> Fashion Design Studio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[450px]">
          <div className="md:col-span-1 rounded-xl overflow-hidden bg-zinc-900 relative group h-full">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80" alt="Boutique Studio Space" className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-102 transition duration-500" />
          </div>
          <div className="md:col-span-2 grid grid-rows-2 gap-6 h-full">
            <div className="rounded-xl overflow-hidden bg-zinc-900 relative group">
              <img src="https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&w=1000&q=80" alt="Moodboard Detail" className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-102 transition duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden bg-zinc-900 relative group">
              <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80" alt="Fabric swatches" className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-102 transition duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHO IS THIS PROGRAM FOR? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Who Is This <span className="text-red-600">Program</span> For?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: 'Aspiring Designers', desc: 'Looking to set up structural fundamentals correctly right out of the gate without years of trial and error.' },
            { title: 'Industry Pivoters', desc: 'Professionals coming from graphic, architectural, or structural fields wanting execution frameworks for textiles.' },
            { title: 'Fashion Entrepreneurs', desc: 'Founders looking to launch their capsule lines who need to master technical syntax to direct manufacturing teams.' },
            { title: 'Advanced Stylists', desc: 'Creatives looking to complement styling vision with deeper technical pattern-making systems.' }
          ].map((profile, index) => (
            <div key={index} className="bg-zinc-950 border border-zinc-900 p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600/40 group-hover:bg-red-600 transition" />
              <h3 className="text-lg font-semibold text-neutral-200 mb-2">{profile.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{profile.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. LEARN. CREATE. GET CERTIFIED */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-900/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="space-y-6 relative z-10 max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Learn. Create. <br /><span className="text-red-600">Get Certified.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Every completed track grants an official verification seal linked to your digital portfolio architecture for global verification.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-zinc-950 border border-zinc-900 p-4 rounded-xl shadow-2xl relative overflow-hidden group">
          <div className="aspect-[16/10] bg-zinc-900 rounded-lg overflow-hidden relative flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" alt="Certificate Mockup" className="w-full h-full object-cover opacity-30 grayscale blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute p-8 text-center border border-zinc-800/80 bg-black/60 backdrop-blur-sm rounded-lg max-w-xs space-y-2">
              <Award className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="font-serif italic text-sm text-neutral-300">Atelier Certification Seal</h4>
              <p className="text-[10px] text-neutral-500">Verified Credentials Asset 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {[
            'What equipment is required before launching my first module?',
            'Do I get real-time feedback from studio instructors?',
            'How long do I maintain infrastructure platform access?',
            'Are there corporate installation tracks for design agencies?',
            'Can I pause mid-curriculum tier if business execution demands time?',
            'What payment models or scaling options are open?'
          ].map((question, index) => (
            <div key={index} className="bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden transition duration-200 hover:border-zinc-800">
              <button className="w-full px-6 py-5 flex items-center justify-between text-left font-medium text-neutral-300 text-sm sm:text-base">
                <span>{question}</span>
                <ChevronDown className="w-4 h-4 text-neutral-500 flex-shrink-0 ml-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 11. BOTTOM CALL TO ACTION BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-red-950 via-red-900 to-zinc-950 border border-red-900/40 p-8 sm:p-12 lg:p-16 text-center space-y-6">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10">
            Start Your <span className="italic font-serif font-light text-red-300">Fashion Journey</span> Today.
          </h2>
          <p className="text-neutral-300 max-w-xl mx-auto text-sm sm:text-base relative z-10">
            Secure your cohort slot today. Immediate acceleration modules open for booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 relative z-10">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-neutral-200 font-semibold rounded-md transition duration-200">
              Enroll Now
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white font-medium rounded-md transition duration-200">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>

      {/* 12. COMPLEX INDUSTRIAL FOOTER */}
      <footer className="border-t border-zinc-900 bg-zinc-950/40 text-xs text-neutral-500 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase">
              <div className="w-3 h-3 bg-red-600 rounded-sm" />
              ATELIER STUDIO
            </div>
            <p className="max-w-sm text-neutral-500 leading-relaxed">
              Global advanced training ecosystems specializing in modern structural design blueprints, commercialization pathways, and creative direction mastery.
            </p>
          </div>
          <div>
            <h4 className="text-neutral-300 font-medium mb-4 uppercase tracking-wider">Curriculum</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500 transition">Design Pipeline</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Pattern Mechanics</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Textile Matrix</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Brand Growth</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-neutral-300 font-medium mb-4 uppercase tracking-wider">Infrastructure</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500 transition">Studio Access</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Mentorship Matrix</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Alumni Vault</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Partner Houses</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-neutral-300 font-medium mb-4 uppercase tracking-wider">Legal & Trust</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500 transition">Verification Info</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Privacy Protocols</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Terms of Use</a></li>
              <li><a href="#" className="hover:text-red-500 transition">System Status</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Atelier Studio Inc. All design mechanics reserved worldwide.</p>
          <div className="flex gap-4 bg-zinc-950 border border-zinc-900 p-2 rounded-lg max-w-md w-full sm:w-auto">
            <input type="email" placeholder="Subscribe to Dispatch" className="bg-transparent px-3 py-2 outline-none text-white w-full text-xs" />
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded transition">Submit</button>
          </div>
        </div>
      </footer>

    </div>
  );
}