
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Online Courses', path: '/learning' },
    { name: 'Projects & Research', path: '/projects' },
    { name: 'Partner', path: '/partner' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white border-b-2 border-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-900 flex items-center justify-center transform -rotate-3">
                 <span className="text-orange-500 font-bold text-2xl">₿</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none tracking-tighter text-slate-900 uppercase">DGA</span>
                <span className="text-[8px] font-bold text-orange-600 tracking-[0.2em] uppercase whitespace-nowrap">Sovereign Health</span>
              </div>
            </Link>
          </div>
          
          {/* Static Navigation Bar - No Hamburger */}
          <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar">
            <div className="flex items-center space-x-4 sm:space-x-8 whitespace-nowrap">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[9px] sm:text-[11px] font-bold uppercase tracking-widest transition-all hover:text-orange-600 pb-1 border-b-2 ${
                    isActive(link.path) ? 'border-orange-600 text-slate-900' : 'border-transparent text-slate-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              to="/get-started"
              className="hidden sm:block bg-orange-600 text-white px-6 py-2.5 text-[11px] uppercase tracking-widest font-bold hover:bg-slate-900 transition-all shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
