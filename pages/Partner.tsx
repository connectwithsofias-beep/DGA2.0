
import React from 'react';

const Partner: React.FC = () => {
  return (
    <div className="bg-white pb-32">
      {/* Header */}
      <div className="border-b-2 border-slate-900">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl space-y-6">
            <span className="bg-orange-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.4em]">Collaborative Network</span>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 leading-[0.9] tracking-tighter uppercase">Partner With Us</h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              DGA invites collaboration from healthcare providers, researchers, educators, and community leaders to adaptive curriculum and build tools for clinical sovereignty. We also welcome sponsors looking to support the DGA ecosystem.
            </p>
          </div>
        </header>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-24">
        <div className="border-2 border-slate-900 p-8 md:p-16 relative bg-white">
          <div className="absolute top-0 left-0 w-full h-1 bg-orange-600"></div>
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight mb-12 text-center italic">Partnership Inquiry</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full border-b-2 border-slate-100 px-0 py-3 text-sm focus:outline-none focus:border-orange-600 font-medium" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full border-b-2 border-slate-100 px-0 py-3 text-sm focus:outline-none focus:border-orange-600 font-medium" placeholder="jane@clinic.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Organization / Current Role</label>
              <input type="text" className="w-full border-b-2 border-slate-100 px-0 py-3 text-sm focus:outline-none focus:border-orange-600 font-medium" placeholder="e.g. Medical Director" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Proposed Collaboration</label>
              <textarea className="w-full border-2 border-slate-100 p-4 text-sm focus:outline-none focus:border-orange-600 font-medium h-40 bg-slate-50" placeholder="Tell us how you'd like to work with the Academy..."></textarea>
            </div>
            <button type="submit" className="w-full bg-slate-900 text-white font-bold py-5 uppercase text-xs tracking-[0.3em] hover:bg-orange-600 transition-all">Submit Inquiry</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Partner;
