
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GetStarted: React.FC = () => {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState('');

  const nextStep = (selectedRole: string) => {
    setRole(selectedRole);
    setStep(1);
  };

  return (
    <div className="bg-white min-h-[90vh] flex flex-col items-center justify-center py-24 px-4">
      <div className="max-w-4xl w-full border-2 border-slate-900 p-8 md:p-16 relative bg-white">
        {/* Academic Accent */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-orange-600"></div>
        <div className="absolute top-0 right-0 w-24 h-4 bg-slate-900"></div>

        {step === 0 && (
          <div className="space-y-12 animate-in fade-in duration-700">
            <div className="text-center space-y-4">
               <span className="text-orange-600 font-bold text-xs uppercase tracking-[0.4em]">Guided Entry</span>
               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tighter italic">Where do you <span className="underline decoration-orange-600 underline-offset-8">stand?</span></h1>
               <p className="text-slate-500 font-medium">Select the pathway that best describes your interest today.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
              <button 
                onClick={() => nextStep('explorers')}
                className="bg-white p-10 hover:bg-orange-50 transition-all text-center group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0">📚</div>
                <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-4">Healthcare Explorers</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">Students and early-career professionals discovering decentralized health models.</p>
              </button>
              <button 
                onClick={() => nextStep('builders')}
                className="bg-white p-10 hover:bg-slate-900 group transition-all text-center"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0">🛠️</div>
                <h3 className="font-bold text-slate-900 group-hover:text-orange-600 uppercase text-xs tracking-widest mb-4">System Builders</h3>
                <p className="text-[10px] text-slate-400 group-hover:text-slate-500 font-bold uppercase tracking-widest leading-relaxed">Health professionals and researchers actively creating alternative care infrastructure.</p>
              </button>
              <button 
                onClick={() => nextStep('advocates')}
                className="bg-white p-10 hover:bg-orange-600 group transition-all text-center"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0">🛡️</div>
                <h3 className="font-bold text-slate-900 group-hover:text-white uppercase text-xs tracking-widest mb-4">Sovereignty Advocates</h3>
                <p className="text-[10px] text-slate-400 group-hover:text-white font-bold uppercase tracking-widest leading-relaxed">Individuals who are lifelong learners interested in decentralized health and wellness.</p>
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter">Your Pathway:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {role === 'explorers' && (
                <>
                  <Link to="/learning" className="p-8 border-2 border-orange-600 bg-white hover:bg-orange-50 transition-colors group">
                    <p className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-2">1-Hour Intro Course</p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Perfect for your first orientation session.</p>
                  </Link>
                  <Link to="/learning" className="p-8 border-2 border-slate-900 bg-slate-900 text-white hover:bg-orange-600 transition-colors group">
                    <p className="font-bold text-white text-sm uppercase tracking-widest mb-2">10-Week Diploma</p>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">"My First Bitcoin" diploma program.</p>
                  </Link>
                  <div className="md:col-span-2 p-8 border-2 border-slate-100 bg-slate-50 text-center space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Stay notified about next cycle</p>
                    <div className="flex max-w-md mx-auto border-2 border-slate-900 overflow-hidden">
                      <input 
                        type="email" 
                        placeholder="YOUR EMAIL" 
                        className="flex-grow px-4 py-3 text-[10px] font-bold tracking-widest focus:outline-none uppercase placeholder:text-slate-200" 
                      />
                      <button className="bg-orange-600 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all">Join the Waitlist</button>
                    </div>
                  </div>
                </>
              )}
              {role === 'builders' && (
                <>
                  <Link to="/projects" className="md:col-span-2 p-12 border-2 border-slate-900 bg-white hover:bg-slate-50 transition-colors group text-center">
                    <p className="font-bold text-slate-900 text-xl uppercase tracking-widest mb-4">Projects and Research</p>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-md mx-auto">Explore our active projects and research initiatives for health system builders.</p>
                    <div className="mt-8 inline-block bg-slate-900 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest group-hover:bg-orange-600">View Projects</div>
                  </Link>
                </>
              )}
              {role === 'advocates' && (
                <>
                  <Link to="/learning" className="p-8 border-2 border-slate-900 bg-white hover:bg-slate-50 transition-colors group">
                    <p className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-2">Online Courses</p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Discover decentralized health and wellness models.</p>
                  </Link>
                  <Link to="/about" className="p-8 border-2 border-orange-600 bg-orange-600 text-white hover:bg-slate-900 transition-colors group">
                    <p className="font-bold text-white text-sm uppercase tracking-widest mb-2">About DGA</p>
                    <p className="text-xs text-white/80 font-medium leading-relaxed">Learn about our vision for individual sovereignty.</p>
                  </Link>
                </>
              )}
            </div>
            <button onClick={() => setStep(0)} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors">&larr; Back to selection</button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in zoom-in-95 duration-500 space-y-12">
            <div className="space-y-4">
               <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter">Sovereignty Survey</h2>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">A 2-minute navigator for your academy experience.</p>
            </div>
            <div className="space-y-10">
               <div className="space-y-6">
                 <p className="font-bold text-slate-900 uppercase text-xs tracking-widest border-l-2 border-orange-600 pl-4">1. What is your primary background?</p>
                 <div className="grid grid-cols-1 gap-3">
                   {['Clinician / Healthcare Professional', 'Medical / Health Student', 'Developer / Tech Builder', 'General Enthusiast'].map(opt => (
                     <label key={opt} className="flex items-center p-5 border border-slate-100 hover:bg-slate-50 cursor-pointer transition-all group">
                       <input type="radio" name="bg" className="w-4 h-4 text-orange-600 focus:ring-slate-900 border-2" />
                       <span className="ml-4 font-bold text-xs uppercase tracking-widest text-slate-600 group-hover:text-slate-900">{opt}</span>
                     </label>
                   ))}
                 </div>
               </div>
               <div className="flex flex-col gap-4">
                 <button onClick={() => setStep(0)} className="bg-slate-900 text-white font-bold py-5 rounded-none uppercase text-xs tracking-widest hover:bg-orange-600 transition-all shadow-[6px_6px_0px_0px_rgba(234,88,12,0.3)]">Find My Pathway</button>
                 <button onClick={() => setStep(0)} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-all">Cancel & Return</button>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetStarted;
