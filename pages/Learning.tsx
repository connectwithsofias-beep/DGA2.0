
import React from 'react';
import { Link } from 'react-router-dom';

const Learning: React.FC = () => {
  const courses = [
    {
      title: "1-Hour Bitcoin Intro",
      id: "intro-01",
      pathway: "Awareness",
      desc: "An essential orientation for busy professionals. Understand why sound money is the prerequisite for clinical integrity.",
      cohort: "Self-Paced"
    },
    {
      title: "My First Bitcoin Diploma",
      id: "diploma-01",
      pathway: "Foundational",
      desc: "The globally-recognized 10-week program teaching you how to think about money, freedom, and sovereignty from the ground up.",
      cohort: "Next: Mar 2024"
    },
    {
      title: "Bitcoin & Health Course",
      id: "health-01",
      pathway: "Professional",
      desc: "Discover why financial systems are social determinants of health and how Bitcoin creates new possibilities for healthcare equity.",
      cohort: "Next: Apr 2024"
    }
  ];

  return (
    <div className="bg-white pb-32">
      <div className="border-b-2 border-slate-900">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl space-y-6">
            <span className="bg-slate-900 text-orange-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.4em]">Educational Pillar</span>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 leading-[0.9] tracking-tighter uppercase">Master the Bitcoin-Health Connection</h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
              "Education that empowers rather than prescribes. We meet you where you are with open-source, community-led learning."
            </p>
          </div>
        </header>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-12">
            <div className="p-8 border-2 border-slate-900 bg-slate-50">
              <h3 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-slate-900">Who This Is For</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Open to students, early-career professionals, and community members. Accessible, practical education revealing how money shapes vitality.
              </p>
            </div>
            
            <div className="p-8 border-2 border-slate-900 bg-white">
              <h3 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-slate-900">Our Offerings</h3>
              <ul className="text-[10px] space-y-4 font-bold uppercase tracking-widest text-slate-900 mb-8">
                {courses.map(c => (
                  <li key={c.id} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 mr-2"></div>
                    <span>{c.title}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-orange-600 text-white py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all">
                Apply to Next Cycle
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {courses.map((course) => (
              <div key={course.id} className="group border-b border-slate-100 pb-12 last:border-0">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-1/4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-2 py-1">{course.pathway}</span>
                    <div className="mt-4 text-[9px] font-bold uppercase text-slate-400 tracking-widest">{course.cohort}</div>
                  </div>
                  <div className="sm:w-3/4 space-y-4">
                    <h3 className="text-3xl font-bold text-slate-900 uppercase group-hover:text-orange-600 transition-colors">{course.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">{course.desc}</p>
                    <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-900 border-b-2 border-slate-900 pb-1 group-hover:border-orange-600 transition-all">Explore</button>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-slate-900 text-white p-12 lg:p-16 space-y-8 border-r-[12px] border-orange-600">
               <h3 className="text-4xl font-bold uppercase tracking-tighter italic leading-none">Apply for next cycle</h3>
               <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
                 Registration for the next cycle is currently open for healthcare students and faculty looking to bridge the gap.
               </p>
               <button className="inline-block bg-orange-600 text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
                 Join the Waitlist
               </button>
            </div>

            <div className="pt-12 border-t border-slate-100">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                This course is for educational purposes only and does not constitute medical or financial advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learning;
