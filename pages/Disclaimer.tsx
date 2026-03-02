
import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="bg-white pb-32">
      <div className="border-b-2 border-slate-900">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl space-y-6">
            <span className="bg-orange-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.4em]">Legal Notice</span>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 leading-[0.9] tracking-tighter uppercase">Disclaimer</h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Educational and Informational Purposes Only
            </p>
          </div>
        </header>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-24 space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter italic">Health Information Disclaimer</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
            <p>
              The content provided on Dream Grad Academy, including all courses, research materials, publications, and resources, is for educational and informational purposes only. Nothing on this website constitutes medical advice, diagnosis, treatment, or professional healthcare guidance.
            </p>
            <p>
              Dream Grad Academy does not provide medical services or healthcare recommendations. The information presented is intended to support learning and exploration of decentralized health models, sovereign healthcare concepts, and the intersection of Bitcoin and health systems.
            </p>
            <p className="font-bold text-slate-900">
              Always consult with qualified healthcare professionals before making any decisions related to your health, medical treatment, or healthcare practices. Do not disregard professional medical advice or delay seeking it because of information you have read on this website.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter italic">Financial Information Disclaimer</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
            <p>
              Content related to Bitcoin, cryptocurrency, and financial concepts is provided for educational purposes only and does not constitute financial, investment, tax, or legal advice. Dream Grad Academy is not a financial advisor, and the information presented should not be considered as recommendations to buy, sell, or hold any financial instruments.
            </p>
            <p>
              Cryptocurrency investments carry significant risk. Always conduct your own research and consult with qualified financial professionals before making investment decisions.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter italic">No Professional Relationship</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
            <p>
              Participation in Dream Grad Academy programs, accessing our resources, or engaging with our content does not create a professional-client relationship of any kind, including but not limited to doctor-patient, financial advisor-client, or attorney-client relationships.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;
