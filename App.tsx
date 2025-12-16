import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { GetQuote } from './pages/GetQuote';
import { About } from './pages/About';
import { KVKK } from './pages/KVKK';
import { CookiePolicy } from './pages/CookiePolicy';
import { Careers } from './pages/Careers';
import { Volunteering } from './pages/Volunteering';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder for missing pages
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
    <h1 className="text-4xl font-bold text-slate-900 mb-4">{title}</h1>
    <p className="text-slate-600">Bu sayfa yapım aşamasındadır.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/projeler" element={<Projects />} />
          <Route path="/projeler/:slug" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/teklif-al" element={<GetQuote />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/kvkk" element={<KVKK />} />
          <Route path="/cerez-politikasi" element={<CookiePolicy />} />
          <Route path="/bize-katil" element={<Careers />} />
          <Route path="/gonulluluk" element={<Volunteering />} />
          
          {/* Placeholders */}
          <Route path="/kariyer" element={<Careers />} /> {/* Redirect duplicate to same comp */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;