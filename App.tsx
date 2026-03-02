
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Learning from './pages/Learning';
import ProjectsResearch from './pages/ProjectsResearch';
import Partner from './pages/Partner';
import GetStarted from './pages/GetStarted';
import Disclaimer from './pages/Disclaimer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen relative">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/projects" element={<ProjectsResearch />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
