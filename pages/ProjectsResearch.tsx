
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsResearch: React.FC = () => {
  const researchProjects = [
    {
      type: "Student-Led",
      title: "Bitcoin Merchant Adoption Study",
      desc: "Analyzing health outcomes in communities accepting sound money payments.",
      status: "Active"
    },
    {
      type: "Student-Led",
      title: "MedSchlr Perspectives Study",
      desc: "Trust, Centralization, and Decentralized Commons in Medical Sciences Publishing.",
      status: "In Progress"
    },
    {
      type: "Faculty-Led",
      title: "Practitioner Transformation",
      desc: "How monetary understanding changes clinician practice patterns longitudinal study.",
      status: "Phase 1"
    }
  ];

  return (
    <div className="bg-white pb-32">
      {/* Page Header */}
      <div className="border-b-2 border-slate-900">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl space-y-6">
            <span className="bg-orange-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.4em]">Inquiry & Action Pillar</span>
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tighter uppercase">Projects & Research</h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
              Innovating real-world solutions and building the evidence base. Where decentralized curiosity transforms into rigorous, peer-reviewed inquiry and functional tools.
            </p>
          </div>
        </header>
      </div>

      {/* 🛠️ Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row gap-12 items-baseline mb-16">
          <h2 className="text-5xl font-bold uppercase tracking-tighter italic text-slate-900 shrink-0">Projects</h2>
          <div className="h-1 bg-slate-900 flex-grow"></div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-600">Innovate Real-World Solutions</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* BHN Card */}
          <div className="border-2 border-slate-900 p-12 bg-white relative group">
            <div className="absolute top-4 right-4 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300">Tool Infrastructure</div>
            <h3 className="text-3xl font-bold text-slate-900 uppercase mb-6 italic tracking-tighter">Bitcoin Health <br/>Network (BHN)</h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              Connecting individuals with Bitcoin-accepting healthcare providers while educating professionals about sound money and health equity. Practical infrastructure for the ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://bitcoinhealthnetwork.com" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-orange-600 transition-all text-center">
                Visit Website
              </a>
            </div>
          </div>

          {/* MedSchlr Card */}
          <div className="border-2 border-slate-900 p-12 bg-slate-50 relative group">
            <div className="absolute top-4 right-4 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300">Knowledge Tool</div>
            <h3 className="text-3xl font-bold text-slate-900 uppercase mb-6 italic tracking-tighter">MedSchlr</h3>
            <p className="text-slate-600 mb-6 leading-relaxed font-medium">
              A decentralized health sciences and medical knowledge commons that allows individuals to read, write, and publish literature on health. Built on Nostr protocol for censorship resistance.
            </p>
            
            <div className="bg-white border border-slate-200 p-6 space-y-4 mb-8">
               <p className="text-[11px] text-slate-500 font-medium">
                 To view in <a href="https://damus.io" target="_blank" className="text-orange-600 underline">Damus</a>: Download app, search for the MedSchlr Nostr address, and follow:
               </p>
               <div className="bg-slate-50 p-3 border border-slate-100">
                  <code className="text-[9px] break-all font-mono font-bold text-slate-900">npub1l40cx7mc8cr23qamy6xhjx4gng9wmuczj2d8ertvw98w0aak9x3qyxmh7n</code>
               </div>
            </div>

            <a href="https://medschlr.org" target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest inline-block hover:bg-slate-900 transition-colors text-center">Visit medschlr.org</a>
          </div>
        </div>
      </section>

      {/* 🔬 Research Section */}
      <section className="bg-slate-900 py-32 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-baseline mb-20">
            <h2 className="text-5xl font-bold uppercase tracking-tighter italic text-white shrink-0">Research</h2>
            <div className="h-px bg-slate-700 flex-grow"></div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Build the Evidence Base</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border border-slate-800 p-10 space-y-6 hover:bg-slate-800 transition-all group">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-orange-500 border-b border-orange-500 pb-1 inline-block">Student-Led</span>
              <h4 className="text-2xl font-bold uppercase tracking-tight leading-tight group-hover:text-white transition-colors">Bitcoin Merchant Adoption Study</h4>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">Analyzing health outcomes in communities accepting sound money payments.</p>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Active</span>
              </div>
            </div>
            <div className="border border-slate-800 p-10 space-y-6 hover:bg-slate-800 transition-all group">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-orange-500 border-b border-orange-500 pb-1 inline-block">Student-Led</span>
              <h4 className="text-2xl font-bold uppercase tracking-tight leading-tight group-hover:text-white transition-colors">MedSchlr Perspectives Study</h4>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">Trust, Centralization, and Decentralized Commons in Medical Sciences Publishing.</p>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">In Progress</span>
              </div>
            </div>
            <div className="border border-slate-800 p-10 space-y-6 hover:bg-slate-800 transition-all group">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-orange-500 border-b border-orange-500 pb-1 inline-block">Faculty-Led</span>
              <h4 className="text-2xl font-bold uppercase tracking-tight leading-tight group-hover:text-white transition-colors">Practitioner Transformation</h4>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">Understanding how monetary knowledge changes practitioner perceptions personally and professionally.</p>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Phase 1</span>
              </div>
            </div>
          </div>

          <div className="mt-20 p-12 border-2 border-slate-800 bg-slate-800/50 backdrop-blur-sm max-w-2xl">
             <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 italic text-orange-500">Call for Researchers</h3>
             <p className="text-slate-400 text-sm leading-relaxed mb-8">
               We mentor emerging researchers in interdisciplinary methods at the intersection of economic structures and clinical outcomes.
             </p>
             <Link to="/partner" className="inline-block bg-white text-slate-900 px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all">Submit Protocol</Link>
          </div>

          <div className="mt-20 pt-12 border-t border-slate-800">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              Educational Disclaimer: All content is for informational purposes only. Not medical or financial advice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsResearch;
