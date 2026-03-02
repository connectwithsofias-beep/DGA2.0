
import React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const testimonials = [
    {
      quote: "Bitcoin has the ability to help align us with truth and, as such, provides a lens through which we can inspect ourselves and make new connections to become healthier.",
      author: "Emma",
      role: "DGA Co-Founder"
    },
    {
      quote: "Learning the principles that govern Bitcoin—‘Don’t trust, verify,’ and ‘Proof of work’—provides individuals with the tools to take agency over their own health.",
      author: "Andrew",
      role: "DGA Co-Founder"
    },
    {
      quote: "Bitcoin operates as a decentralized medium, creating accessibility for individuals to empower themselves through the global, real-time exchange of ideas, skills, and paradigms.",
      author: "Sofia",
      role: "Student Developer"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-2 border-slate-900 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex items-center space-x-2 bg-slate-900 text-orange-500 px-4 py-1.5 font-bold text-[10px] uppercase tracking-[0.4em]">
              <span>Established est. block 831,479</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 leading-[0.85] tracking-tighter uppercase">
              Where <br/>
              <span className="text-orange-600 italic">Bitcoin</span><br/>
              Meets Health
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl font-medium leading-relaxed">
              Digital Grad Academy is an educational hub preparing learners to build sovereign healthcare solutions using Bitcoin and decentralized systems.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
               <Link to="/learning" className="bg-slate-900 text-white px-8 py-4 font-bold uppercase text-[11px] tracking-widest hover:bg-orange-600 transition-all shadow-[6px_6px_0px_0px_rgba(234,88,12,1)]">
                 Online Courses
               </Link>
               <Link to="/projects" className="border-2 border-slate-900 px-8 py-4 font-bold uppercase text-[11px] tracking-widest hover:bg-slate-50 transition-all">
                 Projects and Research
               </Link>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative animate-in fade-in slide-in-from-right-4 duration-1000">
            <div className="aspect-square border-2 border-slate-900 relative overflow-hidden bg-slate-50 flex items-center justify-center group shadow-[24px_24px_0px_0px_rgba(15,23,42,0.05)]">
              <img 
                src="https://picsum.photos/seed/dga-learning/800/800" 
                alt="Person learning on laptop" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute top-6 left-6 text-[10px] font-bold text-white uppercase tracking-widest drop-shadow-md">Sovereign<br/>Infrastructure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Brief Link Section */}
      <section className="bg-slate-50 py-20 border-b-2 border-slate-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="space-y-6">
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-600 block">Educational Brief</span>
             <a 
               href="https://www.youtube.com/clip/UgkxHPWOtEPDX8SThFBpWqCLofQ_FpShaGbB" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group inline-block"
             >
               <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter italic text-slate-900 transition-all hover:text-orange-600 group-hover:scale-[1.02] duration-300">
                 The <span className="underline decoration-orange-600 underline-offset-8">Health-Money</span> Connection
               </h2>
               <div className="mt-8 flex items-center justify-center space-x-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-px bg-slate-900"></div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Watch the Clip</span>
                  <div className="w-12 h-px bg-slate-900"></div>
               </div>
             </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white border-b-2 border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-300 border border-slate-300">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-12 flex flex-col justify-between hover:bg-orange-50 transition-all duration-300 group">
                <p className="text-lg font-medium text-slate-700 leading-relaxed italic mb-10 group-hover:text-slate-900 transition-colors">"{t.quote}"</p>
                <div>
                  <div className="w-8 h-1 bg-orange-600 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-widest">{t.author}</h4>
                  <p className="text-[9px] text-orange-600 font-bold uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Pillars Section */}
      <section className="py-0 border-b-2 border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-900">
          <Link to="/learning" className="group bg-white p-12 lg:p-24 hover:bg-orange-50 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
               <span className="text-9xl font-bold italic uppercase tracking-tighter">01</span>
            </div>
            <h3 className="text-5xl lg:text-6xl font-bold mb-8 text-slate-900 leading-none group-hover:translate-x-2 transition-transform italic uppercase tracking-tighter">Online <br/><span className="text-orange-600">Courses</span></h3>
            <p className="text-slate-600 leading-relaxed mb-10 max-w-sm font-medium italic text-lg">
              Master the Bitcoin-Health connection through community-led, open-source curricula.
            </p>
            <div className="flex items-center space-x-4 text-[11px] font-bold uppercase tracking-widest text-slate-900">
              <span className="border-b-2 border-slate-900">Explore</span>
              <svg className="w-5 h-5 group-hover:translate-x-3 transition-transform text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          </Link>

          <Link to="/projects" className="group bg-white p-12 lg:p-24 hover:bg-slate-900 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 transition-opacity">
               <span className="text-9xl font-bold italic uppercase tracking-tighter text-orange-600">02</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 group-hover:text-orange-500 mb-6 block">Action Pillar</span>
            <h3 className="text-5xl lg:text-6xl font-bold mb-8 text-slate-900 group-hover:text-white leading-none group-hover:translate-x-2 transition-transform italic uppercase tracking-tighter">Projects and <br/><span className="text-orange-600">Research</span></h3>
            <p className="text-slate-600 group-hover:text-slate-400 leading-relaxed mb-10 max-w-sm font-medium italic text-lg">
              Building technical infrastructure and peer-reviewed evidence for the sovereign era.
            </p>
            <div className="flex items-center space-x-4 text-[11px] font-bold uppercase tracking-widest text-slate-900 group-hover:text-white">
              <span className="border-b-2 border-slate-900 group-hover:border-orange-600">Enter Research</span>
              <svg className="w-5 h-5 group-hover:translate-x-3 transition-transform text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Platforms */}
      <section className="bg-slate-900 py-32 text-white border-y-[12px] border-orange-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32">
          {/* BHN Section */}
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div className="inline-block bg-orange-600 text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.4em]">Infrastructure Highlight</div>
              <h2 className="text-6xl md:text-7xl font-bold uppercase tracking-tighter leading-none italic">Bitcoin Health <br/>Network <span className="text-slate-700">/ BHN</span></h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed max-w-lg">
                The world's first directory connecting individuals with Bitcoin-aware healthcare providers. Practical sovereignty for patients and clinicians.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://bitcoinhealthnetwork.com" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-10 py-5 font-bold uppercase text-[11px] tracking-widest hover:bg-orange-600 hover:text-white transition-all inline-block shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
                  Enter Network Directory
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full group">
               <div className="border-2 border-slate-700 p-8 transition-all duration-500 group-hover:bg-slate-800">
                 <div className="space-y-6 text-center">
                    <div className="text-6xl text-orange-600 font-bold tracking-tighter italic">Sovereign <br/>Health</div>
                    <div className="h-0.5 w-12 bg-slate-600 mx-auto"></div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">Directory Protocol v1.0</div>
                 </div>
               </div>
            </div>
          </div>

          {/* MedSchlr Section */}
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div className="inline-block bg-purple-600 text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.4em]">Decentralized Research</div>
              <h2 className="text-6xl md:text-7xl font-bold uppercase tracking-tighter leading-none italic">MedSchlr <br/><span className="text-slate-700">via Nostr</span></h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed max-w-lg">
                A decentralized knowledge sharing platform built on the Nostr protocol. Censorship-resistant health research for clinicians and patients.
              </p>
              <div className="bg-slate-800 border-l-4 border-purple-600 p-6 space-y-4">
                 <p className="text-xs text-slate-300 leading-relaxed">
                   To view the medschlr Nostr page in <a href="https://damus.io" target="_blank" className="text-purple-400 underline">Damus</a>, download the app and open it. In the search bar, paste the medschlr Nostr address:
                 </p>
                 <div className="bg-slate-900 p-3 overflow-x-auto">
                    <code className="text-[10px] text-purple-400 break-all font-mono font-bold">npub1l40cx7mc8cr23qamy6xhjx4gng9wmuczj2d8ertvw98w0aak9x3qyxmh7n</code>
                 </div>
                 <p className="text-[10px] text-slate-500 font-bold uppercase">Tap search, select the profile, and follow to stay updated.</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full group">
               <div className="border-2 border-slate-700 p-8 transition-all duration-500 group-hover:bg-slate-800">
                 <div className="space-y-6 text-center">
                    <div className="text-6xl text-purple-600 font-bold tracking-tighter italic">Nostr <br/>Scientific</div>
                    <div className="h-0.5 w-12 bg-slate-600 mx-auto"></div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">Knowledge Commons</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Node Notes Newsletter */}
      <section className="py-32 border-b-2 border-slate-900 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center space-y-10">
          <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold uppercase tracking-widest text-slate-900 italic leading-none">Node Notes</h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Sign up for newsletter to keep up with the latest in Bitcoin and Health</p>
          </div>
          <div className="flex border-2 border-slate-900 overflow-hidden shadow-[12px_12px_0px_0px_rgba(15,23,42,0.1)] focus-within:shadow-none transition-all">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-grow px-8 py-5 text-[11px] font-bold tracking-widest focus:outline-none uppercase placeholder:text-slate-200" 
            />
            <button className="bg-slate-900 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors">
              Join
            </button>
          </div>
        </div>
      </section>

      {/* Navigator CTA */}
      <section className="py-24 bg-slate-50 text-center border-b-2 border-slate-900">
        <div className="max-w-3xl mx-auto px-4 space-y-12">
          <h2 className="text-5xl font-bold uppercase tracking-tighter italic text-slate-900">Ready to Establish <br/><span className="text-orange-600">Sovereignty?</span></h2>
          <p className="text-slate-500 font-medium text-lg italic">Use our navigator to find your optimal entry point into the Academy ecosystem.</p>
          <Link 
            to="/get-started"
            className="inline-block bg-orange-600 text-white px-20 py-8 font-bold uppercase text-[12px] tracking-[0.5em] hover:bg-slate-900 transition-all shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] active:translate-y-2 active:shadow-none"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
