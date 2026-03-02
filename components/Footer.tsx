
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-2 border-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-900 flex items-center justify-center transform -rotate-3">
                 <span className="text-orange-500 font-bold text-xl">₿</span>
              </div>
              <span className="font-heading font-bold text-xl uppercase tracking-tighter text-slate-900">DGA</span>
            </Link>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 leading-relaxed">
              The premier educational platform at the intersection of decentralization and health.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-900 hover:text-orange-600 transition-colors uppercase font-bold text-[10px] tracking-widest">X / Twitter</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.4em] text-orange-600 mb-8">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-900">
              <li><Link to="/about" className="hover:underline underline-offset-4 decoration-orange-600">About DGA</Link></li>
              <li><Link to="/learning" className="hover:underline underline-offset-4 decoration-orange-600">Online Courses</Link></li>
              <li><Link to="/projects" className="hover:underline underline-offset-4 decoration-orange-600">Projects and Research</Link></li>
              <li><Link to="/partner" className="hover:underline underline-offset-4 decoration-orange-600">Partner</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.4em] text-orange-600 mb-8">The Ecosystem</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-900">
              {/* Ecosystem items removed as per instructions */}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.4em] text-orange-600 mb-8 underline decoration-slate-900">Node Notes</h4>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-6 leading-relaxed">Stay updated with research briefs and cohort enrollment dates.</p>
            <div className="flex border-b-2 border-slate-900">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full py-2 text-[10px] font-bold tracking-widest focus:outline-none uppercase placeholder:text-slate-200" 
              />
              <button className="text-[10px] font-bold uppercase tracking-widest text-orange-600 px-2">Join</button>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-[9px] font-bold uppercase tracking-[0.5em] text-slate-300">
          <div className="space-y-2">
            <p>© {new Date().getFullYear()} Dream Grad Academy.</p>
            <p className="normal-case tracking-normal text-slate-400">Educational Disclaimer: All content is for informational purposes only. Not medical or financial advice. <Link to="/disclaimer" className="underline hover:text-orange-600">Full Disclaimer</Link></p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-8">
            <span className="text-orange-500/50">Establish Sovereignty</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
