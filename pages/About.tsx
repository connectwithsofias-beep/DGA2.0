
import React from 'react';

const About: React.FC = () => {
  const fullBios = [
    {
      name: "Emma",
      title: "DGA Co-Founder & Co-Education Lead",
      bio: "Emma is a Bitcoin advocate, part-time faculty at McMaster University, and co-founder of Dream Grad Academy, a thematic light-node in the My First Bitcoin Network, a global grassroots educational movement. Through her teaching and writing, she introduces Bitcoin as a tool for health sovereignty and for addressing social determinants of health. Her work centers on how Bitcoin enables individuals to reclaim sovereignty over their health and financial well-being through sound money principles and decentralized protocols like Nostr. Emma holds a Doctor of Public Health (DrPH) in Community Health from East Tennessee State University and a Master of Public Health (MPH) in Health Education and Behavioral Science from Emory University, and brings over a decade of experience across higher education, public health, healthcare, and disaster sociology."
    },
    {
      name: "Andrew",
      title: "DGA Co-Founder & Technical Lead",
      bio: "Andrew is a PhD student at Indiana University and a developer with GitCitadel for the social knowledge management system Alexandria. With a background in systems science, he explores how knowledge can maintain coherence on a decentralized internet while enabling permissionless collaboration. His research spans biology to social science, informing how decentralized protocols like Nostr can mediate knowledge sharing and social communication."
    },
    {
      name: "Qiukui",
      title: "Scientific Advisor",
      bio: "Qiukui is a research staff member at McMaster University with extensive experience in clinical research, including evidence synthesis, primary studies, and guideline development. His work has been published in high-impact journals such as The Lancet, The BMJ, JAMA Internal Medicine, and Cochrane. Formerly an associate professor and geriatrician at West China Hospital, his research focuses on translating evidence into meaningful clinical recommendations, with emerging interests in decentralized health, Bitcoin, and blockchain-enabled knowledge communication."
    }
  ];

  const foundingDevelopers = [
    { 
      name: "Sofia", 
      role: "Founding Student Developer / Builder", 
      bio: "Sofia is a Master’s student in Global Health at McMaster University with an undergraduate background in Biology and a passion for the intersection of health, technology, and equity. As a founding student and developer, she contributes to project management and the development of DGA’s digital infrastructure, supporting both operational and strategic priorities. Her work includes content creation, website development, and strengthening DGA’s web presence to enhance accessibility and engagement. She is also involved in shaping future initiatives that bridge research, policy, and digital innovation to advance global health impact."
    },
    { name: "Zaid", role: "Health Sciences student, McMaster University" },
    { name: "Kian", role: "Health Sciences student, McMaster University" }
  ];

  const studentResearchers = [
    "Jasmeen (JJ)",
    "Kelly",
    "Sarah"
  ];

  const voices = [
    {
      quote: "Bitcoin has the ability to help align us with truth and, as such, provides a lens through which we can inspect ourselves and make new connections to become healthier.",
      author: "Emma"
    },
    {
      quote: "Learning the principles that govern Bitcoin—‘Don’t trust, verify,’ and ‘Proof of work’—provides individuals with the tools to take agency over their own health.",
      author: "Andrew"
    },
    {
      quote: "Bitcoin operates as a decentralized medium, creating accessibility for individuals to empower themselves through the global, real-time exchange of ideas, skills, and paradigms.",
      author: "Sofia"
    }
  ];

  return (
    <div className="bg-white pb-32">
      {/* Header */}
      <div className="border-b-2 border-slate-900">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 leading-[0.9] tracking-tighter uppercase">About Dream Grad Academy (DGA)</h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Equipping students and professionals to discover the health-money connection and build decentralized ecosystems for a parallel future.
            </p>
          </div>
        </header>
      </div>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 uppercase tracking-tighter italic">Exploring Distributed Models</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                Healthcare systems worldwide face complex challenges: rising costs, information asymmetries, reactive models that prioritize treatment over prevention, and patients who often feel distant from decisions about their own care. While centralized institutions have achieved remarkable medical advances, they also concentrate decision-making in ways that can limit individual agency and local innovation.
              </p>
              <p>
                What if there were complementary models? What happens when communities can coordinate peer-to-peer? When individuals have greater control over their health data and resources? When local solutions can emerge without requiring institutional approval?
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 uppercase tracking-tighter italic">Our Educational Approach</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                The Dream Grad Academy explores these questions through experiential learning. We're building an educational network where students, healthcare professionals, and individuals don't just study decentralized alternatives—they design and test them.
              </p>
              <p>
                DGA integrates emerging technologies with time-tested governance principles:
              </p>
              <ul className="space-y-3 list-none">
                <li className="flex items-baseline"><span className="w-2 h-2 bg-orange-600 mr-3 shrink-0"></span><span><strong>Bitcoin</strong> as neutral infrastructure for peer-to-peer transactions</span></li>
                <li className="flex items-baseline"><span className="w-2 h-2 bg-orange-600 mr-3 shrink-0"></span><span><strong>Distributed Networks</strong> as digitally-native organizing models</span></li>
                <li className="flex items-baseline"><span className="w-2 h-2 bg-orange-600 mr-3 shrink-0"></span><span><strong>Decentralized knowledge commons</strong> (MedSchlr) for open scholarly collaboration</span></li>
                <li className="flex items-baseline"><span className="w-2 h-2 bg-orange-600 mr-3 shrink-0"></span><span><strong>Subsidiarity</strong>—empowering decisions at the most local level practical</span></li>
                <li className="flex items-baseline"><span className="w-2 h-2 bg-orange-600 mr-3 shrink-0"></span><span><strong>Participatory research</strong> where students contribute as peers</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-12 lg:p-20 border-2 border-slate-900">
          <h2 className="text-4xl font-bold text-slate-900 uppercase tracking-tighter italic mb-12">What DGA Health System Builders and Health Explorers Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed font-medium">Our programs equip learners to:</p>
              <ul className="space-y-4 list-none text-slate-700 font-bold uppercase text-xs tracking-widest">
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-orange-600 mr-3"></div>The fundamentals of how Bitcoin and health relate</li>
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-orange-600 mr-3"></div>Think of how new communications protocols such as Nostr can be integrated in healthcare</li>
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-orange-600 mr-3"></div>Design and engage in studies of peer-to-peer care coordination</li>
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-orange-600 mr-3"></div>Explore Bitcoin-enabled models for direct patient-provider relationships</li>
              </ul>
            </div>
            <div className="space-y-6">
              <ul className="space-y-4 list-none text-slate-700 font-bold uppercase text-xs tracking-widest md:mt-12">
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-orange-600 mr-3"></div>Research merchant adoption patterns and alternative wellbeing approaches</li>
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-orange-600 mr-3"></div>Contribute to open health knowledge infrastructure</li>
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-orange-600 mr-3"></div>Develop prevention-focused frameworks that expand individual choice</li>
              </ul>
              <p className="text-slate-500 italic font-medium">
                Through our 8-week Bitcoin diploma, Bitcoin & Health courses, and collaborative research projects, health system builders and health explorers gain practical experience creating decentralized systems.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 uppercase tracking-tighter italic">The Distributed Network Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              DGA operates as an educational network: a digitally-native learning community exploring what becomes possible with distributed governance. We're not opposing existing institutions—we're expanding the landscape of possibilities, demonstrating models that might complement or offer alternatives to centralized approaches.
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 uppercase tracking-tighter italic text-orange-600">Join Us</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Whether you're curious about decentralized systems, interested in Bitcoin's applications to healthcare, or committed to expanding individual agency in health decisions, DGA offers a collaborative space for learning and building.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-slate-100">
        <div className="flex flex-col md:flex-row gap-12 items-baseline mb-20">
          <h2 className="text-5xl font-bold uppercase tracking-tighter italic text-slate-900 shrink-0">The Team</h2>
          <div className="h-1 bg-slate-900 flex-grow"></div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-600">Academic & Technical Leadership</p>
        </div>

        <div className="space-y-24">
          {/* Full Bios (Emma, Andrew, Qiukui) */}
          <div className="grid grid-cols-1 gap-20">
            {fullBios.map((member, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-2 block">{member.title}</span>
                  <h3 className="text-4xl font-bold text-slate-900 uppercase tracking-tighter italic">{member.name}</h3>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contributors List */}
          <div className="grid grid-cols-1 gap-20 pt-16 border-t-2 border-slate-900">
            {/* Founding Student Developers (including Sofia with blurb) */}
            <div>
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] mb-12 text-slate-900">Founding Student Developers</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {foundingDevelopers.map((dev, idx) => (
                  <div key={idx} className={`border-l-4 border-slate-100 pl-6 group hover:border-orange-600 transition-colors ${dev.bio ? 'lg:col-span-2' : ''}`}>
                    <span className="block font-bold text-slate-900 uppercase tracking-widest text-sm">{dev.name}</span>
                    <span className="block text-[10px] font-bold text-orange-600 uppercase tracking-widest mt-1 mb-4">{dev.role}</span>
                    {dev.bio && (
                      <p className="text-base text-slate-600 leading-relaxed font-medium mt-4 max-w-4xl italic">
                        {dev.bio}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Student Researchers */}
            <div className="pt-12 border-t border-slate-100">
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] mb-8 text-slate-900">Student Researchers</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {studentResearchers.map((res, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-orange-600"></div>
                    <span className="font-bold text-slate-900 uppercase tracking-widest text-xs">{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Voices of Sovereignty (Quotes) */}
      <section className="bg-slate-900 py-32 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-baseline mb-20">
            <h2 className="text-5xl font-bold uppercase tracking-tighter italic text-white shrink-0">Voices of Sovereignty</h2>
            <div className="h-px bg-slate-700 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:gap-24">
            {voices.map((v, idx) => (
              <div key={idx} className="max-w-4xl group">
                <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-slate-300 group-hover:text-white transition-colors duration-500">
                  "{v.quote}"
                </p>
                <div className="mt-8 flex items-center space-x-4">
                  <div className="w-12 h-1 bg-orange-600"></div>
                  <span className="text-sm font-bold uppercase tracking-[0.4em] text-orange-500">— {v.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-5xl mx-auto px-4 py-24">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold uppercase text-slate-900 tracking-widest">Our Methodology</h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-4 border-b border-slate-100 pb-8">
              <h3 className="font-bold text-slate-900 uppercase text-xs tracking-[0.3em]">Curiosity to Inquiry</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">We transition simple curiosity into rigorous, academic-grade research through our projects and research.</p>
            </div>
            <div className="space-y-4 border-b border-slate-100 pb-8">
              <h3 className="font-bold text-slate-900 uppercase text-xs tracking-[0.3em]">Sovereignty First</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Our education prioritizes individual sovereignty over prescriptive logic.</p>
            </div>
          </div>
          
          <div className="pt-24 text-center space-y-8">
            <h2 className="text-3xl font-bold uppercase text-slate-900 tracking-widest italic">Node Notes</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-lg mx-auto">Stay updated with health and Bitcoin information and online program enrollment dates.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
